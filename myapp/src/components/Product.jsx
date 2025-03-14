import React from 'react'

const Product = ({Value, values, quantity}) => {
  return (
    <div>
        <h1>{Value}</h1>
        <h2>{values}</h2>
        <h3>{quantity}</h3>
    </div>
  )
}

export default Product