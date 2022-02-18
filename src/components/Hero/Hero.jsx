import React from 'react'
import { Drop } from '../Drop/Drop'
import { Filter } from '../Filter/Filter'
import { Option } from '../Option/Option'

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
        <p className='body-14-regular'>
          268 Artículos
        </p>
      </div>
    </>
  )
}
