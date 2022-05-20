import React from "react"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios"
const MySwal = withReactContent(Swal)

export const CheckoutForm = ({total}) => {
//Hooks
  const stripe = useStripe()
  const elements = useElements()

//Principal function
  const handleClick = async (e) =>{
    e.preventDefault();
    const {error , paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card: elements.getElement(CardElement)
    }) 
    if(!error){
      const { id } = paymentMethod;
     
      await axios.post('http://localhost:3001/api/checkout',{
        id,
        amount: total * 100
      }) 
      MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        icon:"success",
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p className='medium-22-bold'>Pago Realizado</p>)
      })
    }
  }
  return (
    <>
      <form className='checkoutForm'  >
        <label className='body-14' htmlFor="nombre">
          Nombre
        </label>
        <input name="nombre" type="text" className='checkoutForm__input ' />
        <label className='body-14' htmlFor="apellido">
          Apellido
        </label>
        <input name="apellido" type="text" className='checkoutForm__input' />
        <label className='body-14' htmlFor="direccion">
          Direccion
        </label>
        <input name="direccion" type="text" className='checkoutForm__input ' />
        <label className='body-14' htmlFor="email">
          E-mail
        </label>
        <input name="email" type="email" className='checkoutForm__input ' />
        <label className='body-14'>
          Información de la tarjeta
        </label>
        <CardElement className='checkoutForm__input ' />
        <label className='body-14' htmlFor="nombre_tarjeta">
          Nombre en la tarjeta
        </label>
        <input name="nombre_tarjeta" type="text" className='checkoutForm__input ' />
        <button className='checkoutForm__button body-16' onClick={handleClick}>
          PAGAR AHORA
        </button>
      </form>
    </>
  )
}
