import React, { useContext, useState } from 'react'
import { Item } from '../Item/Item'
import { cartContext } from '../../context/cartContext'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
export const Cart = ({show}) => {
  const {cart} = useContext(cartContext);
  
  return (
    <div className='cart'>
      <div className='cart__list'>
        <div className='cart__header'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => show(false)}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z" fill="black"/>
          </svg>
            <section>
              <h2 className='medium-22'>Carrito</h2>
              <p className='body-16'>1 artículo - $ 175 USA</p>
            </section>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className='cart__item'>
          {
            cart.map((item)=>(
              <Item key={item.ID} description={item.des} price={item.usd} image={item.img} id={item.ID}/>
            ))
          }
        </div>
        {/*<button className='cart__buy body-16-bold' >
          Comprar
        </button>*/}
        <CheckoutForm />
      </div>
    </div>
  )
}