import React,{useState} from 'react'

export const Filter = () => {
    const [click, setClick] = useState(false)
  return (
    <ul className='filter'>
        <li className={click ? 'filter__item' : 'filter__item--active'} onClick={() => setClick(false)}>Todo</li>
        <li className={click ? 'filter__item--active' : 'filter__item'} onClick={() => setClick(true)}>Sudadera</li>
        <li className='filter__item'>Pantalones</li>
        <li className='filter__item'>Vermudas</li>
    </ul>
  )
  }