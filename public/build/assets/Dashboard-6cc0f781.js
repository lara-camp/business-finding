import{j as o}from"./app-2533865a.js";import{D as p}from"./DashboardCard-6b13819f.js";import{O as l}from"./OwnerLayout-a945686d.js";import"./profile-b69aa0fa.js";import"./Footer-df1f6ef8.js";import"./XMarkIcon-84d4bc48.js";import"./UsersIcon-b0e87ee0.js";import"./MagnifyingGlassIcon-f95dce6c.js";import"./transition-bce85724.js";import"./use-owner-5f49e9e9.js";import"./ChevronDownIcon-73da0a81.js";import"./dialog-9fa64067.js";const d=({total_businesses:t,drafts:i,published:r,sold:e})=>{const a=[{id:1,title:"Total Businesses",type:"Total",count:t},{id:2,title:"Drafts Businesses",type:"Total",count:i},{id:3,title:"Published Businesses",type:"Total",count:r},{id:4,title:"Sold Out Businesses",type:"Total",count:e}];return o.jsx("div",{className:"flex",children:a.map(s=>o.jsx(p,{item:s},s.id))})};d.layout=t=>o.jsx(l,{children:t,title:"Dashboard"});export{d as default};