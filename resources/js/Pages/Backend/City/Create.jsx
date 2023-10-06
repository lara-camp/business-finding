import BackendLayout from '@/Layouts/BackendLayout'
import React, { useState } from 'react'
import { Link, router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import Swal from "sweetalert2";

const Create = ({ cities }) => {
    console.log(cities);
    const [values, setValues] = useState({
        'name': "",
        'region_id': "",
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
        console.log(values)
        e.preventDefault();
        router.post('/admin/cities/create', values, {
            onSuccess: () => {
                Swal.fire("City Created Successfully");
            }
        });
    }
    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> City Create </h3>
                    <div className='m-4'>
                        <Link href="/admin/cities" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Create City </h5>
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
                        {errors.name && <div className="text-red-500 text-xs italic"> {errors.name} </div>}
                    </div>

                    <div class="mb-4 mt-5">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="region">
                            Region Name
                        </label>
                        <select
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="region_id"
                            type="number"
                            name="region_id"
                            placeholder="region"
                            onChange={(e) => setValues(values.region_id, e.target.value)}
                        >
                            {cities.data.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        {errors.region_id && (
                            <p className="text-red-500 text-xs italic">
                                {errors.region_id}
                            </p>
                        )}
                    </div>
                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end">
                                <div className="w-1/2">
                                    <button type="submit" className="bg-indigo-700 text-white p-2 rounded-md"> Create </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="City Create" />
export default Create
