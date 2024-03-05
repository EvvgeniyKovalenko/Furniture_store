import React from 'react'
import s from './Header.module.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from 'react';


const Header = () => {

  let [click, setClick]=useState(false)


  return (
    <div className={s.header_wrapper}>

        <div className={s.header_wrapper_top}>
        
              <div>
                 Лого
              </div>
            
            <div className={s.info_wrapper}>

               <HiOutlineShoppingBag className={click?s.shop_card_button_true:s.shop_card_button_false}
                                      onClick={()=>{setClick(!click)}} />

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