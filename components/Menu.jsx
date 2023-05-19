import React from 'react'
import { urlFor } from "../lib/client";
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from"../../store/store";


const Menu = ({pizzas}) => {

  
  return (

  
    <div className=" z-10 flex flex-col
     sm:flex-row flex-wrap items-center mt-5 gap-[3rem]    
       justify-center ">
    

       {pizzas.map((pizza,id) => {

          const src = urlFor(pizza.image).url()

          return(
 
             <div key={id} className="bg-orange-200  shadow-blue-800 shadow-full
              dark:bg-slate-800 dark:text-blue-400 shadow-inner z-10
                 p-3.5 rounded-xl" >
             
             <Link href={`./pizza/${pizza.slug.current}`}>


             <div className="pizzaStyle   "
               style={{borderRadius: '10px', paddingBottom: '2px', overflow: 'hidden'}}>
               <Image
                loader={ ()=> src}  
                 src={src} alt='pizzaImage'
                objectFit="cover"
                layout="fill"
                className="hover:scale-125  "
               />
             </div>
             </Link>




            <div className="flex-col  sm:mt-2 mt-1 flex">


            <span className=" text-xl sm:text-2xl font-bold">{pizza.name}</span>
                 <span className=" text-[1.5rem] sm:text-2xl font-bold"><span className="text-2xl font-bold 
                   dark:text-yellow-600
                    text-orange-500">RS </span>{pizza.price[1]}</span>

           
      
            </div>  
                 
                 



              
            </div>
         
         )
     })}

      
    </div>


 
  )
}

export default Menu
