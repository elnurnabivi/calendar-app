import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [events, setEvents] = useState<Event[]>([]);
  const addEvent = (event: Event) => {
    setEvents([...events, event]);
  };

  return (
    <>
      <div className="flex">
        <Sidebar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          events={events}
          // addEvent={addEvent}
        />
        <Rightbar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          events={events}
          addEvent={addEvent}
        />
      </div>
    </>
  );
}
export default App;
