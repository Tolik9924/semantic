import React from 'react';

import { HiDotsHorizontal } from 'react-icons/hi';
import Button from '../Button/Button';

import style from './productCheckout.module.scss';

const ProductCheckout = ({
    img,
    name,
    price
}) => {
    return (
        <div className={style.productCheckout}>
            <div className={style.left}>
                <div className={style.imgContainer}>
                    <img src={img} className={style.img} />
                </div>
                <div className={style.nameContainer}>
                    <span className={style.name}>{name}</span>
                </div>
            </div>
            <div className={style.right}>
              <div className={style.priceContainer}>
                <span className={style.price}>${price}</span>
              </div>
                <div className={style.dotsContainer}>
                   <Button>
                        <HiDotsHorizontal className={style.dots} />
                   </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckout;
