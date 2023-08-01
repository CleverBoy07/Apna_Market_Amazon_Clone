import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='CheckoutProduct'>
        <img className = 'checkProduct_img'  src= {image}/>

        <div className='check_info'>
            <p className='ProductTitle'>{title}</p>
            <p className='ProductPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        <div className="ProductRating">
            {Array(rating).fill().map((_, i)=> (
                <p>⭐</p>
          ))}
        </div>
        <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct