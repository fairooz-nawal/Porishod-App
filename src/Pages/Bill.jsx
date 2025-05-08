import React from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const billPromise = fetch('/bill.json').then(res => res.json())
const Bill = () => {
    const bills = use(billPromise);
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[100px] md:py-[100px] lg:py-[100px] '>
            <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold'>Total Bills</h1><br /><br />
            <div className="grid grid-cols-1 ">
                {
                    bills.map(bill =>
                        <div key={bill.id} className="w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 p-5 space-y-4 border-2 border-gray-500 rounded-2xl mb-5 bg-secondary">
                            <div className="md:col-span-2 lg:col-span-2">
                                <img className='w-full rounded-2xl border-2 border-gray-400' src={bill.logo} alt="" />
                            </div>
                            <div className="md:col-span-3 lg:col-span-4 flex justify-between p-5">
                                <div className=" text-start">
                                    <h1 className='text-gray-200  md:text-2xl lg:text-2xl font-bold'>Bill Type: {bill.bill_type}</h1>
                                    <p className='text-gray-200  font-bold'>Organization: {bill.organization}</p>
                                </div>
                                <Link to={`/bill/${bill.id}`} className='btn btn-primary'>Pay Now</Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Bill;