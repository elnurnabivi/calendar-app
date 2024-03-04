import dayjs from "dayjs";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { CustomEvent } from "./types";

function App() {
  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (event: CustomEvent) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventToDelete: CustomEvent) => {
    setEvents(events.filter((event) => event !== eventToDelete));
  };

  return (
    <>
      <div className="flex">
        <Sidebar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          events={events}
          deleteEvent={deleteEvent}
          // addEvent={addEvent}
        />
        <Rightbar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          events={events}
          addEvent={addEvent}
          deleteEvent={deleteEvent}
        />
      </div>
    </>
  );
}
export default App;
