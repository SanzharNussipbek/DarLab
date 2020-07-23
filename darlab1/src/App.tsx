import React, { useState } from 'react';
import './App.css';
import { Hello } from "./components/hello/hello"

function App() {
  const [clicked, setClicked] = useState<Boolean>();
  const [nameChange, setNameChange] = useState<Boolean>();
  const [log, setLog] = useState<String>("Log in");
  const [username, setUserName] = useState<String>("Sanzhar");

  const initialFormData = Object.freeze({
    username: "",
    picture: "",
    link: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    console.log(formData);
    setUserName(formData.username)
  };

  const btnClickLoginHandler = (val: boolean) => { 
    console.log("Log in clicked") 
    setClicked(val);
    setLog(log === "Log in" ? "Log out" : "Log in")
  }

  const btnClickNameHandler = () => { 
    console.log("Change name clicked") 
    setUserName(username);
    setNameChange(true);
  }

  // Code block for input form
  const inputHandler = <form action="submit" className="inputForm" onSubmit = { handleSubmit }>
                        <input type="text" name="username" className="inputField" placeholder="Username" onChange = {handleChange}></input>
                        <button className="btn input-btn">Change</button>
                      </form>

  return (
    <div className="App">
      
      <div className="App-wrapper">
      
        { clicked && username ? <Hello name={ username } picture={ "https://via.placeholder.com/200x200.png" } link={"#"}/> : null }
        
        <button className="btn App-login-btn" onClick = { () => btnClickLoginHandler(!clicked)}> { log }</button>
        
        { nameChange && !clicked? inputHandler : clicked ? null : <button className="btn App-login-btn" onClick = { btnClickNameHandler }>Change name</button> }
      
      </div>
    
    </div>
  );
}

export default App;
