import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { Link } from '@inertiajs/react'
const Show = ({ city }) => {
    console.log(city);
    console.log(city.region);
    return (
        // <div>

        //     <div className='my-5'>
        //         <Link href="/admin/cities" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
        //     </div>
        //     <h3> this is city show </h3>
        //     <p> {city.name} </p>

        // </div>

        <div>
            <div className='my-5'>
                <Link href="/admin/cities" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
            </div>
            <h3 className='my-5 px-5'>City</h3>
            <center>

                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="card shadow p-5">
                        {/* <img src={category.url} className="card-img-top" alt="Category Image" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Name: {city.name}</h5>
                            <h5 className="card-title">Region: {city.region_id}</h5>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="city show" name="test" />
export default Show
