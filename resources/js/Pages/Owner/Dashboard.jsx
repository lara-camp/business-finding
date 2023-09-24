import OwnerLayout from '@/Layouts/OwnerLayout'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      this is owner dashboard
    </div>
  )
}

Dashboard.layout = page => <OwnerLayout children={page} title="Dashboard" />
export default Dashboard
