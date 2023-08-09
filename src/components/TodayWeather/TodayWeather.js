import { useEffect } from "react";
import { useSelector } from "react-redux";
import Timer from "components/Timer/Timer";
import React from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { getWeather } from "redux/weather/selectors";
import { getTrips } from "redux/trip/selectors";
import css from "./TodayWeather.module.scss";

const TodayWeather = () => {
  const weatherPerDay = useSelector(getWeather);
  //console.log(weatherPerDay);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const days = weatherPerDay?.days;
  const date = days && new Date(days[0]?.datetime);
  const dayOfWeek = days && daysOfWeek[date.getDay()];
  const temp = days && days[0]?.temp;
  const icon = days && days[0]?.icon;
  const iconPath = icon && require(`../../images/weather-icons/${icon}.webp`);
  const dateStart = useSelector(getTrips);
  const start =
    weatherPerDay &&
    dateStart?.find((item) => item.location === weatherPerDay.address)?.date1;

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.title}>{dayOfWeek}</h3>
        <div className={css.tempWrapper}>
          <img
            src={iconPath}
            alt={icon}
            width="100"
            height="50"
            className={css.img}
          />
          <p className={css.temp}>
            {Math.round(temp)}
            <RiCelsiusFill className={css.icon} color="#fff" size="24" />
          </p>
        </div>
        <p className={css.text}>{weatherPerDay.address}</p>
      </div>
      <Timer start={start} />
    </div>
  );
};

export default TodayWeather;
