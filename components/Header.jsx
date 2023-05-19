import React,{useState} from 'react';
import Image from 'next/image';
import {useStore} from"../../store/store"
import Link from 'next/Link';
import close from '../assets/close.png';
import menu from '../assets/menu.png';
import {UilShoppingBag} from '@iconscout/react-unicons' ;
import Darkmode from './../components/Darkmode';
import { navLinks } from "../constants";

// import { NavLink } from 'react-router-dom'

function Header ()  {


  
  const menu = "https://cdn-icons-png.flaticon.com/512/2099/2099153.png";
  const close = "https://cdn-icons-png.flaticon.com/128/2976/2976286.png"
 

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


const title= "FoodVilla"

  return (

    <>

    <div className="justify-between px-[.3rem]
     sm:px-[3rem] flex items-center shadow-xl  dark:shadow-blue-500
      shadow-orange-200 h-20 " >

       <div className="Log flex flex-1 items-center  ">
        <span className="bg-orange-600 flex   rounded-full ml-2
         font-extrabold text-[1.5rem]  dark:bg-blue-500   px-3  ">F</span>
       <span className="text-xl text-black dark:text-white md:text-3xl font-bold">
        {title}</span>
       </div>   


       
       <ul className="items-center  justify-center 
       font-semibold transition-allflex-1 hidden md:flex gap-10 ">
        <Link href="/">
         <li className=" dark:text-blue-500  text-xl  hover:text-white cursor-pointer " >Home</li>
        </Link>

        <Link href="/menu">
        <li className="    dark:text-blue-500  text-xl
          cursor-pointer " >Menu</li>
        </Link>
        <Link href="/contactus">
        <li className="dark:text-blue-500  text-xl
          cursor-pointer " >Contact US</li>
        </Link>

 
       </ul>
       
        
      
       <div className="class items-center gap-4 
        flex justify-end mr-8 flex-end  flex-1 ">


        <Darkmode/>
            
      



           <Link  href="/cart" >
            <div className="Cart">
                  <div className="badge items-center relative flex z-99">
                  <UilShoppingBag  size={40}/>
                    <div className="absolute justify-center text-center
                     items-center dark:bg-slate-500 bg-slate-200 rounded-full 
                    flex p-1 h-[25px] bottom-5 -right-[.4rem] w-[25px]"> 1</div>
                  
                  </div>
            
            </div>
           </Link>




           <div className="sm:hidden z-10 flex flex-1 justify-end items-center">
           <img
             src={toggle ? close : menu}
             alt="menu"
             className="w-[28px] h-[28px] object-contain"
             onClick={() => setToggle(!toggle)}
           />
   
           <div
             className={`${
               !toggle ? "hidden" : "flex"
             } p-6 bg-slate-400 absolute top-20 right-0 mx-4 my-2
              min-w-[140px] rounded-xl sidebar`}
           >
             <ul className="list-none flex justify-end items-start flex-1 flex-col">
               {navLinks.map((nav, index) => (
                 <li
                   key={nav.id}
                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
                     active === nav.title ? "text-slate-600" : "text-blue-500"
                   } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                   onClick={() => setActive(nav.title)}
                 >
                   <Link href={`${nav.id}`}>{nav.title}</Link>
                 </li>
               ))}
             </ul>
           </div>
           </div>
  

          
           




       </div>
       

    </div>



    
         {/*Mobile Menu*/}


         
        
    </>

  )
} 


export default Header 