import React,{useContext, useState} from 'react'
import { cartContext } from '../../context/cartContext'
export const Filter = () => {
  const [click, setClick] = useState(0);
  const { setFilter } = useContext(cartContext);
  const HandleSelect = (number, filter) =>{
    setClick(number)
    setFilter(filter)
  } 
  return (
    <ul className='filter'>
        <li className={click == 0 ? 'filter__item--active' : 'filter__item'}  onClick={()=>HandleSelect(0,'todo')}>Todo</li>
        <li className={click == 1 ? 'filter__item--active' : 'filter__item'}  onClick={()=>HandleSelect(1,'M-1')}>M-1</li>
        <li className={click == 2 ? 'filter__item--active' : 'filter__item'}  onClick={()=>HandleSelect(2,'M-2')}>M-2</li>
        <li className={click == 6 ? 'filter__item--active' : 'filter__item'}  onClick={()=>HandleSelect(6,'M-6')}>M-6</li>
    </ul>
  )
  }