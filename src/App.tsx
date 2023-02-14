import {useState,createContext} from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import GetStarted from "./pages/GetStarted";
import AddWallet from './pages/AddWallet';
import Wallet from './pages/Wallet';




declare global {
  interface Window {
    ethereum:any;
  }
}

type contextData = {
  balance:string,
  address:string,
  setBalance:React.Dispatch<React.SetStateAction<string>>,
  setAddress:React.Dispatch<React.SetStateAction<string>>
}


export const walletInfoContext = createContext<contextData>({} as contextData);

function App() {
  
  const [balance,setBalance] = useState<string>(""); 
  const [address, setAddress] = useState<string>("");


  

  return (
    <walletInfoContext.Provider value={{balance,address,setAddress,setBalance}}>
      <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='/addWallet' element={<AddWallet/>}/>
          <Route path='/wallet' element={<Wallet/>}/> 
      </Routes>
    </walletInfoContext.Provider>
  );
}

export default App;
export let ethereum = window.ethereum;