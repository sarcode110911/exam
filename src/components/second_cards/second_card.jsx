import React from 'react'
import './second_card.css'

export default function Second_card({img, title}) {
  return (
    <div className='second_card'>
        <div className='second_card_img'>
            <img src={img} alt="" />
        </div>
        <div className='des2'>
            <p className='second_card_title'>{title}</p>
        </div>
    </div>
  )
}
