import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ContextList from "./ContextList";
const History = () => {
  const history = useHistory();
  const [local, setLocal] = useState([]);
  const changeRoute = () => history.push("/");

  useEffect(() => {
    let arr = localStorage.getItem("myArray");
    arr = JSON.parse(arr);
    setLocal(arr);
  }, []);
  const removeItemFromStorage = (item) => {
    let arr = localStorage.getItem("myArray");
    arr = JSON.parse(arr);
    setLocal(arr.filter((list) => list.time !== item));
    localStorage.clear();
    localStorage.setItem(
      "myArray",
      JSON.stringify(arr.filter((list) => list.time !== item))
    );
  };

  return (
    <div className="home-page">
      <table>
        <thead>
          <tr className="head">
            <th className="id">#</th>
            <th>date</th>
            <th className="scor">score</th>
          </tr>
        </thead>

        <tbody>
          {local &&
            local.map((item, idx) => (
              <ContextList
                key={idx}
                id={idx + 1}
                time={item.time}
                score={item.scoree}
                question_lengh={item.question_lengh}
                removeItemFromStorage={removeItemFromStorage}
              />
            ))}
        </tbody>
      </table>
      <button onClick={changeRoute} className="button">
        GO HOME
      </button>
    </div>
  );
};
export default History;