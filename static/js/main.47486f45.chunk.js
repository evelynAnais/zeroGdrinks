(this["webpackJsonpzero-g-drinks"]=this["webpackJsonpzero-g-drinks"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(17),a=n.n(s),c=(n(39),n(13)),l=n(5),o=n(15),d=n.n(o),u=n(20),j="http://api.open-notify.org/astros.json",b="https://api.le-systeme-solaire.net/rest.php/bodies",h="https://www.thecocktaildb.com/api/json/v1/1/random.php";function v(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(d.a.mark((function e(t,n,i){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(i));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function x(){return(x=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j),e.next=3,v(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b),e.next=3,v(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h),e.next=3,v(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(new Headers).append("Content-Type","application/json");n(41);var y=n(16),k=n(53),w=n.p+"static/media/SpaceInJar.84befd24.jpg",N=n.p+"static/media/Party.7ba49e80.jpg",I=n.p+"static/media/SpaceTree.4d3d7f86.jpg",M=n.p+"static/media/LetsDrink.4464c160.jpg",F=n(1);function S(){return Object(F.jsxs)(k.a,{fade:!0,controls:!1,children:[Object(F.jsxs)(k.a.Item,{style:{height:"275px"},children:[Object(F.jsx)("img",{style:{width:"100%"},className:"d-block w-100",src:w,alt:"First slide"}),Object(F.jsxs)(k.a.Caption,{children:[Object(F.jsx)("h3",{children:"Zero G Drinks"}),Object(F.jsx)("p",{children:"because why not"})]})]}),Object(F.jsxs)(k.a.Item,{style:{height:"275px"},children:[Object(F.jsx)("img",{style:{width:"100%"},className:"d-block w-100",src:N,alt:"Second slide"}),Object(F.jsxs)(k.a.Caption,{children:[Object(F.jsx)("h3",{children:"Zero G Drinks"}),Object(F.jsx)("p",{children:"Fill in the blanks, laugh."})]})]}),Object(F.jsxs)(k.a.Item,{style:{height:"275px"},children:[Object(F.jsx)("img",{style:{width:"100%"},className:"d-block w-100",src:I,alt:"Third slide"}),Object(F.jsxs)(k.a.Caption,{children:[Object(F.jsx)("h3",{children:"Zero G Drinks"}),Object(F.jsx)("p",{children:"Learn about space."})]})]}),Object(F.jsxs)(k.a.Item,{style:{height:"275px"},children:[Object(F.jsx)("img",{style:{width:"100%"},className:"d-block w-100",src:M,alt:"Fourth slide"}),Object(F.jsxs)(k.a.Caption,{children:[Object(F.jsx)("h3",{children:"Zero G Drinks"}),Object(F.jsx)("p",{children:"Learn about your drink."})]})]})]})}function D(e){var t=e.reset;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(S,{}),Object(F.jsxs)("ul",{className:"nav justify-content-center",children:[Object(F.jsx)("li",{onClick:t,className:"nav-item",children:Object(F.jsx)(y.b,{className:"nav-link text-dark",to:"/",children:"Home"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(y.b,{className:"nav-link text-dark",to:"/Space",children:"Space"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(y.b,{className:"nav-link text-dark",to:"/Drinks",children:"Drinks"})})]})]})}function C(){return Object(F.jsx)("footer",{className:"container mb-3 mt-3",children:Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:"\xa9 Evelyn Ploughman"})})}var T=n(22),P=n(29);function E(e){var t=e.createStory,n=Object(i.useState)({name:"",feeling:"",descriptive:"",friend:"",number:"",artist:"",color:"",bodyPart:"",person:"",object:""}),r=Object(c.a)(n,2),s=r[0],a=r[1],l=function(e){return a(Object(P.a)(Object(P.a)({},s),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s),window.scrollTo(0,0)},className:"row d-flex",children:[Object(F.jsxs)("label",{htmlFor:"name",class:"form-label",children:["Name:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"name",name:"name",value:s.name,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"feeling",children:["Feeling:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"feeling",name:"feeling",value:s.feeling,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"descriptive",children:["Descriptive Word:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"descriptive",name:"descriptive",value:s.descriptive,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"friend",children:["Friend Name:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"friend",name:"friend",value:s.friend,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"number",children:["Number:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"number",name:"number",value:s.number,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"artist",children:["Music Artist:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"artist",name:"artist",value:s.artist,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"color",children:["Color:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"color",name:"color",value:s.color,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"bodyPart",children:["Body Part (plural):",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"bodyPart",name:"bodyPart",value:s.bodyPart,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"person",children:["Favorite Person:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"person",name:"person",value:s.person,onChange:l})]}),Object(F.jsxs)("label",{htmlFor:"object",children:["Gift Object:",Object(F.jsx)("input",{className:"form-control mb-3",type:"text",id:"object",name:"object",value:s.object,onChange:l})]}),Object(F.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Let's do this!"})]})})}var L=n(55);function B(){return Object(F.jsx)("div",{className:"container",children:Object(F.jsx)(L.a,{children:Object(F.jsxs)(L.a.Body,{className:"card",children:[Object(F.jsx)("h5",{children:"You want to drink, I want you to drink, learn about space and laugh!"}),Object(F.jsx)("p",{children:"Let's make this quick, fill in the blanks and click \"Lets's do this!\" You will get a funny story, or at least I hope it's funny haha! Then you will get two cards with info about your drink and a space object."}),Object(F.jsx)("p",{children:"Then feel free to explore the Drinks and Space sections to learn more about random space objects and get random drink ideas!"})]})})})}var z=["sunny","cloudy","rainy","snowy","foggy","stormy","bright","brilliant","astronomical","magical","starry"],G=["morning","midnight","noon","night","evening"],A=["months","days","years","millennia","weeks","centuries","decades"],R=["big","measly","expansive","gigantic","tiny","small","minuscule","compact","dainty","colossal","immense","momentous","massive","puny","vast","hulking"],Z=["big","gigantic","tiny","small","minuscule","compact","dainty","colossal","immense","momentous","massive","galactic","microscopic","petite","jumbo"],H=["brilliant","dazzling","lustrous","luminescent","gleaming","astute","beaming","luminous"],J=["months","days","weeks"],q=["gathering","party","ball","fiesta","celebration","reunion","blowout","banquet","bash"],Y=["amazing","astonishing","astounding","breathtaking","perplexing","remarkable","wonderful","amazeballs","flabbergasting","mind-blowing"],W=["unexpected","unpredicted","unforeseen","serendipitous","extraordinary","unplanned","surprising"];function K(e){return e[Math.floor(Math.random()*e.length)]}function Q(e){var t=e.drink,n=e.spaceObject,i=e.story;return Object(F.jsx)("div",{className:"container",children:Object(F.jsx)(L.a,{children:Object(F.jsxs)(L.a.Body,{children:[Object(F.jsxs)("h3",{children:["Drinking with ",null===i||void 0===i?void 0:i.name," in Space!!!"]}),Object(F.jsxs)("p",{children:["On a ",K(z)," ",K(G)," in a galaxy called the milky way ",null===i||void 0===i?void 0:i.name," woke up feeling ",null===i||void 0===i?void 0:i.feeling," and remembered humanity now lives on ",null===n||void 0===n?void 0:n.name,". Reminiscing about the ",null===i||void 0===i?void 0:i.descriptive," days back on earth, ",null===i||void 0===i?void 0:i.name,", decided to call ",i.friend,". They were going to have a party even though it had been ",K(A)," since anyone had been on earth. Such a ",K(R)," planet compared to the ",K(H)," planet they now lived on. They called up all their friends and ",null===i||void 0===i?void 0:i.number," showed up. It was a ",K(q),". They drank ",null===t||void 0===t?void 0:t.strDrink," and danced to ",null===i||void 0===i?void 0:i.artist,". They were having so much fun that they attracted some ",K(W)," guests! Aliens, ",K(R)," ",null===i||void 0===i?void 0:i.color," aliens with ",K(Z)," ",null===i||void 0===i?void 0:i.bodyPart," who ended up being the life of the party. ",i.friend," gave ",null===i||void 0===i?void 0:i.person," the alien a ",null===t||void 0===t?void 0:t.strDrink," and a ",null===i||void 0===i?void 0:i.object,". They were having so much fun! They partied for ",K(A),". Everyone decided they needed to make it a tradition to celebrate how ",K(Y)," life was on ",null===n||void 0===n?void 0:n.name," with their new alien friends! So every ",null===i||void 0===i?void 0:i.number," ",K(J)," they celebrate with ",null===t||void 0===t?void 0:t.strDrink," and ",null===i||void 0===i?void 0:i.person," the alien!"]})]})})})}var U=n(54);function V(e){var t=e.spaceObject;return Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:Object(F.jsxs)(L.a,{style:{width:"18rem",margin:"10px"},children:[Object(F.jsxs)(L.a.Header,{style:{width:"18rem"},children:["Name: ",null===t||void 0===t?void 0:t.name]}),Object(F.jsxs)(U.a,{variant:"flush",children:[Object(F.jsxs)(U.a.Item,{children:["English Name: ",null===t||void 0===t?void 0:t.englishName]}),Object(F.jsxs)(U.a.Item,{children:["Discovered By: ",null===t||void 0===t?void 0:t.discoveredBy]}),Object(F.jsxs)(U.a.Item,{children:["Discovered Day: ",null===t||void 0===t?void 0:t.discoveryDate]})]})]})})})}function X(e){var t=e.drink;return Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:Object(F.jsxs)(L.a,{style:{width:"18rem",margin:"10px"},children:[Object(F.jsx)(L.a.Img,{variant:"top",src:null===t||void 0===t?void 0:t.strDrinkThumb}),Object(F.jsxs)(L.a.Body,{children:[Object(F.jsx)(L.a.Title,{children:null===t||void 0===t?void 0:t.strDrink}),Object(F.jsxs)(L.a.Text,{style:{"list-style":"none"},children:[((null===t||void 0===t?void 0:t.strMeasure1)||(null===t||void 0===t?void 0:t.strIngredient1))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure1," ",null===t||void 0===t?void 0:t.strIngredient1]}),((null===t||void 0===t?void 0:t.strMeasure2)||(null===t||void 0===t?void 0:t.strIngredient2))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure2," ",null===t||void 0===t?void 0:t.strIngredient2]}),((null===t||void 0===t?void 0:t.strMeasure3)||(null===t||void 0===t?void 0:t.strIngredient3))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure3," ",null===t||void 0===t?void 0:t.strIngredient3]}),((null===t||void 0===t?void 0:t.strMeasure4)||(null===t||void 0===t?void 0:t.strIngredient4))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure4," ",null===t||void 0===t?void 0:t.strIngredient4]}),((null===t||void 0===t?void 0:t.strMeasure5)||(null===t||void 0===t?void 0:t.strIngredient5))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure5," ",null===t||void 0===t?void 0:t.strIngredient5]}),((null===t||void 0===t?void 0:t.strMeasure6)||(null===t||void 0===t?void 0:t.strIngredient6))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure6," ",null===t||void 0===t?void 0:t.strIngredient6]}),((null===t||void 0===t?void 0:t.strMeasure7)||(null===t||void 0===t?void 0:t.strIngredient7))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure7," ",null===t||void 0===t?void 0:t.strIngredient7]}),((null===t||void 0===t?void 0:t.strMeasure8)||(null===t||void 0===t?void 0:t.strIngredient8))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure8," ",null===t||void 0===t?void 0:t.strIngredient8," "]}),((null===t||void 0===t?void 0:t.strMeasure9)||(null===t||void 0===t?void 0:t.strIngredient9))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure9," ",null===t||void 0===t?void 0:t.strIngredient9]}),((null===t||void 0===t?void 0:t.strMeasure10)||(null===t||void 0===t?void 0:t.strIngredient10))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure10," ",null===t||void 0===t?void 0:t.strIngredient10]}),((null===t||void 0===t?void 0:t.strMeasure11)||(null===t||void 0===t?void 0:t.strIngredient11))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure11," ",null===t||void 0===t?void 0:t.strIngredient11,"-"]}),((null===t||void 0===t?void 0:t.strMeasure12)||(null===t||void 0===t?void 0:t.strIngredient12))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure12," ",null===t||void 0===t?void 0:t.strIngredient12]}),((null===t||void 0===t?void 0:t.strMeasure13)||(null===t||void 0===t?void 0:t.strIngredient13))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure13," ",null===t||void 0===t?void 0:t.strIngredient13]}),((null===t||void 0===t?void 0:t.strMeasure14)||(null===t||void 0===t?void 0:t.strIngredient14))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure14," ",null===t||void 0===t?void 0:t.strIngredient14]}),((null===t||void 0===t?void 0:t.strMeasure15)||(null===t||void 0===t?void 0:t.strIngredient15))&&Object(F.jsxs)("li",{children:[null===t||void 0===t?void 0:t.strMeasure15," ",null===t||void 0===t?void 0:t.strIngredient15]})]}),Object(F.jsx)(L.a.Text,{children:null===t||void 0===t?void 0:t.strInstructions})]})]})})})}function $(e){var t=e.story,n=e.drink,r=e.spaceObject,s=e.reset,a=e.createStory,c=Object(l.f)();return Object(i.useEffect)((function(){return function(){t&&"POP"===c.action&&(a(null),c.push("/"))}}),[c,t,a]),Object(F.jsx)(F.Fragment,{children:t?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Q,{drink:n.drinks[0],spaceObject:r,story:t}),Object(F.jsx)(V,{spaceObject:r}),Object(F.jsx)(X,{drink:n.drinks[0]}),Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:Object(F.jsx)("button",{type:"button",className:"btn btn-dark",onClick:s,children:"Start Again! Because, why not!"})})})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsx)("br",{}),Object(F.jsx)("h3",{className:"row d-flex justify-content-around",children:"Fill, Read, Drink!"}),Object(F.jsx)(E,{createStory:a})]})})}var _=n.p+"static/media/Space.9af8b902.jpg";function ee(e){var t=e.spacePeople.people.map((function(e,t){return Object(F.jsxs)(k.a.Item,{style:{height:"80px",display:"flex","align-items":"center"},children:[Object(F.jsx)("img",{style:{width:"100%"},className:"d-block w-100",src:_,alt:"First slide"}),Object(F.jsxs)(k.a.Caption,{style:{height:"80px",bottom:"0px"},children:[Object(F.jsx)("p",{style:{margin:"0px",fontSize:"13px"},children:"People currently in space!"}),Object(F.jsx)("p",{style:{margin:"0px"},children:e.name})]})]},t)}));return Object(F.jsx)(k.a,{fade:!0,controls:!1,children:t})}function te(e){var t=e.spaceObjectList,n=e.objectFunction,i=t.map((function(e,t){return Object(F.jsx)(V,{spaceObject:e},t)}));return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col",children:i.slice(0,5)}),Object(F.jsx)("div",{className:"col",children:i.slice(5)})]}),Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:Object(F.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){n(),window.scrollTo(0,0)},children:"More random space stuff, because why not!!"})})]})}function ne(){var e=Object(i.useState)({people:[]}),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)([]),a=Object(c.a)(s,2),l=a[0],o=a[1];function d(){p().then((function(e){for(var t=[],n=0;n<10;n++)t.push(e.bodies[Math.floor(Math.random()*e.bodies.length)]);o(t)}))}return Object(i.useEffect)((function(){(function(){return x.apply(this,arguments)})().then(r)}),[]),Object(i.useEffect)(d,[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ee,{spacePeople:n}),Object(F.jsx)("h3",{className:"row d-flex justify-content-around",children:"Random Space Objects"}),Object(F.jsx)(te,{spaceObjectList:l,objectFunction:d})]})}function ie(e){var t=e.drinkList,n=e.makeDrinkListFunction,i=t.map((function(e,t){return Object(F.jsx)(X,{drink:e.drinks[0]},t)}));return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col",children:i.slice(0,5)}),Object(F.jsx)("div",{className:"col",children:i.slice(5)})]}),Object(F.jsx)("div",{className:"row d-flex justify-content-around",children:Object(F.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){n(),window.scrollTo(0,0)},children:"More random alcohol stuff, because why not!!"})})]})}function re(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];function s(){for(var e=[],t=0;t<10;t++)e.push(f());Promise.all(e).then((function(e){return r(e)}))}return Object(i.useEffect)(s,[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:"row d-flex justify-content-around",children:"Random Drinks!"}),Object(F.jsx)(ie,{drinkList:n,makeDrinkListFunction:s})]})}var se=function(){var e=Object(i.useState)({drinks:[]}),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)({bodies:[]}),a=Object(c.a)(s,2),o=a[0],d=a[1],u=Object(i.useState)(null),j=Object(c.a)(u,2),b=j[0],h=j[1];Object(i.useEffect)((function(){f().then(r)}),[]),Object(i.useEffect)((function(){p().then((function(e){var t=e.bodies[Math.floor(Math.random()*e.bodies.length)];d(t)}))}),[]);var v=function(){h(null),window.scrollTo(0,0)};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{children:Object(F.jsx)(D,{reset:v})}),Object(F.jsxs)(l.c,{children:[Object(F.jsx)(l.a,{path:"/",exact:!0,children:Object(F.jsx)($,{story:b,drink:n,spaceObject:o,reset:v,createStory:function(e){return h(e)}})}),Object(F.jsx)(l.a,{path:"/space",component:ne}),Object(F.jsx)(l.a,{path:"/drinks",component:re})]}),Object(F.jsx)(C,{})]})};a.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(y.a,{children:Object(F.jsx)(se,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.47486f45.chunk.js.map