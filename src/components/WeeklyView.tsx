import { generateDate } from "./CalendarBox";
import Cn from "./Cn";
import dayjs from "dayjs";

interface WeeklyViewProps {
  today: any;
  selectDate: any;
  setSelectDate: any;
  events: Event[];
}
interface Event {
  eventName: string;
  selectedEmoji: string;
  eventDescription: string;
  selectedDate: string;
  startTime: string;
  endTime: string;
  selectedColor: string;
}

const WeeklyView = ({
  events,
  today,
  selectDate,
  setSelectDate,
}: WeeklyViewProps) => {
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
    <div className="">
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
            const eventsForDate = events.filter((event) =>
              dayjs(event.selectedDate).isSame(date, "day")
            );

            return (
              <div
                key={index}
                className=" grid  p-[2px] text-[12px] border border-solid border-[rgba(218, 220, 224, 0.60)] "
                style={{
                  alignContent: "space-between",
                  height: "calc((100vh - 106px)/6)",
                }}
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
                    " transition-all hover:cursor-pointer hover:bg-black hover:text-white h-[25px] w-[22px] rounded-full flex items-center justify-center m-[2px]"
                  )}
                  onClick={() => setSelectDate(date)}
                >
                  {date.date()}
                </h1>
                <div>
                  {eventsForDate.length > 0 && eventsForDate.length < 4 && (
                    <div className="flex flex-col text-left mt-2 gap-[1px] leading-[18px]">
                      {eventsForDate.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-center justify-between border border-solid border-[rgba(218, 220, 224, 0.60)] rounded-[3px]  "
                          style={{
                            backgroundColor: event.selectedColor,
                          }}
                        >
                          <div>
                            <span className="text-[8px] leading-[8px]">
                              {event.selectedEmoji} {""}
                            </span>
                            {/* <span className="truncate text-ellipsis overflow-hidden"> */}
                            {/* <span className="text-[10px] leading-[10px] font-medium">
                              {event.eventName}
                            </span> */}
                            <span
                              className={`text-[10px] leading-[10px] font-medium ${
                                event.eventName.length > 16 ? "truncate" : ""
                              }`}
                            >
                              {event.eventName.length > 16
                                ? event.eventName.substring(0, 13) + "..."
                                : event.eventName}
                            </span>
                          </div>
                          <div className="text-[10px] leading-[10px] pr-[4px]">
                            {event.startTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default WeeklyView;
