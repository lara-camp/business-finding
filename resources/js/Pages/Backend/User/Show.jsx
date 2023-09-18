import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Show = () => {
  return (
    <div>
      this is user show page 
    </div>
  )
}

Show.layout = page => <BackendLayout children={page} title="User Details" />
export default Show
