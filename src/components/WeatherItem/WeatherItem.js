import React from "react";
import s from "./WeatherItem.module.scss";

export const WeatherItem = ({ day, tempmax, tempmin, icon }) => {
  const iconPath = require(`../../images/weather-icons/${icon}.webp`);

  return (
    <li className={s.item}>
      <p className={s.day}>{day}</p>
      <img src={iconPath} alt={icon} width="50" height="50" className={s.img} />
      <div className={s.wrapper}>
        <span className={s.temp}>{Math.round(tempmax)}</span>
        <span className={s.slash}>/</span>
        <span className={s.temp}>{Math.round(tempmin)}</span>
      </div>
    </li>
  );
};
