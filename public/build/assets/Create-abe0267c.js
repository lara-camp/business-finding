import{W as p,r as g,j as e,y as u}from"./app-17eb0ad0.js";import{B as j}from"./BackendLayout-34c8d4ab.js";import{S as b}from"./sweetalert2.all-094fa128.js";import{R as f}from"./quill.snow-3c7449f9.js";import"./profile-b69aa0fa.js";import"./Footer-ccddb73b.js";import"./transition-ea737974.js";import"./dialog-2ed87d59.js";import"./use-owner-dc88ac74.js";import"./XMarkIcon-787a252f.js";import"./UsersIcon-11aa0a86.js";import"./MagnifyingGlassIcon-a4961647.js";import"./ChevronDownIcon-34371eec.js";import"./FolderIcon-8d3423ca.js";import"./quill-87697b3f.js";const v=({blog:l,errors:s,industries:r})=>{const{data:a,setData:i}=p({tag:l.tag,title:l.title,content:l.content,description:l.description,cover_image:"",image_attachment:"",industry_id:l.industry_id||""}),[d,m]=g.useState(l.content),h=t=>{m(t),i("content",d)},x=t=>{t.preventDefault(),u.post("/admin/blog/store",a,{onSuccess:()=>{b.fire("created successfully.")}})};return e.jsx("div",{children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:[e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h2",{children:"General Information"}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Title"}),e.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",name:"title",placeholder:"Title",value:a.title,onChange:t=>i("title",t.target.value)}),s.title&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.title})]}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Description"}),e.jsx("textarea",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"description",id:"description",onChange:t=>i("description",t.target.value),placeholder:"Description",children:a.description}),s.description&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.description})]}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Tags"}),e.jsxs("select",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"tag",type:"text",name:"tag",placeholder:"category",onChange:t=>i("tag",t.target.value),children:[e.jsx("option",{value:0,children:"Choose Tags"},0),e.jsx("option",{value:"News",children:"News"},1),e.jsx("option",{value:"Guide",children:"Guide"},2),e.jsx("option",{value:"Advice for buyers",children:"Advice for buyers"},3),e.jsx("option",{value:"Advice for sellers",children:"Advice for sellers"},4)]}),s.tag&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.tag})]}),e.jsxs("div",{class:"mb-4 mt-5",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"category",children:"Industry Name"}),e.jsxs("select",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"industry_id",type:"text",name:"industry_id",placeholder:"category",onChange:t=>i("industry_id",t.target.value),children:[e.jsx("option",{value:0,children:"Choose Industry"},0),r.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),s.industry_id&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.industry_id})]})]})}),e.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12",children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6 ml-4",children:[e.jsx("h1",{children:"File Attachments"}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Cover Image"}),e.jsx("img",{src:a.cover_image,className:"w-100 h-20-auto"}),e.jsx("input",{type:"file",name:"coverImage",id:"coverImage",onChange:t=>i("cover_image",t.target.files[0]),class:"w-75 h-10 border rounded-md"}),s.cover_image&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.cover_image})]}),e.jsxs("div",{class:"mb-4",children:[e.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Image Attachment"}),e.jsx("input",{type:"file",name:"imageAttachment",id:"imageAttachment",onChange:t=>{const c=t.target.files,o=[];for(let n=0;n<c.length;n++)o.push(c[n]);i("image_attachments",o)},multiple:!0,class:"w-full h-10 border rounded-md mt-5"}),s.image_attachment&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.image_attachment})]})]})})]}),e.jsx("div",{className:"grid grid-cols-1 gap-1 mt-2",style:{height:"200px"},children:e.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",style:{height:"200px"},children:[e.jsx("h2",{children:"Content"}),e.jsx(f,{name:"content",id:"content",style:{height:"100px"},value:d,onChange:h}),s.content&&e.jsx("p",{className:"text-red-500 text-xs italic",children:s.content})]})}),e.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:e.jsx("button",{type:"submit",class:`bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,children:"Save"})})]})})};v.layout=l=>e.jsx(j,{children:l,title:"Blog Create"});export{v as default};
