import logo from './assets/imgs/logo.svg';
import AboutAplication from './components/AboutAplication';
import EventsUseState from './components/EventsUseState';
import RenderList from './components/RenderList';

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome this is my first aplication with React JS</h1>
      <div className="containerApp"> 
        <AboutAplication/>
        <EventsUseState/>
        <RenderList/>
      </div>
    </div>
  );
}

export default App;
