import{r as t,j as e,d as i}from"./app-d15abf51.js";import{s as d}from"./index-d410ef2c.js";const x=({blogs:l})=>{const[a,n]=t.useState(1),[c,r]=t.useState(!1);return t.useEffect(()=>{const s=setInterval(()=>{r(!0),setTimeout(()=>{r(!1)},2e3)},5e3);return()=>clearInterval(s)},[]),t.useEffect(()=>{const s=setInterval(()=>{n(o=>o%3+1)},5e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"bg-fixed w-full h-[35rem] bg-no-repeat bg-center bg-cover relative",style:{backgroundImage:"url('https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_640.jpg')"},children:[e.jsx("div",{className:"flex justify-center items-center z-50",style:{height:"50vh"},children:e.jsxs("div",{className:" border-white border-2 p-5 text-slate-100 w-2/3",children:[e.jsx("p",{children:" Every step, every challange, every success "}),e.jsxs("h1",{className:"text-4xl font-bold",children:[" ","Embrace the Journey of"," "]}),e.jsx("h1",{className:"text-4xl font-bold",children:" Enterpreneurship "}),e.jsx("small",{className:"block",children:"As an entrepreneur, you are on a transformative journey filled with ups and downs. Embrace every twist and turn, as each experience will shape your growth and resilience. Celebrate the victories, learn from the setbacks, and let your passion fuel your determination to overcome any obstacle that comes your way."}),e.jsx("button",{className:"p-3 border-slate-200 border mt-5",children:" Explore Our Blogs "})]})}),e.jsx("div",{className:"absolute bottom-5 end-10",children:l.data.slice(a-1,a).map(s=>e.jsxs("div",{className:`blog-card bg-white py-2 px-3 w-[300px] shadow-md shadow-slate-800 ${c?"move-right":"draw-back"}`,children:[e.jsxs("h1",{className:"font-bold text-2xl",children:[" ",s.title," "]}),e.jsxs("p",{className:"my-3",children:[" ",d(s.body,100)," "]}),e.jsx("img",{src:s.url,alt:""}),e.jsxs("div",{className:"flex my-3",children:[e.jsx("div",{className:"w-2/3",children:e.jsx(i,{className:"px-3 py-2 bg-black text-white",children:" Read this article "})}),e.jsx("div",{children:e.jsxs("small",{children:[" ",s.created_at," "]})})]})]},s.id))})]})};export{x as default};