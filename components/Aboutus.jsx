import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion' ;
import { startingFeatures } from '../constants';
import {StartSteps} from '../components/StartSteps';
 
import burgur from '../assets/burgur.png';


 


 


const Aboutus = () => {
  return (
    <>
     <section className={`relative z-10 ${styles.paddings}`}>

     <div > 
     <h3 className={` gradcolor4 text-4xl sm:text-5xl 
     font-bold my-[3rem] md:my-[5.5rem] text-center`}>
     Know About Us
     </h3>
     </div>

     <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once:false, amount:0.25}}
     className={`${styles.innerWidth} mx-auto
      flex flex-col 
     lg:flex-row gap-8 `}>


     <motion.div
     variants={planetVariants('left')}
     className={`${styles.flexCenter} flex-1 `}
     >

    <div className="w-[100%] flex items-center justify-center">
     <Image
      
      src={burgur}
      alt="Picture of the author"
      width={1500}
      height={1300}
      className= "object-contain hover:scale-105  cursor-pointer 
        shadow-red-900 drop-shadow-2xl z-50 w-[73%] sm:w-[43%] h-[43%] "
      />
      
    </div>



      </motion.div>




      <motion.div
      variants={fadeIn('left', 'tween' , 0.2 , 1)}
      className="flex-[0.75] flex justify-center flex-col">
      
     

     <div className="mt-10 ">
     
   
     <div className="flex-[0.7]">
     
     <h2 className="font-poppins
     dark:text-white font-bold sm:text-[48px] 
     sm:leading-[52px] text-[30px] leading-[32px] xs:tracking-[-0.5%] 
     tracking-[-0.25%] text-left"><span className="gradyellow">We Serve With<span className="text-red-300" >❤️</span></span> 
      <br className="sm:block hidden"/> Know About
    <span className="gradcolor3"> FoodVilla</span></h2>
    
    </div>
 
 
    <div>
 
 
    <p className=" mt-[20px] sm:mt-[30px]   mb-[10px] font-poppins
      
    xs:leading-[22px] text-[20px] leading-[25px] font-normal
     dark:text-[#a0aac1]     text-[#3c67f7]">

     
     “It all comes back to the basics.
      Serve customers the best-tasting food at a good value in a clean,
       comfortable restaurant, and they’ll keep coming back.” 
       
          
        
        
        
        
        
        
        </p>
        <span className="text-xl font-bold   dark:text-orange-600 ">–Dave Thomas</span>
 
    
    <div className="flex flex-row justify-center
     items-center py-3 px-5 mt-5 rounded-full cursor-pointer
       dark:gradcolor4 border-4 w-fit min-h-[48px]"
      
      >
 
 
      <button type="button" className="font-poppins    
      text-[19px] leading-[16px] dark:gradyellowdark py-1 font-bold 
       text-orange-600 " >  In Partnership with
      </button>
  
    
    </div>
    </div>
 
     </div>


       


     
       


     </motion.div>












      
     </motion.div>
      

     </section>

     </>
  )
}

export default Aboutus
