import { useState } from 'react';
import './App.css';
import TextInput from "./TextInput";
import Camera from "react-snap-pic";
import NamePicker from "./NamePicker";


function App() {
  const [text, setText] = useState([]); //sets text to empty
  const[showCamera, setShowCamera] = useState(false); //initializes camera to off
  let [username, setUsername] = useState(""); //set username to empty

  //adds message to array and console.logs msg
  function sendMsg(msg){
    console.log(msg)
    setText([msg, ...text])
    }

  //clears camera and console.logs image
  function takePicture(img){
    console.log(img);
    setShowCamera(false);
  }
  console.log(text);
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">ChatApp</span> 
        <NamePicker setUsername={setUsername} />
      </header>
      <footer>
        <div className="text"> 
          {text.map((msg) => {
            return <div className="message">{msg}</div>;
          })}
          </div>
          <TextInput sendMessage={sendMsg} showCamera={()=>setShowCamera(true)}/>
          {showCamera && <Camera takePicture={takePicture}/>}
      </footer>
    </div>
  );
}

export default App;
