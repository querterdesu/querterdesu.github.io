import{d as e,c as o,a as t,t as r,b as n,o as s,F as l,r as a,e as d,m as i,w as c,f as p,T as m,g}from"./vendor.5a0da8b7.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,s)=>{const l=new URL(e,r);if(self[o].moduleMap[l])return t(self[o].moduleMap[l]);const a=new Blob([`import * as m from '${l}';`,`${o}.moduleMap['${l}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),n(d)},onload(){t(self[o].moduleMap[l]),n(d)}});document.head.appendChild(d)})),self[o].moduleMap={}}}("/assets/");var u=e({name:"PortfolioCard",props:{person:{type:String,required:!0},image:{type:String,required:!0},job:{type:String,required:!0},quote:{type:String,required:!1}}});const x={class:"m-8 p-4 shadow-lg rounded-2xl w-4/6 h-4/6 md:w-2/6 md:h-2/6 xl:h-1/6 xl:w-1/6 flex flex-col justify-center align-middle bg-white dark:bg-gray-800"},f={class:"mx-auto mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100"},h={class:"mx-auto mt-1 text-md italic text-gray-800 dark:text-gray-100"},w={key:0,class:"mx-auto mt-3 text-md justify-center text-center text-gray-800 dark:text-gray-100"};u.render=function(e,l,a,d,i,c){return s(),o("div",x,[t("img",{class:"w-24 h-24 rounded-full mx-auto",src:e.image,width:"128",height:"128"},null,8,["src"]),t("h1",f,r(e.person),1),t("h2",h,r(e.job),1),e.quote?(s(),o("p",w,r(e.quote),1)):n("",!0)])};var v=e({name:"PortfolioCards",components:{PortfolioCard:u},props:{cards:{type:Array,required:!0}}});const y={class:"flex md:justify-start flex-col md:flex-row items-center justify-center"};v.render=function(e,t,r,n,i,c){const p=d("PortfolioCard");return s(),o("div",y,[(s(!0),o(l,null,a(e.cards,(e=>(s(),o(p,{key:e.person,person:e.person,image:e.image,job:e.job,quote:e.quote||""},null,8,["person","image","job","quote"])))),128))])};var k=e({name:"LoginForm",data:()=>({pwdHidden:!0,email:""})});const b={class:"flex justify-center h-full m-20 my-40 sm:m-40 text-3xl align-middle flex-col p-1"},M={class:"flex flex-row align-middle mb-8"},j=t("label",{for:"email",class:"opacity-0"},"Email",-1),D={class:"flex flex-row align-middle mb-8"},L={class:"flex flex-col justify-center -ml-16 z-10"},q=t("label",{for:"password",class:"opacity-0"},"Password",-1),P=t("button",{class:"text-lg md:text-2xl lg:text-3xl p-4 px-7 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-300 hover:to-pink-300 hover:text-black rounded-xl shadow-lg text-white font-semibold w-full md:w-3/6 xl:w-1/6 transition duration-200"}," Sign in ",-1);k.render=function(e,n,l,a,d,p){return s(),o("form",b,[t("div",M,[t("input",i({placeholder:"Email",type:"email",name:"email",id:"email"},e.email,{class:"text-lg md:text-2xl lg:text-3xl p-4 w-full md:w-4/6 xl:w-2/6 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none z-0 transition dark:bg-gray-800 dark:text-gray-100 duration-100"}),null,16),j]),t("div",D,[t("input",{placeholder:"Password",name:"password",type:e.pwdHidden?"password":"text",id:"password",class:"text-lg md:text-2xl lg:text-3xl p-4 pr-16 w-full md:w-4/6 xl:w-2/6 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none z-0 transition duration-100 dark:bg-gray-800 dark:text-gray-100"},null,8,["type"]),t("div",L,[t("button",{class:"p-3 text-xl focus:outline-none rounded-xl",onClick:n[1]||(n[1]=c((o=>e.pwdHidden=!e.pwdHidden),["prevent"]))},r(e.pwdHidden?"🙈️":"👁️"),1)]),q]),P])};var C=e({name:"Header",props:{currentDemo:{type:String,required:!0},demolist:{type:Object,required:!0},darkMode:{type:Boolean,required:!0}},computed:{titleText(){for(const e of this.demolist.demos)if(e.clickParams===this.currentDemo)return e.value}}});const E={class:"flex justify-center text-center p-8 text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-white align-middle"},$=t("h1",{class:"flex-grow align-middle select-none"},"Demos",-1);C.render=function(e,n,l,a,d,i){return s(),o("div",E,[$,t("button",{onClick:n[1]||(n[1]=o=>e.$emit("toggle-dark-mode")),class:"text-4xl focus:outline-none hover:bg-purple-500 bg-purple-600 align-middle text-center rounded-xl h-16 w-16 select-none"},r(e.darkMode?"🌑":"☀️"),1)])};var H=e({name:"DropdownItem",props:{properties:{type:Object,required:!0}},data:()=>({hover:!1})});H.render=function(e,n,l,a,d,i){return s(),o(m,{name:"fade"},{default:p((()=>[t("div",{class:"flex flex-row py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl mx-1 px-2 cursor-pointer dark:text-gray-200 transform transition",onMouseover:n[1]||(n[1]=o=>e.hover=!0),onMouseleave:n[2]||(n[2]=o=>e.hover=!1)},[t("button",{class:["focus:outline-none select-none transform transition",e.hover?"opacity-100":"opacity-0"]},r(">"),2),t("button",{class:["focus:outline-none select-none transform transition",e.hover?"translate-x-3":""]},r(e.properties.value),3)],32)])),_:1})};var S=e({name:"DropdownList",components:{DropdownItem:H},props:{items:{type:Array,required:!0},id:{type:String,required:!0}},computed:{title(){let e=this.id.split("_"),o=[];for(const t of e)o.push(t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase());return o.join(" ")}}});const U={class:"flex flex-col font-bold bg-white rounded-xl p-4 pr-6 text-xl dark:bg-gray-800 shadow-2xl"},_={class:"mx-3 text-2xl select-none dark:text-gray-200"};S.render=function(e,n,i,c,p,m){const g=d("DropdownItem");return s(),o("div",U,[t("p",_,r(e.title),1),(s(!0),o(l,null,a(e.items,(t=>(s(),o(g,{onClick:o=>{e.$emit(`${t.clickEvent}`,t.clickParams),"changeList"!=t.clickEvent&&e.$emit("toggleMenu")},properties:t},null,8,["onClick","properties"])))),256))])};var z=e({name:"DropdownMenu",data:()=>({toggled:!1,currentList:"",hover:!1}),props:{lists:{type:Object,required:!0},start:{type:String,required:!0}},computed:{currentDropdown(){return this.currentList||this.start}},methods:{toggleMenu(){this.toggled=!this.toggled},updateList(e){this.currentList=e},openLink(e){window.open(e)}},components:{DropdownList:S}});const F=t("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"},null,-1),O={key:0,class:"absolute mt-16 w-9/12 md:w-6/12 lg:w-3/12 xl:w-2/12 z-20"};z.render=function(e,r,i,c,g,u){const x=d("DropdownList");return s(),o("div",{class:"flex flex-col m-2",onMouseenter:r[3]||(r[3]=o=>e.hover=!0),onMouseleave:r[4]||(r[4]=o=>{e.hover=!1,e.toggled=!1})},[(s(),o("svg",{onClick:r[1]||(r[1]=(...o)=>e.toggleMenu&&e.toggleMenu(...o)),class:["w-16 z-10 h-16 bg-white shadow-xl rounded-3xl p-4 transform scale-75 transition duration-200 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 img-white fill-current text-gray-900 dark:text-white",e.toggled?"rotate-180":"rotate-0"],viewBox:"0 0 20 20"},[F],2)),t(m,{name:"scale"},{default:p((()=>[e.toggled?(s(),o("div",O,[(s(!0),o(l,null,a(e.lists,((t,l)=>(s(),o("div",null,[e.currentDropdown==l&&e.hover?(s(),o(x,{key:0,onToggleMenu:e.toggleMenu,onChangeList:e.updateList,onLink:e.openLink,onChangeDemo:r[2]||(r[2]=o=>e.$emit("changeDemo",o)),items:t,id:l},null,8,["onToggleMenu","onChangeList","onLink","items","id"])):n("",!0)])))),256))])):n("",!0)])),_:1})],32)};var R=e({name:"App",components:{Header:C,LoginForm:k,PortfolioCards:v,DropdownMenu:z},data:()=>({darkMode:!0,demo:"login-form",demolist:{demos:[{value:"Login form demo",clickEvent:"changeDemo",clickParams:"login-form"},{value:"Portfolio cards demo",clickEvent:"changeDemo",clickParams:"portfolio-cards"},{value:"Multi-page cards demo",clickEvent:"changeDemo",clickParams:"multi-page-cards"}]},cards:[{person:"Pog",image:"https://cdn.discordapp.com/emojis/689177828251533312.png?v=1",job:"Yes",quote:"Poggers pog poggers pog!"},{person:"Pog",image:"https://cdn.discordapp.com/emojis/689177828251533312.png?v=1",job:"Yes",quote:"Poggers pog poggers pog!"},{person:"Pog",image:"https://cdn.discordapp.com/emojis/689177828251533312.png?v=1",job:"Yes",quote:"Poggers pog poggers pog!"},{person:"Pog",image:"https://cdn.discordapp.com/emojis/689177828251533312.png?v=1",job:"Yes",quote:"Poggers pog poggers pog!"}]}),methods:{updateDemo(e){this.demo=e},toggleDarkMode(){this.darkMode=!this.darkMode}}});const T={class:"min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-100"};R.render=function(e,r,l,a,i,c){const p=d("Header"),m=d("DropdownMenu"),g=d("LoginForm"),u=d("PortfolioCards");return s(),o("div",{class:e.darkMode?"dark":""},[t("div",T,[t(p,{currentDemo:"login-form",demolist:e.demolist,darkMode:e.darkMode,onToggleDarkMode:e.toggleDarkMode},null,8,["demolist","darkMode","onToggleDarkMode"]),t(m,{lists:e.demolist,start:"demos",onChangeDemo:e.updateDemo},null,8,["lists","onChangeDemo"]),"login-form"==e.demo?(s(),o(g,{key:0})):n("",!0),"portfolio-cards"==e.demo?(s(),o(u,{key:1,cards:e.cards},null,8,["cards"])):n("",!0)])],2)};g(R).mount("#app");
