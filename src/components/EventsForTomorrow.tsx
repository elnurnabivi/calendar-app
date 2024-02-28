import { FcCalendar } from "react-icons/fc";
import dayjs from "dayjs";

interface EventsForTomorrowProps {
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

const EventsForTomorrow = ({ events }: EventsForTomorrowProps) => {
  const tomorrow = dayjs().add(1, "day").toDate().toDateString();

  return (
    <div className=" mb-[28px]">
      <div className="flex items-center gap-[8px]">
        <FcCalendar className="w-8 h-8 cursor-pointer" />
        <div className="text-[16px] text-[#333333] font-medium">Tomorrow</div>
      </div>
      {/* <div>Schedule for {tomorrow}</div> */}
      <div>
        {events.filter((event) => {
          const eventDate = dayjs(event.selectedDate, "YYYY-MM-DD");
          return eventDate.isSame(tomorrow, "day");
        }).length === 0 ? (
          <div className="m-[4px]">No events for tomorrow</div>
        ) : (
          events
            .filter((event) => {
              const eventDate = dayjs(event.selectedDate, "YYYY-MM-DD");
              return eventDate.isSame(tomorrow, "day");
            })
            .map((event, index) => (
              <div key={index}>
                <div className="flex justify-between m-[4px]">
                  <div>
                    <span className="pr-[2px] ">{event.selectedEmoji}</span>
                    {/* <span className="font-medium">{event.eventName}</span> */}
                    <span
                      className={`text-[10px] leading-[10px] font-medium ${
                        event.eventName.length > 27 ? "truncate" : ""
                      }`}
                    >
                      {event.eventName.length > 27
                        ? event.eventName.substring(0, 25) + "..."
                        : event.eventName}
                    </span>
                  </div>
                  <div>
                    <span>{event.startTime}</span>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default EventsForTomorrow;
