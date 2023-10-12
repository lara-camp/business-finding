import FrontendLayout from '@/Layouts/FrontendLayout';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "@/Components/Pagination";
const Tags = (blogs, tag) => {
    console.log(blogs, tag, "hello");
    const [currentPage, setCurrentPage] = useState(1);
      const postsPerPage = 9;

      /* if (!blogs || !blogs.blogs.data.dta || !Array.isArray(blogs.blogs.data.data)) {
        return <div>No blog data available.</div>;
      } */

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = blogs.blogs.data.data.slice(indexOfFirstPost, indexOfLastPost);


    const totalPages = Math.ceil(blogs.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    };
    // const tag = { blogs['blogs']['data']['data'][0].tag };
    function stripHtmlAndTrim(text, maxLength) {
      const tmp = document.createElement("div");
      tmp.innerHTML = text;
      let plainText = tmp.textContent || tmp.innerText || "";
      return plainText.substring(0, maxLength);
    }


    return (
        <>
            <a href={`/blog/details?tags='News'`}>
                <h1 class="mx-3 text-5xl text-dark mt-2">{blogs.tag.replace(/'/g, '')}</h1>
            </a>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {blogs.blogs.data.data.map((item, index) => (
                        <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110">
                        <div class="py-10 sm:py-8 mb-3 mx-5">
                            <div class="mx-auto max-w-2xl">
                                <article class="items-start justify-between">
                                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        {item.body.length > 20 ? `${item.body.substring(0, 50)}...` : item.body}
                                    </h3>
                                    <div class="relative w-full mt-2">
                                        <img src={item.url} alt="image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover" />
                                        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                    </div>
                                    <div class="max-w-xl mt-4">
                                        <div class="flex items-center gap-x-4 text-xs">
                                            <time datetime={item.created_at} class="text-gray-500">{item.created_at}</time>
                                        </div>
                                        <div class="group relative">
                                            <p class="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                                                {stripHtmlAndTrim(item.content, 200)}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                            <a href={`/blog/${item.tag}/${item.id}`}>
                                            <button class="btn bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-500">
                                                Read this article
                                            </button>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {currentPage > 1 && (
                    <Link to={`/?page=${currentPage - 1}`}>Previous</Link>
                )}

                {currentPage < totalPages && (
                    <Link to={`/?page=${currentPage + 1}`}>Next</Link>
                )}
            </div>


        </>
    );
}
Tags.layout = page => <FrontendLayout title="Blog" children={page} />
export default Tags;
