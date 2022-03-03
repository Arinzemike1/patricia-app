import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Authenticated = ({ children }) => {

    return (
        <div>
            <section>
                <input type="checkbox" defaultChecked={true} id="nav-drawer__trigger" />
                <Sidebar />

                <main className="main-layout">
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Authenticated
