import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { router, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Edit = ({ sub_category, categories, errors }) => {
    console.log(sub_category);
    const { data, setData } = useForm(
        {
            'id' : sub_category.id,
            'name' : sub_category.name ,
            'slug' : sub_category.slug,
            'category_id' : sub_category.category_id ,

        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/admin/sub_category/update/'+ data.id, data, {
          onSuccess: () => {
              Swal.fire("Updated successfully.");
          }
      });
  };


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1' style={{marginLeft: "200px", marginRight: "200px"}}>
                <div className='col-md-12 col-lg-12 col-sm-12'>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        {/* <h2>Parent Category</h2> */}
                        <div class="mb-4 mt-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                Sub Category Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="sub category"
                                value={data.name}
                                onChange={ (e) => setData('name', e.target.value)}
                              />
                            {errors.name && (
                                <p className="text-xs italic text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div class="mb-4 mt-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                Category Name
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category_id"
                                type="text"
                                name="category_id"
                                placeholder="category"
                                onChange={ (e) => setData('category_id', e.target.value)}
                              >
                            <option key={0} value={0}>Choose Category</option>
                            {categories.map((item) => (
                                <option key={item.id} value={item.id} selected={item.id == data.category_id }>
                                {item.name}
                                </option>
                            ))}
                              </select>

                            {errors.category_id && (
                                <p className="text-xs italic text-red-500">
                                    {errors.category_id}
                                </p>
                            )}
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                slug
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id='slug'
                                value={data.slug}
                                name="slug"
                                onChange= {(e)=> setData('slug',e.target.value)}
                                  placeholder="slug" />
                            {errors.slug && (
                                <p className="text-xs italic text-red-500">
                                    {errors.slug}
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
