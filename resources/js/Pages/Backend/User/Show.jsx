import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { Link } from '@inertiajs/react'

const Show = ({ user }) => {
  return (
    <div>
      <div>
        <Link href="/admin/user" className='btn btn-sm btn-secondary' > Back </Link>
      </div>
      <h2>User Detail</h2>
      <p> {user.name} </p>
      <p> {user.email} </p>
      <p> {user.phone} </p>

    </div>
  )
}

Show.layout = page => <BackendLayout children={page} title="User Details" />
export default Show
