import{r as l,j as e}from"./app-a633abfa.js";import{B as r}from"./BusinessContext-e5a7a31e.js";const o=()=>{const{data:a,setData:t}=l.useContext(r);return e.jsxs("div",{className:"listening-details border border-indigo-700 p-3 rounded-md my-5",children:[e.jsx("h5",{className:"font-bold",children:" Listing Details "}),e.jsxs("div",{className:"my-3",children:[e.jsx("label",{htmlFor:"",className:"block",children:"Listing Headline *"}),e.jsx("input",{type:"text",className:"border-indigo-700 p-2 my-2 w-full rounded-md",placeholder:"Enter Your Title",onChange:s=>t("name",s.target.value),value:a.name}),e.jsx("small",{className:"text-slate-500",children:`This serves as your listing title, with an 8-word limit. For instance: "Profitable and Established Coffee Shop in Devon." We'll automatically append 'For Sale' to the end, not counting it in the word limit.`})]}),e.jsxs("div",{className:"my-3",children:[e.jsx("label",{htmlFor:"",className:"block",children:"General Summary *"}),e.jsx("textarea",{type:"text",className:"border-indigo-700 p-2 my-2 w-full rounded-md",placeholder:"Summary",onChange:s=>t("description",s.target.value),value:a.description}),e.jsx("small",{className:"text-slate-500",children:"Emphasize the strengths and advantages of the business you're selling. You have the freedom to provide as much or as little detail as you prefer. However, please refrain from including phone numbers or email addresses in the description, as we will remove them to maintain privacy and security."})]}),e.jsxs("div",{className:"my-3",children:[e.jsx("p",{className:"mb-3",children:" Status *"}),e.jsx("input",{type:"radio",name:"status",value:"for_sale",onChange:s=>t("status",s.target.value),checked:a.status==="for_sale"}),e.jsx("label",{htmlFor:"status",children:" For Sale "}),e.jsx("input",{type:"radio",name:"status",value:"under_offer",className:"ms-4",onChange:s=>t("status",s.target.value),checked:a.status==="under_offer"}),e.jsx("label",{htmlFor:"status",children:" Under Offer "}),e.jsx("input",{type:"radio",name:"status",value:"sold",className:"ms-4",onChange:s=>t("status",s.target.value),checked:a.status==="sold"}),e.jsx("label",{htmlFor:"status",children:" Sold "})]})]})};export{o as default};
