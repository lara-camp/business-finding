import{r as x,q as h,j as e,d as p,y as u}from"./app-2533865a.js";import{B as g}from"./BackendLayout-b08fc13f.js";import{S as j}from"./sweetalert2.all-5ac8cc23.js";import"./profile-b69aa0fa.js";import"./Footer-df1f6ef8.js";import"./transition-bce85724.js";import"./dialog-9fa64067.js";import"./use-owner-5f49e9e9.js";import"./XMarkIcon-84d4bc48.js";import"./UsersIcon-b0e87ee0.js";import"./MagnifyingGlassIcon-f95dce6c.js";import"./ChevronDownIcon-73da0a81.js";import"./FolderIcon-870e3cef.js";const y=({cities:i,regions:r})=>{console.log(i);const[t,o]=x.useState({name:"",region_id:""}),{errors:a}=h().props,n=s=>{const{name:d,value:c}=s.target;o(m=>({...m,[d]:c})),console.log(t)},l=s=>{console.log(t),s.preventDefault(),u.post("/admin/cities/create",t,{onSuccess:()=>{j.fire("City Created Successfully")}})};return e.jsxs("div",{className:"container my-3",children:[e.jsx("div",{className:"p-2 rounded",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h3",{children:" City Create "}),e.jsx("div",{className:"m-4",children:e.jsx(p,{href:"/admin/cities",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Back "})})]})}),e.jsx("form",{onSubmit:l,encType:"multipart/form-data",children:e.jsxs("div",{className:"p-2 bg-light shadow-lg my-3",children:[e.jsx("h5",{className:"text-center my-3",children:" Create City "}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"name",children:" Name "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"name",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Name",onChange:n})}),a.name&&e.jsxs("div",{className:"text-red-500 text-xs italic",children:[" ",a.name," "]})]}),e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"region",children:"Region Name"}),e.jsx("select",{class:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"integer",name:"region_id",value:t.region_id,placeholder:"region",onChange:n,children:r.data.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))}),a.region_id&&e.jsx("p",{className:"text-red-500 text-xs italic",children:a.region_id})]}),e.jsx("div",{className:"row mx-3",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"w-1/2",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Create "})})})})})]})})]})};y.layout=i=>e.jsx(g,{children:i,title:"City Create"});export{y as default};
