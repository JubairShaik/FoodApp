import React from 'react';
import Layout from '../../components/Layout';
import { urlFor,client } from "../../lib/client";
import Image from 'next/image';
import Link from 'next/link';
import  { useStore }  from'../../../store/store';
import RightArrow from "../../assets/ArrowRight.png"
import LeftArrow from "../../assets/ArrowLeft.png"
import toast ,{Toaster} from 'react-hot-toast';
import { useEffect, useState } from 'react'




export default function Pizza({pizza})  {

   
   
    const src = urlFor(pizza.image).url();
    const [Size, setSize] = useState(1);
    const [Quantity, setQuantity] = useState(1);



    const handleQuantity = (type) =>{
        type === 'inc' 
        ? setQuantity((prev)=> prev + 1)
        : Quantity === 1 ? null : setQuantity((prev)=> prev - 1)

    }


 
 
    const addToCart = ()=>{
        addPizza(
            {...pizza, price:pizza.price[Size],quantity:Quantity, size:Size})
            toast.success("Added to cart")
    }

    return(


        <Layout>
        <div className="gradient-04  z-0" />

        <div className="flex  z-10 flex-col sm:flex-row 
        
        sm:gap-[2rem] gap-[1rem] items-center 
        mt-[2rem] sm:mt-[3.5rem]  mx-[5rem]">


        
            <div    className="bigpizzaStyle  my-10 shadow-2xl"
            style={{borderRadius: '25px', paddingBottom: '2px', overflow: 'hidden'}}
            
            >
            <Image
            loader={ ()=> src}   src={src} alt='pizzaImage'
            objectFit="cover"
            layout="fill"
            className="hover:scale-125  shadow-xl
             "
           />
            
            </div>


           <div className="space-y-10">

           <div className="flex-col space-y-4  sm:mt-3  flex">
                <span className=" text-2xl z-10  sm:text-5xl font-bold">{pizza.name}</span>
                <span className=" text-2xl z-10  sm:text-xl font-medium text-gray-600">{pizza.details}</span>
                <span className=" text-2xl z-10  sm:text-3xl font-bold"><span className="doller" >$</span>{pizza.price[Size]}</span>
           </div>

           <div className="flex items-center   shadow-3xl  space-x-5 ">
                 <span className="text-xl  z-10 ">Size</span>

                 
                 <div  className="text-l  flex  space-x-1 ">


                 <div 
                 onClick={()=>setSize(0)}
                 className = {Size === 0 ? "selected" :'sizeButton'}
                  >Small</div>

                 
                 <div
                 onClick={()=>setSize(1)}
                 className = {Size === 1 ? "selected" :'sizeButton'}
                 >Medium
                 </div> 
                 
                 <div
                  onClick={()=>setSize(2)}
                  className = {Size === 2 ? "selected" :'sizeButton'}>
                 Large
                 </div>
                 </div>
           
           </div>
           
           <div className="flex  items-center ">


                   <span  className="mr-10  text-xl">Quantity</span>
            <div className="">
                <Image
                   src={LeftArrow}
                   height={30}
                   width={30}
                   alt="Images"
                   objectFit="contain"
                   onClick={()=>handleQuantity("dec")}
                   />
                 <span className="text-4xl mx-3
                   text-orange-500  dark:text-blue-500 font-bold " >{Quantity}</span>
                 <Image
                   src={RightArrow}
                   height={30}
                   width={30}
                   alt= "Images"
                   objectFit="contain"

                   onClick={()=>handleQuantity("inc")}
                   />
                   
                   </div>
                   
                 </div>

                 <button  className="bg-orange-300  dark:bg-blue-600 shadow-inner
                  shadow-blue-900 rounded-full px-5 py-3   "
                 onClick={()=>{addToCart}}>
                 Add To cart
                </button>
                <Toaster/>
           </div>

           </div>  
        </Layout>

    )
};







export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );

    return{
        paths:paths.map((slug)=>({params:{slug}})),
        fallback:"blocking",
    };

}

export async function getStaticProps(context){

    const {slug=""} = context.params;
    const pizza = await client.fetch(
        `*[_type == "pizza" && slug.current == '${slug}'][0]`
    );
    
        return{
            props:{
                pizza,
            },
            
        };


}

// Empty Square Brackets Indicate ALl The Elements From The Slug(Pizza dataBase)