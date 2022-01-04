import './App.css';

import { useState } from 'react';

import { Login } from '../Authentication/Login/Login';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div>
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
