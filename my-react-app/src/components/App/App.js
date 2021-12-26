import './App.css';

import { useState } from 'react';

import Footer from '../Footer/Footer';
import Map from '../MyMap/Map';
import Navbar from '../Navbar/Navbar';

function App() {
  const [munro, setMunro] = useState();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="relative">
          <Map className="map" onPopupClick={setMunro} />
          {munro && <munroData className="munroData" munroId={munro} />}
        </div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;
