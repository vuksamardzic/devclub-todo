(this["webpackJsonpdevclub-todo"]=this["webpackJsonpdevclub-todo"]||[]).push([[0],[,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACXklEQVRoQ+3ZP8hOYRjH8c8b5U8GRSiUQQYTSbKYlMHEgpABg8hgUyIGZWBRlF4lSigmkzKYGCQGE4VCRJnkX/501zNRznXd5xxvT567znR+1++5vuc6nfO7zzNmyNfYkPdvBDDRExxN4LcJTKLxtvyJ711NrssJXMK2YGMXsSOo/ausK4DleJBsaBkeJWv+kHcFMI6dyWbOY1eyphOAAj0PiwbHEhzElGQzX3ACT/F8cLzCj4xPdAKzcQorB01PzfxIQvsNL/AQ+/C2qTYKcBSHm8w6Pn8Ex5o8owD3saLJrOPz97C6yTMKcAiTm8w6Pv8Vx5s8owBNPhN2/r8CKDFhD2YF4kLtRErMeI+z0cdpZgLluf+strNk3Xy8jtRkAGbiQ8S0A80MfIz4ZACKX3nR9P00+oxpkeaLJgtQ3oxzouaVuhInFkRrswCPsTRqXqkrCbUk1dDKAtzBmpBzveg21kbLswA3sCFqXqm7hk3R2izAOeyOmlfqzmBvtDYLULJJyf59rpJASxINrSzAAZwMOdeL9uN0tDwLUDbiF6LmlbqtuBytzQKsx82oeaVuHW5Fa7MAq1A2Gn2usnEKf+HIAizGkz67H+y5y744tLIA/yLQhYNcIcwClJo+A90nTA9d+oGoBuAN5mZ+JKF9iYUJfdUE+gx0qSBXewv1GehSQa4W4Do2Zsac0F7F5oS+6hbqM9ClglztBPoMdKkgVwvQZ6BLBblagO0o/7D0sbbgSsa45j1Q4sRdlE/uXa53KFkr9e2pBqDLplt7jQBaX8KWBqMJtLyArcuHfgK/ABEKUTE45/2XAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),l=(a(11),a(1)),s=a(2),A=(a(12),a(13),a(5)),u=a.n(A),m=function(e){return o.a.createElement("div",{className:"Todo"},o.a.createElement("div",{className:"Todo__text"},e.data.name),o.a.createElement("img",{className:"Todo__remove flex-cc",onClick:function(){return t=e.data.id,void e.emitTodoDelete(t);var t},src:u.a,alt:"remove icon"}))},i=function(){var e=o.a.useState(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=o.a.useState([]),r=Object(s.a)(c,2),A=r[0],u=r[1],i=function(e){u(Object(l.a)(A.filter((function(t){return t.id!==e}))))},d=function(){return"_"+Math.random().toString(36).substr(2,9)};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App__header"},o.a.createElement("h3",{className:"App__header-text"},"Todo app"),o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a){var t={name:a,id:d()};n(""),u([].concat(Object(l.a)(A),[t]))}},className:"flex-cc"},o.a.createElement("input",{type:"text",placeholder:"ex: code todo app",className:"App__input fg-1 d-flex",value:a,onChange:function(e){n(e.target.value)}}),o.a.createElement("button",{className:"App__button App__button--blue",type:"submit"},"Submit"))),o.a.createElement("div",{className:"App__body"},A.length?"":o.a.createElement("p",{className:"App__body-text"},"add something to do :)"),A.map((function(e){return o.a.createElement(m,{data:e,emitTodoDelete:i,key:e.id})}))))};r.a.render(o.a.createElement(i,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.46e30677.chunk.js.map