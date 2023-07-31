import React, { useEffect } from 'react'
import { Booklist, Cart } from '../../Components'
import { useDispatch } from 'react-redux'
import fetchAllCartItems from '../../store/reducers/CartCreator'

const MainPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllCartItems())
  }, [])
  return (
    <main className='container'>
        <Booklist/>
        <Cart/>
    </main>
  )
}

export default MainPage