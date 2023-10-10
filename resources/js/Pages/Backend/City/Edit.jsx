import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { router, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Edit = ({ city, regions, errors }) => {
    console.log(city);
    const { data, setData } = useForm(
        {
            'id': city.id,
            'name': city.name,
            'region_id': city.region_id,

        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/admin/cities/edit/' + data.id, data, {
            onSuccess: () => {
                Swal.fire("Updated successfully.");
            }
        });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='col-md-12 col-lg-12 col-sm-12'>
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            {/* <h2>Parent Category</h2> */}
                            <div class="mb-4 mt-5">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                                    City Name
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div class="mb-4 mt-5">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                    Region Name
                                </label>
                                <select
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="region_id"
                                    type="text"
                                    name="region_id"
                                    placeholder="region"
                                    onChange={(e) => setData('region_id', e.target.value)}
                                >
                                    {regions.data.map((item) => (
                                        <option key={item.id} value={item.id} selected={item.id == data.region_id}>
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
                        </div>
                    </div>


                </div>

                <div className='p-6 mt-2 text-center bg-white rounded-lg shadow-lg'>
                    <button type="submit" class="bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>

                </div>
            </form>
        </div>
    )
}

Edit.layout = page => <BackendLayout children={page} title="Blog Edit" />
export default Edit
