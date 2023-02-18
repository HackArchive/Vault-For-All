import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethereum } from "../utils/index";
import { walletInfoContext } from '../App';
import {web3} from "../utils";


export default function AddWallet(){

    const [error,setError] = useState<String>("None");
    const [success,setSuccess] = useState<Boolean>(false);
    const navigate = useNavigate();

    const {setBalance,setAddress} = useContext(walletInfoContext); 

    const getInfo = async ()=>{
        const accounts:string[] = await web3.eth.getAccounts();
        const balance:string = await web3.eth.getBalance(accounts[0]);
        setAddress(accounts[0]);
        setBalance(web3.utils.fromWei(balance));
    }

    const connectionHandler = async () => {
        if (ethereum) {
            try{
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                })
                setSuccess(true);
                navigate("/wallet");
            } catch (error:any){
                setError(error.message);
            }
        }
        else{
            setError("You Don't have meta mask");
        }
    }


    useEffect(()=>{
        getInfo();
    },[])

    return(
        <div className="w-[100vw] h-[100vh] bg-[#20223E] flex flex-col justify-center items-center">

            {
                error!=="None" &&
                <p className="text-red-500">{error}</p>
            }

            {
                success && 
                <p className="text-green-500">Successfully connected</p>
            }


            <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">


                <div className="m-auto">
                    <img width="150" src="https://imgs.search.brave.com/10YhpqGwjLje2GYuLFJzcfDdHXuH2VjJCQOhuDYQu74/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTUxMi9tZXRh/bWFzay0yNzI4NDA2/LTIyNjE4MTcucG5n" alt=""/>
                </div>
                <button onClick={connectionHandler} className="bg-purple-600 text-white font-montserrat py-3 px-12 hover:scale-110 font-medium rounded-xl hover:bg-purple-500 transition-all duration-300" 
                style={{boxShadow:"0 15px 30px -5px rgba(124, 58, 237, 0.6)"}}>Connect</button>

            </div>
        </div>
    );

}
