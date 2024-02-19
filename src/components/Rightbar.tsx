import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

import dayjs from "dayjs";
import { generateDate, monthsOfYear } from "./CalendarBox";
import Cn from "./Cn";
import Celebrate from "../assets/celebrate.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import { IoCalendarOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";

import { useState } from "react";

const Rightbar = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between p-[16px]">
        <span className="text-[30px] font-medium">
          {monthsOfYear[today.month()]}, {today.year()}
        </span>
        <div className="flex items-center gap-[16px]">
          <div className="rounded-full bg-gray-200 flex items-center justify-center w-[32px] h-[32px]">
            <FaSearch
              style={{ color: "#333333", width: "17px", height: "17px" }}
            />
          </div>

          <button className="bg-[#0C41FF] flex items-center h-[35px] p-[8px] gap-[4px] rounded-[3px] mr-[16px]">
            <span className="text-[#fff] text-[12px]">Add event</span>
            <HiPlusCircle
              style={{ color: "#fff", width: "16px", height: "16px" }}
            />
          </button>
        </div>
      </div>
      <div className="">
        <div className=" ">
          <div className="flex grid grid-cols-7 border border-solid border-[rgba(218, 220, 224, 0.60)] ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className=" grid place-content-center text-gray-600 p-[4px]"
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div
            className="w-full grid grid-cols-7 "
            style={{ height: "calc(100vh - 103px)" }}
          >
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="grid place-content-center p-[4px] border border-solid border-[rgba(218, 220, 224, 0.60)]  "
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
