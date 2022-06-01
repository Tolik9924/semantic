import React from 'react';

import style from './product.module.scss';

const Product = ({
    id,
    img,
    name,
    price,
    countVariations
}) => {
    return(
        <div className={style.product}>
            <img src={`${img}`} alt="img" className={style.img} />
           <span className={style.name}>{name}</span>
           <span className={style.price}>${price}</span>
           <span className={style.countVariations}>{countVariations} variations</span>
        </div>
    );
}

export default Product;
