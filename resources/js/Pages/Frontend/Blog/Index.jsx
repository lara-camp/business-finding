import FrontendLayout from '@/Layouts/FrontendLayout';
import React from 'react';
import { Link } from 'react-router-dom';
const Index = (news, guide, buyers, sellers, industries) => {
    console.log(news, guide, buyers, sellers, industries);
    function stripHtmlAndTrim(text, maxLength) {
      const tmp = document.createElement("div");
      tmp.innerHTML = text;
      let plainText = tmp.textContent || tmp.innerText || "";
      return plainText.substring(0, maxLength);
    }
    return (
        <>
            {/* News */}
            <div class="mt-5 mb-5" >
                <a href={`/blog/details?tags='News'`} >
                    <h1 class="mx-3 text-5xl text-dark mt-2" style={{ marginLeft: "30px"}}>News</h1>
                </a>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3' style={{marginTop: "50px" }}>
                    {news['news']['data'].map((item, index) => (
                        <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110" style={{ marginRight: '30px', marginLeft: '30px' }}>
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
            </div>

            {/* end */}
            {/* Guide */}
            <div class="mt-5 mb-5" style={{ marginTop: "50px", marginBottom: "50px" }}>

                <a href={`/blog/details?tags='Guide'`} class='mt-5 mb-5'>
                    <h1 class="mx-3 text-5xl text-dark mt-2" style={{ marginLeft: "30px"}}>Guide</h1>
                </a>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3' style={{marginTop: "50px" }}>
                    {news['guide']['data'].map((item, index) => (
                        <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110" style={{ marginRight: '30px', marginLeft: '30px' }}>
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
            </div>
            {/* End */}
            {/* Buyers */}
            <div class="mt-5 mb-5" style={{marginBottom: "50px"}}>
                <a href={`/blog/details?tags='Advice for buyers'`} class='mt-5 mb-5'>
                    <h1 class="mx-3 text-5xl text-dark mt-2" style={{ marginLeft: "30px"}}>Advice For Buyers</h1>
                </a>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3' style={{marginTop: "50px" }}>
                    {news['buyers']['data'].map((item, index) => (
                        <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110" style={{ marginRight: '30px', marginLeft: '30px' }}>
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
            </div>
            {/* end */}
            {/* seller */}
            <div class="mt-5 mb-5" style={{marginBottom: "50px"}}>
                <a href={`/blog/details?tags='Advice for sellers'`} class='mt-5 mb-5'>
                    <h1 class="mx-3 text-5xl text-dark mt-2" style={{ marginLeft: "30px"}}>Advice for sellers</h1>
                </a>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3' style={{marginTop: "50px" }}>
                    {news['sellers']['data'].map((item, index) => (
                        <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110" style={{ marginRight: '30px', marginLeft: '30px' }}>
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
            </div>
            {/* end */}
            {/* Industries */}
            <div class="mt-5 mb-5" style={{marginBottom: "50px"}}>
                {/* <a href={`/blog/details?tags='Advice for sellers'`} class='mt-5 mb-5'> */}
                    <h1 class="mx-3 text-5xl text-dark mt-2" style={{ marginLeft: "20px"}}>By Industry</h1>
                {/* </a> */}
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4' style={{marginTop: "50px" }}>
                    {news['industries']['data'].map((item, index) => (
                            <div key={index} className="relative col-span-1 px-2 duration-300 ease-in-out delay-150 shadow-lg transition mt-3 hover:-translate-y-1 hover:scale-110 overflow-hidden bg-amber-50 mx-2">
                            <div class="py-10 sm:py-8 mb-3 mx-5">
                                <div class="mx-auto max-w-2xl">
                                    <article class="items-start justify-between ">
                                        {/* <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            {item.body.length > 20 ? `${item.body.substring(0, 50)}...` : item.body}
                                        </h3> */}
                                        <div class="relative w-full mt-2 item-center">
                                            <img src={item.url} alt="image" class="mx-auto my-auto" style={{ width: "50px", height: "50px" }} />

                                        </div>
                                        <div class="max-w-xl mt-4">

                                            <div class="group relative">
                                                <h3 class="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 text-center">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
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
                </div>
            </div>
            {/* end */}


        </>
    );
}
Index.layout = page => <FrontendLayout title="Blog" children={page} />
export default Index;
