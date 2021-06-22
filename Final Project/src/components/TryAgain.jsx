import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const TryAgain = ({ score, question }) => {
  const [IsAgain, setIsAgain] = useState(false);
  const popupRef = useRef(null);

  const tryagain = () => {
    IsAgain === false ? setIsAgain(true) : setIsAgain(false);
  };
  const history = useHistory();

  const changeRoute = (page) => history.push(page);
  const addLocalstorige = () => {
    let arr = JSON.parse(localStorage.getItem("myArray")) || [];
    var date = new Date();
    var string = date.toLocaleTimeString([], {
      day: "numeric",
      year: "numeric",
      month: "numeric",
      hour12: false,
    });

    arr.push({
      time: string,

      scoree: score,
      question_lengh: question.length,
    });

    let sorted = arr.sort((a, b) => {
      return b.scoree - a.scoree === 0
        ? -(new Date(a.time).getTime() - new Date(b.time).getTime())
        : b.scoree - a.scoree;
    });
    console.log(sorted);
    localStorage.setItem("myArray", JSON.stringify(sorted));
  };

  useEffect(() => {
    const IsOutsideClick = (event) => {
      if (!popupRef.current?.contains(event.target) && IsAgain)
        setIsAgain(false);
    };
    document.addEventListener("click", IsOutsideClick);
    return () => {
      document.removeEventListener("click", IsOutsideClick);
    };
  });

  return (
    <div className="endQuiz">
      <div className="score">
        <p>Your score: </p>

        <p>
          {score}/{question.length}
        </p>
      </div>
      <div className="column">
        <button className="button" onClick={() => tryagain()}>
          TRY AGAIN
        </button>
        <button
          className="button"
          onClick={() => {
            addLocalstorige();
            changeRoute("/history");
          }}
        >
          SEE ATTEMPTS HISTORY
        </button>
        {IsAgain && (
          <div className="popContainer">
            <div className="pop" ref={popupRef}>
              <div> Do you want to save this attempt?</div>
              <div>
                <Button
                  outline
                  color="warning"
                  style={{ margin: "10px" }}
                  onClick={() => changeRoute("/")}
                >
                  NO
                </Button>
                <Button
                  outline
                  color="warning"
                  onClick={() => {
                    addLocalstorige();
                    changeRoute("/");
                  }}
                >
                  YES
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TryAgain;