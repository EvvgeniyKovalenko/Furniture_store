import React from 'react'
import s from './Main.module.css'
import Item from './Item/Item'

const Main = (props) => {
debugger
  let items = props.store.items.map((item)=>(<Item title={item.title}
                                                   desc={item.desc} 
                                                   price={item.price}   
                                                   img={item.img} />))
  return (
    <div className={s.main_wrapper}>
       {items}
    </div>
  )
}

export default Main