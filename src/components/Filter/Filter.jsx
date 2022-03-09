import React,{useContext, useState} from 'react'
import { cartContext } from '../../context/cartContext'
export const Filter = () => {
  const [click, setClick] = useState(false);
  const { setFilter } = useContext(cartContext);
  const selectAll = () =>{
     setClick(false)
     setFilter('todo')
  }
  const selectFogazzi = () =>{
    setClick( true )
    setFilter('fogazzi')
  }
  return (
    <ul className='filter'>
        <li className={click ? 'filter__item' : 'filter__item--active'} onClick={selectAll}>Todo</li>
        <li className={click ? 'filter__item--active' : 'filter__item'} onClick={selectFogazzi}>Pulsera</li>
        <li className='filter__item' onClick={() => setFilter('shirt')}>M-1</li>
        <li className='filter__item'>M-2</li>
    </ul>
  )
  }