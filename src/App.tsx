import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <>
      <div className="flex">
        <Sidebar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
        <Rightbar
          currentDate={currentDate}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
      </div>
    </>
  );
}
export default App;
