import FrontendLayout from '@/Layouts/FrontendLayout'
import React from 'react'
const Category = (blogs) => {
    console.log(blogs['blogs']['data'], "hello");
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {blogs['blogs']['data'].map((item, index) => (
                    <div className="w-screen h-screen flex items-center justify-center">
                        <div key={index} className="col-span-1 relative">
                        <div class="py-24 sm:py-32 mb-3">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    <article class="items-start justify-between">
                                        <div class="relative w-full">
                                            <img src={item.url} alt="image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                        </div>
                                        <div class="max-w-xl">
                                            <div class="mt-8 flex items-center gap-x-4 text-xs">
                                                <time datetime={item.created_at} class="text-gray-500">{item.created_at}</time>
                                                {/* <a href={item.categoryLink} class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.category}</a> */}
                                            </div>
                                            <div class="group relative">
                                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                    {/* <a href={item.blogLink}> */}
                                                        <span class="absolute inset-0"></span>
                                                        {item.title}
                                                    {/* </a> */}
                                                </h3>
                                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.body}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
}
Category.layout = page => <FrontendLayout title="Category" children={page} />
export default Category;
