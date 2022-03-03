import React from 'react';
import Icon from '../Icons/icon';

const Header = ({ title }) => {
    return (
        <>
            <aside className="header__nav-drawer">
                <label htmlFor="nav-drawer__trigger">
                    <Icon name="hamburger" />
                </label>
            </aside>

            <div className="header mt-2 pb-4 d-flex">
                <span className="me-3"><Icon name="back" /></span>
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Header
