import{j as s,d as e}from"./app-d15abf51.js";import{F as l}from"./FrontendLayout-207f6f7f.js";import{f as r,a as i,s as m}from"./index-d410ef2c.js";import{I as o}from"./index.esm-509f1fc9.js";import{P as c}from"./Pagination-6332799b.js";import"./Footer-7fb7ace8.js";import"./index.esm-927ffaa0.js";import"./iconBase-2fce3afc.js";import"./Header-fb69cbf4.js";import"./index.esm-24a5dfdc.js";import"./Nav-85bdfc7e.js";const d=({businesses:t})=>s.jsxs("div",{className:"mx-20",children:[s.jsxs("h1",{className:"font-bold text-4xl my-3",children:[" ",t.meta.total," ",t.meta.total>1?"Results":"Result"," Found. "]}),s.jsx("div",{className:"flex mt-10 flex-wrap",children:t.data.data.map(a=>s.jsxs("div",{className:"w-1/4 mx-10 border-0 py-2 px-4 bg-white shadow-md my-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:a.image=="null"?"https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg":a.image,alt:"",className:"w-full mt-3"}),s.jsx("p",{className:"absolute top-2 start-2 p-2 bg-white text-sm font-bold",children:r(a.status)}),s.jsxs("p",{className:"absolute bottom-2 end-3 p-2 bg-white text-xl font-bold",children:[i(a.asking_price)," MMK"]})]}),s.jsxs("div",{className:"my-3",children:[s.jsx("h1",{className:"text-2xl font-bold",children:a.title}),s.jsxs("p",{className:"my-2",children:[s.jsx(o,{size:20,className:"inline me-3"}),s.jsx("span",{className:"text-xl",children:a.loc_wth_street})]}),s.jsxs("p",{className:"py-2",children:[" ",m(a.description,100)," "]}),s.jsx("hr",{})]}),s.jsx("div",{className:"my-3",children:s.jsx(e,{href:route("business.detail",a.id),className:"p-2 bg-black text-white",children:" Explore Business "})})]}))}),s.jsx("div",{className:"mt-10",children:s.jsx(c,{links:t.links,meta:t.meta})})]});d.layout=t=>s.jsx(l,{children:t,title:"Search Page"});export{d as default};
