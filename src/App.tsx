// import CalendarBox from "./components/CalendarBox";

import { generateDate } from "./components/CalendarBox";

function App() {
  console.log(generateDate());
  return (
    <>
      <div className="flex flex-col flex-wrap sm:mt-10 mt-6 text-red-600 text-[40px]">
        <span>Test1</span>
        <span>Test1</span>
        {/* <CalendarBox /> */}
      </div>
    </>
  );
}

export default App;
