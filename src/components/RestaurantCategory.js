import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({category, isExpanded, setIndex}) => {
  const handleClick = () => {
    setIndex();
  }
  return (
   <>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{category.name} ({category.items.length})</span>
        <span>{!isExpanded ? '⬇️' : '⬆️'}</span>
      </div>
      {isExpanded && <ItemList items={category.items} />}
    </div>
    
   </>
  )
}

export default RestaurantCategory