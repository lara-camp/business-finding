import{j as s,d as e}from"./app-11bf4d4d.js";import{F as l}from"./FrontendLayout-3355d436.js";import{f as r,a as i,s as m}from"./index-d410ef2c.js";import{I as o}from"./FeatureBusiness-80decbfa.js";import{P as c}from"./Pagination-aba8811e.js";import"./Footer-a30a46cd.js";import"./index.esm-f19866f3.js";import"./iconBase-f2905b98.js";import"./Header-2cf3bcab.js";import"./index.esm-d245299d.js";import"./Search-ec64c6cc.js";import"./Hero-3d1b3cee.js";import"./HomeInfo-ac419456.js";import"./OurBlog-bccb1bf1.js";import"./FeatureCategories-46eee572.js";import"./FeatureLocations-ada27583.js";const d=({businesses:a})=>s.jsxs("div",{className:"mx-20",children:[s.jsxs("h1",{className:"font-bold text-4xl my-3",children:[" ",a.meta.total," ",a.meta.total>1?"Results":"Result"," Found. "]}),s.jsx("div",{className:"flex mt-10 flex-wrap",children:a.data.data.map(t=>s.jsxs("div",{className:"w-1/4 mx-10 border-0 py-2 px-4 bg-white shadow-md my-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:t.image=="null"?"https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg":t.image,alt:"",className:"w-full mt-3"}),s.jsx("p",{className:"absolute top-2 start-2 p-2 bg-white text-sm font-bold",children:r(t.status)}),s.jsxs("p",{className:"absolute bottom-2 end-3 p-2 bg-white text-xl font-bold",children:[i(t.asking_price)," MMK"]})]}),s.jsxs("div",{className:"my-3",children:[s.jsx("h1",{className:"text-2xl font-bold",children:t.title}),s.jsxs("p",{className:"my-2",children:[s.jsx(o,{size:20,className:"inline me-3"}),s.jsx("span",{className:"text-xl",children:t.loc_wth_street})]}),s.jsxs("p",{className:"py-2",children:[" ",m(t.description,100)," "]}),s.jsx("hr",{})]}),s.jsx("div",{className:"my-3",children:s.jsx(e,{href:route("business.detail",t.id),className:"p-2 bg-black text-white",children:" Explore Business "})})]}))}),s.jsx("div",{className:"mt-10",children:s.jsx(c,{links:a.links,meta:a.meta})})]});d.layout=a=>s.jsx(l,{children:a,title:"Search Page"});export{d as default};
