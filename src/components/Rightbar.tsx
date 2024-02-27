import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import RightbarHeader from "./RightbarHeader";
import WeeklyView from "./WeeklyView";

interface RightbarProps {
  currentDate: Dayjs;
  selectDate: any;
  setSelectDate: any;
  events: Event[];
  addEvent: (event: Event) => void;
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

const Rightbar = ({
  currentDate,
  selectDate,
  setSelectDate,
  events,
  addEvent,
}: RightbarProps) => {
  const [today, setToday] = useState(currentDate);
  useEffect(() => {
    const isDifferentMonth = selectDate.month() !== today.month();

    if (isDifferentMonth) {
      setToday(selectDate);
    }
  }, [selectDate]);

  return (
    <div className="flex flex-col w-full">
      <RightbarHeader today={today} setToday={setToday} addEvent={addEvent} />
      <WeeklyView
        today={today}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        events={events}
      />
    </div>
  );
};

export default Rightbar;
