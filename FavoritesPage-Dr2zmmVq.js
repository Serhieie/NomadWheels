import{u as i,b as n,d as v,j as s,n as c,N as p}from"./index-Bc_9nDo0.js";import{u as l,M as x}from"./Modal-CBMlkBXy.js";import{C as m}from"./CamperListItem-1kTvz5K7.js";const d="_noFavoriteText_8puxv_1",_="_favorites_8puxv_7",u="_roadDiv1_8puxv_19",f="_favoritesList_8puxv_33",F="_listWrapper_8puxv_46",h="_noFavoriteItemsWrapper_8puxv_82",j="_noFavoriteTitle_8puxv_90",N="_navLink_8puxv_102",t={noFavoriteText:d,favorites:_,roadDiv1:u,favoritesList:f,listWrapper:F,noFavoriteItemsWrapper:h,noFavoriteTitle:j,navLink:N},L=()=>{const{favorites:e}=l(),a=i(),o=e.length>0;return n.useEffect(()=>{a(v(1))},[]),s.jsxs("section",{className:t.favorites,children:[s.jsx("div",{className:t.roadDiv1}),o?s.jsx("div",{className:t.listWrapper,children:s.jsx("ul",{className:t.favoritesList,children:e==null?void 0:e.map(r=>s.jsx(m,{item:r,icon:"close"},c()))})}):s.jsxs("div",{className:t.noFavoriteItemsWrapper,children:[s.jsx("h2",{className:t.noFavoriteTitle,children:"No Favorites Yet?"}),s.jsx("p",{className:t.noFavoriteText,children:"Create Your Wishlist: Browse our top picks, add your favorite models, and get ready for the best trips of your life"}),s.jsx(p,{className:t.navLink,to:"/Catalog",children:"Back to Catalog"})]}),s.jsx(x,{})]})};function k(){return s.jsxs(s.Fragment,{children:[" ",s.jsx(L,{})]})}export{k as default};
