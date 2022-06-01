import React from 'react';

import { BsPlusLg } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../Button/Button';
import Input from '../Input/Input';

import style from './headerLeft.module.scss';

const HeaderLeft = () => {
    return (
        <header className={style.headerLeft}>
            <div className={style.plus}>
               <Button>
                    <BsPlusLg className={style.plusIcon} />
               </Button>
            </div>
            <div className={style.search}>
               <Button>
                    <BsSearch className={style.searchIcon} />
               </Button>
            </div>
            <div className={style.arrowDown}>
                <Button>
                    <IoIosArrowDown className={style.arrowDownIcon} />
                </Button>
            </div>
            <div className={style.input}>
                <Input placeholder="Search" />
            </div>
        </header>
    );
}

export default HeaderLeft;
