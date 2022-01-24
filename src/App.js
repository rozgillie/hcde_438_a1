import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">ChatApp</span>
      </header>
      <footer>
        <input className="text-input" placeholder="Send a Message!"/> 
        <button className="send">SEND</button>
      </footer>
    </div>
  );
}

export default App;
