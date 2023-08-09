import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { BiSearch } from "react-icons/bi";
import { getFilter } from "redux/trip/selectors";
import { filterValue } from "redux/trip/actions";
import s from "./Search.module.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = useCallback(
    (e) => {
      dispatch(filterValue(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <form>
      <div className={s.inputContainer}>
        <div className={s.inputField}>
          <BiSearch className={s.icon} />
          <input
            className={s.input}
            id="search"
            name="search"
            type="text"
            min={8}
            max={40}
            onChange={changeFilter}
            value={value}
            placeholder="Search your trip"
          />
        </div>
      </div>
    </form>
  );
};
