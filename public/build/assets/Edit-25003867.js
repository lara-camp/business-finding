import{W as x,r as g,j as t,y as p}from"./app-a633abfa.js";import{B as u}from"./BackendLayout-8b26b7fb.js";import{S as b}from"./sweetalert2.all-24b35c01.js";import{R as j}from"./quill.snow-54f5a881.js";import"./profile-b69aa0fa.js";import"./Footer-a394bd84.js";import"./transition-759747bf.js";import"./dialog-27067e89.js";import"./use-owner-45704a9b.js";import"./XMarkIcon-df114656.js";import"./UsersIcon-0e8064e3.js";import"./MagnifyingGlassIcon-a495a96d.js";import"./ChevronDownIcon-bc31afed.js";import"./FolderIcon-919ec22f.js";const f=({blog:s,errors:l})=>{const{data:i,setData:a}=x({id:s.id,tag:s.tag,title:s.title,content:s.content,description:s.body,cover_image:s.cover_image,image_attachment:""}),[c,r]=g.useState(""),m=e=>{r(e),a("content",c)},h=e=>{e.preventDefault(),p.post("/admin/blog/update/"+i.id,i,{onSuccess:()=>{b.fire("updated successfully.")}})};return t.jsx("div",{children:t.jsxs("form",{onSubmit:h,children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1",children:[t.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:t.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",children:[t.jsx("h2",{children:"General Information"}),t.jsxs("div",{class:"mb-4",children:[t.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Title"}),t.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",name:"title",placeholder:"Title",value:i.title,onChange:e=>a("title",e.target.value)}),l.title&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.title})]}),t.jsxs("div",{class:"mb-4",children:[t.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Description"}),t.jsx("textarea",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"description",id:"description",onChange:e=>a("description",e.target.value),placeholder:"Description",children:i.description}),l.description&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.description})]}),t.jsxs("div",{class:"mb-4",children:[t.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Tags"}),t.jsx("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"tags",value:i.tag,name:"tags",onChange:e=>a("tag",e.target.value),placeholder:"Tags"}),l.tag&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.tag})]})]})}),t.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12",children:t.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6 ml-4",children:[t.jsx("h1",{children:"File Attachments"}),t.jsxs("div",{class:"mb-4",children:[t.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Cover Image"}),t.jsx("input",{type:"file",name:"coverImage",id:"coverImage",onChange:e=>a("cover_image",e.target.files[0]),class:"w-75 h-10 border rounded-md"}),l.cover_image&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.cover_image})]}),t.jsxs("div",{class:"mb-4",children:[t.jsx("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title",children:"Image Attachment"}),t.jsx("input",{type:"file",name:"imageAttachment",id:"imageAttachment",onChange:e=>{const d=e.target.files,o=[];for(let n=0;n<d.length;n++)o.push(d[n]);a("image_attachments",o)},multiple:!0,class:"w-full h-10 border rounded-md mt-5"}),l.image_attachment&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.image_attachment})]})]})})]}),t.jsx("div",{className:"grid grid-cols-1 gap-1 mt-2",style:{height:"200px"},children:t.jsxs("div",{class:"bg-white rounded-lg shadow-lg p-6",style:{height:"200px"},children:[t.jsx("h2",{children:"Content"}),t.jsx(j,{name:"content",id:"content",style:{height:"100px"},value:c,onChange:m}),l.content&&t.jsx("p",{className:"text-red-500 text-xs italic",children:l.content})]})}),t.jsx("div",{className:"p-6 mt-2 text-center bg-white rounded-lg shadow-lg",children:t.jsx("button",{type:"submit",class:`bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,children:"Update"})})]})})};f.layout=s=>t.jsx(u,{children:s,title:"Blog Edit"});export{f as default};
