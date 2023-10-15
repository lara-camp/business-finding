import FrontendLayout from '@/Layouts/FrontendLayout';
import React from 'react';

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
            <div class="grid grid-cols-4 lg:grid-cols-4">
                <div class="col-span-3 lg:col-span-3">
                    {blog['blog']['data'].map((item, index) => (
                            <div key={index}>
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

                                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4' style={{marginTop: "50px" }}>
                                            {blog.images && blog.images.length !== 0 && blog.images.map((item, itemIndex) => (
                                                <div key={itemIndex} className="relative col-span-1 w-full mt-2">
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
                    <h1 className="mx-3 text-5xl text-dark mt-5 mb-5">Related Articles</h1>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{marginRight: "60px", height: "500px"}}>
                      {blog.related_articles.data.map((item, index) => (
                        <div key={index} className="card col-span-2 lg:col-span-4 shadow-lg mt-3">
                          <div className="flex">
                            <div class="w-1/3 relative w-full">
                              <img
                                src={item.url}
                                alt="image"
                                className="card-img-top aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover mt-5"
                                style={{ width: "200px", height: "100px" }}
                              />
                            </div>
                            <div class="w-2/3">
                                <a href={`/blog/${item.tag}/${item.id}`}>
                                    <h3 className="card-title mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        {item.body.length > 20 ? `${item.body.substring(0, 50)}...` : item.body}
                                    </h3>
                                </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

            </div>

        </>
    );
}
Index.layout = page => <FrontendLayout title="Blog" children={page} />
export default Index;
