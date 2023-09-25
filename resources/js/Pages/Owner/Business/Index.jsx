import OwnerLayout from '@/Layouts/OwnerLayout'
import React from 'react'

const Index = () => {
  return (
    <div>
      this is business index
    </div>
  )
}


Index.layout = page => <OwnerLayout title="Business" children={page}/>
export default Index
