(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1IFcd",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__zn3Y_"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2qICp",Modal:"Modal_Modal__3PouS"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__s6NFV"}},17:function(e,t,a){e.exports={Button:"Button_Button__l1ifb"}},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),i=a(13),s=a(3),u=a(7),l=(a(14),a(5)),b=a.n(l),m=a(1);var j=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)("header",{className:b.a.Searchbar,children:Object(m.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):u.b.error("Enter your request, please!")},children:[Object(m.jsx)("button",{type:"submit",className:b.a.SearchFormbutton,children:Object(m.jsx)("span",{className:b.a.SearchFormbuttonlabel,children:"Search"})}),Object(m.jsx)("input",{className:b.a.SearchForminput,type:"text",name:"searchName",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var h=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22609546-eb8daebfdd1e346a58a9b181d&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry! We did not find this request"))}))},d=a(11),f=a.n(d),O=function(e){var t=e.webformatURL,a=e.tags,r=e.onPicked;return Object(m.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:a,className:f.a.ImageGalleryItemImage,onClick:r})})},g=a(16),p=a.n(g),_=function(e){var t=e.images,a=e.onPicked;return Object(m.jsx)("ul",{className:p.a.ImageGallery,children:t&&t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(m.jsx)(O,{webformatURL:r,onPicked:function(){return a(n)},tags:c},t)}))})},S=a(17),y=a.n(S),x=a(9),v=a.n(x),I=(a(15),function(e){var t=e.onClick,a=e.onLoading;return Object(m.jsxs)("button",{className:y.a.Button,type:"button",onClick:t,children:[Object(m.jsx)(v.a,{type:"Oval",color:"#ff9d00",height:20,width:20,timeout:3e3,visible:a}),a?"":"Load more"]})}),w=a(18),k=a(19),F=a(21),N=a(20),C=function(e){Object(F.a)(a,e);var t=Object(N.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(m.jsx)(v.a,{type:"Circles",color:"#ff9d00",height:150,width:150,timeout:5e3})}}]),a}(n.a.Component),G=a(12),L=a.n(G),E=document.querySelector("#modal-root");function M(e){var t=e.src,a=e.closeModal;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(m.jsx)("div",{className:L.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(m.jsx)("div",{className:L.a.Modal,children:Object(m.jsx)("img",{src:t,alt:""})})}),E)}var P=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)([]),f=Object(s.a)(d,2),O=f[0],g=f[1],p=Object(r.useState)(1),S=Object(s.a)(p,2),y=S[0],x=S[1],v=Object(r.useState)(!1),w=Object(s.a)(v,2),k=w[0],F=w[1];Object(r.useEffect)((function(){a&&(F(!0),h(a,y).then((function(e){0!==e.hits.length?g((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})):u.b.error("Sorry! We did not find your request.")})).then((function(){y>1&&N()})).finally((function(){return F(!1)})))}),[a,y]);var N=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},G=O.length>0;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{onSubmit:function(e){n(e),g([]),x(1)}}),k&&Object(m.jsx)(C,{}),Object(m.jsx)(_,{images:O,onPicked:function(e){b(e)}}),G&&Object(m.jsx)(I,{onClick:function(){x((function(e){return e+1}))},onLoading:k}),l&&Object(m.jsx)(M,{src:l,closeModal:function(){b("")}}),Object(m.jsx)(u.a,{autoClose:2e3})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1_QwL",SearchForm:"Searchbar_SearchForm__3pVWa",SearchFormbutton:"Searchbar_SearchFormbutton__16KUr",SearchFormbuttonlabel:"Searchbar_SearchFormbuttonlabel__2bsAn",SearchForminput:"Searchbar_SearchForminput__3tTXk"}}},[[47,1,2]]]);
//# sourceMappingURL=main.1e1ac1e5.chunk.js.map