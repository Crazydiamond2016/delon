webpackJsonp([1],{JF8l:function(n,t,e){"use strict";function a(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs",[],null,null,null,m.b,m.a)),s._9(1,245760,null,0,f.a,[b.a,k.a],{item:[0,"item"]},null)],function(n,t){n(t,1,0,t.component.item)},null)}function o(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs",[],null,null,null,m.b,m.a)),s._9(1,245760,null,0,f.a,[b.a,k.a],{item:[0,"item"]},null)],function(n,t){n(t,1,0,t.component.item)},null)}function l(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs",[],null,null,null,m.b,m.a)),s._9(1,245760,null,0,f.a,[b.a,k.a],{item:[0,"item"]},null)],function(n,t){n(t,1,0,t.component.item)},null)}function i(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs",[],null,null,null,m.b,m.a)),s._9(1,245760,null,0,f.a,[b.a,k.a],{item:[0,"item"]},null)],function(n,t){n(t,1,0,t.component.item)},null)}Object.defineProperty(t,"__esModule",{value:!0});var s=e("LMZF"),r=e("yU3i"),c=function(){this.item={source:{"en-US":"docs/getting-started.en-US.md","zh-CN":"docs/getting-started.zh-CN.md"},content:{"en-US":{content:'<article><h2 id="Foreword"><span>Foreword</span></h2><p>Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by <a target="_blank" href="http://ant.design/">Ant Design</a>, this project introduces higher level components; we have developed templates, components, and a   corresponding design kit to improve the user and development experience for admin interfaces.</p><p>Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open a issue or submit a pull request!</p><p>With those objectives in mind, we have built the following templates, and have built a scaffold based on React.js, which should help you prototyping production-ready admin interfaces.</p><pre class="hljs language-null"><code>- Dashboard\n  - Analytic\n  - Monitor\n  - Workspace\n- Form\n  - Basic Form\n  - Step Form\n  - Advanced From\n- List\n  - Standard Table\n  - Standard List\n  - Card List\n  - Search List (Project/Applications/Article)\n- Profile\n  - Simple Profile\n  - Advanced Profile\n- Result\n  - Success\n  - Failed\n- Exception\n  - 403\n  - 404\n  - 500\n- User\n  - Login\n  - Register\n  - Register Result</code></pre><h3 id="For-Designer"><span>For Designer</span></h3><p>If you are product manager or designer, you can find the <a target="_blank" href="/docs/resource">design kit</a> here.</p><h3 id="For-Developer"><span>For Developer</span></h3><p>We will walk you through the steps to get started.</p><h2 id="Preparation"><span>Preparation</span></h2><p>You will needs <a target="_blank" href="http://nodejs.org/">node</a> and <a target="_blank" href="https://git-scm.com/">git</a>. The project is based on <a target="_blank" href="https://babeljs.io/learn-es2015/">ES2015+</a>, <a target="_blank" href="http://facebook.github.io/react/">React</a>, <a target="_blank" href="http://github.com/dvajs/dva">dva</a>, <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html">g2</a> and <a target="_blank" href="https://ant.design/docs/react/introduce">antd</a>. It would be helpful if you have pre-existing knowledge on those.</p><h2 id="Installation"><span>Installation</span></h2><p>There are three ways to install.</p><h3 id="Clone-the-Git-Repository"><span>Clone the Git Repository</span></h3><pre class="hljs language-bash"><code>$ git clone --depth=1 git@github.com:ant-design/ant-design-pro.git my-project\n$ cd my-project</code></pre><h3 id="Download-the-Package"><span>Download the Package</span></h3><p>Download <a target="_blank" href="https://github.com/ant-design/ant-design-pro/archive/master.zip">https://github.com/ant-design/ant-design-pro/archive/master.zip</a>, and un-archive.</p><h3 id="Use-the-Command-Line"><span>Use the Command Line</span></h3><p>You can also use <a target="_blank" href="https://github.com/ant-design/ant-design-pro-cli">ant-design-pro-cli</a>.</p><pre class="hljs language-bash"><code>$ npm install ant-design-pro-cli -g\n$ mkdir my-project && cd my-project\n$ pro new  # Initialize Scaffold</code></pre><h2 id="Scaffolding"><span>Scaffolding</span></h2><p>We have provided a scaffold which includes common routes for admins and demonstrates our component library. The project layout is as follows:</p><pre class="hljs language-bash"><code>\u251c\u2500\u2500 mock                     # Local Mock Data\n\u251c\u2500\u2500 public\n\u2502   \u2514\u2500\u2500 favicon.ico          # Favicon\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets               # Local static files\n\u2502   \u251c\u2500\u2500 common               # Common Configuration like Navigation\n\u2502   \u251c\u2500\u2500 components           # Components\n\u2502   \u251c\u2500\u2500 e2e                  # Integrated Test Case\n\u2502   \u251c\u2500\u2500 layouts              # Common Layouts\n\u2502   \u251c\u2500\u2500 models               # dva Model\n\u2502   \u251c\u2500\u2500 routes               # Sub-pages and templates\n\u2502   \u251c\u2500\u2500 services             # Back-end Services\n\u2502   \u251c\u2500\u2500 utils                # Utility\n\u2502   \u251c\u2500\u2500 g2.js                # Dataviz Configuration\n\u2502   \u251c\u2500\u2500 theme.js             # Theme Configuration\n\u2502   \u251c\u2500\u2500 index.ejs            # HTML Entry\n\u2502   \u251c\u2500\u2500 index.js             # App Entry\n\u2502   \u251c\u2500\u2500 index.less           # Global Stylesheet\n\u2502   \u2514\u2500\u2500 router.js            # Route Entry File\n\u251c\u2500\u2500 tests                    # Tests Configuration\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json</code></pre><h2 id="Development"><span>Development</span></h2><p>Install Dependencies</p><pre class="hljs language-bash"><code>$ npm install</code></pre><pre class="hljs language-bash"><code>$ npm start</code></pre><p><img src="https://gw.alipayobjects.com/zos/rmsportal/DaIsSQRbNkwOXbMDhqEx.png" width="700" /></p><p>This will automatically open <a target="_blank" href="http://localhost:8000">http://localhost:8000</a>. If you see the following page then you have succeeded.</p><p><img src="https://gw.alipayobjects.com/zos/rmsportal/psqyFTiRoXQeaNZdjppA.png" width="700" alt="Screenshot" /></p><p>You\'re all set!</p><p>We have built-in models, standard components, mock data, hot module reloading, state management, i18n, global router, etc.\nYou can continue exploring other documents for more details on those topics.</p></article>'},"zh-CN":{content:'<h2 id="\u5199\u5728\u524d\u9762"><span>\u5199\u5728\u524d\u9762</span></h2><p>ng-alain \u662f\u4e00\u4e2a\u57fa\u4e8e ng-zorro-antd \u7684\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u524d\u7aef/\u8bbe\u8ba1\u89e3\u51b3\u65b9\u6848\uff0c\u79c9\u627f <a target="_blank" href="http://ant.design/">Ant Design</a> \u7684\u8bbe\u8ba1\u4ef7\u503c\u89c2\uff0c\u81f4\u529b\u4e8e\u5728\u8bbe\u8ba1\u89c4\u8303\u548c\u57fa\u7840\u7ec4\u4ef6\u7684\u57fa\u7840\u4e0a\uff0c\u7ee7\u7eed\u5411\u4e0a\u6784\u5efa\uff0c\u63d0\u70bc\u51fa\u5178\u578b\u6a21\u677f/\u4e1a\u52a1\u7ec4\u4ef6/\u914d\u5957\u8bbe\u8ba1\u8d44\u6e90\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u8bbe\u8ba1\u7814\u53d1\u8fc7\u7a0b\u4e2d\u7684\u300e\u7528\u6237\u300f\u548c\u300e\u8bbe\u8ba1\u8005\u300f\u7684\u4f53\u9a8c\u3002\u968f\u7740\u300e\u8bbe\u8ba1\u8005\u300f\u7684\u4e0d\u65ad\u53cd\u9988\uff0c\u6211\u4eec\u5c06\u6301\u7eed\u8fed\u4ee3\uff0c\u9010\u6b65\u6c89\u6dc0\u548c\u603b\u7ed3\u51fa\u66f4\u591a\u8bbe\u8ba1\u6a21\u5f0f\u548c\u76f8\u5e94\u7684\u4ee3\u7801\u5b9e\u73b0\uff0c\u9610\u8ff0\u4e2d\u540e\u53f0\u4ea7\u54c1\u6a21\u677f/\u7ec4\u4ef6/\u4e1a\u52a1\u573a\u666f\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u4e5f\u5341\u5206\u671f\u5f85\u4f60\u7684\u53c2\u4e0e\u548c\u5171\u5efa\u3002</p><h2 id="\u5b89\u88c5"><span>\u5b89\u88c5</span></h2><p>\u6709\u4e8c\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff1a</p><h3 id="\u76f4\u63a5-clone-git-\u4ed3\u5e93"><span>\u76f4\u63a5 clone git \u4ed3\u5e93</span></h3><pre class="hljs language-bash"><code>$ git clone --depth=1 git@github.com:cipchk/ng-alain.git my-project\n$ cd my-project</code></pre><h3 id="\u4e0b\u8f7d\u538b\u7f29\u5305"><span>\u4e0b\u8f7d\u538b\u7f29\u5305</span></h3><p>\u70b9\u51fb <a target="_blank" href="https://github.com/cipchk/ng-alain/archive/master.zip">https://github.com/cipchk/ng-alain/archive/master.zip</a> \u4e0b\u8f7d\u5230\u672c\u5730\u540e\u89e3\u538b\u3002</p>',api:'<h2 id="API"><span>API</span></h2><h3 id="ChartCard"><span>ChartCard</span></h3><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td>title</td><td>\u5361\u7247\u6807\u9898</td><td><code>ReactNode\\|string</code></td><td>-</td></tr><tr><td>action</td><td>\u5361\u7247\u64cd\u4f5c</td><td>ReactNode</td><td>-</td></tr><tr><td>total</td><td>\u6570\u636e\u603b\u91cf</td><td>ReactNode | <code>number</code></td><td>-</td></tr><tr><td>footer</td><td>\u5361\u7247\u5e95\u90e8</td><td><code>ReactNode</code></td><td>-</td></tr><tr><td>contentHeight</td><td>\u5185\u5bb9\u533a\u57df\u9ad8\u5ea6</td><td><code>number</code></td><td>-</td></tr><tr><td>avatar</td><td>\u53f3\u4fa7\u56fe\u6807</td><td><code>React.ReactNode</code></td><td>-</td></tr></tbody></table>'}},toc:{"en-US":[{href:"#Foreword",title:"Foreword"},{href:"#Preparation",title:"Preparation"},{href:"#Installation",title:"Installation"},{href:"#Scaffolding",title:"Scaffolding"},{href:"#Development",title:"Development"}],"zh-CN":[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762"},{href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},{href:"#API",title:"API"}]}}},_=function(){this.item={source:"docs/graph.md",content:{"zh-CN":{content:"<article><p>Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u4e1a\u52a1\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u3002</p></article>"}},toc:[]}},d=function(){this.item={source:"docs/i18n.md",content:{"zh-CN":{content:"<article><p>Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u4e1a\u52a1\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u3002</p></article>"}},toc:[]}},p=function(){this.item={source:"docs/use-components-alone.md",content:{"zh-CN":{content:"<article><p>\u72ec\u7acb\u4f7f\u7528 ABC \u7ec4\u4ef6\n\u72ec\u7acb\u4f7f\u7528 ABC \u7ec4\u4ef6</p></article>"}},toc:[]}},h=function(){},u=e("5r7V"),g=e("ft03"),m=e("eG7k"),f=e("Oysy"),b=e("xixQ"),k=e("x4CF"),y=s._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),v=s._6("app-docs-getting-started",c,function(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs-getting-started",[],null,null,null,a,y)),s._9(1,49152,null,0,c,[],null,null)],null,null)},{},{},[]),j=s._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),C=s._6("app-docs-graph",_,function(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs-graph",[],null,null,null,o,j)),s._9(1,49152,null,0,_,[],null,null)],null,null)},{},{},[]),w=s._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),z=s._6("app-docs-i18n",d,function(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs-i18n",[],null,null,null,l,w)),s._9(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),D=s._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),F=s._6("app-docs-use-components-alone",p,function(n){return s._34(0,[(n()(),s._10(0,0,null,null,1,"app-docs-use-components-alone",[],null,null,null,i,D)),s._9(1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),S=e("Un6q"),P=e("0nO6"),A=e("9iV4"),R=e("F+4z"),x=e("l6RC"),N=e("RyBE"),E=e("V8+5"),I=e("4jwp"),T=e("OFGE"),L=e("ppgG"),M=e("ajoC"),O=e("cR19"),U=e("UHIZ"),B=e("CZgk"),W=e("Z5i0"),X=e("FWsv"),$=e("tpcp"),q=e("Lvyr"),G=e("embk"),H=e("5Ws7"),Y=e("qCwp"),Z=e("wBz5"),K=e("DJCW"),Q=e("hFjR"),V=e("vXku"),J=e("0b8A"),nn=e("1Zos"),tn=e("VC80"),en=e("oxLQ"),an=e("1foz"),on=e("odZA"),ln=e("eSFe"),sn=e("cxBy"),rn=e("D22n"),cn=e("L6UK"),_n=e("EQiH"),dn=e("aTYU"),pn=e("CD85"),hn=e("dwYh"),un=e("wSnH"),gn=e("wEpP"),mn=e("1/5v"),fn=e("q6td"),bn=e("0XCE");e.d(t,"DocsModuleNgFactory",function(){return kn});var kn=s._7(h,[],function(n){return s._21([s._22(512,s.k,s._3,[[8,[u.b,u.c,u.a,u.d,u.e,u.f,u.C,g.a,v,C,z,F]],[3,s.k],s.z]),s._22(4608,S.n,S.m,[s.w,[2,S.v]]),s._22(4608,P.m,P.m,[]),s._22(4608,P.d,P.d,[]),s._22(4608,A.i,A.n,[S.e,s.D,A.l]),s._22(4608,A.o,A.o,[A.i,A.m]),s._22(5120,A.a,function(n){return[n]},[A.o]),s._22(4608,A.k,A.k,[]),s._22(6144,A.j,null,[A.k]),s._22(4608,A.h,A.h,[A.j]),s._22(6144,A.b,null,[A.h]),s._22(5120,A.f,A.p,[A.b,[2,A.a]]),s._22(4608,A.c,A.c,[A.f]),s._22(5120,R._103,R._104,[[3,R._103],R.b]),s._22(5120,R._14,R._94,[[3,R._14],R.a,R._103]),s._22(6144,x.b,null,[N.b]),s._22(4608,x.c,x.c,[[2,x.b]]),s._22(4608,E.a,E.a,[]),s._22(5120,I.c,I.a,[[3,I.c],s.B,E.a]),s._22(5120,I.f,I.e,[[3,I.f],E.a,s.B]),s._22(4608,T.f,T.f,[I.c,I.f,s.B]),s._22(5120,T.d,T.g,[[3,T.d]]),s._22(4608,T.j,T.j,[I.f]),s._22(5120,T.k,T.l,[[3,T.k]]),s._22(4608,T.c,T.c,[T.f,T.d,s.k,T.j,T.k,s.g,s.s,s.B]),s._22(5120,T.h,T.i,[T.c]),s._22(4608,R._27,R._27,[]),s._22(4608,R._26,R._26,[s.g,s.k,R._14]),s._22(4608,R._113,R._113,[]),s._22(4608,L.b,L.b,[]),s._22(4608,R._95,R._95,[]),s._22(5120,s.d,function(n,t){return[R._109(n,t)]},[S.e,[2,R.e]]),s._22(5120,R._98,R._99,[S.e,[3,R._98]]),s._22(4608,M.a,M.a,[]),s._22(4608,R._31,R._31,[T.c]),s._22(4608,R._23,R._23,[T.c]),s._22(4608,O.a,O.a,[]),s._22(512,S.c,S.c,[]),s._22(512,P.l,P.l,[]),s._22(512,P.e,P.e,[]),s._22(512,U.p,U.p,[[2,U.u],[2,U.l]]),s._22(512,P.k,P.k,[]),s._22(512,A.e,A.e,[]),s._22(512,A.d,A.d,[]),s._22(512,R._102,R._102,[]),s._22(512,R._13,R._13,[]),s._22(512,R.y,R.y,[]),s._22(512,R.j,R.j,[]),s._22(512,R.s,R.s,[]),s._22(512,x.a,x.a,[]),s._22(512,B.c,B.c,[]),s._22(512,E.b,E.b,[]),s._22(512,I.b,I.b,[]),s._22(512,T.e,T.e,[]),s._22(512,R._52,R._52,[]),s._22(512,R._44,R._44,[]),s._22(512,R.A,R.A,[]),s._22(512,R._9,R._9,[]),s._22(512,R.G,R.G,[]),s._22(512,R.K,R.K,[]),s._22(512,R._91,R._91,[]),s._22(512,R._82,R._82,[]),s._22(512,R.T,R.T,[]),s._22(512,R._3,R._3,[]),s._22(512,R._10,R._10,[]),s._22(512,R._4,R._4,[]),s._22(512,R._22,R._22,[]),s._22(512,R._25,R._25,[]),s._22(512,R._30,R._30,[]),s._22(512,R._34,R._34,[]),s._22(512,R._36,R._36,[]),s._22(512,R._38,R._38,[]),s._22(512,R._46,R._46,[]),s._22(512,R._60,R._60,[]),s._22(512,R._87,R._87,[]),s._22(512,R._56,R._56,[]),s._22(512,R._66,R._66,[]),s._22(512,R._40,R._40,[]),s._22(512,R._73,R._73,[]),s._22(512,L.c,L.c,[]),s._22(512,R._75,R._75,[]),s._22(512,R._78,R._78,[]),s._22(512,R._63,R._63,[]),s._22(512,R._19,R._19,[]),s._22(512,R.X,R.X,[]),s._22(512,R.v,R.v,[]),s._22(512,R._12,R._12,[]),s._22(131584,R._47,R._47,[S.e,s.s,s.k]),s._22(512,R.E,R.E,[]),s._22(512,R.C,R.C,[]),s._22(512,R.O,R.O,[]),s._22(512,R._85,R._85,[]),s._22(512,R.q,R.q,[]),s._22(512,R.h,R.h,[]),s._22(512,R.m,R.m,[]),s._22(512,R.o,R.o,[]),s._22(512,R._90,R._90,[]),s._22(512,R.f,R.f,[]),s._22(512,W.a,W.a,[]),s._22(512,X.a,X.a,[]),s._22(512,$.a,$.a,[]),s._22(512,q.a,q.a,[]),s._22(512,G.b,G.b,[]),s._22(512,H.a,H.a,[]),s._22(512,Y.a,Y.a,[]),s._22(512,Z.a,Z.a,[]),s._22(512,K.a,K.a,[]),s._22(512,Q.a,Q.a,[]),s._22(512,V.a,V.a,[]),s._22(512,J.a,J.a,[]),s._22(512,nn.a,nn.a,[]),s._22(512,tn.a,tn.a,[]),s._22(512,en.a,en.a,[]),s._22(512,an.a,an.a,[]),s._22(512,on.a,on.a,[]),s._22(512,ln.a,ln.a,[]),s._22(512,sn.a,sn.a,[]),s._22(512,rn.a,rn.a,[]),s._22(512,cn.a,cn.a,[]),s._22(512,_n.a,_n.a,[]),s._22(512,dn.a,dn.a,[]),s._22(512,pn.a,pn.a,[]),s._22(512,hn.a,hn.a,[]),s._22(512,un.b,un.b,[]),s._22(512,gn.a,gn.a,[]),s._22(512,mn.a,mn.a,[]),s._22(512,fn.h,fn.h,[]),s._22(512,G.a,G.a,[]),s._22(512,un.a,un.a,[]),s._22(512,bn.a,bn.a,[]),s._22(512,h,h,[]),s._22(256,A.l,"XSRF-TOKEN",[]),s._22(256,A.m,"X-XSRF-TOKEN",[]),s._22(256,R.b,!1,[]),s._22(256,R.a,R._93,[]),s._22(256,R._107,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),s._22(256,R._108,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),s._22(256,R.e,void 0,[]),s._22(1024,U.j,function(){return[[{path:"",component:r.a,children:[{path:"getting-started",component:c},{path:"graph",component:_},{path:"i18n",component:d},{path:"use-components-alone",component:p}]}]]},[])])})}});