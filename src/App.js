import './App.css';
//Styles:
import './styles/core.css';

//Components:
import Header from './components/header';
import Aside from './components/aside';
import Main from  './components/main';
import Footer from './components/footer';

function App() {

  const URL = "http://localhost:8080"

  return (
    <>
      <Header URL={URL}/>
      <Aside URL={URL}/>
      <Main URL={URL}/>
      <Footer URL={URL}/>
    </>
  )
}

export default App;
