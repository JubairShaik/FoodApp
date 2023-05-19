import React from 'react'
import Image from 'next/image';
import PizzaMom from '../assets/PizzaMom.png';
import p1 from '../assets/p1.jpg';
import Cherry from '../assets/Cherry.png';
import Marquee from "react-fast-marquee";

import { motion } from "framer-motion";
import { slideIn , staggerContainer , textVariant } from '../utils/motion';


const Hero = () => {
  return (

    <>



    <div className="mt-10 z-10 mx-1 md:mx-10  ">
    
    
    <Marquee  direction='left' gradient={false}
    speed={70}  >
   
    
    <span className="font-semibold  gradcolor4 text-xl capitalize  dark:gradcolor2" >
     ---Enjoy Lightning Fast Delivery of Your Favourite Food ---
     </span>
  
    </Marquee>
    </div>
    <motion.div 
    
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false , amount :0.25}}
    className="flex flex-col mx-5 sm:mx-10    sm:mt-8  mt-2 sm:flex-row items-center justify-center">

    
         <div className=" flex items-center flex-1 sm:items-start  flex-col ">


           

            <div
            
                className=" z-10  flex flex-col md:mt-2 mt-5 md:leading-[6rem] leading-[4rem] relative  main Heading"> 
            <motion.h1
            variants={textVariant(1.1)}
            className="md:text-[5rem] text-[3rem] font-bold"> 
            We Deliver 
            
            </motion.h1>

            
              <motion.span
              variants={textVariant(1.1)}
              className="md:text-[5rem] text-[3rem]  font-bold ">Best <span className="grad-text2 dark:grad-text3 ">Food</span> in the  </motion.span>
              <motion.span 
              variants={textVariant(1.1)}

              className="md:text-[5rem] grad-text2 dark:grad-text3 text-[2.9rem]   font-bold ">Whole country 
               </motion.span> 
            </div>

            <span className="text-bold  dark:text-slate-200    my-2 sm:my-6 transition-all text-black">
            Our Mission is to filling your tummy with delicious food and with fast and free delivery
            </span>

            <button className=" z-10 px-6 py-3 mt-4 rounded-3xl 
            dark:bg-blue-500
            bg-orange-400 text-white ">
            Get Started
            </button>    


           

    </div>

    <div 
    

    className="items-center  object-contain flex">
    
{/**/}        <motion.div 
        variants={slideIn('right','tween',0.2,1)}
        className=" z-10  md:w-[42rem] w-[23rem]">

            <Image className=" z-50 md:w-[42rem]   w-[60rem] "  src={PizzaMom} alt="" />
            
         </motion.div>



        <div className="md:flex hidden absolute left-[40rem]
          shadow-2xl top-[5rem] bg-cyan-500 rounded-full
            px-4 py-2 gap-1 items-center">
          <span className="font-bold text-white">Explore Know</span>
          <img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" className="h-8" alt="" />
        </div>

        <div className="hidden md:flex ">
        
        <motion.div 
        variants={textVariant(1.1)}

        
        className="Pizza flex z-10 right-[13rem]   m-10 px-[.7rem]  top-[28rem] 
         dark:bg-slate-800 bg-slate-100 p-2 rounded-2xl gap-3
          absolute items-center">

                <div className="w-[7.4rem] mt-[.3rem]">

                    <Image  src={p1}  className="w-[4rem]  
                    rounded-[.4rem]" layout="intrinsic" alt="Image"/>
                
                </div>

                <div
                className="details cursor-pointer text-white items-center  flex-col"
                >
                    <span className="font-extrabold dark:text-white text-black text-xl">Italian Pizza</span>
                <div className="leading-[2.7rem]">
                <span className="dark:text-white text-black "> Peice</span>
                <span className="text-xl dark:text-white text-black  "> <span className= "font-extrabold text-orange-400">$</span>7.49</span>
                </div>
                </div>
        
        </motion.div>
    
        </div>


    </div>




   

    </motion.div>

     



    </>
  )
}

export default Hero
