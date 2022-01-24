"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return z}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),k=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=k(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=k(a),z=n,c=g["".concat(i,".").concat(z)]||g[z]||p[z]||r;return a?l.createElement(c,s(s({ref:t},m),{},{components:a})):l.createElement(c,s({ref:t},m))}));function z(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var k=2;k<r;k++)s[k]=a[k];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8733:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return k},toc:function(){return m},default:function(){return g}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),s=["components"],o={sidebar_position:3},i="Felhaszn\xe1lt technol\xf3gi\xe1k",k={unversionedId:"megoldas/a-kornyezet-megvalasztasa",id:"megoldas/a-kornyezet-megvalasztasa",title:"Felhaszn\xe1lt technol\xf3gi\xe1k",description:"C++",source:"@site/docs/megoldas/a-kornyezet-megvalasztasa.md",sourceDirName:"megoldas",slug:"/megoldas/a-kornyezet-megvalasztasa",permalink:"/megoldas/a-kornyezet-megvalasztasa",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fejleszt\u0151i helyzetfelm\xe9r\xe9s",permalink:"/megoldas/code-tour"},next:{title:"Optimaliz\xe1l\xe1si elj\xe1r\xe1sok",permalink:"/megoldas/optimalizalasi-trukkok"}},m=[{value:"C++",id:"c",children:[],level:2},{value:"CMake",id:"cmake",children:[],level:2},{value:"CPM",id:"cpm",children:[],level:2},{value:"OpenMP",id:"openmp",children:[],level:2},{value:"OpenCL",id:"opencl",children:[],level:2},{value:"Google Test",id:"google-test",children:[],level:2},{value:"Google Benchmark",id:"google-benchmark",children:[],level:2},{value:"Electron",id:"electron",children:[],level:2}],p={toc:m};function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"felhaszn\xe1lt-technol\xf3gi\xe1k"},"Felhaszn\xe1lt technol\xf3gi\xe1k"),(0,r.kt)("h2",{id:"c"},(0,r.kt)("a",{parentName:"h2",href:"https://en.cppreference.com/w/"},"C++")),(0,r.kt)("p",null,'\xdagy gondolom felesleges ecsetelni, hogy aki manaps\xe1g a C/C++ p\xe1ros valamelyik\xe9re teszi le a voks\xe1t fejleszt\xe9s sor\xe1n, az legink\xe1bb a teljes\xedtm\xe9nybeli \xe9s vagy szigor\xfa specifik\xe1ci\xf3i megfontol\xe1sb\xf3l teszi ezt. Nagyon sok "nice-to-have" tulajdons\xe1g hi\xe1nyzik bel\u0151le (pl. json t\xe1mogat\xe1s, http kliens), a f\xfcgg\u0151s\xe9g kezel\xe9s mai sztenderd szemmel n\xe9zve kritik\xe1n aluli, \xe9s multiplatform szempontj\xe1b\xf3l k\xe9nyes nyelv, azonban elmondhat\xf3, hogy mem\xf3riakezel\xe9s \xe9s teljes\xedtm\xe9ny tekintet\xe9ben (amik a projekt szempontj\xe1b\xf3l kulcsfontoss\xe1g\xfaak) nagyon kev\xe9s riv\xe1lisa akad a mai napig. Mivel az eredeti program C-ben \xedr\xf3dott, ez\xe9rt volt trivi\xe1lis v\xe1laszt\xe1s ez.'),(0,r.kt)("h2",{id:"cmake"},(0,r.kt)("a",{parentName:"h2",href:"https://cmake.org/"},"CMake")),(0,r.kt)("p",null,'Minden modern C/C++ programoz\xf3 bar\xe1tja.\nSzok\xe1s gener\xe1torok gener\xe1tor\xe1nak is "cs\xfafolni".\nHaszn\xe1lata legink\xe1bb a multiplatform ig\xe9nyek \xe9s a ford\xedt\xf3k k\xf6zti \xe1tj\xe1rhat\xf3s\xe1g miatt terjedt el, de nem utols\xf3 sorban bar\xe1ts\xe1gos nyelvi szintakszisa miatt is k\xf6zkedvelt.\nHierarhikus projektstrukt\xfar\xe1t k\xe9pezhet\xfcnk vele.\nSikeres konfigur\xe1l\xe1st k\xf6vet\u0151en a ',(0,r.kt)("inlineCode",{parentName:"p"},"cmake")," parancs kiad\xe1sa ut\xe1n az \xe1ltalunk haszn\xe1lt gener\xe1torral fel\xe9p\xedthetj\xfck sz\xe1munkra a projektet."),(0,r.kt)("p",null,"Alternat\xedv\xe1i:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://doc.qt.io/qt-5/qmake-manual.html"},"QMake"),": Egy QT \xf6kosziszt\xe9m\xe1ban haszn\xe1latos build system. Mivel nem QT alap\xfa maga a projekt, \xedgy ez\xe9rt nem volt \xe9rtelme ezt v\xe1lasztani.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minden m\xe1s egy\xe9b gener\xe1tor (Make, Ninja stb...): Azon t\xfal, hogy jellemz\u0151en egy-egy oper\xe1ci\xf3s rendszer fel\xe9 hajlanak (Make - Linux, Ninja - Windows), a vel\xfck val\xf3 haszn\xe1lattal a fejleszt\u0151 tipikusan egy ford\xedt\xf3val val\xf3 kompatibilit\xe1st t\xe1mogat, nekem pedig nem tetszik ez az ir\xe1ny. Ezeken k\xedv\xfcl kor\xe1nt sem biztos\xedtanak olyan sz\xe9lesk\xf6r\u0171 konfigur\xe1l\xe1si lehet\u0151s\xe9get, mint a CMake."))),(0,r.kt)("h2",{id:"cpm"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/cpm-cmake/CPM.cmake"},"CPM")),(0,r.kt)("p",null,"Egy CMake mell\xe9 haszn\xe1lt f\xfcgg\u0151s\xe9gkezel\u0151 rendszer. M\u0171k\xf6d\xe9se hasonl\xf3 a CMake-ben be\xe9p\xedtett ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/module/FetchContent.html"},"FetchContent"),"-hez, azonban b\u0151vebb be\xe1ll\xedt\xe1si lehet\u0151s\xe9gekkel b\xedr, illetve biztos\xedt alapvet\u0151 gyors\xedt\xf3t\xe1raz\xe1st a csomagok sz\xe1m\xe1ra. (Nem kell minden Cmake refresh miatt \xfajra\xe9p\xedteni a f\xfcgg\u0151s\xe9geket, ami egy j\xf3 dolog.)"),(0,r.kt)("p",null,"Alternat\xedv\xe1k:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://conan.io/"},"Conan"),": Egy python alap\xfa csomagkezel\u0151, amely biztos\xedt CMake integr\xe1ci\xf3t a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conan-io/cmake-conan"},"cmake-conan")," projekt \xe1ltal. Egyszer\u0171 a haszn\xe1lata, de mivel pip csomagkezel\u0151b\u0151l kell telep\xedteni, illetve az el\xe9rhet\u0151 k\xf6nyvt\xe1rak jellemz\u0151en ritk\xe1bban friss\xfclnek, ez\xe9rt nem haszn\xe1ltam.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://vcpkg.io/en/index.html"},"Vcpkg"),": A Microsoft saj\xe1t megold\xe1sa a csomagkezel\xe9sre. Cmake integr\xe1ci\xf3ja \xfagy zajlik, hogy egy toolchain f\xe1jlt kell a Cmake projekt mell\xe9 t\xe1rs\xedtani. Mivel az itt tal\xe1lhat\xf3 k\xf6nyvt\xe1rak m\xe9gritk\xe1bban friss\xfclnek, illetve maga a toolchain f\xe1jl idegen g\xe9pen nem t\xf6lti le a f\xfcgg\u0151s\xe9geket, ez\xe9rt nem haszn\xe1ltam."))),(0,r.kt)("h2",{id:"openmp"},(0,r.kt)("a",{parentName:"h2",href:"https://www.openmp.org/"},"OpenMP")),(0,r.kt)("p",null,"Az OpenMP (Open Multi-Processing) egy olyan multiplatform, nyilt forr\xe1sk\xf3d\xfa API, amely C, C++ \xe9s Fortran nyelveken biztos\xedt interf\xe9szt t\xf6bbsz\xe1l\xfa programok \xedr\xe1s\xe1ra. Tal\xe1lhat\xf3 benne ciklusokra vonatkoz\xf3 direkt\xedva, illetve az adott eszk\xf6z(\xf6k)r\u0151l \xe9s platformr\xf3l kapcsolatos inform\xe1ci\xf3kat is tartalmaz. Tal\xe1lhat\xf3 benne mutex t\xe1mogat\xe1s (van saj\xe1t megold\xe1suk r\xe1, de a standard C++11-ben l\xe9v\u0151 mutex-szel is kompatibilis), illetve megfelel\u0151 eszk\xf6z driverek megl\xe9te eset\xe9n GPU feladatmegoszt\xe1s is el\xe9rhet\u0151 vele."),(0,r.kt)("p",null,"A feladat megold\xe1sa sor\xe1n az\xe9rt v\xe1lasztottam, mert haszn\xe1lata nem ig\xe9nyel k\xfcls\u0151 f\xfcgg\u0151s\xe9get, a legt\xf6bb ford\xedt\xf3 rendelkezik implement\xe1ci\xf3val (hab\xe1r MSVC alatt csak a k\xf6zel 20 \xe9ves, 2.0 verzi\xf3 \xe9rhet\u0151 el, de a feladat megold\xe1s\xe1ra az is el\xe9g). Nagyon k\xf6nny\u0171 haszn\xe1lni \xe9s a m\xe1r megl\xe9v\u0151 logik\xe1t fa\xe9k egyszer\u0171s\xe9ggel eg\xe9sz\xedti ki."),(0,r.kt)("p",null,"Egy p\xe9lda for ciklussal haszn\xe1lva:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "omp.h"\n\n#pragma omp parallel for\nfor(int i = 0; i < 1000; i++){\n    distributed_heavy_work_across_multiple_threads();\n}\n')),(0,r.kt)("p",null,"Alternat\xedv\xe1i:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/taskflow/taskflow"},"TaskFlow"),": Egy \xe1ltal\xe1nos felhaszn\xe1l\xe1s\xfa task programoz\xe1si keretrendszer, amelynek seg\xedts\xe9g\xe9vel kedv\xfcnkre \xfctemezhetj\xfck be az elv\xe9gzend\u0151 feladatokat. \xd6sszetett gr\xe1f alap\xfa f\xfcgg\u0151s\xe9geket k\xe9pezhet\xfcnk a feladatok k\xf6z\xf6tt. \xc9rdemes megjegyezni, hogy rendelkezik CUDA \xe9s Sycl t\xe1mogat\xe1ssal is. Az\xe9rt nem ezt v\xe1lasztottam, mert alapvet\u0151 funkci\xf3it tudja az OpenMP is, a t\xf6bbi r\xe9sz\xe9t pedig csak er\u0151s technol\xf3giai elhat\xe1roz\xe1ssal lehet kihaszn\xe1lni.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oneapi-src/oneTBB"},"oneAPI TBB"),": Az Intel saj\xe1t multithreading megold\xe1sa. P\xe1rhuzamos futtat\xe1son t\xfal tartalmaz sz\xe1lbiztos kont\xe9nereket, ar\xe9n\xe1kba csoportos\xedthatjuk a feladatokat, illetve nagyon sok olyan be\xe9p\xedtett megold\xe1suk van, amely a C++ standard k\xf6nyvt\xe1ron alapszik. Mivel a k\xf6nyvt\xe1r jelent\u0151s r\xe9sze nem ker\xfclt volna kihaszn\xe1l\xe1sra, ez\xe9rt mell\u0151ztem a haszn\xe1lat\xe1t."))),(0,r.kt)("h2",{id:"opencl"},(0,r.kt)("a",{parentName:"h2",href:"https://www.khronos.org/opencl/"},"OpenCL")),(0,r.kt)("p",null,"Az OpenCL egy ny\xedlt forr\xe1skod\xfa specifik\xe1ci\xf3, amely az\xe9rt j\xf6tt l\xe9tre, hogy az am\xfagy haszn\xe1latban teljesen elt\xe9r\u0151 \xe9s z\xe1rt forr\xe1sk\xf3d\xfa gy\xe1rt\xf3 specifikus API-kat lev\xe1ltsa. Alapvet\u0151en ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/OpenCL-Headers"},"C implement\xe1ci\xf3val rendelkezik"),", azonban ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/OpenCL-CLHPP"},"haszn\xe1lat\xe1ra l\xe9tezik C++ interf\xe9sz")," is."),(0,r.kt)("p",null,"Az\xe9rt v\xe1lasztottam ezt, mert mind fejleszt\u0151i, mindpedig felhaszn\xe1l\xf3i oldalr\xf3l csak annyi kell, hogy az adott vide\xf3k\xe1rtya illeszt\u0151programja telep\xedtve legyen, ez\xe1ltal messze ez ny\xfajtja a legnagyobb vide\xf3k\xe1rtya t\xe1mogatotts\xe1got.\nA gy\xe1rt\xf3i oldalr\xf3l let\xf6lt\xf6tt illeszt\u0151programokkal egy\xfctt be\xe9p\xedtve j\xf6n.\nT\xe1mogatja az integr\xe1lt vide\xf3k\xe1rty\xe1kat is, ami szint\xe9n csak pozit\xedvum."),(0,r.kt)("p",null,"Alternat\xedv\xe1i:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-zone"},"CUDA")," : Az NVIDIA saj\xe1t vide\xf3k\xe1rtya API megval\xf3s\xedt\xe1sa.\nZ\xe1rt forr\xe1skod\xfa.\nA vele val\xf3 fejleszt\xe9shez elengedhetetlen a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-toolkit"},"CUDA Toolkit")," telep\xedt\xe9se.\nCsak NVIDIA k\xe1rty\xe1kkal kompatibilis.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.khronos.org/sycl/"},"SYCL"),' - Egy specifik\xe1ci\xf3, amely lehet\u0151v\xe9 teszi, hogy a GPU-n lefuttatott kernel k\xf3dot a hagyom\xe1nyos cpp k\xf3ddal egy\xfctt egy forr\xe1sk\xf3dban haszn\xe1ljuk.\nEnnek nagy el\u0151nye, hogy nem kell a k\xf3dot sz\xf6veges f\xe1jlban vagy string liter\xe1lk\xe9nt "t\xe1rolni".\nPlatform szerint ahol el\xe9rhet\u0151 (automatikus \xe9szlel\xe9ssel) haszn\xe1lhatjuk a CUDA-t, m\xedg ugyanazon program m\xe1s, mondjuk AMD k\xe1rty\xe1val felszerelt g\xe9pen OpenCL implement\xe1ci\xf3t haszn\xe1l.\nEz az\xe9rt j\xf3, mert sosem kell lemondanunk a teljes\xedtm\xe9nyr\u0151l, \xe9s el\xe9g egy projektet karbantartani. (Az OpenCL implement\xe1ci\xf3 jellemz\u0151en lassabb m\u0171k\xf6d\xe9ssel b\xedr a gyakorlatban.)\nSajnos a megl\xe9v\u0151 implement\xe1ci\xf3k haszn\xe1lata oly m\xf3don, hogy a fejleszt\xe9s t\xf6bb oper\xe1ci\xf3s rendszeren is folytathat\xf3 legyen nem megoldhat\xf3 stabilan (experimental \xe1llapotban van, de arra nem szerettem volna \xe9p\xedtkezni), azonban a k\xe9s\u0151bbiekben egy val\xf3s \xe9s aj\xe1nlott alternat\xedva lehet tov\xe1bbfejleszt\xe9s szempontj\xe1b\xf3l.'))),(0,r.kt)("h2",{id:"google-test"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/google/googletest"},"Google Test")),(0,r.kt)("p",null,"A Google xUnit-szer\u0171 egys\xe9gteszt megold\xe1sa.\nNagyon sok unit test k\xf6nyvt\xe1r l\xe9tezik, igaz\xe1b\xf3l tal\xe1n elterjedts\xe9ge \xe9s a neve miatt tettem le mellette a voksot."),(0,r.kt)("h2",{id:"google-benchmark"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/google/benchmark"},"Google Benchmark")),(0,r.kt)("p",null,"Seg\xedts\xe9g\xe9vel k\xf6nnyed\xe9n elemezhet\xfcnk CPU id\u0151 \xe9s lefutott m\u0171veletsz\xe1m alapj\xe1n k\xf3dr\xe9szleteket.\nA benchmark eredm\xe9nyek export\xe1lhat\xf3k csv \xe9s json f\xe1jlform\xe1tumban is.\nFontos, hogy ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," m\xf3dban v\xe9gezz\xfck el a benchmarkokat, mivel ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug")," m\xf3dban az eredm\xe9nyek nem pontosak."),(0,r.kt)("h2",{id:"electron"},(0,r.kt)("a",{parentName:"h2",href:"https://www.electronjs.org/"},"Electron")),(0,r.kt)("p",null,"NodeJs-en alapul\xf3 multiplatform asztali alkalmaz\xe1sok k\xe9sz\xedt\xe9s\xe9re haszn\xe1latos.\nA UI megtervez\xe9s\xe9re az egyik legmodernebb megold\xe1s, a JSX alap\xfa Chromium megjelen\xedt\xe9s sokkal praktikusabb \xe9s produkt\xedvabb, mint b\xe1rmelyik layout manager. Teljes\xedtm\xe9ny szempontj\xe1b\xf3l nem a legjobb, de feladata csup\xe1n egy bar\xe1ts\xe1gos interf\xe9sz szolg\xe1ltat\xe1sa \xe9s websocket/socket.io technol\xf3gi\xe1val a backend alkalmaz\xe1ssal val\xf3 szinkroniz\xe1l\xe1s/feladat kioszt\xe1s."),(0,r.kt)("p",null,"Alternat\xedv\xe1i:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.qt.io/"},"Qt")," - A nyelvi homogenit\xe1s miatt lenne m\xe9rvad\xf3 a haszn\xe1lata, de licenszel\xe9si, illetve saj\xe1tos be\xe9p\xedtett t\xedpusainak prefer\xe1l\xe1sa (l\xe1sd ",(0,r.kt)("inlineCode",{parentName:"li"},"std::string")," helyett ",(0,r.kt)("inlineCode",{parentName:"li"},"QString"),") agg\xe1lyok miatt nem erre esett a v\xe1laszt\xe1s.")))}g.isMDXComponent=!0}}]);