import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Authenticated = ({ children, open, handleOpen }) => {

    return (
        <div>
            <section>
                <div className="tabletAndAbove">
                    <Sidebar />
                </div>
                <div className="mobile">
                    {
                        open && <Sidebar handleOpen={handleOpen} />
                    }
                </div>

                <main className="main-layout">
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Authenticated
