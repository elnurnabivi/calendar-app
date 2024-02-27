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
      />
    </div>
  );
};

export default Rightbar;
