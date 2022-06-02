import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { BsPeopleFill } from 'react-icons/bs';
import { FaStreetView } from 'react-icons/fa';

import style from './addCustomer.module.scss';

const AddCustomer = ({
    selectCustomer,
    setSelectCustomer
}) => {
    return (
        <div className={style.addCustomer}>
            <header className={style.header}>
                <div className={style.left}>
                    <span className={style.selectCustomer}>Select customer</span>
                </div>
                <div className={style.right}>
                    <Button onClick={() => setSelectCustomer(!selectCustomer)}>
                        <span className={style.close}>X</span>
                    </Button>
                </div>
            </header>
            <div className={style.buttons}>
                <div className={style.firstButton}>
                    <Button theme='addNewCustomer'>
                        <BsPeopleFill className={style.people} />
                        <span className={style.addNewCustomerText}>Add New Customer</span>
                    </Button>
                </div>
                <div className={style.secondButton}>
                    <Button theme='viewCustomers'>
                        <FaStreetView className={style.view} />
                        <span className={style.viewCustomers}>View Customers</span>
                    </Button>
                </div>
            </div>
            <div className={style.input}>
                <Input placeholder='Search Customers' theme='addCustomerInput' />
            </div>
            <div className={style.pleaseEnterMoreCharactersContainer}>
                <span className={style.pleaseEnterMoreCharacters}>
                    Please enter 3 or more characters
                </span>
            </div>
        </div>
    );
}

export default AddCustomer;
