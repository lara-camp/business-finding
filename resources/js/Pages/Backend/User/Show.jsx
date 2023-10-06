import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { Link } from '@inertiajs/react'

const Show = ({ user }) => {
    return (
        <div>
            <div className='my-5'>
                <Link href="/admin/user" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
            </div>
            <h2>User Detail</h2>
            <p > {user.name} </p>
            <p> {user.email} </p>
            <p> {user.phone} </p>

        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="User Details" />
export default Show
