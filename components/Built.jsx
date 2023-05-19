import React from 'react'
import Image from 'next/image';
import we5 from '../assets/we5.png';


const Built = () => {

  const month = "Januanry"
  const year = "2024"


  return (
   <>

   <section className="   mx-4 sm:mx-10 mt-[5rem]">

   <div className=" md:ml-[10rem] gradcolor4" >
      <h3 className="font-semibold  text-4xl sm:text-6xl p-3" >Built By</h3>
    </div>
    <div className="flex flex-col md:flex-row sm:mx-[4rem]
     gap-6 mx-[1rem] leading-6 items-center justify-center">
    
    <div className="w-[100%] border-4 border-dotted m-1  shadow-inner 
     dark:shadow-blue-500    border-sky-500 rounded-full  md:w-[40%]">
    <Image
     src={we5}
     alt="getstarted"
     className= "object-contain shadow-inner m-1 
      dark:shadow-blue-500 opacity-50  hover:opacity-100 transition-all 
      rounded-full w-[40%] h-[30%] "/>
      
      </div>


   <div className="flex-col  flex">

   <span className="text-[4rem] text-slate-600
    dark:text-white">We
   <span className="text-[2.4rem]  max-w-[4rem] font-bold text-orange-500 dark:text-cyan-600 " >5</span>
   </span>
 

   
{/**
<p className="max-w-[35rem] text-[1.2rem] leading-6 md:text-[1.3rem] md:leading-7  
mt-3 mb-4">

<p className="my-3">
FoodVilla is an Indian online food ordering and
delivery platform. Founded in {month} {year} , 

</p>



    
    <p className="#">FoodVilla is based in Bangalore and
    operates in 500 Indian cities as of {month} {year}</p>
    </p>
  */}

  <div>
  <p className="max-w-[35rem] text-[1.2rem] leading-6
   md:text-[1.3rem] mt-3 mb-4 md:leading-7 ">Fast food restaurant means a 
   business whose principal 
  purpose is the sale of food 
  </p>

  
<p className=" max-w-[35rem] text-[1.2rem] leading-6
md:text-[1.3rem] mt-3 mb-4 md:leading-7">
FoodVilla is an Indian online food ordering and
delivery platform. Founded in {month} {year} 

</p>

  </div>






   </div>

     
  
   
   </div>
   
   <div className="flex justify-end  items-center  align-middle mx-[20rem] flex-1 flex-col">
   <span className="flex text-xl">Submitted To</span>
   <h1 className="text-[3rem] ml-10 flex justify-end gradcolor5 font-extrabold">B Venkata Rani Mam</h1>
   </div>
   </section>
   
    </>
    
  )
}

export default Built
