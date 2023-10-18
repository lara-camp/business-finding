import{r as i,q as m,j as e,d as x,y as h}from"./app-2533865a.js";import{B as p}from"./BackendLayout-b08fc13f.js";import{S as u}from"./sweetalert2.all-5ac8cc23.js";import"./profile-b69aa0fa.js";import"./Footer-df1f6ef8.js";import"./transition-bce85724.js";import"./dialog-9fa64067.js";import"./use-owner-5f49e9e9.js";import"./XMarkIcon-84d4bc48.js";import"./UsersIcon-b0e87ee0.js";import"./MagnifyingGlassIcon-f95dce6c.js";import"./ChevronDownIcon-73da0a81.js";import"./FolderIcon-870e3cef.js";const g=()=>{const[n,t]=i.useState({user_id:"",address:"",company:"",frontend_img:"",backend_img:""}),{errors:s}=m().props,a=r=>{const{name:l,value:o}=r.target;t(c=>({...c,[l]:o}))},d=r=>{r.preventDefault(),h.post("/admin/owner/create",n,{onSuccess:()=>{u.fire("Owner Created Successfully")}})};return e.jsxs("div",{className:"container my-3",children:[e.jsx("div",{className:"p-2 rounded",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h3",{children:" Owner Create "}),e.jsx("div",{className:"text-end mx-5",children:e.jsx(x,{href:"/admin/owner",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Back "})})]})}),e.jsx("form",{onSubmit:d,encType:"multipart/form-data",children:e.jsxs("div",{className:"p-2 bg-light shadow-lg my-3",children:[e.jsx("h5",{className:"text-center my-3",children:" Create User "}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"name",children:" User Id "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"integer",name:"user_id",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Name",onChange:a})}),s.name&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",s.name," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"email",children:" Address "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"address",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Email Address",onChange:a})}),s.address&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",s.address," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"phone",children:" Company "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"company",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Phone Number",onChange:a})}),s.company&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",s.company," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"image",children:" Front Image "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"file",name:"frontend_img",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Image Number",onChange:a})}),s.frontend_img&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",s.frontend_img," "]})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"image",children:" Front Image "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"file",name:"backend_img",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Image Number",onChange:a})}),s.backend_img&&e.jsxs("div",{className:"text-danger text-center my-2",children:[" ",s.backend_img," "]})]}),e.jsx("div",{className:"row mx-3",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"text-end m-5",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Submit "})})})})]})})]})};g.layout=n=>e.jsx(p,{children:n,title:"User Create"});export{g as default};