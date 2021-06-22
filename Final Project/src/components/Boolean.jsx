import React, { useState } from "react";
import { Button, ButtonGroup, Progress } from "reactstrap";

const Boolean = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
  length,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState(null);
  const [next, setNext] = useState(false);
  const check = () => {
    if (Selected) {
      setNext(!next);
      setIsCorect(Selected === `${answer.answer}` ? "corect" : "notcorect");
    }
  };

  const qula = () => setScore(isCorect === "corect" ? score + 1 : score);

  return (
    <div>
      <Progress value={((qurrentId + 1) / questions.length) * 100}>
        {qurrentId + 1}/{questions.length}
      </Progress>
      <div className={`quiz-page ${isCorect}`}>
        <h2 className="question">{question.question}</h2>
        <div>
          <ButtonGroup className="column">
            <Button
              className="mt"
              color="warning"
              style={{ borderRadius: "7px" }}
              onClick={() => {
                setSelected("true");
              }}
              disabled={next}
            >
              true
            </Button>
            <Button
              className="mt"
              color="warning"
              style={{ borderRadius: "7px" }}
              onClick={() => {
                setSelected("false");
              }}
              disabled={next}
            >
              false
            </Button>
          </ButtonGroup>
        </div>
        <p>selected: {Selected}</p>
      </div>
      <div className="center">
        {!next ? (
          <Button
            onClick={() => {
              check();
            }}
            outline
            style={{ backgroundColor: "#ef6f6e", color: "white" }}
          >
            submit
          </Button>
        ) : (
          <Button
            onClick={() => {
              qula();
              click();
            }}
            outline
            style={{ backgroundColor: "#ef6f6e", color: "white" }}
          >
            {qurrentId + 1 === length ? <span>finsih</span> : <span>next</span>}
          </Button>
        )}
      </div>
    </div>
  );
};
export default Boolean;