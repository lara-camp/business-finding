import React from 'react'
import OwnerLayout from '@/Layouts/OwnerLayout'

const Create = () => {
  return (
    <div>
      this is business create page 
    </div>
  )
}

Index.layout = page => <OwnerLayout title="Business" children={page}/>
export default Create
