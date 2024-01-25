import React from 'react'
import './header_card.css'

export default function Header_card({title, des, img}) {
  return (
    <div className='header_card row'>
        <div className='header_card_titles'>
            <p className='header_card_title title'>{title}</p>
            <p className='header_card_des des'>{des}</p>
            <div className='row align'>
                <div className='header_card_img'>
                    <img src="assets/images/more.png" alt="" />
                </div>
                <div>
                    <p className='header_card_more des2'>Перейти</p>
                </div>
            </div>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}
