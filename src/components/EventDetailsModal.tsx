import { FaCheck } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { CgDetailsMore } from "react-icons/cg";

import { IoCalendarOutline } from "react-icons/io5";

interface EventDetailsModalProps {
  event: Event;
  onClose: () => void;
  onComplete: () => void;
}

interface Event {
  eventName: string;
  selectedEmoji: string;
  eventDescription: string;
  selectedDate: string;
  endTime: string;
  selectedColor: string;
}

const EventDetailsModal = ({
  event,
  onClose,
  onComplete,
}: EventDetailsModalProps) => {
  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 text-[12px]">
      <div className="modal-content bg-white  w-full max-w-[500px]  max-h-[600px] rounded-md p-8 relative">
        <div className=" flex items-center mb-[16px] gap-[16px]">
          <div
            className="h-[18px] w-[18px]"
            style={{ backgroundColor: event.selectedColor }}
          ></div>
          <h2 className="font-semibold text-[16px] flex items-center max-w-[420px]">
            {event.eventName}
            {event.selectedEmoji}
          </h2>
        </div>

        <div className="flex items-center mb-[8px]  gap-[16px]">
          <div>
            <CgDetailsMore className="text-[#0C41FF] w-[18px] h-[18px]" />
          </div>
          <p className="flex text-[12px] max-w-[420px]">
            {event.eventDescription}
          </p>
        </div>

        <div className="flex items-center mb-[8px] text-[12px] gap-[16px]">
          <IoCalendarOutline className="text-[#0C41FF] w-[16px] h-[16px]" />
          {event.selectedDate}
        </div>
        {event.endTime === "" ? (
          ""
        ) : (
          <div className="flex items-center  text-[12px] gap-[16px]">
            <GoClock className="text-[#0C41FF] w-[16px] h-[16px]" />
            {event.endTime}
          </div>
        )}

        <div className="flex gap-[8px] items-center mt-[16px]">
          <button
            onClick={onComplete}
            className="bg-[#F0F4FF] hover:bg-[#E7E9FC] border hover:border-[#ADBFF5] text-[#385BCC] text-[12px] text-semibold flex items-center justify-center  py-[3px] px-[7px] gap-[4px] rounded-[3px]"
          >
            <FaCheck />
            Complete task
          </button>
          <button
            onClick={onClose}
            className="border content-box border-[#fff] hover:border-[#ADBFF5] py-[3px] px-[7px] text-semibold rounded-[3px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
