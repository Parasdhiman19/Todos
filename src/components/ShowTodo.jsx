import React from "react";
import style from "../css/ShowTodo.module.css";

function ShowTodo({ TodosArray, setArray }) {
  // array ko print karega element remove karne kae badmae
  let array_printer = () => {
    let indexPrinter = (indexy) => {
      setArray(TodosArray.filter((item, index) => index != indexy));
    };

    return TodosArray.map((item, index) => (
      <div className={style.list_item} key={item.key}>
        {item.obj_data}
        <button
          className={style.delete_btn}
          key={index}
          onClick={() => indexPrinter(index)}
        >
          X
        </button>
      </div>
    ));
  };

  return <div className={style.Todo_show_container}>{array_printer()}</div>;
}

export default ShowTodo;
