import{j as e,d as a}from"./app-d15abf51.js";import{B as i}from"./BackendLayout-d5c8d8ab.js";import{S as l}from"./SettingLayout-1c00ca0d.js";import{P as m}from"./profile-b69aa0fa.js";import"./Footer-cc58aae6.js";import"./transition-e5470c3b.js";import"./dialog-66faab49.js";import"./use-owner-522cd04a.js";import"./XMarkIcon-20f198ac.js";import"./UsersIcon-126dd27b.js";import"./MagnifyingGlassIcon-a94d97dc.js";import"./ChevronDownIcon-1496024c.js";const n=({user:s})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"info-container my-5",children:[e.jsx("div",{className:"profile-img my-3 p-2",children:s.image?e.jsx("img",{src:s.image,alt:"",width:200,height:200}):e.jsx("img",{src:m,alt:"",width:200,height:200})}),e.jsxs("div",{className:"profile-inputs flex h-80",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Name"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.name.toUpperCase()," "]})]}),e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Role"}),e.jsx("p",{className:"mt-3",children:s.role.map(t=>e.jsxs("span",{className:"mt-3 font-bold bg-indigo-700 text-white me-2 p-2 rounded-md",children:[" ",t,"  "]}))})]})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Email"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.email," "]})]}),e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Phone"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.phone??"-"," "]})]})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-1/2",children:e.jsx(a,{href:"/admin/setting/account/edit",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Edit Profile "})}),e.jsx("div",{className:"w-1/2",children:e.jsx(a,{href:"/admin/setting/account/change-password",className:"bg-indigo-700 text-white p-2 rounded-md",children:" Edit Password "})})]})]})});n.layout=s=>e.jsx(i,{title:"Account Setting",children:e.jsx(l,{children:s,title:"Account",href:"/admin/setting/account"})});export{n as default};
