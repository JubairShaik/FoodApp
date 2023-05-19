import React from 'react'
import { urlFor ,client } from "../lib/client";
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from"../../store/store";
import Layout from '../components/Layout';
import mypizzas from '../components/Mypizzas.jsx';
import About from '../components/About.jsx';
 
import Body from "../components/Body";
import Menu from "../components/Menu";
import Item from "../components/Item";




  


export default function menu({pizzas})
{

  
    return (
   

 
      <Layout>
      <div  className="relative " >
      <Body/>
      <div className="gradient-03  z-0" />
      <Menu pizzas={pizzas}/>
      <Item/>
      <About/>
      
      </div>
      
      
      
      
      </Layout>
 
      
      )
}


  
      
   
export const getServerSideProps = async()=>{
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props:{
      pizzas
    }
  }
}