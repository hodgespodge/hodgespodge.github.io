import{S as rs,i as hs,s as ps,C as Tt,w as us,x as cs,y as fs,z as ds,A as os,q as bs,o as ms,B as ws,X as as,e as l,t as o,k as f,c as n,a as r,h as a,d as t,m as d,b as p,g as h,T as s,E as gs}from"../../chunks/index-f48ee692.js";import{P as ys}from"../../chunks/post-bbcb2a87.js";function vs(q){let u,y,v,w,c,b,U,De,ne,I,Je,F,Ge,xe,re,W,Re,he,P,Ce,D,He,$e,pe,E,Be,J,se,Oe,Ke,ue,Y,Me,ce,j,Ve,G,qe,Ue,fe,g,We,oe,Ye,Le,ae,Xe,Ne,x,Qe,Ze,de,L,et,be,X,tt,me,k,st,R,ot,at,ie,it,lt,we,A,nt,C,rt,ht,ge,N,pt,ye,_,ut,H,ct,ft,$,dt,bt,ve,Q,mt,ke,m,wt,B,gt,yt,O,vt,kt,K,_t,St,M,It,Pt,_e,z,Et,le,jt,At,Se,V,ls=`<code class="language-js">
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> event<span class="token punctuation">,</span> resolve <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolve</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</code>`,Ie,Z,zt;return{c(){u=l("h1"),y=o("Github Pages"),v=f(),w=l("p"),c=o("If you\u2019re checking out my website, there\u2019s a good chance you\u2019re already familiar with Github Pages. If you aren\u2019t, here\u2019s your introduction: "),b=l("a"),U=o("Github Pages"),De=o(" is a service that allows you to host your website on a free domain tied to your Github account. Github Pages is a great way to host any static website (like this one). All you need is a github account."),ne=f(),I=l("p"),Je=o("The docs for Pages recommends getting started with Jekyll to generate the static website from markdown files. You can find the docs "),F=l("a"),Ge=o("here"),xe=o(". Additionally, there are many open source templates available for Pages."),re=f(),W=l("h2"),Re=o("Svelte"),he=f(),P=l("p"),Ce=o("Instead of Jekyll, I use "),D=l("a"),He=o("Svelte Kit"),$e=o(" to generate the static website. Unlike some other popular frameworks, Svelte Kit compiles its JavaScript/Svelte code into optimized vanilla JavaScript."),pe=f(),E=l("p"),Be=o("This website is built off the "),J=l("a"),se=l("code"),Oe=o("chola"),Ke=o(" template. The chola template is simple and demonstrates many of Svelte\u2019s features. It is a good starting point for building a Svelte app."),ue=f(),Y=l("h2"),Me=o("Initial steps"),ce=f(),j=l("p"),Ve=o("Github Pages only supports static websites. Svelte is capable of generating static websites by using a static adapter. The "),G=l("a"),qe=o("svelte.config.js"),Ue=o(" file is where you configure the build process. Mdsvex is a library which compiles markdown into html for svelte similar to Jekyll. The msdvex compilation step is included in the svelte.config.js file."),fe=f(),g=l("p"),We=o("Svelte Kit uses "),oe=l("code"),Ye=o("npm run build"),Le=o(" to compile. After compiling, I use "),ae=l("code"),Xe=o("npm run deploy"),Ne=o(" to deploy the website to Github Pages. I use the "),x=l("a"),Qe=o("gh-pages.js"),Ze=o(" file to configure the remote branch where the compiled website is deployed. Additionally, we set the deployment branch in the Github repository\u2019s settings in the \u201Cpages\u201D tab."),de=f(),L=l("h2"),et=o("Additions"),be=f(),X=l("h4"),tt=o("Bonzi"),me=f(),k=l("p"),st=o("The first big addition I made to the site was adding Bonzi the purple gorilla from the "),R=l("a"),ot=o("Clippy.js"),at=o(" JavaScript library. To achieve this, I created a bonzi button svelte component in the "),ie=l("code"),it=o("components"),lt=o(" directory. If the button is clicked once, bonzi appears. If the button is clicked again, the original bonzi disapears (even if the user has changed pages). To  achieve this, I use a writable store to ensure that bonzi globally accessible by each bonzi button."),we=f(),A=l("p"),nt=o("Svelte by default enforces type checking. Since I\u2019m lazy, I didn\u2019t feel like figuring out the types for the clippy.js library. I disable type checking by creating a "),C=l("a"),rt=o("tsconfig.json"),ht=o(" file with the noImplicitAny: false."),ge=f(),N=l("h4"),pt=o("Sticky header"),ye=f(),_=l("p"),ut=o("Another change I made was to improve the header. The included Chola header works fine for short pages, but if the page is long, the user will need to scroll to return to the top of the page. I added a sticky header that disapears when the user scrolls down, but reappears when they scroll up. That way, the header doesn\u2019t block the screen, but is always available if the user needs it. I utilize the "),H=l("a"),ct=o("svelte-headroom"),ft=o(" component in the "),$=l("a"),dt=o("header file"),bt=o("."),ve=f(),Q=l("h4"),mt=o("PDF Viewer"),ke=f(),m=l("p"),wt=o("On the "),B=l("a"),gt=o("resume page"),yt=o(" you hopefully noticed my beautifully rendered resume PDF. To serve the resume and any other PDFs (such as my upcoming co-authored publications) I created the PDF.svelte "),O=l("a"),vt=o("component"),kt=o(" which utilizes the "),K=l("a"),_t=o("svelte-pdfjs"),St=o(" package in order to render the PDF. The svelte-pdfjs package in turn wraps around Mozilla\u2019s PDFJS renderer. Funnily enough, while I was in the middle of figuring out how to use svelte-pdfjs, the repo was updated and everything broke for a few hours. I also added a download button which utilizes "),M=l("a"),It=o("FileSaver.js"),Pt=o("."),_e=f(),z=l("p"),Et=o("While I was adding PDF viewing, I also ran into difficulties with server side rendering (SSR). Apparently, Vite was attempting to build an SSR bundle which would fail because of the PDFJS renderer. Before, I was incorrectly under the assumption that the static-adapter in svelte.config.js disabled any SSR. Since the site originally worked fine with gh-pages (which doesn\u2019t do SSR to the best of my knowledge), I just assumed SSR wouldn\u2019t be a problem. After much reading through stack overflow, the only working solution I could find for disabling vite SSR building was to create a "),le=l("code"),jt=o("hooks.js"),At=o(" file in src with the following code:"),Se=f(),V=l("pre"),Ie=f(),Z=l("p"),zt=o("Although this solution worked, it broke some other things so I say use with caution."),this.h()},l(e){u=n(e,"H1",{});var i=r(u);y=a(i,"Github Pages"),i.forEach(t),v=d(e),w=n(e,"P",{});var Pe=r(w);c=a(Pe,"If you\u2019re checking out my website, there\u2019s a good chance you\u2019re already familiar with Github Pages. If you aren\u2019t, here\u2019s your introduction: "),b=n(Pe,"A",{href:!0,rel:!0});var Ft=r(b);U=a(Ft,"Github Pages"),Ft.forEach(t),De=a(Pe," is a service that allows you to host your website on a free domain tied to your Github account. Github Pages is a great way to host any static website (like this one). All you need is a github account."),Pe.forEach(t),ne=d(e),I=n(e,"P",{});var Ee=r(I);Je=a(Ee,"The docs for Pages recommends getting started with Jekyll to generate the static website from markdown files. You can find the docs "),F=n(Ee,"A",{href:!0,rel:!0});var Dt=r(F);Ge=a(Dt,"here"),Dt.forEach(t),xe=a(Ee,". Additionally, there are many open source templates available for Pages."),Ee.forEach(t),re=d(e),W=n(e,"H2",{});var Jt=r(W);Re=a(Jt,"Svelte"),Jt.forEach(t),he=d(e),P=n(e,"P",{});var je=r(P);Ce=a(je,"Instead of Jekyll, I use "),D=n(je,"A",{href:!0,rel:!0});var Gt=r(D);He=a(Gt,"Svelte Kit"),Gt.forEach(t),$e=a(je," to generate the static website. Unlike some other popular frameworks, Svelte Kit compiles its JavaScript/Svelte code into optimized vanilla JavaScript."),je.forEach(t),pe=d(e),E=n(e,"P",{});var Ae=r(E);Be=a(Ae,"This website is built off the "),J=n(Ae,"A",{href:!0,rel:!0});var xt=r(J);se=n(xt,"CODE",{});var Rt=r(se);Oe=a(Rt,"chola"),Rt.forEach(t),xt.forEach(t),Ke=a(Ae," template. The chola template is simple and demonstrates many of Svelte\u2019s features. It is a good starting point for building a Svelte app."),Ae.forEach(t),ue=d(e),Y=n(e,"H2",{});var Ct=r(Y);Me=a(Ct,"Initial steps"),Ct.forEach(t),ce=d(e),j=n(e,"P",{});var ze=r(j);Ve=a(ze,"Github Pages only supports static websites. Svelte is capable of generating static websites by using a static adapter. The "),G=n(ze,"A",{href:!0,rel:!0});var Ht=r(G);qe=a(Ht,"svelte.config.js"),Ht.forEach(t),Ue=a(ze," file is where you configure the build process. Mdsvex is a library which compiles markdown into html for svelte similar to Jekyll. The msdvex compilation step is included in the svelte.config.js file."),ze.forEach(t),fe=d(e),g=n(e,"P",{});var T=r(g);We=a(T,"Svelte Kit uses "),oe=n(T,"CODE",{});var $t=r(oe);Ye=a($t,"npm run build"),$t.forEach(t),Le=a(T," to compile. After compiling, I use "),ae=n(T,"CODE",{});var Bt=r(ae);Xe=a(Bt,"npm run deploy"),Bt.forEach(t),Ne=a(T," to deploy the website to Github Pages. I use the "),x=n(T,"A",{href:!0,rel:!0});var Ot=r(x);Qe=a(Ot,"gh-pages.js"),Ot.forEach(t),Ze=a(T," file to configure the remote branch where the compiled website is deployed. Additionally, we set the deployment branch in the Github repository\u2019s settings in the \u201Cpages\u201D tab."),T.forEach(t),de=d(e),L=n(e,"H2",{});var Kt=r(L);et=a(Kt,"Additions"),Kt.forEach(t),be=d(e),X=n(e,"H4",{});var Mt=r(X);tt=a(Mt,"Bonzi"),Mt.forEach(t),me=d(e),k=n(e,"P",{});var ee=r(k);st=a(ee,"The first big addition I made to the site was adding Bonzi the purple gorilla from the "),R=n(ee,"A",{href:!0,rel:!0});var Vt=r(R);ot=a(Vt,"Clippy.js"),Vt.forEach(t),at=a(ee," JavaScript library. To achieve this, I created a bonzi button svelte component in the "),ie=n(ee,"CODE",{});var qt=r(ie);it=a(qt,"components"),qt.forEach(t),lt=a(ee," directory. If the button is clicked once, bonzi appears. If the button is clicked again, the original bonzi disapears (even if the user has changed pages). To  achieve this, I use a writable store to ensure that bonzi globally accessible by each bonzi button."),ee.forEach(t),we=d(e),A=n(e,"P",{});var Te=r(A);nt=a(Te,"Svelte by default enforces type checking. Since I\u2019m lazy, I didn\u2019t feel like figuring out the types for the clippy.js library. I disable type checking by creating a "),C=n(Te,"A",{href:!0,rel:!0});var Ut=r(C);rt=a(Ut,"tsconfig.json"),Ut.forEach(t),ht=a(Te," file with the noImplicitAny: false."),Te.forEach(t),ge=d(e),N=n(e,"H4",{});var Wt=r(N);pt=a(Wt,"Sticky header"),Wt.forEach(t),ye=d(e),_=n(e,"P",{});var te=r(_);ut=a(te,"Another change I made was to improve the header. The included Chola header works fine for short pages, but if the page is long, the user will need to scroll to return to the top of the page. I added a sticky header that disapears when the user scrolls down, but reappears when they scroll up. That way, the header doesn\u2019t block the screen, but is always available if the user needs it. I utilize the "),H=n(te,"A",{href:!0,rel:!0});var Yt=r(H);ct=a(Yt,"svelte-headroom"),Yt.forEach(t),ft=a(te," component in the "),$=n(te,"A",{href:!0,rel:!0});var Lt=r($);dt=a(Lt,"header file"),Lt.forEach(t),bt=a(te,"."),te.forEach(t),ve=d(e),Q=n(e,"H4",{});var Xt=r(Q);mt=a(Xt,"PDF Viewer"),Xt.forEach(t),ke=d(e),m=n(e,"P",{});var S=r(m);wt=a(S,"On the "),B=n(S,"A",{href:!0,rel:!0});var Nt=r(B);gt=a(Nt,"resume page"),Nt.forEach(t),yt=a(S," you hopefully noticed my beautifully rendered resume PDF. To serve the resume and any other PDFs (such as my upcoming co-authored publications) I created the PDF.svelte "),O=n(S,"A",{href:!0,rel:!0});var Qt=r(O);vt=a(Qt,"component"),Qt.forEach(t),kt=a(S," which utilizes the "),K=n(S,"A",{href:!0,rel:!0});var Zt=r(K);_t=a(Zt,"svelte-pdfjs"),Zt.forEach(t),St=a(S," package in order to render the PDF. The svelte-pdfjs package in turn wraps around Mozilla\u2019s PDFJS renderer. Funnily enough, while I was in the middle of figuring out how to use svelte-pdfjs, the repo was updated and everything broke for a few hours. I also added a download button which utilizes "),M=n(S,"A",{href:!0,rel:!0});var es=r(M);It=a(es,"FileSaver.js"),es.forEach(t),Pt=a(S,"."),S.forEach(t),_e=d(e),z=n(e,"P",{});var Fe=r(z);Et=a(Fe,"While I was adding PDF viewing, I also ran into difficulties with server side rendering (SSR). Apparently, Vite was attempting to build an SSR bundle which would fail because of the PDFJS renderer. Before, I was incorrectly under the assumption that the static-adapter in svelte.config.js disabled any SSR. Since the site originally worked fine with gh-pages (which doesn\u2019t do SSR to the best of my knowledge), I just assumed SSR wouldn\u2019t be a problem. After much reading through stack overflow, the only working solution I could find for disabling vite SSR building was to create a "),le=n(Fe,"CODE",{});var ts=r(le);jt=a(ts,"hooks.js"),ts.forEach(t),At=a(Fe," file in src with the following code:"),Fe.forEach(t),Se=d(e),V=n(e,"PRE",{class:!0});var ns=r(V);ns.forEach(t),Ie=d(e),Z=n(e,"P",{});var ss=r(Z);zt=a(ss,"Although this solution worked, it broke some other things so I say use with caution."),ss.forEach(t),this.h()},h(){p(b,"href","https://pages.github.com/"),p(b,"rel","nofollow"),p(F,"href","https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll"),p(F,"rel","nofollow"),p(D,"href","https://kit.svelte.dev/"),p(D,"rel","nofollow"),p(J,"href","https://github.com/sharu725/chola"),p(J,"rel","nofollow"),p(G,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/svelte.config.js"),p(G,"rel","nofollow"),p(x,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/gh-pages.js"),p(x,"rel","nofollow"),p(R,"href","https://www.smore.com/clippy-js"),p(R,"rel","nofollow"),p(C,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/tsconfig.json"),p(C,"rel","nofollow"),p(H,"href","https://github.com/collardeau/svelte-headroom"),p(H,"rel","nofollow"),p($,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/src/lib/components/Header.svelte"),p($,"rel","nofollow"),p(B,"href","https://hodgespodge.github.io/"),p(B,"rel","nofollow"),p(O,"href","https://github.com/hodgespodge/hodgespodge.github.io/blob/main/src/lib/components/PDF.svelte"),p(O,"rel","nofollow"),p(K,"href","https://github.com/gtm-nayan/svelte-pdfjs"),p(K,"rel","nofollow"),p(M,"href","https://github.com/eligrey/FileSaver.js"),p(M,"rel","nofollow"),p(V,"class","language-js")},m(e,i){h(e,u,i),s(u,y),h(e,v,i),h(e,w,i),s(w,c),s(w,b),s(b,U),s(w,De),h(e,ne,i),h(e,I,i),s(I,Je),s(I,F),s(F,Ge),s(I,xe),h(e,re,i),h(e,W,i),s(W,Re),h(e,he,i),h(e,P,i),s(P,Ce),s(P,D),s(D,He),s(P,$e),h(e,pe,i),h(e,E,i),s(E,Be),s(E,J),s(J,se),s(se,Oe),s(E,Ke),h(e,ue,i),h(e,Y,i),s(Y,Me),h(e,ce,i),h(e,j,i),s(j,Ve),s(j,G),s(G,qe),s(j,Ue),h(e,fe,i),h(e,g,i),s(g,We),s(g,oe),s(oe,Ye),s(g,Le),s(g,ae),s(ae,Xe),s(g,Ne),s(g,x),s(x,Qe),s(g,Ze),h(e,de,i),h(e,L,i),s(L,et),h(e,be,i),h(e,X,i),s(X,tt),h(e,me,i),h(e,k,i),s(k,st),s(k,R),s(R,ot),s(k,at),s(k,ie),s(ie,it),s(k,lt),h(e,we,i),h(e,A,i),s(A,nt),s(A,C),s(C,rt),s(A,ht),h(e,ge,i),h(e,N,i),s(N,pt),h(e,ye,i),h(e,_,i),s(_,ut),s(_,H),s(H,ct),s(_,ft),s(_,$),s($,dt),s(_,bt),h(e,ve,i),h(e,Q,i),s(Q,mt),h(e,ke,i),h(e,m,i),s(m,wt),s(m,B),s(B,gt),s(m,yt),s(m,O),s(O,vt),s(m,kt),s(m,K),s(K,_t),s(m,St),s(m,M),s(M,It),s(m,Pt),h(e,_e,i),h(e,z,i),s(z,Et),s(z,le),s(le,jt),s(z,At),h(e,Se,i),h(e,V,i),V.innerHTML=ls,h(e,Ie,i),h(e,Z,i),s(Z,zt)},p:gs,d(e){e&&t(u),e&&t(v),e&&t(w),e&&t(ne),e&&t(I),e&&t(re),e&&t(W),e&&t(he),e&&t(P),e&&t(pe),e&&t(E),e&&t(ue),e&&t(Y),e&&t(ce),e&&t(j),e&&t(fe),e&&t(g),e&&t(de),e&&t(L),e&&t(be),e&&t(X),e&&t(me),e&&t(k),e&&t(we),e&&t(A),e&&t(ge),e&&t(N),e&&t(ye),e&&t(_),e&&t(ve),e&&t(Q),e&&t(ke),e&&t(m),e&&t(_e),e&&t(z),e&&t(Se),e&&t(V),e&&t(Ie),e&&t(Z)}}}function ks(q){let u,y;const v=[q[0],is];let w={$$slots:{default:[vs]},$$scope:{ctx:q}};for(let c=0;c<v.length;c+=1)w=Tt(w,v[c]);return u=new ys({props:w}),{c(){us(u.$$.fragment)},l(c){cs(u.$$.fragment,c)},m(c,b){fs(u,c,b),y=!0},p(c,[b]){const U=b&1?ds(v,[b&1&&os(c[0]),b&0&&os(is)]):{};b&2&&(U.$$scope={dirty:b,ctx:c}),u.$set(U)},i(c){y||(bs(u.$$.fragment,c),y=!0)},o(c){ms(u.$$.fragment,c),y=!1},d(c){ws(u,c)}}}const is={layout:"post",title:"How I made this website",slug:"first-post",description:"In this post, I will demonstrate how I created this website using the svelte framework and github pages for hosting.",tags:[],date:"June 22 2022"};function _s(q,u,y){return q.$$set=v=>{y(0,u=Tt(Tt({},u),as(v)))},u=as(u),[u]}class Ps extends rs{constructor(u){super(),hs(this,u,_s,ks,ps,{})}}export{Ps as default,is as metadata};