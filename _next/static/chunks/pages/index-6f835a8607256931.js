(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8749)}])},8749:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var a=t(4848),s=t(6540);let l=e=>{let r=e.getDate(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getFullYear();return"".concat(t," ").concat(r).concat((e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r),", ").concat(a)};function c(e){let{...r}=e;return(0,a.jsxs)("svg",{viewBox:"0 0 260 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,a.jsx)("path",{d:"M105 229.49V30.5102L130 5L155 30.5102V229.49L130 255L105 229.49Z",stroke:"currentColor","stroke-width":"6"}),(0,a.jsx)("path",{d:"M58.755 203.414L158.245 31.0925L192.651 21.5L201.546 56.0925L102.056 228.414L67.6505 238.006L58.755 203.414Z",stroke:"currentColor","stroke-width":"6"}),(0,a.jsx)("path",{d:"M31.5862 157.245L203.907 57.7551L238.5 66.6507L228.908 101.056L56.5861 200.546L21.9937 191.651L31.5862 157.245Z",stroke:"currentColor","stroke-width":"6"}),(0,a.jsx)("path",{d:"M30.5102 105L229.49 105L255 130L229.49 155L30.5102 155L5 130L30.5102 105Z",stroke:"currentColor","stroke-width":"6"}),(0,a.jsx)("path",{d:"M56.5861 57.755L228.908 157.245L238.5 191.651L203.907 200.546L31.5862 101.056L21.9937 66.6505L56.5861 57.755Z",stroke:"currentColor","stroke-width":"6"}),(0,a.jsx)("path",{d:"M101.755 31.5862L201.245 203.907L192.349 238.5L157.944 228.908L58.4537 56.5861L67.3493 21.9937L101.755 31.5862Z",stroke:"currentColor","stroke-width":"6"})]})}let n=e=>{let{day:r,onClose:t}=e;return(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-white p-8 border-2 border-black font-mono max-w-xl w-full relative overflow-hidden",children:[(0,a.jsxs)("h2",{className:"text-2xl font-bold mb-6 uppercase",children:["RAMADAN DAY ",r.dayNumber]}),(0,a.jsxs)("p",{className:"text-lg mb-2",children:[(0,a.jsx)("strong",{className:"uppercase",children:"DATE:"})," ",l(r.date).toUpperCase()]}),(0,a.jsxs)("p",{className:"text-lg mb-2",children:[(0,a.jsx)("strong",{className:"uppercase",children:"SEHR TIME:"})," ",r.sehrTime]}),(0,a.jsxs)("p",{className:"text-lg mb-4",children:[(0,a.jsx)("strong",{className:"uppercase",children:"IFTAR TIME:"})," ",r.iftarTime]}),(0,a.jsx)("button",{className:"mt-6 bg-black text-white px-8 py-3 uppercase hover:bg400 hover:text-blue-300 border-2 border-black",onClick:t,children:"Close"}),(0,a.jsx)(c,{className:"absolute right-1/2   animate-spin"})]})})},o=e=>{let{selectedDay:r,setSelectedDay:t}=e,c=new Date("2025-03-01"),o=new Date("2025-02-26"),[d,i]=(0,s.useState)([]);(0,s.useEffect)(()=>{(()=>{let e=[];for(let r=0;r<30;r++){let t=new Date(c);t.setDate(c.getDate()+r),e.push({date:t,dayNumber:r+1})}i(e)})()},[]);let b=e=>{t(e)},p=["SUN","MON","TUE","WED","THU","FRI","SAT"],x=Array(c.getDay()).fill(null);return(0,a.jsxs)("div",{className:"w-full max-w-4xl font-mono",children:[(0,a.jsxs)("div",{className:"print:hidden",children:[(0,a.jsx)("button",{onClick:()=>{window.print()},className:"mb-8 bg-black text-white px-6 py-3 font-mono uppercase hover:bg-blue-400 hover:text-black border-2 border-black",children:"Print Calendar"}),(0,a.jsxs)("div",{className:"grid grid-cols-7 mb-2",id:"calendar-grid",children:[p.map((e,r)=>(0,a.jsx)("div",{className:"p-4 text-center font-bold bg-black text-white",children:e},r)),x.map((e,r)=>(0,a.jsx)("div",{className:"p-4 bg-gray-100 border-2 border-gray-100"},"empty-".concat(r))),d.map(e=>{let r=e.date<o,t=e.date.toDateString()===o.toDateString(),s=e.date.getDay();return(0,a.jsxs)("div",{className:"p-4 text-center cursor-pointer transition-colors border-2 border-transparent\n                  ".concat(r?"bg-gray-300 text-gray-600 border-gray-400":"bg-white border-black","\n                  ").concat(t?"bg-blue-400 border-black":"","\n                  ").concat(5===s?"bg-green-100 border-green-800":"","\n                  ").concat(0===s?"bg-blue-100 border-blue-800":""," \n                  hover:bg-blue-200 hover:border-blue-400"),onClick:()=>b(e),children:[(0,a.jsxs)("p",{className:"font-bold text-xl",children:["DAY ",e.dayNumber]}),(0,a.jsx)("p",{className:"uppercase",children:l(e.date).split(",")[0]})]},e.dayNumber)}),x.map((e,r)=>(0,a.jsx)("div",{className:"p-4 bg-gray-100 border-2 border-gray-100"},"empty-".concat(r)))]})]}),(0,a.jsx)("div",{className:"hidden print:block print:w-full print:h-full",children:(0,a.jsxs)("div",{className:"grid grid-cols-7",children:[p.map((e,r)=>(0,a.jsx)("div",{className:"p-2 text-center font-bold bg-black text-white",children:e},r)),x.map((e,r)=>(0,a.jsx)("div",{className:"p-2 bg-gray-200 border-2 border-gray-400"},"empty-".concat(r))),d.map(e=>{let r=e.date.getDay();return(0,a.jsxs)("div",{className:"p-2 text-center border-2 border-black\n                  ".concat(5===r?"bg-green-100":"","\n                  ").concat(0===r?"bg-blue-100":""),children:[(0,a.jsxs)("p",{className:"font-bold",children:["DAY ",e.dayNumber]}),(0,a.jsx)("p",{className:"uppercase",children:l(e.date)})]},e.dayNumber)}),x.map((e,r)=>(0,a.jsx)("div",{className:"p-4 bg-gray-200 border-2 border-gray-400"},"empty-".concat(r)))]})}),r&&(0,a.jsx)(n,{day:r,onClose:()=>t(null)})]})},d=()=>{let[e,r]=(0,s.useState)(null);return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center p-4",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Ramadan Calendar 2025"}),(0,a.jsx)(o,{selectedDay:e,setSelectedDay:r})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[636,593,792],()=>r(2022)),_N_E=e.O()}]);