(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(15),o=a.n(s),r=(a(23),a(10)),l=(a(24),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(l.jsxs)("div",{className:"continer px-3 py-3",style:t,children:[Object(l.jsx)("h1",{className:"my-4",children:"About Us"}),Object(l.jsx)("div",{className:"accordion",style:t,id:"accordionExample",children:Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:Object(l.jsx)("strong",{children:"Accordion Item #1"})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show",style:t,"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsxs)("div",{className:"accordion-body",style:t,children:[Object(l.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(l.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})})]})}var d=a(8);function b(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})})}b.defaultProps={title:"Set Title Here",aboutText:"Set About Text Here"};var h=a(18);function j(e){var t=Object(n.useState)("Enter Text Here"),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to UpperCase"}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to LowerCase"}),Object(l.jsx)("button",{className:"btn-outline btn-primary btn-sm mx-2 my-2",onClick:function(){s("")},children:"Clear Text"}),Object(l.jsx)(h.CopyToClipboard,{text:c,children:Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){e.showAlert("Text copied to Clipboard","success")},children:"Copy To Clipboard"})}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){var t=document.createElement("a"),a=new Blob([document.getElementById("myBox").value],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="myFile.txt",document.body.appendChild(t),t.click(),e.showAlert("Text downloaded!!","success")},children:"Download Text"}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){s(c.split("").map((function(e,t){return t%2===0?e.toLowerCase():e.toUpperCase()})).join("")),e.showAlert("Converted to AlternateCases","success")},children:"aLtErNaTe TeXt"}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces trimmed","success")},children:"Trim Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," ","words | ",c.length," characters"]}),Object(l.jsxs)("p",{children:[(.08*c.split(" ").filter((function(e){return 0!==e.length})).length).toFixed(1)," ","Minutes read."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsxs)("p",{children:[c.length>0?c:"Enter something in the textbox above to preview it here"," "]})]})]})}function m(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),": ",e.alert.msg]})})}var u=a(2);var x=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(r.a)(s,2),h=o[0],x=o[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(b,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",p("DarkMode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",p("LightMode has been enabled","success"))}}),Object(l.jsx)(m,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/about",children:Object(l.jsx)(i,{mode:a})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(j,{showAlert:p,heading:"Enter the text to analyze",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.b28fa3ef.chunk.js.map