import { ModalForm } from "../ModalForm/ModalForm";
import s from "./CreateTrip.module.scss";

export const CreateTrip = ({ toggleModal }) => {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Create trip</h2>
        <ModalForm className={s.modal} toggleModal={toggleModal} />
      </div>{" "}
    </>
  );
};
