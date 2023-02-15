import Web3 from "web3";

export const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

declare global {
    interface Window {
      ethereum:any;
    }
  }

export let ethereum = window.ethereum;

export type NotificationType = {
    title:string,
    message:string
}

  
export type ContextData = {
    balance:string,
    address:string,
    contacts: Contacts[],
    setBalance:React.Dispatch<React.SetStateAction<string>>,
    setAddress:React.Dispatch<React.SetStateAction<string>>,
    setContacts:React.Dispatch<React.SetStateAction<Contacts[]>>
  }
  
export type Contacts = {
    name:string,
    number:string,
    address:string
  }
  