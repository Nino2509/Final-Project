import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [local, setLocal] = useState([null]);
  const [isTrue, setIsTrue] = useState(false);
  const changeRoute = (route) => history.push(route);

  useEffect(() => {
    const getLatestScore = () => {
      let arr = JSON.parse(localStorage.getItem("myArray"));
      if (arr) {
        arr.sort(
          (a, b) => -(new Date(a.time).getTime() - new Date(b.time).getTime())
        );
        setLocal(arr);
        arr ? setIsTrue(true) : setIsTrue(false);
      }
    };
    getLatestScore();
  }, []);

  return (
    <div className="home-page">
      <div className="buttons">
        <button className="button" onClick={() => changeRoute("/quiz")}>
          START
        </button>
        <button className="button" onClick={() => changeRoute("/history")}>
          HISTORY
        </button>
      </div>
      {isTrue && local.length !== 0 && (
        <div className="latest">
          score: {local[0].scoree} /{local[0].question_lengh} | {local[0].time}
        </div>
      )}
    </div>
  );
};
export default Home;