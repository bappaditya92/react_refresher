import React from 'react'
import Product from './Product'


const Home = () => {
  const productList= [1,2,3,4,5,6]

  return (
    <div>
     {
      productList.map((i)=>(
        <Product Value={i} key={i}/>
      ))
     }
    </div>

  )
}

export default Home