import classNames from 'classnames';
import React from 'react';

import style from './modal.module.scss';

const Modal = ({
    active,
    setActive,
    children,
    theme='primary',
    themeContent='primaryContent'
}) => {

    const modeModal = active && style.active;
    const modeContent = active && style.activeContent;

    const classModal = classNames(style.modal, modeModal, style[theme]);
    const classContent = classNames(style.modalContent, modeContent, style[themeContent]);

    return(
        <div className={classModal} onClick={() => setActive(false)}>
            <div className={classContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
