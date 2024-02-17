// import CalendarBox from "./components/CalendarBox";

import dayjs from "dayjs";
import { generateDate } from "./components/CalendarBox";
import Cn from "./components/Cn";
import Celebrate from "../src/assets/celebrate.png";

function App() {
  console.log(generateDate());
  const days = ["s", "m", "t", "w", "t", "f", "s"];
  return (
    <>
      <div className=" w-[240px]">
        <div className="ml-[16px] my-[10px] text-[18px] font-medium">
          {dayjs().format("MMMM")}
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
            {generateDate().map(({ date, currentMonth, today }, index) => {
              return (
                <div key={index} className="grid place-content-center p-[4px] ">
                  <h1
                    className={Cn(
                      currentMonth ? "" : "text-gray-400 ",
                      today
                        ? " text-white bg-[#0C41FF] inline-block h-[25px] w-[22px] rounded-full flex items-center justify-center "
                        : "",
                      " transition-all hover:cursor-pointer hover:bg-black hover:text-white h-[25px] w-[22px] rounded-full flex items-center justify-center "
                    )}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            })}
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
          <div className="text-[12px] text-[#333333] font-medium">
            No upcoming events
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
