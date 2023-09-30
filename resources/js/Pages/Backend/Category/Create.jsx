import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { router, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Create = ( { category}) => {
    const { data, setData } = useForm(
        {
            'category_name' : category.category_name ,
            'slug' : category.slug ,

        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/admin/category/store', data, {
          onSuccess: () => {
              Swal.fire("created successfully.");
          }
      });
  };


  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='col-md-12 col-lg-12 col-sm-12'>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <h2>Parent Category</h2>
                        <div class="mb-4 mt-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                Category Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category_name"
                                type="text"
                                name="category_name"
                                placeholder="category"
                                value={data.category_name}
                                onChange={ (e) => setData('category_name', e.target.value)}
                            />
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
                        </div>
                    </div>
                </div>


            </div>

            <div className='p-6 mt-2 text-center bg-white rounded-lg shadow-lg'>
                  <button type="submit" class="bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>

            </div>
        </form>
    </div>
  )
}

Create.layout = page => <BackendLayout children={page} title="Blog Create" />
export default Create
