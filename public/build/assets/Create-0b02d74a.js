import{r as p,W as u,q as g,j as e,d as j,y as f}from"./app-d15abf51.js";import{B as N}from"./BackendLayout-d5c8d8ab.js";import"./sweetalert2.all-910ccdc6.js";import"./profile-b69aa0fa.js";import"./Footer-cc58aae6.js";import"./transition-e5470c3b.js";import"./dialog-66faab49.js";import"./use-owner-522cd04a.js";import"./XMarkIcon-20f198ac.js";import"./UsersIcon-126dd27b.js";import"./MagnifyingGlassIcon-a94d97dc.js";import"./ChevronDownIcon-1496024c.js";const y=({users:r})=>{const[d,i]=p.useState(),{data:n,setData:a}=u({user_id:"",address:"",company:"",frontend_img:"",backend_img:""});console.log(n);const{errors:t}=g().props;function c(s){s.preventDefault(),console.log(n),f.post(route("admin.owner.store"),n,{forceFormData:!0,preserveScroll:!0,preserveState:!0,onSuccess:()=>{console.log("success")},onError:l=>{console.log(l)}})}const m=s=>{const l=s.target.files[0],o=new FileReader;o.onload=x=>{const h=x.target.result;i(h)},o.readAsDataURL(l)};return e.jsxs("div",{className:"container my-3",children:[e.jsx("div",{className:"p-2 rounded",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h3",{children:" Owner Create "}),e.jsx("div",{className:"text-end mx-5",children:e.jsx(j,{href:"/admin/owner",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Back "})})]})}),e.jsx("form",{onSubmit:c,encType:"multipart/form-data",children:e.jsxs("div",{className:"p-2 bg-light shadow-lg my-3",children:[e.jsx("h5",{className:"text-center my-3",children:" Create User "}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"name",children:" User name "})}),e.jsx("div",{className:"col-md-9",children:e.jsxs("select",{name:"user_id",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:s=>a("user_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select a User"}),r.data.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})}),e.jsx("p",{className:"text-red-500 text-xs italic",children:t.user_id})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"email",children:" Address "})}),"address",e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"address",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Address",onChange:s=>a("address",s.target.value)})}),e.jsx("p",{className:"text-red-500 text-xs italic",children:t.address})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"phone",children:" Company "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"text",name:"company",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter Phone Number",onChange:s=>a("company",s.target.value)})}),e.jsx("p",{className:"text-red-500 text-xs italic",children:t.company})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"image",children:" Front Image "})}),e.jsxs("div",{className:"col-md-9",children:[e.jsx("img",{src:d,alt:"",id:"previewImg",width:200,height:200,onClick:m,style:{cursor:"pointer"}}),e.jsx("input",{type:"file",name:"frontend_img",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:s=>a("frontend_img",s.target.files[0])})]}),e.jsx("p",{className:"text-red-500 text-xs italic",children:t.frontend_img})]}),e.jsxs("div",{className:"row my-3 mx-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("label",{htmlFor:"image",children:" Back Image "})}),e.jsx("div",{className:"col-md-9",children:e.jsx("input",{type:"file",name:"backend_img",className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:s=>a("backend_img",s.target.files[0])})}),e.jsx("p",{className:"text-red-500 text-xs italic",children:t.backend_img})]}),e.jsx("div",{className:"row mx-3",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"text-end m-5",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Submit "})})})})]})})]})};y.layout=r=>e.jsx(N,{children:r,title:"User Create"});export{y as default};
