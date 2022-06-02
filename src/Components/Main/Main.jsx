import React from 'react';
import Aside from '../Aside/Aside';
import Body from '../Body/Body';

import HeaderLeft from '../HeaderLeft/HeaderLeft';
import HeaderRight from '../HeaderRight/HeaderRight';

import style from './main.module.scss';

const Main = ({
    data,
    selectCustomer,
    setSelectCustomer
}) => {
    return (
        <div className={style.container}>
            <header className={style.headerContainer}>
                <div className={style.left}>
                    <HeaderLeft />
                </div>
                <div className={style.right}>
                    <HeaderRight selectCustomer={selectCustomer}
                                 setSelectCustomer={setSelectCustomer}/>
                </div>
            </header>
            <div className={style.bodyContainer}>
                <main className={style.main}>
                    <Body data={data} />
                </main>
                <aside className={style.aside}>
                    <Aside data={data} />
                </aside>
            </div>
        </div>
    );
}

export default Main;
