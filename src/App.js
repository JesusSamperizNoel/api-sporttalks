//import './App.css';
import { useState } from 'react'
//Styles:
import './styles/core.css';

//Components:
import Header from './components/header';
import Aside from './components/aside';
import Main from  './components/main';
import Footer from './components/footer';
import newGroup from './components/newGroup';
import NewGroup from './components/newGroup';
import newTalk from './components/newTalk';
import NewTalk from './components/newTalk';
import Login from './components/login';
import SignIn from "./components/sign in";

function App() {

  const URL = "http://localhost:8080"

  const [messages, setMessages] = useState([]) 
  const [reload, setReload] = useState("") 

/*
    <Login URL={URL}/>
*/

  return (
    <>
      <Header />
      <Aside URL={URL} setMessages={setMessages} reload={reload} setReload={setReload}/>
      <Main URL={URL} messages={messages}/>
      <Footer />
    </>
  )
}

export default App;
