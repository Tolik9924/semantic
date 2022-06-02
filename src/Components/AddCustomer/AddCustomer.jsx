import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

import style from './addCustomer.module.scss';

const AddCustomer = () => {
    return (
        <div className={style.addCustomer}>
            <header className={style.header}>
                <div className={style.left}>
                    <span>Select customer</span>
                </div>
                <div className={style.left}>
                    <Button>
                        <span className={style.close}>X</span>
                    </Button>
                </div>
            </header>
            <div className={style.buttons}>
                <div className={style.firstButton}>
                    <Button>
                        <span>Add New Customer</span>
                    </Button>
                </div>
                <div className={style.secondButton}>
                    <Button>
                        <span>View Customers</span>
                    </Button>
                </div>
            </div>
            <div className={style.input}>
                <Input placeholder='Search Customers' />
            </div>
            <div>
                <span>Please enter 3 or more characters</span>
            </div>
        </div>
    );
}

export default AddCustomer;
