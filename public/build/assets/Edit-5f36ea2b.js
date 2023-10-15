import{W as r,j as e}from"./app-a633abfa.js";import{B as c}from"./BackendLayout-8b26b7fb.js";import{S as g}from"./sweetalert2.all-24b35c01.js";import"./profile-b69aa0fa.js";import"./Footer-a394bd84.js";import"./transition-759747bf.js";import"./dialog-27067e89.js";import"./use-owner-45704a9b.js";import"./XMarkIcon-df114656.js";import"./UsersIcon-0e8064e3.js";import"./MagnifyingGlassIcon-a495a96d.js";import"./ChevronDownIcon-bc31afed.js";import"./FolderIcon-919ec22f.js";const u=({category:t,errors:a})=>{console.log(t);const{data:l,setData:n,post:d,processing:i}=r({id:t.id,category_name:t.name,slug:t.slug,image:t.url}),m=s=>{s.preventDefault();const o=new FormData;o.append("category_name",l.category_name),o.append("slug",l.slug),o.append("image",l.image),d("/admin/category/update/"+l.id,o,{onSuccess:()=>{g.fire("Updated successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:m,children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h2",{children:"Parent Category"}),e.jsxs("div",{className:"mt-5 mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"category_name",children:"Category Name"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${a.category_name?"border-red-500":""}`,id:"category_name",type:"text",name:"category_name",placeholder:"Category",value:l.category_name,onChange:s=>n("category_name",s.target.value)}),a.category_name&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.category_name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"slug",children:"Slug"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${a.slug?"border-red-500":""}`,type:"text",id:"slug",value:l.slug,name:"slug",onChange:s=>n("slug",s.target.value),placeholder:"Slug"}),a.slug&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.slug})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"image",children:"Image Attachment"}),e.jsx("img",{src:l.image,className:"w-50 h-20-auto"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${a.image?"border-red-500":""}`,type:"file",id:"image",name:"image",onChange:s=>n("image",s.target.files[0])}),a.image&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.image})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",className:`bg-blue-500 w-75 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${i?"opacity-50 cursor-not-allowed":""}`,disabled:i,children:"Update"})})]})})};u.layout=t=>e.jsx(c,{children:t,title:"Category Edit"});export{u as default};