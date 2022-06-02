import React from 'react';

import { DiBrackets } from 'react-icons/di';
import { SiCircle } from 'react-icons/si';
import { FaRegPlusSquare } from 'react-icons/fa';
import { CgMenuBoxed } from 'react-icons/cg';
import { TbReportSearch } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BiStation } from 'react-icons/bi';
import { BsFlag } from 'react-icons/bs';
import { MdSyncAlt } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';

import style from './menu.module.scss';

const Menu = () => {

    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.brackets}>
                    <DiBrackets className={style.bracketsIcon} />
                </div>
                <div className={style.userInfo}>
                    <div className={style.nameSurnameContainer}>
                        <span className={style.nameSurname}>Tolik Galkevych</span>
                    </div>
                    <div className={style.nicknameContainer}>
                        <span className={style.nickname}>Tolik</span>
                    </div>
                </div>
            </header>
            <main className={style.main}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <span className={style.icon}><SiCircle /></span> 
                            <a className={style.texItem}>POS</a>
                        </li>
                        <li className={style.item}>
                            <span className={style.icon}><FaRegPlusSquare /></span> 
                            <a className={style.texItem}>Products</a>
                        </li>
                        <li className={style.item}>
                            <span  className={style.icon}><CgMenuBoxed /></span> 
                            <a className={style.texItem}>Orders</a>
                        </li>
                        <li className={style.item}>
                            <span  className={style.icon}><TbReportSearch /></span> 
                            <a className={style.texItem}>Reports</a>
                        </li>
                        <li className={style.item}> 
                            <span  className={style.icon}><BsPerson /></span>
                            <a className={style.texItem}>Customers</a>
                        </li>
                        <li className={style.item}>
                            <span className={style.icon}><AiOutlineDashboard /></span>
                            <a className={style.texItem}>Dashboard</a>
                        </li>
                        <li className={style.item}>
                            <span className={style.icon}><FiSettings /></span> 
                            <a className={style.texItem}>Settings</a>
                        </li>
                        <li className={style.item}>
                            <span className={style.icon}><BiStation /></span>
                            <a className={style.texItem}>Stations</a>
                        </li>
                        <li className={style.item}>
                            <span className={style.icon}><BsFlag /></span>
                            <a className={style.texItem}>Support</a>
                        </li>
                    </ul>
                <div className={style.down}>
                    <div className={style.downContainer}>
                        <span className={style.icon}><MdSyncAlt /></span>
                        <a className={style.texItem}>Sync Now</a>
                    </div>
                    <div className={style.downContainer}>
                        <span className={style.icon}><MdLogout /></span>
                        <a className={style.texItem}>Log Out</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Menu;
