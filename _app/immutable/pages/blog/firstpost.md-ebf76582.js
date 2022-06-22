import{S as kt,i as It,s as Et,C as Ze,w as St,x as Pt,y as At,z as Tt,A as vt,q as zt,o as jt,B as Gt,X as wt,e as l,t as i,k as d,c as r,a as h,h as s,d as t,m as b,b as c,g as n,T as o,E as xt}from"../../chunks/index-8c82e640.js";import{P as Jt}from"../../chunks/post-f1d30e7b.js";function Ct(K){let p,g,v,m,f,u,B,be,R,k,me,T,ye,ge,V,D,ve,W,I,we,z,_e,ke,Z,E,Ie,j,X,Ee,Se,ee,O,Pe,te,S,Ae,G,Te,ze,oe,y,je,L,Ge,xe,N,Je,Ce,x,$e,He,ie,M,Ke,se,q,Be,ae,w,De,J,Oe,Me,Q,qe,Ue,le,P,Ye,C,Fe,Xe,re,U,Le,he,_,Ne,$,Qe,Re,H,Ve,We;return{c(){p=l("h1"),g=i("Github Pages"),v=d(),m=l("p"),f=i("If you\u2019re checking out my website, there\u2019s a good chance you\u2019re already familiar with Github Pages. If you aren\u2019t, here\u2019s your introduction: "),u=l("a"),B=i("Github Pages"),be=i(" is a service that allows you to host your website on a free domain tied to your Github account. Github Pages is a great way to host any static website (like this one). All you need is a github account."),R=d(),k=l("p"),me=i("The docs for Pages recommends getting started with Jekyll to generate the static website from markdown files. You can find the docs "),T=l("a"),ye=i("here"),ge=i(". Additionally, there are many open source templates available for Pages."),V=d(),D=l("h2"),ve=i("Svelte"),W=d(),I=l("p"),we=i("Instead of Jekyll, I use "),z=l("a"),_e=i("Svelte Kit"),ke=i(" to generate the static website. Unlike some other popular frameworks, Svelte Kit compiles its JavaScript/Svelte code into optimized vanilla JavaScript."),Z=d(),E=l("p"),Ie=i("This website is built off the "),j=l("a"),X=l("code"),Ee=i("chola"),Se=i(" template. The chola template is simple and demonstrates many of Svelte\u2019s features. It is a good starting point for building a Svelte app."),ee=d(),O=l("h2"),Pe=i("Initial steps"),te=d(),S=l("p"),Ae=i("Github Pages only supports static websites. Svelte is capable of generating static websites by using a static adapter. The "),G=l("a"),Te=i("svelte.config.js"),ze=i(" file is where you configure the build process. Mdsvex is a library which compiles markdown into html for svelte similar to Jekyll. The msdvex compilation step is included in the svelte.config.js file."),oe=d(),y=l("p"),je=i("Svelte Kit uses "),L=l("code"),Ge=i("npm run build"),xe=i(" to compile. After compiling, I use "),N=l("code"),Je=i("npm run deploy"),Ce=i(" to deploy the website to Github Pages. I use the "),x=l("a"),$e=i("gh-pages.js"),He=i(" file to configure the remote branch where the compiled website is deployed. Additionally, we set the deployment branch in the Github repository\u2019s settings in the \u201Cpages\u201D tab."),ie=d(),M=l("h2"),Ke=i("Additions"),se=d(),q=l("h4"),Be=i("Bonzi"),ae=d(),w=l("p"),De=i("The first big addition I made to the site was adding Bonzi the purple gorilla from the "),J=l("a"),Oe=i("Clippy.js"),Me=i(" JavaScript library. To achieve this, I created a bonzi button svelte component in the "),Q=l("code"),qe=i("components"),Ue=i(" directory. If the button is clicked once, bonzi appears. If the button is clicked again, the original bonzi disapears (even if the user has changed pages). To  achieve this, I use a writable store to ensure that bonzi globally accessible by each bonzi button."),le=d(),P=l("p"),Ye=i("Svelte by default enforces type checking. Since I\u2019m lazy, I didn\u2019t feel like figuring out the types for the clippy.js library. I disable type checking by creating a "),C=l("a"),Fe=i("tsconfig.json"),Xe=i(" file with the noImplicitAny: false."),re=d(),U=l("h4"),Le=i("Sticky header"),he=d(),_=l("p"),Ne=i("Another change I made was to improve the header. The included Chola header works fine for short pages, but if the page is long, the user will need to scroll to return to the top of the page. I added a sticky header that disapears when the user scrolls down, but reappears when they scroll up. That way, the header doesn\u2019t block the screen, but is always available if the user needs it. I utilize the "),$=l("a"),Qe=i("svelte-headroom"),Re=i(" component in the "),H=l("a"),Ve=i("header file"),We=i("."),this.h()},l(e){p=r(e,"H1",{});var a=h(p);g=s(a,"Github Pages"),a.forEach(t),v=b(e),m=r(e,"P",{});var ne=h(m);f=s(ne,"If you\u2019re checking out my website, there\u2019s a good chance you\u2019re already familiar with Github Pages. If you aren\u2019t, here\u2019s your introduction: "),u=r(ne,"A",{href:!0,rel:!0});var et=h(u);B=s(et,"Github Pages"),et.forEach(t),be=s(ne," is a service that allows you to host your website on a free domain tied to your Github account. Github Pages is a great way to host any static website (like this one). All you need is a github account."),ne.forEach(t),R=b(e),k=r(e,"P",{});var pe=h(k);me=s(pe,"The docs for Pages recommends getting started with Jekyll to generate the static website from markdown files. You can find the docs "),T=r(pe,"A",{href:!0,rel:!0});var tt=h(T);ye=s(tt,"here"),tt.forEach(t),ge=s(pe,". Additionally, there are many open source templates available for Pages."),pe.forEach(t),V=b(e),D=r(e,"H2",{});var ot=h(D);ve=s(ot,"Svelte"),ot.forEach(t),W=b(e),I=r(e,"P",{});var fe=h(I);we=s(fe,"Instead of Jekyll, I use "),z=r(fe,"A",{href:!0,rel:!0});var it=h(z);_e=s(it,"Svelte Kit"),it.forEach(t),ke=s(fe," to generate the static website. Unlike some other popular frameworks, Svelte Kit compiles its JavaScript/Svelte code into optimized vanilla JavaScript."),fe.forEach(t),Z=b(e),E=r(e,"P",{});var ce=h(E);Ie=s(ce,"This website is built off the "),j=r(ce,"A",{href:!0,rel:!0});var st=h(j);X=r(st,"CODE",{});var at=h(X);Ee=s(at,"chola"),at.forEach(t),st.forEach(t),Se=s(ce," template. The chola template is simple and demonstrates many of Svelte\u2019s features. It is a good starting point for building a Svelte app."),ce.forEach(t),ee=b(e),O=r(e,"H2",{});var lt=h(O);Pe=s(lt,"Initial steps"),lt.forEach(t),te=b(e),S=r(e,"P",{});var ue=h(S);Ae=s(ue,"Github Pages only supports static websites. Svelte is capable of generating static websites by using a static adapter. The "),G=r(ue,"A",{href:!0,rel:!0});var rt=h(G);Te=s(rt,"svelte.config.js"),rt.forEach(t),ze=s(ue," file is where you configure the build process. Mdsvex is a library which compiles markdown into html for svelte similar to Jekyll. The msdvex compilation step is included in the svelte.config.js file."),ue.forEach(t),oe=b(e),y=r(e,"P",{});var A=h(y);je=s(A,"Svelte Kit uses "),L=r(A,"CODE",{});var ht=h(L);Ge=s(ht,"npm run build"),ht.forEach(t),xe=s(A," to compile. After compiling, I use "),N=r(A,"CODE",{});var nt=h(N);Je=s(nt,"npm run deploy"),nt.forEach(t),Ce=s(A," to deploy the website to Github Pages. I use the "),x=r(A,"A",{href:!0,rel:!0});var pt=h(x);$e=s(pt,"gh-pages.js"),pt.forEach(t),He=s(A," file to configure the remote branch where the compiled website is deployed. Additionally, we set the deployment branch in the Github repository\u2019s settings in the \u201Cpages\u201D tab."),A.forEach(t),ie=b(e),M=r(e,"H2",{});var ft=h(M);Ke=s(ft,"Additions"),ft.forEach(t),se=b(e),q=r(e,"H4",{});var ct=h(q);Be=s(ct,"Bonzi"),ct.forEach(t),ae=b(e),w=r(e,"P",{});var Y=h(w);De=s(Y,"The first big addition I made to the site was adding Bonzi the purple gorilla from the "),J=r(Y,"A",{href:!0,rel:!0});var ut=h(J);Oe=s(ut,"Clippy.js"),ut.forEach(t),Me=s(Y," JavaScript library. To achieve this, I created a bonzi button svelte component in the "),Q=r(Y,"CODE",{});var dt=h(Q);qe=s(dt,"components"),dt.forEach(t),Ue=s(Y," directory. If the button is clicked once, bonzi appears. If the button is clicked again, the original bonzi disapears (even if the user has changed pages). To  achieve this, I use a writable store to ensure that bonzi globally accessible by each bonzi button."),Y.forEach(t),le=b(e),P=r(e,"P",{});var de=h(P);Ye=s(de,"Svelte by default enforces type checking. Since I\u2019m lazy, I didn\u2019t feel like figuring out the types for the clippy.js library. I disable type checking by creating a "),C=r(de,"A",{href:!0,rel:!0});var bt=h(C);Fe=s(bt,"tsconfig.json"),bt.forEach(t),Xe=s(de," file with the noImplicitAny: false."),de.forEach(t),re=b(e),U=r(e,"H4",{});var mt=h(U);Le=s(mt,"Sticky header"),mt.forEach(t),he=b(e),_=r(e,"P",{});var F=h(_);Ne=s(F,"Another change I made was to improve the header. The included Chola header works fine for short pages, but if the page is long, the user will need to scroll to return to the top of the page. I added a sticky header that disapears when the user scrolls down, but reappears when they scroll up. That way, the header doesn\u2019t block the screen, but is always available if the user needs it. I utilize the "),$=r(F,"A",{href:!0,rel:!0});var yt=h($);Qe=s(yt,"svelte-headroom"),yt.forEach(t),Re=s(F," component in the "),H=r(F,"A",{href:!0,rel:!0});var gt=h(H);Ve=s(gt,"header file"),gt.forEach(t),We=s(F,"."),F.forEach(t),this.h()},h(){c(u,"href","https://pages.github.com/"),c(u,"rel","nofollow"),c(T,"href","https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll"),c(T,"rel","nofollow"),c(z,"href","https://kit.svelte.dev/"),c(z,"rel","nofollow"),c(j,"href","https://github.com/sharu725/chola"),c(j,"rel","nofollow"),c(G,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/svelte.config.js"),c(G,"rel","nofollow"),c(x,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/gh-pages.js"),c(x,"rel","nofollow"),c(J,"href","https://www.smore.com/clippy-js"),c(J,"rel","nofollow"),c(C,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/tsconfig.json"),c(C,"rel","nofollow"),c($,"href","https://github.com/collardeau/svelte-headroom"),c($,"rel","nofollow"),c(H,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/src/lib/components/Header.svelte"),c(H,"rel","nofollow")},m(e,a){n(e,p,a),o(p,g),n(e,v,a),n(e,m,a),o(m,f),o(m,u),o(u,B),o(m,be),n(e,R,a),n(e,k,a),o(k,me),o(k,T),o(T,ye),o(k,ge),n(e,V,a),n(e,D,a),o(D,ve),n(e,W,a),n(e,I,a),o(I,we),o(I,z),o(z,_e),o(I,ke),n(e,Z,a),n(e,E,a),o(E,Ie),o(E,j),o(j,X),o(X,Ee),o(E,Se),n(e,ee,a),n(e,O,a),o(O,Pe),n(e,te,a),n(e,S,a),o(S,Ae),o(S,G),o(G,Te),o(S,ze),n(e,oe,a),n(e,y,a),o(y,je),o(y,L),o(L,Ge),o(y,xe),o(y,N),o(N,Je),o(y,Ce),o(y,x),o(x,$e),o(y,He),n(e,ie,a),n(e,M,a),o(M,Ke),n(e,se,a),n(e,q,a),o(q,Be),n(e,ae,a),n(e,w,a),o(w,De),o(w,J),o(J,Oe),o(w,Me),o(w,Q),o(Q,qe),o(w,Ue),n(e,le,a),n(e,P,a),o(P,Ye),o(P,C),o(C,Fe),o(P,Xe),n(e,re,a),n(e,U,a),o(U,Le),n(e,he,a),n(e,_,a),o(_,Ne),o(_,$),o($,Qe),o(_,Re),o(_,H),o(H,Ve),o(_,We)},p:xt,d(e){e&&t(p),e&&t(v),e&&t(m),e&&t(R),e&&t(k),e&&t(V),e&&t(D),e&&t(W),e&&t(I),e&&t(Z),e&&t(E),e&&t(ee),e&&t(O),e&&t(te),e&&t(S),e&&t(oe),e&&t(y),e&&t(ie),e&&t(M),e&&t(se),e&&t(q),e&&t(ae),e&&t(w),e&&t(le),e&&t(P),e&&t(re),e&&t(U),e&&t(he),e&&t(_)}}}function $t(K){let p,g;const v=[K[0],_t];let m={$$slots:{default:[Ct]},$$scope:{ctx:K}};for(let f=0;f<v.length;f+=1)m=Ze(m,v[f]);return p=new Jt({props:m}),{c(){St(p.$$.fragment)},l(f){Pt(p.$$.fragment,f)},m(f,u){At(p,f,u),g=!0},p(f,[u]){const B=u&1?Tt(v,[u&1&&vt(f[0]),u&0&&vt(_t)]):{};u&2&&(B.$$scope={dirty:u,ctx:f}),p.$set(B)},i(f){g||(zt(p.$$.fragment,f),g=!0)},o(f){jt(p.$$.fragment,f),g=!1},d(f){Gt(p,f)}}}const _t={layout:"post",title:"How I made this website",slug:"first-post",description:"In this post, I will demonstrate how I created this website using the svelte framework and github pages for hosting.",tags:[{name:"Svelte Kit",link:"https://kit.svelte.dev/"},{name:"Tailwind",link:"https://www.tailwindcss.com"},{name:"Markdown",link:"https://www.markdownguide.org/"}],date:"June 22 2022"};function Ht(K,p,g){return K.$$set=v=>{g(0,p=Ze(Ze({},p),wt(v)))},p=wt(p),[p]}class Dt extends kt{constructor(p){super(),It(this,p,Ht,$t,Et,{})}}export{Dt as default,_t as metadata};
