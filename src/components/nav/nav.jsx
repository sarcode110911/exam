import React from 'react'
import './nav.css'

export default function Nav() {
  return (
    <div className='my_navbar'>
        <div className='container row my_navbar2'>
            <div className='nav_logo'>
                <img src="assets/images/nav_icon.png" alt="nav_img" />
            </div>
            <div className='row'>
                <div className='row nav_items'>
                    <div className='nav_main_item special1 white'>
                        <p className='des main_nav_string'>Главная</p>
                    </div>
                    <div className='nav_item special2 white'>
                        <p className='des nav_string'>Каталог</p>
                    </div>
                    <div className='nav_item special3 white'>
                        <p className='des nav_string row'>О нас
                        <div className='about_img'>
                            <img src="assets/images/Vector (9).png" alt="" />
                        </div>
                        </p>
                    </div>
                    <div className='nav_item special4 white'>
                        <p className='des nav_string'>Новости</p>
                    </div>
                    <div className='nav_item special5 white'>
                        <p className='des nav_string'>Блог</p>
                    </div>
                    <div className='nav_item special6 white'>
                        <p className='des nav_string'>Контакты</p>
                    </div>
                </div>
                <div className='row langue_div'>
                    <div className='langue_img'>
                        <img src="assets/images/rus.png" alt="rus" />
                    </div>
                    <div>
                        <p className='title langue white'>РУС</p>
                    </div>
                    <div>
                        <img src="assets/images/strelka_nav.png" alt="strelka" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
