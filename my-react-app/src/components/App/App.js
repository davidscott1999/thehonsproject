import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';
import { UpdateEmail } from '../Authentication/Account/updateEmail';
import { UpdatePassword } from '../Authentication/Account/updatePassword';
import { Login } from '../Authentication/Login/Login';
import { ResetPassword } from '../Authentication/PasswordReset/PasswordReset';
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
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/details" component={UpdateEmail} />
            <Route path="/changepassword" component={UpdatePassword} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

//add a default 'not found component'
