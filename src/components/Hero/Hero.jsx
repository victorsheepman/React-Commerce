import React from 'react'
import { Drop } from '../Drop/Drop'
import { Filter } from '../Filter/Filter'

export const Hero = () => {
  return (
    <>
      <div className='hero'>
        <h2 className='medium-22-bold'>Ropa para Hombre</h2> 
        <p className='body-16'>¿Manteniendo abiertas sus opciones? Descubra todo en un solo lugar. Compre nuestra ropa masculina favorita con chaquetas, 365 esenciales, accesorios y más. Hay muchos estilos que se adaptan a todos sus deseos y necesidades.</p>
      </div>
      <Filter />
      <div className='option'>
        <Drop name='Color' stock={false}/>
        <Drop name='Tamaño'stock={false}/>
        <Drop name='Material' stock={false}/>
        <Drop name='Categoría' stock={false}/>
        <Drop name='Stock' stock={true} /> 
        <div className='option__filter'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className='body-16'>
            Filtros
          </p>
        </div>
        <p className='body-14-regular'>
          268 Artículos
        </p>
       
      </div>
    </>
  )
}
