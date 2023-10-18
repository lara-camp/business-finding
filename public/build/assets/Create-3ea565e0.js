import{W as r,j as e}from"./app-d15abf51.js";import{B as c}from"./BackendLayout-d5c8d8ab.js";import{S as p}from"./sweetalert2.all-910ccdc6.js";import"./profile-b69aa0fa.js";import"./Footer-cc58aae6.js";import"./transition-e5470c3b.js";import"./dialog-66faab49.js";import"./use-owner-522cd04a.js";import"./XMarkIcon-20f198ac.js";import"./UsersIcon-126dd27b.js";import"./MagnifyingGlassIcon-a94d97dc.js";import"./ChevronDownIcon-1496024c.js";const g=({industry:s,errors:a})=>{const{data:n,setData:i,post:o,processing:m}=r({name:s.name||"",image:null}),d=t=>{t.preventDefault();const l=new FormData;l.append("name",n.name),l.append("image",n.image),o("/admin/industry/store",l,{onSuccess:()=>{p.fire("Created successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1",style:{marginLeft:"200px",marginRight:"200px"},children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h2",{children:"Industry"}),e.jsxs("div",{className:"mt-5 mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"category_name",children:"Industry Name"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${a.name?"border-red-500":""}`,id:"name",type:"text",name:"name",placeholder:"Industry Name",value:n.name,onChange:t=>i("name",t.target.value)}),a.name&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"image",children:"Image Attachment"}),e.jsx("input",{className:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${a.image?"border-red-500":""}`,type:"file",id:"image",name:"image",onChange:t=>i("image",t.target.files[0])}),a.image&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.image})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",className:`bg-blue-500 w-75 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${m?"opacity-50 cursor-not-allowed":""}`,disabled:m,children:"Save"})})]})})};g.layout=s=>e.jsx(c,{children:s,title:"Category Create"});export{g as default};
