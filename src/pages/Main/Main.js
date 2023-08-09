import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "components/Search/Search";
import { TripList } from "components/TripList/TripList";
import { WeatherList } from "components/WeatherList/WeatherList";
import { Context } from "../../index";
import TodayWeather from "components/TodayWeather/TodayWeather";
import { Button } from "components/Button/Button";

import s from "./Main.module.scss";

const Main = () => {
  const { auth } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.leftContainer}>
        <h1 className={s.title}>
          Weather <span className={s.text}>forecast</span>
        </h1>
        <Search />
        <TripList />
        <WeatherList />
      </div>

      <div className={s.rightContainer}>
        <Button
          onClick={() => auth.signOut() && navigate("/login")}
          style={{
            marginTop: "20px",
            marginRight: "auto",
            marginBottom: "100px",
          }}
        >
          Log out
        </Button>
        <TodayWeather />
      </div>
    </div>
  );
};
export default Main;
