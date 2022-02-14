import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';
import { Account } from '../Authentication/Account/Account';
import { ContactForm } from '../Authentication/Account/ContactForm';
import { UpdateEmail } from '../Authentication/Account/updateEmail';
import { UpdatePassword } from '../Authentication/Account/updatePassword';
import { Login } from '../Authentication/Login/Login';
import { ResetPassword } from '../Authentication/PasswordReset/PasswordReset';
import { Signup } from '../Authentication/Signup';
import { Disclaimer } from '../Disclaimer/Disclaimer';
import ErrorPage from '../Error/ErrorPage';
import { FeatureCards } from '../FeatureCards/FeatureCards';
import Footer from '../Footer/Footer';
import MunroSafety from '../MountainSafety/MunroSafety';
import { MunroDetails } from '../MunroDetails/MunroDetails';
import { MunroList } from '../MunroDetails/MunroList';
import { MunroProfile } from '../MunroDetails/MunroProfile';
import { AddLogs } from '../MunroLogs/AddLogs';
import { ViewLogs } from '../MunroLogs/ViewLogs';
import { Map } from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  const [munro, setMunro] = useState();

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/">
              <div className="relative">
                <Map className="map" onPopupClick={setMunro} />
                {munro && (
                  <MunroDetails className="munroDetails" munroId={munro} />
                )}
                <FeatureCards className="max-w-desktop" />1
              </div>
            </PrivateRoute>
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/update-email" component={UpdateEmail} />
            <PrivateRoute path="/update-password" component={UpdatePassword} />
            <PrivateRoute path="/view-logs" component={ViewLogs} />
            <PrivateRoute path="/munro/:munroId/add-logs" component={AddLogs} />
            <PrivateRoute path="/contact-us" component={ContactForm} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/munros" component={MunroList} />
            <Route path="/munro/:munroId" component={MunroProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/safety" component={MunroSafety} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

//add a default 'not found component'
