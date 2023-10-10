import React from 'react'

const DashboardCard = ({item}) => {
  return (
    <div className='w-1/4 border border-x-2 border-indigo-700 p-3 rounded-md shadow-md shadow-indigo-300 mx-2'>
        <div className="flex">
        <h3 className='w-1/2 font-bold text-indigo-700 text-sm'> {item.title} </h3>
        <div className='text-sm w-1/2 text-end'> 
            <span className=' bg-indigo-700 text-white p-2 rounded-md'> {item.type} </span>
        </div>
        </div>
        <div className="my-5">
        <h1 className='text-start text-4xl text-slate-700'> {item.count} </h1>
        </div>
    </div>
  )
}

export default DashboardCard
