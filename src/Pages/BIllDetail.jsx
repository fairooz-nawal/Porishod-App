import React from 'react';
import { use } from 'react';
import { useParams } from 'react-router';

const billPromise = fetch('/bill.json').then(res => res.json());
const BIllDetail = () => {
    const bill = use(billPromise);
    const billId = useParams();
    const singleBill = bill.find(bill => bill.id == billId.id);
    console.log(singleBill);
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[100px] md:py-[100px] lg:py-[100px] my-[200px] bg-secondary'>
            <h1 className='text-gray-200 text-4xl font-bold mb-10'>Details of the Bill</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
                <div className="">
                    <img className='w-3/4 mx-auto rounded-2xl border-2 border-gray-400' src={singleBill.icon} alt="" />
                </div>
                <div className="text-start space-y-4">
                    <h1 className='text-gray-200 text-2xl font-bold'>{singleBill.organization}</h1>
                    <h1 className='text-gray-200 text-2xl '>{singleBill.bill_type}</h1>
                    <h1 className='text-gray-200 text-2xl '>Bill Amount: {singleBill.amount} taka</h1>
                    <h1 className='text-gray-200 text-2xl '>Due Date:{singleBill.duedate}</h1>
                    <button className=' w-full btn btn-primary'>Pay Now</button>
                </div>
            </div>

        </div>
    );
};

export default BIllDetail;