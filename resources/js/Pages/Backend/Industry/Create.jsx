import React, { useEffect, useRef } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Create = ({ industry, errors }) => {
    const { data, setData, post, processing } = useForm({
        name: industry.name || '',
        image: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image);

        post('/admin/industry/store', formData, {
            onSuccess: () => {
                Swal.fire('Created successfully.');

            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='col-md-12 col-lg-12 col-sm-12'>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2>Industry</h2>
                            <div className="mt-5 mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="category_name">
                                    Industry Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? 'border-red-500' : ''
                                    }`}
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Industry Name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">
                                    Image Attachment
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.image ? 'border-red-500' : ''
                                    }`}
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                {errors.image && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.image}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6 mt-2 text-center bg-white rounded-lg shadow-lg'>
                    <button
                        type="submit"
                        className={`bg-blue-500 w-75 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                            processing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={processing}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

Create.layout = (page) => <BackendLayout children={page} title="Category Create" />;
export default Create;
