(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),o=(n(20),n(2)),l=n(5),u=n(1);n(21);Object(o.b)({OrbitControls:l.a});const s=()=>{const{camera:e,gl:t}=Object(o.d)(),n=Object(r.useRef)();return Object(r.useEffect)(()=>{const r=new l.a(e,t.domElement);return r.enableDamping=!0,r.dampingFactor=.25,r.enableZoom=!0,r.autoRotate=!0,r.autoRotateSpeed=.5,n.current=r,()=>{r.dispose()}},[e,t]),Object(o.c)(()=>{n.current&&n.current.update()}),null};var m=()=>{const[e,t]=Object(r.useState)(!1),[n,c]=Object(r.useState)([]),[i,l]=Object(r.useState)([]),m=Object(r.useRef)(null),d=Object(r.useRef)(null),h=Object(r.useRef)(null),b=Object(r.useRef)(null),g=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)(()=>{const e=()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),f.current&&cancelAnimationFrame(f.current),d.current&&d.current.close()}},[]);const p=()=>{if(!m.current||!h.current)return;const e=m.current,t=e.getContext("2d"),n=e.width,r=e.height;h.current.getByteTimeDomainData(b.current),t.fillStyle="rgb(200, 200, 200)",t.fillRect(0,0,n,r),t.lineWidth=2,t.strokeStyle="rgb(0, 0, 0)",t.beginPath();const a=1*n/b.current.length;let i=0;const o=[];for(let c=0;c<b.current.length;c++){const e=b.current[c]/128,n=e*r/2;0===c?t.moveTo(i,n):t.lineTo(i,n),i+=a,o.push({time:c,amplitude:e})}t.lineTo(e.width,e.height/2),t.stroke(),c(o);const u=o.map(e=>e.amplitude),s=Array.from({length:u.length},(e,t)=>t/u.length*Math.PI*2*120),d=u.map(e=>1e3*e-.9),g=d.map((e,t)=>e*Math.cos(s[t])),w=d.map((e,t)=>e*Math.sin(s[t])),E=o.map(e=>2*e.time),v=g.reduce((e,t)=>e+t,0)/g.length,y=w.reduce((e,t)=>e+t,0)/w.length,j=E.reduce((e,t)=>e+t,0)/E.length;l(g.map((e,t)=>({x:e-v,y:w[t]-y,z:E[t]-j}))),f.current=requestAnimationFrame(p)};return a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"visualization-container"},a.a.createElement("canvas",{ref:m,width:500,height:200,style:{width:"100%",height:"1px",visibility:"hidden",position:"absolute",top:0,left:0}}),a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(o.a,{className:"three-js-container",camera:{position:[5e3,0,0],fov:75,near:.1,far:1e5}},a.a.createElement("ambientLight",{intensity:.5}),a.a.createElement("pointLight",{position:[10,10,10],intensity:1}),a.a.createElement(()=>{const e=Object(r.useMemo)(()=>{const e=new u.BufferGeometry,t=new Float32Array(i.flatMap(e=>{let{x:t,y:n,z:r}=e;return[t,n,r]}));return e.setAttribute("position",new u.BufferAttribute(t,3)),e},[i]),t=new u.LineBasicMaterial({color:255});return Object(o.c)(()=>{}),a.a.createElement(a.a.Fragment,null,a.a.createElement("line",{geometry:e,material:t}))},null),a.a.createElement(s,null)))),a.a.createElement("div",{className:"top"},a.a.createElement("div",{className:"div"},"\u97f3\u3092\u3001")),a.a.createElement("div",{className:"bottom"},a.a.createElement("button",{className:`button ${e?"clicked":""}`,onClick:e?()=>{g.current&&g.current.disconnect(),d.current&&d.current.close(),t(!1),f.current&&cancelAnimationFrame(f.current)}:async()=>{try{const n=await navigator.mediaDevices.getUserMedia({audio:!0});d.current=new(window.AudioContext||window.webkitAudioContext),h.current=d.current.createAnalyser(),g.current=d.current.createMediaStreamSource(n),g.current.connect(h.current),h.current.fftSize=16384;const r=h.current.frequencyBinCount;b.current=new Uint8Array(r),t(!0),p()}catch(e){console.error("Error accessing microphone:",e)}}},a.a.createElement("div",{className:"div2"},e?"\u3068\u3081\u308b":"\u304d\u308d\u304f"))))};var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:c,getTTFB:i}=t;n(e),r(e),a(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null))),h()}},[[11,1,2]]]);
//# sourceMappingURL=main.c19f0480.chunk.js.map