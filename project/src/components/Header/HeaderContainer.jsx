import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import { deleteItemCreator } from '../../redux/mainReducer'


const mapStateToProps = (state)=>{
    return{
        items: state.main.items,
        basketItem: state.main.basketItem



    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        deleteItem: (id)=>{
            dispatch(deleteItemCreator(id))
        }

    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer