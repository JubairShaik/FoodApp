import React from 'react'


import CountDownTimer from './../components/CountDownTimer.jsx'
 
 

const Item = () => {
  const hoursMinSecs = {hours:10, minutes: 50, seconds: 40}
  return (
    <>
    <div className='dark:bg-gray-900 bg-slate-200 my-14'>
    <div className="px-4 py-12">
  <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto 
   lg:px-10 md:px-6 px-4 py-12">
    <div className="md:flex justify-center gap-8 items-center">
      <div>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/of4ylxfff12qbmcrexux" 
        alt="hair_care" className="lg:block md:hidden rounded-tr-[15rem] rounded-tl-[15rem] block" />
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wydpzezlbyahq1ao78cj"
         alt className="lg:hidden md:block hidden" />
      </div>
      <div>
        <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
        Deal OF The Day
        </p>
        <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center">
          “Spoil” your hair with our new hair restoration mask. Manage
          common hair related problems such as hair fall, dryness, dandruff,
          frizzy hair, thinning hair with our new product.
        </p>


        <div className="flex  flex-col text-[2rem]" >
     <span> Offer Closes Soon</span>    
    <div >
    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
        </div>
        <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
          Buy Now
        </button>
      </div>
    </div>
    <button className="bg-gray-800 text-base font-medium  w-full px-3 py-2 text-white mt-6 hover:bg-gray-700 transition duration-300 ease-in-out lg:hidden md:block hidden">
      Buy Now
    </button>
  </div>
</div>

</div>
    
    
    </>
  )
}

export default Item
