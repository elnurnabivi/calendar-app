import React from "react";
import dayjs from "dayjs";
import EventDetailsModal from "./EventDetailsModal";

interface AdditionalEventsModalProps {
  events: Event[];
  onClose: () => void;
  selectDate: any;
}

interface Event {
  eventName: string;
  selectedEmoji: string;
  eventDescription: string;
  selectedDate: string;
  endTime: string;
  selectedColor: string;
}

const AdditionalEventsModal: React.FC<AdditionalEventsModalProps> = ({
  events,
  onClose,
  selectDate,
}) => {
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

  const openEventDetailsModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeEventDetailsModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white rounded-lg p-4 max-w-md w-full">
        <div className="absolute top-0 right-0 m-3">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-lg font-bold mb-2">
          All Events for{" "}
          {selectDate.toDate().toLocaleDateString("en-US", {
            month: "short",
            // day: "numeric",
            day: "2-digit",
          })}
        </h2>
        <div className="space-y-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-b pb-2 cursor-pointer"
              onClick={() => openEventDetailsModal(event)}
            >
              <div className="flex justify-between">
                <div>
                  <span className="text-sm">{event.selectedEmoji}</span>{" "}
                  <span className="font-semibold">
                    {event.eventName.length > 20
                      ? event.eventName.substring(0, 20) + "..."
                      : event.eventName}
                  </span>
                </div>
                <div className="text-sm">{event.endTime}</div>
              </div>
              <div className="text-xs text-gray-500">
                {dayjs(event.selectedDate).format("YYYY-MM-DD")}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={closeEventDetailsModal}
          onComplete={() => {}}
        />
      )}
    </div>
  );
};

export default AdditionalEventsModal;
