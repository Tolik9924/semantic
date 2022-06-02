import React from 'react';

import { CgListTree } from 'react-icons/cg';
import { RiArrowUpSLine } from 'react-icons/ri';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { AiOutlineHolder } from 'react-icons/ai';
import Button from '../Button/Button';
import ProductCheckout from '../ProductCheckout/ProductCheckout';

import style from './aside.module.scss';

const Aside = ({
    data
}) => {

    return (
        <aside>
            <header className={style.header}>
                <div className={style.product}>
                    <span className={style.productText}>Product</span>
                </div>
                <div className={style.totalContainer}>
                    <div className={style.total}>
                        <span className={style.totalText}>Text</span>
                    </div>
                    <div className={style.tree}>
                        <Button>
                            <CgListTree className={style.treeIcon} />
                        </Button>
                    </div>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.products}>
                    {data.map((item) => {
                        return (
                            <ProductCheckout img={item.img}
                                name={item.name}
                                price={item.price} />
                        );
                    })}
                </div>
                <div className={style.totalSumContainer}>
                    <div className={style.left}>
                        <div className={style.arrowContainer}>
                            <Button>
                                <RiArrowUpSLine className={style.arrow} />
                            </Button>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.total}>
                            <div className={style.arrowUpContainer}>
                                <BsArrowUpRightSquare className={style.arrowUp} />
                            </div>
                            <div className={style.includesTaxesContainer}>
                                <div className={style.taxesContainer}>
                                    <span className={style.includesTaxes}>Includes Taxes</span>
                                </div>
                                <div className={style.totalContainer}>
                                    <span className={style.total}>Total</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.sumContainer}>
                            <span className={style.sum}>$417.28</span>
                        </div>
                    </div>
                </div>
                <div className={style.buttons}>
                    <div className={style.buttonLeft}>
                        <Button theme='verticalMenu'>
                            <AiOutlineHolder className={style.verticalMenu} />
                        </Button>
                    </div>
                    <div className={style.buttonRight}>
                        <Button theme='checkout'>
                            <span className={style.checkout}>Checkout $417.28</span>
                        </Button>
                    </div>
                </div>
            </main>
        </aside>
    );
}

export default Aside;
