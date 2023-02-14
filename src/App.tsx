import {useEffect} from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import GetStarted from "./pages/GetStarted";
import AddWallet from './pages/AddWallet';
import Wallet from './pages/Wallet';




declare global {
  interface Window {
    ethereum:any;
  }
}


function App() {


  return (
    <Routes>
        <Route path='/' element={<GetStarted/>}/>
        <Route path='/addWallet' element={<AddWallet/>}/>
        <Route path='/wallet' element={<Wallet/>}/> 
    </Routes>
  );
}

export default App;
export let ethereum = window.ethereum;