import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineDateRange } from "react-icons/md";
import { ArrCities } from "mockData/CityList";
import { CalendarForm } from "../Calendar/Calendar";
import { addTrip } from "redux/trip/actions";
import s from "./ModalForm.module.scss";

export const ModalForm = ({ toggleModal }) => {
  const [calendarStart, setCalendarStart] = useState("");
  const [calendarEnd, setCalendarEnd] = useState("");
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [city, setCity] = useState("Please select a city");
  const [validForm, setValidForm] = useState(false);
  const dispatch = useDispatch();
  const newTrip = ArrCities.filter((item) => item.name === city);

  useEffect(() => {
    if (
      city !== "Please select a city" &&
      calendarStart !== "Select date" &&
      calendarEnd !== "Select date"
    ) {
      return setValidForm(true);
    } else return setValidForm(false);
  }, [city, calendarStart, calendarEnd]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const reset = () => {
    setCalendarStart("Select date");
    setCalendarEnd("Select date");
    setCity("Please select a city");
  };

  const addNewTrip = {
    id: uuidv4(),
    location: city,
    image: newTrip[0]?.imageUrl,
    date1: calendarStart,
    date2: calendarEnd,
  };

  const handleKeyDown = (keyPress) => {
    if (keyPress.keyCode === 13) {
      dispatch(addTrip(addNewTrip));
      toggleModal();
    }
  };

  const onClick = () => {
    dispatch(addTrip(addNewTrip));
    toggleModal();
  };

  return (
    <>
      <CalendarForm
        calendarStart={calendarStart}
        setCalendarStart={setCalendarStart}
        calendarEnd={calendarEnd}
        setCalendarEnd={setCalendarEnd}
        openStart={openStart}
        setOpenStart={setOpenStart}
        openEnd={openEnd}
        setOpenEnd={setOpenEnd}
      />{" "}
      <div className={s.formContainer}>
        <label htmlFor="city" className={s.label}>
          <span className={s.icon}>*</span>City
        </label>
        <select
          name="city"
          id="city"
          className={s.select}
          onChange={(e) => setCity(e.target.value)}
          value={city}
          style={{ color: city !== "Please select a city" && "black" }}
        >
          <option className={s.option} disabled hidden defaultValue>
            Please select a city
          </option>
          {ArrCities.map((select) => (
            <option key={select.id} /*value={select.id}*/>{select.name}</option>
          ))}
        </select>
      </div>
      <div className={s.formContainer}>
        <label htmlFor="start" className={s.label}>
          <span className={s.icon}>*</span>Start date
        </label>
        <div className={s.inputField}>
          <input
            className={s.input}
            id="start"
            name="start"
            readOnly
            value={calendarStart}
            onClick={() => setOpenStart((openStart) => !openStart)}
            style={{ color: calendarStart !== "Select date" && "black" }}
          />
          <MdOutlineDateRange
            className={s.iconDate}
            onClick={() => setOpenStart((openStart) => !openStart)}
          />
        </div>{" "}
      </div>
      <div className={s.formContainer}>
        <label htmlFor="end" className={s.label}>
          <span className={s.icon}>*</span>End date
        </label>
        <div className={s.inputField}>
          <input
            className={s.input}
            id="end"
            name="end"
            value={calendarEnd}
            readOnly
            onClick={() => setOpenEnd((openEnd) => !openEnd)}
            style={{ color: calendarEnd !== "Select date" && "black" }}
          />
          <MdOutlineDateRange
            className={s.iconDate}
            onClick={() => setOpenEnd((openEnd) => !openEnd)}
          />
        </div>{" "}
      </div>
      <div className={s.btnContainer}>
        <button onClick={reset} className={s.btn}>
          Cancel
        </button>
        <button
          type="submit"
          disabled={!validForm}
          className={s.btn}
          onClick={onClick}
        >
          Save
        </button>
      </div>
    </>
  );
};
