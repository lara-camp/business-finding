import React from 'react'
import { Link } from '@inertiajs/react'

const FeatureLocations = ({locations}) => {
  return (
    <div className='py-20 mx-20'>
        <div className="mx-10">
          <h1 className='text-4xl font-bold'> Feature Locations </h1>
          <div className="flex justify-between mt-10">
            {
              locations.data.map(item => (
                <Link className='w-1/4' href={route('search.business', {location : item.id})}>
                  <BusinessLocation key={item.id} item={item}/>
                </Link>
              ))
            }
          </div>
        </div>
    </div>
  )
}

const BusinessLocation = ({item}) => {
  return (
    <div className='bg-white mx-5 p-3 shadow-md shadow-slate-400'>
      <img src="https://www.abetterimageprinting.com/graphics/fixing-branding-elements.jpg" alt="category image" />
      <div className="my-2">
        <h1 className='font-bold text-2xl'> {item.name} </h1>
        <p> {item.business_count} business </p>
      </div>
    </div>
  )
}
export default FeatureLocations
