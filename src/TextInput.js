import "./TextInput.css";
import { useState } from "react";
import { FiCamera } from 'react-icons/fi';


function TextInput(props) {
  const [text, setText] = useState(""); //sets text to empty

  //resets test to be blank after message is sent
  function send() {
    props.sendMessage(text);
    setText("");
  }

  // allow user to press enter to input data
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
      <button onClick={props.showCamera} style ={{left:10, right:'auto'}}>
        <FiCamera style={{height:15, width:15}}/>
      </button>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />

      <button className="send" onClick={send}>
        Send
      </button>
      
    </footer>
  );
}

export default TextInput;