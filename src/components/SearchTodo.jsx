import React, { useEffect, useState } from "react";
import style from "../css/SearchTodo.module.css";

function SearchTodo({ TodosArray, setArray }) {
  let [searched_item, setSearched_item] = useState();
  let [itemInSearchBox, setItemInSearchBox] = useState([]);
  //find item that is entered
  let searcher = (e) => {
    setSearched_item(e.target.value.toLowerCase());
  };

  let indexPrinter = (indexy) => {
    setItemInSearchBox(
      itemInSearchBox.filter((item, index) => {
        if (item.key == indexy) {
          setArray(TodosArray.filter((obj) => obj.key != indexy));
        }
        return item.key != indexy;
      })
    );
  };

  useEffect(() => {
    setItemInSearchBox(
      TodosArray.filter((item) =>
        item.obj_data.toLowerCase().includes(searched_item)
      )
    );
  }, [searched_item]);

  return (
    <>
      <div className={style.search_box}>
        <input
          type="search"
          className={style.search_input}
          placeholder="Find Todo Here"
          onKeyUp={searcher}
          autoComplete="off"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          className={style.search_icon}
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </div>

      <div className={style.searched_content}>
        {searched_item == ""
          ? null
          : itemInSearchBox.map((item, index) => (
              <div key={item.key} className={style.list_item}>
                {item.obj_data}
                <button
                  className={style.delete_btn}
                  key={index}
                  onClick={() => indexPrinter(item.key)}
                >
                  X
                </button>
              </div>
            ))}
      </div>
    </>
  );
}

export default SearchTodo;
