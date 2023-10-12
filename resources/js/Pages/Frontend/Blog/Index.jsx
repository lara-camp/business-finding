import FrontendLayout from '@/Layouts/FrontendLayout';
import React from 'react';
import { Link } from 'react-router-dom';
const Index = (news) => {
    console.log(news['news']['data'][0], "hello");
    function stripHtmlAndTrim(text, maxLength) {
      const tmp = document.createElement("div");
      tmp.innerHTML = text;
      let plainText = tmp.textContent || tmp.innerText || "";
      return plainText.substring(0, maxLength);
    }
    return (
        <>
            <a href={`/blog/details?tags='News'`}>
                <h1 class="mx-3 text-5xl text-dark mt-2">News</h1>
            </a>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                {news['news']['data'].map((item, index) => (
                    <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg tran sition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110">
                        <div class="py-10 sm:py-8 mb-3 mx-5">
                            <div class="mx-auto max-w-2xl">
                                <article class="items-start justify-between ">
                                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        {item.body.length > 20 ? `${item.body.substring(0, 50)}...` : item.body}
                                    </h3>
                                    <div class="relative w-full mt-2 shadow-lg ">
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


        </>
    );
}
Index.layout = page => <FrontendLayout title="Blog" children={page} />
export default Index;
