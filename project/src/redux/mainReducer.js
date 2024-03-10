const ADD_BASKET = 'ADD_BASKET';

let initialState = {
    items:[
        {
          id:1,
          title: 'стул',
          img: 'chear.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90$'

        },
        {
          id:2,
          title: 'стол',
          img: 'table.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90$'

        },
        {
          id:3,
          title: 'кровать',
          img: 'bed.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90$'

        },
        {
          id:4,
          title: 'диван',
          img: 'sofa.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90$'

        },
        {
          id:5,
          title: 'тумбочка',
          img: 'nightstand.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90$'

        }
      ],
    basketItem:[]
}


let mainReducer = (state=initialState, action)=>{
switch(action.type){
  case ADD_BASKET:{
    return{
      ...state,
      basketItem:[...state.basketItem, action.getItem]
    } 
  }
  default: return state
}
}

export const addBasketCreator = (item)=>({type: ADD_BASKET, getItem:item})

export default mainReducer;