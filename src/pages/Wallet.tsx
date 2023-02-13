


export default function Wallet(){


    return(
        
        <div className="w-[100vw] h-[100vh] bg-[#20223E] flex flex-col  items-center overflow-hidden">
            
            <div className=" justify-end w-full flex justify-end ">
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


            {/* <div className="flex flex-col bg-white m-auto p-auto overflow-hidden">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                    Example
                </h1>
                <div
                    className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                >
                    <div
                    className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                    >
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col w-[60%] h-[50vh]  mt-10 items-center cursor-pointer">
                <p className="text-xl text-gray-400 font-extralight">TOTAL BALANCE</p>
                <p className="text-grey-700 text-5xl text-white mt-3 font-extralight">4000.8 ETH</p>
                <div className="w-[150px] h-[50px] bg-green-600 bg-opacity-20  flex justify-center items-center rounded-md mt-5">
                    <p className="text-green-500 font-mono text-xl ">+ 500 ETH</p>
                </div>
            </div>

            <div>
                
            </div>

        </div>
    );

}