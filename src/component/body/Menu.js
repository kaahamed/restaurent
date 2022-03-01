import React, { Component, useState } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'

const Menu = () => {
    const [dish, setDish] = useState(DISHES)
    const [dishItem, setDishItem] = useState(null)
    const selectedDish = (dishNew)=>{
        setDishItem(dishNew)
    }

    const menu = dish.map(item=>{
        return <MenuItem 
            dishNew={item}
            key={item.id}
            selectedDish={selectedDish}
        />
    })
   

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    {menu}
                </div>
                <div className='col-6'>
                    {dishItem && <DishDetail dishItem={dishItem} key={dishItem.id}/>}
                </div>
            </div>
        </div>
    )
}

export default Menu
