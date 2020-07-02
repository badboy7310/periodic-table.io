!function(){"use strict";function e(){}function t(e){return e()}function a(){return Object.create(null)}function n(e){e.forEach(t)}function l(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function i(e,t,a){e.insertBefore(t,a||null)}function r(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(){return e=" ",document.createTextNode(e);var e}function p(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}let d;function v(e){d=e}const _=[],f=[],h=[],b=[],m=Promise.resolve();let g=!1;function x(e){h.push(e)}let y=!1;const C=new Set;function k(){if(!y){y=!0;do{for(let e=0;e<_.length;e+=1){const t=_[e];v(t),w(t.$$)}for(_.length=0;f.length;)f.pop()();for(let e=0;e<h.length;e+=1){const t=h[e];C.has(t)||(C.add(t),t())}h.length=0}while(_.length);for(;b.length;)b.pop()();g=!1,y=!1,C.clear()}}function w(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const L=new Set;function T(e,t){-1===e.$$.dirty[0]&&(_.push(e),g||(g=!0,m.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $(s,o,i,c,u,p,_=[-1]){const f=d;v(s);const h=o.props||{},b=s.$$={fragment:null,ctx:null,props:p,update:e,not_equal:u,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:a(),dirty:_};let m=!1;if(b.ctx=i?i(s,h,(e,t,...a)=>{const n=a.length?a[0]:t;return b.ctx&&u(b.ctx[e],b.ctx[e]=n)&&(b.bound[e]&&b.bound[e](n),m&&T(s,e)),t}):[],b.update(),m=!0,n(b.before_update),b.fragment=!!c&&c(b.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);b.fragment&&b.fragment.l(e),e.forEach(r)}else b.fragment&&b.fragment.c();o.intro&&((g=s.$$.fragment)&&g.i&&(L.delete(g),g.i(y))),function(e,a,s){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=e.$$;o&&o.m(a,s),x(()=>{const a=i.map(t).filter(l);r?r.push(...a):n(a),e.$$.on_mount=[]}),c.forEach(x)}(s,o.target,o.anchor),k()}var g,y;v(f)}class S{$destroy(){!function(e,t){const a=e.$$;null!==a.fragment&&(n(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(){}}function F(t){let a,n,l,s,o;return{c(){a=c("div"),a.innerHTML='<a target="_blank" href="https://feedback.periodic-table.io/" rel="noopener noreferrer" class="m-1 p-2"><span id="suggestionLink" class="linkText"></span></a> \n  <a href="translation.html" class="m-1 p-2 flex"><span id="translate2Link" class="linkText"></span> \n    <span id="newFooter" class="newFooter"></span></a> \n  <a href="about.html" class="m-1 p-2"><span id="aboutLink" class="linkText"></span></a> \n  <a href="credits.html" class="m-1 p-2"><span id="creditsLink" class="linkText"></span></a> \n  <a href="privacy-policy.html" class="m-1 p-2"><span id="privacyLink" class="linkText"></span></a>',n=u(),l=c("div"),l.innerHTML='<a target="_blank" href="https://github.com/catchspider2002/periodic-table.io" rel="noopener noreferrer" class="flex m-1 p-2" title="Github"><span class="iconFont self-center">r</span></a> \n  <a target="_blank" href="https://twitter.com/periodictableio" rel="noopener noreferrer" class="flex m-1 p-2" title="Twitter"><span class="iconFont self-center">q</span></a> \n  <a target="_blank" href="https://www.instagram.com/periodictableio/" rel="noopener noreferrer" class="flex m-1 p-2" title="Instagram"><span class="iconFont self-center">u</span></a> \n  <a target="_blank" href="https://gumroad.com/periodictabio" rel="noopener noreferrer" class="flex m-1 p-2" title="Gumroad"><span class="iconFont self-center">s</span></a>',s=u(),o=c("div"),o.innerHTML='\n  Made with \n  <span style="color:#e25555">❤</span>\n   by Naveen CS\n',p(a,"class","flex flex-wrap justify-center pt-2"),p(l,"class","flex flex-wrap justify-center pt-2 py-4"),p(o,"class","flex flex-wrap justify-center p-2 pb-8 self-center")},m(e,t){i(e,a,t),i(e,n,t),i(e,l,t),i(e,s,t),i(e,o,t)},p:e,i:e,o:e,d(e){e&&r(a),e&&r(n),e&&r(l),e&&r(s),e&&r(o)}}}function M(t){let a;return{c(){a=c("div"),a.innerHTML='<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Expand"><span class="icon-bar"></span> \n      <span class="icon-bar"></span> \n      <span class="icon-bar"></span></button> \n    <a class="navbar-brand" href="./" aria-label="Home"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054166 10.054166" class="periodic-table-logo"><g transform="translate(-11.223271,-248.751622)" style="fill:#ffffff"><path d="m 14.368697,250.65729 a 1.3007583,1.300758 0 0 0\n            -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.009148,1.26637\n            1.5960997,1.5960997 0 0 1 1.552505,-1.58069 1.3007583,1.300758 0 0 0\n            -1.260895,-0.98644 z m 4.841172,1.58093 a 1.5081255,1.5081255 0 0 0\n            -1.470202,1.17775 l -0.824437,-0.0999 a 0.12567713,0.12567713 0 0 0\n            -0.139889,0.10965 0.12567713,0.12567713 0 0 0 0.109624,0.13989 l\n            0.820853,0.0995 a 1.5081255,1.5081255 0 0 0 -0.0041,0.0812\n            1.5081255,1.5081255 0 0 0 1.508126,1.50813 1.5081255,1.5081255 0 0 0\n            1.508125,-1.50813 1.5081255,1.5081255 0 0 0 -1.508125,-1.50812 z m\n            -4.331148,1.68937 a 0.12567712,0.12567712 0 0 0 -0.07784,0.028 l\n            -0.843043,0.68281 a 1.3007583,1.300758 0 0 0 -0.87434,-0.3398\n            1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0\n            1.300758,1.30076 1.3007583,1.300758 0 0 0 1.300759,-1.30076\n            1.3007583,1.300758 0 0 0 -0.257418,-0.77439 l 0.832219,-0.67406 a\n            0.12567712,0.12567712 0 0 0 0.01858,-0.17676 0.12567712,0.12567712 0\n            0 0 -0.09892,-0.0466 z"></path><path d="m 15.672524,251.73018 a 1.5081255,1.5081254 0 0 0\n            -1.508126,1.50813 1.5081255,1.5081254 0 0 0 0.296741,0.89542 l\n            0.292273,-0.23672 a 0.20108339,0.20108339 0 0 1 0.282822,0.0297\n            0.20108339,0.20108339 0 0 1 -0.0297,0.28282 l -0.2651,0.21471 a\n            1.5081255,1.5081254 0 0 0 0.931091,0.32219 1.5081255,1.5081254 0 0 0\n            1.444403,-1.07677 l -0.241045,-0.0292 a 0.20108339,0.20108339 0 0 1\n            -0.175408,-0.22384 0.20108339,0.20108339 0 0 1 0.223814,-0.17541 l\n            0.254668,0.0309 a 1.5081255,1.5081254 0 0 0 0.0017,-0.0337\n            1.5081255,1.5081254 0 0 0 -1.508125,-1.50813 z" style="opacity:0.7"></path></g></svg></a> \n    <div class="navbar-header no-overflow"><h1 id="pageHeader"></h1></div></div> \n  <div id="listNavbar" class="navbar-collapse navbar-right collapse"><ul class="nav navbar-nav"><li><a id="listList" href="list.html"><span class="iconFont">a</span> \n          <span id="listLink" class="linkText"></span></a></li> \n      <li><a id="compareList" href="compare.html"><span class="iconFont">d</span> \n          <span id="compareLink" class="linkText"></span></a></li> \n      <li><a id="printableList" href="printables.html"><span class="iconFont">e</span> \n          <span id="printableLink" class="linkText"></span></a></li> \n      <li><a id="storeList" href="store.html"><span class="iconFont">o</span> \n          <span id="storeLink" class="linkText"></span></a></li> \n      <li><a id="translateList" href="translation.html"><span class="iconFont">k</span> \n          <span id="translateLink" class="linkText"></span> \n          <span id="newHeader" class="new"></span></a></li> \n      <li><a id="settingsList" href="#" data-toggle="modal" data-target="#settingsModal"><span class="iconFont">l</span> \n          <span id="settingsLink" class="linkText"></span></a></li> \n      <li><a id="themeList" href="#"><span id="themeIcon" class="iconFont">c</span> \n          <span id="themeLink" class="linkText">Theme</span></a></li></ul></div>',p(a,"class","top-container")},m(e,t){i(e,a,t)},p:e,i:e,o:e,d(e){e&&r(a)}}}function H(t){let a,n,l,s,d,v,_,f,h,b,m,g,x,y,C,k,w,L,T,$,S,F,M,H,N,E,P,j,z,B,q,A,I,G,O,W,D,R,K,U,V,Y,J,Q,X,Z,ee,te,ae,ne,le,se,oe,ie,re,ce,ue,pe,de,ve,_e,fe,he,be,me,ge,xe,ye,Ce,ke,we,Le,Te,$e,Se,Fe,Me,He,Ne,Ee,Pe,je;return{c(){a=c("div"),n=c("div"),l=c("div"),s=c("div"),s.innerHTML='<span id="modalSettings" class="modal-title text-left text-upper heavyFont"></span> \n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>',d=u(),v=c("div"),_=c("div"),f=c("div"),h=u(),b=c("div"),m=c("select"),g=c("option"),x=c("option"),x.textContent="English",y=c("option"),y.textContent="English (UK)",C=c("option"),C.textContent="العربية",k=c("option"),k.textContent="Български",w=c("option"),w.textContent="Català",L=c("option"),L.textContent="Čeština",T=c("option"),T.textContent="Dansk",$=c("option"),$.textContent="Deutsch",S=c("option"),S.textContent="Ελληνικά",F=c("option"),F.textContent="Español",M=c("option"),M.textContent="فارسی",H=c("option"),H.textContent="Suomi",N=c("option"),N.textContent="Français",E=c("option"),E.textContent="עברית",P=c("option"),P.textContent="हिंदी",j=c("option"),j.textContent="Hrvatski",z=c("option"),z.textContent="Magyar",B=c("option"),B.textContent="Bahasa Indonesia",q=c("option"),q.textContent="Italiano",A=c("option"),A.textContent="日本語",I=c("option"),I.textContent="한국어",G=c("option"),G.textContent="Norsk Bokmål",O=c("option"),O.textContent="Norsk Nynorsk",W=c("option"),W.textContent="Nederlands",D=c("option"),D.textContent="Polski",R=c("option"),R.textContent="Português",K=c("option"),K.textContent="Română",U=c("option"),U.textContent="Русский",V=c("option"),V.textContent="Slovenčina",Y=c("option"),Y.textContent="Slovenščina",J=c("option"),J.textContent="Српски",Q=c("option"),Q.textContent="Svenska",X=c("option"),X.textContent="ไทย",Z=c("option"),Z.textContent="Türkçe",ee=c("option"),ee.textContent="Українська",te=c("option"),te.textContent="Tiếng Việt",ae=c("option"),ae.textContent="中文(简体)",ne=c("option"),ne.textContent="中文(繁體)",le=u(),se=c("div"),oe=u(),ie=c("div"),ie.innerHTML='<input type="radio" id="tempcelsius" name="temperature" value="celsius" onchange="setTemp()"> \n            <label class="disable-select" for="tempcelsius"></label> \n\n            <input type="radio" id="tempfahrenheit" name="temperature" value="fahrenheit" onchange="setTemp()"> \n            <label class="disable-select" for="tempfahrenheit"></label>',re=u(),ce=c("div"),ue=u(),pe=c("div"),pe.innerHTML='<table id="colorTable"><tbody><tr><td id="color1" class="colorClass" title="Red"></td> \n                  <td id="color2" class="colorClass" title="Orange"></td> \n                  <td id="color3" class="colorClass" title="Yellow"></td> \n                  <td id="color4" class="colorClass" title="Brown"></td> \n                  <td id="color5" class="colorClass" title="Lime"></td></tr> \n                <tr><td id="color6" class="colorClass" title="Green"></td> \n                  <td id="color7" class="colorClass" title="Cyan"></td> \n                  <td id="color8" class="colorClass" title="Blue"></td> \n                  <td id="color9" class="colorClass" title="Purple"></td> \n                  <td id="color10" class="colorClass" title="Pink"></td></tr></tbody></table>',de=u(),ve=c("div"),ve.textContent="Periodic Table",_e=u(),fe=c("div"),he=u(),be=c("div"),me=c("select"),ge=c("option"),ge.textContent="100%",xe=c("option"),xe.textContent="95%",ye=c("option"),ye.textContent="90%",Ce=c("option"),Ce.textContent="85%",ke=c("option"),ke.textContent="80%",we=u(),Le=c("div"),Te=u(),$e=c("div"),$e.innerHTML='<label class="switch"><input id="nameSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>',Se=u(),Fe=c("div"),Me=u(),He=c("div"),He.innerHTML='<label class="switch"><input id="atmNoSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>',Ne=u(),Ee=c("div"),Ee.textContent="Style",Pe=u(),je=c("div"),je.innerHTML='<input type="radio" id="style1" name="tableStyle" value="1" onchange="setStyle()"> \n            <label id="style1Label" class="disable-select" for="style1"></label> \n            <input type="radio" id="style2" name="tableStyle" value="2" onchange="setStyle()"> \n            <label id="style2Label" class="disable-select" for="style2"></label> \n            <input type="radio" id="style3" name="tableStyle" value="3" onchange="setStyle()"> \n            <label id="style3Label" class="disable-select" for="style3"></label>',p(s,"class","modal-header"),p(f,"class","new-table heavyFont text-left"),p(f,"id","language"),p(g,"id","sysLanguage"),g.__value="sys",g.value=g.__value,x.__value="en",x.value=x.__value,y.__value="gb",y.value=y.__value,C.__value="ar",C.value=C.__value,k.__value="bg",k.value=k.__value,w.__value="ca",w.value=w.__value,L.__value="cs",L.value=L.__value,T.__value="da",T.value=T.__value,$.__value="de",$.value=$.__value,S.__value="el",S.value=S.__value,F.__value="es",F.value=F.__value,M.__value="fa",M.value=M.__value,H.__value="fi",H.value=H.__value,N.__value="fr",N.value=N.__value,E.__value="he",E.value=E.__value,P.__value="hi",P.value=P.__value,j.__value="hr",j.value=j.__value,z.__value="hu",z.value=z.__value,B.__value="id",B.value=B.__value,q.__value="it",q.value=q.__value,A.__value="ja",A.value=A.__value,I.__value="ko",I.value=I.__value,G.__value="nb",G.value=G.__value,O.__value="nn",O.value=O.__value,W.__value="nl",W.value=W.__value,D.__value="ph",D.value=D.__value,R.__value="pt",R.value=R.__value,K.__value="ro",K.value=K.__value,U.__value="ru",U.value=U.__value,V.__value="sk",V.value=V.__value,Y.__value="sl",Y.value=Y.__value,J.__value="sr",J.value=J.__value,Q.__value="sv",Q.value=Q.__value,X.__value="th",X.value=X.__value,Z.__value="tr",Z.value=Z.__value,ee.__value="uk",ee.value=ee.__value,te.__value="vi",te.value=te.__value,ae.__value="zs",ae.value=ae.__value,ne.__value="zt",ne.value=ne.__value,p(m,"id","languageSelectSetting"),p(m,"aria-label","Language"),p(b,"class","new-table"),p(se,"class","new-table heavyFont text-left self-start"),p(se,"id","temperature"),p(ie,"class","radio-toolbar padding-top-5"),p(ce,"class","new-table heavyFont padding-top-5 text-left self-start"),p(ce,"id","themeColor"),p(pe,"class","new-table"),p(ve,"id","settingPeriodicTable"),p(ve,"class","new-table span-2"),p(fe,"class","new-table heavyFont text-left"),p(fe,"id","tableWidth"),ge.__value="1",ge.value=ge.__value,xe.__value="0.95",xe.value=xe.__value,ye.__value="0.9",ye.value=ye.__value,Ce.__value="0.85",Ce.value=Ce.__value,ke.__value="0.8",ke.value=ke.__value,p(me,"id","marginSetting"),p(me,"aria-label","Table Width"),p(be,"class","new-table"),p(Le,"class","new-table heavyFont text-left"),p(Le,"id","settingsName"),p($e,"class","new-table text-left padding-top-5"),p(Fe,"class","new-table heavyFont text-left"),p(Fe,"id","settingsAtmWtMain"),p(He,"class","new-table text-left padding-top-5"),p(Ee,"class","new-table heavyFont text-left self-start"),p(Ee,"id","tableStyle"),p(je,"class","radio-toolbar radio-style padding-top-5"),p(_,"class","grid grid-row-gap-10 items-center"),p(v,"class","modal-body"),p(l,"class","modal-inner"),p(n,"class","modal-content"),p(a,"class","modal-dialog"),p(a,"role","document")},m(e,t){i(e,a,t),o(a,n),o(n,l),o(l,s),o(l,d),o(l,v),o(v,_),o(_,f),o(_,h),o(_,b),o(b,m),o(m,g),o(m,x),o(m,y),o(m,C),o(m,k),o(m,w),o(m,L),o(m,T),o(m,$),o(m,S),o(m,F),o(m,M),o(m,H),o(m,N),o(m,E),o(m,P),o(m,j),o(m,z),o(m,B),o(m,q),o(m,A),o(m,I),o(m,G),o(m,O),o(m,W),o(m,D),o(m,R),o(m,K),o(m,U),o(m,V),o(m,Y),o(m,J),o(m,Q),o(m,X),o(m,Z),o(m,ee),o(m,te),o(m,ae),o(m,ne),o(_,le),o(_,se),o(_,oe),o(_,ie),o(_,re),o(_,ce),o(_,ue),o(_,pe),o(_,de),o(_,ve),o(_,_e),o(_,fe),o(_,he),o(_,be),o(be,me),o(me,ge),o(me,xe),o(me,ye),o(me,Ce),o(me,ke),o(_,we),o(_,Le),o(_,Te),o(_,$e),o(_,Se),o(_,Fe),o(_,Me),o(_,He),o(_,Ne),o(_,Ee),o(_,Pe),o(_,je)},p:e,i:e,o:e,d(e){e&&r(a)}}}new class extends S{constructor(e){super(),$(this,e,null,F,s,{})}}({target:document.querySelector("#footer")}),new class extends S{constructor(e){super(),$(this,e,null,M,s,{})}}({target:document.querySelector("#topNavbar")}),new class extends S{constructor(e){super(),$(this,e,null,H,s,{})}}({target:document.querySelector("#settingsModal")})}();
//# sourceMappingURL=svelte-bundle.js.map
