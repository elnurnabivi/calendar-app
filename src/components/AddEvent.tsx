import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiPlusCircle } from "react-icons/hi";

type FormFields = {
  eventName: string;
  eventDescription: string;
  selectedDate: string;
  startTime: string;
  endTime: string;
  selectedEmoji: string;
  selectedColorSame: string;
};

const AddEvent = ({ onClose, addEvent }: any) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const emojis = ["🔔", "💡", "🧑🏻‍💻", "🏝️", "✈️", "🏃🏻", "💰", "🩷"];

  const colors = [
    "#FFFFFF",
    "#BDFFDB",
    "#FDD",
    "#BFC6FF",
    "#A384FF",
    "#FFEBB7",
    "#00008B",
    "#FF0000",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  //   const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedColor(event.target.value);
  //   };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addEvent({
        selectedEmoji: data.selectedEmoji,
        eventName: data.eventName,
        eventDescription: data.eventDescription,
        selectedDate: data.selectedDate,
        startTime: data.startTime,
        endTime: data.endTime,
        selectedColorSame: data.selectedColorSame,
      });
      onClose();
      //   throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Fill all the required fields",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 text-[12px]"
    >
      <div className="modal-content bg-white w-full max-w-[500px]  max-h-[400px] rounded-md p-8 relative">
        <input
          {...register("eventName", {
            required: "Title is required",
          })}
          type="text"
          placeholder="Add title"
          className="mb-4 w-full border border-gray-300 rounded-md p-2 font-medium text-[16px]"
        />
        {errors.eventName && (
          <div className="text-red-500 mb-[8px]">
            {errors.eventName.message}
          </div>
        )}
        <textarea
          {...register("eventDescription")}
          placeholder="Event Description"
          className="mb-4 w-full border border-gray-300 rounded-md p-2"
        />
        <div className="flex mb-4">
          <input
            {...register("selectedDate", {
              required: "Choose a day",
            })}
            type="date"
            className="mr-16 w-2/5 border border-gray-300 rounded-md p-2"
          />

          <input
            {...register("startTime")}
            type="time"
            className="flex-1 border border-gray-300 rounded-md p-2"
          />
          <span className="mx-2 my-4"></span>
          <input
            {...register("endTime")}
            type="time"
            className="flex-1 border border-gray-300 rounded-md p-2"
          />
        </div>
        {errors.selectedDate && (
          <div className="text-red-500 mb-[8px]">
            {errors.selectedDate.message}
          </div>
        )}
        <div className="flex items-center mb-4">
          <select
            {...register("selectedEmoji")}
            className="w-48 border border-gray-300 rounded-md p-2"
          >
            <option value="">Select emoji</option>
            {emojis.map((emoji) => (
              <option key={emoji} value={emoji} className="text-[16px]">
                {emoji}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex gap-[4px]">
            {colors.map((color, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  value={color}
                  checked={selectedColor === color}
                  className="sr-only"
                  {...register("selectedColorSame")}
                />
                <div
                  className={`w-[24px] h-[24px] rounded-full cursor-pointer ${
                    selectedColor === color
                      ? "border-[4px] border-[#0C41FF]"
                      : ""
                  }`}
                  style={{ backgroundColor: color, boxSizing: "content-box" }}
                  onClick={() => handleColorChange(color)}
                ></div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-4 text-gray-500">
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            // onClick={handleSubmit}
            className="bg-[#0C41FF] text-white flex items-center h-[35px] p-[8px] gap-[4px] rounded-[3px]"
          >
            {isSubmitting ? (
              "Adding..."
            ) : (
              <>
                <span>Create event</span>
                <HiPlusCircle className="text-white w-[16px] h-[16px]" />
              </>
            )}
          </button>
        </div>

        {/* {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )} */}
      </div>
    </form>
  );
};

export default AddEvent;
