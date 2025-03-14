import React from 'react'
import Product from './Product'

const About = () => {
  const pList = [85,96,15,63]
  return (
    
      <div>
        {
          pList.map((i)=>(
            <Product quantity={i} key={i}/>
          ))
        }
      </div>
  )
}

export default About