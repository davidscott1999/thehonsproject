import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';
import { Login } from '../Authentication/Login/Login';
import { PasswordReset } from '../Authentication/PasswordReset/PasswordReset';
import { Signup } from '../Authentication/Signup';
import Footer from '../Footer/Footer';
import { Map } from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <div className="relative">
                <Map className="map" onPopupClick={setMunro} />
                {munro && <munroData className="munroData" munroId={munro} />}
              </div>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/password" component={PasswordReset} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

//add a default 'not found component'
