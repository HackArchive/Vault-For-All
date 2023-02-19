import { useEffect, useState,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserPlus,faArrowDown } from "@fortawesome/free-solid-svg-icons";
import * as PushAPI from "@pushprotocol/restapi";
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
import { walletInfoContext } from "../App";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { NotificationType } from "../utils";
import {sendNotificationToAlexa}  from "../utils/alexa";   
import {REACT_APP_ALEXA_ACCESS_CODE} from "../process.env.js";

export default function Wallet(){
    
    const navigate = useNavigate();
    const {balance,address} = useContext(walletInfoContext);
    const [feed,setFeed] = useState<Array<{title:string,message:string}>>();
    const [sdkSocket, setSDKSocket] = useState<any>(null);
    const [isConnected, setIsConnected] = useState(sdkSocket?.connected);
    const [notification,setNotification] = useState<NotificationType | null>(null);
    const [feedData, setFeedData] = useState<any>(null);
    const getFeeds = async ()=>{
       
            const notifications = await PushAPI.user.getFeeds({
                user: `eip155:5:${address}`, // user address in CAIP
                env: 'staging'
              });
              console.log(notifications)
              if(feed!=undefined){

                  if(feed[0].message===notifications[0].message){
                    return;
                  }
              }

            setFeed(notifications);
              
          
    }


    const addSocketEvents = () => {
        sdkSocket?.on(EVENTS.CONNECT, () => {
            console.log("connected")
          setIsConnected(true);
        })
    
        sdkSocket?.on(EVENTS.DISCONNECT, () => {
            console.log("disconnected")
          setIsConnected(false);
        })
    
        sdkSocket?.on(EVENTS.USER_FEEDS, (feedItem:any) => {
          /**
           * "feedItem" is the latest notification received
           */
          setFeed(prevState => {
            if (prevState!==undefined){
                
                sendNotificationToAlexa(feedItem.payload.data.amsg,REACT_APP_ALEXA_ACCESS_CODE);
                return [
                    {
                        title:feedItem.payload.data.app,
                        message:feedItem.payload.data.amsg
                    },
                    ...prevState
                ]
            }
            return [{
                title:feedItem.payload.data.app,
                message:feedItem.payload.data.amsg
            }];
      })
          
          console.log([{title:feedItem.payload.data.app,message:feedItem.payload.data.amsg}])
          
          setFeedData([{title:feedItem.payload.data.app,message:feedItem.payload.data.amsg}])

          setNotification({
            title:feedItem.payload.data.app,
            message:feedItem.payload.data.amsg
          });

        })
      };
    
      const removeSocketEvents = () => {
        sdkSocket?.off(EVENTS.CONNECT);
        sdkSocket?.off(EVENTS.DISCONNECT);
      };


      useEffect(() => {
        if (sdkSocket) {
          addSocketEvents();
        }
        return () => {
          removeSocketEvents();
        };
      }, [sdkSocket]);
    
      useEffect(() => {

        if(address === ""){
          navigate("/addWallet")
        }

        getFeeds();
        
        console.log(address,"====");
        const connectionObject = createSocketConnection({
          user: `eip155:5:${address}`,
          env: 'staging',
        });
    
    
        setSDKSocket(connectionObject);


      },[]);

 
    return(
        
        <div className="w-screen h-screen bg-[#1c2e4a] flex flex-col  items-center overflow-hidden">
            
            {
              notification && <Notification notification={notification} setNotification={setNotification}/>
            }            
            <div className=" justify-end w-full flex">
                <div className="m-6 inline-flex relative w-fit">
                <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-2.5 text-xs bg-pink-700 rounded-full z-10"></div>
                <div className="px-3 py-2 bg-indigo-400 flex items-center justify-center text-center rounded-lg shadow-lg">
                    <div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="mx-auto text-white w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                    </svg>
                    </div>
                </div>
                </div>
            </div>


            <div className="flex flex-col w-[60%] h-[40vh] items-center cursor-pointer">
                <p className="text-xl text-gray-400 font-extralight">TOTAL BALANCE</p>
                <p className="text-grey-700 text-5xl text-white mt-3 font-extralight">{balance} ETH</p>
                <div className="w-[150px] h-[50px] bg-green-600 bg-opacity-20  flex justify-center items-center rounded-md mt-5">
                    <p className="text-green-500 font-mono text-xl ">+500</p>
                </div>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-5 max-w-[80%] mt-10 justify-between ">
                <button onClick={()=>navigate("/addContacts")} className="bg-blue-500 mx-5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faUserPlus} />
                    <span>Add Recipent</span>
                </button>

                <button onClick={()=>navigate("/sendEth")} className="bg-red-500 mx-5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faArrowUpRightFromSquare} />
                    <span>Send ETH</span>
                </button>
                <button className="bg-pink-600 mx-5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faArrowDown} />
                    <span>Ask ETH</span>
                </button>
                
                </div>
            </div>


            <div className="flex flex-col max-h-[300px] w-[80%] overflow-y-scroll p-3 border-red-400 rounded-md mt-10 px-4 border-opacity-30 border">

                {
                    feed?.map((item)=>{

                      if (item.message==="sample msg body"){
                        return;
                      }
                        return (
                            <div key={item.message} className="w-full h-[60px] p-3 mt-3 flex justify-between items-center text-white">
                                <div className="w-[80%] h-1/1 flex items-center">
                                    <div className="w-[15%]">
                                        <FontAwesomeIcon className="w-5 h-5 fill-current text-green-500" icon={faArrowUpRightFromSquare} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xl">{item.message}</div>
                                        <div className="text-sm text-gray-400">{item.title}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mr-3">
                                    <div className="text-green-500">+</div>
                                    <div className="">$840.20</div>
                                </div>
                            </div>
                        );
                    })
                }
                
            </div>

        </div>
    );

}
