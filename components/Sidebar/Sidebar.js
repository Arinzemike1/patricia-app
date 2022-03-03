import React, { Fragment } from 'react'
import Link from 'next/link'
import { ActiveLink } from '../index';
import { sideBarData } from '../../lib/Constants';
import Icon from '../Icons/icon';

const Sidebar = ({ handleOpen }) => {
    return (
        <div>
            <Fragment>
                <aside className="sidebar">
                    <aside>
                        <span className='close-icon d-md-none d-block' onClick={() => handleOpen(false)}>
                            <Icon name="close" />
                        </span>
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
            </Fragment>
        </div>
    )
}

export default Sidebar