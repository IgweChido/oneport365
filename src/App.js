
import { useState } from 'react';
import './App.css';
import UploadBox from './Components/UploadBox';
import Shipments from './Pages/Shipments';
import UploadModal from './Pages/UploadModal';

function App() {
  const[fixed, setFixed]=useState(false)
  return (
    <div className={fixed ?'fixed App w-full':"App"}>
      <Shipments setFixed={setFixed}/>
      
    </div>
  );
}

export default App;
