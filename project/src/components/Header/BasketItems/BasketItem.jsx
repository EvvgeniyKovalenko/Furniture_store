import React from 'react'
import s from './BasketItem.module.css'


function BasketItem(props) {

  const del = ()=>{
    let id = props.item.id
    props.deleteItem(id)
  }



  return (

    <div className={s.BasketItem} onClick={del}>

        <div className={s.BasketItem_img}>
          <img src={'./img/'+props.img}/>
        </div>

        <div className={s.BasketItem_description}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p><b>{props.price}</b>
        </div>
  
  </div> 
  )
}

export default BasketItem