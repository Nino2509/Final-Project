import React, { useRef, useState } from "react";
import CustomMenu from "./CustomMenu";
const ContextList = ({
  id,
  time,
  score,
  removeItemFromStorage,
  question_lengh,
}) => {
  const listItemRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <tr
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen(e);
      }}
    >
      <td>{id}</td>
      <td>{time}</td>
      <td>
        {score}/{question_lengh}
      </td>

      <CustomMenu
        listItemRef={listItemRef}
        id={id}
        time={time}
        open={isOpen}
        removeItemFromStorage={removeItemFromStorage}
      />
    </tr>
  );
};
export default ContextList;