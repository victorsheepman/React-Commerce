import React from 'react';
import { Link } from 'gatsby';

export const Card = ({img, color, name, description, id}) => {
  return (
    <div className='card'>
        <figure className='card__image'>
            <img src={img} alt={'imagenn'} />
        </figure>
        <div className='card__body'>
          <Link to={`/${id}`} className='card__body__title body-16-bold '>
            {name}
          </Link >
          <section className='card__body__color'>
            <figure className='card__body__circle--first' style={{background: color}}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(198, 44, 47, 1)' }}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(148, 183, 205, 1)'}}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(0, 0, 0, 1)'}}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(41, 86, 152, 1)'}}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(229, 219, 237, 1)' }}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(201, 88, 165, 1)'}}></figure>
            <figure className='card__body__circle' style={{background:  'rgba(42, 100, 119, 1)'}}></figure>
          </section>
          <section className='card__body__footer'>
            <span className='body-14-regular'>{description}</span><p className='body-16-bold'>$ 175 USA</p>
          </section>
        </div>
    </div>
  );
};
