import React from 'react';

import style from './headerRight.module.scss';

import { BsPeopleFill } from 'react-icons/bs';

const HeaderRight = () => {
    return (
        <header className={style.headerRight}>
           <div className={style.customer}>
               <div className={style.customerIconContainer}>
                    <BsPeopleFill className={style.customerIcon} />
               </div>
                <div className={style.addCustomer}>
                    <span className={style.addCustomerText}>Add Customer</span>
                </div>
           </div>
           <div className={style.guest}>
                <span className={style.guestText}>Guest</span>
           </div>
        </header>
    );
}

export default HeaderRight;
