import{j as e,d as l}from"./app-a633abfa.js";import{O as i}from"./OwnerLayout-940c08c3.js";import{P as m}from"./profile-b69aa0fa.js";import"./Footer-a394bd84.js";import"./UsersIcon-0e8064e3.js";import"./XMarkIcon-df114656.js";import"./MagnifyingGlassIcon-a495a96d.js";import"./transition-759747bf.js";import"./use-owner-45704a9b.js";import"./ChevronDownIcon-bc31afed.js";import"./dialog-27067e89.js";const t=({user:s})=>e.jsxs("div",{className:"info-container my-5",children:[e.jsx("div",{className:"profile-img my-3 p-2",children:s.image?e.jsx("img",{src:s.image,alt:"",width:200,height:200}):e.jsx("img",{src:m,alt:"",width:200,height:200})}),e.jsxs("div",{className:"profile-inputs flex h-80",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Name"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.name.toUpperCase()," "]})]}),e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Role"}),e.jsx("p",{className:"mt-3",children:s.role.map(a=>e.jsxs("span",{className:"mt-3 font-bold bg-indigo-700 text-white me-2 p-2 rounded-md",children:[" ",a," "]}))})]})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Email"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.email," "]})]}),e.jsxs("div",{className:"form-control p-2 my-2",children:[e.jsx("label",{htmlFor:"name",className:"text-slate-600",children:"Phone"}),e.jsxs("p",{className:"mt-3 font-bold",children:[" ",s.phone??"-"," "]})]})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-1/2",children:e.jsxs(l,{href:`${route("owner.account.edit")}`,className:"bg-indigo-700 text-white p-2 rounded-md",children:[" ","Edit Profile"," "]})}),e.jsx("div",{className:"w-1/2",children:e.jsxs(l,{href:route("owner.account.change-password"),className:"bg-indigo-700 text-white p-2 rounded-md",children:[" ","Edit Password"," "]})})]})]});t.layout=s=>e.jsx(i,{children:s,title:"owner"});export{t as default};