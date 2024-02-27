import { generateDate } from "./CalendarBox";
import Cn from "./Cn";

const DayOfWeek = ({ today, selectDate, setSelectDate }: any) => {
  const daysOfWeek = ["s", "m", "t", "w", "t", "f", "s"];

  return (
    <div className=" ">
      <div className="flex grid grid-cols-7 ">
        {daysOfWeek.map((day, index) => {
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
              <div key={index} className="grid place-content-center p-[4px] ">
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
  );
};

export default DayOfWeek;
