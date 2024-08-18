import React, { useEffect, useState } from "react";
import style from "../css/TodoInput.module.css";
import ShowTodo from "./ShowTodo";

import SearchTodo from "./SearchTodo";
export default function TodoInput() {
  // input kae liye ak todo varible
  let [Todo, setTodo] = useState();

  // array for storing todos
  let [Todos, setTodos] = useState(() => {
    let todo_list = localStorage.getItem("Todo_list");
    return todo_list !== null ? JSON.parse(todo_list) : [];
  });

  useEffect(() => {
    localStorage.setItem("Todo_list", JSON.stringify(Todos));
  }, [Todo, Todos]);

  // stops the website when form is sumbited and add todo to the array if todo has element
  let handleSumbit = (e) => {
    e.preventDefault();
    if (Todo !== "") {
      let todo = {
        key: uuid.v4(),
        obj_data: Todo,
      };
      setTodos([...Todos, todo]);
      setTodo("");
    }
  };

  //change the value of todo variblfe when the value of input change
  let handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className={style.input_box}>
        <form onSubmit={handleSumbit} className={style.form_box}>
          <input
            className={style.input_area}
            type="text"
            placeholder="Enter Your Todo Here"
            value={Todo}
            onChange={handleChange}
          />
          <button className={style.done_btn}>Done</button>
        </form>
      </div>
      <SearchTodo TodosArray={Todos} setArray={setTodos} />
      <ShowTodo TodosArray={Todos} setArray={setTodos} />
    </>
  );
}
