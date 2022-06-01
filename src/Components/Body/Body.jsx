import React from 'react';

import { BiGrid } from 'react-icons/bi';
import { CgListTree } from 'react-icons/cg';
import Button from '../Button/Button';
import Product from '../Product/Product';

import style from './body.module.scss';

const Body = ({
    data
}) => {


    return (
        <main>
            <header className={style.mainHeader}>
                <div className={style.left}>
                    <div className={style.box}>
                        <Button>
                            <BiGrid className={style.boxIcon} />
                        </Button>
                    </div>
                    <div className={style.tree}>
                        <Button>
                            <CgListTree className={style.treeIcon} />
                        </Button>
                    </div>
                </div>
                <nav className={style.menu}>
                    <ul className={style.list}>
                        <li className={style.itemChoose}>
                            <a href="#" className={style.itemTextChoose}>Products</a>
                        </li>
                        <li className={style.item}>
                            <a href="#" className={style.itemText}>Categories</a>
                        </li>
                        <li className={style.item}>
                            <a href="#" className={style.itemText}>Clothing</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={style.content}>
                {data.map((item) => {
                    return (
                        <Product img={item.img}
                                 name={item.name} 
                                 price={item.price}
                                 countVariations={item.countVariations} />
                    )
                })}
            </div>
        </main>
    );
}

export default Body;
