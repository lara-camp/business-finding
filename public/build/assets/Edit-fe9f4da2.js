import{W as n,j as e,y as c}from"./app-a633abfa.js";import{B as r}from"./BackendLayout-8b26b7fb.js";import{S as g}from"./sweetalert2.all-24b35c01.js";import"./profile-b69aa0fa.js";import"./Footer-a394bd84.js";import"./transition-759747bf.js";import"./dialog-27067e89.js";import"./use-owner-45704a9b.js";import"./XMarkIcon-df114656.js";import"./UsersIcon-0e8064e3.js";import"./MagnifyingGlassIcon-a495a96d.js";import"./ChevronDownIcon-bc31afed.js";import"./FolderIcon-919ec22f.js";const m=({sub_category:a,categories:d,errors:l})=>{console.log(a);const{data:s,setData:o}=n({id:a.id,name:a.name,slug:a.slug,category_id:a.category_id}),i=t=>{t.preventDefault(),c.post("/admin/sub_category/update/"+s.id,s,{onSuccess:()=>{g.fire("Updated successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:i,children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Sub Category Name"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",name:"name",placeholder:"sub category",value:s.name,onChange:t=>o("name",t.target.value)}),l.name&&e.jsx("p",{className:"text-red-500 text-xs italic",children:l.name})]}),e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Category Name"}),e.jsxs("select",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"category_id",type:"text",name:"category_id",placeholder:"category",onChange:t=>o("category_id",t.target.value),children:[e.jsx("option",{value:0,children:"Choose Category"},0),d.map(t=>e.jsx("option",{value:t.id,selected:t.id==s.category_id,children:t.name},t.id))]}),l.category_id&&e.jsx("p",{className:"text-red-500 text-xs italic",children:l.category_id})]}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"slug"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"slug",value:s.slug,name:"slug",onChange:t=>o("slug",t.target.value),placeholder:"slug"}),l.slug&&e.jsx("p",{className:"text-red-500 text-xs italic",children:l.slug})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",class:`bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,children:"Update"})})]})})};m.layout=a=>e.jsx(r,{children:a,title:"Blog Edit"});export{m as default};
