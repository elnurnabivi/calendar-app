import dayjs from "dayjs";
import React from "react";

// const CalendarBox = () => {
//   const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
//     const firstDateofMonth = dayjs().year(year).month(month).startOf("month");
//     const lastDateofMonth = dayjs().year(year).month(month).endOf("month");
//     return [firstDateofMonth, lastDateofMonth];
//   };
//   const dates = generateDate();
//   return <div>{dates[0].format("YYYY-MM-DD")}</div>;
// };

// export default CalendarBox;

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateofMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateofMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  //create prefix date
  for (let i = 0; i < firstDateofMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateofMonth.day(i) });
  }

  //generate current date
  for (let i = firstDateofMonth.date(); i <= lastDateofMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateofMonth.date(i),
      today:
        firstDateofMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  //create suffix date
  const remaining = 42 - arrayOfDate.length;
  for (
    let i = lastDateofMonth.date() + 1;
    i <= lastDateofMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({ currentMonth: false, date: lastDateofMonth.date(i) });
  }
  return arrayOfDate;
};
