(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6032],{88082:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendar/gym/[id]",function(){return t(90016)}])},90016:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return eo}});var n=t(52322),r=t(48119),l=t(5632),i=t(6659),s=t(2784),o=t(60418),d=t(21514),c=t(26680);let u=async e=>{let{gymId:a,date:t,page:n=1,limit:r=10}=e,l=(0,d.t)((0,c.D)(t),{hours:0,milliseconds:0,minutes:0,seconds:0}),i=(0,d.t)((0,c.D)(t),{hours:23,minutes:59,seconds:59,milliseconds:59}),{data:s}=await o.Z.get("".concat("https://api.eu.membr.com","/api/public/gyms/").concat(a,"/bookings?page=").concat(n,"&page_size=").concat(r,"&from_date=").concat(l.toISOString(),"&to_date=").concat(i.toISOString()));return{data:s.data,canFetchMore:s.data.length===r}};var m=t(35549);let f=Array(7).fill(0).map((e,a)=>{let t=new Date;return t.setDate(t.getDate()+a),{name:t.getDate().toString(),title:t.getDate().toString(),date:t}}),x=e=>{let{query:a}=(0,l.useRouter)(),[t,n]=(0,s.useState)(f[0]),{data:r,isLoading:i,hasNextPage:o,fetchNextPage:d,isFetching:c,isError:x,isFetched:g}=(0,m.N)({queryKey:["gym",e,t.name],initialPageParam:1,queryFn:a=>{let{pageParam:n}=a;return u({page:n,gymId:e,date:t.date.toISOString()})},getNextPageParam:(e,a)=>{if(e.canFetchMore)return a.length+1},enabled:!!e});return{days:f,bookings:r,currentTab:t,setCurrenTab:n,isLoading:i,hasNextPage:o,fetchNextPage:d,isFetching:c,isError:x,isFetched:g,redirectUrl:null==a?void 0:a.redirectUrl,showProfilePicture:(null==a?void 0:a.showProfilePicture)===void 0||(null==a?void 0:a.showProfilePicture)==="1"}},g=e=>{let{query:a,isReady:t}=(0,l.useRouter)(),n="light";return"string"==typeof a.theme&&n&&["dark","light"].includes(a.theme)&&(n=a.theme),(0,s.useEffect)(()=>{let a=document.getElementById("theme");if(a&&a.remove(),!e)return;let t=document.createElement("style");document.body.appendChild(t),t.id="theme",t.innerHTML='[data-theme="'.concat(n,'"] {\n      --color-brand-background-strong: ').concat(e,";\n      --color-brand-background-strong-hover: ").concat(e,";\n      --color-brand-background-strong-active: ").concat(e,";\n      --color-brand-border-strong: ").concat(e,";   \n      --color-brand-text: ").concat(e,"; \n    ")},[e,n]),{theme:n,isReady:t}};var h=t(49081),p=t(99630),v=t(61335);let b=(0,s.memo)(e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",role:"img",width:24,height:24,"aria-label":"loading","data-name":"LoadingIcon",...e,className:(0,p.cn)("animate-spin p-1 text-neutral-icon",e.className),children:[(0,n.jsx)("circle",{className:"opacity-10",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-20",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}));b.displayName="LoadingIcon";var w=t(76999),j=t(96523);let N=(0,v.j)("shrink-auto relative inline-flex flex-row items-center justify-center rounded-full text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-global-focus",{variants:{variant:{default:"bg-neutral shadow-sm ring-1 ring-inset ring-neutral-strong hover:enabled:bg-gradient-to-b hover:enabled:from-neutral-hover hover:enabled:to-neutral-hover hover:enabled:ring-neutral-hover active:enabled:bg-gradient-to-b active:enabled:from-neutral-active active:enabled:to-neutral-active active:enabled:ring-neutral-active",ghost:"hover:enabled:bg-neutral-hover active:enabled:bg-neutral-active",primary:"bg-brand-strong text-brand-strong shadow-sm hover:enabled:bg-brand-strong-hover active:enabled:bg-brand-strong-active",secondary:"text-brand ring-1 ring-inset ring-brand",compact:"gap-1 text-brand shadow-none hover:enabled:before:absolute hover:enabled:before:-left-2 hover:enabled:before:-right-2 hover:enabled:before:bottom-0 hover:enabled:before:top-0 hover:enabled:before:rounded-full hover:enabled:before:bg-neutral-hover active:enabled:before:bg-neutral-active"},danger:{true:"",false:""},size:{small:"gap-1.5 px-3.5 py-1.5",medium:"gap-2 px-4 py-2",large:"gap-2.5 px-5 py-2.5"},disabled:{true:"opacity-30",false:""},loading:{true:"",false:""},iconPosition:{left:"",right:""},icon:{true:"",false:""},fullWidth:{true:"w-full",false:""},iconOnly:{true:"",false:""}},compoundVariants:[{variant:"compact",size:["small","medium","large"],className:"px-0 py-0"},{danger:!0,variant:["default","secondary"],className:"hover:enabled:ring-danger-hover text-danger ring-danger"},{danger:!0,variant:["compact","ghost"],className:"text-danger"},{danger:!0,variant:"primary",className:"bg-danger-strong text-danger-strong hover:enabled:bg-danger-strong-hover active:enabled:bg-danger-strong-active"},{size:["small","medium","large"],iconOnly:!0,className:"px-2 py-2"},{variant:["default","secondary","ghost","primary"],size:"medium",icon:!0,iconOnly:!1,iconPosition:"left",className:"pl-3.5"},{variant:["default","secondary","ghost","primary"],size:"medium",icon:!0,iconOnly:!1,iconPosition:"right",className:"pr-3.5"},{variant:["default","secondary","ghost","primary"],size:"large",icon:!0,iconPosition:"left",className:"pl-4"},{variant:["default","secondary","ghost","primary"],size:"large",icon:!0,iconOnly:!1,iconPosition:"right",className:"pr-4"},{variant:["default","secondary","ghost","primary"],size:"small",icon:!0,iconOnly:!1,iconPosition:"left",className:"pl-3"},{variant:["default","secondary","ghost","primary"],size:"small",icon:!0,iconOnly:!1,iconPosition:"right",className:"pr-3"},{variant:"compact",icon:!0,iconPosition:"left",className:"hover:enabled:before:left-0 active:enabled:before:left-0"},{variant:"compact",size:["small","medium","large"],className:"gap-1"}],defaultVariants:{variant:"default",size:"medium",icon:!1,iconPosition:"left",iconOnly:!1,danger:!1,disabled:!1,fullWidth:!1}}),y=(0,v.j)("inline-flex rounded-full",{variants:{size:{small:"h-[41px] w-16",medium:"h-[45px] w-16",large:"h-[50px] w-16"},iconOnly:{true:"",false:""},fullWidth:{true:"w-full",false:""},compact:{true:"h-[27px]",false:""}},compoundVariants:[{iconOnly:!0,compact:!1,size:"small",className:"h-9 w-9"},{iconOnly:!0,compact:!1,size:"medium",className:"h-11 w-11"},{iconOnly:!0,compact:!1,size:"large",className:"h-12 w-12"}]}),k=(0,v.j)("",{variants:{variant:{default:"",ghost:"",primary:"",secondary:"",compact:""},danger:{true:"text-danger-icon",false:""},iconOnly:{true:"",false:""}},compoundVariants:[{variant:"primary",danger:!0,className:"text-danger-strong"}],defaultVariants:{variant:"default",iconOnly:!1,danger:!1}}),z=s.forwardRef((e,a)=>{var t,r;let{type:l="button",variant:i="default",size:s="medium",skeleton:o=!1,disabled:d=!1,loading:c=!1,danger:u=!1,children:m,icon:f,iconOnly:x,iconPosition:g="left",fullWidth:v=!1,className:z,iconClassName:q,textClassName:C,tooltipOptions:P,...V}=e;if(o)return(0,n.jsx)(w.n,{className:y({size:s,iconOnly:x,fullWidth:v,compact:"compact"===i}),lineClassName:"h-full rounded-full"});let _=d||c,O=c?b:f,S=O?(0,n.jsx)(O,{className:(0,p.cn)(k({danger:u,variant:i,iconOnly:x}),q)}):void 0,A="string"==typeof m?m:void 0;return(0,n.jsx)(h.E,{enabled:!!x&&(null==P||!P.open)&&x,triggerAsChild:!0,trigger:(0,n.jsxs)("button",{className:(0,p.cn)(N({variant:i,size:s,loading:c,danger:u,disabled:d,fullWidth:v,iconOnly:x,icon:!!f,iconPosition:g}),z),"aria-label":A,disabled:_,ref:a,type:l,...V,children:["left"===g&&S,A&&!x&&(0,n.jsx)(j.x,{className:C,children:A}),!A&&m,"right"===g&&S]}),side:null!==(t=null==P?void 0:P.side)&&void 0!==t?t:"bottom",align:null!==(r=null==P?void 0:P.align)&&void 0!==r?r:"center",text:null!=A?A:""})});z.displayName="Button";var q=t(87247);let C=(0,s.createContext)({variant:"calendar-week"}),P=(0,v.j)("",{variants:{variant:{"calendar-week":"relative border-b border-b-neutral"}},defaultVariants:{variant:"calendar-week"}}),V=(0,v.j)("",{variants:{variant:{"calendar-week":"-mb-px flex flex-row"}},defaultVariants:{variant:"calendar-week"}});function _(e){let{children:a,onValueChange:t,defaultTabName:l,selectedTabName:i,variant:s}=e;return(0,n.jsx)(C.Provider,{value:{variant:null!=s?s:"calendar-week"},children:(0,n.jsx)(q.fC,{type:"single",className:(0,p.cn)(P({variant:s})),value:i,defaultValue:l,onValueChange:t,children:(0,n.jsx)(r.x,{className:(0,p.cn)(V({variant:s})),children:a})})})}let O=(0,v.j)("",{variants:{variant:{"calendar-week":"group flex flex-1 flex-col items-center justify-end gap-1 border-b-2 border-transparent px-2 py-3 hover:border-neutral focus-visible:outline-global-focus data-[state='on']:border-brand-strong sm:flex-row sm:justify-center sm:px-4 sm:py-4"}},defaultVariants:{variant:"calendar-week"}}),S=(0,v.j)("",{variants:{variant:{"calendar-week":"flex text-sm font-medium text-neutral-weak group-hover:text-neutral-body group-data-[state='on']:text-brand"}},defaultVariants:{variant:"calendar-week"}}),A=(0,v.j)("",{variants:{variant:{"calendar-week":"px-1.5 text-sm font-medium text-neutral-body group-hover:text-neutral group-data-[state='on']:rounded-full group-data-[state='on']:bg-brand-strong group-data-[state='on']:text-brand-strong"}},defaultVariants:{variant:"calendar-week"}});function D(e){let{name:a,title:t,subTitle:r}=e,{variant:l}=(0,s.useContext)(C);return(0,n.jsxs)(q.ck,{value:a,className:(0,p.cn)(O({variant:l})),children:[(0,n.jsx)(j.x,{className:(0,p.cn)(S({variant:l})),children:t}),r&&(0,n.jsx)(j.x,{className:(0,p.cn)(A({variant:l})),children:r})]})}let R=(0,s.createContext)({variant:"default"}),T=(0,v.j)("border-separate border-spacing-0",{variants:{variant:{default:"min-w-full"}},defaultVariants:{variant:"default"}}),E=(0,s.forwardRef)((e,a)=>{let{children:t,variant:r,...l}=e;return(0,n.jsx)(R.Provider,{value:{variant:null!=r?r:"default"},children:(0,n.jsx)("table",{className:(0,p.cn)(T({variant:r})),...l,ref:a,children:t})})});function I(e){let{children:a,className:t}=e;return(0,n.jsx)("tbody",{className:(0,p.cn)("[&>tr:not(:last-child)>td]:border-b [&>tr:not(:last-child)>td]:border-b-neutral",t),children:a})}function L(e){let{children:a,className:t,...r}=e;return(0,n.jsx)("td",{...r,className:(0,p.cn)("px-3 py-3 text-sm leading-6 first-of-type:pl-0",t),children:a})}function U(e){let{children:a,className:t}=e;return(0,n.jsx)(r.x,{className:(0,p.cn)("overflow-auto",t),children:(0,n.jsx)(r.x,{className:"inline-block min-w-full align-middle",children:a})})}E.displayName="Table";var F=t(68099);let M=(0,s.memo)(e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","data-name":"ArrowDownIcon",role:"graphics-document",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M11.25 14.796V6q0-.32.215-.535A.73.73 0 0 1 12 5.25q.32 0 .535.215A.73.73 0 0 1 12.75 6v8.796l3.323-3.323a.72.72 0 0 1 .522-.212.7.7 0 0 1 .532.212q.217.217.217.527a.72.72 0 0 1-.217.527l-4.494 4.494a.87.87 0 0 1-.633.271.87.87 0 0 1-.633-.27l-4.494-4.495a.72.72 0 0 1-.212-.522.7.7 0 0 1 .212-.532.72.72 0 0 1 .527-.217q.31 0 .527.217z"})}));M.displayName="Icon";let B=(0,s.memo)(e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","data-name":"ArrowUpIcon",role:"graphics-document",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M11.25 8.108 7.927 11.43a.72.72 0 0 1-.522.212.7.7 0 0 1-.532-.212.72.72 0 0 1-.217-.527q0-.31.217-.527l4.494-4.494A.87.87 0 0 1 12 5.612q.361 0 .633.27l4.494 4.495q.208.207.212.522a.7.7 0 0 1-.212.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217L12.75 8.108v8.796a.73.73 0 0 1-.215.534.73.73 0 0 1-.535.216.73.73 0 0 1-.535-.216.73.73 0 0 1-.215-.534z"})}));B.displayName="Icon";let W=(0,s.memo)(e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","data-name":"DragIndicatorIcon",role:"graphics-document",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M9 19.23q-.507 0-.87-.36a1.19 1.19 0 0 1-.36-.87q0-.507.36-.87.363-.36.87-.36t.87.36q.36.363.36.87t-.36.87q-.363.36-.87.36m6 0q-.507 0-.87-.36a1.19 1.19 0 0 1-.36-.87q0-.507.36-.87.362-.36.87-.36.507 0 .87.36.36.363.36.87t-.36.87q-.362.36-.87.36m-6-6q-.507 0-.87-.36a1.19 1.19 0 0 1-.36-.87q0-.507.36-.87.363-.36.87-.36t.87.36q.36.362.36.87 0 .507-.36.87-.363.36-.87.36m6 0q-.507 0-.87-.36a1.19 1.19 0 0 1-.36-.87q0-.507.36-.87.362-.36.87-.36.507 0 .87.36.36.362.36.87 0 .507-.36.87-.362.36-.87.36m-6-6q-.507 0-.87-.36A1.19 1.19 0 0 1 7.77 6q0-.507.36-.87.363-.36.87-.36t.87.36q.36.363.36.87t-.36.87q-.363.36-.87.36m6 0q-.507 0-.87-.36a1.19 1.19 0 0 1-.36-.87q0-.507.36-.87.362-.36.87-.36.507 0 .87.36.36.363.36.87t-.36.87q-.362.36-.87.36"})}));function Y(e){let{children:a,drag:t,columnResize:r,className:l,sorting:i=!1,sortingDirection:o,onSortingChange:d,wrapperProps:c,onStartResizing:u,isResizing:m,...f}=e,x=(0,s.useRef)(null),g=e=>{e.preventDefault(),e.stopPropagation(),null==u||u(e)};return(0,n.jsx)("th",{ref:x,...f,className:(0,p.cn)("group/table-head relative border-b border-b-neutral px-3 py-3 text-left text-sm font-semibold leading-6 text-neutral first-of-type:pl-0",l,i&&"cursor-pointer"),onClick:()=>{m||!i||m||(o=void 0===o?"asc":"asc"===o?"desc":void 0,null==d||d(o))},children:(0,n.jsxs)(F.x,{...c,className:(0,p.cn)("flex gap-1",null==c?void 0:c.className),children:[t&&(0,n.jsx)(W,{className:"shrink-0 cursor-grab text-neutral-icon-weak"}),a,i&&void 0===o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{className:"hidden shrink-0 text-neutral-icon-weak group-hover/table-head:block"}),(0,n.jsx)(F.x,{className:"h-[24px] w-[24px] shrink-0 text-neutral-icon-weak group-hover/table-head:hidden"})]}),"asc"===o&&(0,n.jsx)(B,{className:"shrink-0"}),"desc"===o&&(0,n.jsx)(M,{className:"shrink-0"}),r&&(0,n.jsx)(F.x,{id:"col-resize","data-state":m?"resizing":"",onClick:e=>{e.preventDefault(),e.stopPropagation()},onMouseDown:g,onTouchStart:g,className:"absolute bottom-0 right-0 z-[999] hover:after:absolute data-[state=resizing]:after:absolute after:top-0 after:bottom-0 after:w-1 after:left-1/2 after:-m-[2px] after:bg-global-focus top-0 w-4 cursor-col-resize resizer w-1 h-full"})]})})}function H(e){let{children:a,className:t}=e;return(0,n.jsx)("thead",{className:t,children:a})}function X(e){let{children:a,className:t}=e;return(0,n.jsx)("tr",{className:t,children:a})}W.displayName="Icon";var K=t(75478),Z=t(98036);let G=(0,v.j)("inline-flex h-full w-full items-center justify-center bg-neutral-medium leading-none text-neutral-strong",{variants:{size:{default:"text-sm",medium:"text-lg"}},defaultVariants:{size:"default"}}),J=s.forwardRef((e,a)=>{let{className:t,size:r,...l}=e;return(0,n.jsx)(Z.NY,{ref:a,className:(0,p.cn)(G({size:r}),t),...l})});J.displayName=Z.NY.displayName;let Q=s.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)(Z.Ee,{ref:a,"data-chromatic":"ignore",className:(0,p.cn)("aspect-square h-full w-full",t),...r})});Q.displayName=Z.Ee.displayName;let $=(0,v.j)("inline-flex overflow-hidden rounded-full font-medium",{variants:{size:{default:"h-8 w-8",medium:"h-12 w-12"}},defaultVariants:{size:"default"}}),ee=(0,v.j)("font-medium",{variants:{size:{default:"text-sm",medium:""}},defaultVariants:{size:"default"}}),ea=s.forwardRef((e,a)=>{let{skeleton:t,firstName:l,lastName:i,showName:s,imageUrl:o,size:d,...c}=e,u="".concat(l," ").concat(i);if(t)return(0,n.jsxs)(r.x,{className:"flex flex-row items-center gap-3",children:[(0,n.jsx)(w.n,{className:(0,p.cn)($({size:d}),"bg-global-skeleton")}),s&&(0,n.jsx)(j.x,{skeleton:t,className:"max-w-[120px]",children:u})]});let m=l.charAt(0).toUpperCase()+i.charAt(0).toUpperCase();return(0,n.jsxs)(r.x,{className:"inline-flex items-center gap-3",children:[(0,n.jsxs)(Z.fC,{ref:a,...c,title:u,className:(0,p.cn)($({size:d})),children:[(0,n.jsx)(Q,{alt:u,src:o}),(0,n.jsx)(J,{size:d,children:m})]}),s&&(0,n.jsx)(j.x,{className:(0,p.cn)(ee({size:d})),children:u})]})});ea.displayName=Z.fC.displayName;var et=t(39097),en=t.n(et),er=t(82876);let el=e=>{let{className:a,href:t,searchParams:r,preserverSearchParams:l=!0,...i}=e,s=(0,er.useSearchParams)(),o={};if(l)for(let[e,a]of s.entries())o[e]=a;return(0,n.jsx)(en(),{className:(0,p.cn)("inline-flex items-center outline-none",a),...i,href:{pathname:t,query:{...o,...r}}})},ei=e=>{var a;let{booking:t,redirectUrl:l,showProfilePicture:i}=e,s=(0,K.useTranslations)(),o=new Date(t.events.dateStart);return(0,n.jsxs)(X,{children:[(0,n.jsx)(L,{children:"".concat(o.toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}))}),i&&(0,n.jsx)(L,{className:"hidden xs:flex",children:(0,n.jsx)(ea,{size:"medium",firstName:t.staff.user.firstName,lastName:t.staff.user.lastName,imageUrl:null!==(a=t.staff.user.avatarUrl)&&void 0!==a?a:void 0})}),(0,n.jsx)(L,{width:"95%",className:l?"":"last-of-type:text-left",children:(0,n.jsxs)(r.x,{className:"flex flex-col gap-1",children:[(0,n.jsx)(j.x,{className:"font-semibold text-neutral",children:s("booking_preview.duration",{minutes:t.events.eventTime,bookingName:t.events.name})}),(0,n.jsx)(j.x,{className:"text-sm font-normal",children:["".concat(t.staff.user.firstName," ").concat(t.staff.user.lastName),t.location.name].join(", ")})]})}),l&&(0,n.jsx)(L,{children:(0,n.jsx)(el,{target:"_blank",href:l,preserverSearchParams:!1,children:(0,n.jsx)(z,{size:"small",children:s("booking_preview.book")})})})]})},es=e=>{var a;let{days:t,bookings:l,currentTab:i,onValueChanged:o,fetchNextPage:d,canLoadMore:c,isFetching:u,redirectUrl:m,isError:f,isFetched:x,showProfilePicture:g=!0}=e,h=(0,K.useTranslations)(),v=i.date,w=l&&x&&(0===l.pages.length||(null===(a=l.pages[0])||void 0===a?void 0:a.data.length)===0),N=f&&x;return(0,n.jsxs)(r.x,{className:"flex flex-col gap-8",children:[(0,n.jsx)(_,{selectedTabName:i.name,onValueChange:o,children:t.map((e,a)=>(0,n.jsx)(D,{name:e.name,subTitle:e.title,title:0===a?h("calendar.today"):e.date.toLocaleDateString(void 0,{weekday:"short"})},e.name))}),(0,n.jsx)(U,{children:(0,n.jsxs)(E,{children:[(0,n.jsx)(H,{children:(0,n.jsx)(X,{children:(0,n.jsxs)(Y,{colSpan:5,className:(0,p.cn)("relative last-of-type:text-left",u&&"last-of-type:sm:pr-11"),children:[(0,n.jsx)(j.x,{className:(0,p.cn)("flex-1","pr-4"),children:v.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}),u&&(0,n.jsx)(r.x,{className:"absolute inset-y-0 right-4 flex items-center",children:(0,n.jsx)(b,{})})]})})}),(0,n.jsxs)(I,{children:[null==l?void 0:l.pages.map((e,a)=>(0,n.jsx)(s.Fragment,{children:e.data.map(e=>(0,n.jsx)(ei,{booking:e,redirectUrl:m,showProfilePicture:g},e.events.id))},a)),!N&&w&&(0,n.jsx)(X,{children:(0,n.jsx)(L,{colSpan:5,className:"p-0",children:(0,n.jsx)(j.x,{className:"block w-full px-8 py-20 text-center text-sm font-normal text-neutral-body",children:h("calendar.no_bookings")})})}),N&&(0,n.jsx)(X,{children:(0,n.jsx)(L,{colSpan:5,className:"p-0",children:(0,n.jsx)(j.x,{className:"block w-full px-8 py-20 text-center text-sm font-normal text-neutral-body",children:h("calendar.loading_error")})})}),c&&(0,n.jsx)(X,{children:(0,n.jsx)(L,{colSpan:5,className:"text-center",children:(0,n.jsx)(z,{onClick:()=>void d(),size:"small",children:h("calendar.load_more")})})})]})]})})]})};function eo(){let{query:e}=(0,l.useRouter)(),a=e.id,{setTheme:t}=(0,i.F)(),o=x(a),{theme:d,isReady:c}=g(e.primaryColor);if((0,s.useEffect)(()=>{"dark"===d?t("dark"):t("light")},[d,t]),!c)return null;let{setCurrenTab:u,isLoading:m,hasNextPage:f,days:h}=o;return(0,n.jsx)(r.x,{className:"h-full","data-theme":d,children:(0,n.jsx)(es,{...o,isLoading:m||!a,canLoadMore:null!=f&&f,onValueChanged:e=>{if(!e.length)return;let a=h.find(a=>a.name===e);a&&u(a)},redirectUrl:e.redirectUrl})})}},99630:function(e,a,t){"use strict";t.d(a,{cn:function(){return l}});var n=t(40489),r=t(20324);let l=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.m6)((0,n.W)(a))}},68099:function(e,a,t){"use strict";t.d(a,{x:function(){return r}});var n=t(52322);let r=(0,t(2784).forwardRef)((e,a)=>{let{children:t,as:r="div",...l}=e;return(0,n.jsx)(r,{...l,ref:a,children:t})});r.displayName="Box"},48119:function(e,a,t){"use strict";t.d(a,{x:function(){return n.x}});var n=t(68099)},76999:function(e,a,t){"use strict";t.d(a,{n:function(){return i}});var n=t(52322),r=t(99630);t(2784);var l=t(48119);function i(e){let{className:a,maxWidth:t,lineClassName:i}=e;return(0,n.jsx)(l.x,{className:(0,r.cn)("flex h-6 w-full items-center",a),style:{maxWidth:t},children:(0,n.jsx)(l.x,{className:(0,r.cn)("h-2.5 w-full animate-pulse rounded-md bg-global-skeleton",i)})})}},96523:function(e,a,t){"use strict";t.d(a,{x:function(){return i}});var n=t(52322),r=t(2784),l=t(76999);let i=(0,r.forwardRef)((e,a)=>{let{children:t,skeleton:r,...i}=e;return r?(0,n.jsx)(l.n,{lineClassName:i.className}):(0,n.jsx)("span",{...i,ref:a,children:t})});i.displayName="Text"},49081:function(e,a,t){"use strict";t.d(a,{E:function(){return i}});var n=t(52322),r=t(2784),l=t(10522);let i=(0,r.forwardRef)((e,a)=>{let{enabled:t,...r}=e;return t?(0,n.jsx)(l.u,{...r,ref:a}):r.trigger});i.displayName="MaybeTooltip"},10522:function(e,a,t){"use strict";t.d(a,{u:function(){return d}});var n=t(52322),r=t(73466),l=t(2784),i=t(99630),s=t(96523);let o=(0,l.forwardRef)((e,a)=>{let{className:t,sideOffset:l=4,text:o,...d}=e;return(0,n.jsx)(r.h_,{children:(0,n.jsxs)(r.VY,{ref:a,sideOffset:l+5,className:(0,i.cn)("group/tooltip-content z-50 flex max-h-[calc(var(--radix-tooltip-content-available-height)-16px)] flex-col gap-2 rounded-lg bg-neutral-strong px-3 py-2.5 text-neutral-strong shadow data-[side=bottom]:max-w-[calc(var(--radix-tooltip-content-available-width)-32px)] data-[side=left]:max-w-[calc(var(--radix-tooltip-content-available-width)-16px)] data-[side=right]:max-w-[calc(var(--radix-tooltip-content-available-width)-16px)] data-[side=top]:max-w-[calc(var(--radix-tooltip-content-available-width)-32px)] data-[state=delayed-open]:data-[side=bottom]:animate-tooltipUpAndFade data-[state=delayed-open]:data-[side=left]:animate-tooltipRightAndFade data-[state=delayed-open]:data-[side=right]:animate-tooltipLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-tooltipDownAndFade",t),...d,children:[(0,n.jsx)("svg",{"aria-hidden":!0,"data-align":d.align,"data-side":d.side,className:(0,i.cn)("absolute fill-[var(--color-neutral-background-strong)]","data-[side=bottom]:-top-[5px] data-[side=bottom]:rotate-180","data-[side=top]:-bottom-[5px]","data-[side=left]:-right-[7px] data-[side=left]:-rotate-90","data-[side=right]:-left-[7px] data-[side=right]:rotate-90","data-[side=bottom]:data-[align=start]:left-3 data-[side=top]:data-[align=start]:left-3","data-[side=bottom]:data-[align=end]:right-3 data-[side=top]:data-[align=end]:right-3","data-[side=bottom]:data-[align=center]:left-[calc(50%-5px)] data-[side=top]:data-[align=center]:left-[calc(50%-5px)]","data-[side=left]:data-[align=start]:top-3 data-[side=right]:data-[align=start]:top-3","data-[side=left]:data-[align=center]:top-[calc(50%-5px)] data-[side=right]:data-[align=center]:top-[calc(50%-5px)]","data-[side=left]:data-[align=end]:bottom-3 data-[side=right]:data-[align=end]:bottom-3"),width:"10",height:"5",viewBox:"0 0 30 10",preserveAspectRatio:"none",children:(0,n.jsx)("polygon",{points:"0,0 30,0 15,10"})}),(0,n.jsx)(s.x,{className:"text-sm font-normal",children:o})]})})});o.displayName=r.VY.displayName;let d=(0,l.forwardRef)((e,a)=>{let{trigger:t,defaultOpen:i,delayDuration:s=0,triggerAsChild:d=!1,align:c="center",...u}=e,m=(0,l.useRef)(null);return(0,n.jsxs)(r.fC,{delayDuration:s,defaultOpen:i,children:[(0,n.jsx)(r.xz,{ref:m,asChild:d,children:t}),(0,n.jsx)(o,{ref:a,...u,align:c})]})});d.displayName=r.fC.displayName}},function(e){e.O(0,[7240,3557,2888,9774,179],function(){return e(e.s=88082)}),_N_E=e.O()}]);