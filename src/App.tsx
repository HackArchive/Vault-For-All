import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GetStarted from "./pages/GetStarted";
import AddWallet from "./pages/AddWallet";
import Wallet from "./pages/Wallet";
import AddContacts from "./pages/AddContact";
import SendEth from "./pages/SendEth";
import Web3 from "web3";
import { ContextData, Contacts } from "./utils";

export const walletInfoContext = createContext<ContextData>({} as ContextData);

function App() {
  const [balance, setBalance] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contacts, setContacts] = useState<Array<Contacts>>([{} as Contacts]);

  const contextData: ContextData = {
    balance,
    address,
    contacts,
    setAddress,
    setBalance,
    setContacts,
  };

  useEffect(()=>{
    document.title = "VaultForAll"
  },[])

  return (
    <walletInfoContext.Provider value={contextData}>
      <Toaster />
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/addWallet" element={<AddWallet />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/addContacts" element={<AddContacts />} />
        <Route path="/sendEth" element={<SendEth />} />
      </Routes>
    </walletInfoContext.Provider>
  );
}

export default App;
