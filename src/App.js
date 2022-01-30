import { useState } from 'react';
import './App.css';
import TextInput from "./TextInput";
import Message from "./Message";

function App() {
  const [text, setText] = useState([]);
  function sendMsg(text){
    const msg = {
      text, time: Date.now(), user: "Evan",};
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
          {text.map((message) => {
            return <Message {...message} />;
          })}
          </div>
          <TextInput sendMessage={sendMsg} />
      </footer>
    </div>
  );
}

export default App;
