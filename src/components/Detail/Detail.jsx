import React, { useState } from 'react'
import priceFormat from '../../utils/priceFormat'
export const Detail = ({price, product:{description, images, metadata}}) => {
//propiades y estdos del componente
  const [size, setSize] = useState(0)
  const usd = priceFormat(price)
  const {color} = metadata;
  return (
    <div className='detail'>
        <figure className='detail__image'>
          <img src={images[0]} alt="" /> 
        </figure>
        <aside className='sidebar'>
          <span className='caption sidebar__ruta'>Tienda / Hombres - Sudaderas / Sudadera 365 Signature</span>
          <div className='sidebar__description'>
            <h2 className='medium-22'>
              {description}
            </h2>
            <p className='body-16-bold'>{usd} USA</p>
          </div>       
          <section className='sidebar__colors'>
            <h6 className='body-16'>Color</h6>
            <div>
              <figure className='card__body__circle--first' style={{background: color}}></figure>
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
          <section className='sidebar__body'>
            <div className='sidebar__body__header'>
                <h5 className='caption'>DESCRIPCIÓN</h5>
            </div>
            <p className='body-14'>
              Nombrada apropiadamente por ti, nuestra sudadera con capucha 365 Signature es el codiciado favorito acogedor que seguirás buscando. Crea tu propio chándal 365 Signature con estilos y colores para todos, de todos los tamaños. <br />
              <br />
              Esta exclusiva sudadera con capucha está confeccionada con una mezcla de algodón orgánico, reciclado y de origen responsable. Su tela premium, más gruesa y más pesada está cepillada en el interior y es perfecta para los días en los que desea algo más suave y acogedor. Se ve tan bien con jeans como con algo un poco más elegante.
              <br />
              <br />
              El color negro se crea mediante un sistema de agua reciclada.
            </p>
          </section>
        </aside>
    </div>
  )
}
