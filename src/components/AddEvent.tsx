import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  eventName: string;
  eventDescription: string;
  selectedDate: string;
  startTime: string;
  endTime: string;
  selectedEmoji: string;
  selectedColorSame: string;
};

const AddEvent = ({ onClose }: any) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const emojis = ["🔔", "💡", "🧑🏻‍💻", "🏝️", "✈️", "🏃🏻", "💰", "🩷"];
  const [selectedColor, setSelectedColor] = useState("");

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

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
      className="modal fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75"
    >
      <div className="modal-content bg-white w-full max-w-[400px] h-full max-h-[400px] rounded-md p-4">
        <input
          {...register("eventName", {
            required: "Title is reqired",
          })}
          type="text"
          placeholder="Add title"
          className="mb-4 w-full border border-gray-300 rounded-md p-2"
        />
        {errors.eventName && (
          <div className="text-red-500">{errors.eventName.message}</div>
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
            className="mr-4 w-full border border-gray-300 rounded-md p-2"
          />
          <input
            {...register("startTime")}
            type="time"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <span className="mx-2">-</span>
          <input
            {...register("endTime")}
            type="time"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div></div>
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
          <select
            {...register("selectedColorSame")}
            onChange={handleColorChange}
            className="w-48 border border-gray-300 rounded-md p-2"
            style={{ backgroundColor: selectedColor }}
          >
            <option value="" className="bg-white">
              Select color
            </option>
            {colors.map((color) => (
              <option
                key={color}
                value={color}
                style={{ backgroundColor: color }}
              ></option>
            ))}
          </select>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-4 text-gray-500">
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            // onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isSubmitting ? "Adding..." : "Create Event"}
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
