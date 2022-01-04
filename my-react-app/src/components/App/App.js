import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';
import { Register } from '../Authentication/Signup';
import Footer from '../Footer/Footer';
import { Map } from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    // We need to wrap the components that need access to the auth context inside an AuthProvider
    // I can't check this as I don't have your Firebase creds so I get auth/invalid-api-key error
    <AuthProvider>
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/home" component={Map} />
        </Switch>

        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

//add a default 'not found component'
