import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './CakeItem.css'
import { StoreContext } from '../../context/StoreContext'
const CakeItem = ({ id, name, price, description, image }) => {

 
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='cake-item'>
      <div className="cake-item-image-container">
      {!cartItems[id]
            ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className='cake-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>

          }
        <img className='cake-item-image' src={image} alt="" />

      </div>
      <div className="cake-item-info">
      
        <div className="cake-item-name-rating">
          
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₱{price}</p>
      </div>
    </div>
  )
}

export default CakeItem
