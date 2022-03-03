import React, { useState } from 'react'
import Head from 'next/head';
import Authenticated from '../components/Layout/Authenticated';
import Header from '../components/Header/Header';
import Icon from '../components/Icons/icon';
import Button from '../components/Button/Button';
import DataCard from '../components/DataCard/DataCard';
import Brands from '../components/Brands/Brands';

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (visibility) => {
    setOpen(visibility);
  }
  return (
    <>
      <Head>
        <title>Patricia Customer Dashboard</title>
        <meta name="description" content="Patricia Customer Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Authenticated open={open} handleOpen={handleOpen}>
          <div className="row" style={{ maxWidth: '100%' }}>
            <div className="col-xl-7 ps-4">

              <Header title="Cards" handleOpen={handleOpen} />

              <div className="row pt-5">
                <div className="col-md-6 d-flex ps-5 pe-5">
                  <div>
                    <Icon name="virtual-card" />
                  </div>

                  <div className='virtual-card ms-3'>
                    <span>Virtual Card</span>
                    <p className='grey-text'>Lorem Ipsum dolor sit amet</p>
                  </div>

                </div>

                <div className="col-md-6 ps-5 pe-5 text-md-end text-start">
                  <Button
                    type="button"
                    text="Create New Card"
                    className="button"
                  />

                </div>

              </div>

              <div className="row">
                <div className="col-md-6">
                  <img src="./master-card.svg" alt="Master card" />
                </div>

                <div className="col-md-6">
                  <img src="./other-card.svg" alt="Blur card" className='mt-3 other-card' />
                </div>
              </div>

              <div className="d-flex ps-5 cta-buttons">
                <Button
                  text="Freeze Card"
                  className="button--green me-2"
                />

                <Button
                  text="Delete Card"
                  className="button--delete ms-1"
                />
              </div>

              <DataCard className="mt-4 card-container me-4 grey-bg">

                <div className='d-flex card-details justify-content-between'>
                  <ul className='list-keys'>
                    <li>Card Balance:</li>
                    <li>Name:</li>
                    <li>Card Status:</li>
                    <li>Billing Address:</li>
                    <li>Date Created:</li>
                  </ul>

                  <ul className='list-values'>
                    <li className='balance'>$3000.73</li>
                    <li>Netflix Card</li>
                    <li>Active</li>

                    <div className='d-flex'>
                      <li>Patricia HQ SA 109827</li>
                      <span className='mt-3 ms-2 cursor-pointer'><Icon name="copy" /></span>
                    </div>

                    <li>March 3rd 2020, 9:48:36am</li>
                  </ul>

                  <Button
                    text="Fund Card"
                    className="button--green d-flex button--fundCard mt-2 me-4"
                  />
                </div>

              </DataCard>

            </div>

            <div className="col-md-5 recent-activity">

              <div className='d-flex justify-content-end p-5 position-relative'>
                <span className='cursor-pointer notification'><Icon name="notification" /></span>
                <img src="./avatar.png" alt="Profile picture" className='avatar cursor-pointer make-absolute' height='38' width='39' />
                <span className="mt-1 cursor-pointer make-absolute"><Icon name="ellipsis" /></span>
              </div>

              <div className="row">
                <div className="col-xl-12">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </Authenticated>
      </main>
    </>
  )
}

export default Index