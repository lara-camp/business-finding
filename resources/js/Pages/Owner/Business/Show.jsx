import React from 'react'
import OwnerLayout from '@/Layouts/OwnerLayout'

const Show = () => {
  return (
    <div>
      this is business show page
    </div>
  )
}

Index.layout = page => <OwnerLayout title="Business" children={page}/>
export default Show
