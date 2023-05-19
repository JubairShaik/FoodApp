import React, { useEffect, useState } from "react";
import CountDownTimer from './../components/CountDownTimer.jsx'


const SelectItem = () => {

    const hoursMinSecs = {hours:10, minutes: 50, seconds: 40}
    const hoursMinSecs2 = {hours:5, minutes: 50, seconds: 40}
    const hoursMinSecs3 = {hours:1, minutes: 40, seconds: 4}

    const [show1, setshow1] = useState(true);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);

    return (

        <section className="sm:mx-[8rem] mx-[.5rem]">

        <div className="mx-auto container  px-4 md:px-6 
        
        2xl:px-0 py-12 flex 
        justify-center items-center">
            <div className="flex flex-col jusitfy-start items-start">
                 
                <div className="mt-3">
                    <h1 className="text-3xl lg:text-4xl
                     tracking-tight font-semibold leading-8 lg:leading-9 
                     dark:gradrose text-gray-800">Favourites</h1>
                </div>


                <div className="mt-4">
                    <p className="text-2xl tracking-tight leading-6 
                    text-blue-600  font-bold dark:grad-color4
                     dark:text-gray-500">03 items</p>
                </div>

             

                <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                    <div className="flex flex-col">
                        <div className="relative">
                            <img className="hidden
                              lg:block" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ysv8xjnuc3kcugkhdrsv" alt="bag" />
                            <img className="hidden sm:block lg:hidden" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ysv8xjnuc3kcugkhdrsv " alt="bag" />
                            <img className=" sm:hidden" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ysv8xjnuc3kcugkhdrsv" alt="bag" />
                            <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400">
                                <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <p className="tracking-tight text-5xl  dark:gradyellowdark font-semibold p-4 text-[2rem] leading-10
                                 text-gray-800">Veg Biriyani</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-3 px-[.8rem] bg-slate-600 dark:bg-blue-500 dark:text-white hover:text-gray-400">
                                    <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="menu1" className={` flex-col jusitfy-start items-start mt-12 ${show1 ? "flex" : "hidden"}`}>
                            <div>
                                <p className="tracking-tight text-l leading-4 dark:text-white ">Special Offer</p>
                            </div>
                            <div className="mt-2">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Grab This Deal Before It Ends</p>

                                <CountDownTimer hoursMinSecs={hoursMinSecs}/>
                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base  font-medium leading-4 text-gray-800"> Veg Biriyani</p>
                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base  font-bold text-[2rem] leading-4 text-gray-500">RS 300</p>
                            </div>
                            <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                <div className="w-full">
                                    <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">More information</button>
                                </div>
                                <div className="w-full">
                                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4 
                                     hover:bg-black bg-gray-800 border dark:bg-green-500 border-gray-800">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col">
                        <div className="relative">
                            <img className="hidden lg:block" 
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hx0czv2eeggfccwjv32o" alt="watch" />
                            <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/9sqGrR6/Rectangle-24-1.png" alt="watch" />
                            <img className="sm:hidden" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hx0czv2eeggfccwjv32o" alt="watch" />
                            <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5  dark:bg-blue-500 bg-gray-800    text-white hover:text-gray-400">
                                <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <p className="tracking-tight text-4xl font-semibold leading-10  p-3 dark:gradyellow ">Chicken Biriyani</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button aria-label="show menu" onClick={() => setshow2(!show2)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-3 px-3.5 dark:bg-blue-500 bg-gray-800 text-white hover:text-gray-400">
                                    <svg className={`fill-stroke ${show2 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`fill-stroke ${show2 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="menu2" className={`flex-col jusitfy-start items-start mt-12 ${show2 ? "flex" : "hidden"}`}>
                            <div>
                                <p className="tracking-tight text-l leading-3  dark:text-white">Special Offer</p>
                            </div>
                            <div className="mt-2">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Grab This Deal Before it Ends </p>

                                <CountDownTimer hoursMinSecs ={hoursMinSecs}/>
                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Chicken Biriyani</p>
                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base  text-[2rem] font-bold leading-4 text-gray-800">RS 400</p>
                            </div>
                            <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                <div className="w-full">
                                    <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">More information</button>
                                </div>
                                <div className="w-full">
                                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black dark:bg-green-500 bg-gray-800 border  border-gray-800">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <div className="relative">
                            <img className="hidden 
                            lg:block object-cover" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gf5dskpbrggbzzuuccqp" alt="shoes" />
                            <img className="hidden sm:block lg:hidden" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gf5dskpbrggbzzuuccqp" alt="shoes" />
                            <img className="sm:hidden"
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gf5dskpbrggbzzuuccqp" alt="shoes" />
                            <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 dark:text-blue-500   hover:text-gray-400">
                                <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <p className="tracking-tight text-4xl font-semibold leading-10  p-3 dark:grad-text3">Mutton Biriyani</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button aria-label="show menu" onClick={() => setshow3(!show3)} className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800   py-2.5 px-3 dark:bg-blue-500 dark:text-white text-white bg-black hover:text-gray-900">
                                    <svg className={`fill-stroke ${show3 ? "block" : "hidden"}`} width={12} height={8} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`fill-stroke ${show3 ? "hidden" : "block"}`} width={12} height={8} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="menu3" className={`flex-col jusitfy-start items-start mt-12 ${show3 ? "flex" : "hidden"}`}>
                            <div>
                                <p className="tracking-tight text-l leading-3 text-gray-800">Special Offer</p>
                            </div>
                            <div className="mt-2">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Grab This Deal Before It Ends</p>
                                <CountDownTimer hoursMinSecs ={hoursMinSecs}/>

                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Mutton Biriyani</p>
                            </div>
                            <div className="mt-6">
                                <p className="tracking-tight text-base font-bold text-[2rem] leading-4 text-gray-800">RS 500</p>
                            </div>
                            <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                <div className="w-full">
                                    <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">More information</button>
                                </div>
                                <div className="w-full">
                                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4 dark:bg-green-500 hover:bg-black bg-gray-800 border
                                     border-gray-800">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        </section>


        
    );
}

export default SelectItem;


 