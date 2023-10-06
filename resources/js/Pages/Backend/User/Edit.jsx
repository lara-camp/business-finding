import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { useForm, usePage } from '@inertiajs/react'
import { Link, router } from '@inertiajs/react'
import Swal from "sweetalert2";

const Edit = ({ user }) => {
    const { data, setData, put } = useForm({
        'name': user.name,
        'email': user.email,
    })
    const { errors } = usePage().props

    const submit = (e) => {
        e.preventDefault();
        router.put(`/admin/user/edit/${user.id}`, data, {
            onSuccess: () => {
                Swal.fire("User Updated Successfully");
            }
        });
    }

    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> User Edit </h3>
                    <div className='text-end m-5'>
                        <Link href="/admin/user" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
                    </div>
                </div>
            </div>
            {/* Search Component */}
            <form onSubmit={submit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Update User </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Name'
                                value={data.name}
                                onChange={e => setData("name", e.target.value)}
                            />
                        </div>
                        {errors.name && <div className='text-danger text-center my-2'>{errors.name}</div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="email"> Email </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                value={data.email}
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Email Address'
                                onChange={e => setData('email', e.target.value)}
                            />
                        </div>
                        {errors.email && <div className='text-danger text-center my-2'> {errors.email} </div>}
                    </div>

                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end m-5">
                                <button
                                    type='submit'
                                    className='bg-indigo-700 text-white p-2 rounded-md'> Update </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Edit.layout = page => <BackendLayout children={page} title="User Edit" />
export default Edit
