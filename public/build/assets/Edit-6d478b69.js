import{W as r,j as e}from"./app-2533865a.js";import{B as c}from"./BackendLayout-b08fc13f.js";import{S as p}from"./sweetalert2.all-5ac8cc23.js";import"./profile-b69aa0fa.js";import"./Footer-df1f6ef8.js";import"./transition-bce85724.js";import"./dialog-9fa64067.js";import"./use-owner-5f49e9e9.js";import"./XMarkIcon-84d4bc48.js";import"./UsersIcon-b0e87ee0.js";import"./MagnifyingGlassIcon-f95dce6c.js";import"./ChevronDownIcon-73da0a81.js";import"./FolderIcon-870e3cef.js";const g=({industry:a,errors:t})=>{const{data:s,setData:n,post:m,processing:o}=r({id:a.id,name:a.name,image:a.url});console.log(a.url);const d=l=>{l.preventDefault();const i=new FormData;i.append("name",s.name),i.append("image",s.image),m("/admin/industry/update/"+s.id,i,{onSuccess:()=>{p.fire("update successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h2",{children:"Industry"}),e.jsxs("div",{className:"mt-5 mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"category_name",children:"Industry Name"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${t.name?"border-red-500":""}`,id:"name",type:"text",name:"name",placeholder:"Industry Name",value:s.name,onChange:l=>n("name",l.target.value)}),t.name&&e.jsx("p",{className:"text-xs italic text-red-500",children:t.name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"image",children:"Image Attachment"}),e.jsx("img",{src:s.image,className:"w-50 h-20-auto"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${t.image?"border-red-500":""}`,type:"file",id:"image",name:"image",onChange:l=>n("image",l.target.files[0])}),t.image&&e.jsx("p",{className:"text-xs italic text-red-500",children:t.image})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",className:`bg-blue-500 w-75 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${o?"opacity-50 cursor-not-allowed":""}`,disabled:o,children:"Save"})})]})})};g.layout=a=>e.jsx(c,{children:a,title:"Industry Edit"});export{g as default};