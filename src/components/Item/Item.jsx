import React, { useState } from 'react'

export const Item = () => {
    const [quiantity, setQuantity] = useState(1)
  return (
    <article className='item'>
        <figure  className='item__image'></figure>
        <div  className='item__body'>
            <h6 className='body-16'>365 Signature sudadera con capucha</h6>
            <strong className='body-16-bold'>$175 USA</strong>
            <div className='item__quantity'>
                <button className='body-16' onClick={() => setQuantity(quiantity - 1)} disabled={quiantity <= 1}>-</button>
                <p>{quiantity}</p>
                <button className='body-16' onClick={() => setQuantity(quiantity + 1)}>+</button>
            </div>        
        </div>
    </article>
  )
}
