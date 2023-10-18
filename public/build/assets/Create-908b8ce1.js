import{W as i,j as e,y as r}from"./app-d15abf51.js";import{B as d}from"./BackendLayout-d5c8d8ab.js";import{S as c}from"./sweetalert2.all-910ccdc6.js";import"./profile-b69aa0fa.js";import"./Footer-cc58aae6.js";import"./transition-e5470c3b.js";import"./dialog-66faab49.js";import"./use-owner-522cd04a.js";import"./XMarkIcon-20f198ac.js";import"./UsersIcon-126dd27b.js";import"./MagnifyingGlassIcon-a94d97dc.js";import"./ChevronDownIcon-1496024c.js";const g=({categories:s,errors:a})=>{const{data:l,setData:o}=i({name:"",slug:"",category_id:""}),n=t=>{t.preventDefault(),r.post("/admin/sub_category/store",l,{onSuccess:()=>{c.fire("created successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1",style:{marginLeft:"200px",marginRight:"200px"},children:e.jsx("div",{className:"col-md-12 col-lg-12 col-sm-12",children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Sub Category Name"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",name:"name",placeholder:"sub category",value:l.sub_category_name,onChange:t=>o("name",t.target.value)}),a.name&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.name})]}),e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Category Name"}),e.jsxs("select",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"category_id",type:"text",name:"category_id",placeholder:"category",onChange:t=>o("category_id",t.target.value),children:[e.jsx("option",{value:0,children:"Choose Category"},0),s.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),a.category_id&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.category_id})]}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"slug"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"slug",value:l.slug,name:"slug",onChange:t=>o("slug",t.target.value),placeholder:"slug"}),a.slug&&e.jsx("p",{className:"text-xs italic text-red-500",children:a.slug})]})]})})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",class:`bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,children:"Save"})})]})})};g.layout=s=>e.jsx(d,{children:s,title:"Blog Create"});export{g as default};
