import BackendLayout from '@/Layouts/BackendLayout'
import React, { useState } from 'react'
import { Link, router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import Swal from "sweetalert2";

const Create = () => {
    const [values, setValues] = useState({
        'name': "",
        'email': "",
        'phone': "",
        'image': "",
        "password": "",
        "confirm_password": ""
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
        router.post('/admin/user/create', values, {
            onSuccess: () => {
                Swal.fire("User Created Successfully");
            }
        });
    }
    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> User Create </h3>
                    <div className='text-end mx-5'>
                        <Link href="/admin/user" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Create User </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='name'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Name'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.name && <div className="text-danger text-center my-2"> {errors.name} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="email"> Email </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="email"
                                name='email'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Email Address'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.email && <div className="text-danger text-center my-2"> {errors.email} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="phone"> Phone </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="number"
                                name='phone'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Phone Number'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.phone && <div className="text-danger text-center my-2"> {errors.phone} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="image"> Image </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="file"
                                name='image'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Image Number'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.image && <div className="text-danger text-center my-2"> {errors.image} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="password"> Password </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="password"
                                name='password'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Password'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.password && <div className="text-danger text-center my-2"> {errors.password} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> Confirm Password </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="password"
                                name='confirm_password'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Confirm Password'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.confirm_password && <div className="text-danger text-center my-2"> {errors.confirm_password} </div>}
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


