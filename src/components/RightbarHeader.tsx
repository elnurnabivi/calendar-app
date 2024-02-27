import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { useState } from "react";
import { generateDate, monthsOfYear } from "./CalendarBox";
import AddEvent from "./AddEvent";

interface RightbarHeaderProps {
  addEvent: (event: Event) => void;
  today: any;
  setToday: any;
}

const RightbarHeader = ({ today, setToday, addEvent }: RightbarHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between p-[16px] border-l  border-solid border-[rgba(218, 220, 224, 0.60)] ">
      <div className="flex items-center">
        <span className="text-[30px] font-medium pr-[16px]">
          {monthsOfYear[today.month()]}, {today.year()}
        </span>
        <FaArrowUp
          className=" cursor-pointer w-[20px] h-[20px] hover:border-red-500 border-opacity-50 border border-solid rounded-md p-1 mr-[8px]"
          onClick={() => setToday(today.month(today.month() - 1))}
        />
        <FaArrowDown
          className=" cursor-pointer w-[20px] h-[20px] hover:border-red-500 border-opacity-50 border border-solid rounded-md p-1"
          onClick={() => setToday(today.month(today.month() + 1))}
        />
      </div>

      <div className="flex items-center gap-[16px]">
        <div className="rounded-full bg-gray-200 flex items-center justify-center w-[32px] h-[32px]">
          <FaSearch className="color-[#333333] w-[14px] h-[14px]" />
        </div>

        <button
          className="bg-[#0C41FF] flex items-center h-[35px] p-[8px] gap-[4px] rounded-[3px] mr-[16px]"
          onClick={handleAddEvent}
        >
          <span className="text-[#fff] text-[12px]">Add event</span>
          <HiPlusCircle className="text-white w-[16px] h-[16px]" />
        </button>
        {isModalOpen && (
          <AddEvent addEvent={addEvent} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default RightbarHeader;
