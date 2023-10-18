import{q as c,j as s,d as l,y as o}from"./app-2533865a.js";import{a as x,b as m}from"./index.esm-afb04d4e.js";import{S as a}from"./sweetalert2.all-5ac8cc23.js";import{f as t}from"./index-d410ef2c.js";import"./iconBase-1d1be14a.js";const p=({businesses:d})=>{const{flash:i}=c().props;console.log(i);const n=e=>{a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed?o.post(route("owner.business.destroy",e),{},{onSuccess:()=>a.fire("Deleted!","Your file has been deleted.","success")}):i.message&&a.fire("Somthing Wrong",i.message,"error")})};return s.jsx("div",{children:d.data.data.length>0?d.data.data.map(e=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"p-3 border my-4 rounded-md shadow shadow-slate-300",children:[s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/5",children:s.jsx("img",{src:e.image,alt:"business-img"})}),s.jsxs("div",{className:"w-2/5 ms-3",children:[s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/2 text-slate-500",children:" Status "}),s.jsxs("div",{className:"w-1/2 text-indigo-700",children:[" : ",t(e.status)," "]})]}),s.jsxs("div",{className:"flex mt-2",children:[s.jsx("div",{className:"w-1/2 text-slate-500",children:" BusinessId "}),s.jsxs("div",{className:"w-1/2 text-indigo-700",children:[" : ",e.id," "]})]}),s.jsxs("div",{className:"flex mt-2",children:[s.jsx("div",{className:"w-1/2 text-slate-500",children:" Name "}),s.jsxs("div",{className:"w-1/2 text-indigo-700",children:[" : ",e.name," "]})]}),s.jsxs("div",{className:"flex mt-2",children:[s.jsx("div",{className:"w-1/2 text-slate-500",children:" Location "}),s.jsxs("div",{className:"w-1/2 text-indigo-700",children:[" : ",e.location," "]})]}),s.jsxs("div",{className:"flex mt-2",children:[s.jsx("div",{className:"w-1/2 text-slate-500",children:" Asking Price "}),s.jsxs("div",{className:"w-1/2 text-indigo-700",children:[" : ",e.asking_price," "]})]}),s.jsx("div",{className:"my-3",children:s.jsx("p",{className:" bg-indigo-700 inline p-2 text-white rounded-md",children:t(e.stage)})})]}),s.jsxs("div",{className:"w-2/5 text-end",children:[s.jsxs("p",{children:[s.jsx("span",{children:" Created Date : "})," ",s.jsxs("span",{className:"text-indigo-700",children:[" ",e.created_at," "]})]}),s.jsxs("p",{className:"mt-2",children:[s.jsx("span",{children:" Last Updated Date : "})," ",s.jsxs("span",{className:"text-indigo-700",children:[" ",e.created_at," "]})]})]})]}),s.jsxs("div",{className:"flex justify-center items-center my-4",children:[s.jsxs("div",{className:"me-3",children:[s.jsx(x,{size:30,className:"inline  text-indigo-700"}),s.jsxs("span",{children:[" ",e.likes," "]})]}),s.jsxs("div",{children:[s.jsx(m,{size:30,className:"inline text-indigo-700"}),s.jsxs("span",{children:[" ",e.views," "]})]})]}),s.jsx("div",{className:"text-end",children:s.jsxs("div",{children:[s.jsx(l,{href:route("owner.business.edit",e.id),className:"p-2 bg-indigo-700 rounded-md text-white me-3",children:" Edit "}),s.jsx("button",{className:"p-2 bg-red-700 rounded-md text-white me-3",onClick:()=>n(e.id),children:" Delete "}),s.jsx(l,{className:"p-2 bg-green-700 rounded-md text-white me-3",method:"post",href:route("owner.business.change-stage",e.id),only:["businesses"],preserveScroll:!0,children:e.stage=="draft"?"Published":"Unpublished"})]})})]},e.id)})):""})};export{p as default};