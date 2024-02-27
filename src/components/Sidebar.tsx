import dayjs, { Dayjs } from "dayjs";
import { generateDate, monthsOfYear } from "./CalendarBox";
import { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import DayOfWeek from "./DayOfWeek";
import UpcomingEvents from "./UpcomingEvents";
import EventsForToday from "./EventsForToday";
import EventsForTomorrow from "./EventsForTomorrow";
import AllEvents from "./AllEvents";

interface SidebarProps {
  currentDate: Dayjs;
  selectDate: any;
  setSelectDate: any;
  events: Event[];
  // addEvent: (event: Event) => void;
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

const Sidebar = ({
  currentDate,
  selectDate,
  setSelectDate,
  events,
}: // addEvent,
SidebarProps) => {
  console.log(generateDate());
  const [today, setToday] = useState(currentDate);

  useEffect(() => {
    const isDifferentMonth = selectDate.month() !== today.month();

    if (isDifferentMonth) {
      setToday(selectDate);
    }
  }, [selectDate]);

  return (
    <div className="flex flex-col m-[12px]">
      <div className=" w-[240px] mb-[8px]">
        <CalendarHeader
          today={today}
          setToday={setToday}
          currentDate={currentDate}
          monthsOfYear={monthsOfYear}
        />
        <DayOfWeek
          today={today}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
      </div>
      <div className="pl-[8px] w-[240px]">
        <UpcomingEvents
          events={events}
          selectDate={selectDate}
          currentDate={currentDate}
        />
        <EventsForToday events={events} today={today} />
        <EventsForTomorrow events={events} />
        <AllEvents events={events} />
      </div>
    </div>
  );
};

export default Sidebar;
