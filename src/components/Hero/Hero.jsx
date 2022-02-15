import React from 'react'
import { Filter } from '../Filter/Filter'

export const Hero = () => {
  return (
    <>
      <div className='hero'>
        <h2 className='medium-22-bold'>Ropa para Hombre</h2> 
        <p className='body-16'>¿Manteniendo abiertas sus opciones? Descubra todo en un solo lugar. Compre nuestra ropa masculina favorita con chaquetas, 365 esenciales, accesorios y más. Hay muchos estilos que se adaptan a todos sus deseos y necesidades.</p>
      </div>
      <Filter />
    </>
  )
}
