import React, { Fragment } from 'react'
import Link from 'next/link'
import { ActiveLink } from '../index';
import { sideBarData } from '../../lib/Constants';
import Icon from '../Icons/icon';

const Sidebar = () => {
    return (
        <div>
            <Fragment>
                <aside className="sidebar">
                    <aside className="sidebar__nav-trigger">
                        <label htmlFor="nav-drawer__trigger">
                            <Icon name="close" />
                        </label>
                    </aside>
        
                    <div className="patricia-logo mt-5">
                        <Link href="/dashboard">
                            <a><Icon name="logo" /></a>
                        </Link>
                    </div>
                    {
                        <ul className="main-menu ms-3">
                            {
                                sideBarData.map((data, index) => {
                                    const { href, icon, title } = data;
                                    return (
                                        <li className="main-menu__item" key={index}>
                                            <ActiveLink href={href} icon={icon} title={title}></ActiveLink>
                                        </li>
                                    )
                                })
                            }

                            <div className="bottom">
                                <ul className="sub-menu d-flex">
                                   <Icon name="help" />
                                    <li className="main-menu__item ms-3"> Help center</li>
                                </ul>
                            </div>
                        </ul>
                    }
                </aside>
                <label htmlFor="nav-drawer__trigger" className="pseudo-sidebar" />
            </Fragment>
        </div>
    )
}

export default Sidebar