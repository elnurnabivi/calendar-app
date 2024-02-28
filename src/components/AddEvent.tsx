import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiPlusCircle } from "react-icons/hi";

type FormFields = {
  eventName: string;
  eventDescription: string;
  selectedDate: string;
  // startTime: string;
  endTime: string;
  selectedEmoji: string;
  selectedColor: string;
};

const AddEvent = ({ onClose, addEvent }: any) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const emojis = ["🔔", "💡", "📚", "📊", "🏝️", "✈️", "🏃🏻", "💰", "🩷"];

  const colors = [
    "#FFFFFF",
    // "#FDD",
    "#FFEBB7",
    "#BDFFDB",
    "#DCED31",
    "#90F3FF",
    "#BFC6FF",
    "#A384FF",
    "#F4AC45",
    "#F55536",
  ];

  const [selectedColorSame, setSelectedColorSame] = useState(colors[0]);
  const [selectedEmojiSame, setSelectedEmojiSame] = useState(emojis[0]);

  //   const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedColor(event.target.value);
  //   };
  const handleColorChange = (color: string) => {
    setSelectedColorSame(color);
  };
  const handleEmojiChange = (emoji: string) => {
    setSelectedEmojiSame(emoji);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addEvent({
        selectedEmoji: data.selectedEmoji,
        eventName: data.eventName,
        eventDescription: data.eventDescription,
        selectedDate: data.selectedDate,
        // startTime: data.startTime,
        endTime: data.endTime,
        selectedColor: data.selectedColor,
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
        <div className=" mb-4">
          <label>Deadline:</label>
          <div className="flex mt-[4px]">
            <input
              {...register("selectedDate", {
                required: "Choose a day",
              })}
              type="date"
              className="mr-16 w-3/5 border border-gray-300 rounded-md p-2"
            />

            {/* <input
              {...register("startTime")}
              type="time"
              className="flex-1 border border-gray-300 rounded-md p-2"
            /> */}
            <span className="mx-2 my-4"></span>
            <input
              {...register("endTime")}
              type="time"
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {errors.selectedDate && (
          <div className="text-red-500 mb-[8px]">
            {errors.selectedDate.message}
          </div>
        )}

        <div className="flex flex-col items-left mb-4">
          <label>Select emoji:</label>
          <div className="flex">
            {emojis.map((emoji, index) => (
              <label key={index} className="flex items-center">
                <input
                  key={selectedEmojiSame}
                  value={selectedEmojiSame}
                  type="radio"
                  id={emoji}
                  checked={selectedEmojiSame === emoji}
                  style={{ display: "none" }}
                  {...register("selectedEmoji")}
                  //   onChange={() => handleEmojiChange(emoji)}
                />
                <div
                  className={` text-[18px] size-[28px]  rounded-full cursor-pointer box-content flex items-center justify-center ${
                    selectedEmojiSame === emoji
                      ? "text-[20px] border-[2px] border-[#0C41FF] opacity-100 "
                      : "opacity-70"
                  }`}
                  //   style={{ boxSizing: "content-addEvent" }} // Adjust font size for emoji
                  onClick={() => handleEmojiChange(emoji)}
                >
                  {emoji}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-left mb-4">
          <label className="" htmlFor="color">
            Select color:
          </label>
          <div className="flex gap-[8px]">
            {colors.map((color, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  value={color}
                  id="color"
                  checked={selectedColorSame === color}
                  className="sr-only"
                  {...register("selectedColor")}
                />
                <div
                  className={`size-[20px] rounded-full cursor-pointer box-content ${
                    selectedColorSame === color
                      ? "size-[23px] border-[2px] border-[#0C41FF]"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
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
