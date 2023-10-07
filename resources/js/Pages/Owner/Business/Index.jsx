import OwnerLayout from '@/Layouts/OwnerLayout'
import { Link, router, usePage } from '@inertiajs/react'
import React from 'react'
import AllBusiness from './AllBusiness';
import { useState } from 'react';

const Index = ({businesses, total_count}) => {
    const {url} = usePage();
    const nav = [
        {
            id : 1,
            name : "All",
            param : "all",
            active : true
        },
        {
            id : 2,
            name : "Drafts",
            param : "draft",
            active : false
        },
        {
            id : 3,
            name : "Published",
            param : "published",
            active : false
        },
        {
            id : 4,
            name : "Sold",
            param : "sold",
            active : false
        },
        {
            id : 5,
            name : "Trash",
            param : "trash",
            active : false
        },
    ]

    const [navitems, setNavitems] = useState(nav)

    const handleParam = (param) => {
        router.get(route('owner.business'), {
            "status" : param
        }, {
            preserveScroll : true,
            preserveState : true,
        })
        const newnav = navitems.map(item => ({
            ...item, 
            active : item.param === param,
        }))
        setNavitems(newnav)
    }

  return (
    <div>
        {/* header  */}
        <div className='flex items-center'>
            <div className="w-1/2">
                <ul className='list-none flex'>
                    {
                        navitems.length > 0 && navitems.map(item => (
                            <li className='me-3 cursor-pointer' key={item.id}>
                                <span 
                                    className={`text-indigo-700 p-2 ${item.active ? 'border-x-0 border-t-0 border-b-2 border-b-indigo-700' : ''}`}
                                    onClick={() => handleParam(item.param)}
                                > {item.name} </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-1/2 text-end text-indigo-700">
                <div>
                    <span> Total </span> <span className='font-bold text-lg'> {total_count} </span> <span> Listing</span>
                </div>
            </div>
        </div>
        <hr />
        <div className="text-end my-5">
            <div>
                <Link href={route('owner.business.create')} className='p-2 bg-indigo-700 rounded-md text-white'> Add New Listing </Link>
            </div>
        </div>
        <AllBusiness businesses={businesses} />
        
    </div>
  )
}

export default Index
Index.layout = page => <OwnerLayout children={page} title="Business" />