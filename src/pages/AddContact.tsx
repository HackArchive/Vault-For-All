import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { walletInfoContext } from "../App";


export default function AddContacts () {

    const {address,setContacts} = useContext(walletInfoContext);
    const [name,setName] = useState<string>("");
    const [number,setNumber] = useState<string>("");
    const [inputAddress,setInputAddress] = useState<string>("");
    const navigate = useNavigate();

    const addContact = ()=>{
        setContacts((prevState)=>{
            return [
                {name,number,address:inputAddress},
                ...prevState
            ]
        });
        alert("Recepent added successfully");
        navigate("/wallet");
    }


    useEffect(()=>{
        if(address === ""){
            navigate("/addWallet");
        }
    },[])

    return (
        <div className="w-full bg-[#20223E] h-screen">
            <div className="bg-gradient-to-b from-blue-800 h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p className="text-3xl font-bold leading-7 text-center text-white">Add Contact</p>
                    <form action="" method="post">
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none text-gray-300">Name</label>
                                <input 
                                value={name}
                                onChange={(event)=>setName(event.target.value)}
                                type="text" placeholder="Name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none text-gray-300">Phone</label>
                                <input 
                                value={number}
                                onChange={(event)=>setNumber(event.target.value)}
                                type="email" placeholder="+91xxxxxxxxxx" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none text-gray-300">Address</label>
                                <input 
                                value={inputAddress}
                                onChange={(event)=>setInputAddress(event.target.value)}
                                type="text" placeholder="0xethforall" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button onClick={addContact} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Add Recipent
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}