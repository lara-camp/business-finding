import{j as s,d as i}from"./app-11bf4d4d.js";const c=({locations:e})=>s.jsx("div",{className:"py-20 mx-20",children:s.jsxs("div",{className:"mx-10",children:[s.jsx("h1",{className:"text-4xl font-bold",children:" Feature Locations "}),s.jsx("div",{className:"flex justify-between mt-10",children:e.data.map(a=>s.jsx(i,{className:"w-1/4",href:route("search.business",{location:a.id}),children:s.jsx(t,{item:a},a.id)}))})]})}),t=({item:e})=>s.jsxs("div",{className:"bg-white mx-5 p-3 shadow-md shadow-slate-400",children:[s.jsx("img",{src:"https://www.abetterimageprinting.com/graphics/fixing-branding-elements.jpg",alt:"category image"}),s.jsxs("div",{className:"my-2",children:[s.jsxs("h1",{className:"font-bold text-2xl",children:[" ",e.name," "]}),s.jsxs("p",{children:[" ",e.business_count," business "]})]})]});export{c as default};
