import React, { useContext, useEffect } from 'react'
import { myContext } from './App'
import './home.css'

const Home = () => {
  let appState = useContext(myContext)
  useEffect(() => {
    async function xyz() {
      let res = await fetch('https://fakestoreapi.com/products')
      let data = await res.json()
      console.log(data)
      appState.dispatch({msg: "all", payload: data})
    }
    xyz()
  }, [])
  if(appState.loading) {
    return <div>loading...</div>
  }
  return (
    <div className='all'>
      { appState.allProducts.map((e) => {
          return <div key={ e.id }>
            <img src={ e.image } alt="" />
            <h3>{ e.title }</h3>
            <h4>Price: { e.price }</h4>
            <button onClick={ () => {
              appState.dispatch({msg: "cart", payload: e})
            } }>add to cart</button>
          </div>
      }) }
    </div>
  )
}

export default Home