import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import {AiFillLike, AiFillEye} from 'react-icons/ai'
import { router } from '@inertiajs/react'

const AllBusiness = ({businesses}) => {
    const {flash} = usePage().props;
    console.log(flash)
    const handleDelete = (id) => {
    if(confirm('are you sure to delete')) {
        router.post(route('owner.business.destroy', id))
            if(flash.message) {
                alert(flash.message)
            }
        } else {
            alert('something wrong');
        }
    }
  return (
    <div>
      {
        businesses.data.data.length > 0 
        ? 
        businesses.data.data.map(item => (
            <>
            <div className='p-3 border my-4 rounded-md shadow shadow-slate-300' key={item.id}>
                {/* head  */}
                <div className="flex">
                    <div className="w-1/5">
                        <img src={item.image} alt="business-img" />
                    </div>
                    <div className="w-2/5 ms-3">
                        <div className="flex">
                            <div className='w-1/2 text-slate-500'> Status </div>
                            <div className='w-1/2 text-indigo-700'> : {item.status} </div>
                        </div>
                        <div className="flex mt-2">
                            <div className='w-1/2 text-slate-500'> BusinessId </div>
                            <div className='w-1/2 text-indigo-700'> : {item.id} </div>
                        </div>
                        <div className="flex mt-2">
                            <div className='w-1/2 text-slate-500'> Name </div>
                            <div className='w-1/2 text-indigo-700'> : {item.name} </div>
                        </div>
                        <div className="flex mt-2">
                            <div className='w-1/2 text-slate-500'> Location </div>
                            <div className='w-1/2 text-indigo-700'> : {item.location} </div>
                        </div>
                        <div className="flex mt-2">
                            <div className='w-1/2 text-slate-500'> Asking Price </div>
                            <div className='w-1/2 text-indigo-700'> : {item.asking_price} </div>
                        </div>
                    </div>
                    <div className="w-2/5 text-end">
                        {/* time show  */}
                        <p> 
                            <span> Created Date : </span> <span className='text-indigo-700'> {item.created_at} </span>
                        </p>
                        <p className='mt-2'> 
                            <span> Last Updated Date : </span> <span className='text-indigo-700'> {item.created_at} </span>
                        </p>
                    </div>
                </div>
                {/* Like and views  */}
                <div className="flex justify-center items-center my-4">
                    <div  className='me-3'>
                        <AiFillLike  size={30} className='inline  text-indigo-700'/>
                        <span> {item.likes} </span>
                    </div>
                    <div>
                        <AiFillEye size={30}  className='inline text-indigo-700'/>
                        <span> {item.views} </span>
                    </div>
                </div>

                {/* Action Button  */}
                <div className="text-end">
                    <div>
                        <button className='p-2 bg-indigo-700 rounded-md text-white me-3'> Edit </button>
                        <button className='p-2 bg-red-700 rounded-md text-white me-3' onClick={() => handleDelete(item.id)}> Delete </button>
                    </div>
                </div>
            </div>
        </>
        ))
        : ""
      }
    </div>
  )
}

export default AllBusiness
