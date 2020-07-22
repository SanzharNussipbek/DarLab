import React, { useState } from 'react';
import './App.css';
import { Hello } from "./components/hello/hello"

function App() {
  const [clicked, setClicked] = useState<Boolean>();
  const [name, setName] = useState<String>();
  const [nameChange, setNameChange] = useState<Boolean>();
  const [log, setLog] = useState<String>("Log in");
  const [username, setUserName] = useState<String>("Sanzhar");

  const btnClickLoginHandler = (val: boolean) => { 
    console.log("Log in clicked") 
    setClicked(val);
    setLog(log === "Log in" ? "Log out" : "Log in")
  }

  const btnClickNameHandler = () => { 
    console.log("Change name clicked") 
    setName(username);
    setNameChange(true);
  }

  // Not working
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log("Value: " + e.target.value)
    setUserName(e.target.value)
    setNameChange(false)
  }

  // Code block for input form
  const inputHandler = <form action="submit" className="inputForm">
                        <input type="text" className="inputField" onSubmit = { handleChange }>
                        </input><button className="btn input-btn">Change</button>
                      </form>

  return (
    <div className="App">
      
      <div className="App-wrapper">
      
        { clicked && username ? <Hello name={ username } picture = { "https://via.placeholder.com/200x200.png" } link = {"#"}/> : null }
        
        <button className="btn App-login-btn" onClick = {() => btnClickLoginHandler(!clicked)}>{ username ? log : "Log in" }</button>
        
        { nameChange ? inputHandler : <button className="btn App-login-btn" onClick = { btnClickNameHandler }>Change name</button>}
      
      </div>
    
    </div>
  );
}

export default App;
