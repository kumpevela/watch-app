import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Countdown from './components/Countdown/Countdown'

const App = () => {
  return ( 
    
    <Router>
    <div className= "title"> My Watch </div>
      <header>
      <Link to="/">
        <button>DigitalClock</button>
        </Link>
        <Link to="/Stopwatch">
          <button>Stopwatch</button>
      </Link>
      <Link to="/Countdown">
          <button>Countdown</button>
          <div className= "photo">
          </div>
      </Link>
      </header>
<div className= "hour">
      <main>
          <Route exact path="/" component={DigitalClock} />
          <Route path="/Stopwatch" component={Stopwatch} />
          <Route path="/Countdown" component={Countdown} />
      </main>
      </div>
    </Router>
  );
}

export default App;
