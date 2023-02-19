import { Link } from 'react-router-dom';


export default function GetStarted(){

    return(
    <section className='overflow-hidden '>   
        <header className="myheader transform -skew-y-12 bg-gradient-to-r from-pink-500 via-blue-400  to-yellow-300">
            
            <div className=" lg:px-28 lg:py-4 px-2 py-2 bg-gradient-to-r from-purple-500 via-green-600 to-blue-300">
            <div className=" lg:px-28 lg:py-4 px-2 py-2  transform skew-y-12 ">


                <nav>
                    <div className="flex justify-between text-white mt-40 lg:mt-28">
                
                    <div>
                        <a className="font-extrabold text-xl ml-2" href="/">Vault For All</a>
                    </div>
                    </div>
                </nav>
                
                
                <div className="lg:grid lg:grid-cols-2 block lg:px-30 lg:py-16 px-2 py-2">
                    <div className="">
                    <button  className="flex bg-black mt-4 py-2 px-4 mb-4 bg-opacity-20 text-base text-white rounded lg:rounded-full my-auto">
                        <span>now with Alexa notification system</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <h1 className="pt-10 mt-10 lg:text-7xl text-6xl py-10 lg:py-0 font-bold text-opacity-80 text-gray-900">Wallet for all of your web3 Payments</h1>
                    </div>
                    
                    <div className="lg:visible invisible">
                    <img className="absolute ml-40" width="850" src="https://i.ibb.co/q9rV42S/sdas.png" alt=""/>
                    
                    </div>

                    <div>
                        <Link to="/addWallet"  className="flex py-2 px-4 text-base bg-white bg-opacity-20 text-white rounded-full w-36 mt-5">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            
        </header>

        <main className="px-2 py-2 mt-4 lg:mt-12 ml-8 bg-white">
            <div className="">
            <div className="px-2 py-2 lg:px-28 lg:py-2 bg-white">
                <div className="lg:grid lg:grid-cols-2 block">
                    {/* <div className="flex flex-col">
                    <p className="pt-20 pr-20 text-gray-600">Millions of businesses of all sizes – from startups to large enterprises – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online. </p>
                    <div className="pt-10 flex">
                        <button  className="flex bg-gray-800 py-2 px-4 text-sm font-semibold text-white rounded-full">
                            Start now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button  className="flex font-semibold  py-2 px-4 text-sm rounded-full">
                            Contact sales
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    </div> */}
                </div>

                </div>
            
            <div className="lg:flex-row flex-col flex mt-20  gap-x-32 gap-y-10 lg:px-20 lg:py-16 mx-auto">
            
                <div className="m-auto">
                    <img width="100" src="https://imgs.search.brave.com/10YhpqGwjLje2GYuLFJzcfDdHXuH2VjJCQOhuDYQu74/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTUxMi9tZXRh/bWFzay0yNzI4NDA2/LTIyNjE4MTcucG5n" alt=""/>
                </div>
                <div className="m-auto">
                    <img width="100" src="https://imgs.search.brave.com/Gb-bVQO5HdYpIISj3zGZcf_MuCUI-Fhv9yNDd5rmZj4/rs:fit:900:581:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5wbmdhYWEuY29t/LzIxNS83NTczMjE1/LW1pZGRsZS5wbmc" alt=""/>
                </div>

                <div className="m-auto">
                    <img width="100" src="https://imgs.search.brave.com/qLfb_SnxltDI1t3C4kN4eJuYe8Q-rcj5VG4yHxWdzZU/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy80MjMtNDIzNzc3/N19ldGgtaWNvbi1j/cnlwdG9jdXJyZW5j/eS1mbGF0LXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtZXRoZXJl/dW0tY2xpcGFydC5w/bmc" alt=""/>
                </div>
                {/* <div className="m-auto">
                    <img width="100" src="https://imgs.search.brave.com/se6MB4E4iENSUStf-hcajnWT3oSEEEX8i-1hW2rR750/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9hbWF6/b24tbG9nby10cmFu/c3BhcmVudC1pY29u/LTMucG5n" alt=""/>
                </div> */}
        
            </div>
        </div>
        </main>
    </section>
    );

} 