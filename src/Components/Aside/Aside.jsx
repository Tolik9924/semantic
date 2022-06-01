import React from 'react';

import { CgListTree } from 'react-icons/cg';
import Button from '../Button/Button';

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
                    products
                </div>
            </main>
        </aside>
    );
}

export default Aside;
