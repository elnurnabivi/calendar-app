import { generateDate } from "./CalendarBox";
import Cn from "./Cn";

interface WeeklyViewProps {
  today: any;
  selectDate: any;
  setSelectDate: any;
}

const WeeklyView = ({ today, selectDate, setSelectDate }: WeeklyViewProps) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
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
  );
};

export default WeeklyView;
