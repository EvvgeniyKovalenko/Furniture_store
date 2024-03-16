import React from 'react'
import s from './Main.module.css'
import Item from './Item/Item'


const Main = (props) => {

  let items = props.items.map((item)=>(<Item key={item.id}
                                                   title={item.title}
                                                   desc={item.desc} 
                                                   price={item.price}   
                                                   img={item.img} 
                                                   item={item}
                                                   basketItem={props.basketItem}
                                                   addItemToBasket={props.addItemToBasket}
                                                   
                                                   />))
  return (
    <div className={s.main_wrapper}>
       {items}
    </div>
  )
}

export default Main