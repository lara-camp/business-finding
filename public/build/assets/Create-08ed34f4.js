import{r as i,q as c,j as e,d as x,y as h}from"./app-d15abf51.js";import{B as p}from"./BackendLayout-d5c8d8ab.js";import{S as u}from"./sweetalert2.all-910ccdc6.js";import"./profile-b69aa0fa.js";import"./Footer-cc58aae6.js";import"./transition-e5470c3b.js";import"./dialog-66faab49.js";import"./use-owner-522cd04a.js";import"./XMarkIcon-20f198ac.js";import"./UsersIcon-126dd27b.js";import"./MagnifyingGlassIcon-a94d97dc.js";import"./ChevronDownIcon-1496024c.js";const j=()=>{const[s,r]=i.useState({name:"",type:"",name_mm:""}),{errors:a}=c().props,t=n=>{const{name:m,value:o}=n.target;r(d=>({...d,[m]:o}))},l=n=>{n.preventDefault(),h.post("/admin/region/create",s,{onSuccess:()=>{u.fire("Region Created Successfully")}})};return e.jsxs("div",{className:"container my-3",children:[e.jsx("div",{className:"p-2 rounded",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h3",{children:" Region Create "}),e.jsx("div",{className:"mt-4",children:e.jsx(x,{href:"/admin/regions",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Back "})})]})}),e.jsx("form",{onSubmit:l,encType:"multipart/form-data",children:e.jsxs("div",{className:"p-2 bg-light shadow-lg my-3",children:[e.jsx("h5",{className:"text-center my-3",children:" Create Region "}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"name",children:" Name "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"name",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Name",onChange:t})}),a.name&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",a.name," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"type",children:" Type "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"type",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Type Region or State",onChange:t})}),a.type&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",a.type," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"name_mm",children:" MM-Name "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"name_mm",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Type Myanmar Name",onChange:t})}),a.name_mm&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",a.name_mm," "]})]}),e.jsx("div",{className:"row mx-3",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"text-end",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Submit "})})})})]})})]})};j.layout=s=>e.jsx(p,{children:s,title:"User Create"});export{j as default};
