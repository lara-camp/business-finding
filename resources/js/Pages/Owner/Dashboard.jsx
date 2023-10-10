import DashboardCard from '@/Components/DashboardCard'
import OwnerLayout from '@/Layouts/OwnerLayout'
import React from 'react'

const Dashboard = ({total_businesses, drafts, published, sold}) => {
  const dashboard  = [
    {
      id : 1,
      title : 'Total Businesses',
      type : 'Total',
      count : total_businesses,
    },
    {
      id : 2,
      title : 'Drafts Businesses',
      type : 'Total',
      count : drafts,
    },
    {
      id : 3,
      title : 'Published Businesses',
      type : 'Total',
      count : published,
    },
    {
      id : 4,
      title : 'Sold Out Businesses',
      type : 'Total',
      count : sold,
    },
  ]
  return (
    <div className='flex'>
      {
        dashboard.map(item => (
          <DashboardCard item={item} key={item.id} />
        ))
      }
    </div>
  )
}

Dashboard.layout = page => <OwnerLayout children={page} title="Dashboard" />
export default Dashboard
