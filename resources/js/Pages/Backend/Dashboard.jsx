import DashboardCard from '@/Components/DashboardCard'
import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Dashboard = ({total_users, daily_users, total_owners, blogs}) => {
  const dashboard  = [
    {
      id : 1,
      title : 'Total Users',
      type : 'Total',
      count : total_users,
    },
    {
      id : 2,
      title : 'Total Users',
      type : 'Daily',
      count : daily_users,
    },
    {
      id : 3,
      title : 'Total Owners',
      type : 'Total',
      count : total_owners,
    },
    {
      id : 4,
      title : 'Total Businesses',
      type : 'Total',
      count : blogs,
    },
  ]
  return (
    <div className='mx-5'>
        <div className="flex justify-between">
          {
            dashboard.map(item => (
              <DashboardCard item={item} key={item.id}/>
            ))
          }
        </div>
    </div>
  )
}


Dashboard.layout = page => <BackendLayout children={page} title="Welcome" />
export default Dashboard
