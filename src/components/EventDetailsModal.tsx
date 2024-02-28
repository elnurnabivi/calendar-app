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
      <div className="modal-content bg-white w-full max-w-[500px]  max-h-[400px] rounded-md p-8 relative">
        <h2>{event.eventName}</h2>
        <p>{event.eventDescription}</p>
        <p>Date: {event.selectedDate}</p>
        <p>Time: {event.endTime}</p>
        <button onClick={onComplete} className="bg-red-500 text-white">
          Complete
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
