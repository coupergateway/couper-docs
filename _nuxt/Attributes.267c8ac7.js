import{m as o}from"./index.ab713aaf.js";import{o as r,a as n,b as a,F as l,r as s,t as i,u as c}from"./entry.3b3e7867.js";const m=a("h3",{id:"attributes"},[a("a",{href:"#attributes"},"Attributes")],-1),d={class:"table-auto"},y={key:0},_={key:1},v=["innerHTML"],f=["innerHTML"],T={__name:"Attributes",props:{header:{type:Array,required:!1,default:[{name:"Name",value:"name"},{name:"Type",value:"type"},{name:"Default",value:"default"},{name:"Description",value:"description"}]},values:{type:Array,required:!0}},setup(u){return(p,k)=>(r(),n("div",null,[m,a("table",d,[a("thead",null,[a("tr",null,[(r(!0),n(l,null,s(u.header,e=>(r(),n("th",{key:e.value},i(e.name),1))),128))])]),a("tbody",null,[(r(!0),n(l,null,s(u.values,e=>(r(),n("tr",{key:e.name},[(r(!0),n(l,null,s(u.header,t=>(r(),n("td",{key:t.value+e.name},[t.value==="name"?(r(),n("code",y,i(e[t.value]?e[t.value]:"-"),1)):t.value==="default"&&e[t.value]!=""?(r(),n("code",_,i(e[t.value]),1)):t.value==="description"?(r(),n("div",{key:2,innerHTML:c(o)(e[t.value])},null,8,v)):(r(),n("div",{key:3,innerHTML:e[t.value]?e[t.value]:"-"},null,8,f))]))),128))]))),128))])])]))}};export{T as default};
