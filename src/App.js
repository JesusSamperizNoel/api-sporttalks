//import './App.css';
import { useState } from 'react'
//Styles:
import './styles/core.css';

//Components:
import Header from './components/header';
import Aside from './components/aside';
import Main from  './components/main';
import Footer from './components/footer';
/*
import Login from './components/login';
import Register from "./components/register";
*/

function App() {

  const [messages, setMessages] = useState([]) 
  const [reload, setReload] = useState("") 


  return (
    <>
      <Header />
      <Aside setMessages={setMessages} reload={reload}/>
      <Main messages={messages} setReload={setReload}/>
      <Footer />
    </>
  )
}

export default App;
