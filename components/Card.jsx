import React from 'react'
import {FoodList,mainId} from './constants';


const  Card = ({ name,city, slugs , cloudinaryImageId,costForTwoString,area,cuisines ,slaString}) => {
    return ( 
      <section className="flex flex-col sm:flex-row items-center
       justify-center my-10 gap-5 mx-5">
      <div className="w-[20rem] z-10 leading-8 shadow-inner
        shadow-slate-100 dark:shadow-yellow-500 
         bg-slate-600 dark:bg-slate-800 p-4 rounded-xl">
      <img className="w-full rounded-xl" src= {mainId+cloudinaryImageId} alt="" />
      <h2 className="sm:text-xl text-slate-100 dark:text-white text-l
       mt-2 font-bold">{name}</h2>
      <span className="text-xl  gradyellow font-bold">{ costForTwoString}</span> 
      <h3 className="text-xl  text-blue-100 font-bold">
      <span className="  text-yellow-400 dark:gradrose">delivery in </span>{slaString}</h3>
      <span className="sm:text-xl text-l text-slate-300 ">{area}</span>
      <p className="sm:text-l text-md text-slate-300 ">{slugs.city}</p>
      <h2 className="sm:text-l  text-sm text-slate-300 ">{cuisines.join(", ")}</h2>

      </div>
      </section> 
    )
  }

  export default Card;