import { useEffect, useRef } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import s from "./Calendar.module.scss";

export const CalendarForm = ({
  calendarStart,
  setCalendarStart,
  calendarEnd,
  setCalendarEnd,
  openStart,
  setOpenStart,
  openEnd,
  setOpenEnd,
}) => {
  const refStart = useRef(null);
  const refEnd = useRef(null);

  useEffect(() => {
    setCalendarStart("Select date");
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutsideStart, true);
  }, []);

  useEffect(() => {
    setCalendarEnd("Select date");
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutsideEnd, true);
  }, []);

  useEffect(() => {
    if (calendarStart > calendarEnd) {
      setCalendarEnd(calendarStart);
      alert("please enter a valid date");
    }
  }, [calendarStart, calendarEnd, setCalendarEnd, setCalendarStart]);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpenStart(false);
      setOpenEnd(false);
    }
  };

  const hideOnClickOutsideStart = (e) => {
    e.preventDefault();
    if (refStart.current && !refStart.current.contains(e.target)) {
      setOpenStart(false);
    }
  };
  const hideOnClickOutsideEnd = (e) => {
    e.preventDefault();
    if (refEnd.current && !refEnd.current.contains(e.target)) {
      setOpenEnd(false);
    }
  };

  const handleSelectStart = (date) => {
    setCalendarStart(format(date, "yyyy/MM/dd"));
  };

  const handleSelectEnd = (date) => {
    setCalendarEnd(format(date, "yyyy/MM/dd"));
  };

  return (
    <>
      <div className={s.calendarWrap}>
        <div ref={refStart}>
          {openStart && (
            <Calendar
              date={new Date()}
              onChange={handleSelectStart}
              className={s.calendarElement}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 15)}
            />
          )}{" "}
        </div>
      </div>
      <div className={s.calendarWrap}>
        <div ref={refEnd}>
          {openEnd && (
            <Calendar
              date={addDays(new Date(), 15)}
              onChange={handleSelectEnd}
              className={s.calendarElement}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 15)}
            />
          )}{" "}
        </div>
      </div>
    </>
  );
};
