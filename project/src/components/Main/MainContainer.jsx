import React from "react";
import {connect} from 'react-redux'
import Main from "./Main";
import { addBasketCreator } from "../../redux/mainReducer";


const mapStateToProps = (state)=>{
    return{
        items: state.main.items,
        basketItem: state.main.basketItem

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addItemToBasket: (item)=>{
            dispatch(addBasketCreator(item))
        }


    }
}

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(Main)

export default MainContainer