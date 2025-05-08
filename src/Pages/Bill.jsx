import React, { useContext, useEffect, useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';
import { ContextAPI } from '../Components/AuthProvider';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const billPromise = fetch('/bill.json').then(res => res.json())
const billTypePromise = fetch('/billType.json').then(res => res.json())

const Bill = () => {
    const bills = use(billPromise);
    const billtype = use(billTypePromise);
    const { paid } = useContext(ContextAPI);
    const [all, setAll] = useState(true);
    const [filteredBills, setFilteredBills] = useState([]);
    
    const handleBillType = (billtype) =>{
        console.log(billtype);
        const filtered= bills.filter(bill => bill.bill_type == billtype);
        setFilteredBills(filtered);
        setAll(false);
    }


    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[100px] md:py-[100px] lg:py-[100px] '>
            <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold'>Total Bills</h1><br /><br />
            <details className="dropdown mb-5">
                <summary className="btn m-1 bg-primary text-white ">Select Bill Type</summary>
                <ul className="text-gray-900 bg-base-200 menu dropdown-content rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>setAll(true)} className='hover:bg-primary hover:text-white p-2 text-start' >All Bills</li>
                  {billtype.map(singlebilltype => <li  onClick={()=>handleBillType(singlebilltype.type)} key={singlebilltype.id} className='hover:bg-primary hover:text-white p-2 text-start' >{singlebilltype.type}</li>)}  
                </ul>
            </details>
            <div className="grid grid-cols-1 ">
                {
                    all ? <>
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
                                {paid.includes(bill.id) && (
                                    <span className='text-3xl text-green-500'>
                                        <IoCheckmarkDoneCircle />
                                    </span>
                                )}
                            </div>
                        </div>)
                   }
                    </> :
                    <>
                    {
                        filteredBills.length > 0 ?
                         filteredBills.map(bill =>
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
                                    {paid.includes(bill.id) && (
                                        <span className='text-3xl text-green-500'>
                                            <IoCheckmarkDoneCircle />
                                        </span>
                                    )}
                                </div>
                            </div>) : <h1 className='text-gray-800 text-2xl font-bold'>No Bills Found</h1>
                    }
                    </>
                  
                }
            </div>
        </div>
    );
};

export default Bill; 