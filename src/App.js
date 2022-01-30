import { useState } from 'react';
import './App.css';
import TextInput from "./TextInput";

function App() {
  const [text, setText] = useState([]);
  function sendMsg(msg){
    console.log(msg)
    setText([msg, ...text])
    }
  console.log(text);
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">ChatApp</span>
      </header>
      <footer>
        <div className="text"> 
          {text.map((msg) => {
            return <div className="message">{msg}</div>;
          })}
          </div>
          <TextInput sendMessage={sendMsg} />
      </footer>
    </div>
  );
}

export default App;
