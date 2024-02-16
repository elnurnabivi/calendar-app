// import CalendarBox from "./components/CalendarBox";

import dayjs from "dayjs";
import { generateDate } from "./components/CalendarBox";
import Cn from "./components/Cn";

function App() {
  console.log(generateDate());
  const days = ["s", "m", "t", "w", "t", "f", "s"];
  return (
    <>
      <div className="w-[232px] h-[198px]">
        <div>{dayjs().format("MMMM")}</div>
        <div className="flex grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 grid place-content-center text-gray-600 "
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
              <div
                key={index}
                className="grid place-content-center p-[9px] text-[#000000]"
              >
                <h1
                  className={Cn(
                    currentMonth ? "" : "text-gray-400",
                    today
                      ? " text-white bg-[#0C41FF] inline-block h-[25px] w-[22px] rounded-full flex items-center justify-center "
                      : ""
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
}

export default App;
