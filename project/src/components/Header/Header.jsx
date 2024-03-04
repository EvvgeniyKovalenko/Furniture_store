import React from 'react'
import s from './Header.module.css'
import imgTitle from '../../../public/img/title.jpg'

const Header = () => {
  return (
    <div className={s.header_wrapper}>

        <div className={s.header_wrapper_top}>
        
              <div>
                Лого
              </div>
            
            <div className={s.info_wrapper}>
                <ul>
                  <li>Про нас</li>
                  <li>Контакты</li>
                  <li>Кабинет</li>
                </ul>
            </div>

        </div>

        <div className={s.header_wrapper_bottom}>
          
               <div className={s.header_wrapper_bottom_img}>

               </div>
          

            <div className={s.header_wrapper_bottom_text}>
              <p>Лучшие товары для ващего дома</p>
              <p>по низким ценам</p>
            </div>


        </div>

    

    </div>
  )
}

export default Header