import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      this is dashboard 
    </div>
  )
}


Dashboard.layout = page => <BackendLayout children={page} title="Welcome" />
export default Dashboard
