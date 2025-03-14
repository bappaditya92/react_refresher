import React from 'react'
import Product from './Product'

const Contact = () => {
  const myProducts = [9,6,4,33,56]
  return (
    <div>
      {
        myProducts.map((i)=>(
          <Product values={i} key={i}/>
        ))
      }
    </div>
  )
}

export default Contact