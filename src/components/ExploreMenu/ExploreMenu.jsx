import React from 'react'
import './ExploreMenu.css'
import { dessert_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse dessert featuring a delectable array of sweet desserts. Our mission is to 
            satisfy your cravings and elevate your desserts experience. One delicious cakes at a time
        </p>
        <div className="explore-menu-list">
            {dessert_list.map((item,index)=> {
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.dessert_name?"All":item.dessert_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.dessert_name?"active":""}src={item.dessert_image} alt="" />
                        <p>{item.dessert_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
