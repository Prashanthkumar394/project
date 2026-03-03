import React, { createContext, useReducer } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Cart from './Cart'
import Error from './Error'

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      }
    ]
  }
])

export let myContext = createContext()

function reducer(state, action) {
  switch(action.msg) {
    case 'all':
      return {...state, allProducts: action.payload, loading: false}
    case 'cart':
      return {...state, cart: [...state.cart, action.payload]}
    case 'remove':
      return {...state, cart: state.cart.filter(e => e.id != action.payload)}
  }
}


const App = () => {
  let [state, dispatch] = useReducer(reducer, {
    allProducts: "",
    cart: [],
    loading: true,
  })
  return (
    <myContext.Provider value={{...state, dispatch}}>
      <RouterProvider router={ myRouter }></RouterProvider>
    </myContext.Provider>
  )
}

export default App