import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { DiBrackets } from 'react-icons/di';
import { MdLogout } from 'react-icons/md';
import Button from '../Button/Button';

import style from './menuAndNameOfUser.module.scss';

const MenuAndNameOfUser = () => {
    
    return(
        <div className={style.container}>
            <div className={style.left}>
                <Button>
                    <AiOutlineMenu className={style.menuIcon} />
                </Button>
            </div>

            <div class={style.middle}>
                <span className={style.middleText}>QA POS</span>
            </div>
            
            <div className={style.right}>
                <div className={style.brackets}>
                    <DiBrackets className={style.bracketsIcon} />
                </div>
                <div className={style.nameOfUser}>
                    <span className={style.nameOfUserText}>Tolik</span>
                </div>
                <div className={style.logout}>
                    <Button>
                        <MdLogout className={style.logoutIcon} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MenuAndNameOfUser;
