import React from 'react'
import Marquee from "react-fast-marquee";

const MyAnimatedTypo = () => {
  return (

    <>
    <section className="sm:mx-14  mx-2 ">

    <div className="flex  md:flex-row  flex-col leading-[1px] gap-6 my-10 space-y-2
     items-center 
    justify-center">


    <div className="w-[90%] md:w-[25%] h-[.1rem] bg-slate-500 dark:bg-white"></div>
    <div className="font-bold text-gray-400  text-[1.4rem] p-1 sm:p-4">Our Project Contributers</div>
    <div className="w-[90%] md:w-[25%]  bg-slate-500 h-[.1rem] dark:bg-white"></div>


    </div>
    
    <Marquee  direction='left' gradient={false} speed={60} className="mt-10 " >
    <div className="flex space-x-10 px-10 ">
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text5 ">Jubair Ahmed </span> 
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text2 "> Charan Teja </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text5 "> Nehra </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text3">  Manoj  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text4 "> Karthikeya</span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text3 ">Jubair Ahmed </span> 
    </div>
     </Marquee>




    
    <Marquee  direction ='right' gradient={false} speed={50} className=" " >
    <div className="flex space-x-10 px-10 ">
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text5 "> Jubair Ahmed </span> 
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text2 "> Charan Teja </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text3"> Nehra  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text "> Jubair Ahmed </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text5">  Manoj  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text4"> Nehra  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text2 "> Charan Teja </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text3 "> Karthikeya </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text2"> Nehra  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text5 "> Jubair Ahmed </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text3">  Manoj  </span>
    <span className="text-2xl md:text-5xl  md:py-5 py-2  font-bold grad-text4 "> Karthikeya</span>
    </div>
    </Marquee>
    
    </section>

    </>
  )

}

export default MyAnimatedTypo
