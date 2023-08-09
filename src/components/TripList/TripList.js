import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { useModal } from "../hooks/useModal";
import { Modal } from "../Modal/Modal";
import { CreateTrip } from "../CreateTrip/CreateTrip";
import { getTrips, getFilter } from "redux/trip/selectors";
import { getThunkData, getThunkDataByDay } from "redux/weather/thunks";
import s from "./TripList.module.scss";

export const TripList = () => {
  const [showModal, setShowModal] = useModal(false);
  const tripList = useSelector(getTrips);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilterTrips = useCallback(() => {
    return tripList?.filter((trip) =>
      trip?.location?.toLowerCase().includes(filter?.toLowerCase()),
    );
  }, [tripList, filter]);

  useEffect(() => {
    if (getFilterTrips()?.length === 0) {
      alert("please try again with another city");
    }
  }, [getFilterTrips]);

  return (
    <div className={s.listContainer}>
      {getFilterTrips()?.length > 0 ? (
        <ul className={s.list}>
          {getFilterTrips()?.map(({ id, location, image, date1, date2 }) => (
            <li
              className={s.item}
              key={id}
              onClick={() => {
                dispatch(getThunkData({ location, date1, date2 }));
                dispatch(getThunkDataByDay({ location }));
                localStorage.setItem("trips", location, date1, date2);
              }}
            >
              <img src={image} alt={location} className={s.image} />
              <div className={s.title}>
                <p className={s.text}>{location}</p>
                <p className={s.date}>
                  {date1}-{date2}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={s.list}>
          {tripList?.map((id, location, image, date1, date2) => (
            <li
              className={s.item}
              key={id}
              onClick={() => {
                dispatch(getThunkData({ location, date1, date2 }));
                dispatch(getThunkDataByDay({ location }));
                localStorage.setItem("trips", location, date1, date2);
              }}
            >
              <img src={image} alt={location} className={s.image} />
              <div className={s.title}>
                <p className={s.text}>{location}</p>
                <p className={s.date}>
                  {date1}-{date2}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button onClick={setShowModal} className={s.button}>
        <BiPlus className={s.icon} />
        <p>Add trip</p>
      </button>
      {showModal && (
        <Modal toggleModal={setShowModal}>
          <CreateTrip toggleModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};
