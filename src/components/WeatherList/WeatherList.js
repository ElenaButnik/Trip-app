import { useSelector } from "react-redux";
import { getTrips } from "redux/weather/selectors";
import { WeatherItem } from "components/WeatherItem/WeatherItem";
import s from "./WeatherList.module.scss";

export const WeatherList = () => {
  const weatherByCityandDates = useSelector(getTrips);
  const data = weatherByCityandDates.days;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className={s.container}>
      <h3 className={s.title}>Week</h3>
      <ul className={s.list}>
        {data?.map(({ datetime, tempmax, tempmin, datetimeEpoch, icon }) => {
          const date = new Date(datetime);
          const day = daysOfWeek[date.getDay()];

          return (
            <WeatherItem
              key={datetimeEpoch}
              day={day}
              tempmax={tempmax}
              tempmin={tempmin}
              icon={icon}
              datetimeEpoch={datetimeEpoch}
            />
          );
        })}
      </ul>
    </div>
  );
};
