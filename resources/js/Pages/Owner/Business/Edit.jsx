import React from 'react'
import OwnerLayout from '@/Layouts/OwnerLayout'
import BusinessStep from './BusinessStep'

const Edit = ({business, categories, regions, cities, subcategories}) => {
  return (
    <div>
      <BusinessStep 
            categories={categories}
            regions={regions}
            cities ={cities}
            subcategories={subcategories}
            business={business}
        />
    </div>
  )
}

Edit.layout = page => <OwnerLayout title="Business" children={page}/>
export default Edit
