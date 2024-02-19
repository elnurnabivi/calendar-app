import dayjs from "dayjs";
import { generateDate, monthsOfYear } from "./CalendarBox";
import Cn from "./Cn";
import Celebrate from "../assets/celebrate.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import { IoCalendarOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";

import { useState } from "react";

const Sidebar = () => {
  console.log(generateDate());
  const days = ["s", "m", "t", "w", "t", "f", "s"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex flex-col">
      <div className=" w-[240px]">
        <div className="flex justify-between items-center">
          {/* <div className="ml-[12px] my-[10px] text-[18px] font-medium">
            {dayjs().format("MMMM")}
          </div> */}
          <div className="ml-[12px] my-[10px] text-[16px] font-medium">
            {monthsOfYear[today.month()]}, {today.year()}
          </div>
          <div className="flex items-center gap-1 mr-[4px]">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            <span
              className="text-[12px] cursor-pointer"
              onClick={() => setToday(currentDate)}
            >
              Today
            </span>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() + 1))}
            />
          </div>
        </div>

        <div className=" ">
          <div className="flex grid grid-cols-7 ">
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
          <div className="w-full grid grid-cols-7">
            {/* <CalendarBox /> */}
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="grid place-content-center p-[4px] "
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
      <div className="pl-[16px] w-[240px]">
        <div className="  my-[10px] text-[18px] font-medium">
          Upcoming events
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Celebrate}
            className="h-[45px] w-[45px] mt-[33px] mb-[10px]"
          />
          <div className="text-[12px] text-[#333333] font-medium mb-[28px]">
            No upcoming events
          </div>
        </div>

        {selectDate.format("YYYY-MM-DD") ===
        currentDate.format("YYYY-MM-DD") ? (
          ""
        ) : (
          <div className="mb-[28px] ">
            <div className="flex items-center gap-[8px]">
              <FcCalendar className="w-8 h-8 cursor-pointer" />

              <div className="text-[16px] text-[#333333] font-medium">
                {selectDate.toDate().toDateString()}
              </div>
            </div>
            <div>Test</div>
          </div>
        )}

        <div className=" mb-[28px]">
          <div className="flex items-center gap-[8px]">
            <FcCalendar className="w-8 h-8 cursor-pointer" />
            <div className="text-[16px] text-[#333333] font-medium">Today</div>
          </div>
          <div>Schedule for {today.toDate().toDateString()}</div>
          <div>Test</div>
        </div>
        <div className=" mb-[28px]">
          <div className="flex items-center gap-[8px]">
            <FcCalendar className="w-8 h-8 cursor-pointer" />
            <div className="text-[16px] text-[#333333] font-medium">
              Tomorrow
            </div>
          </div>
          <div>Schedule for {today.toDate().toDateString()}</div>
          <div>Test</div>
        </div>
        <div className=" mb-[28px]">
          <div className="flex items-center gap-[8px]">
            <FcCalendar className="w-8 h-8 cursor-pointer" />
            <div className="text-[16px] text-[#333333] font-medium">
              All events
            </div>
          </div>
          <div>Test</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
