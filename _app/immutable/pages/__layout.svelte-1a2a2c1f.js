import{F as G,S as M,i as V,s as q,e as p,t as B,k as z,c as v,a as g,h as F,d as _,m as k,b as h,G as D,g as A,H as m,n as I,I as J,J as K,K as P,x as R,y as U,z as j,L as O,M as Q,N as T,r as S,p as w,C as W}from"../chunks/index-5406debc.js";const E={title:"Chola",menus:[{name:"Home",url:"/"},{name:"Blog",url:"/blog"},{name:"About",url:"/about"},{name:"Contact",url:"/contact"},{name:"Download",url:"https://github.com/sharu725/chola"}]},X=()=>{const a=G("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},Y={subscribe(a){return X().page.subscribe(a)}};function L(a,e,s){const r=a.slice();return r[2]=e[s].url,r[3]=e[s].name,r}function N(a){let e,s,r=a[3]+"",n,f,d,c;return{c(){e=p("li"),s=p("a"),n=B(r),c=z(),this.h()},l(t){e=v(t,"LI",{class:!0});var l=g(e);s=v(l,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var o=g(s);n=F(o,r),o.forEach(_),c=k(l),l.forEach(_),this.h()},h(){h(s,"sveltekit:prefetch",f=a[2].match("http")?null:!0),h(s,"href",d=a[2]),h(s,"class","svelte-zf1fms"),D(s,"active",a[2]!=="/"?a[0].match(a[2]):a[2]===a[0]),h(e,"class","svelte-zf1fms")},m(t,l){A(t,e,l),m(e,s),m(s,n),m(e,c)},p(t,l){l&1&&D(s,"active",t[2]!=="/"?t[0].match(t[2]):t[2]===t[0])},d(t){t&&_(e)}}}function Z(a){let e,s,r,n,f=E.title+"",d,c,t,l=E.menus,o=[];for(let u=0;u<l.length;u+=1)o[u]=N(L(a,l,u));return{c(){e=p("header"),s=p("nav"),r=p("a"),n=p("h1"),d=B(f),c=z(),t=p("ul");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=v(u,"HEADER",{class:!0});var b=g(e);s=v(b,"NAV",{class:!0});var i=g(s);r=v(i,"A",{class:!0,href:!0});var $=g(r);n=v($,"H1",{class:!0});var H=g(n);d=F(H,f),H.forEach(_),$.forEach(_),c=k(i),t=v(i,"UL",{class:!0});var C=g(t);for(let y=0;y<o.length;y+=1)o[y].l(C);C.forEach(_),i.forEach(_),b.forEach(_),this.h()},h(){h(n,"class","svelte-zf1fms"),h(r,"class","logo svelte-zf1fms"),h(r,"href","/"),h(t,"class","svelte-zf1fms"),h(s,"class","svelte-zf1fms"),h(e,"class","svelte-zf1fms")},m(u,b){A(u,e,b),m(e,s),m(s,r),m(r,n),m(n,d),m(s,c),m(s,t);for(let i=0;i<o.length;i+=1)o[i].m(t,null)},p(u,[b]){if(b&1){l=E.menus;let i;for(i=0;i<l.length;i+=1){const $=L(u,l,i);o[i]?o[i].p($,b):(o[i]=N($),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=l.length}},i:I,o:I,d(u){u&&_(e),J(o,u)}}}function x(a,e,s){let r,n;return K(a,Y,f=>s(1,n=f)),a.$$.update=()=>{a.$$.dirty&2&&s(0,r=n.url.pathname)},[r,n]}class ee extends M{constructor(e){super(),V(this,e,x,Z,q,{})}}function te(a){let e,s,r,n,f;s=new ee({});const d=a[1].default,c=P(d,a,a[0],null);return{c(){e=p("div"),R(s.$$.fragment),r=z(),n=p("main"),c&&c.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var l=g(e);U(s.$$.fragment,l),r=k(l),n=v(l,"MAIN",{});var o=g(n);c&&c.l(o),o.forEach(_),l.forEach(_),this.h()},h(){h(e,"class","wrapper svelte-nfx3lu")},m(t,l){A(t,e,l),j(s,e,null),m(e,r),m(e,n),c&&c.m(n,null),f=!0},p(t,[l]){c&&c.p&&(!f||l&1)&&O(c,d,t,t[0],f?T(d,t[0],l,null):Q(t[0]),null)},i(t){f||(S(s.$$.fragment,t),S(c,t),f=!0)},o(t){w(s.$$.fragment,t),w(c,t),f=!1},d(t){t&&_(e),W(s),c&&c.d(t)}}}function se(a,e,s){let{$$slots:r={},$$scope:n}=e;return a.$$set=f=>{"$$scope"in f&&s(0,n=f.$$scope)},[n,r]}class le extends M{constructor(e){super(),V(this,e,se,te,q,{})}}export{le as default};
