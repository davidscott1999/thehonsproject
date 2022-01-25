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
import ErrorPage from '../Error/ErrorPage';
import { FeatureCards } from '../FeatureCards/FeatureCards';
import Footer from '../Footer/Footer';
import { MunroDetails } from '../MunroDetails/MunroDetails';
import { MunroProfile } from '../MunroDetails/MunroProfile';
import { Map } from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';
import VerifyAccount from '../Verify/VerifyAccount';

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
                {munro && (
                  <MunroDetails className="munroDetails" munroId={munro} />
                )}
                <FeatureCards className="max-w-desktop" />
              </div>
            </Route>
            <Route path="/munros" munroId={munro} component={MunroProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/details" component={UpdateEmail} />
            <Route path="/changepassword" component={UpdatePassword} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/verify" component={VerifyAccount} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

//add a default 'not found component'
