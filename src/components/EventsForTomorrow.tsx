import { FcCalendar } from "react-icons/fc";
import dayjs from "dayjs";
import { useState } from "react";
import EventDetailsModal from "./EventDetailsModal";

interface EventsForTomorrowProps {
  events: Event[];
  deleteEvent: (eventToDelete: Event) => void;
}
interface Event {
  eventName: string;
  selectedEmoji: string;
  eventDescription: string;
  selectedDate: string;
  endTime: string;
  selectedColor: string;
}

const EventsForTomorrow = ({ events, deleteEvent }: EventsForTomorrowProps) => {
  const tomorrow = dayjs().add(1, "day").toDate().toDateString();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const openDetailsModal = (event: Event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const handleCompleteEvent = () => {
    if (selectedEvent) {
      deleteEvent(selectedEvent);
      closeDetailsModal();
    }
  };

  return (
    <div className=" mb-[28px]">
      <div className="flex items-center gap-[8px]">
        <FcCalendar className="w-8 h-8 cursor-pointer" />
        <div className="text-[16px] text-[#333333] font-medium">Tomorrow</div>
      </div>
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
              <div
                key={index}
                onClick={() => openDetailsModal(event)} // Open details modal on click
                style={{ cursor: "pointer" }} // Change cursor to pointer on hover
              >
                <div className="flex justify-between m-[4px]">
                  <div>
                    <span className="pr-[2px] ">{event.selectedEmoji}</span>
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
                    <span>{event.endTime}</span>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
      {showDetailsModal && selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={closeDetailsModal}
          onComplete={handleCompleteEvent}
        />
      )}
    </div>
  );
};

export default EventsForTomorrow;
