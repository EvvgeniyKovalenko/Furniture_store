import React from 'react'
import s from './Header.module.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from 'react';
import BasketItem from './BasketItems/BasketItem'
import EmptyBasket from './EmptyBasket/EmptyBasket';



const Header = (props) => {

  let [click, setClick]=useState(false)
  let basketItem =props.store.getState().main.basketItem
  let basketItems = basketItem.map((item)=>(<BasketItem  store={props.store}
                                                         basketItem={props.store.getState().main.basketItem}
                                                         title={item.title}
                                                         price={item.price} 
                                                         item={item}  
                                                         img={item.img} 
                                                         key ={item.id}
                                                         
  />))



const getPrice = (object)=>{
  return object.reduce((count,item)=>{
    let stringToNumber =parseFloat(item.price)
    return count + stringToNumber
  },0)
  }

const totalPrice = getPrice(basketItem)


// логика подстановки надписи:'товаров нет', если корзина пуста
let emptyBasket = ()=>(basketItem.length > 0 ?basketItems:<EmptyBasket/>)



  return (
    <div className={s.header_wrapper}>

        <div className={s.header_wrapper_top}>
        
              <div>
                 Лого
              </div>
            
            <div className={s.info_wrapper}>
                
                {/*логика по изменению цвета иконки корзины  */}
               <HiOutlineShoppingBag className={click?s.info_wrapper_basket_true:s.info_wrapper_basket_false}
                                      onClick={()=>{setClick(!click)}} />

                 {/* логика по открытию окна корзины */}
                {click&&<div className={s.info_wrapper_basketArea}>
                {emptyBasket()}
                {basketItem.length>0?<div className={s.info_wrapper_total}>Общаяя стоимость: {totalPrice} $</div>:''}
                </div>}
                                    
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