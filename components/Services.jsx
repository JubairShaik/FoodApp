import React from 'react'
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import Image from 'next/image';


const Services = () => {
  return (

    <>
    <div  className="items-center  z-20  px-5 flex-col flex sm:mt-10 justify-center  ">

            <div className="Headings flex leading-[3rem] items-center flex-col">
                 <span className=" font-bold sm:text-[3rem] grad-text2 text-[2rem]">Your Favourite Food</span>
                <span className=" font-bold sm:text-[4rem] text-[2rem]">Delivery Partner</span>
            </div>

            <div className="flex sm:gap-5 gap-4 my-4 sm:my-10
             sm:flex-row items-center rounded-3xl    flex-col">

            <div className=" 
             shadow-inner sm:p-7 p-5 font-semibold  rounded-2xl  flex ring-2 ring-orange-500/50 dark:ring-blue-600/50 shadow-orange-500 dark:shadow-blue-600 items-center flex-col">
            <div className="   w-[10rem] items-center  items">
 
            <Image src={s1} className="w-[10rem] shadow-xl
             shadow-blue-500 " alt="Service1" />
            </div>
            <span className="text-2xl font-semibold ">Easy To Order</span>
            <p className="max-w-[19rem] text-center" >You only need a few steps in food ordering</p>
            </div>  
            
            <div className="flex servicecircle  
               items-center flex-col">
            
            <span className="text-2xl mt-3  ">We Cook The Best</span>
            <p className="max-w-[19rem] text-center" >You only need a few steps in food ordering</p>
            </div>  
            
            <div className="flex sm:p-7  font-semibold  p-8 rounded-3xl 
            shadow-inner servicebox ring-2 ring-blue-500/50 shadow-blue-500 
             items-center flex-col">



             
            <div className="  w-[10rem] items-center  items">
            <Image src={s2} className="w-[10rem]" alt="Service1" />


            
            </div>
            <span className="text-2xl">Door Step Delivery</span>
            <p className="max-w-[19rem] text-center" >You only need a few steps in food ordering</p>
            </div>  
            </div>
            <div>
          
            </div>
    </div>
    </>
  )
}

export default Services
