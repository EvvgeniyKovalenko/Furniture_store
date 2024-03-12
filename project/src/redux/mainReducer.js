const ADD_BASKET = 'ADD_BASKET';
const DELETE_ITEM = 'DELETE_ITEM'


let initialState = {
    items:[
        {
          id:1,
          title: 'стул',
          img: 'chear.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90'

        },
        {
          id:2,
          title: 'стол',
          img: 'table.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90'

        },
        {
          id:3,
          title: 'кровать',
          img: 'bed.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90'

        },
        {
          id:4,
          title: 'диван',
          img: 'sofa.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90'

        },
        {
          id:5,
          title: 'тумбочка',
          img: 'nightstand.jpg',
          desc: 'мягкий икеевский стул',
          categori: 'chairs',
          price:'49.90'

        }
      ],
    basketItem:[],
    totalPrice: 0
}


let mainReducer = (state=initialState, action)=>{
switch(action.type){
  case ADD_BASKET:
    return{
      ...state,
      basketItem:[...state.basketItem, action.getItem]
    } 
    
  case DELETE_ITEM:
    return {
    ...state,
    basketItem: state.basketItem.filter((elem)=>(elem.id!==action.getId))
    }
  
  
  default: return state
}
}

export const addBasketCreator = (item)=>({type: ADD_BASKET, getItem:item})
export const deleteItemCreator = (id)=>({type:DELETE_ITEM, getId:id})


export default mainReducer;