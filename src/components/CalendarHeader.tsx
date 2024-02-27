import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const CalendarHeader = ({
  today,
  setToday,
  monthsOfYear,
  currentDate,
}: any) => {
  return (
    <div className="flex justify-between items-center">
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
  );
};
export default CalendarHeader;
