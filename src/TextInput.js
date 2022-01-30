import "./TextInput.css";
import { useState } from "react";

function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
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