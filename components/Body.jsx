import React,{useState} from 'react'
import Card from './Card'
import {FoodList, mainId } from './constants';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function filterData(searchText,restaurants) {
      const filterData = restaurants.filter((restaurant)=>
      restaurant.data.name.includes(searchText)
      );
      return filterData;
}

const Body = () => {

// by default the restaurants has the (FoodList)DummyData Value 
    const [restaurants, setrestaurants] = useState(FoodList)
    const [searchText, setsearchText] = useState("")
   
 
  return (

    <>
   

      {/*SearchBar Section*/}
<section className="#">
<div className=" md:mt-14 mt-3 z-50  md:mx-14  mx-2 relative md:flex-row  flex flex-col ">
<input className="input  md:w-[45%] w-[100%]
 text-slate-700 dark:text-slate-200  " 
placeholder="Search Your Item" 
  type="text"
 value={searchText}
 onChange={(e)=>{
  setsearchText(e.target.value);
 }}
 
 />
 <button 
 className="text-xl z-10 font-bold px-7
  py-2.5 bg-orange-500"
 onClick={()=>{
  //  update the FoodList
  const data=filterData(searchText,restaurants)
  // update the state--
  setrestaurants(data);


 }}
 >
  Search
 </button>
</div>
</section>


 


 <div className="flex z-10 overflow-hidden flex-wrap justify-center">
 {/* FoodItem is The CallBack Function*/}
     {restaurants.map((restaurant) => {
       return <Card {...restaurant.data} key={restaurant.data.id}  />
     })}

</div>




 

<div className="flex justify-center">

 
</div>
 

  


</>
  )
}

export default Body;
