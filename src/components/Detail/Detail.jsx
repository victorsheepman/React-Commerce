import React, { useState } from 'react'

export const Detail = ({img, description,price, colors}) => {
  const [size, setSize] = useState(0)
  
  return (
    <div className='detail'>
        <figure className='detail__image'></figure>
        <aside className='sidebar'>
          <span className='caption sidebar__ruta'>Tienda / Hombres - Sudaderas / Sudadera 365 Signature</span>
          <div className='sidebar__description'>
            <h2 className='medium-22'>
              365 Signature sudadera con capucha
            </h2>
            <p className='body-16-bold'>$175 USA</p>
          </div>       
          <section className='sidebar__colors'>
            <h6 className='body-16'>Color</h6>
            <div>
              <figure className='card__body__circle--first' style={{background: 'black'}}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(198, 44, 47, 1)' }}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(148, 183, 205, 1)'}}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(0, 0, 0, 1)'}}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(41, 86, 152, 1)'}}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(229, 219, 237, 1)' }}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(201, 88, 165, 1)'}}></figure>
              <figure className='card__body__circle' style={{background:  'rgba(42, 100, 119, 1)'}}></figure>
            </div>
          </section>
          <section className='sidebar__size'>
          <h6 className='body-16'>Tamaño</h6>
            <div>
              <button className={size == 1 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(1)}>XXS</button>
              <button className={size == 2 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(2)}>XS</button>
              <button className={size == 3 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(3)}>S</button>
              <button className={size == 4 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(4)}>M</button>
              <button className={size == 5 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(5)}>L</button>
              <button className={size == 6 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(6)}>XL</button>
              <button className={size == 7 ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(7)}>XXL</button>
            </div>
          </section>
          <button className='sidebar__add body-16'>
            AÑADIR AL CARRITO
          </button>
        </aside>
    </div>
  )
}
