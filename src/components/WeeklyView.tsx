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
  // const numColumns = daysOfWeek.length;
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
            // const eventsForDate = events.find((event) =>
            //   dayjs(event.selectedDate).isSame(date, "day")
            // );

            const eventsForDate = events.filter((event) =>
              dayjs(event.selectedDate).isSame(date, "day")
            );
            // const containerWidth = `calc(100% / 7)`;

            return (
              <div
                key={index}
                className=" grid  p-[4px] text-[12px] border border-solid border-[rgba(218, 220, 224, 0.60)] "
                style={{ alignContent: "space-between" }}
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
                  {/* {eventForDate ? eventForDate : date.date()} */}
                </h1>
                {/* <div style={{ width: containerWidth }}> */}
                <div>
                  {eventsForDate.length > 0 && (
                    <div className="flex flex-col text-left mt-2 gap-1">
                      {/* Loop through each event for the date */}
                      {eventsForDate.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="pr-[36px] py-[4px]"
                          // style={{ color: event.selectedColor }}
                          style={{
                            backgroundColor: event.selectedColor,
                            // width: "100%", // Ensure full width
                            // boxSizing: "border-box",
                          }}
                          // style={{
                          //   backgroundColor: event.selectedColor,
                          //   // width: "200%",
                          //   padding: "2px 4px",
                          //   width: "100%", // Ensures full width
                          //   maxWidth: "100%",
                          //   boxSizing: "border-box",
                          //   whiteSpace: "nowrap", // Prevents wrapping
                          //   textOverflow: "ellipsis",
                          //   // flex: "1",
                          // }}
                        >
                          <span className="text-[10px] font-bold">
                            {event.selectedEmoji} {""}
                          </span>
                          {/* <span className="truncate text-ellipsis overflow-hidden"> */}
                          <span>{event.eventName}</span>
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
