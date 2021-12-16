import './App.css';

import { useState } from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="relative">
          <munroMap className="map" onPopupClick={setMunro} />
          {munro && <munroData className="munroData" munroId={munro} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
