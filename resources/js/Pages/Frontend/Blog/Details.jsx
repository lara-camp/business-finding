import FrontendLayout from '@/Layouts/FrontendLayout';
import React from 'react';
import { Link } from 'react-router-dom';
const Index = (blog ,images) => {
    console.log(blog, blog.images.length);
    function stripHtmlAndTrim(text) {
      const tmp = document.createElement("div");
      tmp.innerHTML = text;
      let plainText = tmp.textContent || tmp.innerText || "";
      return plainText;
    }
    return (
        <>
            {blog['blog']['data'].map((item, index) => (
                    <div key={index} >
                    <div class="py-10 sm:py-8 mb-3 mx-5">
                        <div class="mx-auto max-w-2xl">
                            <article class="items-start justify-between">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center">
                                    {item.title}
                                </h3>
                                <p>
                                    {item.body}
                                </p>
                                <div class="relative w-full mt-2">
                                    <img src={item.url} alt="image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover" />

                                </div>
                                <div class="max-w-xl mt-4">
                                    <div class="flex items-center gap-x-4 text-xs">
                                        <time datetime={item.created_at} class="text-gray-500">{item.created_at}</time>
                                    </div>
                                    <div class="group relative">
                                        <p class="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                                            {stripHtmlAndTrim(item.content)}
                                        </p>
                                    </div>
                                </div>

                                {blog.images && blog.images.length !== 0 && blog.images.map((item, itemIndex) => (
                                    <div key={itemIndex} className="relative w-full mt-2">
                                        <img src={item} alt="image" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover" />
                                    </div>
                                ))}
                                {/* <div class="mt-4">
                                        <a href={`/blog/${item.tag}/${item.id}`}>
                                        <button class="btn bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-500">
                                            Read this article
                                        </button>
                                    </a>
                                </div> */}
                            </article>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}
Index.layout = page => <FrontendLayout title="Blog" children={page} />
export default Index;
