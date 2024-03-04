import React from 'react'
import s from './Header.module.css'

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

        <div>
            <div>
                <img></img>

            </div>

            <div>
              <p></p>
              <p></p>
            </div>


        </div>

    

    </div>
  )
}

export default Header