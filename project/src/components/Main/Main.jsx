import React from 'react'
import s from './Main.module.css'
import Item from './Item/Item'

const Main = (props) => {

  let items = props.store.getState().main.items.map((item)=>(<Item key={item.id}
                                                   title={item.title}
                                                   desc={item.desc} 
                                                   price={item.price}   
                                                   img={item.img} 
                                                   item={item}
                                                   basketItem={props.store.getState().main.basketItem}
                                                   store={props.store}
                                                   
                                                   />))
  return (
    <div className={s.main_wrapper}>
       {items}
    </div>
  )
}

export default Main