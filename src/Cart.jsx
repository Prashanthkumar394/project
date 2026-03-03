import React, { useContext } from 'react'
import { myContext } from './App'
import './home.css'

const Cart = () => {
  let appState = useContext(myContext)
  return (
    <div className='all'>
      { appState.cart.length > 0 ? appState.cart.map((e) => {
          return <div key={ e.id }>
            <img src={ e.image } alt="" />
            <h2>{ e.title }</h2>
            <h3>Price: { e.price }</h3>
            <button onClick={ () => {
              appState.dispatch({msg: "remove", payload: e.id})
            } }>remove</button>
            </div>
      }) : "no products to display" }
    </div>
  )
}

export default Cart