import React from 'react'
import './home_page.css'
import Nav from '../../components/nav/nav'
import Header_card from '../../components/header_card/header_card'


export default function Home_section() {
  return (
    <div className='home_page'>
      <Nav/>
      <div className='row search_section container'>
        <div>
          <button className='row header_btn'>
            <img className='btn_img' src="assets/images/strelka.png" alt="" />
            <p className='des2 header_btn_p white'>Каталог</p>
          </button>
        </div>
        <div>
          <input className='header_input des' type="text" placeholder='search'/>
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </div>

      <div className='bg_color'>
        <div className='row header_main container'>
          <div className='header_main_titles'>
            <p className='title header_title'>Медицинское оборудование от<br/> лучших производителей</p>
            <p className='des header_des'>EТ400 – многофункциональный универсальный акушерский стол с<br/> механико- гидравлическим приводом, специально предназначенный для<br/> безопасного позиционирования пациента при выполнении<br/> гинекологически - акушерских операций, осмотров и родов в гинекологических отделениях, женских консультациях, роддомах.</p>
            <button className='header_btn btn_header'>
              <p className='btn_header_string white'>Подробнее</p>
            </button>
          </div>
          <div className='header_main_img'>
            <img src="assets/images/image 22.png" alt="" />
          </div>
        </div>
      </div>

      <div className='container row'>
        <div className='bg_header_card1'>
          <Header_card 
          title='SMART 3D-X. Дентальный 3D Рентген' 
          des='Точное сканирование любого трека может быть достигнуто с помощью высококачественным QuartZ. Множественные криволинейные траектории томографии больше подходят для зубной дуги пациента.'  
          img={'./assets/images/rengen.png'}
          />
        </div>
        <div className='header_card row bg_header_card2'>
          <div className='header_card_titles one'>
              <p className='header_card_title title'>Ультразвуковой аппарат VINNO E20</p>
              <p className='header_card_des des'>Революционная радиочастотная платформа Автоматическая трассировка спектра PW/CW Комплексные функции 3D/4D Работа смарт – сенсорной панели</p>
              <div className='row align two'>
                  <div className='header_card_img'>
                      <img src="assets/images/more.png" alt="" />
                  </div>
                  <div>
                      <p className='header_card_more des2'>Перейти</p>
                  </div>
              </div>
          </div>
            <div className='header_card_IMG'>
                <img src='./assets/images/rengen2.png' alt="" />
            </div>
          </div>
      </div>
    
    </div>
  )
}
