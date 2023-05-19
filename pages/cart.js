// import React from 'react'
import Layout from '../components/Layout';
import  { useStore }  from"../../store/store";
import useState from 'react'
 



export default function Cart(){

    // const CartData = useStore((state)=>state.cart) 


    return (
     <Layout>
     <div className="container">
            <div className="Details">
                 <table className="">
                     <thead>
                        <th>Pizza</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                     </thead>

            
                 </table>   
            
            </div>
     
     </div>
     </Layout>
  )
}
