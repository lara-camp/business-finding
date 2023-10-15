// import BackendLayout from '@/Layouts/BackendLayout'
// import React from 'react'

// const Create = () => {
//     return (
//         <div>
//             <p> this is Owner create page </p>
//         </div>
//     )
// }

// Create.layout = page => <BackendLayout children={page} title="Owner Create" />
// export default Create
import BackendLayout from '@/Layouts/BackendLayout'
import React, { useState } from 'react'
import { Link, router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import Swal from "sweetalert2";

const Create = () => {
    const [values, setValues] = useState({
        'user_id': "",
        'address': "",
        'company': "",
        'frontend_img': "",
        "backend_img": "",
    })

    const { errors } = usePage().props;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/owner/create', values, {
            onSuccess: () => {
                Swal.fire("Owner Created Successfully");
            }
        });
    }
    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> Owner Create </h3>
                    <div className='text-end mx-5'>
                        <Link href="/admin/owner" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Create User </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> User name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="integer"
                                name='user_id'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Name'
                                onChange={handleOnChange}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.user_id}
                        </p>
                        {/* {errors.user_id && <div className="text-danger text-center my-2"> {errors.user_id} </div>} */}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="email"> Address </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='address'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Email Address'
                                onChange={handleOnChange}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.address}
                        </p>
                        {/* {errors.address && <div className="text-danger text-center my-2"> {errors.address} </div>} */}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="phone"> Company </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='company'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Phone Number'
                                onChange={handleOnChange}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.company}
                        </p>
                        {/* {errors.company && <div className="text-danger text-center my-2"> {errors.company} </div>} */}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="image"> Front Image </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="file"
                                name='frontend_img'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Image Number'
                                onChange={handleOnChange}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.frontend_img}
                        </p>
                        {/* {errors.frontend_img && <div className="text-danger text-center my-2"> {errors.frontend_img} </div>} */}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="image"> Back Image </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="file"
                                name='backend_img'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Image Number'
                                onChange={handleOnChange}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.backend_img}
                        </p>
                        {/* {errors.backend_img && <div className="text-danger text-center my-2"> {errors.backend_img} </div>} */}
                    </div>
                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end m-5">
                                <button
                                    type='submit'
                                    className='bg-indigo-700 text-white p-2 rounded-md'> Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="User Create" />
export default Create


