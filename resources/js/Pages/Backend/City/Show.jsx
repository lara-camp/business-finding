import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { Link } from '@inertiajs/react'
const Show = ({ city }) => {
    return (
        <div>

            <div className='my-5'>
                <Link href="/admin/cities" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
            </div>
            <h3> this is city show </h3>
            <p> {city.name} </p>

        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="city show" name="test" />
export default Show
