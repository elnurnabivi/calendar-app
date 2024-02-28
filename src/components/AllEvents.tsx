import { FcCalendar } from "react-icons/fc";
interface AllEventsProps {
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

const AllEvents = ({ events }: AllEventsProps) => {
  return (
    <div className=" mb-[28px]">
      <div className="flex items-center gap-[8px]">
        <FcCalendar className="w-8 h-8 cursor-pointer" />
        <div className="text-[16px] text-[#333333] font-medium">All events</div>
      </div>
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <div className="flex justify-between m-[4px] ">
              <div>
                <span className="pr-[2px] ">{event.selectedEmoji}</span>
                {/* <span className={`text-${event.selectedColor}`}> */}
                {/* <span style={{ color: event.selectedColor }}> */}
                {/* <span className="font-medium">{event.eventName}</span> */}
                <span
                  className={`text-[10px] leading-[10px] font-medium ${
                    event.eventName.length > 23 ? "truncate" : ""
                  }`}
                >
                  {event.eventName.length > 23
                    ? event.eventName.substring(0, 20) + "..."
                    : event.eventName}
                </span>
              </div>
              <div>
                <span>{event.selectedDate}</span>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
