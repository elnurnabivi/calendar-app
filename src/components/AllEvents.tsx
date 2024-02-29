import { FcCalendar } from "react-icons/fc";
import EventDetailsModal from "./EventDetailsModal"; // Importing EventDetailsModal
import { useState } from "react";

interface AllEventsProps {
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

const AllEvents = ({ events, deleteEvent }: AllEventsProps) => {
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
        <div className="text-[16px] text-[#333333] font-medium">All events</div>
      </div>
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <div
              className="flex justify-between m-[4px]"
              onClick={() => openDetailsModal(event)} // Open details modal on click
              style={{ cursor: "pointer" }} // Change cursor to pointer on hover
            >
              <div>
                <span className="pr-[2px] ">{event.selectedEmoji}</span>
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
          </div>
        ))}
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

export default AllEvents;
