import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import {AiFillLike, AiFillEye} from 'react-icons/ai'
import { router } from '@inertiajs/react'
import Swal from 'sweetalert2'
import { formatWord } from '@/Helper';

const AllBusiness = ({businesses}) => {
    const {flash} = usePage().props;
    console.log(flash)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              router.post(route('owner.business.destroy', id),{}, {
                onSuccess: () =>
                  Swal.fire("Deleted!", "Your file has been deleted.", "success"),
              });
            } else {
                if(flash.message) {
                    Swal.fire("Somthing Wrong", flash.message, "error");
                }
            }
          });
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
                            <div className='w-1/2 text-indigo-700'> : {formatWord(item.status)} </div>
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
                        <div className='my-3'>
                            <p className=' bg-indigo-700 inline p-2 text-white rounded-md'>{formatWord(item.stage)}</p>
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
                        <Link href={route('owner.business.edit', item.id)} className='p-2 bg-indigo-700 rounded-md text-white me-3'> Edit </Link>
                        <button className='p-2 bg-red-700 rounded-md text-white me-3' onClick={() => handleDelete(item.id)}> Delete </button>
                        <Link 
                            className='p-2 bg-green-700 rounded-md text-white me-3'
                            method='post'
                            href={route('owner.business.change-stage', item.id)}
                            only={['businesses']}
                            preserveScroll
                        >  
                            {item.stage == 'draft' ? 'Published' : 'Unpublished'}
                        </Link>
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
