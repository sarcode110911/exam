import React from 'react'
import Second_card from '../../components/second_cards/second_card'
import './second_section.css'

export default function Second_section() {
  return (
    <div className='second_section container'>
        <p className='title second_section_title'>Категории товаров</p>
        <div className='row second_cards_div'>
            <Second_card img={'./assets/images/1.png'} title='Гибкая эндоскопия'/>
            <Second_card img={'./assets/images/2.png'} title='Мобильные кабинеты'/>
            <Second_card img={'./assets/images/3.png'} title='Оториноларин-гология'/>
            <Second_card img={'./assets/images/4.png'} title='Реанимация'/>
            <Second_card img={'./assets/images/5.png'} title='Акушерство и гинекология'/>
            <Second_card img={'./assets/images/6.png'} title='Скорая помощь'/>
        </div>
        <div className='row second_cards_div2'>
            <Second_card img={'./assets/images/7.png'} title='Стерилизация'/>
            <Second_card img={'./assets/images/8.png'} title='Физиотерапия и реабилитация'/>
            <Second_card img={'./assets/images/9.png'} title='Хирургия'/>
            <Second_card img={'./assets/images/10.png'} title='Функциональная диагностика'/>
            <Second_card img={'./assets/images/11.png'} title='Рентгенология и томография'/>
            <Second_card img={'./assets/images/12.png'} title='Урология'/>
        </div>

        <div className='align row'>
            <div>
                <p className='title second_section_title2'>Преимущества работы с нами</p>
            </div>
            <div>
                <hr/>
            </div>

            <div></div>
            
        </div>
    </div>
  )
}
