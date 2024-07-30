import React from 'react'
import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    const handleCategory = (itemCategory) => {
        setCategory(prev => prev === itemCategory ? "All" : itemCategory)
    }

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => handleCategory(item.menu_name)} key={index} className='explore-menu-item'>
                            <img className={category === item.menu_name ? "active" : ""}src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
