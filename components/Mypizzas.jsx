// import React from 'react'

// const mypizzas = ({mypizzas}) => {
//     return (
//         <div className=" flex flex-wrap gap-[3rem]    
//            justify-evenly   ">
        
    
//            {mypizzas.map((mypizza,id) => {
    
//               const src = urlFor(mypizza.image).url()
    
//               return(
    
//                  <div key={id} className="#" >
                 
//                  <Link href={`./pizza/${mypizza.slug.current}`}>
    
    
//                  <div class="pizzaStyle"
//                    style={{borderRadius: '25px', paddingBottom: '2px', overflow: 'hidden'}}>
//                    <Image
//                     loader={ ()=> src}  
//                      src={src} alt='pizzaImage'
//                     objectFit="cover"
//                     layout="fill"
//                     className="hover:scale-125  "
//                    />
//                  </div>
    
    
//                  </Link>
//                 <div className="flex-col  sm:mt-3 mt-1 flex">
//                      <span className=" text-2xl sm:text-3xl font-bold">{mypizza.name}</span>
    
//                      <span className=" text-xl sm:text-2xl font-bold"><span className="text-2xl font-bold 
//                       text-orange-600">RS</span> {mypizza.price[1]}</span>
//                      </div>    
//                  </div>
//              )
//          })}
    
          
//         </div>
//       )
// }

// export default mypizzas


      
// export const getServerSideProps = async()=>{
//     const query = '*[_type == "mypizza"]';
//     const mypizzas = await client.fetch(query);
//     return {
//       props:{
//         mypizzas
//       }
//     }
//   }
      
  

import React from 'react'

const Mypizzas = () => {
  return (
    <div>
      MyPizzaSection
    </div>
  )
}

export default Mypizzas
