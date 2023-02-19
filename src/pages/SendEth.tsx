import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { walletInfoContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { web3 } from "../utils";
import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import mint from "../utils/mint";
import toast from "react-hot-toast";

export default function SendEth() {
  const decimals = 12;
  const { address, contacts, setContacts } = useContext(walletInfoContext);
  const [name, setName] = useState<string>("");
  const [inputAddress, setInputAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0.0);
  const navigate = useNavigate();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const pay = async () => {
    const nonce = await web3.eth.getTransactionCount(address, "latest");
    let failed = false;
    const transaction = {
      from: address,
      to: inputAddress, // faucet address to return eth
      value: web3.utils.toBN((amount * 10 ** decimals).toString()),
      gas: 21000,
      nonce: nonce,
      // optional data field to send message or execute smart contract
    };

    web3.eth.sendTransaction(transaction, async (error, hash) => {
      if (error) {
        alert(error.message);
        failed = true;
      } else {
        // alert(`Hash:${hash}`);
        let resp: any = await mint(
          "1st Transaction",
          "this is your 1st transaction",
          address
        );
        console.log(resp);
        // alert(
        //   `Hey New reward unlocked https://polygon.nftscan.com/${resp.transaction_hash}`
        // );

        // toast(
        //   `Hey New reward unlocked <a href="https://polygon.nftscan.com/${resp.transaction_hash}">here</a>`
        // );

        toast(
          <>
            Hey New reward unlocked, check{"   "}
            <a
              style={{ color: "orange" }}
              href={`https://polygon.nftscan.com/${resp.transaction_hash}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here
            </a>
          </>
        );
      }
    });

    if (!failed) {
      await sendNotification();
    }
  };

  const sendNotification = async () => {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: address,
        body: `Sent you ${amount} WEI`,
      },
      payload: {
        title: address,
        body: `Sent you ${amount} WEI`,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${inputAddress}`, // recipient address
      channel: `eip155:5:${address}`, // your channel address
      env: "staging",
    });

    console.log(apiResponse);
  };

  useEffect(() => {
    if (address === "") {
      navigate("/addWallet");
    }
  }, []);

  return (
    <div className="w-full bg-[#20223E] h-screen">
      <div className="bg-gradient-to-b from-blue-800 h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 flex justify-center items-center">
        <div className="bg-gray-900 shadow rounded-md p-8 -mt-72 ">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            SEND ETH
          </p>
          <div>
            <div className="md:flex items-center mt-12">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Name
                </label>
                <select
                  onChange={(event) => setInputAddress(event.target.value)}
                  className="h-[50px] overflow-y-scroll leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                >
                  <option>Choose a Name</option>
                  {contacts.map((contact) => (
                    <option value={contact.address}>{contact.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex items-center mt-12">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Address
                </label>
                <input
                  value={inputAddress}
                  onChange={(event) => setInputAddress(event.target.value)}
                  type="text"
                  placeholder="0xethforall"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  WEI
                </label>
                <input
                  onChange={(event) =>
                    setAmount(parseFloat(event.target.value))
                  }
                  type="number"
                  step="any"
                  placeholder="0.001"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                onClick={pay}
                className=" flex justify-center items-center mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
              >
                <FontAwesomeIcon
                  className="w-5 h-5 mr-1  fill-current"
                  icon={faDollarSign}
                />
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
