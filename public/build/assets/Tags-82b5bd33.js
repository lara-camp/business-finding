import{j as t}from"./app-17eb0ad0.js";import{F as n}from"./FrontendLayout-defec7b1.js";import{P as d}from"./Pagination-cecc6e30.js";import"./Footer-3dd67f1b.js";import"./index.esm-d523fb53.js";import"./iconBase-f039ca98.js";import"./Header-7068b63b.js";import"./index.esm-2c22ef7e.js";import"./Search-63eece87.js";import"./Hero-e3f8fa64.js";import"./HomeInfo-69763b72.js";import"./FeatureBusiness-16a0fea9.js";import"./index-d410ef2c.js";import"./OurBlog-31bf3cad.js";import"./FeatureCategories-852cdb74.js";import"./FeatureLocations-d6d715c9.js";const o=(s,i)=>{console.log(s,i,"hello");function l(e,r){const a=document.createElement("div");return a.innerHTML=e,(a.textContent||a.innerText||"").substring(0,r)}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{marginLeft:"50px",marginRight:"50px"},children:[t.jsx("a",{href:`/blog/details?tags='${s.tag.replace(/'/g,"")}'`,children:t.jsx("h1",{class:"mx-3 text-5xl text-dark mt-5",children:s.tag.replace(/'/g,"")})}),t.jsx("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3",children:s.blogs.data.data.map((e,r)=>t.jsx("div",{className:"relative col-span-1 px-2 transition duration-300 ease-in-out delay-150 shadow-lg mt-3mx-5 bg-amber-50 hover:-translate-y-1 hover:scale-110",style:{marginRight:"30px",marginLeft:"30px",marginTop:"50px"},children:t.jsx("div",{class:"py-10 sm:py-8 mb-3 mx-5",children:t.jsx("div",{class:"mx-auto max-w-2xl",children:t.jsxs("article",{class:"items-start justify-between",children:[t.jsx("h3",{class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600",children:e.body.length>20?`${e.body.substring(0,50)}...`:e.body}),t.jsxs("div",{class:"relative w-full mt-2",children:[t.jsx("img",{src:e.url,alt:"image",class:"aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"}),t.jsx("div",{class:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"})]}),t.jsxs("div",{class:"max-w-xl mt-4",children:[t.jsx("div",{class:"flex items-center gap-x-4 text-xs",children:t.jsx("time",{datetime:e.created_at,class:"text-gray-500",children:e.created_at})}),t.jsx("div",{class:"group relative",children:t.jsx("p",{class:"mt-4 line-clamp-3 text-sm leading-6 text-gray-600",children:l(e.content,200)})})]}),t.jsx("div",{class:"mt-4",children:t.jsx("a",{href:`/blog/${e.tag}/${e.id}`,children:t.jsx("button",{class:"btn bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-500",children:"Read this article"})})})]})})})},r))})]}),t.jsx("div",{className:"mt-10",children:t.jsx(d,{links:s.blogs.links,meta:s.blogs.meta})})]})};o.layout=s=>t.jsx(n,{title:"Blog",children:s});export{o as default};