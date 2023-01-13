(function(){"use strict";var n={824:function(n,t,r){var e=r(963),a=r(252);function s(n,t,r,e,s,u){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var u={name:"App",components:{}},i=r(744);const o=(0,i.Z)(u,[["render",s]]);var l=o,c=r(119),d=r(577);const f=n=>((0,a.dD)("data-v-8c7d90fa"),n=n(),(0,a.Cn)(),n),p=f((()=>(0,a._)("h1",null,"User List",-1))),v={class:"span-li"},h=["src"],_={class:"span-li"},m={href:""};function w(n,t,r,e,s,u){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.users,(n=>((0,a.wg)(),(0,a.iD)("li",{key:n.id},[(0,a._)("span",v,[(0,a._)("span",null,[(0,a._)("img",{src:n.avatar,alt:""},null,8,h)]),(0,a._)("span",null,(0,d.zw)(n.first_name),1)]),(0,a._)("span",_,[(0,a._)("a",m,[(0,a.Wm)(i,{to:`/user/${n.id}`},{default:(0,a.w5)((()=>[(0,a.Uk)("View Details")])),_:2},1032,["to"])])])])))),128))])],64)}var g=r(945),b={name:"Home-1",data(){return{users:""}},methods:{async getUsers(){const n=await g.Z.get("https://reqres.in/api/users?page=1");this.users=n.data.data}},mounted(){this.getUsers()}};const k=(0,i.Z)(b,[["render",w],["__scopeId","data-v-8c7d90fa"]]);var y=k;const O=n=>((0,a.dD)("data-v-3a342d72"),n=n(),(0,a.Cn)(),n),D=O((()=>(0,a._)("h1",null,"User Details",-1))),U={class:"user-container"},j=["src"],H={id:"name"},Z={class:"back-div"},x={href:""};function z(n,t,r,e,s,u){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[D,(0,a._)("div",U,[(0,a._)("div",null,[(0,a._)("img",{src:s.user.avatar,alt:"avatar"},null,8,j)]),(0,a._)("div",null,[(0,a._)("p",H,(0,d.zw)(s.user.first_name)+" "+(0,d.zw)(s.user.last_name),1)]),(0,a._)("div",null,[(0,a._)("p",null,(0,d.zw)(s.user.email),1)])]),(0,a._)("div",Z,[(0,a._)("a",x,[(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Go Back")])),_:1})])])],64)}var C={name:"User-1",data(){return{user:""}},async mounted(){const n=await g.Z.get(`https://reqres.in/api/users/${this.$route.params.id}`);this.user=n.data.data}};const P=(0,i.Z)(C,[["render",z],["__scopeId","data-v-3a342d72"]]);var Y=P;const $=[{name:"Home",path:"/",component:y},{name:"User",path:"/user/:id",component:Y}],q=(0,c.p7)({history:(0,c.PO)(),routes:$});var I=q;(0,e.ri)(l).use(I).mount("#app")}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var s=t[e]={exports:{}};return n[e](s,s.exports,r),s.exports}r.m=n,function(){var n=[];r.O=function(t,e,a,s){if(!e){var u=1/0;for(c=0;c<n.length;c++){e=n[c][0],a=n[c][1],s=n[c][2];for(var i=!0,o=0;o<e.length;o++)(!1&s||u>=s)&&Object.keys(r.O).every((function(n){return r.O[n](e[o])}))?e.splice(o--,1):(i=!1,s<u&&(u=s));if(i){n.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=n.length;c>0&&n[c-1][2]>s;c--)n[c]=n[c-1];n[c]=[e,a,s]}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,s,u=e[0],i=e[1],o=e[2],l=0;if(u.some((function(t){return 0!==n[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(o)var c=o(r)}for(t&&t(e);l<u.length;l++)s=u[l],r.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return r.O(c)},e=self["webpackChunklist_users"]=self["webpackChunklist_users"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(824)}));e=r.O(e)})();
//# sourceMappingURL=app.3542c0fc.js.map