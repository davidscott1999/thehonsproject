import './App.css';

import { useState } from 'react';

import { Register } from '../Authentication/Signup';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div>
          <Register />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
