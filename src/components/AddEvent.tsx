import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  eventName: string;
  eventDescription: string;
  selectedDate: string;
  startTime: string;
  endTime: string;
  selectedEmoji: string;
};

const AddEvent = ({ onClose }: any) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // defaultValues: {
    //   eventName: "Meeting with manager",
    // },
  });

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
          //   value={eventDescription}
          placeholder="Event Description"
          className="mb-4 w-full border border-gray-300 rounded-md p-2"
        />
        <div className="flex mb-4">
          <input
            type="date"
            // value={selectedDate.toISOString().substring(0, 10)}
            // onChange={(e) => handleDateChange(new Date(e.target.value))}
            className="mr-4 w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="time"
            // value={startTime}
            // onChange={handleStartTimeChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <span className="mx-2">-</span>
          <input
            type="time"
            // value={endTime}
            // onChange={handleEndTimeChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-4">Emoji:</span>
          <select
            // value={selectedEmoji}
            // onChange={handleEmojiSelect}
            className="w-48 border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Emoji</option>
            {/* {emojis.map((emoji) => (
              <option key={emoji} value={emoji}>
                {emoji}
              </option>
            ))} */}
          </select>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-4">Color:</span>
          <select
            // value={selectedColor}
            // onChange={handleColorChange}
            className="w-48 border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Color</option>
            {/* {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))} */}
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
