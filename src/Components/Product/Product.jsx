import React from 'react';
import Button from '../Button/Button';

import { BsInfoCircle } from 'react-icons/bs';

import style from './product.module.scss';

const Product = ({
    id,
    img,
    name,
    price,
    countVariations
}) => {
    return (
        <div className={style.product}>
            <div className={style.buttonInfo}>
                <Button theme="primary">
                    <BsInfoCircle className={style.infoIcon} />
                </Button>
            </div>
            <img src={`${img}`} alt="img" className={style.img} />
            <span className={style.name}>{name}</span>
            <span className={style.price}>${price}</span>
            {countVariations &&
                <span className={style.countVariations}>{countVariations} variations</span>}
        </div>
    );
}

export default Product;
