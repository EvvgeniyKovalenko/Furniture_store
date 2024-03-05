import React from 'react'
import s from './Item.module.css'

function Item(props) {
  
  return (
    <div className={s.item_wrapper}>

      <div className={s.item_wrapper_img}>
         <img src={'./img/'+props.img}/>
      </div>

      <div className={s.item_wrapper_description}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <b>{props.price}</b>
      </div>
      <button>+</button>

    </div> 
  )
}

export default Item