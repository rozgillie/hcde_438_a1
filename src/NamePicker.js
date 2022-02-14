
   
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

function NamePicker(props) {
  const [name, setName] = useState(""); //sets name to be empty
  const [showInput, setShowInput] = useState(false); //default input to be false

  //sets username after input and sets showing input to be false
  function ok() {
    props.setUsername(name);
    setShowInput(false);
  }

  if (showInput) {
    return (
      <div className="name-picker">
        <input
          className="name-picker-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button className="name-picker-button" onClick={ok}>
          ok
        </button>
      </div>
    );
  }
  return (
    <div className="name-picker">
      <span className="name-picker-name">{name || "Set Username:"}</span>
      <FiEdit size="24" onClick={() => setShowInput(true)} />
    </div>
  );
}

export default NamePicker;