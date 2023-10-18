import FrontendLayout from '@/Layouts/FrontendLayout';
import React from 'react';
import { Link } from "@inertiajs/react";
import PostComponent from '../Partials/PostComponent';
const Index = (blog ,images) => {
    console.log(blog, blog.related_articles.length);
    const post = { content: blog['blog']['data'][0].content };
    /* function stripHtmlAndTrim(text) {
      const tmp = document.createElement("div");
      tmp.innerHTML = text;
      let plainText = tmp.textContent || tmp.innerText || "";
      return plainText;
    } */
    return (
        <>
            <div class="grid grid-cols-4 lg:grid-cols-4" >
                <div class="col-span-3 lg:col-span-3" style={{ marginLeft: "100px", marginRight: "50px"}}>
                    {blog['blog']['data'].map((item, index) => (
                            <div key={index}>
                            <div class="py-10 sm:py-8 mb-3">
                                <div class="">
                                    <article class="items-start justify-between">
                                        <h1 class="mt-1 text-lg font-semibold  text-gray-900 group-hover:text-gray-600 text-center">
                                            {item.title}
                                        </h1>
                                        <h5 class="mt-3 text-lg font-semibold leading-6 ">
                                            {item.body}
                                        </h5>
                                        <div class="relative w-full mt-2">
                                            <img src={item.url} alt="image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover" />

                                        </div>
                                        <div class="mt-4">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <time datetime={item.created_at} class="text-gray-500">{item.created_at}</time>
                                            </div>
                                            <div class="group relative">
                                                <p class="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 prose">
                                                {/* {item.content} */}
                                                <PostComponent post={post} />
                                                </p>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4' style={{marginTop: "50px" }}>
                                            {blog.images && blog.images.length !== 0 && blog.images.map((item, itemIndex) => (
                                                <div key={itemIndex} className="relative w-full col-span-1 mt-2">
                                                    <img src={item} alt="image" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover" />
                                                </div>
                                            ))}
                                        </div>

                                    </article>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="col-span-1 lg:col-span-1">
                  <div className="container">
                    <h1 className="mx-3 mt-5 mb-5 text-5xl text-dark">Related Articles</h1>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" style={{marginRight: "60px", height: "500px"}}>
                        {blog.related_articles.data.length !== 0 ? (
                          blog.related_articles.data.map((item, index) => (
                            <div key={item.id} className="col-span-2 mt-3 shadow-lg card lg:col-span-4">
                              <div className="flex">
                                <div className="w-1/3 relative">
                                  <img
                                    src={item.url}
                                    alt="image"
                                    className="card-img-top aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover mt-5"
                                    style={{ width: "200px", height: "100px" }}
                                  />
                                </div>
                                <div className="w-2/3">
                                  <a href={`/blog/${item.tag}/${item.id}`}>
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 card-title group-hover:text-gray-600">
                                      {item.body.length > 20 ? `${item.body.substring(0, 50)}...` : item.body}
                                    </h3>
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="col-span-2 mt-3 lg:col-span-4">

                            Related Articles Not Found!
                          </h3>
                        )}

                    </div>
                  </div>
                </div>

            </div>

        </>
    );
}
Index.layout = page => <FrontendLayout title="Blog" children={page} />
export default Index;
