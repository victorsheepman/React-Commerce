import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import priceFormat from '../../utils/priceFormat'
export const Detail = ({id, price, product:{description, images, metadata}}) => {
//propiades y estdos del componente
  const [size, setSize] = useState('S')
  const usd = priceFormat(price)
  const {color} = metadata;
  const talla = metadata.size;
  const Sizes = talla.split(','); 
  console.log(Sizes);
  const  { addToCart } = useContext(cartContext);
  const handleClick = () => {
    addToCart({
      des: description,
      img: images[0],
      usd: price,
      ID: id,
      Talla: size
    })
  }
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
              {Sizes.map(item=>(
                  <button key={item} className={size == item ? 'sidebar__size__button--black' : 'sidebar__size__button'} onClick={() => setSize(item)}>{item}</button>
              ))}
            </div>
          </section>
          <button className='sidebar__add body-16' onClick={handleClick}>
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
