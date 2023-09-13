import { useState } from "react";
import style from "./Tarea.module.css";

export default function Tarea(props) {
  const [completed, setCompleted] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    completed ? setCompleted(false) : setCompleted(true);
  };

  return (
    <>
      <span
        onClick={handleClick}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {props.nombre}
      </span>
      <button onClick={props.onClose} className={style.boton}>
        X
      </button>
    </>
  );
}
