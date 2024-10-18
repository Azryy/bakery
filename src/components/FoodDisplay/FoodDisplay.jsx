import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import CakeItem from '../CakeItem/CakeItem'
const FoodDisplay = ({ category }) => {
    const { cake_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Cakes near you</h2>
            <div className="food-display-list">
                {cake_list.map((item, index) => {
                    if(category==="All" || category===item.category){
                        return <CakeItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                    

                })}
            </div>
        </div>
    )
}

export default FoodDisplay
