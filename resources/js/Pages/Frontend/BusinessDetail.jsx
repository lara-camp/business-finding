import { formatWord } from '@/Helper';
import FrontendLayout from '@/Layouts/FrontendLayout'
import { Link } from '@inertiajs/react';
import React from 'react'
import { ImLocation } from "react-icons/im";
import SplideCurosel from './components/SplideCurosel';
import '@splidejs/react-splide/css';

const BusinessDetail = ({business}) => {
  return (
    <div className=''>
        {/* business title  */}
        <div className='mx-20 mt-5'>
            <p> {business.name}/{business.category_name} </p>
        </div>

        {/* show case images and info  */}
        <div className="flex my-3 mx-20">
            <div className="w-1/2 me-5">
                <SplideCurosel images={business.show_case_images} />
            </div>
            <div className="w-1/2">
                <div className="mb-3 border-b-2 border-b-black pb-5">
                    <h1 className="text-4xl font-bold leading-10"> {business.name} </h1>
                    <p> <ImLocation className='inline me-3 mt-3' size={30} /> {business.street} </p>
                    <p className='leading-10 my-3'> {formatWord(business.status)} </p>
                    <Link className='p-2 bg-black text-white'> Contact the seller  </Link>
                </div>
                {/* info detail  */}
                <div>
                    <h1 className='font-bold text-2xl'> Description </h1>
                    <p className='mb-5'> {business.description} </p>
                    <p className='mb-2'> <span className='ms-4'> - Number of Employee -</span>  </p>
                    <p className='mb-2'> <span className='ms-4'> - Established Date -</span>  </p>
                    <p className='mb-2'> <span className='ms-4'> - Reason for Sale -</span>  </p>
                </div>

                {/* finicail detail */}
                <div className='my-5'>
                     <h1 className='text-2xl font-bold'> 
                     Property Status : <span> {formatWord(business.property_status)} </span> 
                     </h1>
                     <h1 className="text-4xl font-bold mt-3 font-mono">
                        Asking Price : <span> {business.asking_price} MMK </span>
                     </h1>
                </div>
            </div>
        </div>

        {/* finicial detail  */}
        <div className=' bg-yellow-50'>
            <div className="flex justify-between mx-20">
                {/* revenue_price  */}
                <div className='flex items-center p-5'>
                    <div className='me-3'> Logo </div>
                    <div> 
                        <p className='text-slate-500'> Gross Revenue </p>
                        <p className='text-2xl font-bold font-mono'> {business.revenue_price} MMK </p>
                    </div>
                </div>
                {/* cash flow  */}
                <div className='flex items-center p-5'>
                    <div className='me-3'> Logo </div>
                    <div> 
                        <p className='text-slate-500'> Cash Flow </p>
                        <p className='text-2xl font-bold font-mono'> {business.cash_flow} MMK </p>
                    </div>
                </div>
                {/* inventory price  */}
                <div className='flex items-center p-5'>
                    <div className='me-3'> Logo </div>
                    <div> 
                        <p className='text-slate-500'> Inventory Value </p>
                        <p className='text-2xl font-bold font-mono'> {business.inventory_value} MMK </p>
                    </div>
                </div>
                {/* Net Income  */}
                <div className='flex items-center p-5'>
                    <div className='me-3'> Logo </div>
                    <div> 
                        <p className='text-slate-500'> Net Income </p>
                        <p className='text-2xl font-bold font-mono'> {business.net_income} MMK </p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* business features and requirements  */}
        <div className='mx-20 my-10'>
            <h1 className="text-2xl font-bold text-center"> 
                Other Business Features and Requirements 
            </h1>
            <div className='text-center my-5'>
                {
                    business.business_features ? business.business_features.map(item => (
                        <div className={`${item.flex_direction} flex items-center`}>
                            <div className="w-1/2 me-5">
                                <img src={item.image} alt=""  className='' width={400} height={200}/>
                            </div>
                            <div className='me-5'>
                                {item.text}
                            </div>
                        </div>
                    )) : <p className='text-red-700 text-center'> No Feature </p>
                }
            </div>
        </div>
    </div>
  )
}

BusinessDetail.layout = (page) => <FrontendLayout children={page} title="Business Detail" />
export default BusinessDetail
