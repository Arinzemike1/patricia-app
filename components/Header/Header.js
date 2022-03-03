import React from 'react';
import Icon from '../Icons/icon';

const Header = ({ title, handleOpen }) => {
    return (
        <>
            <aside>
                <span className='hamburger ms-4' onClick={() => handleOpen(true)}>
                    <Icon name="hamburger" />
                </span>
            </aside>

            <div className="header mt-2 pb-4 d-flex">
                <span className="me-3"><Icon name="back" /></span>
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Header
