import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Register } from '../Authentication/Signup';
import Footer from '../Footer/Footer';
import { Map } from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/home">
            <div className="relative">
              <Map className="map" onPopupClick={setMunro} />
              {munro && <munroData className="munroData" munroId={munro} />}
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//add a default 'not found component'
