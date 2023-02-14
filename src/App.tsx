import {useState,createContext} from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import GetStarted from "./pages/GetStarted";
import AddWallet from './pages/AddWallet';
import Wallet from './pages/Wallet';
import AddContacts from './pages/AddContact';
import SendEth from './pages/SendEth';
import Web3 from 'web3';



declare global {
  interface Window {
    ethereum:any;
  }
}

type ContextData = {
  balance:string,
  address:string,
  contacts: Contacts[],
  setBalance:React.Dispatch<React.SetStateAction<string>>,
  setAddress:React.Dispatch<React.SetStateAction<string>>,
  setContacts:React.Dispatch<React.SetStateAction<Contacts[]>>
}

type Contacts = {
  name:string,
  number:string,
  address:string
}

export const walletInfoContext = createContext<ContextData>({} as ContextData);

function App() {
  
  const [balance,setBalance] = useState<string>(""); 
  const [address, setAddress] = useState<string>("");
  const [contacts, setContacts] = useState<Array<Contacts>>([{} as Contacts]);

  const contextData:ContextData = {
    balance,
    address,
    contacts,
    setAddress,
    setBalance,
    setContacts
  }

  return (
    <walletInfoContext.Provider value={contextData}>
      <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='/addWallet' element={<AddWallet/>}/>
          <Route path='/wallet' element={<Wallet/>}/> 
          <Route path='/addContacts' element={<AddContacts/>}/> 
          <Route path='/sendEth' element={<SendEth/>}/> 
      </Routes>
    </walletInfoContext.Provider>
  );
}

export default App;
export let ethereum = window.ethereum;