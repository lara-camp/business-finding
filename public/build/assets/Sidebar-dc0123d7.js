import{j as e,d as l}from"./app-d15abf51.js";import{C as o,H as i,U as t}from"./UsersIcon-126dd27b.js";import{F as r,C as c,D as m,a as d}from"./FolderIcon-8c7b57d0.js";import{X as h}from"./XMarkIcon-20f198ac.js";const N=({setSideBarOpen:x,sideBarOpen:f})=>{const s=[{name:"Dashboard",href:"#",icon:i,current:!0},{name:"Users",href:"/admin/users",icon:t,current:!1},{name:"Regions",href:"/admin/regions",icon:r,current:!1},{name:"Cities",href:"/admin/cities",icon:r,current:!1},{name:"OwnerDetail",href:"/admin/owner",icon:h,current:!1},{name:"Calendar",href:"#",icon:c,current:!1},{name:"Documents",href:"#",icon:m,current:!1},{name:"Reports",href:"#",icon:d,current:!1}];function n(...a){return a.filter(Boolean).join(" ")}return e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:s.map(a=>e.jsx("li",{children:e.jsxs(l,{href:a.href,className:n(a.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),children:[e.jsx(a.icon,{className:"h-6 w-6 shrink-0","aria-hidden":"true"}),a.name]})},a.name))})}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white",children:[e.jsx(o,{className:"h-6 w-6 shrink-0","aria-hidden":"true"}),"Settings"]})})]})})]})})};export{N as default};
