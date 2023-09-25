import React from 'react'
import OwnerLayout from '@/Layouts/OwnerLayout'

const Edit = () => {
  return (
    <div>
      this is business edit page 
    </div>
  )
}

Index.layout = page => <OwnerLayout title="Business" children={page}/>
export default Edit
