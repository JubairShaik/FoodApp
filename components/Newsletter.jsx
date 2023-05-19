import React from 'react'
import styles from '../styles';
import { motion } from "framer-motion";
import Girl from '../assets/Girl.png';
import googleplay from '../assets/googleplay.webp';
import { fadeIn ,slideIn , staggerContainer, planetVariants , textVariant } from '../utils/motion';
import Image from 'next/image';




const Newsletter = () => {


  const text ='We will send you a link, open it on your phone to download the app Email'



  return (


    <motion.div 
      
         initial="hidden"
         whileinview="show"
         viewport={{ once:false , amount :0.25}}
         className="flex flex-col mx-5 sm:mx-[6rem] 
          sm:mt-8  mt-2 sm:flex-row items-center justify-center">
          

    <div 
         
         initial="hidden"
         whileinview="show"
         viewport={{ once:false , amount :0.25}}
         className="items-center   flex-wrap  object-contain flex">
        

    <motion.div
    variants={fadeIn('left')}
    className="  space-y-5">
    
    <motion.h2
    variants={fadeIn('right')}
      
      className="text-[3rem] font-bold">Get The GoodFood App
    </motion.h2>
      <span>{text}</span>
    
    <div className="gap-3 flex flex-col flex-start">
 
    
    <div className=" relative md:flex-row  flex flex-col ">
        <input className="input  md:w-[45%] w-[100%]
         text-slate-700 dark:text-slate-200  " 
        placeholder="Enter Your Email Address" 
        autoComplete="on" name="text"
         type="text" required=""/>
         <button className="text-xl font-bold px-7 py-2.5 bg-orange-500">
         Share App Link
         </button>
    </div>

 


 
    

      <div className="flex flex-col"> 
      <span className="text-2xl font-medium">We are EveryWhere...</span>
       <div className="flex md:justify-start mt-4  justify-center cursor-pointer gap-4 flex-row ">

       <img
       src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
      alt="getstarted"
      className= "object-contain  shadow-md  dark:shadow-orange-600 w-[40%] md:w-[30%] md:h-[40%] "
      />
      <img
       src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
      alt="getstarted"
      className= "object-contain  shadow-md cursor-pointer dark:shadow-orange-600  w-[40%] md:w-[30%] md:h-[40%] "
      />

       
       
       </div>

      </div>
     

      
    
    </div>

    </motion.div>

{/*Right Side */}
    <motion.div
    variants={fadeIn('left')}
    className={`${styles.flexCenter} flex-1 `}
    >

   <div className="w-[100%] ">
    <Image
     src={Girl}
     alt="getstarted"
     className= "object-contain w-[40%]  h-[30%] "
     />
     
   </div>
     </motion.div>


    

    </div>
    </motion.div> 
    


    
  )
}

export default Newsletter
