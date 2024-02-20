import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import dayjs, { Dayjs } from "dayjs";
import { generateDate, monthsOfYear } from "./CalendarBox";
import Cn from "./Cn";
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddEvent from "./AddEvent";

interface RightbarProps {
  currentDate: Dayjs;
  selectDate: any;
  setSelectDate: any;
}

const Rightbar = ({
  currentDate,
  selectDate,
  setSelectDate,
}: RightbarProps) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [today, setToday] = useState(currentDate);
  useEffect(() => {
    const isDifferentMonth = selectDate.month() !== today.month();

    if (isDifferentMonth) {
      setToday(selectDate);
    }
  }, [selectDate]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between p-[16px] border-l  border-solid border-[rgba(218, 220, 224, 0.60)] ">
        <div className="flex items-center">
          <span className="text-[30px] font-medium pr-[16px]">
            {monthsOfYear[today.month()]}, {today.year()}
          </span>
          <FaArrowUp
            className=" cursor-pointer w-[20px] h-[20px] hover:border-red-500 border-opacity-50 border border-solid rounded-md p-1 mr-[8px]"
            onClick={() => setToday(today.month(today.month() - 1))}
          />
          <FaArrowDown
            className=" cursor-pointer w-[20px] h-[20px] hover:border-red-500 border-opacity-50 border border-solid rounded-md p-1"
            onClick={() => setToday(today.month(today.month() + 1))}
          />
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="rounded-full bg-gray-200 flex items-center justify-center w-[32px] h-[32px]">
            <FaSearch className="color-[#333333] w-[14px] h-[14px]" />
          </div>

          <button
            className="bg-[#0C41FF] flex items-center h-[35px] p-[8px] gap-[4px] rounded-[3px] mr-[16px]"
            onClick={handleAddEvent}
          >
            <span className="text-[#fff] text-[12px]">Add event</span>
            <HiPlusCircle className="text-white w-[16px] h-[16px]" />
          </button>
          {isModalOpen && <AddEvent onClose={handleCloseModal} />}
        </div>
      </div>
      <div className="">
        <div className=" ">
          <div className="flex grid grid-cols-7 border border-solid border-[rgba(218, 220, 224, 0.60)] ">
            {daysOfWeek.map((day, index) => {
              return (
                <h1
                  key={index}
                  className=" grid place-content-center text-gray-600 p-[4px] text-[13px] font-medium"
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div
            className="w-full grid grid-cols-7 "
            style={{ height: "calc(100vh - 106px)" }}
          >
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="grid justify-start items-start p-[4px] text-[12px] border border-solid border-[rgba(218, 220, 224, 0.60)]  "
                  >
                    <h1
                      className={Cn(
                        currentMonth ? "" : "text-gray-400 ",
                        today
                          ? " text-white bg-[#0C41FF] inline-block h-[25px] w-[22px] rounded-full flex items-center justify-center "
                          : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-[#fff] "
                          : "",
                        " transition-all hover:cursor-pointer hover:bg-black hover:text-white h-[25px] w-[22px] rounded-full flex items-center justify-center "
                      )}
                      onClick={() => setSelectDate(date)}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
