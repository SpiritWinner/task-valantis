import React from 'react';
import './Product.scss';

import ringImage from '../image/rings.png';

const Product = ({ id, product, price, brand }) => {
  return (
    <>
      <div className='product'>
        <img
          className='product-img'
          src ={ringImage}
          alt = 'ring'
          width='256px'
          loading='lazy'
        > 
        </img>
        <div className='product-price'>
          {price} ₽
        </div>
        <div className='product-title'>
          {product} 
        </div>
        Бренд: {brand === null ? 'неизвестен' : brand}
        <div className='product-id'>
          ID: {id}
        </div>
      </div>
    </>
  );
};

export default Product ;