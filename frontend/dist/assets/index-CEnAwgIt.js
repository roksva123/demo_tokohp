var kp=Object.defineProperty;var Bp=(r,e,t)=>e in r?kp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ue=(r,e,t)=>Bp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xa={duration:.5,overwrite:!1,delay:0},Fc,Zt,bt,Qn=1e8,vt=1/Qn,rc=Math.PI*2,zp=rc/4,Hp=0,Lf=Math.sqrt,Gp=Math.cos,Vp=Math.sin,$t=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},kc=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},Bc=function(){return typeof window<"u"},ka=function(e){return Lt(e)||$t(e)},Df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Wp=/random\([^)]+\)/g,Xp=/,\s*/g,gu=/(?:-?\.?\d|\.)+/gi,Uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,If=/[+-]=-?[.\d]+/,qp=/[^,'"\[\]\s]+/gi,Yp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,ui,sc,zc,Gn={},Do={},Nf,Of=function(e){return(Do=Rs(e,Gn))&&An},Hc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sa=function(e,t){return!t&&console.warn(e)},Ff=function(e,t){return e&&(Gn[e]=t)&&Do&&(Do[e]=t)||Gn},Ma=function(){return 0},$p={suppressEvents:!0,isStart:!0,kill:!1},Mo={suppressEvents:!0,kill:!1},Kp={suppressEvents:!0},Gc={},ji=[],ac={},kf,Un={},fl={},vu=30,yo=[],Vc="",Wc=function(e){var t=e[0],n,i;if(xi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=yo.length;i--&&!yo[i].targetTest(t););n=yo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ad(e[i],n)))||e.splice(i,1);return e},Rr=function(e){return e._gsap||Wc(ei(e))[0]._gsap},Bf=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():kc(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Dt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jp=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Uo=function(){var e=ji.length,t=ji.slice(0),n,i;for(ac={},ji.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xc=function(e){return!!(e._initted||e._startAt||e.add)},zf=function(e,t,n,i){ji.length&&!Zt&&Uo(),e.render(t,n,!!(Zt&&t<0&&Xc(e))),ji.length&&!Zt&&Uo()},Hf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qp).length<2?t:$t(e)?e.trim():e},Gf=function(e){return e},Vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rs=function(e,t){for(var n in t)e[n]=t[n];return e},xu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Io=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},aa=function(e){var t=e.parent||Rt,n=e.keyframes?Zp(on(e.keyframes)):Vn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Vf=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Qo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},oc=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},em=function r(e){return!e||e._ts&&r(e.parent)},Su=function(e){return e._repeat?Cs(e._tTime,e=e.duration()+e._rDelay)*e:0},Cs=function(e,t){var n=Math.floor(e=At(e/t));return e&&n===e?n-1:n},No=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||Cr(n,e)),e},Wf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=No(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},di=function(e,t,n,i){return t.parent&&rr(t),t._start=At((Ui(n)?n:!n&&Oo(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Rt?Yn(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vf(e,t,"_first","_last",e._sort?"_start":0),Oo(t)||(e._recent=t),i||Wf(e,t),e._ts<0&&tl(e,e._tTime),e},Xf=function(e,t){return(Gn.ScrollTrigger||Hc("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},qf=function(e,t,n,i,s){if(Yc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kf!==On.frame)return ji.push(e),e._lazy=[s,i],1},tm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Oo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nm=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&tm(e)&&!(!e._initted&&Oo(e))||(e._ts<0||e._dp._ts<0)&&!Oo(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ua(0,e._tDur,t),u=Cs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Cs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Zt||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&qf(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&oc(e,t,n,!0),e._onUpdate&&!n&&kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rr(e,1),!n&&!Zt&&(kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},im=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ps=function(e,t,n,i){var s=e._repeat,o=At(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:At(o*(s+1)+e._rDelay*s):o,a>0&&!i&&tl(e,e._tTime=e._tDur*a),e.parent&&el(e),n||Cr(e.parent,e),e},Mu=function(e){return e instanceof Sn?Cr(e):Ps(e,e._dur)},rm={_start:0,endTime:Ma,totalDuration:Ma},Yn=function r(e,t,n){var i=e.labels,s=e._recent||rm,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},oa=function(e,t,n){var i=Ui(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ot(t[0],o,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!$t(e)||!(t=Yp.exec(e))?"":t[1]},sm=function(e,t,n){return cr(n,function(i){return Ua(e,t,i)})},lc=[].slice,Yf=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==ui},am=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return $t(i)&&!t||Yf(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(sc||!Ls())?lc.call((t||zc).querySelectorAll(e),0):on(e)?am(e,n):Yf(e)?lc.call(e,0):e?[e]:[]},cc=function(e){return e=ei(e)[0]||Sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Sa("Invalid scope")||zc.createElement("div"):e)}},$f=function(e){return e.sort(function(){return .5-Math.random()})},Kf=function(e){if(Lt(e))return e;var t=xi(e)?e:{each:e},n=Pr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return $t(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,S,x,M,R,A,E,U,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!v){for(E=-Qn;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,S=v===Qn?0:l?_*f/v-.5:i/v|0,E=0,U=Qn,A=0;A<_;A++)x=A%v-p,M=S-(A/v|0),m[A]=R=c?Math.abs(c==="y"?M:x):Lf(x*x+M*M),R>E&&(E=R),R<U&&(U=R);i==="random"&&$f(m),m.max=E-U,m.min=U,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=sn(t.amount||t.each)||0,n=n&&_<0?xm(n):n}return _=(m[h]-m.min)/m.max||0,At(m.b+(n?n(_):_)*m.v)+m.u}},uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=At(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ui(n)?0:sn(n))}},jf=function(e,t){var n=on(e),i,s;return!n&&xi(e)&&(i=n=e.radius||Qn,e.values?(e=ei(e.values),(s=!Ui(e[0]))&&(i*=i)):e=uc(e.increment)),cr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ui(o)?u:u+sn(o)}:uc(e))},Zf=function(e,t,n,i){return cr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},om=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},lm=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},cm=function(e,t,n){return Qf(e,t,0,1,n)},Jf=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},um=function r(e,t,n){var i=t-e;return on(e)?Jf(e,r(0,e.length),t):cr(n,function(s){return(i+(s-e)%i)%i+e})},hm=function r(e,t,n){var i=t-e,s=i*2;return on(e)?Jf(e,r(0,e.length-1),t):cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ya=function(e){return e.replace(Wp,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Xp);return Zf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qf=function(e,t,n,i,s){var o=t-e,a=i-n;return cr(s,function(l){return n+((l-e)/o*a||0)})},fm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=$t(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Rs(on(e)?[]:{},e));if(!u){for(l in t)qc.call(a,e,l,"get",t[l]);s=function(g){return jc(g,a)||(o?e.p:e)}}}return cr(n,s)},yu=function(e,t,n){var i=e.labels,s=Qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},kn=function(e,t,n){var i=e.vars,s=i[t],o=bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ji.length&&Uo(),a&&(bt=a),u=l?s.apply(c,l):s.call(c),bt=o,u},Js=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&kn(e,"onInterrupt"),e},ms,ed=[],td=function(e){if(e)if(e=!e.name&&e.default||e,Bc()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ma,render:jc,add:qc,kill:Cm,modifier:Rm,rawVars:0},o={targetTest:0,get:0,getSetter:Kc,aliases:{},register:0};if(Ls(),e!==i){if(Un[t])return;Vn(i,Vn(Io(e,s),o)),Rs(i.prototype,Rs(s,Io(e,o))),Un[i.prop=t]=i,e.targetTest&&(yo.push(i),Gc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ff(t,i),e.register&&e.register(An,i,Tn)}else ed.push(e)},xt=255,Qs={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},nd=function(e,t,n){var i=e?Ui(e)?[e>>16,e>>8&xt,e&xt]:0:Qs.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qs[e])i=Qs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(gu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=dl(l+1/3,s,o),i[1]=dl(l,s,o),i[2]=dl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Uf),n&&i.length<4&&(i[3]=1),i}else i=e.match(gu)||Qs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,o=i[1]/xt,a=i[2]/xt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},id=function(e){var t=[],n=[],i=-1;return e.split(Zi).forEach(function(s){var o=s.match(ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Eu=function(e,t,n){var i="",s=(e+i).match(Zi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=nd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=id(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Zi,"1").split(ps),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Zi),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Zi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),dm=/hsl[a]?\(/,rd=function(e){var t=e.join(" "),n;if(Zi.lastIndex=0,Zi.test(t))return n=dm.test(t),e[1]=Eu(e[1],n),e[0]=Eu(e[0],n,id(e[1])),!0},Ea,On=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,S=m===!0,x,M,R,A;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,x=R-o,(x>0||S)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=x+(x>=s?0:s-x),M=1),S||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](R,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Nf&&(!sc&&Bc()&&(ui=sc=window,zc=ui.document||{},Gn.gsap=An,(ui.gsapVersions||(ui.gsapVersions=[])).push(An.version),Of(Do||ui.GreenSockGlobals||!ui.gsap&&ui||{}),ed.forEach(td)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ea=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ea=0,c=Ma},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var x=p?function(M,R,A,E){m(M,R,A,E),f.remove(x)}:m;return f.remove(m),a[S?"unshift":"push"](x),Ls(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ls=function(){return!Ea&&On.wake()},ot={},pm=/^[\d.\-M][\d.\-,\s]/,mm=/["']/g,_m=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(mm,"").trim():+c,i=l.substr(a+1).trim();return t},gm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},vm=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_m(t[1])]:gm(e).split(",").map(Hf)):ot._CE&&pm.test(e)?ot._CE("",e):n},xm=function(e){return function(t){return 1-e(1-t)}},Pr=function(e,t){return e&&(Lt(e)?e:ot[e]||vm(e))||t},Xr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return En(e,function(a){ot[a]=Gn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},sd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Vp((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:sd(a);return s=rc/s,l.config=function(c,u){return r(e,c,u)},l},ml=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sd(n);return i.config=function(s){return r(e,s)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Xr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Xr("Elastic",pl("in"),pl("out"),pl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Xr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xr("Circ",function(r){return-(Lf(1-r*r)-1)});Xr("Sine",function(r){return r===1?1:-Gp(r*zp)+1});Xr("Back",ml("in"),ml("out"),ml());ot.SteppedEase=ot.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*Ua(0,o,a)|0)+s)*n}}};xa.ease=ot["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vc+=r+","+r+"Params,"});var ad=function(e,t){this.id=Hp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bf,this.set=t?t.getSetter:Kc},Ta=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ps(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Ea||On.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,n),!s._dp||s.parent||Wf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Su(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Su(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Cs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?No(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Ua(-Math.abs(this._delay),a,s),i!==!1),el(this),Qp(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ls(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==vt,o;if(s)for(this._tTime-=vt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+vt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=At(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?No(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Kp);var i=Zt;return Zt=n,Xc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Yn(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-vt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Lt(n)?n:Gf,l=function(){var u=i.then;i.then=null,s&&s(),Lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Js(this)},r}();Vn(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var Sn=function(r){Pf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),Rt&&di(n.parent||Rt,wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Xf(wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return oa(0,arguments,this),this},t.from=function(i,s,o){return oa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return oa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,Yn(this,o),1),this},t.call=function(i,s,o){return di(this,Ot.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ot(i,o,Yn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,aa(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,aa(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,S,x,M,R,A,E;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,x=this._ts,p=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=At(u%m),u===l?(_=this._repeat,h=c):(R=At(u/m),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=Cs(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),A&&_&1&&(h=c-h,E=1),_!==R&&!this._lock){var U=A&&R&1,v=U===(A&&_&1);if(_<R&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(E?0:At(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=im(this,At(a),At(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(kn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-vt);break}}d=g}else{d=this._last;for(var y=i<0?i:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||Zt&&Xc(d)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-vt:vt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-vt)._zTime=h>=a?1:-1,this._ts))return this._start=M,el(this),this.render(i,s,o);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ui(s)||(s=Yn(this,s,i)),!(i instanceof Ta)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if($t(i))return this.addLabel(i,s);if(Lt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return $t(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ot.delayedCall(0,s||Ma,o);return a.data="isPause",this._hasPause=1,di(this,a,Yn(this,i))},t.removePause=function(i){var s=this._first;for(i=Yn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Vi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Ui(s),u;l;)l instanceof Ot?jp(l._targets,a)&&(c?(!Vi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Yn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ot.to(o,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ps(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Vn({startAt:{time:Yn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yu(this,Yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yu(this,Yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=At(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Cr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=At(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ps(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(zf(Rt,No(i,Rt)),kf=On.frame),On.frame>=vu){vu+=zn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&zn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e}(Ta);Vn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sm=function(e,t,n,i,s,o,a){var l=new Tn(this._pt,e,t,0,1,hd,null,s),c=0,u=0,f,h,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ya(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),h=n.match(hl)||[];f=hl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=hl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(If.test(i)||p)&&(l.e=0),this._pt=l,l},qc=function(e,t,n,i,s,o,a,l,c,u){Lt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Lt(f)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Lt(f)?c?bm:cd:$c,g;if($t(i)&&(~i.indexOf("random(")&&(i=ya(i)),i.charAt(1)==="="&&(g=xs(h,i)+(sn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||hc)return!isNaN(h*i)&&i!==""?(g=new Tn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Am:ud,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Hc(t,i),Sm.call(this,e,t,h,i,d,l||zn.stringFilter,c))},Mm=function(e,t,n,i,s){if(Lt(e)&&(e=la(e,s,t,n,i)),!xi(e)||e.style&&e.nodeType||on(e)||Df(e))return $t(e)?la(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=la(e[a],s,t,n,i);return o},od=function(e,t,n,i,s,o){var a,l,c,u;if(Un[e]&&(a=new Un[e]).init(s,a.rawVars?t[e]:Mm(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vi,hc,Yc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Fc,M=e.timeline,R=i.easeReverse||f,A,E,U,v,y,O,D,K,P,N,B,W,q;if(M&&(!h||!s)&&(s="none"),e._ease=Pr(s,xa.ease),e._rEase=R&&(Pr(R)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(K=m[0]?Rr(m[0]).harness:0,W=K&&i[K.prop],A=Io(i,Gc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Mo:$p),_._lazy=0),o){if(rr(e._startAt=Ot.set(m,Vn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!d)&&e._startAt.revert(Mo),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),U=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:p},A),W&&(U[K.prop]=W),rr(e._startAt=Ot.set(m,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Mo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yn(l)||l&&!g,E=0;E<m.length;E++){if(y=m[E],D=y._gsap||Wc(m)[E]._gsap,e._ptLookup[E]=N={},ac[D.id]&&ji.length&&Uo(),B=S===m?E:S.indexOf(y),K&&(P=new K).init(y,W||A,e,B,S)!==!1&&(e._pt=v=new Tn(e._pt,y,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function($){N[$]=v}),P.priority&&(O=1)),!K||W)for(U in A)Un[U]&&(P=od(U,A,e,B,y,S))?P.priority&&(O=1):N[U]=v=qc.call(e,y,U,"get",A[U],B,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),x&&e._pt&&(Vi=e,Rt.killTweensOf(y,N,e.globalTime(t)),q=!e.parent,Vi=0),e._pt&&l&&(ac[D.id]=1)}O&&fd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&M.render(Qn,!0,!0)},ym=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return hc=1,e.vars[t]="+=0",Yc(e,a),hc=0,l?Sa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Dt(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},Em=function(e,t){var n=e[0]?Rr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Rs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Tm=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},la=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):$t(e)&&~e.indexOf("random(")?ya(e):e},Fo=Vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ld={};En(Fo+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ld[r]=1});Fo=Fo.split(",");var Ot=function(r){Pf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:aa(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Rt,S=(on(n)||Df(n)?Ui(n[0]):"length"in i)?[n]:ei(n),x,M,R,A,E,U,v,y;if(a._targets=S.length?Wc(S):Sa("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ka(c)||ka(u)){i=a.vars;var O=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Sn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),x.kill(),x.parent=x._dp=wi(a),x._start=0,h||ka(c)||ka(u)){if(A=S.length,v=h&&Kf(h),xi(h))for(E in h)~Fo.indexOf(E)&&(y||(y={}),y[E]=h[E]);for(M=0;M<A;M++)R=Io(i,ld),R.stagger=0,O&&(R.easeReverse=O),y&&Rs(R,y),U=S[M],R.duration=+la(c,wi(a),M,U,S),R.delay=(+la(u,wi(a),M,U,S)||0)-a._delay,!h&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),x.to(U,R,v?v(M,U,S):0),x._ease=ot.none;x.duration()?c=u=0:a.timeline=0}else if(g){aa(Vn(x.vars.defaults,{ease:"none"})),x._ease=Pr(g.ease||i.ease||"none");var D=0,K,P,N;if(on(g))g.forEach(function(B){return x.to(S,B,">")}),x.duration();else{R={};for(E in g)E==="ease"||E==="easeEach"||Tm(E,g[E],R,g.easeEach);for(E in R)for(K=R[E].sort(function(B,W){return B.t-W.t}),D=0,M=0;M<K.length;M++)P=K[M],N={ease:P.e,duration:(P.t-(M?K[M-1].t:0))/100*c},N[E]=P.v,x.to(S,N,D),D+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Fc&&(Vi=wi(a),Rt.killTweensOf(S),Vi=0),di(p,wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===At(p._time)&&yn(f)&&em(wi(a))&&p.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&Xf(wi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-vt&&!u?l:i<vt?0:i,h,d,g,_,m,p,S,x;if(!c)nm(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=At(f%_),f===l?(g=this._repeat,h=c):(m=At(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Cs(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(At(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(qf(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=h<a;if(M!==this._inv){var R=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(M?-1:1)/R:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(kn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&oc(this,i,s,o),kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&oc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ea||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yc(this,c),u=this._ease(c/this._dur),ym(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(tl(this,0),this.parent||Vf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vi&&Vi.vars.overwrite!==!0)._first||Js(this),this.parent&&o!==this.timeline.totalDuration()&&Ps(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Jp(a,l))return s==="all"&&(this._pt=0),Js(this);for(f=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},En(s,function(S){return _[S]=1}),s=_),s=Em(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Qo(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Js(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return oa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(Ta);Vn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new Sn,t=lc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var $c=function(e,t,n){return e[t]=n},cd=function(e,t,n){return e[t](n)},bm=function(e,t,n,i){return e[t](i.fp,n)},wm=function(e,t,n){return e.setAttribute(t,n)},Kc=function(e,t){return Lt(e[t])?cd:kc(e[t])&&e.setAttribute?wm:$c},ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Am=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rm=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Cm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Tn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ud,this.d=l||this,this.set=c||$c,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pm,this.m=n,this.mt=s,this.tween=i},r}();En(Vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gc[r]=1});Gn.TweenMax=Gn.TweenLite=Ot;Gn.TimelineLite=Gn.TimelineMax=Sn;Rt=new Sn({sortChildren:!1,defaults:xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=rd;var Lr=[],Eo={},Lm=[],Tu=0,Dm=0,_l=function(e){return(Eo[e]||Lm).map(function(t){return t()})},ba=function(){var e=Date.now(),t=[];e-Tu>2&&(_l("matchMediaInit"),Lr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ui.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),_l("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Tu=e,_l("matchMedia"))},dd=function(){function r(t,n){this.selector=n&&cc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dm++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var c=bt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=cc(s)),bt=o,f=i.apply(o,arguments),Lt(f)&&o._r.push(f),bt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Lr.length;o--;)Lr[o].id===this.id&&Lr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ba):a.removeEventListener("change",ba)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r}(),Um=function(){function r(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){xi(n)||(n={matches:n});var o=new dd(0,s||this.scope),a=o.conditions={},l,c,u;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(Lr.indexOf(o)<0&&Lr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ba):l.addEventListener("change",ba),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return td(i)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){$t(e)&&(e=ei(e)[0]);var s=Rr(e||{}).get,o=n?Gf:Hf;return n==="native"&&(n=""),e&&(t?o((Un[t]&&Un[t].get||s)(e,t,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Un[t],a=Rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ms._pt=0,f.init(e,n?u+n:u,ms,0,[e]),f.render(1,f),ms._pt&&jc(1,ms)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=An.to(e,Vn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,xa.ease)),xu(xa,e||{})},config:function(e){return xu(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Gn[a]&&Sa(t+" effect requires "+a+" plugin.")}),fl[t]=function(a,l,c){return n(ei(a),Vn(l||{},s),c)},o&&(Sn.prototype[t]=function(a,l,c){return this.add(fl[t](a,xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):ot},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=s;return di(Rt,n,0),n},context:function(e,t){return e?new dd(e,t):bt},matchMedia:function(e){return new Um(e)},matchMediaRefresh:function(){return Lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ba()},addEventListener:function(e,t){var n=Eo[e]||(Eo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Eo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:um,wrapYoyo:hm,distribute:Kf,random:Zf,snap:jf,normalize:cm,getUnit:sn,clamp:sm,splitColor:nd,toArray:ei,selector:cc,mapRange:Qf,pipe:om,unitize:lm,interpolate:fm,shuffle:$f},install:Of,effects:fl,ticker:On,updateRoot:Sn.updateRoot,plugins:Un,globalTimeline:Rt,core:{PropTween:Tn,globals:Ff,Tween:Ot,Timeline:Sn,Animation:Ta,getCache:Rr,_removeLinkedListItem:Qo,reverting:function(){return Zt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Fc=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ko[r]=Ot[r]});On.add(Sn.updateRoot);ms=ko.to({},{duration:0});var Im=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Nm=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Im(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},gl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if($t(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Nm(a,s)}}}},An=ko.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gl("roundProps",uc),gl("modifiers"),gl("snap",jf))||ko;Ot.version=Sn.version=An.version="3.15.1";Nf=1;Bc()&&Ls();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bu,Wi,Ss,Zc,wr,wu,Jc,Om=function(){return typeof window<"u"},Ii={},xr=180/Math.PI,Ms=Math.PI/180,qr=Math.atan2,Au=1e8,Qc=/([A-Z])/g,Fm=/(left|right|width|margin|padding|x)/i,km=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},md=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vm=function(e,t,n){return e.style[t]=n},Wm=function(e,t,n){return e.style.setProperty(t,n)},Xm=function(e,t,n){return e._gsap[t]=n},qm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ym=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$m=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",bn=Ct+"Origin",Km=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ii&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ai(i,a)}):this.tfm[e]=o.x?o[e]:Ai(i,e),e===bn&&(this.tfm.zOrigin=o.zOrigin);else return pi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},_d=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jc(),(!s||!s.isStart)&&!n[Ct]&&(_d(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gd=function(e,t){var n={target:e,props:[],revert:jm,save:Km};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},vd,dc=function(e,t){var n=Wi.createElementNS?Wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wi.createElement(e);return n&&n.style?n:Wi.createElement(e)},Bn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ds(t)||t,1)||""},Ru="O,Moz,ms,Ms,Webkit".split(","),Ds=function(e,t,n){var i=t||wr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ru[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ru[o]:"")+e},pc=function(){Om()&&window.document&&(bu=window,Wi=bu.document,Ss=Wi.documentElement,wr=dc("div")||{style:{}},dc("div"),Ct=Ds(Ct),bn=Ct+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vd=!!Ds("perspective"),Jc=An.core.reverting,Zc=1)},Cu=function(e){var t=e.ownerSVGElement,n=dc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ss.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ss.removeChild(n),s},Pu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xd=function(e){var t,n;try{t=e.getBBox()}catch{t=Cu(e),n=1}return t&&(t.width||t.height)||n||(t=Cu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Pu(e,["x","cx","x1"])||0,y:+Pu(e,["y","cy","y1"])||0,width:0,height:0}:t},Sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xd(e))},sr=function(e,t){if(t){var n=e.style,i;t in Ii&&t!==bn&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qc,"-$1").toLowerCase())):n.removeAttribute(t)}},Xi=function(e,t,n,i,s,o){var a=new Tn(e._pt,t,n,0,1,o?md:pd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Lu={deg:1,rad:1,turn:1},Zm={grid:1,flex:1},ar=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wr.style,l=Fm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Lu[i]||Lu[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Sd(e),(d||o==="%")&&(Ii[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Dt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Wi||!_.appendChild)&&(_=Wi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===On.time&&!m.uncache)return Dt(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[u],S?e.style[t]=S:sr(e,t)}else(d||o==="%")&&!Zm[Bn(_,"display")]&&(a.position=Bn(e,"position")),_===e&&(a.position="static"),_.appendChild(wr),g=wr[u],_.removeChild(wr),a.position="absolute";return l&&d&&(m=Rr(_),m.time=On.time,m.width=_[u]),Dt(h?g*s/f:g&&s?f/g*s:0)},Ai=function(e,t,n,i){var s;return Zc||pc(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ii[t]&&t!=="transform"?(s=Aa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zo(Bn(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bo[t]&&Bo[t](e,t,n)||Bn(e,t)||Bf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(e,t,s,n)+n:s},Jm=function(e,t,n,i){if(!n||n==="none"){var s=Ds(t,e,1),o=s&&Bn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,hd),l=0,c=0,u,f,h,d,g,_,m,p,S,x,M,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Bn(e,t)||i,_?e.style[t]=_:sr(e,t)),u=[n,i],rd(u),n=u[0],i=u[1],h=n.match(ps)||[],R=i.match(ps)||[],R.length){for(;f=ps.exec(i);)m=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=xs(d,m)+M),p=parseFloat(m),x=m.substr((p+"").length),l=ps.lastIndex-x.length,x||(x=x||zn.units[t]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(d=ar(e,t,_,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?md:pd;return If.test(i)&&(a.e=0),this._pt=a,a},Du={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Du[n]||n,t[1]=Du[i]||i,t.join(" ")},e_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ii[a]&&(l=1,a=a==="transformOrigin"?bn:Ct),sr(n,a);l&&(sr(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Aa(n,1),o.uncache=1,_d(i)))}},Bo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,n,0,0,e_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},wa=[1,0,0,1,0,0],Md={},yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uu=function(e){var t=Bn(e,Ct);return yd(t)?wa:t.substr(7).match(Uf).map(Dt)},eu=function(e,t){var n=e._gsap||Rr(e),i=e.style,s=Uu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wa:s):(s===wa&&!e.offsetParent&&e!==Ss&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ss.appendChild(e)),s=Uu(e),l?i.display=l:sr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mc=function(e,t,n,i,s,o){var a=e._gsap,l=s||eu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),M=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,E,U,v;n?l!==wa&&(E=d*m-g*_)&&(U=M*(m/E)+R*(-_/E)+(_*S-m*p)/E,v=M*(-g/E)+R*(d/E)-(d*S-g*p)/E,M=U,R=v):(A=xd(e),M=A.x+(~x[0].indexOf("%")?M/100*A.width:M),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(p=M-c,S=R-u,a.xOffset=f+(p*d+S*_)-p,a.yOffset=h+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[bn]="0px 0px",o&&(Xi(o,a,"xOrigin",c,M),Xi(o,a,"yOrigin",u,R),Xi(o,a,"xOffset",f,a.xOffset),Xi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},Aa=function(e,t){var n=e._gsap||new ad(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bn(e,bn)||"0",u,f,h,d,g,_,m,p,S,x,M,R,A,E,U,v,y,O,D,K,P,N,B,W,q,$,C,Z,ne,Y,j,se;return u=f=h=_=m=p=S=x=M=0,d=g=1,n.svg=!!(e.getCTM&&Sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),i.scale=i.rotate=i.translate="none"),E=eu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),mc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,A=n.yOrigin||0,E!==wa&&(O=E[0],D=E[1],K=E[2],P=E[3],u=N=E[4],f=B=E[5],E.length===6?(d=Math.sqrt(O*O+D*D),g=Math.sqrt(P*P+K*K),_=O||D?qr(D,O)*xr:0,S=K||P?qr(K,P)*xr+_:0,S&&(g*=Math.abs(Math.cos(S*Ms))),n.svg&&(u-=R-(R*O+A*K),f-=A-(R*D+A*P))):(se=E[6],Y=E[7],C=E[8],Z=E[9],ne=E[10],j=E[11],u=E[12],f=E[13],h=E[14],U=qr(se,ne),m=U*xr,U&&(v=Math.cos(-U),y=Math.sin(-U),W=N*v+C*y,q=B*v+Z*y,$=se*v+ne*y,C=N*-y+C*v,Z=B*-y+Z*v,ne=se*-y+ne*v,j=Y*-y+j*v,N=W,B=q,se=$),U=qr(-K,ne),p=U*xr,U&&(v=Math.cos(-U),y=Math.sin(-U),W=O*v-C*y,q=D*v-Z*y,$=K*v-ne*y,j=P*y+j*v,O=W,D=q,K=$),U=qr(D,O),_=U*xr,U&&(v=Math.cos(U),y=Math.sin(U),W=O*v+D*y,q=N*v+B*y,D=D*v-O*y,B=B*v-N*y,O=W,N=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Dt(Math.sqrt(O*O+D*D+K*K)),g=Dt(Math.sqrt(B*B+se*se)),U=qr(N,B),S=Math.abs(U)>2e-4?U*xr:0,M=j?1/(j<0?-j:j):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yd(Bn(e,Ct)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Dt(d),n.scaleY=Dt(g),n.rotation=Dt(_)+a,n.rotationX=Dt(m)+a,n.rotationY=Dt(p)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[bn]=zo(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?n_:vd?Ed:t_,n.uncache=0,n},zo=function(e){return(e=e.split(" "))[0]+" "+e[1]},vl=function(e,t,n){var i=sn(t);return Dt(parseFloat(t)+parseFloat(ar(e,"x",n+"px",i)))+i},t_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ed(e,t)},dr="0deg",Vs="0px",pr=") ",Ed=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,M="",R=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==dr||u!==dr)){var A=parseFloat(u)*Ms,E=Math.sin(A),U=Math.cos(A),v;A=parseFloat(f)*Ms,v=Math.cos(A),o=vl(S,o,E*v*-x),a=vl(S,a,-Math.sin(A)*-x),l=vl(S,l,U*v*-x+x)}m!==Vs&&(M+="perspective("+m+pr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||o!==Vs||a!==Vs||l!==Vs)&&(M+=l!==Vs||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(M+="rotate("+c+pr),u!==dr&&(M+="rotateY("+u+pr),f!==dr&&(M+="rotateX("+f+pr),(h!==dr||d!==dr)&&(M+="skew("+h+", "+d+pr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+pr),S.style[Ct]=M||"translate(0, 0)"},n_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(o),M=parseFloat(a),R,A,E,U,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ms,c*=Ms,R=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=Ms,v=Math.tan(c-u),v=Math.sqrt(1+v*v),E*=v,U*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),R*=v,A*=v)),R=Dt(R),A=Dt(A),E=Dt(E),U=Dt(U)):(R=f,U=h,A=E=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=ar(d,"x",o,"px"),M=ar(d,"y",a,"px")),(g||_||m||p)&&(x=Dt(x+g-(g*R+_*E)+m),M=Dt(M+_-(g*A+_*U)+p)),(i||s)&&(v=d.getBBox(),x=Dt(x+i/100*v.width),M=Dt(M+s/100*v.height)),v="matrix("+R+","+A+","+E+","+U+","+x+","+M+")",d.setAttribute("transform",v),S&&(d.style[Ct]=v)},i_=function(e,t,n,i,s){var o=360,a=$t(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?xr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Au)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Au)%o-~~(c/o)*o)),e._pt=h=new Tn(e._pt,t,n,i,c,Bm),h.e=u,h.u="deg",e._props.push(n),h},Iu=function(e,t){for(var n in t)e[n]=t[n];return e},r_=function(e,t,n){var i=Iu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=Aa(n,1),sr(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],o[Ct]=t,a=Aa(n,1),o[Ct]=c);for(l in Ii)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),g=sn(u),f=d!==g?ar(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Tn(e._pt,a,l,f,h-f,fc),e._pt.u=g||0,e._props.push(l));Iu(a,i)};En("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Bo[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ai(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Td={name:"css",register:pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,S,x,M,R,A,E,U,v;Zc||pc(),this.styles=this.styles||gd(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&od(_,t,n,i,e,s)))){if(d=typeof u,g=Bo[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ya(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Zi.lastIndex=0,Zi.test(c)||(m=sn(c),p=sn(u),p?m!==p&&(c=ar(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=ya(c)),sn(c+"")||c==="auto"||(c+=zn.units[_]||sn(Ai(e,_))||""),(c+"").charAt(1)==="="&&(c=Ai(e,_))):c=Ai(e,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in pi&&(_==="autoAlpha"&&(h===1&&Ai(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,a.visibility),Xi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ii,x){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Bn(e,"perspective"),y?e.style.perspective=y:sr(e,"perspective")}f=parseFloat(u)}if(M||(R=e._gsap,R.renderTransform&&!t.parseTransform||Aa(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new Tn(this._pt,a,Ct,0,1,R.renderTransform,R,0,-1),M.dep=1),_==="scale")this._pt=new Tn(this._pt,R,"scaleY",R.scaleY,(S?xs(R.scaleY,S+f):f)-R.scaleY||0,fc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(bn,0,a[bn]),u=Qm(u),R.svg?mc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&Xi(this,R,"zOrigin",R.zOrigin,p),Xi(this,a,_,zo(c),zo(u)));continue}else if(_==="svgOrigin"){mc(e,u,1,A,0,this);continue}else if(_ in Md){i_(this,R,_,h,S?xs(h,S+u):u);continue}else if(_==="smoothOrigin"){Xi(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){r_(this,u,e);continue}}else _ in a||(_=Ds(_)||_);if(x||(f||f===0)&&(h||h===0)&&!km.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=sn(u)||(_ in zn.units?zn.units[_]:m),m!==p&&(h=ar(e,_,c,p)),this._pt=new Tn(this._pt,x?R:a,_,h,(S?xs(h,S+f):f)-h,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Gm:fc),this._pt.u=p||0,x&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=Hm):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=zm);else if(_ in a)Jm.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Hc(_,u);continue}x||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}E&&fd(this)},render:function(e,t){if(t.tween._time||!Jc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ai,aliases:pi,getSetter:function(e,t,n){var i=pi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ii&&t!==bn&&(e._gsap.x||Ai(e,"x"))?n&&wu===n?t==="scale"?qm:Xm:(wu=n||{})&&(t==="scale"?Ym:$m):e.style&&!kc(e.style[t])?Vm:~t.indexOf("-")?Wm:Kc(e,t)},core:{_removeProperty:sr,_getMatrix:eu}};An.utils.checkPrefix=Ds;An.core.getStyleSaver=gd;(function(r,e,t,n){var i=En(r+","+e+","+t,function(s){Ii[s]=1});En(e,function(s){zn.units[s]="deg",Md[s]=1}),pi[i[13]]=r+","+e,En(n,function(s){var o=s.split(":");pi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});An.registerPlugin(Td);var Br=An.registerPlugin(Td)||An;Br.core.Tween;function s_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function a_(r,e,t){return e&&s_(r.prototype,e),r}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jt,To,Mn,qi,Yi,ys,bd,Sr,Es,wd,Pi,si,Ad,Rd=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},Cd=1,_s=[],tt=[],_i=[],ca=Date.now,_c=function(e,t){return t},o_=function(){var e=Es.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,_i),tt=n,_i=i,_c=function(o,a){return t[o](a)}},Ji=function(e,t){return~_i.indexOf(e)&&_i[_i.indexOf(e)+1][t]},ua=function(e){return!!~wd.indexOf(e)},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ba="scrollLeft",za="scrollTop",gc=function(){return Pi&&Pi.isPressed||tt.cache++},Ho=function(e,t){var n=function i(s){if(s||s===0){Cd&&Mn.history.scrollRestoration!=="manual"&&(Mn.history.scrollRestoration="manual");var o=Pi&&Pi.isPressed;s=i.v=Math.round(s)||(Pi&&Pi.iOS?1:0),e(s),i.cacheID=tt.cache,o&&_c("ss",s)}else(t||tt.cache!==i.cacheID||_c("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},gn={s:Ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ho(function(r){return arguments.length?Mn.scrollTo(r,zt.sc()):Mn.pageXOffset||qi[Ba]||Yi[Ba]||ys[Ba]||0})},zt={s:za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:Ho(function(r){return arguments.length?Mn.scrollTo(gn.sc(),r):Mn.pageYOffset||qi[za]||Yi[za]||ys[za]||0})},xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},l_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},or=function(e,t){var n=t.s,i=t.sc;ua(e)&&(e=qi.scrollingElement||Yi);var s=tt.indexOf(e),o=i===zt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||un(e,"scroll",gc);var a=tt[s+o],l=a||(tt[s+o]=Ho(Ji(e,n),!0)||(ua(e)?i:Ho(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},vc=function(e,t,n){var i=e,s=e,o=ca(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ca();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=ca();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ws=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Nu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Pd=function(){Es=jt.core.globals().ScrollTrigger,Es&&Es.core&&o_()},Ld=function(e){return jt=e||Rd(),!To&&jt&&typeof document<"u"&&document.body&&(Mn=window,qi=document,Yi=qi.documentElement,ys=qi.body,wd=[Mn,qi,Yi,ys],jt.utils.clamp,Ad=jt.core.context||function(){},Sr="onpointerenter"in ys?"pointer":"mouse",bd=Ut.isTouch=Mn.matchMedia&&Mn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Ut.eventTypes=("ontouchstart"in Yi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cd=0},500),To=1),Es||Pd(),To};gn.op=zt;tt.cache=0;var Ut=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){To||Ld(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Es||Pd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,R=n.onRight,A=n.onLeft,E=n.onUp,U=n.onDown,v=n.onChangeX,y=n.onChangeY,O=n.onChange,D=n.onToggleX,K=n.onToggleY,P=n.onHover,N=n.onHoverEnd,B=n.onMove,W=n.ignoreCheck,q=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,Z=n.onWheel,ne=n.onEnable,Y=n.onDisable,j=n.onClick,se=n.scrollSpeed,_e=n.capture,fe=n.allowClicks,Ce=n.lockAxis,Pe=n.onLockAxis;this.target=a=xn(a)||Yi,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mn.getComputedStyle(ys).lineHeight)||22);var Ie,Ge,z,Ve,me,Le,ge,H=this,ke=0,w=0,T=n.passive||!u&&n.passive!==!1,F=or(a,gn),ee=or(a,zt),Q=F(),te=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&si[0]==="pointerdown",ue=ua(a),ce=a.ownerDocument||qi,be=[0,0,0],He=[0,0,0],J=0,lt=function(){return J=ca()},Ae=function(xe,Re){return(H.event=xe)&&d&&l_(xe.target,d)||Re&&pe&&xe.pointerType!=="touch"||W&&W(xe,Re)},We=function(){H._vx.reset(),H._vy.reset(),Ge.pause(),f&&f(H)},Ee=function(){var xe=H.deltaX=Nu(be),Re=H.deltaY=Nu(He),ie=Math.abs(xe)>=i,Fe=Math.abs(Re)>=i;O&&(ie||Fe)&&O(H,xe,Re,be,He),ie&&(R&&H.deltaX>0&&R(H),A&&H.deltaX<0&&A(H),v&&v(H),D&&H.deltaX<0!=ke<0&&D(H),ke=H.deltaX,be[0]=be[1]=be[2]=0),Fe&&(U&&H.deltaY>0&&U(H),E&&H.deltaY<0&&E(H),y&&y(H),K&&H.deltaY<0!=w<0&&K(H),w=H.deltaY,He[0]=He[1]=He[2]=0),(Ve||z)&&(B&&B(H),z&&(m&&z===1&&m(H),S&&S(H),z=0),Ve=!1),Le&&!(Le=!1)&&Pe&&Pe(H),me&&(Z(H),me=!1),Ie=0},ve=function(xe,Re,ie){be[ie]+=xe,He[ie]+=Re,H._vx.update(xe),H._vy.update(Re),c?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},Xe=function(xe,Re){Ce&&!ge&&(H.axis=ge=Math.abs(xe)>Math.abs(Re)?"x":"y",Le=!0),ge!=="y"&&(be[2]+=xe,H._vx.update(xe,!0)),ge!=="x"&&(He[2]+=Re,H._vy.update(Re,!0)),c?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},nt=function(xe){if(!Ae(xe,1)){xe=Ws(xe,u);var Re=xe.clientX,ie=xe.clientY,Fe=Re-H.x,Ne=ie-H.y,Ye=H.isDragging;H.x=Re,H.y=ie,(Ye||(Fe||Ne)&&(Math.abs(H.startX-Re)>=s||Math.abs(H.startY-ie)>=s))&&(z||(z=Ye?2:1),Ye||(H.isDragging=!0),Xe(Fe,Ne))}},ht=H.onPress=function(Te){Ae(Te,1)||Te&&Te.button||(H.axis=ge=null,Ge.pause(),H.isPressed=!0,Te=Ws(Te),ke=w=0,H.startX=H.x=Te.clientX,H.startY=H.y=Te.clientY,H._vx.reset(),H._vy.reset(),un(q?a:ce,si[1],nt,T,!0),H.deltaX=H.deltaY=0,x&&x(H))},de=H.onRelease=function(Te){if(!Ae(Te,1)){cn(q?a:ce,si[1],nt,!0);var xe=!isNaN(H.y-H.startY),Re=H.isDragging,ie=Re&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Fe=Ws(Te);!ie&&xe&&(H._vx.reset(),H._vy.reset(),u&&fe&&jt.delayedCall(.08,function(){if(ca()-J>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(ce.createEvent){var Ne=ce.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,Mn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ne)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Re&&!q&&Ge.restart(!0),z&&Ee(),p&&Re&&p(H),M&&M(H,ie)}},re=function(xe){return xe.touches&&xe.touches.length>1&&(H.isGesturing=!0)&&$(xe,H.isDragging)},L=function(){return(H.isGesturing=!1)||C(H)},ae=function(xe){if(!Ae(xe)){var Re=F(),ie=ee();ve((Re-Q)*se,(ie-te)*se,1),Q=Re,te=ie,f&&Ge.restart(!0)}},oe=function(xe){if(!Ae(xe)){xe=Ws(xe,u),Z&&(me=!0);var Re=(xe.deltaMode===1?l:xe.deltaMode===2?Mn.innerHeight:1)*g;ve(xe.deltaX*Re,xe.deltaY*Re,0),f&&!q&&Ge.restart(!0)}},Oe=function(xe){if(!Ae(xe)){var Re=xe.clientX,ie=xe.clientY,Fe=Re-H.x,Ne=ie-H.y;H.x=Re,H.y=ie,Ve=!0,f&&Ge.restart(!0),(Fe||Ne)&&Xe(Fe,Ne)}},De=function(xe){H.event=xe,P(H)},st=function(xe){H.event=xe,N(H)},ut=function(xe){return Ae(xe)||Ws(xe,u)&&j(H)};Ge=H._dc=jt.delayedCall(h||.25,We).pause(),H.deltaX=H.deltaY=0,H._vx=vc(0,50,!0),H._vy=vc(0,50,!0),H.scrollX=F,H.scrollY=ee,H.isDragging=H.isGesturing=H.isPressed=!1,Ad(this),H.enable=function(Te){return H.isEnabled||(un(ue?ce:a,"scroll",gc),o.indexOf("scroll")>=0&&un(ue?ce:a,"scroll",ae,T,_e),o.indexOf("wheel")>=0&&un(a,"wheel",oe,T,_e),(o.indexOf("touch")>=0&&bd||o.indexOf("pointer")>=0)&&(un(a,si[0],ht,T,_e),un(ce,si[2],de),un(ce,si[3],de),fe&&un(a,"click",lt,!0,!0),j&&un(a,"click",ut),$&&un(ce,"gesturestart",re),C&&un(ce,"gestureend",L),P&&un(a,Sr+"enter",De),N&&un(a,Sr+"leave",st),B&&un(a,Sr+"move",Oe)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Ve=z=!1,H._vx.reset(),H._vy.reset(),Q=F(),te=ee(),Te&&Te.type&&ht(Te),ne&&ne(H)),H},H.disable=function(){H.isEnabled&&(_s.filter(function(Te){return Te!==H&&ua(Te.target)}).length||cn(ue?ce:a,"scroll",gc),H.isPressed&&(H._vx.reset(),H._vy.reset(),cn(q?a:ce,si[1],nt,!0)),cn(ue?ce:a,"scroll",ae,_e),cn(a,"wheel",oe,_e),cn(a,si[0],ht,_e),cn(ce,si[2],de),cn(ce,si[3],de),cn(a,"click",lt,!0),cn(a,"click",ut),cn(ce,"gesturestart",re),cn(ce,"gestureend",L),cn(a,Sr+"enter",De),cn(a,Sr+"leave",st),cn(a,Sr+"move",Oe),H.isEnabled=H.isPressed=H.isDragging=!1,Y&&Y(H))},H.kill=H.revert=function(){H.disable();var Te=_s.indexOf(H);Te>=0&&_s.splice(Te,1),Pi===H&&(Pi=0)},_s.push(H),q&&ua(a)&&(Pi=H),H.enable(_)},a_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ut.version="3.15.1";Ut.create=function(r){return new Ut(r)};Ut.register=Ld;Ut.getAll=function(){return _s.slice()};Ut.getById=function(r){return _s.filter(function(e){return e.vars.id===r})[0]};Rd()&&jt.registerPlugin(Ut);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,fs,et,mt,In,ft,tu,Go,Ra,ha,ea,Ha,nn,nl,xc,dn,Ou,Fu,ds,Dd,xl,Ud,fn,Sc,Id,Nd,Gi,Mc,nu,Ts,iu,Qi,yc,Sl,Ga=1,rn=Date.now,Ml=rn(),ti=0,ta=0,ku=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Bu=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},c_=function r(){return ta&&requestAnimationFrame(r)},zu=function(){return nl=1},Hu=function(){return nl=0},hi=function(e){return e},na=function(e){return Math.round(e*1e5)/1e5||0},Od=function(){return typeof window<"u"},Fd=function(){return Se||Od()&&(Se=window.gsap)&&Se.registerPlugin&&Se},zr=function(e){return!!~tu.indexOf(e)},kd=function(e){return(e==="Height"?iu:et["inner"+e])||In["client"+e]||ft["client"+e]},Bd=function(e){return Ji(e,"getBoundingClientRect")||(zr(e)?function(){return Co.width=et.innerWidth,Co.height=iu,Co}:function(){return Ri(e)})},u_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ji(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?kd(s):e["client"+s])||0}},h_=function(e,t){return!t||~_i.indexOf(e)?Bd(e):function(){return Co}},mi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ji(e,n))?o()-Bd(e)()[s]:zr(e)?(In[n]||ft[n])-kd(i):e[n]-e["offset"+i])},Va=function(e,t){for(var n=0;n<ds.length;n+=3)(!t||~t.indexOf(ds[n+1]))&&e(ds[n],ds[n+1],ds[n+2])},Dn=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},ia=function(e){return typeof e=="number"},Mr=function(e){return typeof e=="object"},Xs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Yr=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},$r=Math.abs,zd="left",Hd="top",ru="right",su="bottom",Dr="width",Ur="height",fa="Right",da="Left",pa="Top",ma="Bottom",Nt="padding",$n="margin",Us="Width",au="Height",Bt="px",Kn=function(e){return et.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},f_=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ri=function(e,t){var n=t&&Kn(e)[xc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Vo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Gd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},d_=function(e){return function(t){return Se.utils.snap(Gd(e),t)}},ou=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},p_=function(e){return function(t,n){return ou(Gd(e))(t,n.direction)}},Wa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Xa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qa={toggleActions:"play",anticipatePin:0},Wo={top:0,left:0,center:.5,bottom:1,right:1},bo=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wo?Wo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ya=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=mt.createElement("div"),_=zr(n)||Ji(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?ft:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,x=S?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===zt?ru:su)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],wo(g,0,i,S),g},wo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Us]=1,s["border"+a+Us]=0,s[n.p]=t+"px",Se.set(e,s)},Qe=[],Ec={},Ca,Wu=function(){return rn()-ti>34&&(Ca||(Ca=requestAnimationFrame(Di)))},Kr=function(){(!fn||!fn.isPressed||fn.startX>ft.clientWidth)&&(tt.cache++,fn?Ca||(Ca=requestAnimationFrame(Di)):Di(),ti||Gr("scrollStart"),ti=rn())},yl=function(){Nd=et.innerWidth,Id=et.innerHeight},ra=function(e){tt.cache++,(e===!0||!nn&&!Ud&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!Sc||Nd!==et.innerWidth||Math.abs(et.innerHeight-Id)>et.innerHeight*.25))&&Go.restart(!0)},Hr={},m_=[],Vd=function r(){return Xt(Je,"scrollEnd",r)||Ar(!0)},Gr=function(e){return Hr[e]&&Hr[e].map(function(t){return t()})||m_},Ln=[],Wd=function(e){for(var t=0;t<Ln.length;t+=5)(!e||Ln[t+4]&&Ln[t+4].query===e)&&(Ln[t].style.cssText=Ln[t+1],Ln[t].getBBox&&Ln[t].setAttribute("transform",Ln[t+2]||""),Ln[t+3].uncache=1)},Xd=function(){tt.cache++,tt.forEach(function(e){return an(e)&&(e.rec=e())})},lu=function(e,t){var n;for(dn=0;dn<Qe.length;dn++)n=Qe[dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qi=!0,t&&Wd(t),t||Gr("revert")},qd=function(e,t){tt.cache++,(t||!pn)&&tt.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(nu=e,et.history.scrollRestoration!==e&&(et.history.scrollRestoration=e))},pn,Ir=0,Xu,__=function(){if(Xu!==Ir){var e=Xu=Ir;requestAnimationFrame(function(){return e===Ir&&Ar(!0)})}},Yd=function(){ft.appendChild(Ts),iu=!fn&&Ts.offsetHeight||et.innerHeight,ft.removeChild(Ts)},qu=function(e){return Ra(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ar=function(e,t){if(In=mt.documentElement,ft=mt.body,tu=[et,mt,In,ft],ti&&!e&&!Qi){qt(Je,"scrollEnd",Vd);return}Yd(),pn=Je.isRefreshing=!0,Qi||Xd();var n=Gr("refreshInit");Dd&&Je.sort(),t||lu(),tt.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),Qi=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),yc=1,qu(!0),Qe.forEach(function(i){var s=mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qu(!1),yc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),qd(nu,1),Go.pause(),Ir++,pn=2,Di(2),Qe.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pn=Je.isRefreshing=!1,Gr("refresh")},Tc=0,Ao=1,_a,Di=function(e){if(e===2||!pn&&!Qi){Je.isUpdating=!0,_a&&_a.update(0);var t=Qe.length,n=rn(),i=n-Ml>=50,s=t&&Qe[0].scroll();if(Ao=Tc>s?-1:1,pn||(Tc=s),i&&(ti&&!nl&&n-ti>200&&(ti=0,Gr("scrollEnd")),ea=Ml,Ml=n),Ao<0){for(dn=t;dn-- >0;)Qe[dn]&&Qe[dn].update(0,i);Ao=1}else for(dn=0;dn<t;dn++)Qe[dn]&&Qe[dn].update(0,i);Je.isUpdating=!1}Ca=0},bc=[zd,Hd,su,ru,$n+ma,$n+fa,$n+pa,$n+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ro=bc.concat([Dr,Ur,"boxSizing","max"+Us,"max"+au,"position",$n,Nt,Nt+pa,Nt+fa,Nt+ma,Nt+da]),g_=function(e,t,n){bs(n);var i=e._gsap;if(i.spacerIsNative)bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},El=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=bc.length,o=t.style,a=e.style,l;s--;)l=bc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[su]=a[ru]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Dr]=Vo(e,gn)+Bt,o[Ur]=Vo(e,zt)+Bt,o[Nt]=a[$n]=a[Hd]=a[zd]="0",bs(i),a[Dr]=a["max"+Us]=n[Dr],a[Ur]=a["max"+au]=n[Ur],a[Nt]=n[Nt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},v_=/([A-Z])/g,bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(v_,"-$1").toLowerCase())}},$a=function(e){for(var t=Ro.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ro[s],n[Ro[s]]);return i.t=e,i},x_=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Co={left:0,top:0},Yu=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){an(e)&&(e=e(l)),Dn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?bo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),ia(e))d&&(e=Se.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&wo(a,n,i,!0);else{an(t)&&(t=t(l));var x=(e||"0").split(" "),M,R,A,E;S=xn(t,l)||ft,M=Ri(S)||{},(!M||!M.left&&!M.top)&&Kn(S).display==="none"&&(E=S.style.display,S.style.display="block",M=Ri(S),E?S.style.display=E:S.style.removeProperty("display")),R=bo(x[0],M[i.d]),A=bo(x[1]||"0",n),e=M[i.p]-c[i.p]-u+R+s-A,a&&wo(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,v=o._isStart;m="scroll"+i.d2,wo(o,U,i,v&&U>20||!v&&(f?Math.max(ft[m],In[m]):o.parentNode[m])<=U+1),f&&(c=Ri(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Bt))}return d&&S&&(m=Ri(S),d.seek(h),p=Ri(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},S_=/(webkit|moz|length|cssText|inset)/i,$u=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ft){e._stOrig=s.cssText,a=Kn(e);for(o in a)!+o&&!S_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},$d=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ka=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Ku=function(e,t){var n=or(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=$d(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Di()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Se.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qt(e,"wheel",n.wheelHandler),Je.isTouch&&qt(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){fs||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Mc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ta){this.update=this.refresh=this.kill=hi;return}n=Gu(Dn(n)||ia(n)||n.nodeType?{trigger:n}:n,qa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,U=s.fastScrollEnd,v=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:zt,O=!f&&f!==0,D=xn(n.scroller||et),K=Se.core.getCache(D),P=zr(D),N=("pinType"in n?n.pinType:Ji(D,"pinType")||P&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=O&&n.toggleActions.split(" "),q="markers"in n?n.markers:qa.markers,$=P?0:parseFloat(Kn(D)["border"+y.p2+Us])||0,C=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ne=u_(D,P,y),Y=h_(D,P),j=0,se=0,_e=0,fe=or(D,y),Ce,Pe,Ie,Ge,z,Ve,me,Le,ge,H,ke,w,T,F,ee,Q,te,pe,ue,ce,be,He,J,lt,Ae,We,Ee,ve,Xe,nt,ht,de,re,L,ae,oe,Oe,De,st;if(C._startClamp=C._endClamp=!1,C._dir=y,m*=45,C.scroller=D,C.scroll=E?E.time.bind(E):fe,Ge=fe(),Qi&&fe.rec==null&&(fe.rec=Ge),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Dd=1,n.refreshPriority===-9999&&(_a=C)),K.tweenScroll=K.tweenScroll||{top:Ku(D,zt),left:Ku(D,gn)},C.tweenTo=Ce=K.tweenScroll[y.p],C.scrubDuration=function(ie){re=ia(ie)&&ie,re?de?de.duration(ie):de=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(C)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),nt=0,l||(l=i.vars.id)),M&&((!Mr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ft.style&&Se.set(P?[ft,In]:D,{scrollBehavior:"auto"}),tt.forEach(function(ie){return an(ie)&&ie.target===(P?mt.scrollingElement||In:D)&&(ie.smooth=!1)}),Ie=an(M.snapTo)?M.snapTo:M.snapTo==="labels"?d_(i):M.snapTo==="labelsDirectional"?p_(i):M.directional!==!1?function(ie,Fe){return ou(M.snapTo)(ie,rn()-se<500?0:Fe.direction)}:Se.utils.snap(M.snapTo),L=M.duration||{min:.1,max:2},L=Mr(L)?ha(L.min,L.max):ha(L,L),ae=Se.delayedCall(M.delay||re/2||.1,function(){var ie=fe(),Fe=rn()-se<500,Ne=Ce.tween;if((Fe||Math.abs(C.getVelocity())<10)&&!Ne&&!nl&&j!==ie){var Ye=(ie-Ve)/F,wt=i&&!O?i.totalProgress():Ye,it=Fe?0:(wt-ht)/(rn()-ea)*1e3||0,St=Se.utils.clamp(-Ye,1-Ye,$r(it/2)*it/.185),Ft=Ye+(M.inertia===!1?0:St),yt,Mt,dt=M,Rn=dt.onStart,b=dt.onInterrupt,I=dt.onComplete;if(yt=Ie(Ft,C),ia(yt)||(yt=Ft),Mt=Math.max(0,Math.round(Ve+yt*F)),ie<=me&&ie>=Ve&&Mt!==ie){if(Ne&&!Ne._initted&&Ne.data<=$r(Mt-ie))return;M.inertia===!1&&(St=yt-Ye),Ce(Mt,{duration:L($r(Math.max($r(Ft-wt),$r(yt-wt))*.185/it/.05||0)),ease:M.ease||"power3",data:$r(Mt-ie),onInterrupt:function(){return ae.restart(!0)&&b&&Yr(C,b)},onComplete:function(){C.update(),j=fe(),i&&!O&&(de?de.resetTo("totalProgress",yt,i._tTime/i._tDur):i.progress(yt)),nt=ht=i&&!O?i.totalProgress():C.progress,S&&S(C),I&&Yr(C,I)}},ie,St*F,Mt-ie-St*F),Rn&&Yr(C,Rn,Ce.tween)}}else C.isActive&&j!==ie&&ae.restart(!0)}).pause()),l&&(Ec[l]=C),h=C.trigger=xn(h||d!==!0&&d),st=h&&h._gsap&&h._gsap.stRevert,st&&(st=st(C)),d=d===!0?h:xn(d),Dn(a)&&(a={targets:h,className:a}),d&&(g===!1||g===$n||(g=!g&&d.parentNode&&d.parentNode.style&&Kn(d.parentNode).display==="flex"?!1:Nt),C.pin=d,Pe=Se.core.getCache(d),Pe.spacer?ee=Pe.pinState:(A&&(A=xn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=$a(A))),Pe.spacer=pe=A||mt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Pe.pinState=ee=$a(d)),n.force3D!==!1&&Se.set(d,{force3D:!0}),C.spacer=pe=Pe.spacer,Xe=Kn(d),lt=Xe[g+y.os2],ce=Se.getProperty(d),be=Se.quickSetter(d,y.a,Bt),El(d,pe,Xe),te=$a(d)),q){w=Mr(q)?Gu(q,Vu):Vu,H=Ya("scroller-start",l,D,y,w,0),ke=Ya("scroller-end",l,D,y,w,0,H),ue=H["offset"+y.op.d2];var ut=xn(Ji(D,"content")||D);Le=this.markerStart=Ya("start",l,ut,y,w,ue,0,E),ge=this.markerEnd=Ya("end",l,ut,y,w,ue,0,E),E&&(De=Se.quickSetter([Le,ge],y.a,Bt)),!N&&!(_i.length&&Ji(D,"fixedMarkers")===!0)&&(f_(P?ft:D),Se.set([H,ke],{force3D:!0}),We=Se.quickSetter(H,y.a,Bt),ve=Se.quickSetter(ke,y.a,Bt))}if(E){var Te=E.vars.onUpdate,xe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),Te&&Te.apply(E,xe||[])})}if(C.previous=function(){return Qe[Qe.indexOf(C)-1]},C.next=function(){return Qe[Qe.indexOf(C)+1]},C.revert=function(ie,Fe){if(!Fe)return C.kill(!0);var Ne=ie!==!1||!C.enabled,Ye=nn;Ne!==C.isReverted&&(Ne&&(oe=Math.max(fe(),C.scroll.rec||0),_e=C.progress,Oe=i&&i.progress()),Le&&[Le,ge,H,ke].forEach(function(wt){return wt.style.display=Ne?"none":"block"}),Ne&&(nn=C,C.update(Ne)),d&&(!R||!C.isActive)&&(Ne?g_(d,pe,ee):El(d,pe,Kn(d),Ae)),Ne||C.update(Ne),nn=Ye,C.isReverted=Ne)},C.refresh=function(ie,Fe,Ne,Ye){if(!((nn||!C.enabled)&&!Fe)){if(d&&ie&&ti){qt(r,"scrollEnd",Vd);return}!pn&&Z&&Z(C),nn=C,Ce.tween&&!Ne&&(Ce.tween.kill(),Ce.tween=0),de&&de.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var wt=ne(),it=Y(),St=E?E.duration():mi(D,y),Ft=F<=.01||!F,yt=0,Mt=Ye||0,dt=Mr(Ne)?Ne.end:n.end,Rn=n.endTrigger||h,b=Mr(Ne)?Ne.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),I=C.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,C),V=h&&Math.max(0,Qe.indexOf(C))||0,G=V,k,le,Me,Be,ye,we,ze,$e,Tt,kt,pt,ln,_t;for(q&&Mr(Ne)&&(ln=Se.getProperty(H,y.p),_t=Se.getProperty(ke,y.p));G-- >0;)we=Qe[G],we.end||we.refresh(0,1)||(nn=C),ze=we.pin,ze&&(ze===h||ze===d||ze===I)&&!we.isReverted&&(kt||(kt=[]),kt.unshift(we),we.revert(!0,!0)),we!==Qe[G]&&(V--,G--);for(an(b)&&(b=b(C)),b=ku(b,"start",C),Ve=Yu(b,h,wt,y,fe(),Le,H,C,it,$,N,St,E,C._startClamp&&"_startClamp")||(d?-.001:0),an(dt)&&(dt=dt(C)),Dn(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(Dn(b)?b.split(" ")[0]:"")+dt:(yt=bo(dt.substr(2),wt),dt=Dn(b)?b:(E?Se.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ve):Ve)+yt,Rn=h)),dt=ku(dt,"end",C),me=Math.max(Ve,Yu(dt||(Rn?"100% 0":St),Rn,wt,y,fe()+yt,ge,ke,C,it,$,N,St,E,C._endClamp&&"_endClamp"))||-.001,yt=0,G=V;G--;)we=Qe[G]||{},ze=we.pin,ze&&we.start-we._pinPush<=Ve&&!E&&we.end>0&&(k=we.end-(C._startClamp?Math.max(0,we.start):we.start),(ze===h&&we.start-we._pinPush<Ve||ze===I)&&isNaN(b)&&(yt+=k*(1-we.progress)),ze===d&&(Mt+=k));if(Ve+=yt,me+=yt,C._startClamp&&(C._startClamp+=yt),C._endClamp&&!pn&&(C._endClamp=me||-.001,me=Math.min(me,mi(D,y))),F=me-Ve||(Ve-=.01)&&.001,Ft&&(_e=Se.utils.clamp(0,1,Se.utils.normalize(Ve,me,oe))),C._pinPush=Mt,Le&&yt&&(k={},k[y.a]="+="+yt,I&&(k[y.p]="-="+fe()),Se.set([Le,ge],k)),d&&!(yc&&C.end>=mi(D,y)))k=Kn(d),Be=y===zt,Me=fe(),He=parseFloat(ce(y.a))+Mt,!St&&me>1&&(pt=(P?mt.scrollingElement||In:D).style,pt={style:pt,value:pt["overflow"+y.a.toUpperCase()]},P&&Kn(ft)["overflow"+y.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+y.a.toUpperCase()]="scroll")),El(d,pe,k),te=$a(d),le=Ri(d,!0),$e=N&&or(D,Be?gn:zt)(),g?(Ae=[g+y.os2,F+Mt+Bt],Ae.t=pe,G=g===Nt?Vo(d,y)+F+Mt:0,G&&(Ae.push(y.d,G+Bt),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+Bt)),bs(Ae),I&&Qe.forEach(function(qe){qe.pin===I&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),N&&fe(oe)):(G=Vo(d,y),G&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+Bt)),N&&(ye={top:le.top+(Be?Me-Ve:$e)+Bt,left:le.left+(Be?$e:Me-Ve)+Bt,boxSizing:"border-box",position:"fixed"},ye[Dr]=ye["max"+Us]=Math.ceil(le.width)+Bt,ye[Ur]=ye["max"+au]=Math.ceil(le.height)+Bt,ye[$n]=ye[$n+pa]=ye[$n+fa]=ye[$n+ma]=ye[$n+da]="0",ye[Nt]=k[Nt],ye[Nt+pa]=k[Nt+pa],ye[Nt+fa]=k[Nt+fa],ye[Nt+ma]=k[Nt+ma],ye[Nt+da]=k[Nt+da],Q=x_(ee,ye,R),pn&&fe(0)),i?(Tt=i._initted,xl(1),i.render(i.duration(),!0,!0),J=ce(y.a)-He+F+Mt,Ee=Math.abs(F-J)>1,N&&Ee&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Tt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xl(0)):J=F,pt&&(pt.value?pt.style["overflow"+y.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+y.a));else if(h&&fe()&&!E)for(le=h.parentNode;le&&le!==ft;)le._pinOffset&&(Ve-=le._pinOffset,me-=le._pinOffset),le=le.parentNode;kt&&kt.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Ve,C.end=me,Ge=z=pn?oe:fe(),!E&&!pn&&!Qi&&(Ge<oe&&fe(oe),C.scroll.rec=0),C.revert(!1,!0),se=rn(),ae&&(j=-1,ae.restart(!0)),nn=0,i&&O&&(i._initted||Oe)&&i.progress()!==Oe&&i.progress(Oe||0,!0).render(i.time(),!0,!0),(Ft||_e!==C.progress||E||_||i&&!i._initted)&&(i&&!O&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ve<-.001&&!_e?Se.utils.normalize(Ve,me,0):_e,!0),C.progress=Ft||(Ge-Ve)/F===_e?0:_e),d&&g&&(pe._pinOffset=Math.round(C.progress*J)),de&&de.invalidate(),isNaN(ln)||(ln-=Se.getProperty(H,y.p),_t-=Se.getProperty(ke,y.p),Ka(H,y,ln),Ka(Le,y,ln-(Ye||0)),Ka(ke,y,_t),Ka(ge,y,_t-(Ye||0))),Ft&&!pn&&C.update(),u&&!pn&&!T&&(T=!0,u(C),T=!1)}},C.getVelocity=function(){return(fe()-z)/(rn()-ea)*1e3||0},C.endAnimation=function(){Xs(C.callbackAnimation),i&&(de?de.progress(1):i.paused()?O||Xs(i,C.direction<0,1):Xs(i,i.reversed()))},C.labelToScroll=function(ie){return i&&i.labels&&(Ve||C.refresh()||Ve)+i.labels[ie]/i.duration()*F||0},C.getTrailing=function(ie){var Fe=Qe.indexOf(C),Ne=C.direction>0?Qe.slice(0,Fe).reverse():Qe.slice(Fe+1);return(Dn(ie)?Ne.filter(function(Ye){return Ye.vars.preventOverlaps===ie}):Ne).filter(function(Ye){return C.direction>0?Ye.end<=Ve:Ye.start>=me})},C.update=function(ie,Fe,Ne){if(!(E&&!Ne&&!ie)){var Ye=pn===!0?oe:C.scroll(),wt=ie?0:(Ye-Ve)/F,it=wt<0?0:wt>1?1:wt||0,St=C.progress,Ft,yt,Mt,dt,Rn,b,I,V;if(Fe&&(z=Ge,Ge=E?fe():Ye,M&&(ht=nt,nt=i&&!O?i.totalProgress():it)),m&&d&&!nn&&!Ga&&ti&&(!it&&Ve<Ye+(Ye-z)/(rn()-ea)*m?it=1e-4:it===1&&me>Ye+(Ye-z)/(rn()-ea)*m&&(it=.9999)),it!==St&&C.enabled){if(Ft=C.isActive=!!it&&it<1,yt=!!St&&St<1,b=Ft!==yt,Rn=b||!!it!=!!St,C.direction=it>St?1:-1,C.progress=it,Rn&&!nn&&(Mt=it&&!St?0:it===1?1:St===1?2:3,O&&(dt=!b&&W[Mt+1]!=="none"&&W[Mt+1]||W[Mt],V=i&&(dt==="complete"||dt==="reset"||dt in i))),v&&(b||V)&&(V||f||!i)&&(an(v)?v(C):C.getTrailing(v).forEach(function(Me){return Me.endAnimation()})),O||(de&&!nn&&!Ga?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",it,i._tTime/i._tDur):(de.vars.totalProgress=it,de.invalidate().restart())):i&&i.totalProgress(it,!!(nn&&(se||ie)))),d){if(ie&&g&&(pe.style[g+y.os2]=lt),!N)be(na(He+J*it));else if(Rn){if(I=!ie&&it>St&&me+1>Ye&&Ye+1>=mi(D,y),R)if(!ie&&(Ft||I)){var G=Ri(d,!0),k=Ye-Ve;$u(d,ft,G.top+(y===zt?k:0)+Bt,G.left+(y===zt?0:k)+Bt)}else $u(d,pe);bs(Ft||I?Q:te),Ee&&it<1&&Ft||be(He+(it===1&&!I?J:0))}}M&&!Ce.tween&&!nn&&!Ga&&ae.restart(!0),a&&(b||x&&it&&(it<1||!Sl))&&Ra(a.targets).forEach(function(Me){return Me.classList[Ft||x?"add":"remove"](a.className)}),o&&!O&&!ie&&o(C),Rn&&!nn?(O&&(V&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),o&&o(C)),(b||!Sl)&&(c&&b&&Yr(C,c),B[Mt]&&Yr(C,B[Mt]),x&&(it===1?C.kill(!1,1):B[Mt]=0),b||(Mt=it===1?1:3,B[Mt]&&Yr(C,B[Mt]))),U&&!Ft&&Math.abs(C.getVelocity())>(ia(U)?U:2500)&&(Xs(C.callbackAnimation),de?de.progress(1):Xs(i,dt==="reverse"?1:!it,1))):O&&o&&!nn&&o(C)}if(ve){var le=E?Ye/E.duration()*(E._caScrollDist||0):Ye;We(le+(H._isFlipped?1:0)),ve(le)}De&&De(-Ye/E.duration()*(E._caScrollDist||0))}},C.enable=function(ie,Fe){C.enabled||(C.enabled=!0,qt(D,"resize",ra),P||qt(D,"scroll",Kr),Z&&qt(r,"refreshInit",Z),ie!==!1&&(C.progress=_e=0,Ge=z=j=fe()),Fe!==!1&&C.refresh())},C.getTween=function(ie){return ie&&Ce?Ce.tween:de},C.setPositions=function(ie,Fe,Ne,Ye){if(E){var wt=E.scrollTrigger,it=E.duration(),St=wt.end-wt.start;ie=wt.start+St*ie/it,Fe=wt.start+St*Fe/it}C.refresh(!1,!1,{start:Bu(ie,Ne&&!!C._startClamp),end:Bu(Fe,Ne&&!!C._endClamp)},Ye),C.update()},C.adjustPinSpacing=function(ie){if(Ae&&ie){var Fe=Ae.indexOf(y.d)+1;Ae[Fe]=parseFloat(Ae[Fe])+ie+Bt,Ae[1]=parseFloat(Ae[1])+ie+Bt,bs(Ae)}},C.disable=function(ie,Fe){if(ie!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Fe||de&&de.pause(),oe=0,Pe&&(Pe.uncache=1),Z&&Xt(r,"refreshInit",Z),ae&&(ae.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!P)){for(var Ne=Qe.length;Ne--;)if(Qe[Ne].scroller===D&&Qe[Ne]!==C)return;Xt(D,"resize",ra),P||Xt(D,"scroll",Kr)}},C.kill=function(ie,Fe){C.disable(ie,Fe),de&&!Fe&&de.kill(),l&&delete Ec[l];var Ne=Qe.indexOf(C);Ne>=0&&Qe.splice(Ne,1),Ne===dn&&Ao>0&&dn--,Ne=0,Qe.forEach(function(Ye){return Ye.scroller===C.scroller&&(Ne=1)}),Ne||pn||Qi||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Fe||i.kill()),Le&&[Le,ge,H,ke].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),_a===C&&(_a=0),d&&(Pe&&(Pe.uncache=1),Ne=0,Qe.forEach(function(Ye){return Ye.pin===d&&Ne++}),Ne||(Pe.spacer=0)),n.onKill&&n.onKill(C)},Qe.push(C),C.enable(!1,!1),st&&st(C),i&&i.add&&!F){var Re=C.update;C.update=function(){C.update=Re,tt.cache++,Ve||me||C.refresh()},Se.delayedCall(.01,C.update),F=.01,Ve=me=0}else C.refresh();d&&__()},r.register=function(n){return fs||(Se=n||Fd(),Od()&&window.document&&r.enable(),fs=ta),fs},r.defaults=function(n){if(n)for(var i in n)qa[i]=n[i];return qa},r.disable=function(n,i){ta=0,Qe.forEach(function(o){return o[i?"kill":"disable"](n)}),Xt(et,"wheel",Kr),Xt(mt,"scroll",Kr),clearInterval(Ha),Xt(mt,"touchcancel",hi),Xt(ft,"touchstart",hi),Wa(Xt,mt,"pointerdown,touchstart,mousedown",zu),Wa(Xt,mt,"pointerup,touchend,mouseup",Hu),Go.kill(),Va(Xt);for(var s=0;s<tt.length;s+=3)Xa(Xt,tt[s],tt[s+1]),Xa(Xt,tt[s],tt[s+2])},r.enable=function(){if(et=window,mt=document,In=mt.documentElement,ft=mt.body,Se){if(Ra=Se.utils.toArray,ha=Se.utils.clamp,Mc=Se.core.context||hi,xl=Se.core.suppressOverwrites||hi,nu=et.history.scrollRestoration||"auto",Tc=et.pageYOffset||0,Se.core.globals("ScrollTrigger",r),ft){ta=1,Ts=document.createElement("div"),Ts.style.height="100vh",Ts.style.position="absolute",Yd(),c_(),Ut.register(Se),r.isTouch=Ut.isTouch,Gi=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sc=Ut.isTouch===1,qt(et,"wheel",Kr),tu=[et,mt,In,ft],Se.matchMedia?(r.matchMedia=function(u){var f=Se.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Se.addEventListener("matchMediaInit",function(){Xd(),lu()}),Se.addEventListener("matchMediaRevert",function(){return Wd()}),Se.addEventListener("matchMedia",function(){Ar(0,1),Gr("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return yl(),yl})):console.warn("Requires GSAP 3.11.0 or later"),yl(),qt(mt,"scroll",Kr);var n=ft.hasAttribute("style"),i=ft.style,s=i.borderTopStyle,o=Se.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ri(ft),zt.m=Math.round(a.top+zt.sc())||0,gn.m=Math.round(a.left+gn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),Ha=setInterval(Wu,250),Se.delayedCall(.5,function(){return Ga=0}),qt(mt,"touchcancel",hi),qt(ft,"touchstart",hi),Wa(qt,mt,"pointerdown,touchstart,mousedown",zu),Wa(qt,mt,"pointerup,touchend,mouseup",Hu),xc=Se.utils.checkPrefix("transform"),Ro.push(xc),fs=rn(),Go=Se.delayedCall(.2,Ar).pause(),ds=[mt,"visibilitychange",function(){var u=et.innerWidth,f=et.innerHeight;mt.hidden?(Ou=u,Fu=f):(Ou!==u||Fu!==f)&&ra()},mt,"DOMContentLoaded",Ar,et,"load",Ar,et,"resize",ra],Va(qt),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<tt.length;l+=3)Xa(Xt,tt[l],tt[l+1]),Xa(Xt,tt[l],tt[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Sl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ha)||(Ha=i)&&setInterval(Wu,i),"ignoreMobileResize"in n&&(Sc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Va(Xt)||Va(qt,n.autoRefreshEvents||"none"),Ud=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),o=tt.indexOf(s),a=zr(s);~o&&tt.splice(o,a?6:2),i&&(a?_i.unshift(et,i,ft,i,In,i):_i.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Dn(n)?xn(n):n).getBoundingClientRect(),a=o[s?Dr:Ur]*i||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},r.positionInViewport=function(n,i,s){Dn(n)&&(n=xn(n));var o=n.getBoundingClientRect(),a=o[s?Dr:Ur],l=i==null?a/2:i in Wo?Wo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hr.killAll||[];Hr={},i.forEach(function(s){return s()})}},r}();Je.version="3.15.1";Je.saveStyles=function(r){return r?Ra(r).forEach(function(e){if(e&&e.style){var t=Ln.indexOf(e);t>=0&&Ln.splice(t,5),Ln.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Mc())}}):Ln};Je.revert=function(r,e){return lu(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ra(!0):(fs||Je.register())&&Ar(!0)};Je.update=function(r){return++tt.cache&&Di(r===!0?2:0)};Je.clearScrollMemory=qd;Je.maxScroll=function(r,e){return mi(r,e?gn:zt)};Je.getScrollFunc=function(r,e){return or(xn(r),e?gn:zt)};Je.getById=function(r){return Ec[r]};Je.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ti};Je.snapDirectional=ou;Je.addEventListener=function(r,e){var t=Hr[r]||(Hr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=Hr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Se.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&an(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return an(s)&&(s=s(),qt(Je,"refresh",function(){return s=e.batchMax()})),Ra(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var ju=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===In&&r(ft,t)},ja={auto:1,scroll:1},M_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ja[(l=Kn(s)).overflowY]||ja[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!zr(s)&&(ja[(l=Kn(s)).overflowY]||ja[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Kd=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&M_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(mt,Ut.eventTypes[0],Ju,!1,!0)},onDisable:function(){return Xt(mt,Ut.eventTypes[0],Ju,!0)}})},y_=/(input|label|select|textarea)/i,Zu,Ju=function(e){var t=y_.test(e.target.tagName);(t||Zu)&&(e._gsapAllow=!0,Zu=t)},E_=function(e){Mr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=xn(e.target)||In,u=Se.core.globals().ScrollSmoother,f=u&&u.get(),h=Gi&&(e.content&&xn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=or(c,zt),g=or(c,gn),_=1,m=(Ut.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,S=an(i)?function(){return i(a)}:function(){return i||2.8},x,M,R=Kd(c,e.type,!0,s),A=function(){return M=!1},E=hi,U=hi,v=function(){l=mi(c,zt),U=ha(Gi?1:0,l),n&&(E=ha(0,mi(c,gn))),x=Ir},y=function(){h._gsap.y=na(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(M){requestAnimationFrame(A);var q=na(a.deltaY/2),$=U(d.v-q);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var C=na((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=tt.cache,Di()}return!0}d.offset&&y(),M=!0},D,K,P,N,B=function(){v(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Se.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Gi&&W.type==="touchmove"&&O()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){M=!1;var W=_;_=na((et.visualViewport&&et.visualViewport.scale||1)/m),D.pause(),W!==_&&Tl(c,_>1.01?!0:n?!1:"x"),K=g(),P=d(),v(),x=Ir},e.onRelease=e.onGestureStart=function(W,q){if(d.offset&&y(),!q)N.restart(!0);else{tt.cache++;var $=S(),C,Z;n&&(C=g(),Z=C+$*.05*-W.velocityX/.227,$*=ju(g,C,Z,mi(c,gn)),D.vars.scrollX=E(Z)),C=d(),Z=C+$*.05*-W.velocityY/.227,$*=ju(d,C,Z,mi(c,zt)),D.vars.scrollY=U(Z),D.invalidate().duration($).play(.01),(Gi&&D.vars.scrollY>=l||C>=l-1)&&Se.to({},{onUpdate:B,duration:$})}o&&o(W)},e.onWheel=function(){D._ts&&D.pause(),rn()-p>1e3&&(x=0,p=rn())},e.onChange=function(W,q,$,C,Z){if(Ir!==x&&v(),q&&n&&g(E(C[2]===q?K+(W.startX-W.x):g()+q-C[1])),$){d.offset&&y();var ne=Z[2]===$,Y=ne?P+W.startY-W.y:d()+$-Z[1],j=U(Y);ne&&Y!==j&&(P+=j-Y),d(j)}($||q)&&Di()},e.onEnable=function(){Tl(c,n?!1:"x"),Je.addEventListener("refresh",B),qt(et,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Tl(c,!0),Xt(et,"resize",B),Je.removeEventListener("refresh",B),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ut(e),a.iOS=Gi,Gi&&!d()&&d(1),Gi&&Se.ticker.add(hi),N=a._dc,D=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$d(d,d(),function(){return D.pause()})},onUpdate:Di,onComplete:N.vars.onComplete}),a};Je.sort=function(r){if(an(r))return Qe.sort(r);var e=et.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Ut(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return fn;if(r===!0&&fn)return fn.enable();if(r===!1){fn&&fn.kill(),fn=r;return}var e=r instanceof Ut?r:E_(r);return fn&&fn.target===e.target&&fn.kill(),zr(e.target)&&(fn=e),e};Je.core={_getVelocityProp:vc,_inputObserver:Kd,_scrollers:tt,_proxies:_i,bridge:{ss:function(){ti||Gr("scrollStart"),ti=rn()},ref:function(){return nn}}};Fd()&&Se.registerPlugin(Je);var T_="1.1.20";function jd(r,e,t){return Math.max(r,Math.min(e,t))}function b_(r,e,t){return(1-t)*r+t*e}function w_(r,e,t,n){return b_(r,e,1-Math.exp(-t*n))}function A_(r,e){return(r%e+e)%e}var R_=class{constructor(){Ue(this,"isRunning",!1);Ue(this,"value",0);Ue(this,"from",0);Ue(this,"to",0);Ue(this,"currentTime",0);Ue(this,"lerp");Ue(this,"duration");Ue(this,"easing");Ue(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=jd(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=w_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function C_(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var P_=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ue(this,"width",0);Ue(this,"height",0);Ue(this,"scrollHeight",0);Ue(this,"scrollWidth",0);Ue(this,"debouncedResize");Ue(this,"wrapperResizeObserver");Ue(this,"contentResizeObserver");Ue(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ue(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ue(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=C_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Zd=class{constructor(){Ue(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Qu=100/6,Oi={passive:!1},L_=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ue(this,"touchStart",{x:0,y:0});Ue(this,"lastDelta",{x:0,y:0});Ue(this,"window",{width:0,height:0});Ue(this,"emitter",new Zd);Ue(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ue(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ue(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ue(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Qu:n===2?this.window.width:1,s=n===1?Qu:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ue(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Oi),this.element.addEventListener("touchstart",this.onTouchStart,Oi),this.element.addEventListener("touchmove",this.onTouchMove,Oi),this.element.addEventListener("touchend",this.onTouchEnd,Oi)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Oi),this.element.removeEventListener("touchstart",this.onTouchStart,Oi),this.element.removeEventListener("touchmove",this.onTouchMove,Oi),this.element.removeEventListener("touchend",this.onTouchEnd,Oi)}},D_=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=A=>Math.min(1,1.001-Math.pow(2,-10*A)),lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:x=!1,anchors:M=!1,__experimental__naiveDimensions:R=!1}={}){Ue(this,"_isScrolling",!1);Ue(this,"_isStopped",!1);Ue(this,"_isLocked",!1);Ue(this,"_preventNextNativeScrollEvent",!1);Ue(this,"_resetVelocityTimeout",null);Ue(this,"__rafID",null);Ue(this,"isTouching");Ue(this,"time",0);Ue(this,"userData",{});Ue(this,"lastVelocity",0);Ue(this,"velocity",0);Ue(this,"direction",0);Ue(this,"options");Ue(this,"targetScroll");Ue(this,"animatedScroll");Ue(this,"animate",new R_);Ue(this,"emitter",new Zd);Ue(this,"dimensions");Ue(this,"virtualScroll");Ue(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ue(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ue(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i;return n instanceof HTMLAnchorElement&&((i=n.getAttribute("href"))==null?void 0:i.startsWith("#"))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(n,i)}}});Ue(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ue(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var p,S,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(h)>5;_&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ue(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ue(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=T_,(!r||r===document.documentElement)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:x,anchors:M,__experimental__naiveDimensions:R},this.dimensions=new P_(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new L_(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?h=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(h=r),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):r=jd(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?A_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cu="160",U_=0,eh=1,I_=2,Jd=1,N_=2,bi=3,lr=0,wn=1,Ci=2,er=0,ws=1,th=2,nh=3,ih=4,O_=5,Tr=100,F_=101,k_=102,rh=103,sh=104,B_=200,z_=201,H_=202,G_=203,wc=204,Ac=205,V_=206,W_=207,X_=208,q_=209,Y_=210,$_=211,K_=212,j_=213,Z_=214,J_=0,Q_=1,eg=2,Xo=3,tg=4,ng=5,ig=6,rg=7,Qd=0,sg=1,ag=2,tr=0,og=1,lg=2,cg=3,ug=4,hg=5,fg=6,ep=300,Is=301,Ns=302,Rc=303,Cc=304,il=306,Pc=1e3,oi=1001,Lc=1002,mn=1003,ah=1004,bl=1005,jn=1006,dg=1007,Pa=1008,nr=1009,pg=1010,mg=1011,uu=1012,tp=1013,$i=1014,Ki=1015,La=1016,np=1017,ip=1018,Nr=1020,_g=1021,li=1023,gg=1024,vg=1025,Or=1026,Os=1027,xg=1028,rp=1029,Sg=1030,sp=1031,ap=1033,wl=33776,Al=33777,Rl=33778,Cl=33779,oh=35840,lh=35841,ch=35842,uh=35843,op=36196,hh=37492,fh=37496,dh=37808,ph=37809,mh=37810,_h=37811,gh=37812,vh=37813,xh=37814,Sh=37815,Mh=37816,yh=37817,Eh=37818,Th=37819,bh=37820,wh=37821,Pl=36492,Ah=36494,Rh=36495,Mg=36283,Ch=36284,Ph=36285,Lh=36286,lp=3e3,Fr=3001,yg=3200,Eg=3201,cp=0,Tg=1,Jn="",Kt="srgb",Ni="srgb-linear",hu="display-p3",rl="display-p3-linear",qo="linear",Et="srgb",Yo="rec709",$o="p3",jr=7680,Dh=519,bg=512,wg=513,Ag=514,up=515,Rg=516,Cg=517,Pg=518,Lg=519,Uh=35044,Ih="300 es",Dc=1035,Li=2e3,Ko=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,Uc=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function _n(r,e,t){return Math.max(e,Math.min(t,r))}function Dg(r,e){return(r%e+e)%e}function Dl(r,e,t){return(1-t)*r+t*e}function Nh(r){return(r&r-1)===0&&r!==0}function Ic(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],M=i[7],R=i[2],A=i[5],E=i[8];return s[0]=o*_+a*S+l*R,s[3]=o*m+a*x+l*A,s[6]=o*p+a*M+l*E,s[1]=c*_+u*S+f*R,s[4]=c*m+u*x+f*A,s[7]=c*p+u*M+f*E,s[2]=h*_+d*S+g*R,s[5]=h*m+d*x+g*A,s[8]=h*p+d*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new rt;function hp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ug(){const r=jo("canvas");return r.style.display="block",r}const Oh={};function ga(r){r in Oh||(Oh[r]=!0,console.warn(r))}const Fh=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Za={[Ni]:{transfer:qo,primaries:Yo,toReference:r=>r,fromReference:r=>r},[Kt]:{transfer:Et,primaries:Yo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[rl]:{transfer:qo,primaries:$o,toReference:r=>r.applyMatrix3(kh),fromReference:r=>r.applyMatrix3(Fh)},[hu]:{transfer:Et,primaries:$o,toReference:r=>r.convertSRGBToLinear().applyMatrix3(kh),fromReference:r=>r.applyMatrix3(Fh).convertLinearToSRGB()}},Ig=new Set([Ni,rl]),gt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ig.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Za[e].toReference,i=Za[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Za[r].primaries},getTransfer:function(r){return r===Jn?qo:Za[r].transfer}};function As(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Il(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zr;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=jo("canvas")),Zr.width=e.width,Zr.height=e.height;const n=Zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ng=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nl(i[o].image)):s.push(Nl(i[o]))}else s=Nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class Hn extends Bs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,n=oi,i=oi,s=jn,o=Pa,a=li,l=nr,c=Hn.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ia(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fr?Kt:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?Fr:lp}set encoding(e){ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?Kt:Jn}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ep;Hn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,R=(p+1)/2,A=(u+h)/4,E=(f+_)/4,U=(g+m)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=E/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=U/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=U/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fg extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fr?Kt:Jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends Fg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pp extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kg extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*S);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const M=a*S;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new X,Bh=new Na;class Oa{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Qa.subVectors(this.max,Ys),Jr.subVectors(e.a,Ys),Qr.subVectors(e.b,Ys),es.subVectors(e.c,Ys),Fi.subVectors(Qr,Jr),ki.subVectors(es,Qr),mr.subVectors(Jr,es);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-mr.z,mr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,mr.z,0,-mr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-mr.y,mr.x,0];return!Fl(t,Jr,Qr,es,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,Jr,Qr,es,Qa))?!1:(eo.crossVectors(Fi,ki),t=[eo.x,eo.y,eo.z],Fl(t,Jr,Qr,es,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new X,new X,new X,new X,new X,new X,new X,new X],ni=new X,Ja=new Oa,Jr=new X,Qr=new X,es=new X,Fi=new X,ki=new X,mr=new X,Ys=new X,Qa=new X,eo=new X,_r=new X;function Fl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_r.fromArray(r,s);const a=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bg=new Oa,$s=new X,kl=new X;class fu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(kl)),this.expandByPoint($s.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new X,Bl=new X,to=new X,Bi=new X,zl=new X,no=new X,Hl=new X;class zg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bl.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Bl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=Bi.dot(this.direction),l=-Bi.dot(to),c=Bi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bl).addScaledVector(to,h),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){zl.subVectors(t,e),no.subVectors(n,e),Hl.crossVectors(zl,no);let o=this.direction.dot(Hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(Bi,no));if(l<0)return null;const c=a*this.direction.dot(zl.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(n,Cn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(n,Cn)),zi.normalize(),io.crossVectors(Cn,zi),i[0]=zi.x,i[4]=io.x,i[8]=Cn.x,i[1]=zi.y,i[5]=io.y,i[9]=Cn.y,i[2]=zi.z,i[6]=io.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],M=n[11],R=n[15],A=i[0],E=i[4],U=i[8],v=i[12],y=i[1],O=i[5],D=i[9],K=i[13],P=i[2],N=i[6],B=i[10],W=i[14],q=i[3],$=i[7],C=i[11],Z=i[15];return s[0]=o*A+a*y+l*P+c*q,s[4]=o*E+a*O+l*N+c*$,s[8]=o*U+a*D+l*B+c*C,s[12]=o*v+a*K+l*W+c*Z,s[1]=u*A+f*y+h*P+d*q,s[5]=u*E+f*O+h*N+d*$,s[9]=u*U+f*D+h*B+d*C,s[13]=u*v+f*K+h*W+d*Z,s[2]=g*A+_*y+m*P+p*q,s[6]=g*E+_*O+m*N+p*$,s[10]=g*U+_*D+m*B+p*C,s[14]=g*v+_*K+m*W+p*Z,s[3]=S*A+x*y+M*P+R*q,s[7]=S*E+x*O+M*N+R*$,s[11]=S*U+x*D+M*B+R*C,s[15]=S*v+x*K+M*W+R*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,R=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,A=t*S+n*x+i*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=S*E,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*E,e[4]=x*E,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*E,e[8]=M*E,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*E,e[12]=R*E,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,x=l*u,M=l*f,R=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+M)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(h+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+x)*E,i[9]=(m-S)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ts.set(i[0],i[1],i[2]).length();const o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ii.copy(this);const c=1/s,u=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Li){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===Li)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ko)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Li){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===Li)g=(o+s)*f,_=-2*f;else if(a===Ko)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new X,ii=new Ht,Hg=new X(0,0,0),Gg=new X(1,1,1),zi=new X,io=new X,Cn=new X,zh=new Ht,Hh=new Na;class kr{constructor(e=0,t=0,n=0,i=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class mp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vg=0;const Gh=new X,ns=new Na,yi=new Ht,ro=new X,Ks=new X,Wg=new X,Xg=new Na,Vh=new X(1,0,0),Wh=new X(0,1,0),Xh=new X(0,0,1),qg={type:"added"},Yg={type:"removed"};class Jt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new X,t=new kr,n=new Na,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new rt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ks,ro,this.up):yi.lookAt(ro,Ks,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(yi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new X(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new X,Ei=new X,Gl=new X,Ti=new X,is=new X,rs=new X,qh=new X,Vl=new X,Wl=new X,Xl=new X;let so=!1;class ai{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ri.subVectors(i,t),Ei.subVectors(n,t),Gl.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Ei),l=ri.dot(Gl),c=Ei.dot(Ei),u=Ei.dot(Gl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,n,i,s,o,a,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Ei.subVectors(e,t),ri.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ri.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;is.subVectors(i,n),rs.subVectors(s,n),Vl.subVectors(e,n);const l=is.dot(Vl),c=rs.dot(Vl);if(l<=0&&c<=0)return t.copy(n);Wl.subVectors(e,i);const u=is.dot(Wl),f=rs.dot(Wl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);Xl.subVectors(e,s);const d=is.dot(Xl),g=rs.dot(Xl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return qh.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(qh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function ql(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=Dg(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ql(o,s,e+1/3),this.g=ql(o,s,e),this.b=ql(o,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Il(e.r),this.g=Il(e.g),this.b=Il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return gt.fromWorkingColorSpace(tn.copy(this),e),Math.round(_n(tn.r*255,0,255))*65536+Math.round(_n(tn.g*255,0,255))*256+Math.round(_n(tn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,s=tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Kt){gt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ao);const n=Dl(Hi.h,ao.h,t),i=Dl(Hi.s,ao.s,t),s=Dl(Hi.l,ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new at;at.NAMES=_p;let $g=0;class Fa extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=ws,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ac,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gp extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new X,oo=new ct;class gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uh&&(e.usage=this.usage),e}}class vp extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xp extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vi extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kg=0;const Xn=new Ht,Yl=new Jt,ss=new X,Pn=new Oa,js=new Oa,Wt=new X;class ur extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?xp:vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Pn.min,js.min),Pn.expandByPoint(Wt),Wt.addVectors(Pn.max,js.max),Pn.expandByPoint(Wt)):(Pn.expandByPoint(js.min),Pn.expandByPoint(js.max))}Pn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Wt.add(ss)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new X,u[y]=new X;const f=new X,h=new X,d=new X,g=new ct,_=new ct,m=new ct,p=new X,S=new X;function x(y,O,D){f.fromArray(i,y*3),h.fromArray(i,O*3),d.fromArray(i,D*3),g.fromArray(o,y*2),_.fromArray(o,O*2),m.fromArray(o,D*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(K),S.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(K),c[y].add(p),c[O].add(p),c[D].add(p),u[y].add(S),u[O].add(S),u[D].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let y=0,O=M.length;y<O;++y){const D=M[y],K=D.start,P=D.count;for(let N=K,B=K+P;N<B;N+=3)x(n[N+0],n[N+1],n[N+2])}const R=new X,A=new X,E=new X,U=new X;function v(y){E.fromArray(s,y*3),U.copy(E);const O=c[y];R.copy(O),R.sub(E.multiplyScalar(E.dot(O))).normalize(),A.crossVectors(U,O);const K=A.dot(u[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=K}for(let y=0,O=M.length;y<O;++y){const D=M[y],K=D.start,P=D.count;for(let N=K,B=K+P;N<B;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new gi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new Ht,gr=new zg,lo=new fu,$h=new X,as=new X,os=new X,ls=new X,$l=new X,co=new X,uo=new ct,ho=new ct,fo=new ct,Kh=new X,jh=new X,Zh=new X,po=new X,mo=new X;class Fn extends Jt{constructor(e=new ur,t=new gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($l.fromBufferAttribute(f,e),o?co.addScaledVector($l,u):co.addScaledVector($l.sub(t),u))}t.add(co)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(lo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(lo,$h)===null||gr.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Yh.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,R=x;M<R;M+=3){const A=a.getX(M),E=a.getX(M+1),U=a.getX(M+2);i=_o(this,p,e,n,c,u,f,A,E,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=_o(this,o,e,n,c,u,f,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,R=x;M<R;M+=3){const A=M,E=M+1,U=M+2;i=_o(this,p,e,n,c,u,f,A,E,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,M=m+2;i=_o(this,o,e,n,c,u,f,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jg(r,e,t,n,i,s,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===lr,a),l===null)return null;mo.copy(a),mo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:r}}function _o(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,as),r.getVertexPosition(l,os),r.getVertexPosition(c,ls);const u=jg(r,e,t,n,as,os,ls,po);if(u){i&&(uo.fromBufferAttribute(i,a),ho.fromBufferAttribute(i,l),fo.fromBufferAttribute(i,c),u.uv=ai.getInterpolation(po,as,os,ls,uo,ho,fo,new ct)),s&&(uo.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,l),fo.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(po,as,os,ls,uo,ho,fo,new ct),u.uv2=u.uv1),o&&(Kh.fromBufferAttribute(o,a),jh.fromBufferAttribute(o,l),Zh.fromBufferAttribute(o,c),u.normal=ai.getInterpolation(po,as,os,ls,Kh,jh,Zh,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};ai.getNormal(as,os,ls,f.normal),u.face=f}return u}class zs extends ur{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(f,2));function g(_,m,p,S,x,M,R,A,E,U,v){const y=M/E,O=R/U,D=M/2,K=R/2,P=A/2,N=E+1,B=U+1;let W=0,q=0;const $=new X;for(let C=0;C<B;C++){const Z=C*O-K;for(let ne=0;ne<N;ne++){const Y=ne*y-D;$[_]=Y*S,$[m]=Z*x,$[p]=P,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(ne/E),f.push(1-C/U),W+=1}}for(let C=0;C<U;C++)for(let Z=0;Z<E;Z++){const ne=h+Z+N*C,Y=h+Z+N*(C+1),j=h+(Z+1)+N*(C+1),se=h+(Z+1)+N*C;l.push(ne,Y,se),l.push(Y,j,se),q+=6}a.addGroup(d,q,v),d+=q,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(r){const e={};for(let t=0;t<r.length;t++){const n=Fs(r[t]);for(const i in n)e[i]=n[i]}return e}function Zg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sp(r){return r.getRenderTarget()===null?r.outputColorSpace:gt.workingColorSpace}const Jg={clone:Fs,merge:hn};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends Mp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class t0 extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn(cs,us,e,t);i.layers=this.layers,this.add(i);const s=new Nn(cs,us,e,t);s.layers=this.layers,this.add(s);const o=new Nn(cs,us,e,t);o.layers=this.layers,this.add(o);const a=new Nn(cs,us,e,t);a.layers=this.layers,this.add(a);const l=new Nn(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new Nn(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yp extends Hn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n0 extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fr?Kt:Jn),this.texture=new yp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zs(5,5,5),s=new Wr({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:er});s.uniforms.tEquirect.value=t;const o=new Fn(i,s),a=t.minFilter;return t.minFilter===Pa&&(t.minFilter=jn),new t0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Kl=new X,i0=new X,r0=new rt;class yr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kl.subVectors(n,t).cross(i0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r0.getNormalMatrix(e),i=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new fu,go=new X;class du{constructor(e=new yr,t=new yr,n=new yr,i=new yr,s=new yr,o=new yr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,m-d,M-p).normalize(),n[1].setComponents(l+s,h+c,m+d,M+p).normalize(),n[2].setComponents(l+o,h+u,m+g,M+S).normalize(),n[3].setComponents(l-o,h-u,m-g,M-S).normalize(),n[4].setComponents(l-a,h-f,m-_,M-x).normalize(),t===Li)n[5].setComponents(l+a,h+f,m+_,M+x).normalize();else if(t===Ko)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(go.x=i.normal.x>0?e.max.x:e.min.x,go.y=i.normal.y>0?e.max.y:e.min.y,go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function s0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(f,c),d.count===-1&&g.length===0&&r.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class sl extends ur{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,M=S+c*(p+1),R=S+1+c*(p+1),A=S+1+c*p;d.push(x,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,av=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:a0,alphahash_pars_fragment:o0,alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:u0,alphatest_pars_fragment:h0,aomap_fragment:f0,aomap_pars_fragment:d0,batching_pars_vertex:p0,batching_vertex:m0,begin_vertex:_0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:x0,bumpmap_pars_fragment:S0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:T0,color_fragment:b0,color_pars_fragment:w0,color_pars_vertex:A0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:U0,emissivemap_fragment:I0,emissivemap_pars_fragment:N0,colorspace_fragment:O0,colorspace_pars_fragment:F0,envmap_fragment:k0,envmap_common_pars_fragment:B0,envmap_pars_fragment:z0,envmap_pars_vertex:H0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:V0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_fragment:$0,lightmap_pars_fragment:K0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:ev,lights_toon_pars_fragment:tv,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:rv,lights_physical_pars_fragment:sv,lights_fragment_begin:av,lights_fragment_maps:ov,lights_fragment_end:lv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:fv,map_fragment:dv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:_v,metalnessmap_fragment:gv,metalnessmap_pars_fragment:vv,morphcolor_vertex:xv,morphnormal_vertex:Sv,morphtarget_pars_vertex:Mv,morphtarget_vertex:yv,normal_fragment_begin:Ev,normal_fragment_maps:Tv,normal_pars_fragment:bv,normal_pars_vertex:wv,normal_vertex:Av,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Dv,opaque_fragment:Uv,packing:Iv,premultiplied_alpha_fragment:Nv,project_vertex:Ov,dithering_fragment:Fv,dithering_pars_fragment:kv,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Wv,skinbase_vertex:Xv,skinning_pars_vertex:qv,skinning_vertex:Yv,skinnormal_vertex:$v,specularmap_fragment:Kv,specularmap_pars_fragment:jv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:Qv,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:rx,background_vert:sx,background_frag:ax,backgroundCube_vert:ox,backgroundCube_frag:lx,cube_vert:cx,cube_frag:ux,depth_vert:hx,depth_frag:fx,distanceRGBA_vert:dx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:_x,linedashed_vert:gx,linedashed_frag:vx,meshbasic_vert:xx,meshbasic_frag:Sx,meshlambert_vert:Mx,meshlambert_frag:yx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:bx,meshnormal_frag:wx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Lx,meshtoon_frag:Dx,points_vert:Ux,points_frag:Ix,shadow_vert:Nx,shadow_frag:Ox,sprite_vert:Fx,sprite_frag:kx},he={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},fi={basic:{uniforms:hn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:hn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:hn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:hn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:hn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:hn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:hn([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:hn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:hn([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:hn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:hn([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:hn([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:hn([he.lights,he.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};fi.physical={uniforms:hn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const vo={r:0,b:0,g:0};function Bx(r,e,t,n,i,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===il)?(u===void 0&&(u=new Fn(new zs(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Fs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=gt.getTransfer(x.colorSpace)!==Et,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Fn(new sl(2,2),new Wr({name:"BackgroundMaterial",uniforms:Fs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=gt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(vo,Sp(r)),n.buffers.color.setClear(vo.r,vo.g,vo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function zx(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(P,N,B,W,q){let $=!1;if(o){const C=_(W,B,N);c!==C&&(c=C,d(c.object)),$=p(P,W,B,q),$&&S(P,W,B,q)}else{const C=N.wireframe===!0;(c.geometry!==W.id||c.program!==B.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=B.id,c.wireframe=C,$=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(P,N,B,W),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,N,B){const W=B.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let $=q[N.id];$===void 0&&($={},q[N.id]=$);let C=$[W];return C===void 0&&(C=m(h()),$[W]=C),C}function m(P){const N=[],B=[],W=[];for(let q=0;q<i;q++)N[q]=0,B[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:P,attributes:{},index:null}}function p(P,N,B,W){const q=c.attributes,$=N.attributes;let C=0;const Z=B.getAttributes();for(const ne in Z)if(Z[ne].location>=0){const j=q[ne];let se=$[ne];if(se===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function S(P,N,B,W){const q={},$=N.attributes;let C=0;const Z=B.getAttributes();for(const ne in Z)if(Z[ne].location>=0){let j=$[ne];j===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const se={};se.attribute=j,j&&j.data&&(se.data=j.data),q[ne]=se,C++}c.attributes=q,c.attributesNum=C,c.index=W}function x(){const P=c.newAttributes;for(let N=0,B=P.length;N<B;N++)P[N]=0}function M(P){R(P,0)}function R(P,N){const B=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;B[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),q[P]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function A(){const P=c.newAttributes,N=c.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==P[B]&&(r.disableVertexAttribArray(B),N[B]=0)}function E(P,N,B,W,q,$,C){C===!0?r.vertexAttribIPointer(P,N,B,q,$):r.vertexAttribPointer(P,N,B,W,q,$)}function U(P,N,B,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=W.attributes,$=B.getAttributes(),C=N.defaultAttributeValues;for(const Z in $){const ne=$[Z];if(ne.location>=0){let Y=q[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const j=Y.normalized,se=Y.itemSize,_e=t.get(Y);if(_e===void 0)continue;const fe=_e.buffer,Ce=_e.type,Pe=_e.bytesPerElement,Ie=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||Y.gpuType===tp);if(Y.isInterleavedBufferAttribute){const Ge=Y.data,z=Ge.stride,Ve=Y.offset;if(Ge.isInstancedInterleavedBuffer){for(let me=0;me<ne.locationSize;me++)R(ne.location+me,Ge.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let me=0;me<ne.locationSize;me++)M(ne.location+me);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let me=0;me<ne.locationSize;me++)E(ne.location+me,se/ne.locationSize,Ce,j,z*Pe,(Ve+se/ne.locationSize*me)*Pe,Ie)}else{if(Y.isInstancedBufferAttribute){for(let Ge=0;Ge<ne.locationSize;Ge++)R(ne.location+Ge,Y.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ge=0;Ge<ne.locationSize;Ge++)M(ne.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let Ge=0;Ge<ne.locationSize;Ge++)E(ne.location+Ge,se/ne.locationSize,Ce,j,se*Pe,se/ne.locationSize*Ge*Pe,Ie)}}else if(C!==void 0){const j=C[Z];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(ne.location,j);break;case 3:r.vertexAttrib3fv(ne.location,j);break;case 4:r.vertexAttrib4fv(ne.location,j);break;default:r.vertexAttrib1fv(ne.location,j)}}}}A()}function v(){D();for(const P in a){const N=a[P];for(const B in N){const W=N[B];for(const q in W)g(W[q].object),delete W[q];delete N[B]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const B in N){const W=N[B];for(const q in W)g(W[q].object),delete W[q];delete N[B]}delete a[P.id]}function O(P){for(const N in a){const B=a[N];if(B[P.id]===void 0)continue;const W=B[P.id];for(const q in W)g(W[q].object),delete W[q];delete B[P.id]}}function D(){K(),u=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:K,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Hx(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Gx(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),R=x&&M,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:A}}function Vx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new yr,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,d);for(let R=0;R!==x;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wx(r){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=Is:a===Cc&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n0(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Tp extends Mp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Jh=[.125,.215,.35,.446,.526,.582],br=20,jl=new Tp,Qh=new at;let Zl=null,Jl=0,Ql=0;const Er=(1+Math.sqrt(5))/2,hs=1/Er,ef=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Er,hs),new X(0,Er,-hs),new X(hs,0,Er),new X(-hs,0,Er),new X(Er,hs,0),new X(-Er,hs,0)];class tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Jl,Ql),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:La,format:li,colorSpace:Ni,depthBuffer:!1},i=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xx(s)),this._blurMaterial=qx(s,e,t)}return i}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,jl)}_sceneToCubeUV(e,t,n,i){const a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qh),u.toneMapping=tr,u.autoClear=!1;const d=new gp({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new Fn(new zs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Qh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;xo(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ef[(i-1)%ef.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let S=0;for(let E=0;E<br;++E){const U=E/_,v=Math.exp(-U*U/2);p.push(v),E===0?S+=v:E<m&&(S+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-gs?i-x+gs:0),A=4*(this._cubeSize-M);xo(t,R,A,3*M,2*M),l.setRenderTarget(t),l.render(f,jl)}}function Xx(r){const e=[],t=[],n=[];let i=r;const s=r-gs+1+Jh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-gs?l=Jh[o-r+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,U=A>2?0:-1,v=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];S.set(v,_*g*A),x.set(h,m*g*A);const y=[A,A,A,A,A,A];M.set(y,p*g*A)}const R=new ur;R.setAttribute("position",new gi(S,_)),R.setAttribute("uv",new gi(x,m)),R.setAttribute("faceIndex",new gi(M,p)),e.push(R),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(r,e,t){const n=new Vr(r,e,t);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qx(r,e,t){const n=new Float32Array(br),i=new X(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function rf(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function sf(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rc||l===Cc,u=l===Is||l===Ns;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new tf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new tf(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $x(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kx(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,M=S.length;x<M;x+=3){const R=S[x+0],A=S[x+1],E=S[x+2];h.push(R,A,A,E,E,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const R=x+0,A=x+1,E=x+2;h.push(R,A,A,E,E,R)}}else return;const m=new(hp(h)?xp:vp)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jx(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Zx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jx(r,e){return r[0]-e[0]}function Qx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function eS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let N=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),R===!0&&(v=3);let y=u.attributes.position.count*v,O=1;y>e.maxTextureSize&&(O=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const D=new Float32Array(y*O*4*_),K=new pp(D,y,O,_);K.type=Ki,K.needsUpdate=!0;const P=v*4;for(let B=0;B<_;B++){const W=A[B],q=E[B],$=U[B],C=y*O*4*B;for(let Z=0;Z<W.count;Z++){const ne=Z*P;x===!0&&(o.fromBufferAttribute(W,Z),D[C+ne+0]=o.x,D[C+ne+1]=o.y,D[C+ne+2]=o.z,D[C+ne+3]=0),M===!0&&(o.fromBufferAttribute(q,Z),D[C+ne+4]=o.x,D[C+ne+5]=o.y,D[C+ne+6]=o.z,D[C+ne+7]=0),R===!0&&(o.fromBufferAttribute($,Z),D[C+ne+8]=o.x,D[C+ne+9]=o.y,D[C+ne+10]=o.z,D[C+ne+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:K,size:new ct(y,O)},s.set(u,m),u.addEventListener("dispose",N)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const R=_[M];R[0]=M,R[1]=h[M]}_.sort(Qx);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Jx);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const R=a[M],A=R[0],E=R[1];A!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+M)!==m[A]&&u.setAttribute("morphTarget"+M,m[A]),p&&u.getAttribute("morphNormal"+M)!==p[A]&&u.setAttribute("morphNormal"+M,p[A]),i[M]=E,S+=E):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function tS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bp extends Hn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Or,u!==Or&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Or&&(n=$i),n===void 0&&u===Os&&(n=Nr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wp=new Hn,Ap=new bp(1,1);Ap.compareFunction=up;const Rp=new pp,Cp=new kg,Pp=new yp,af=[],of=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function Hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=af[i];if(s===void 0&&(s=new Float32Array(i),af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function al(r,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function nS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function iS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function rS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function sS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function aS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;uf.set(n),r.uniformMatrix2fv(this.addr,!1,uf),Vt(t,n)}}function oS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;cf.set(n),r.uniformMatrix3fv(this.addr,!1,cf),Vt(t,n)}}function lS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;lf.set(n),r.uniformMatrix4fv(this.addr,!1,lf),Vt(t,n)}}function cS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function uS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function hS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function dS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function _S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function gS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Ap:wp;t.setTexture2D(e||s,i)}function vS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cp,i)}function xS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pp,i)}function SS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rp,i)}function MS(r){switch(r){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return sS;case 35674:return aS;case 35675:return oS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return uS;case 35668:case 35672:return hS;case 35669:case 35673:return fS;case 5125:return dS;case 36294:return pS;case 36295:return mS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return SS}}function yS(r,e){r.uniform1fv(this.addr,e)}function ES(r,e){const t=Hs(e,this.size,2);r.uniform2fv(this.addr,t)}function TS(r,e){const t=Hs(e,this.size,3);r.uniform3fv(this.addr,t)}function bS(r,e){const t=Hs(e,this.size,4);r.uniform4fv(this.addr,t)}function wS(r,e){const t=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AS(r,e){const t=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function RS(r,e){const t=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CS(r,e){r.uniform1iv(this.addr,e)}function PS(r,e){r.uniform2iv(this.addr,e)}function LS(r,e){r.uniform3iv(this.addr,e)}function DS(r,e){r.uniform4iv(this.addr,e)}function US(r,e){r.uniform1uiv(this.addr,e)}function IS(r,e){r.uniform2uiv(this.addr,e)}function NS(r,e){r.uniform3uiv(this.addr,e)}function OS(r,e){r.uniform4uiv(this.addr,e)}function FS(r,e,t){const n=this.cache,i=e.length,s=al(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wp,s[o])}function kS(r,e,t){const n=this.cache,i=e.length,s=al(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cp,s[o])}function BS(r,e,t){const n=this.cache,i=e.length,s=al(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Pp,s[o])}function zS(r,e,t){const n=this.cache,i=e.length,s=al(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rp,s[o])}function HS(r){switch(r){case 5126:return yS;case 35664:return ES;case 35665:return TS;case 35666:return bS;case 35674:return wS;case 35675:return AS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return DS;case 5125:return US;case 36294:return IS;case 36295:return NS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}class GS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=MS(t.type)}}class VS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HS(t.type)}}class WS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function hf(r,e){r.seq.push(e),r.map[e.id]=e}function XS(r,e,t){const n=r.name,i=n.length;for(ec.lastIndex=0;;){const s=ec.exec(n),o=ec.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hf(t,c===void 0?new GS(a,r,e):new VS(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new WS(a),hf(t,f)),t=f}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);XS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ff(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qS=37297;let YS=0;function $S(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function KS(r){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(r);let n;switch(e===t?n="":e===$o&&t===Yo?n="LinearDisplayP3ToLinearSRGB":e===Yo&&t===$o&&(n="LinearSRGBToLinearDisplayP3"),r){case Ni:case rl:return[n,"LinearTransferOETF"];case Kt:case hu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function df(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$S(r.getShaderSource(e),o)}else return i}function jS(r,e){const t=KS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ZS(r,e){let t;switch(e){case og:t="Linear";break;case lg:t="Reinhard";break;case cg:t="OptimizedCineon";break;case ug:t="ACESFilmic";break;case fg:t="AgX";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function QS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function eM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function vs(r){return r!==""}function pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(r){return r.replace(nM,rM)}const iM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rM(r,e){let t=Ze[e];if(t===void 0){const n=iM.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(r){return r.replace(sM,aM)}function aM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Ns:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case sg:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oM(t),c=lM(t),u=cM(t),f=uM(t),h=hM(t),d=t.isWebGL2?"":JS(t),g=QS(t),_=eM(s),m=i.createProgram();let p,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),S.length>0&&(S+=`
`)):(p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),S=[d,gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==tr?ZS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,jS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),o=Nc(o),o=pf(o,t),o=mf(o,t),a=Nc(a),a=pf(a,t),a=mf(a,t),o=_f(o),a=_f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=x+p+o,R=x+S+a,A=ff(i,i.VERTEX_SHADER,M),E=ff(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(D){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(E).trim();let B=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,E);else{const q=df(i,A,"vertex"),$=df(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||N==="")&&(W=!1);W&&(D.diagnostics={runnable:B,programLog:K,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:S}})}i.deleteShader(A),i.deleteShader(E),v=new Po(i,m),y=tM(i,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,qS)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=E,this}let dM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mM(e),t.set(e,n)),n}}class mM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function _M(r,e,t,n,i,s,o){const a=new mp,l=new pM,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,y,O,D,K){const P=D.fog,N=K.geometry,B=v.isMeshStandardMaterial?D.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),q=W&&W.mapping===il?W.image.height:null,$=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const C=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=C!==void 0?C.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let Y,j,se,_e;if($){const xe=fi[$];Y=xe.vertexShader,j=xe.fragmentShader}else Y=v.vertexShader,j=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const fe=r.getRenderTarget(),Ce=K.isInstancedMesh===!0,Pe=K.isBatchedMesh===!0,Ie=!!v.map,Ge=!!v.matcap,z=!!W,Ve=!!v.aoMap,me=!!v.lightMap,Le=!!v.bumpMap,ge=!!v.normalMap,H=!!v.displacementMap,ke=!!v.emissiveMap,w=!!v.metalnessMap,T=!!v.roughnessMap,F=v.anisotropy>0,ee=v.clearcoat>0,Q=v.iridescence>0,te=v.sheen>0,pe=v.transmission>0,ue=F&&!!v.anisotropyMap,ce=ee&&!!v.clearcoatMap,be=ee&&!!v.clearcoatNormalMap,He=ee&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,lt=Q&&!!v.iridescenceThicknessMap,Ae=te&&!!v.sheenColorMap,We=te&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,ve=!!v.specularColorMap,Xe=!!v.specularIntensityMap,nt=pe&&!!v.transmissionMap,ht=pe&&!!v.thicknessMap,de=!!v.gradientMap,re=!!v.alphaMap,L=v.alphaTest>0,ae=!!v.alphaHash,oe=!!v.extensions,Oe=!!N.attributes.uv1,De=!!N.attributes.uv2,st=!!N.attributes.uv3;let ut=tr;return v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ut=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:j,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pe,instancing:Ce,instancingColor:Ce&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ni,map:Ie,matcap:Ge,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:q,aoMap:Ve,lightMap:me,bumpMap:Le,normalMap:ge,displacementMap:h&&H,emissiveMap:ke,normalMapObjectSpace:ge&&v.normalMapType===Tg,normalMapTangentSpace:ge&&v.normalMapType===cp,metalnessMap:w,roughnessMap:T,anisotropy:F,anisotropyMap:ue,clearcoat:ee,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:He,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:lt,sheen:te,sheenColorMap:Ae,sheenRoughnessMap:We,specularMap:Ee,specularColorMap:ve,specularIntensityMap:Xe,transmission:pe,transmissionMap:nt,thicknessMap:ht,gradientMap:de,opaque:v.transparent===!1&&v.blending===ws,alphaMap:re,alphaTest:L,alphaHash:ae,combine:v.combine,mapUv:Ie&&_(v.map.channel),aoMapUv:Ve&&_(v.aoMap.channel),lightMapUv:me&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:H&&_(v.displacementMap.channel),emissiveMapUv:ke&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:T&&_(v.roughnessMap.channel),anisotropyMapUv:ue&&_(v.anisotropyMap.channel),clearcoatMapUv:ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(v.sheenRoughnessMap.channel),specularMapUv:Ee&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:Xe&&_(v.specularIntensityMap.channel),transmissionMapUv:nt&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:De,vertexUv3s:st,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(Ie||re),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ci,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)y.push(O),y.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(S(y,v),x(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){const y=g[v.type];let O;if(y){const D=fi[y];O=Jg.clone(D.uniforms)}else O=v.uniforms;return O}function R(v,y){let O;for(let D=0,K=c.length;D<K;D++){const P=c[D];if(P.cacheKey===y){O=P,++O.usedTimes;break}}return O===void 0&&(O=new fM(r,y,v,s),c.push(O)),O}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:U}}function gM(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||vM),n.length>1&&n.sort(h||vf),i.length>1&&i.sort(h||vf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function xM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new xf,r.set(n,[o])):i>=s.length?(o=new xf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function SM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new at};break;case"SpotLight":t={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function MM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yM=0;function EM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TM(r,e){const t=new SM,n=MM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const s=new X,o=new Ht,a=new Ht;function l(u,f){let h=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,p=0,S=0,x=0,M=0,R=0,A=0,E=0,U=0,v=0;u.sort(EM);const y=f===!0?Math.PI:1;for(let D=0,K=u.length;D<K;D++){const P=u[D],N=P.color,B=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B*y,d+=N.g*B*y,g+=N.b*B*y;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],B);v++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const C=P.shadow,Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=P.shadow.matrix,M++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(N).multiplyScalar(B*y),$.distance=W,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[p]=$;const C=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,C.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[p]=C.matrix,P.castShadow){const Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=q,A++}p++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(N).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=$,S++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*y),$.distance=P.distance,$.decay=P.decay,P.castShadow){const C=P.shadow,Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(B*y),$.groundColor.copy(P.groundColor).multiplyScalar(B*y),i.hemi[x]=$,x++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==S||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==R||O.numSpotShadows!==A||O.numSpotMaps!==E||O.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=v,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=S,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=R,O.numSpotShadows=A,O.numSpotMaps=E,O.numLightProbes=v,i.version=yM++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const M=u[S];if(M.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),h++}else if(M.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Sf(r,e){const t=new TM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bM(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Sf(r,e),t.set(s,[l])):o>=a.length?(l=new Sf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class wM extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PM(r,e,t){let n=new du;const i=new ct,s=new ct,o=new Yt,a=new wM({depthPacking:Eg}),l=new AM,c={},u=t.maxTextureSize,f={[lr]:wn,[wn]:lr,[Ci]:Ci},h=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ur;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let p=this.type;this.render=function(A,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),y=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),D=r.state;D.setBlending(er),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const K=p!==bi&&this.type===bi,P=p===bi&&this.type!==bi;for(let N=0,B=A.length;N<B;N++){const W=A[N],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const $=q.getFrameExtents();if(i.multiply($),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,q.mapSize.y=s.y)),q.map===null||K===!0||P===!0){const Z=this.type!==bi?{minFilter:mn,magFilter:mn}:{};q.map!==null&&q.map.dispose(),q.map=new Vr(i.x,i.y,Z),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const C=q.getViewportCount();for(let Z=0;Z<C;Z++){const ne=q.getViewport(Z);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o),q.updateMatrices(W,Z),n=q.getFrustum(),M(E,U,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&S(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,O)};function S(A,E){const U=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vr(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,U,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,U,d,_,null)}function x(A,E,U,v){let y=null;const O=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)y=O;else if(y=U.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=y.uuid,K=E.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let N=P[K];N===void 0&&(N=y.clone(),P[K]=N,E.addEventListener("dispose",R)),y=N}if(y.visible=E.visible,y.wireframe=E.wireframe,v===bi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=r.properties.get(y);D.light=U}return y}function M(A,E,U,v,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const K=e.update(A),P=A.material;if(Array.isArray(P)){const N=K.groups;for(let B=0,W=N.length;B<W;B++){const q=N[B],$=P[q.materialIndex];if($&&$.visible){const C=x(A,$,v,y);A.onBeforeShadow(r,A,E,U,K,C,q),r.renderBufferDirect(U,null,K,C,A,q),A.onAfterShadow(r,A,E,U,K,C,q)}}}else if(P.visible){const N=x(A,P,v,y);A.onBeforeShadow(r,A,E,U,K,N,null),r.renderBufferDirect(U,null,K,N,A,null),A.onAfterShadow(r,A,E,U,K,N,null)}}const D=A.children;for(let K=0,P=D.length;K<P;K++)M(D[K],E,U,v,y)}function R(A){A.target.removeEventListener("dispose",R);for(const U in c){const v=c[U],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function LM(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new Yt;let oe=null;const Oe=new Yt(0,0,0,0);return{setMask:function(De){oe!==De&&!L&&(r.colorMask(De,De,De,De),oe=De)},setLocked:function(De){L=De},setClear:function(De,st,ut,Te,xe){xe===!0&&(De*=Te,st*=Te,ut*=Te),ae.set(De,st,ut,Te),Oe.equals(ae)===!1&&(r.clearColor(De,st,ut,Te),Oe.copy(ae))},reset:function(){L=!1,oe=null,Oe.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,oe=null,Oe=null;return{setTest:function(De){De?Pe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(De){ae!==De&&!L&&(r.depthMask(De),ae=De)},setFunc:function(De){if(oe!==De){switch(De){case J_:r.depthFunc(r.NEVER);break;case Q_:r.depthFunc(r.ALWAYS);break;case eg:r.depthFunc(r.LESS);break;case Xo:r.depthFunc(r.LEQUAL);break;case tg:r.depthFunc(r.EQUAL);break;case ng:r.depthFunc(r.GEQUAL);break;case ig:r.depthFunc(r.GREATER);break;case rg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=De}},setLocked:function(De){L=De},setClear:function(De){Oe!==De&&(r.clearDepth(De),Oe=De)},reset:function(){L=!1,ae=null,oe=null,Oe=null}}}function o(){let L=!1,ae=null,oe=null,Oe=null,De=null,st=null,ut=null,Te=null,xe=null;return{setTest:function(Re){L||(Re?Pe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(Re){ae!==Re&&!L&&(r.stencilMask(Re),ae=Re)},setFunc:function(Re,ie,Fe){(oe!==Re||Oe!==ie||De!==Fe)&&(r.stencilFunc(Re,ie,Fe),oe=Re,Oe=ie,De=Fe)},setOp:function(Re,ie,Fe){(st!==Re||ut!==ie||Te!==Fe)&&(r.stencilOp(Re,ie,Fe),st=Re,ut=ie,Te=Fe)},setLocked:function(Re){L=Re},setClear:function(Re){xe!==Re&&(r.clearStencil(Re),xe=Re)},reset:function(){L=!1,ae=null,oe=null,Oe=null,De=null,st=null,ut=null,Te=null,xe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,R=null,A=null,E=null,U=null,v=new at(0,0,0),y=0,O=!1,D=null,K=null,P=null,N=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=$>=2);let Z=null,ne={};const Y=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),se=new Yt().fromArray(Y),_e=new Yt().fromArray(j);function fe(L,ae,oe,Oe){const De=new Uint8Array(4),st=r.createTexture();r.bindTexture(L,st),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<oe;ut++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(ae+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return st}const Ce={};Ce[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(Xo),ke(!1),w(eh),Pe(r.CULL_FACE),ge(er);function Pe(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Ie(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Ge(L,ae){return d[L]!==ae?(r.bindFramebuffer(L,ae),d[L]=ae,n&&(L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(L,ae){let oe=_,Oe=!1;if(L)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),L.isWebGLMultipleRenderTargets){const De=L.texture;if(oe.length!==De.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ut=De.length;st<ut;st++)oe[st]=r.COLOR_ATTACHMENT0+st;oe.length=De.length,Oe=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Oe=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ve(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const me={[Tr]:r.FUNC_ADD,[F_]:r.FUNC_SUBTRACT,[k_]:r.FUNC_REVERSE_SUBTRACT};if(n)me[rh]=r.MIN,me[sh]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(me[rh]=L.MIN_EXT,me[sh]=L.MAX_EXT)}const Le={[B_]:r.ZERO,[z_]:r.ONE,[H_]:r.SRC_COLOR,[wc]:r.SRC_ALPHA,[Y_]:r.SRC_ALPHA_SATURATE,[X_]:r.DST_COLOR,[V_]:r.DST_ALPHA,[G_]:r.ONE_MINUS_SRC_COLOR,[Ac]:r.ONE_MINUS_SRC_ALPHA,[q_]:r.ONE_MINUS_DST_COLOR,[W_]:r.ONE_MINUS_DST_ALPHA,[$_]:r.CONSTANT_COLOR,[K_]:r.ONE_MINUS_CONSTANT_COLOR,[j_]:r.CONSTANT_ALPHA,[Z_]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(L,ae,oe,Oe,De,st,ut,Te,xe,Re){if(L===er){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),L!==O_){if(L!==S||Re!==O){if((x!==Tr||A!==Tr)&&(r.blendEquation(r.FUNC_ADD),x=Tr,A=Tr),Re)switch(L){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.ONE,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,R=null,E=null,U=null,v.set(0,0,0),y=0,S=L,O=Re}return}De=De||ae,st=st||oe,ut=ut||Oe,(ae!==x||De!==A)&&(r.blendEquationSeparate(me[ae],me[De]),x=ae,A=De),(oe!==M||Oe!==R||st!==E||ut!==U)&&(r.blendFuncSeparate(Le[oe],Le[Oe],Le[st],Le[ut]),M=oe,R=Oe,E=st,U=ut),(Te.equals(v)===!1||xe!==y)&&(r.blendColor(Te.r,Te.g,Te.b,xe),v.copy(Te),y=xe),S=L,O=!1}function H(L,ae){L.side===Ci?Ie(r.CULL_FACE):Pe(r.CULL_FACE);let oe=L.side===wn;ae&&(oe=!oe),ke(oe),L.blending===ws&&L.transparent===!1?ge(er):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Oe=L.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){D!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),D=L)}function w(L){L!==U_?(Pe(r.CULL_FACE),L!==K&&(L===eh?r.cullFace(r.BACK):L===I_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),K=L}function T(L){L!==P&&(q&&r.lineWidth(L),P=L)}function F(L,ae,oe){L?(Pe(r.POLYGON_OFFSET_FILL),(N!==ae||B!==oe)&&(r.polygonOffset(ae,oe),N=ae,B=oe)):Ie(r.POLYGON_OFFSET_FILL)}function ee(L){L?Pe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Q(L){L===void 0&&(L=r.TEXTURE0+W-1),Z!==L&&(r.activeTexture(L),Z=L)}function te(L,ae,oe){oe===void 0&&(Z===null?oe=r.TEXTURE0+W-1:oe=Z);let Oe=ne[oe];Oe===void 0&&(Oe={type:void 0,texture:void 0},ne[oe]=Oe),(Oe.type!==L||Oe.texture!==ae)&&(Z!==oe&&(r.activeTexture(oe),Z=oe),r.bindTexture(L,ae||Ce[L]),Oe.type=L,Oe.texture=ae)}function pe(){const L=ne[Z];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(L){se.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function nt(L){_e.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ht(L,ae){let oe=f.get(ae);oe===void 0&&(oe=new WeakMap,f.set(ae,oe));let Oe=oe.get(L);Oe===void 0&&(Oe=r.getUniformBlockIndex(ae,L.name),oe.set(L,Oe))}function de(L,ae){const Oe=f.get(ae).get(L);u.get(ae)!==Oe&&(r.uniformBlockBinding(ae,Oe,L.__bindingPointIndex),u.set(ae,Oe))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,ne={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,R=null,A=null,E=null,U=null,v=new at(0,0,0),y=0,O=!1,D=null,K=null,P=null,N=null,B=null,se.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Ie,bindFramebuffer:Ge,drawBuffers:z,useProgram:Ve,setBlending:ge,setMaterial:H,setFlipSided:ke,setCullFace:w,setLineWidth:T,setPolygonOffset:F,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:pe,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:ve,updateUBOMapping:ht,uniformBlockBinding:de,texStorage2D:Ae,texStorage3D:We,texSubImage2D:be,texSubImage3D:He,compressedTexSubImage2D:J,compressedTexSubImage3D:lt,scissor:Xe,viewport:nt,reset:re}}function DM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,T){return d?new OffscreenCanvas(w,T):jo("canvas")}function _(w,T,F,ee){let Q=1;if((w.width>ee||w.height>ee)&&(Q=ee/Math.max(w.width,w.height)),Q<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=T?Ic:Math.floor,pe=te(Q*w.width),ue=te(Q*w.height);f===void 0&&(f=g(pe,ue));const ce=F?g(pe,ue):f;return ce.width=pe,ce.height=ue,ce.getContext("2d").drawImage(w,0,0,pe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+ue+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Nh(w.width)&&Nh(w.height)}function p(w){return a?!1:w.wrapS!==oi||w.wrapT!==oi||w.minFilter!==mn&&w.minFilter!==jn}function S(w,T){return w.generateMipmaps&&T&&w.minFilter!==mn&&w.minFilter!==jn}function x(w){r.generateMipmap(w)}function M(w,T,F,ee,Q=!1){if(a===!1)return T;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=T;if(T===r.RED&&(F===r.FLOAT&&(te=r.R32F),F===r.HALF_FLOAT&&(te=r.R16F),F===r.UNSIGNED_BYTE&&(te=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(te=r.R8UI),F===r.UNSIGNED_SHORT&&(te=r.R16UI),F===r.UNSIGNED_INT&&(te=r.R32UI),F===r.BYTE&&(te=r.R8I),F===r.SHORT&&(te=r.R16I),F===r.INT&&(te=r.R32I)),T===r.RG&&(F===r.FLOAT&&(te=r.RG32F),F===r.HALF_FLOAT&&(te=r.RG16F),F===r.UNSIGNED_BYTE&&(te=r.RG8)),T===r.RGBA){const pe=Q?qo:gt.getTransfer(ee);F===r.FLOAT&&(te=r.RGBA32F),F===r.HALF_FLOAT&&(te=r.RGBA16F),F===r.UNSIGNED_BYTE&&(te=pe===Et?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(w,T,F){return S(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==mn&&w.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function A(w){return w===mn||w===ah||w===bl?r.NEAREST:r.LINEAR}function E(w){const T=w.target;T.removeEventListener("dispose",E),v(T),T.isVideoTexture&&u.delete(T)}function U(w){const T=w.target;T.removeEventListener("dispose",U),O(T)}function v(w){const T=n.get(w);if(T.__webglInit===void 0)return;const F=w.source,ee=h.get(F);if(ee){const Q=ee[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(w),Object.keys(ee).length===0&&h.delete(F)}n.remove(w)}function y(w){const T=n.get(w);r.deleteTexture(T.__webglTexture);const F=w.source,ee=h.get(F);delete ee[T.__cacheKey],o.memory.textures--}function O(w){const T=w.texture,F=n.get(w),ee=n.get(T);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let te=0;te<F.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(F.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[Q]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=T.length;Q<te;Q++){const pe=n.get(T[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(T[Q])}n.remove(T),n.remove(w)}let D=0;function K(){D=0}function P(){const w=D;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),D+=1,w}function N(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function B(w,T){const F=n.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,w,T);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function W(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function q(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function $(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){_e(F,w,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}const C={[Pc]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Lc]:r.MIRRORED_REPEAT},Z={[mn]:r.NEAREST,[ah]:r.NEAREST_MIPMAP_NEAREST,[bl]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[dg]:r.LINEAR_MIPMAP_NEAREST,[Pa]:r.LINEAR_MIPMAP_LINEAR},ne={[bg]:r.NEVER,[Lg]:r.ALWAYS,[wg]:r.LESS,[up]:r.LEQUAL,[Ag]:r.EQUAL,[Pg]:r.GEQUAL,[Rg]:r.GREATER,[Cg]:r.NOTEQUAL};function Y(w,T,F){if(F?(r.texParameteri(w,r.TEXTURE_WRAP_S,C[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,C[T.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,C[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Z[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Z[T.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==oi||T.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==mn&&T.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===mn||T.minFilter!==bl&&T.minFilter!==Pa||T.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===La&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function j(w,T){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",E));const ee=T.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=N(T);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[te].usedTimes++;const pe=Q[w.__cacheKey];pe!==void 0&&(Q[w.__cacheKey].usedTimes--,pe.usedTimes===0&&y(T)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return F}function se(w,T,F){let ee=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=r.TEXTURE_3D);const Q=j(w,T),te=T.source;t.bindTexture(ee,w.__webglTexture,r.TEXTURE0+F);const pe=n.get(te);if(te.version!==pe.__version||Q===!0){t.activeTexture(r.TEXTURE0+F);const ue=gt.getPrimaries(gt.workingColorSpace),ce=T.colorSpace===Jn?null:gt.getPrimaries(T.colorSpace),be=T.colorSpace===Jn||ue===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const He=p(T)&&m(T.image)===!1;let J=_(T.image,He,!1,i.maxTextureSize);J=ke(T,J);const lt=m(J)||a,Ae=s.convert(T.format,T.colorSpace);let We=s.convert(T.type),Ee=M(T.internalFormat,Ae,We,T.colorSpace,T.isVideoTexture);Y(ee,T,lt);let ve;const Xe=T.mipmaps,nt=a&&T.isVideoTexture!==!0&&Ee!==op,ht=pe.__version===void 0||Q===!0,de=R(T,J,lt);if(T.isDepthTexture)Ee=r.DEPTH_COMPONENT,a?T.type===Ki?Ee=r.DEPTH_COMPONENT32F:T.type===$i?Ee=r.DEPTH_COMPONENT24:T.type===Nr?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:T.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Or&&Ee===r.DEPTH_COMPONENT&&T.type!==uu&&T.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=$i,We=s.convert(T.type)),T.format===Os&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,T.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Nr,We=s.convert(T.type))),ht&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Ee,J.width,J.height,0,Ae,We,null));else if(T.isDataTexture)if(Xe.length>0&&lt){nt&&ht&&t.texStorage2D(r.TEXTURE_2D,de,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],nt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Ae,We,ve.data):t.texImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,Ae,We,ve.data);T.generateMipmaps=!1}else nt?(ht&&t.texStorage2D(r.TEXTURE_2D,de,Ee,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,Ae,We,J.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,J.width,J.height,0,Ae,We,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ee,Xe[0].width,Xe[0].height,J.depth);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],T.format!==li?Ae!==null?nt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,Ae,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ee,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,Ae,We,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ee,ve.width,ve.height,J.depth,0,Ae,We,ve.data)}else{nt&&ht&&t.texStorage2D(r.TEXTURE_2D,de,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],T.format!==li?Ae!==null?nt?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Ae,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Ae,We,ve.data):t.texImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,Ae,We,ve.data)}else if(T.isDataArrayTexture)nt?(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ee,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ae,We,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Ae,We,J.data);else if(T.isData3DTexture)nt?(ht&&t.texStorage3D(r.TEXTURE_3D,de,Ee,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ae,We,J.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Ae,We,J.data);else if(T.isFramebufferTexture){if(ht)if(nt)t.texStorage2D(r.TEXTURE_2D,de,Ee,J.width,J.height);else{let re=J.width,L=J.height;for(let ae=0;ae<de;ae++)t.texImage2D(r.TEXTURE_2D,ae,Ee,re,L,0,Ae,We,null),re>>=1,L>>=1}}else if(Xe.length>0&&lt){nt&&ht&&t.texStorage2D(r.TEXTURE_2D,de,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],nt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ae,We,ve):t.texImage2D(r.TEXTURE_2D,re,Ee,Ae,We,ve);T.generateMipmaps=!1}else nt?(ht&&t.texStorage2D(r.TEXTURE_2D,de,Ee,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,We,J)):t.texImage2D(r.TEXTURE_2D,0,Ee,Ae,We,J);S(T,lt)&&x(ee),pe.__version=te.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function _e(w,T,F){if(T.image.length!==6)return;const ee=j(w,T),Q=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+F);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(r.TEXTURE0+F);const pe=gt.getPrimaries(gt.workingColorSpace),ue=T.colorSpace===Jn?null:gt.getPrimaries(T.colorSpace),ce=T.colorSpace===Jn||pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=T.isCompressedTexture||T.image[0].isCompressedTexture,He=T.image[0]&&T.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!be&&!He?J[re]=_(T.image[re],!1,!0,i.maxCubemapSize):J[re]=He?T.image[re].image:T.image[re],J[re]=ke(T,J[re]);const lt=J[0],Ae=m(lt)||a,We=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),ve=M(T.internalFormat,We,Ee,T.colorSpace),Xe=a&&T.isVideoTexture!==!0,nt=te.__version===void 0||ee===!0;let ht=R(T,lt,Ae);Y(r.TEXTURE_CUBE_MAP,T,Ae);let de;if(be){Xe&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ve,lt.width,lt.height);for(let re=0;re<6;re++){de=J[re].mipmaps;for(let L=0;L<de.length;L++){const ae=de[L];T.format!==li?We!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,Ee,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ve,ae.width,ae.height,0,We,Ee,ae.data)}}}else{de=T.mipmaps,Xe&&nt&&(de.length>0&&ht++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ve,J[0].width,J[0].height));for(let re=0;re<6;re++)if(He){Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,We,Ee,J[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,J[re].width,J[re].height,0,We,Ee,J[re].data);for(let L=0;L<de.length;L++){const oe=de[L].image[re].image;Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,oe.width,oe.height,We,Ee,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ve,oe.width,oe.height,0,We,Ee,oe.data)}}else{Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,We,Ee,J[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,We,Ee,J[re]);for(let L=0;L<de.length;L++){const ae=de[L];Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,We,Ee,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ve,We,Ee,ae.image[re])}}}S(T,Ae)&&x(r.TEXTURE_CUBE_MAP),te.__version=Q.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function fe(w,T,F,ee,Q,te){const pe=s.convert(F.format,F.colorSpace),ue=s.convert(F.type),ce=M(F.internalFormat,pe,ue,F.colorSpace);if(!n.get(T).__hasExternalTextures){const He=Math.max(1,T.width>>te),J=Math.max(1,T.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ce,He,J,T.depth,0,pe,ue,null):t.texImage2D(Q,te,ce,He,J,0,pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Q,n.get(F).__webglTexture,0,Le(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,Q,n.get(F).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(w,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let ee=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||ge(T)){const Q=T.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ki?ee=r.DEPTH_COMPONENT32F:Q.type===$i&&(ee=r.DEPTH_COMPONENT24));const te=Le(T);ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ee,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ee,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Le(T);F&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],pe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ce=M(te.internalFormat,pe,ue,te.colorSpace),be=Le(T);F&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,Q=Le(T);if(T.depthTexture.format===Or)ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Os)ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ie(w){const T=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,w)}else if(F){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ce(T.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Ce(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(w,T,F){const ee=n.get(w);T!==void 0&&fe(ee.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ie(w)}function z(w){const T=w.texture,F=n.get(w),ee=n.get(T);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=T.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,pe=m(w)||a;if(Q){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let ce=0;ce<T.mipmaps.length;ce++)F.__webglFramebuffer[ue][ce]=r.createFramebuffer()}else F.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)F.__webglFramebuffer[ue]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const ue=w.texture;for(let ce=0,be=ue.length;ce<be;ce++){const He=n.get(ue[ce]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ge(w)===!1){const ue=te?T:[T];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const be=ue[ce];F.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const He=s.convert(be.format,be.colorSpace),J=s.convert(be.type),lt=M(be.internalFormat,He,J,be.colorSpace,w.isXRRenderTarget===!0),Ae=Le(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,lt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T,pe);for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)fe(F.__webglFramebuffer[ue][ce],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else fe(F.__webglFramebuffer[ue],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(T,pe)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=w.texture;for(let ce=0,be=ue.length;ce<be;ce++){const He=ue[ce],J=n.get(He);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Y(r.TEXTURE_2D,He,pe),fe(F.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),S(He,pe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),Y(ue,T,pe),a&&T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)fe(F.__webglFramebuffer[ce],w,T,r.COLOR_ATTACHMENT0,ue,ce);else fe(F.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,ue,0);S(T,pe)&&x(ue),t.unbindTexture()}w.depthBuffer&&Ie(w)}function Ve(w){const T=m(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,Q=F.length;ee<Q;ee++){const te=F[ee];if(S(te,T)){const pe=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(te).__webglTexture;t.bindTexture(pe,ue),x(pe),t.unbindTexture()}}}function me(w){if(a&&w.samples>0&&ge(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,ee=w.height;let Q=r.COLOR_BUFFER_BIT;const te=[],pe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(w),ce=w.isWebGLMultipleRenderTargets===!0;if(ce)for(let be=0;be<T.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<T.length;be++){te.push(r.COLOR_ATTACHMENT0+be),w.depthBuffer&&te.push(pe);const He=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(He===!1&&(w.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]),He===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),ce){const J=n.get(T[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,F,ee,0,0,F,ee,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<T.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const He=n.get(T[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Le(w){return Math.min(i.maxSamples,w.samples)}function ge(w){const T=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function H(w){const T=o.render.frame;u.get(w)!==T&&(u.set(w,T),w.update())}function ke(w,T){const F=w.colorSpace,ee=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Dc||F!==Ni&&F!==Jn&&(gt.getTransfer(F)===Et?a===!1?e.has("EXT_sRGB")===!0&&ee===li?(w.format=Dc,w.minFilter=jn,w.generateMipmaps=!1):T=fp.sRGBToLinear(T):(ee!==li||Q!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function UM(r,e,t){const n=t.isWebGL2;function i(s,o=Jn){let a;const l=gt.getTransfer(o);if(s===nr)return r.UNSIGNED_BYTE;if(s===np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pg)return r.BYTE;if(s===mg)return r.SHORT;if(s===uu)return r.UNSIGNED_SHORT;if(s===tp)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===La)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_g)return r.ALPHA;if(s===li)return r.RGBA;if(s===gg)return r.LUMINANCE;if(s===vg)return r.LUMINANCE_ALPHA;if(s===Or)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===Dc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===xg)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Sg)return r.RG;if(s===sp)return r.RG_INTEGER;if(s===ap)return r.RGBA_INTEGER;if(s===wl||s===Al||s===Rl||s===Cl)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oh||s===lh||s===ch||s===uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===oh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===op)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hh||s===fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hh)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===fh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dh||s===ph||s===mh||s===_h||s===gh||s===vh||s===xh||s===Sh||s===Mh||s===yh||s===Eh||s===Th||s===bh||s===wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===dh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_h)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Th)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pl||s===Ah||s===Rh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pl)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mg||s===Ch||s===Ph||s===Lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ph)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class IM extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sa extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class OM extends Bs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],x=[],M=new ct;let R=null;const A=new Nn;A.layers.enable(1),A.viewport=new Yt;const E=new Nn;E.layers.enable(2),E.viewport=new Yt;const U=[A,E],v=new IM;v.layers.enable(1),v.layers.enable(2);let y=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=S[Y];return j===void 0&&(j=new tc,S[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=S[Y];return j===void 0&&(j=new tc,S[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=S[Y];return j===void 0&&(j=new tc,S[Y]=j),j.getHandSpace()};function D(Y){const j=x.indexOf(Y.inputSource);if(j===-1)return;const se=S[j];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<S.length;Y++){const j=x[Y];j!==null&&(x[Y]=null,S[Y].disconnect(j))}y=null,O=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Vr(d.framebufferWidth,d.framebufferHeight,{format:li,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,se=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Os:Or,se=_.stencil?Nr:$i);const fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(fe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Vr(h.textureWidth,h.textureHeight,{format:li,type:nr,depthTexture:new bp(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let j=0;j<Y.removed.length;j++){const se=Y.removed[j],_e=x.indexOf(se);_e>=0&&(x[_e]=null,S[_e].disconnect(se))}for(let j=0;j<Y.added.length;j++){const se=Y.added[j];let _e=x.indexOf(se);if(_e===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=x.length){x.push(se),_e=Ce;break}else if(x[Ce]===null){x[Ce]=se,_e=Ce;break}if(_e===-1)break}const fe=S[_e];fe&&fe.connect(se)}}const N=new X,B=new X;function W(Y,j,se){N.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);const _e=N.distanceTo(B),fe=j.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Pe=fe[14]/(fe[10]-1),Ie=fe[14]/(fe[10]+1),Ge=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],Ve=(fe[8]-1)/fe[0],me=(Ce[8]+1)/Ce[0],Le=Pe*Ve,ge=Pe*me,H=_e/(-Ve+me),ke=H*-Ve;j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(H),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const w=Pe+H,T=Ie+H,F=Le-ke,ee=ge+(_e-ke),Q=Ge*Ie/T*w,te=z*Ie/T*w;Y.projectionMatrix.makePerspective(F,ee,Q,te,w,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function q(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;v.near=E.near=A.near=Y.near,v.far=E.far=A.far=Y.far,(y!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,O=v.far);const j=Y.parent,se=v.cameras;q(v,j);for(let _e=0;_e<se.length;_e++)q(se[_e],j);se.length===2?W(v,A,E):v.projectionMatrix.copy(A.projectionMatrix),$(Y,v,j)};function $(Y,j,se){se===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Uc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let C=null;function Z(Y,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;se.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let fe=0;fe<se.length;fe++){const Ce=se[fe];let Pe=null;if(d!==null)Pe=d.getViewport(Ce);else{const Ge=f.getViewSubImage(h,Ce);Pe=Ge.viewport,fe===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Ie=U[fe];Ie===void 0&&(Ie=new Nn,Ie.layers.enable(fe),Ie.viewport=new Yt,U[fe]=Ie),Ie.matrix.fromArray(Ce.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ce.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(v.matrix.copy(Ie.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(Ie)}}for(let se=0;se<S.length;se++){const _e=x[se],fe=S[se];_e!==null&&fe!==void 0&&fe.update(_e,j,c||o)}C&&C(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ne=new Ep;ne.setAnimationLoop(Z),this.setAnimationLoop=function(Y){C=Y},this.dispose=function(){}}}function FM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(S,R);const A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){const x=f();S.__bindingPointIndex=x;const M=r.createBuffer(),R=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],M=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,E=M.length;A<E;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,y=U.length;v<y;v++){const O=U[v];if(d(O,A,v,R)===!0){const D=O.__offset,K=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let N=0;N<K.length;N++){const B=K[N],W=_(B);typeof B=="number"||typeof B=="boolean"?(O.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,D+P,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=0,O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=0,O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=0):(B.toArray(O.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,M,R){const A=S.value,E=x+"_"+M;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const U=R[E];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[E]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(S){const x=S.uniforms;let M=0;const R=16;for(let E=0,U=x.length;E<U;E++){const v=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,O=v.length;y<O;y++){const D=v[y],K=Array.isArray(D.value)?D.value:[D.value];for(let P=0,N=K.length;P<N;P++){const B=K[P],W=_(B),q=M%R;q!==0&&R-q<W.boundary&&(M+=R-q),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=W.storage}}}const A=M%R;return A>0&&(M+=R-A),S.__size=M,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Lp{constructor(e={}){const{canvas:t=Ug(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,E=null,U=-1,v=null;const y=new Yt,O=new Yt;let D=null;const K=new at(0);let P=0,N=t.width,B=t.height,W=1,q=null,$=null;const C=new Yt(0,0,N,B),Z=new Yt(0,0,N,B);let ne=!1;const Y=new du;let j=!1,se=!1,_e=null;const fe=new Ht,Ce=new ct,Pe=new X,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return E===null?W:1}let z=n;function Ve(b,I){for(let V=0;V<b.length;V++){const G=b[V],k=t.getContext(G,I);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),z=Ve(I,b),z===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,Le,ge,H,ke,w,T,F,ee,Q,te,pe,ue,ce,be,He,J,lt,Ae,We,Ee,ve,Xe,nt;function ht(){me=new $x(z),Le=new Gx(z,me,e),me.init(Le),ve=new UM(z,me,Le),ge=new LM(z,me,Le),H=new Zx(z),ke=new gM,w=new DM(z,me,ge,ke,Le,ve,H),T=new Wx(x),F=new Yx(x),ee=new s0(z,Le),Xe=new zx(z,me,ee,Le),Q=new Kx(z,ee,H,Xe),te=new tS(z,Q,ee,H),Ae=new eS(z,Le,w),He=new Vx(ke),pe=new _M(x,T,F,me,Le,Xe,He),ue=new FM(x,ke),ce=new xM,be=new bM(me,Le),lt=new Bx(x,T,F,ge,te,h,l),J=new PM(x,te,Le),nt=new kM(z,H,Le,ge),We=new Hx(z,me,H,Le),Ee=new jx(z,me,H,Le),H.programs=pe.programs,x.capabilities=Le,x.extensions=me,x.properties=ke,x.renderLists=ce,x.shadowMap=J,x.state=ge,x.info=H}ht();const de=new OM(x,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(N,B,!1))},this.getSize=function(b){return b.set(N,B)},this.setSize=function(b,I,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,B=I,t.width=Math.floor(b*W),t.height=Math.floor(I*W),V===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(N*W,B*W).floor()},this.setDrawingBufferSize=function(b,I,V){N=b,B=I,W=V,t.width=Math.floor(b*V),t.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,I,V,G){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,I,V,G),ge.viewport(y.copy(C).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,I,V,G){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,I,V,G),ge.scissor(O.copy(Z).multiplyScalar(W).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ge.setScissorTest(ne=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(b=!0,I=!0,V=!0){let G=0;if(b){let k=!1;if(E!==null){const le=E.texture.format;k=le===ap||le===sp||le===rp}if(k){const le=E.texture.type,Me=le===nr||le===$i||le===uu||le===Nr||le===np||le===ip,Be=lt.getClearColor(),ye=lt.getClearAlpha(),we=Be.r,ze=Be.g,$e=Be.b;Me?(d[0]=we,d[1]=ze,d[2]=$e,d[3]=ye,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=we,g[1]=ze,g[2]=$e,g[3]=ye,z.clearBufferiv(z.COLOR,0,g))}else G|=z.COLOR_BUFFER_BIT}I&&(G|=z.DEPTH_BUFFER_BIT),V&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),be.dispose(),ke.dispose(),T.dispose(),F.dispose(),te.dispose(),Xe.dispose(),nt.dispose(),pe.dispose(),de.dispose(),de.removeEventListener("sessionstart",xe),de.removeEventListener("sessionend",Re),_e&&(_e.dispose(),_e=null),ie.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=H.autoReset,I=J.enabled,V=J.autoUpdate,G=J.needsUpdate,k=J.type;ht(),H.autoReset=b,J.enabled=I,J.autoUpdate=V,J.needsUpdate=G,J.type=k}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const I=b.target;I.removeEventListener("dispose",oe),Oe(I)}function Oe(b){De(b),ke.remove(b)}function De(b){const I=ke.get(b).programs;I!==void 0&&(I.forEach(function(V){pe.releaseProgram(V)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,G,k,le){I===null&&(I=Ie);const Me=k.isMesh&&k.matrixWorld.determinant()<0,Be=Mt(b,I,V,G,k);ge.setMaterial(G,Me);let ye=V.index,we=1;if(G.wireframe===!0){if(ye=Q.getWireframeAttribute(V),ye===void 0)return;we=2}const ze=V.drawRange,$e=V.attributes.position;let Tt=ze.start*we,kt=(ze.start+ze.count)*we;le!==null&&(Tt=Math.max(Tt,le.start*we),kt=Math.min(kt,(le.start+le.count)*we)),ye!==null?(Tt=Math.max(Tt,0),kt=Math.min(kt,ye.count)):$e!=null&&(Tt=Math.max(Tt,0),kt=Math.min(kt,$e.count));const pt=kt-Tt;if(pt<0||pt===1/0)return;Xe.setup(k,G,Be,V,ye);let ln,_t=We;if(ye!==null&&(ln=ee.get(ye),_t=Ee,_t.setIndex(ln)),k.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Ge()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(k.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),ge.setLineWidth(qe*Ge()),k.isLineSegments?_t.setMode(z.LINES):k.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else k.isPoints?_t.setMode(z.POINTS):k.isSprite&&_t.setMode(z.TRIANGLES);if(k.isBatchedMesh)_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)_t.renderInstances(Tt,pt,k.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ol=Math.min(V.instanceCount,qe);_t.renderInstances(Tt,pt,ol)}else _t.render(Tt,pt)};function st(b,I,V){b.transparent===!0&&b.side===Ci&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,St(b,I,V),b.side=lr,b.needsUpdate=!0,St(b,I,V),b.side=Ci):St(b,I,V)}this.compile=function(b,I,V=null){V===null&&(V=b),m=be.get(V),m.init(),S.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==V&&b.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const G=new Set;return b.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let Me=0;Me<le.length;Me++){const Be=le[Me];st(Be,V,k),G.add(Be)}else st(le,V,k),G.add(le)}),S.pop(),m=null,G},this.compileAsync=function(b,I,V=null){const G=this.compile(b,I,V);return new Promise(k=>{function le(){if(G.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){k(b);return}setTimeout(le,10)}me.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ut=null;function Te(b){ut&&ut(b)}function xe(){ie.stop()}function Re(){ie.start()}const ie=new Ep;ie.setAnimationLoop(Te),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(b){ut=b,de.setAnimationLoop(b),b===null?ie.stop():ie.start()},de.addEventListener("sessionstart",xe),de.addEventListener("sessionend",Re),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,E),m=be.get(b,S.length),m.init(),S.push(m),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(fe),se=this.localClippingEnabled,j=He.init(this.clippingPlanes,se),_=ce.get(b,p.length),_.init(),p.push(_),Fe(b,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,$),this.info.render.frame++,j===!0&&He.beginShadows();const V=m.state.shadowsArray;if(J.render(V,b,I),j===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,b),m.setupLights(x._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let k=0,le=G.length;k<le;k++){const Me=G[k];Ne(_,b,Me,Me.viewport)}}else Ne(_,b,I);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,I),Xe.resetDefaultState(),U=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Fe(b,I,V,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){G&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const Me=te.update(b),Be=b.material;Be.visible&&_.push(b,Me,Be,V,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Me=te.update(b),Be=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(Be)){const ye=Me.groups;for(let we=0,ze=ye.length;we<ze;we++){const $e=ye[we],Tt=Be[$e.materialIndex];Tt&&Tt.visible&&_.push(b,Me,Tt,V,Pe.z,$e)}}else Be.visible&&_.push(b,Me,Be,V,Pe.z,null)}}const le=b.children;for(let Me=0,Be=le.length;Me<Be;Me++)Fe(le[Me],I,V,G)}function Ne(b,I,V,G){const k=b.opaque,le=b.transmissive,Me=b.transparent;m.setupLightsView(V),j===!0&&He.setGlobalState(x.clippingPlanes,V),le.length>0&&Ye(k,le,I,V),G&&ge.viewport(y.copy(G)),k.length>0&&wt(k,I,V),le.length>0&&wt(le,I,V),Me.length>0&&wt(Me,I,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ye(b,I,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const le=Le.isWebGL2;_e===null&&(_e=new Vr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?La:nr,minFilter:Pa,samples:le?4:0})),x.getDrawingBufferSize(Ce),le?_e.setSize(Ce.x,Ce.y):_e.setSize(Ic(Ce.x),Ic(Ce.y));const Me=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(K),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Be=x.toneMapping;x.toneMapping=tr,wt(b,V,G),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let ye=!1;for(let we=0,ze=I.length;we<ze;we++){const $e=I[we],Tt=$e.object,kt=$e.geometry,pt=$e.material,ln=$e.group;if(pt.side===Ci&&Tt.layers.test(G.layers)){const _t=pt.side;pt.side=wn,pt.needsUpdate=!0,it(Tt,V,G,kt,pt,ln),pt.side=_t,pt.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),x.setRenderTarget(Me),x.setClearColor(K,P),x.toneMapping=Be}function wt(b,I,V){const G=I.isScene===!0?I.overrideMaterial:null;for(let k=0,le=b.length;k<le;k++){const Me=b[k],Be=Me.object,ye=Me.geometry,we=G===null?Me.material:G,ze=Me.group;Be.layers.test(V.layers)&&it(Be,I,V,ye,we,ze)}}function it(b,I,V,G,k,le){b.onBeforeRender(x,I,V,G,k,le),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,I,V,G,b,le),k.transparent===!0&&k.side===Ci&&k.forceSinglePass===!1?(k.side=wn,k.needsUpdate=!0,x.renderBufferDirect(V,I,G,k,b,le),k.side=lr,k.needsUpdate=!0,x.renderBufferDirect(V,I,G,k,b,le),k.side=Ci):x.renderBufferDirect(V,I,G,k,b,le),b.onAfterRender(x,I,V,G,k,le)}function St(b,I,V){I.isScene!==!0&&(I=Ie);const G=ke.get(b),k=m.state.lights,le=m.state.shadowsArray,Me=k.state.version,Be=pe.getParameters(b,k.state,le,I,V),ye=pe.getProgramCacheKey(Be);let we=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?F:T).get(b.envMap||G.environment),we===void 0&&(b.addEventListener("dispose",oe),we=new Map,G.programs=we);let ze=we.get(ye);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===Me)return yt(b,Be),ze}else Be.uniforms=pe.getUniforms(b),b.onBuild(V,Be,x),b.onBeforeCompile(Be,x),ze=pe.acquireProgram(Be,ye),we.set(ye,ze),G.uniforms=Be.uniforms;const $e=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=He.uniform),yt(b,Be),G.needsLights=Rn(b),G.lightsStateVersion=Me,G.needsLights&&($e.ambientLightColor.value=k.state.ambient,$e.lightProbe.value=k.state.probe,$e.directionalLights.value=k.state.directional,$e.directionalLightShadows.value=k.state.directionalShadow,$e.spotLights.value=k.state.spot,$e.spotLightShadows.value=k.state.spotShadow,$e.rectAreaLights.value=k.state.rectArea,$e.ltc_1.value=k.state.rectAreaLTC1,$e.ltc_2.value=k.state.rectAreaLTC2,$e.pointLights.value=k.state.point,$e.pointLightShadows.value=k.state.pointShadow,$e.hemisphereLights.value=k.state.hemi,$e.directionalShadowMap.value=k.state.directionalShadowMap,$e.directionalShadowMatrix.value=k.state.directionalShadowMatrix,$e.spotShadowMap.value=k.state.spotShadowMap,$e.spotLightMatrix.value=k.state.spotLightMatrix,$e.spotLightMap.value=k.state.spotLightMap,$e.pointShadowMap.value=k.state.pointShadowMap,$e.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Ft(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function yt(b,I){const V=ke.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Mt(b,I,V,G,k){I.isScene!==!0&&(I=Ie),w.resetTextureUnits();const le=I.fog,Me=G.isMeshStandardMaterial?I.environment:null,Be=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ni,ye=(G.isMeshStandardMaterial?F:T).get(G.envMap||Me),we=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),$e=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,kt=!!V.morphAttributes.color;let pt=tr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(pt=x.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=ln!==void 0?ln.length:0,qe=ke.get(G),ol=m.state.lights;if(j===!0&&(se===!0||b!==v)){const Wn=b===v&&G.id===U;He.setState(G,b,Wn)}let Pt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ol.state.version||qe.outputColorSpace!==Be||k.isBatchedMesh&&qe.batching===!1||!k.isBatchedMesh&&qe.batching===!0||k.isInstancedMesh&&qe.instancing===!1||!k.isInstancedMesh&&qe.instancing===!0||k.isSkinnedMesh&&qe.skinning===!1||!k.isSkinnedMesh&&qe.skinning===!0||k.isInstancedMesh&&qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qe.instancingColor===!1&&k.instanceColor!==null||qe.envMap!==ye||G.fog===!0&&qe.fog!==le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==He.numPlanes||qe.numIntersection!==He.numIntersection)||qe.vertexAlphas!==we||qe.vertexTangents!==ze||qe.morphTargets!==$e||qe.morphNormals!==Tt||qe.morphColors!==kt||qe.toneMapping!==pt||Le.isWebGL2===!0&&qe.morphTargetsCount!==_t)&&(Pt=!0):(Pt=!0,qe.__version=G.version);let hr=qe.currentProgram;Pt===!0&&(hr=St(G,I,k));let mu=!1,Gs=!1,ll=!1;const Qt=hr.getUniforms(),fr=qe.uniforms;if(ge.useProgram(hr.program)&&(mu=!0,Gs=!0,ll=!0),G.id!==U&&(U=G.id,Gs=!0),mu||v!==b){Qt.setValue(z,"projectionMatrix",b.projectionMatrix),Qt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Wn=Qt.map.cameraPosition;Wn!==void 0&&Wn.setValue(z,Pe.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&Qt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Gs=!0,ll=!0)}if(k.isSkinnedMesh){Qt.setOptional(z,k,"bindMatrix"),Qt.setOptional(z,k,"bindMatrixInverse");const Wn=k.skeleton;Wn&&(Le.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Qt.setValue(z,"boneTexture",Wn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Qt.setOptional(z,k,"batchingTexture"),Qt.setValue(z,"batchingTexture",k._matricesTexture,w));const cl=V.morphAttributes;if((cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&Le.isWebGL2===!0)&&Ae.update(k,V,hr),(Gs||qe.receiveShadow!==k.receiveShadow)&&(qe.receiveShadow=k.receiveShadow,Qt.setValue(z,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fr.envMap.value=ye,fr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Gs&&(Qt.setValue(z,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&dt(fr,ll),le&&G.fog===!0&&ue.refreshFogUniforms(fr,le),ue.refreshMaterialUniforms(fr,G,W,B,_e),Po.upload(z,Ft(qe),fr,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Po.upload(z,Ft(qe),fr,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qt.setValue(z,"center",k.center),Qt.setValue(z,"modelViewMatrix",k.modelViewMatrix),Qt.setValue(z,"normalMatrix",k.normalMatrix),Qt.setValue(z,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wn=G.uniformsGroups;for(let ul=0,Fp=Wn.length;ul<Fp;ul++)if(Le.isWebGL2){const _u=Wn[ul];nt.update(_u,hr),nt.bind(_u,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function dt(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Rn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,I,V){ke.get(b.texture).__webglTexture=I,ke.get(b.depthTexture).__webglTexture=V;const G=ke.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const V=ke.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,V=0){E=b,R=I,A=V;let G=!0,k=null,le=!1,Me=!1;if(b){const ye=ke.get(b);ye.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?w.setupRenderTarget(b):ye.__hasExternalTextures&&w.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const ze=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?k=ze[I][V]:k=ze[I],le=!0):Le.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?k=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[V]:k=ze,y.copy(b.viewport),O.copy(b.scissor),D=b.scissorTest}else y.copy(C).multiplyScalar(W).floor(),O.copy(Z).multiplyScalar(W).floor(),D=ne;if(ge.bindFramebuffer(z.FRAMEBUFFER,k)&&Le.drawBuffers&&G&&ge.drawBuffers(b,k),ge.viewport(y),ge.scissor(O),ge.setScissorTest(D),le){const ye=ke.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,V)}else if(Me){const ye=ke.get(b.texture),we=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ye.__webglTexture,V||0,we)}U=-1},this.readRenderTargetPixels=function(b,I,V,G,k,le,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Be=Be[Me]),Be){ge.bindFramebuffer(z.FRAMEBUFFER,Be);try{const ye=b.texture,we=ye.format,ze=ye.type;if(we!==li&&ve.convert(we)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=ze===La&&(me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&me.has("EXT_color_buffer_float"));if(ze!==nr&&ve.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Ki&&(Le.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&V>=0&&V<=b.height-k&&z.readPixels(I,V,G,k,ve.convert(we),ve.convert(ze),le)}finally{const ye=E!==null?ke.get(E).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(b,I,V=0){const G=Math.pow(2,-V),k=Math.floor(I.image.width*G),le=Math.floor(I.image.height*G);w.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,b.x,b.y,k,le),ge.unbindTexture()},this.copyTextureToTexture=function(b,I,V,G=0){const k=I.image.width,le=I.image.height,Me=ve.convert(V.format),Be=ve.convert(V.type);w.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,b.x,b.y,k,le,Me,Be,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,b.x,b.y,Me,Be,I.image),G===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,I,V,G,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Be=b.max.z-b.min.z+1,ye=ve.convert(G.format),we=ve.convert(G.type);let ze;if(G.isData3DTexture)w.setTexture3D(G,0),ze=z.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const $e=z.getParameter(z.UNPACK_ROW_LENGTH),Tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kt=z.getParameter(z.UNPACK_SKIP_PIXELS),pt=z.getParameter(z.UNPACK_SKIP_ROWS),ln=z.getParameter(z.UNPACK_SKIP_IMAGES),_t=V.isCompressedTexture?V.mipmaps[k]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(ze,k,I.x,I.y,I.z,le,Me,Be,ye,we,_t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,k,I.x,I.y,I.z,le,Me,Be,ye,_t.data)):z.texSubImage3D(ze,k,I.x,I.y,I.z,le,Me,Be,ye,we,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,$e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ln),k===0&&G.generateMipmaps&&z.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,ge.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hu?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?Fr:lp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?Kt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BM extends Lp{}BM.prototype.isWebGL1Renderer=!0;class Mf extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zo extends ur{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new vi(f,3)),this.setAttribute("normal",new vi(h,3)),this.setAttribute("uv",new vi(d,2));function S(){const M=new X,R=new X;let A=0;const E=(t-e)/n;for(let U=0;U<=s;U++){const v=[],y=U/s,O=y*(t-e)+e;for(let D=0;D<=i;D++){const K=D/i,P=K*l+a,N=Math.sin(P),B=Math.cos(P);R.x=O*N,R.y=-y*n+m,R.z=O*B,f.push(R.x,R.y,R.z),M.set(N,E,B).normalize(),h.push(M.x,M.y,M.z),d.push(K,1-y),v.push(g++)}_.push(v)}for(let U=0;U<i;U++)for(let v=0;v<s;v++){const y=_[v][U],O=_[v+1][U],D=_[v+1][U+1],K=_[v][U+1];u.push(y,O,K),u.push(O,D,K),A+=6}c.addGroup(p,A,0),p+=A}function x(M){const R=g,A=new ct,E=new X;let U=0;const v=M===!0?e:t,y=M===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*y,0),h.push(0,y,0),d.push(.5,.5),g++;const O=g;for(let D=0;D<=i;D++){const P=D/i*l+a,N=Math.cos(P),B=Math.sin(P);E.x=v*B,E.y=m*y,E.z=v*N,f.push(E.x,E.y,E.z),h.push(0,y,0),A.x=N*.5+.5,A.y=B*.5*y+.5,d.push(A.x,A.y),g++}for(let D=0;D<i;D++){const K=R+D,P=O+D;M===!0?u.push(P,P+1,K):u.push(P+1,P,K),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nc extends Oc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dp extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class zM extends Dp{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ic=new Ht,yf=new X,Ef=new X;class HM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GM extends HM{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tf extends Dp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new GM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cu);const Zs=new X;function qn(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Zs.copy(e),Zs[n]=0,Zs.normalize();const c=.5*o/(o+a),u=1-Zs.angleTo(r)/l;return Math.sign(Zs[t])===1?u*c:a/(o+a)+c+c*(1-u)}class bf extends zs{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new X,l=new X,c=new X(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,g=new X,_=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),h[p+0]=qn(g,l,"z","y",s,n),h[p+1]=1-qn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),h[p+0]=1-qn(g,l,"z","y",s,n),h[p+1]=1-qn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),h[p+0]=1-qn(g,l,"x","z",s,e),h[p+1]=qn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),h[p+0]=1-qn(g,l,"x","z",s,e),h[p+1]=1-qn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),h[p+0]=1-qn(g,l,"x","y",s,e),h[p+1]=1-qn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),h[p+0]=qn(g,l,"x","y",s,e),h[p+1]=1-qn(g,l,"y","x",s,t);break}}}const VM=.78,WM=1.6,XM=.085;function wf(){const r=new sa,e=new nc({color:9015948,metalness:.78,roughness:.25,clearcoat:.65,clearcoatRoughness:.12}),t=new Fn(new bf(VM,WM,XM,8,.075),e);r.add(t);const n=new Fn(new bf(.735,1.54,.018,8,.045),new nc({color:1514265,metalness:.45,roughness:.3}));n.position.z=.052,r.add(n);const i=new Fn(new sl(.68,1.43),new Oc({color:8011565,emissive:2363402,emissiveIntensity:1.2,roughness:.3}));i.position.z=.064,r.add(i);const s=new nc({color:2107175,metalness:.8,roughness:.12,clearcoat:1}),o=new Oc({color:1118481,metalness:.9,roughness:.18});return[[-.21,.54],[-.21,.38],[-.05,.54]].forEach(([a,l])=>{const c=new Fn(new Zo(.07,.07,.02,32),o);c.rotation.x=Math.PI/2,c.position.set(a,l,.066);const u=new Fn(new Zo(.05,.05,.024,32),s);u.rotation.x=Math.PI/2,u.position.set(a,l,.078),r.add(c,u)}),r.userData.phoneParts={body:t,bezel:n,screen:i},r}function Af(r){r.traverse(e=>{var n;(n=e.geometry)==null||n.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(i=>{var s,o,a;(o=(s=i.map)==null?void 0:s.dispose)==null||o.call(s),(a=i.dispose)==null||a.call(i)})})}Br.registerPlugin(Je);const Up="http://localhost:8080",qM="nova-demo-guest",YM="/products/placeholder.svg",$M={Smartphone:"/products/smartphone.svg",Audio:"/products/audio.svg",Smartwatch:"/products/smartwatch.svg",Laptop:"/products/laptop.svg",Aksesoris:"/products/accessories.svg"},KM={"aura-phone-12":"phone","aura-phone-12-sage":"phone","aura-phone-mini":"phone","pulse-watch-4":"watch","pulse-band":"watch","arc-buds-pro":"earbuds","arc-buds-air":"earbuds","framebook-air-14":"laptop","framebook-stand":"laptop","snap-charger-65":"charger","snap-charger-duo":"charger","aura-phone-case":"case","studio-speaker-mini":"speaker","studio-speaker-bar":"speaker","loop-powerbank":"powerbank","desk-mat":"deskmat"},Jo=r=>r.type||KM[r.slug]||{Smartphone:"phone",Audio:"speaker",Smartwatch:"watch",Laptop:"laptop"}[r.category]||"charger",jM=r=>{var e,t;return(e=r.slug)!=null&&e.includes("sage")?"#a9b6a0":(t=r.slug)!=null&&t.includes("clay")?"#c96f4a":"#89928c"},ci=r=>String(r??"").replace(/[&<>\"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Zn=r=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(r||0),Ke=r=>document.querySelector(r);function Ip(r){const e=Jo(r),t=jM(r),n=ci(r.name),i=`viewBox="0 0 400 500" role="img" aria-label="${n}" xmlns="http://www.w3.org/2000/svg"`,s=`<text x="200" y="458" text-anchor="middle" fill="#141414" font-family="monospace" font-size="12" letter-spacing="2">${n.toUpperCase()}</text>`,o={phone:`<rect x="112" y="65" width="176" height="330" rx="25" fill="${t}"/><rect x="132" y="92" width="136" height="260" rx="12" fill="#303632"/><circle cx="157" cy="125" r="18" fill="#1b211e"/><circle cx="205" cy="125" r="18" fill="#1b211e"/><circle cx="157" cy="173" r="18" fill="#1b211e"/><circle cx="157" cy="125" r="8" fill="#ff4a1c"/><path d="M160 315h80" stroke="#ff4a1c" stroke-width="7"/>`,earbuds:`<path d="M103 185c0-45 39-82 87-82s87 37 87 82v105c0 18-15 33-33 33h-8V203c0-25-20-45-45-45s-45 20-45 45v120h-10c-18 0-33-15-33-33z" fill="${t}"/><path d="M112 199c0-34 27-61 61-61s61 27 61 61" fill="none" stroke="#e8e2d6" stroke-width="16"/><circle cx="157" cy="203" r="8" fill="#ff4a1c"/>`,watch:`<path d="M150 60h100l24 100H126zM126 340h148l-24 100H150z" fill="${t}"/><rect x="110" y="145" width="180" height="215" rx="30" fill="#414943"/><rect x="137" y="175" width="126" height="155" rx="12" fill="#202622"/><circle cx="200" cy="251" r="32" fill="none" stroke="#ff4a1c" stroke-width="8"/><circle cx="303" cy="205" r="10" fill="#89928c"/>`,laptop:`<path d="M90 120h220v190H90z" fill="${t}"/><path d="M110 140h180v140H110z" fill="#303632"/><path d="M45 335h310l-40 48H85z" fill="#89928c"/><path d="M118 330h164M155 350h90" stroke="#141414" stroke-width="6"/><circle cx="200" cy="346" r="5" fill="#ff4a1c"/>`,charger:`<rect x="118" y="105" width="164" height="180" rx="18" fill="${t}"/><path d="M155 105V72m90 33V72" stroke="#141414" stroke-width="13"/><path d="M200 285c0 80 100 35 100 100 0 30-27 43-61 43H118" fill="none" stroke="#141414" stroke-width="9"/><circle cx="139" cy="210" r="8" fill="#ff4a1c"/>`,powerbank:`<rect x="85" y="130" width="230" height="220" rx="32" fill="${t}"/><rect x="150" y="112" width="100" height="22" rx="9" fill="#141414"/><circle cx="135" cy="235" r="8" fill="#ff4a1c"/><circle cx="165" cy="235" r="8" fill="#141414"/><circle cx="195" cy="235" r="8" fill="#141414"/><circle cx="225" cy="235" r="8" fill="#141414"/><rect x="170" y="295" width="60" height="16" rx="6" fill="#303632"/>`,speaker:`<path d="M75 190c0-25 20-45 45-45h160c25 0 45 20 45 45v90c0 25-20 45-45 45H120c-25 0-45-20-45-45z" fill="${t}"/><path d="M95 170c-35 25-35 105 0 130" fill="none" stroke="#141414" stroke-width="9"/><g fill="#141414">${Array.from({length:35},(a,l)=>`<circle cx="${135+l%7*22}" cy="${202+Math.floor(l/7)*18}" r="4"/>`).join("")}</g><path d="M160 150c5-28 75-28 80 0" fill="none" stroke="#ff4a1c" stroke-width="7"/>`,case:`<rect x="112" y="65" width="176" height="330" rx="25" fill="${t}" fill-opacity=".52"/><rect x="132" y="92" width="136" height="260" rx="12" fill="none"/><rect x="142" y="104" width="58" height="62" rx="13" fill="#e8e2d6"/><circle cx="160" cy="124" r="9" fill="#141414"/><circle cx="184" cy="124" r="9" fill="#141414"/><path d="M150 345h100" stroke="#ff4a1c" stroke-width="7"/>`,deskmat:`<path d="M55 160l245-45 55 190-245 45z" fill="${t}"/><path d="M75 178l207-38 39 145-207 38z" fill="#a6aea4"/><rect x="220" y="205" width="56" height="76" rx="25" transform="rotate(-13 220 205)" fill="#303632"/><circle cx="248" cy="220" r="5" fill="#ff4a1c"/>`};return`<svg class="product-art" ${i}><rect width="400" height="500" fill="#e8e2d6"/>${o[e]||o.phone}${s}</svg>`}const ZM=[{id:1,slug:"aura-phone-12",name:"Aura Phone 12",category:"Smartphone",type:"phone",price:14999e3,oldPrice:16999e3,installment:624958,rating:4.9,reviews:128,badge:"Terlaris",description:"Flagship yang terasa ringan. Kamera Pro 48MP, layar 120Hz, dan satu hari penuh tanpa kompromi.",stock:7,specs:[{label:"Layar",value:'6.7" OLED · 120Hz'}]},{id:2,slug:"pulse-watch-4",name:"Pulse Watch 4",category:"Smartwatch",type:"watch",price:4799e3,installment:199958,rating:4.8,reviews:86,badge:"Baru",description:"Data kesehatan yang jujur, desain yang tidak berisik.",stock:12,specs:[{label:"Display",value:'1.9" AMOLED'}]},{id:3,slug:"arc-buds-pro",name:"Arc Buds Pro",category:"Audio",type:"earbuds",price:2899e3,oldPrice:3299e3,installment:120792,rating:4.7,reviews:214,description:"Noise cancelling adaptif dalam siluet sekecil itu.",stock:4,specs:[{label:"ANC",value:"Adaptive ANC"}]},{id:4,slug:"framebook-air-14",name:"Framebook Air 14",category:"Laptop",type:"laptop",price:18999e3,installment:791625,rating:4.9,reviews:52,description:"Tenaga kerja kreatif. Beratnya seperti buku.",stock:8,specs:[{label:"Processor",value:"M4 · 10-core"}]},{id:5,slug:"snap-charger-65",name:"Snap Charger 65W",category:"Aksesoris",type:"charger",price:699e3,installment:29125,rating:4.6,reviews:41,description:"Kecil di tas, besar di daya.",stock:20,specs:[{label:"Output",value:"65W GaN"}]},{id:6,slug:"aura-phone-case",name:"Aura Case / Clay",category:"Aksesoris",type:"case",price:549e3,installment:22875,rating:4.8,reviews:67,description:"Perlindungan tipis dengan warna yang terasa hidup.",stock:14,specs:[{label:"Material",value:"Recycled TPU"}]},{id:7,slug:"studio-speaker-mini",name:"Studio Speaker Mini",category:"Audio",type:"speaker",price:2199e3,oldPrice:2499e3,installment:91625,rating:4.7,reviews:39,description:"Suara penuh dari sudut paling tenang di ruangan.",stock:9,specs:[{label:"Audio",value:"360° spatial"}]},{id:8,slug:"loop-powerbank",name:"Loop Powerbank 10K",category:"Aksesoris",type:"powerbank",price:899e3,installment:37458,rating:4.5,reviews:103,description:"Daya cadangan yang selalu siap.",stock:18,specs:[{label:"Capacity",value:"10.000 mAh"}]},{id:9,slug:"aura-phone-12-sage",name:"Aura Phone 12 Sage",category:"Smartphone",type:"phone",price:14999e3,installment:624958,rating:4.9,reviews:24,description:"Sage green, karakter yang lebih lembut.",stock:6,specs:[{label:"Layar",value:'6.7" OLED · 120Hz'}]},{id:10,slug:"desk-mat",name:"Desk Mat / Terra",category:"Aksesoris",type:"deskmat",price:429e3,installment:17875,rating:4.6,reviews:28,description:"Permukaan kerja yang bikin fokus terasa mudah.",stock:15,specs:[{label:"Surface",value:"Vegan leather"}]},{id:11,slug:"aura-phone-mini",name:"Aura Phone Mini",category:"Smartphone",type:"phone",price:10999e3,oldPrice:11999e3,installment:458292,rating:4.7,reviews:74,badge:"Baru",description:"Kecil di tangan, serius di performa.",stock:10,specs:[{label:"Layar",value:'6.1" OLED'}]},{id:12,slug:"arc-buds-air",name:"Arc Buds Air",category:"Audio",type:"earbuds",price:1799e3,oldPrice:2099e3,installment:74958,rating:4.6,reviews:61,description:"Suara terbuka untuk hari yang bergerak.",stock:5,specs:[{label:"Playtime",value:"24 jam"}]},{id:13,slug:"pulse-band",name:"Pulse Band",category:"Smartwatch",type:"watch",price:1299e3,installment:54125,rating:4.5,reviews:33,description:"Ritme harian, dibuat sederhana.",stock:11,specs:[{label:"Battery",value:"10 hari"}]},{id:14,slug:"framebook-stand",name:"Framebook Stand",category:"Aksesoris",type:"laptop",price:799e3,installment:33292,rating:4.6,reviews:18,description:"Sudut kerja yang lebih rapi.",stock:13,specs:[{label:"Material",value:"Aluminium"}]},{id:15,slug:"snap-charger-duo",name:"Snap Charger Duo",category:"Aksesoris",type:"charger",price:899e3,installment:37458,rating:4.7,reviews:45,description:"Satu charger untuk dua kebiasaan.",stock:3,specs:[{label:"Output",value:"65W dual"}]},{id:16,slug:"studio-speaker-bar",name:"Studio Speaker Bar",category:"Audio",type:"speaker",price:3299e3,installment:137458,rating:4.8,reviews:27,description:"Ruang kecil, suara yang penuh.",stock:7,specs:[{label:"Audio",value:"Wide stereo"}]}];let ir=[...ZM],va="all",je={items:[],subtotal:0,shipping:0,total:0,freeLeft:1e6};const JM=r=>$M[r.category]||YM,ks=async(r,e={})=>{try{const t=await fetch(Up+r,{...e,headers:{"Content-Type":"application/json","X-Cart-ID":qM,...e.headers}});if(!t.ok)throw new Error("API request failed");return await t.json()}catch{return null}};function QM(){Ke("#app").innerHTML=`
    <div class="topline"><div class="marquee">Gratis ongkir untuk pembelian di atas Rp1.000.000 <span>✳</span> Pilihan gadget yang dibuat untuk hidup nyata <span>✳</span> Garansi resmi 1 tahun <span>✳</span></div></div>
    <nav class="container"><a class="logo" href="#top">NOVA <em>GEAR</em></a><div class="navlinks"><a href="#catalog">Katalog</a><a href="#story">Cerita kami</a><a href="#journal">Jurnal</a></div><button class="cart-button" id="open-cart">BAG <span class="cart-count">0</span></button></nav>
    <main id="top">
      <section class="hero container"><div class="hero-copy"><div class="eyebrow">Teknologi pilihan / 2024</div><h1 class="hero__title"><span class="line">Gadget terbaik</span><span class="line">untuk hari yang</span><span class="line line--serif">lebih baik.</span></h1><p class="hero-desc">Perangkat yang dipilih dengan sengaja. Lebih sedikit noise, lebih banyak hal yang ingin kamu lakukan.</p><div class="hero-actions"><a href="#catalog" class="cta">Belanja koleksi <span class="arrow">↘</span></a><a href="#story" class="text-cta">Kenali lebih dekat <span>↘</span></a></div><div class="hero-stats"><span>4.8 rating</span><span>12rb+ terjual</span><span>garansi 1 tahun</span></div></div><div class="hero-stage"><div class="hero__canvas" id="hero-canvas-wrap"><canvas id="hero-canvas" aria-label="Model 3D Aura Phone 12"></canvas><div class="fallback-phone" aria-hidden="true"></div></div><div class="hero__caption">AURA PHONE 12<br>MODEL / TITANIUM</div></div></section>
      <section class="dark-band" id="story"><div class="container"><div class="section-head"><h2 class="section-title">Dibuat untuk<br><em>berarti.</em></h2><span class="mono">02 / Tiga cara melihatnya</span></div><div class="story"><div class="story__grid"><div class="story__visual"><canvas class="story__canvas" id="story-canvas" aria-label="Cerita interaktif Aura Phone 12"></canvas><div class="story-fallback" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div></div><div class="story__steps"><button class="story__step active" data-step="0"><span>01</span><strong>Kamera Pro</strong></button><button class="story__step" data-step="1"><span>02</span><strong>Layar OLED</strong></button><button class="story__step" data-step="2"><span>03</span><strong>Baterai seharian</strong></button></div></div><div class="story-copy"><div class="mono" id="story-label">01 / 03 — Kamera</div><h3 id="story-title">Lihat yang<br>terlewat.</h3><p id="story-text">Sensor Pro menangkap detail yang biasanya hilang. Bukan untuk membuatmu jadi fotografer — untuk membuat momen biasa terasa cukup.</p><ul class="feature-list"><li><span>48MP PRO CAMERA</span><span>01</span></li><li><span>120HZ OLED DISPLAY</span><span>02</span></li><li><span>ALL-DAY BATTERY</span><span>03</span></li></ul><a href="#catalog" class="story-cta">Lihat ponsel ini ↘</a></div></div></div></section>
      <section class="flash-sale"><div class="container"><div class="sale-head"><div><div class="eyebrow">Penawaran pilihan / Terbatas</div><h2 class="section-title">Flash <em>sale.</em></h2></div><div class="countdown mono" id="countdown">00:00:00</div></div><div class="flash__grid" id="sale-grid"></div></div></section>
      <section class="catalog container" id="catalog"><div class="catalog-head"><div><div class="eyebrow" id="catalog-count">Katalog / 16 objek</div><h2 class="section-title">Temukan<br><em>andalanmu.</em></h2></div><select class="sort" id="sort"><option value="">Urutkan: Pilihan</option><option value="price-asc">Harga: Terendah</option><option value="price-desc">Harga: Tertinggi</option><option value="rating">Rating tertinggi</option></select></div><div class="filters" id="filters"><button class="filter active" data-filter="all">Semua</button><button class="filter" data-filter="smartphone">Smartphone</button><button class="filter" data-filter="audio">Audio</button><button class="filter" data-filter="smartwatch">Smartwatch</button><button class="filter" data-filter="laptop">Laptop</button><button class="filter" data-filter="aksesoris">Aksesoris</button></div><div class="grid grid--pattern" id="product-grid"></div></section>
      <section class="manifesto"><div class="container"><div class="eyebrow">NOVA GEAR / Cara pandang kami</div><h2>Kurangi noise.<br>Tambah <em>sinyal.</em></h2><p class="manifesto-copy">Gadget yang lebih jujur, dipilih untuk membantu hari-hari terasa lebih ringan.</p><a href="#catalog" class="cta">Lihat semua koleksi <span class="arrow">↗</span></a></div></section>
    </main>
    <footer id="journal"><div class="container"><div class="footer-grid"><div><div class="logo">NOVA <em>GEAR</em></div><p class="footer-lead">Gadget yang dikurasi untuk hidup yang tidak selalu digital.</p><form class="newsletter"><label>Newsletter NOVA</label><div><input type="email" required placeholder="email kamu"/><button type="submit">Daftar ↗</button></div></form></div><div><h4>Jelajahi</h4><a href="#catalog">Semua produk</a><a href="#story">Cerita kami</a><a href="#journal">Jurnal</a></div><div><h4>Bantuan</h4><a href="#journal">Pengiriman & retur</a><a href="#journal">Garansi resmi</a><a href="#journal">Hubungi kami</a></div><div><h4>Pembayaran</h4><p>QRIS · VA · COD</p><p>Cicilan 0%</p><h4 class="footer-subhead">Kurir</h4><p>JNE · SiCepat · GoSend</p></div></div><div class="footer-contact">Jakarta Selatan · hello@novagear.demo · Senin–Sabtu, 09.00–18.00</div><div class="footer-bottom mono"><span>© 2024 NOVA GEAR</span><span>Kebijakan privasi · Syarat & ketentuan</span></div></div></footer>
    <div class="modal-backdrop" id="backdrop"></div><aside class="drawer" id="drawer"><div class="drawer-head"><h2>Your bag <span class="mono">(0)</span></h2><button class="close" id="close-cart">×</button></div><div class="cart-items" id="cart-items"></div><div class="drawer-footer"><div class="shipping-note" id="shipping-note">Gratis ongkir untuk pembelian di atas Rp1.000.000</div><div class="bundle-suggestion"><strong>Sering dibeli bersama</strong><span>Snap Charger 65W · + Rp699.000</span></div><div class="summary-line"><span>Subtotal</span><strong id="cart-subtotal">Rp0</strong></div><div class="summary-line"><span>Shipping</span><strong id="cart-shipping">Gratis</strong></div><div class="summary-line"><strong>Total</strong><strong id="cart-total">Rp0</strong></div><button class="cta checkout-btn" id="checkout-open">Lanjut checkout <span class="arrow">↗</span></button><div class="trust-row"><span>Garansi 1 tahun</span><span>Retur 7 hari</span><span>1–3 hari</span></div><div class="payment-row mono">QRIS · VA · COD · CICILAN 0%</div></div></aside>
    <div class="checkout" id="checkout"><div id="checkout-form-wrap"><button class="close" id="close-checkout">×</button><h2>Almost<br><span class="serif">there.</span></h2><div class="checkout-grid"><form id="checkout-form"><div class="field"><label>Nama lengkap</label><input name="name" required placeholder="Nama kamu" /></div><div class="field"><label>Email</label><input name="email" type="email" required placeholder="kamu@email.com" /></div><div class="field"><label>Nomor telepon</label><input name="phone" required placeholder="08..." /></div><div class="field"><label>Alamat pengiriman</label><textarea name="address" required placeholder="Alamat lengkap"></textarea></div><button class="cta" type="submit">Buat pesanan <span class="arrow">↗</span></button></form><div class="order-box"><div class="mono">ORDER SUMMARY</div><div id="checkout-summary" class="checkout-summary"></div></div></div></div><div class="success" id="success"><div class="success-mark">✓</div><div class="mono">ORDER CONFIRMED</div><h2>Thank<br><span class="serif">you.</span></h2><p>Pesananmu sudah masuk. Kami akan mengirim detail konfirmasi ke email kamu.</p><button class="cta" id="done">Kembali belanja <span class="arrow">↗</span></button></div></div>`}function Lo(){const r=ir.filter(n=>va==="all"||n.category.toLowerCase()===va),e=[...r];for(;e.length%3!==0;)e.push({filler:!0});const t=Ke("#product-grid");t.className=`grid${va==="all"&&r.length%8===0?" grid--pattern":""}`,t.innerHTML=e.map((n,i)=>{if(n.filler)return'<article class="card card--filler" aria-hidden="true"></article>';const s=n.stock<=5?`Stok tinggal ${n.stock}`:n.badge||"",o=Jo(n);return`<article class="card" data-type="${ci(o)}"><div class="card__meta"><span>${String(i+1).padStart(2,"0")} / ${ci(n.category)}</span><span class="rating"><strong>★</strong> ${n.rating} (${n.reviews})</span></div><div class="card__media">${Ip(n)}${s?`<span class="badge">${ci(s)}</span>`:""}<button class="quick-add" data-add="${n.id}">+ Keranjang</button></div><div class="card__info"><div><div class="product-name">${ci(n.name)}</div><div class="product-category">${ci(n.description)}</div></div><div class="product-price">${Zn(n.price)}<span class="mono installment">${Zn(n.installment)}/bln</span></div></div></article>`}).join(""),Ke("#catalog-count").textContent=`Katalog / ${r.length} objek`,Br.fromTo(t.children,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.35,stagger:.035,clearProps:"all"}),t.querySelectorAll("[data-add]").forEach(n=>n.addEventListener("click",()=>iy(Number(n.dataset.add))))}function Np(){const e=["phone","earbuds","watch","powerbank"].map(t=>ir.find(n=>Jo(n)===t)).filter(Boolean);Ke("#sale-grid").innerHTML=e.map(t=>{const n=t.oldPrice||Math.ceil(t.price*1.15/1e3)*1e3,i=Math.round((1-t.price/n)*100),s=Math.min(92,35+t.id*3);return`<article class="flash-card" data-type="${ci(Jo(t))}"><div class="sale-art">${Ip(t)}</div><h3>${ci(t.name)}</h3><div class="sale-price">${Zn(t.price)} <span class="sale-old">${Zn(n)}</span><b>-${i}%</b></div><div class="sale-meter"><i style="width:${s}%"></i></div><div class="mono sale-sold">${s}% terjual</div></article>`}).join("")}function Da(){var t,n;const r=((t=je.items)==null?void 0:t.reduce((i,s)=>i+s.quantity,0))||0;Ke(".cart-count").textContent=r,Ke(".drawer-head h2").innerHTML=`Tas kamu <span class="mono">(${r})</span>`,Ke("#cart-subtotal").textContent=Zn(je.subtotal),Ke("#cart-shipping").textContent=je.shipping?Zn(je.shipping):"Gratis",Ke("#cart-total").textContent=Zn(je.total);const e=Math.min(100,(je.subtotal||0)/1e6*100);Ke("#shipping-note").innerHTML=`${je.freeLeft>0?`Tambah ${Zn(je.freeLeft)} lagi untuk gratis ongkir`:"Gratis ongkir aktif — mantap."}<span class="shipping-progress"><i style="width:${e}%"></i></span>`,Ke("#cart-items").innerHTML=(n=je.items)!=null&&n.length?je.items.map(i=>{var s,o,a,l;return`<div class="cart-item"><img src="${JM(i.product||{})}" alt="${ci(((s=i.product)==null?void 0:s.name)||"Produk")}"/><div><h4>${ci(((o=i.product)==null?void 0:o.name)||"Produk")}</h4><div class="mono">${Zn((a=i.product)==null?void 0:a.price)}</div><div class="qty"><button data-qty="${i.productId}" data-change="-1">−</button><span>${i.quantity}</span><button data-qty="${i.productId}" data-change="1">+</button></div></div><strong class="mono">${Zn((((l=i.product)==null?void 0:l.price)||0)*i.quantity)}</strong></div>`}).join(""):'<div class="empty">Tas kamu masih kosong.<br>Tambahkan sesuatu yang bagus.</div>',Ke("#cart-items").querySelectorAll("[data-qty]").forEach(i=>i.addEventListener("click",()=>ry(Number(i.dataset.qty),Number(i.dataset.change))))}async function ey(){var e;const r=await ks("/products");((e=r==null?void 0:r.data)==null?void 0:e.length)===16&&(ir=r.data),Lo(),Np()}async function ty(){const r=await ks("/cart");r!=null&&r.data&&(je=r.data),Da()}function ny(){const r=Date.now()+252e5+138e4,e=()=>{const t=Math.max(0,r-Date.now());Ke("#countdown").textContent=[Math.floor(t/36e5),Math.floor(t%36e5/6e4),Math.floor(t%6e4/1e3)].map(n=>String(n).padStart(2,"0")).join(":"),t&&window.setTimeout(e,1e3)};e()}async function iy(r){const e=ir.find(n=>n.id===r),t=await ks("/cart/items",{method:"POST",body:JSON.stringify({productId:r,quantity:1})});if(t!=null&&t.data)je=t.data;else{const n=je.items.find(i=>i.productId===r);n?n.quantity+=1:je.items.push({productId:r,quantity:1,product:e}),je.items.forEach(i=>{i.product||(i.product=ir.find(s=>s.id===i.productId))}),je.subtotal=je.items.reduce((i,s)=>i+s.product.price*s.quantity,0),je.shipping=je.subtotal>=1e6?0:25e3,je.freeLeft=Math.max(0,1e6-je.subtotal),je.total=je.subtotal+je.shipping}Da(),Op()}async function ry(r,e){const t=je.items.find(i=>i.productId===r),n=await ks(`/cart/items/${r}`,{method:"PATCH",body:JSON.stringify({quantity:((t==null?void 0:t.quantity)||0)+e})});n!=null&&n.data?je=n.data:t&&(t.quantity+=e,t.quantity<=0&&(je.items=je.items.filter(i=>i.productId!==r)),je.subtotal=je.items.reduce((i,s)=>i+s.product.price*s.quantity,0),je.shipping=je.subtotal>=1e6?0:25e3,je.freeLeft=Math.max(0,1e6-je.subtotal),je.total=je.subtotal+je.shipping),Da()}function Op(){Ke("#drawer").classList.add("open"),Ke("#backdrop").classList.add("show")}function So(){Ke("#drawer").classList.remove("open"),Ke("#checkout").classList.remove("show"),Ke("#backdrop").classList.remove("show")}function sy(){var r;(r=je.items)!=null&&r.length&&(Ke("#checkout-summary").innerHTML=`${je.items.map(e=>`<div class="summary-line"><span>${ci(e.product.name)} × ${e.quantity}</span><strong>${Zn(e.product.price*e.quantity)}</strong></div>`).join("")}<div class="rule"></div><div class="summary-line"><strong>Total</strong><strong>${Zn(je.total)}</strong></div>`,Ke("#drawer").classList.remove("open"),Ke("#checkout").classList.add("show"))}function Rf(r,e,t){const n=new Lp({canvas:r,antialias:!0,alpha:!0});n.setClearColor(0,0),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=()=>{const o=Math.max(1,r.clientWidth),a=Math.max(1,r.clientHeight);n.setSize(o,a,!1),e.aspect=o/a,e.updateProjectionMatrix()},s=new ResizeObserver(i);return s.observe(r),i(),{renderer:n,observer:s,scene:t}}function Cf(r){r.add(new zM(15920870,3355443,2.1));const e=new Tf(16765113,4);e.position.set(-3,4,5),r.add(e);const t=new Tf(14217802,1.1);t.position.set(3,1,2),r.add(t)}function ay(){const r=Ke("#hero-canvas"),e=Ke("#hero-canvas-wrap"),t=Ke("#story-canvas");if(!r||!e||!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches){Ke(".fallback-phone").style.display="block",Ke(".story-fallback").style.display="flex";return}try{const n=new Mf,i=new Nn(32,1,.01,100);i.position.set(0,0,4.2),i.lookAt(0,0,0);const s=Rf(r,i,n),o=wf();o.rotation.z=-.12,o.scale.setScalar(1.25),n.add(o),Cf(n);const a=new Mf,l=new Nn(34,1,.01,100);l.position.set(0,0,2.5);const c=Rf(t,l,a),u=wf();a.add(u),Cf(a);const f=[{rotation:new kr(.04,-.22,-.08),camera:[0,0,2.3],target:[0,0,0]},{rotation:new kr(.1,.35,.02),camera:[.05,0,2.05],target:[0,0,0]},{rotation:new kr(-.1,-.5,.08),camera:[0,-.02,2.65],target:[0,0,0]}],h=[["01 / 03 — Kamera","Lihat yang<br>terlewat.","Sensor Pro menangkap detail yang biasanya hilang. Bukan untuk membuatmu jadi fotografer — untuk membuat momen biasa terasa cukup."],["02 / 03 — Layar","Rasakan<br>setiap warna.","Layar OLED 120Hz membuat gerakan terasa bersih, teks terasa tenang, dan setiap detail punya ruang untuk bernapas."],["03 / 03 — Baterai","Sampai<br>hari selesai.","Baterai seharian menjaga ritme tetap utuh. Tidak ada drama kabel ketika hal yang penting sedang berjalan."]],d=p=>{const S=f[p];Br.to(u.rotation,{x:S.rotation.x,y:S.rotation.y,z:S.rotation.z,duration:.7,ease:"power2.out"}),Br.to(l.position,{x:S.camera[0],y:S.camera[1],z:S.camera[2],duration:.7,ease:"power2.out"}),Ke("#story-label").textContent=h[p][0],Ke("#story-title").innerHTML=h[p][1],Ke("#story-text").textContent=h[p][2],document.querySelectorAll(".story__step").forEach((x,M)=>x.classList.toggle("active",M===p))};document.querySelectorAll(".story__step").forEach(p=>p.addEventListener("click",()=>d(Number(p.dataset.step)))),Je.create({trigger:".story",start:"top top+=15%",end:"bottom bottom-=15%",pin:".story__grid",scrub:.6,onUpdate:p=>d(Math.min(2,Math.floor(p.progress*3)))});let g=0;const _=p=>{g=(p.clientX/window.innerWidth-.5)*.25};window.addEventListener("pointermove",_,{passive:!0});const m=()=>{o.rotation.y+=(.22+g-o.rotation.y)*.025,o.rotation.x+=(.05-o.rotation.x)*.025,s.renderer.render(n,i),c.renderer.render(a,l),requestAnimationFrame(m)};m(),window.addEventListener("beforeunload",()=>{window.removeEventListener("pointermove",_),s.observer.disconnect(),c.observer.disconnect(),Af(o),Af(u),s.renderer.dispose(),c.renderer.dispose()},{once:!0})}catch{Ke(".fallback-phone").style.display="block",Ke(".story-fallback").style.display="flex"}}function oy(){const r=new D_({smoothWheel:!0,syncTouch:!1});return window.__lenis=r,r.on("scroll",Je.update),Br.ticker.add(e=>r.raf(e*1e3)),Br.ticker.lagSmoothing(0),r}function ly(){var n;QM();const r=oy();Lo(),Np(),ny(),Da(),ey(),ty(),ay();const e=()=>Je.refresh(),t=()=>{const i=Ke(".topline"),s=Ke("nav");document.documentElement.style.setProperty("--header-h",`${((i==null?void 0:i.offsetHeight)||0)+((s==null?void 0:s.offsetHeight)||0)}px`)};t(),window.addEventListener("resize",t,{passive:!0}),(n=document.fonts)!=null&&n.ready&&document.fonts.ready.then(()=>{t(),e()}),window.addEventListener("load",()=>{t(),e()},{once:!0}),Ke("#open-cart").onclick=Op,Ke("#close-cart").onclick=So,Ke("#backdrop").onclick=So,Ke("#checkout-open").onclick=sy,Ke("#close-checkout").onclick=So,Ke("#done").onclick=()=>{So(),window.scrollTo({top:0,behavior:"smooth"})},Ke("#filters").onclick=i=>{const s=i.target.closest(".filter");s&&(va=s.dataset.filter,document.querySelectorAll(".filter").forEach(o=>o.classList.remove("active")),s.classList.add("active"),Lo())},Ke("#sort").onchange=async i=>{var o;const s=await ks(`/products?category=${va}&sort=${i.target.value}`);(o=s==null?void 0:s.data)!=null&&o.length?ir=s.data:i.target.value&&(ir=[...ir].sort((a,l)=>i.target.value==="price-asc"?a.price-l.price:i.target.value==="price-desc"?l.price-a.price:l.rating-a.rating)),Lo()},Ke("#checkout-form").onsubmit=async i=>{i.preventDefault();const s=await ks("/checkout",{method:"POST",body:JSON.stringify(Object.fromEntries(new FormData(i.target)))});(s!=null&&s.data||!Up)&&(Ke("#checkout-form-wrap").style.display="none",Ke("#success").classList.add("show"),je={items:[],subtotal:0,shipping:0,total:0,freeLeft:1e6},Da())},Ke(".newsletter").onsubmit=i=>{i.preventDefault(),i.currentTarget.innerHTML='<strong class="newsletter-success">Terima kasih — cek inbox kamu.</strong>'},window.addEventListener("beforeunload",()=>r.destroy(),{once:!0})}ly();
