import{W as n,j as e,y as r}from"./app-2533865a.js";import{B as c}from"./BackendLayout-b08fc13f.js";import{S as m}from"./sweetalert2.all-5ac8cc23.js";import"./profile-b69aa0fa.js";import"./Footer-df1f6ef8.js";import"./transition-bce85724.js";import"./dialog-9fa64067.js";import"./use-owner-5f49e9e9.js";import"./XMarkIcon-84d4bc48.js";import"./UsersIcon-b0e87ee0.js";import"./MagnifyingGlassIcon-f95dce6c.js";import"./ChevronDownIcon-73da0a81.js";import"./FolderIcon-870e3cef.js";const p=({city:i,regions:s,errors:a})=>{console.log(i);const{data:o,setData:d}=n({id:i.id,name:i.name,region_id:i.region_id}),l=t=>{t.preventDefault(),r.post("/admin/cities/edit/"+o.id,o,{onSuccess:()=>{m.fire("Updated successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"city",children:"City Name"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",name:"name",placeholder:"name",value:o.name,onChange:t=>d("name",t.target.value)}),a.name&&e.jsx("p",{className:"text-red-500 text-xs italic",children:a.name})]}),e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Region Name"}),e.jsx("select",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"region_id",type:"text",name:"region_id",placeholder:"region",onChange:t=>d("region_id",t.target.value),children:s.data.map(t=>e.jsx("option",{value:t.id,selected:t.id==o.region_id,children:t.name},t.id))}),a.region_id&&e.jsx("p",{className:"text-red-500 text-xs italic",children:a.region_id})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",class:`bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,children:"Update"})})]})})};p.layout=i=>e.jsx(c,{children:i,title:"Blog Edit"});export{p as default};