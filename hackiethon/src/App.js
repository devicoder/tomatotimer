import './App.css';
import Quotes from './Quotes';
import tomato from './tomato.png';
import Navbar from './Navbar';
import Period from './Period';
import Time from './Time';
import Countdown from './countdown';
import SliderTest from './SliderTest';

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <img src={tomato} className="logo"></img>
        <SliderTest />
        <Quotes />
        <Period />
        <Time />
      </h1>
    </div>
  );
}

export default App;
