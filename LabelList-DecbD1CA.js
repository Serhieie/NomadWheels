import{a as c,j as e,e as C,L as j,u as w,q as z,i as B,n as $}from"./index-BCVIuQPf.js";const f=t=>t.campers.campers,A=t=>t.campers.favorites,P=t=>t.campers.activeCamper,N=t=>t.campers.isCamperModalOpen,F=t=>t.campers.loading,T=t=>t.campers.error,R=t=>t.campers.page,H=t=>t.campers.noItems,st=()=>{const t=c(f),a=c(N),s=c(A),o=c(R),n=c(P),i=c(F),l=c(T),d=c(H);return{campers:t,isCamperModalOpen:a,favorites:s,activeCamper:n,noItems:d,loading:i,error:l,page:o}},at=t=>{var o,n,i,l,d,_,g,h,p,x,m,b;if(!t)return[{icon:"Automatic",value:""},{icon:"Kitchen",value:""},{icon:"AC",value:""},{icon:"Shower",value:""},{icon:"TV",value:""},{icon:"Freezer",value:""},{icon:"Microwave",value:""}];const a=[{icon:"Adults",value:t.adults},{icon:"Beds",value:(o=t.details)==null?void 0:o.beds},{icon:"Automatic",value:t.transmission},{icon:"Engine",value:t.engine},{icon:"Kitchen",value:(n=t.details)==null?void 0:n.kitchen}],s=[{icon:"AC",value:(i=t.details)==null?void 0:i.airConditioner},{icon:"Shower",value:(l=t.details)==null?void 0:l.shower},{icon:"TV",value:(d=t.details)==null?void 0:d.TV},{icon:"Freezer",value:(_=t.details)==null?void 0:_.freezer},{icon:"Gas",value:(g=t.details)==null?void 0:g.gas},{icon:"Hob",value:(h=t.details)==null?void 0:h.hob},{icon:"Microwave",value:(p=t.details)==null?void 0:p.microwave},{icon:"Radio",value:(x=t.details)==null?void 0:x.radio},{icon:"Bathroom",value:(m=t.details)==null?void 0:m.toilet},{icon:"Water",value:(b=t.details)==null?void 0:b.water}];return[...a,...s]},M="_button_1d134_1",y="_accentBtn_1d134_24",D="_notAccentBtn_1d134_32",v={button:M,accentBtn:y,notAccentBtn:D},ot=({text:t,width:a=145,accent:s=!0,handleClick:o=null,type:n="button",loading:i=!1})=>e.jsx("button",{className:C(v.button,{[v.accentBtn]:s,[v.notAccentBtn]:!s}),onClick:o&&o,type:n,style:{minWidth:a},children:i?e.jsx(j,{}):t}),O="_topPart_zdcr4_1",S="_price_zdcr4_1",k="_bottomPart_zdcr4_7",E="_location_zdcr4_13",V="_rating_zdcr4_14",W="_svgRating_zdcr4_35",K="_svgLocation_zdcr4_39",U="_hearth_zdcr4_44",q="_favorite_zdcr4_52",G="_favoriteText_zdcr4_57",X="_favoriteTextCatalog_zdcr4_71",Y="_inFavoritePage_zdcr4_77",r={topPart:O,price:S,bottomPart:k,location:E,rating:V,svgRating:W,svgLocation:K,hearth:U,favorite:q,favoriteText:G,favoriteTextCatalog:X,inFavoritePage:Y},u="/NomadWheels/sprite-CUYCXRUD.svg",ct=({item:t})=>{const a=t.reviews.length>=1?t.reviews.length:"No",s=w(),o=()=>{s(z(t)),s(B(!0))};return e.jsxs("div",{className:r.bottomPart,children:[e.jsxs("a",{onClick:o,href:"#tabs",className:r.rating,children:[e.jsx("svg",{className:r.svgRating,width:16,height:16,children:e.jsx("use",{href:`${u}#icon-star`})}),`${t.rating}(${a} Reviews)`]}),e.jsxs("span",{className:r.location,children:[e.jsx("svg",{className:r.svgLocation,width:16,height:16,children:e.jsx("use",{href:`${u}#icon-Pin`})})," ",t.location]})]})},J="_label_s2g8l_1",Q={label:J},Z=({labelInfo:t,fixedHeight:a})=>{const s=t.icon==="Adults"||t.icon==="Beds"||!a&&t.value!==0?t.value:"";return t.value!==0&&e.jsxs("li",{className:Q.label,children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${u}#icon-${t.icon}`})}),`${s} ${t.icon}`]})},I="_labelList_725wa_1",tt="_labelListFixedHeight_725wa_11",L={labelList:I,labelListFixedHeight:tt},nt=({item:t,fixedHeight:a})=>e.jsx("ul",{className:`${L.labelList} ${a?L.labelListFixedHeight:""}`,children:t.map(s=>e.jsx(Z,{labelInfo:s,fixedHeight:a},$()))});export{ot as B,ct as H,nt as L,r as a,at as c,u as s,st as u};
