import Tarea from "../Tarea/Tarea";
import { useState } from "react";
import style from "./ListaTareas.module.css";

export default function ListaTareas() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAgregarTarea = (event) => {
    event.preventDefault();

    setTareas([...tareas, input]);
    setInput("");
  };

  const onClose = (nombre) => {
    setTareas(tareas.filter((tarea) => tarea !== nombre));
  };

  return (
    <>
      <div className={style.container}>
        <h2>Lista de tareas</h2>

        <input
          className={style.inputTask}
          type="text"
          placeholder="Que quieres agregar"
          value={input}
          onChange={handleInput}
        />

        <button className={style.boton} onClick={handleAgregarTarea}>
          Agregar
        </button>
        <div className={style.lista}>
          {tareas.map(
            (tarea, index) =>
              tarea && (
                <div>
                  <ul>
                    <li>
                      <Tarea
                        nombre={tarea}
                        key={index}
                        onClose={() => onClose(tarea)}
                      />
                      <hr />
                    </li>
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
