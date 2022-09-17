
import { useState } from 'react';
import './App.css';
import UploadBox from './Components/UploadBox';
import MainContainer from './Pages/MainContainer';
import Shipments from './Pages/ShipmentDetails';
import UploadModal from './Pages/UploadModal';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[fixed, setFixed]=useState(false)
  return (
    <div className={fixed ?'fixed App w-full':"App"}>
      <BrowserRouter>
      <Routes>
        <Route  exact path="/*" element={<MainContainer/>} />
      </Routes> 
      </BrowserRouter>
     
      {/* <Shipments setFixed={setFixed}/> */}
      
    </div>
  );
}

export default App;
