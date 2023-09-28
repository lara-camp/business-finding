import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { router, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';


const Create = ( { blog}) => {
    const { data, setData } = useForm(
        {
            'tag' : blog.tag ,
            'title' : blog.title ,
            'content' : blog.content ,
            'description': blog.description,
            'cover_image' : "",
            'image_attachment' : "",
        }
    );

    const handleCoverImageChange = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        setData('cover_image', selectedFile);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/admin/blog/store', data, {
          onSuccess: () => {
              Swal.fire("created successfully.");
          }
      });
  };


  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='col-md-6 col-lg-6 col-sm-6'>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <h2>General Information</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Title
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                name="title"
                                  placeholder="Title"
                                  value={data.title}
                                onChange={ (e) => setData('title', e.target.value)}
                            />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Description
                            </label>
                            <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="description"
                                  id="description"
                                onChange={(e)=> setData('description', e.target.value)}
                                  placeholder="Description">{ data.description}</textarea>

                        </div>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Tags
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id='tags'
                                value={data.tag}
                                name="tags"
                                onChange= {(e)=> setData('tag',e.target.value)}
                                placeholder="Tags" />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div class="bg-white rounded-lg shadow-lg p-6 ml-4">

                        <h1>File Attachments</h1>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Cover Image
                            </label>
                                <input type="file"
                                    name="coverImage"
                                    id="coverImage"
                                    onChange={ (e) => setData('cover_image', e.target.files[0])}
                                    class="w-75 h-10 border rounded-md" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Image Attachment
                            </label>
                                <input
                                    type="file"
                                    name="imageAttachment"
                                    id="imageAttachment"
                                    onChange={(e) => {
                                      // Use e.target.files to access an array of selected files
                                      const selectedFiles = e.target.files;
                                      const imageAttachments = [];

                                      // Loop through the selected files and add them to the imageAttachments array
                                      for (let i = 0; i < selectedFiles.length; i++) {
                                        imageAttachments.push(selectedFiles[i]);
                                      }
                                      setData('image_attachments', imageAttachments);
                                    }}
                                    multiple
                                    class="w-full h-10 border rounded-md mt-5" />
                        </div>

                    </div>
                    {/* <div class="bg-white rounded-lg shadow-lg rounded-sm shadow-sm p-6">

                            <h2 class="">File Attachment</h2>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
                                    Select a File
                                </label>
                                <input
                                    class="hidden"
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png, .pdf"
                                />
                                <label
                                    for="file"
                                    class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                                >
                                    Browse
                                </label>
                            </div>


                            <div class="border-dashed border-2 border-gray-300 p-4 text-center">
                                <p class="text-gray-600">Drag and drop your files here or</p>
                                <p class="text-blue-500">Browse</p>
                            </div>

                    </div> */}

                </div>
            </div>

            <div className='grid grid-cols-1 gap-1 mt-2'>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2>Contact</h2>
                    <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="contact"
                          id="contact"
                          value={data.content}
                          placeholder="contact"
                          onChange={(e) => setData('content',e.target.value)}
                      >

                      </textarea>

                </div>
            </div>
            <div className='text-center mt-2 bg-white rounded-lg shadow-lg p-6'>
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
