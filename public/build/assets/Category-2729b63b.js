import{j as s}from"./app-d15abf51.js";import{F as a}from"./FrontendLayout-207f6f7f.js";import"./Footer-7fb7ace8.js";import"./index.esm-927ffaa0.js";import"./iconBase-2fce3afc.js";import"./Header-fb69cbf4.js";import"./index.esm-24a5dfdc.js";import"./Nav-85bdfc7e.js";const r=l=>(console.log(l.blogs.data,"hello"),s.jsx(s.Fragment,{children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-3",children:l.blogs.data.map((e,t)=>s.jsx("div",{className:"w-screen h-screen flex items-center justify-center",children:s.jsx("div",{className:"col-span-1 relative",children:s.jsx("div",{class:"py-24 sm:py-32 mb-3",children:s.jsx("div",{class:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{class:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:s.jsxs("article",{class:"items-start justify-between",children:[s.jsxs("div",{class:"relative w-full",children:[s.jsx("img",{src:e.url,alt:"image",class:"aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"}),s.jsx("div",{class:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"})]}),s.jsxs("div",{class:"max-w-xl",children:[s.jsx("div",{class:"mt-8 flex items-center gap-x-4 text-xs",children:s.jsx("time",{datetime:e.created_at,class:"text-gray-500",children:e.created_at})}),s.jsxs("div",{class:"group relative",children:[s.jsxs("h3",{class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600",children:[s.jsx("span",{class:"absolute inset-0"}),e.title]}),s.jsx("p",{class:"mt-5 line-clamp-3 text-sm leading-6 text-gray-600",children:e.body})]})]})]})})})})},t)}))})}));r.layout=l=>s.jsx(a,{title:"Category",children:l});export{r as default};