import './App.css';

import { useState } from 'react';

import {
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';
import { Account } from '../Authentication/Account/Account';
import { Login } from '../Authentication/Login/Login';
import { ResetPassword } from '../Authentication/PasswordReset/PasswordReset';
import { Signup } from '../Authentication/Signup';
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
import VerifyAccount from '../Verify/VerifyAccount';
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
            <PrivateRoute path="/update-password" component={updatePassword} />
            <PrivateRoute path="/update-email" component={updateEmail} />
            <PrivateRoute path="/view-logs" component={ViewLogs} />
            <PrivateRoute path="/add-logs" component={AddLogs} />
            <Route path="/munros" component={MunroList} />
            <Route path="/munro/:munroId" component={MunroProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/verify" component={VerifyAccount} />
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
