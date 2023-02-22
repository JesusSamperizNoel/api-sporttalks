import './App.css';
//Styles:
import './styles/core.css';

//Components:
import Header from './components/header';
import Aside from './components/aside';
import Main from  './components/main';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </>
  )
}

export default App;
