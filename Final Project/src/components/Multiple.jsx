
import React, { useState } from "react";
import { Button, ButtonGroup, Progress } from "reactstrap";

const Multiple = ({
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
  const [Selected, setSelected] = useState([]);
  const [next, setNext] = useState(false);

  const onCheck = (selected) => {
    const index = Selected.indexOf(selected);
    index < 0 ? Selected.push(selected) : Selected.splice(index, 1);
    setSelected([...Selected]);
  };

  const check = () => {
    if (Selected.length !== 0) {
      setNext(!next);
      answer.answer.length === Selected.length &&
      Selected.every((item) => answer.answer.indexOf(item) > -1)
        ? setIsCorect("corect")
        : setIsCorect("notcorect");
    }
  };
  const qula = () => setScore(isCorect === "corect" ? score + 1 : score);

  return (
    <div>
      <Progress value={((qurrentId + 1) / questions.length) * 100}>
        {qurrentId + 1}/{questions.length}
      </Progress>
      <div className={`quiz-page ${isCorect}`}>
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <ButtonGroup className="column ">
          {question.options.map((item, idx) => (
            <Button
              className="mt"
              key={idx}
              color="warning"
              onClick={() => onCheck(idx + 1)}
              active={Selected === idx + 1}
              disabled={next}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <p>Selected: {JSON.stringify(Selected)}</p>
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
            {qurrentId + 1 === length ? <span>finish</span> : <span>next</span>}
          </Button>
        )}
      </div>
    </div>
  );
};
export default Multiple;