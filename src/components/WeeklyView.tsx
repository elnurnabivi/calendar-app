import { generateDate } from "./CalendarBox";
import Cn from "./Cn";
import React, { useState } from "react";
import dayjs from "dayjs";
import EventDetailsModal from "./EventDetailsModal";
import AdditionalEventsModal from "./AdditionalEventsModal";

interface WeeklyViewProps {
  today: any;
  selectDate: any;
  setSelectDate: any;
  events: Event[];
  deleteEvent: (eventName: Event) => void;
}

interface Event {
  eventName: string;
  selectedEmoji: string;
  eventDescription: string;
  selectedDate: string;
  endTime: string;
  selectedColor: string;
}

const WeeklyView: React.FC<WeeklyViewProps> = ({
  events,
  today,
  selectDate,
  setSelectDate,
  deleteEvent,
}) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showAdditionalEventsModal, setShowAdditionalEventsModal] =
    useState(false);
  const [additionalEvents, setAdditionalEvents] = useState<Event[]>([]);

  const openDetailsModal = (event: Event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
  };

  const openAdditionalEventsModal = (eventsForDate: Event[]) => {
    setAdditionalEvents(eventsForDate);
    setShowAdditionalEventsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const closeAdditionalEventsModal = () => {
    setShowAdditionalEventsModal(false);
  };

  const handleCompleteEvent = () => {
    if (selectedEvent) {
      deleteEvent(selectedEvent);
      closeDetailsModal();
    }
  };

  return (
    <div>
      <div className="flex grid grid-cols-7 border border-solid border-[rgba(218, 220, 224, 0.60)]">
        {daysOfWeek.map((day, index) => (
          <h1
            key={index}
            className="grid place-content-center text-gray-600 p-[4px] text-[13px] font-medium"
          >
            {day}
          </h1>
        ))}
      </div>
      <div
        className="w-full grid grid-cols-7"
        style={{ height: "calc(100vh - 106px)" }}
      >
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            const eventsForDate = events.filter((event) =>
              dayjs(event.selectedDate).isSame(date, "day")
            );

            const initialEventsToShow = eventsForDate.slice(0, 2); // Show first two events initially

            return (
              <div
                key={index}
                className="grid p-[2px] text-[12px] border border-solid border-[rgba(218, 220, 224, 0.60)]"
                style={{
                  alignContent: "space-between",
                  height: "calc((100vh - 106px)/6)",
                }}
              >
                <h1
                  className={Cn(
                    currentMonth ? "" : "text-gray-400",
                    today
                      ? "text-white bg-[#0C41FF] inline-block h-[25px] w-[22px] rounded-full flex items-center justify-center"
                      : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "text-white bg-black "
                      : "",
                    "transition-all hover:cursor-pointer hover:bg-black hover:text-white h-[25px] w-[22px] rounded-full flex items-center justify-center m-[2px]"
                  )}
                  onClick={() => setSelectDate(date)}
                >
                  {date.date()}
                </h1>
                <div>
                  {initialEventsToShow.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex items-center justify-between border border-solid border-[rgba(218, 220, 224, 0.60)] rounded-[3px]"
                      style={{
                        backgroundColor: event.selectedColor,
                      }}
                      onClick={() => openDetailsModal(event)}
                    >
                      <div>
                        <span className="text-[8px] leading-[8px]">
                          {event.selectedEmoji}{" "}
                        </span>
                        <span
                          className={`text-[10px] leading-[10px] font-medium ${
                            event.eventName.length > 16 ? "truncate" : ""
                          }`}
                        >
                          {event.eventName.length > 16
                            ? event.eventName.substring(0, 13) + "..."
                            : event.eventName}
                        </span>
                      </div>
                      <div className="text-[10px] leading-[10px] pr-[4px]">
                        {event.endTime}
                      </div>
                    </div>
                  ))}
                  {eventsForDate.length > 2 && (
                    <button
                      onClick={() => openAdditionalEventsModal(eventsForDate)}
                      className="text-blue-500 mt-2"
                    >
                      +{eventsForDate.length - 2} more
                    </button>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
      {showDetailsModal && selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={closeDetailsModal}
          onComplete={handleCompleteEvent}
        />
      )}
      {showAdditionalEventsModal && additionalEvents.length > 0 && (
        <AdditionalEventsModal
          events={additionalEvents}
          onClose={closeAdditionalEventsModal}
          selectDate={selectDate}
        />
      )}
    </div>
  );
};

export default WeeklyView;
