import { Link } from '@inertiajs/react'
import React from 'react'

const FeatureCategories = ({categories}) => {
  return (
    <div className='py-20 mx-20'>
        <div className="mx-10">
          <h1 className='text-4xl font-bold'> Feature Categories </h1>
          <div className="flex justify-between mt-10">
            {
              categories.data.map(item => (
                <Link className='w-1/4'>
                  <BusinessCategory key={item.id} item={item}/>
                </Link>
              ))
            }
          </div>
        </div>
    </div>
  )
}

const BusinessCategory = ({item}) => {
  return (
    <div className='bg-white mx-5 p-3 shadow-md shadow-slate-400'>
      <img src={item.url == "null" ? "https://www.abetterimageprinting.com/graphics/fixing-branding-elements.jpg" : item.url} alt="category image" />
      <div className="my-2">
        <h1 className='font-bold text-2xl'> {item.name} </h1>
        <p> {item.business_count} business </p>
      </div>
    </div>
  )
}

export default FeatureCategories
