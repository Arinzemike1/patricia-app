import React from 'react';
import DataCard from '../DataCard/DataCard';
import Icon from '../Icons/icon';
import { brands } from '../../lib/Constants';
import { numberWithCommas } from '../../lib/Utils';

const Brands = () => {
    return (
        <DataCard className='p-3 mt-3 brands-container'>
            <div className="row">
                <div className="col-md-6">
                    <h6 className='grey-text mt-2'>Recent Activity</h6>
                </div>

                <div className="col-md-6 d-flex">
                    <div className='date d-flex p-2 me-2'>
                        <Icon name="calender" />
                        <h6 className='ms-3'>Start date 01/02/2021</h6>
                    </div>
                    <Icon name="download" />
                </div>
            </div>

            <div className='mt-md-3 mt-4'>
                {
                    brands.map((brand, index) => {
                        const { icon, title, subtitle, amount } = brand;
                        return (
                            <div className="row" style={{ lineHeight: '44px' }} key={index}>
                                <div className="col-xl-6">
                                    <span className='mt-5'><Icon name={icon} /></span>

                                    <span className='title ms-2'>{title}</span>
                                    <p className='subtitle'>{subtitle}</p>
                                </div>

                                <div className="col-xl-6">
                                    <span className='amount d-flex justify-content-end'>{`$${numberWithCommas(amount)}`}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </DataCard>
    )
}

export default Brands