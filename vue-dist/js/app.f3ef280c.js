(function(e){function n(n){for(var t,u,c=n[0],r=n[1],s=n[2],h=0,d=[];h<c.length;h++)u=c[h],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],t=!0,c=1;c<o.length;c++){var r=o[c];0!==a[r]&&(t=!1)}t&&(i.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},a={app:0},i=[];function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vue-dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=r;i.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("7a23"),a={class:"main-box"};function i(e,n,o,i,u,c){var r=Object(t["g"])("TimeBox"),s=Object(t["g"])("MenuBox"),l=Object(t["g"])("AdvanceBox");return Object(t["f"])(),Object(t["b"])("div",a,[Object(t["d"])(r,{timeBoxName:u.timeBoxName,timeBoxTime:u.timeBoxTime,audioPercent:u.audioPercent,onChangeAudioPercent:c.changeAudioPercent},null,8,["timeBoxName","timeBoxTime","audioPercent","onChangeAudioPercent"]),Object(t["d"])(s,{onAudioPlay:c.audioPlay,onAudioPause:c.audioPause,onAudioStop:c.audioStop},null,8,["onAudioPlay","onAudioPause","onAudioStop"]),Object(t["d"])(l,{onAudioBoxChange:c.audioBoxChange},null,8,["onAudioBoxChange"])])}o("99af"),o("b680");var u={class:"time-box"},c={class:"time-box-name"},r={class:"time-box-time"},s={class:"time-box-meter",ref:"timeBoxMeter"},l={class:"time-box-circle",ref:"timeBoxCircle"};function h(e,n,o,a,i,h){return Object(t["f"])(),Object(t["b"])("div",u,[Object(t["c"])("div",c,Object(t["h"])(o.timeBoxName),1),Object(t["c"])("div",r,Object(t["h"])(o.timeBoxTime),1),Object(t["c"])("div",{class:"time-box-background",ref:"timeBox",onMousedown:n[0]||(n[0]=function(){return h.eventMouseDown&&h.eventMouseDown.apply(h,arguments)}),onMousemove:n[1]||(n[1]=function(){return h.eventMouseMove&&h.eventMouseMove.apply(h,arguments)}),onMouseup:n[2]||(n[2]=function(){return h.eventMouseUp&&h.eventMouseUp.apply(h,arguments)}),onTouchstart:n[3]||(n[3]=function(){return h.eventTouchStart&&h.eventTouchStart.apply(h,arguments)}),onTouchmove:n[4]||(n[4]=function(){return h.eventTouchMove&&h.eventTouchMove.apply(h,arguments)}),onTouchEnd:n[5]||(n[5]=function(){return h.eventTouchEnd&&h.eventTouchEnd.apply(h,arguments)})},[Object(t["c"])("div",s,null,512),Object(t["c"])("div",l,null,512)],544)])}var d={props:["timeBoxName","timeBoxTime","audioPercent"],watch:{audioPercent:function(){this.displayTimeBox()}},data:function(){return{isChange:!1}},methods:{eventMouseDown:function(e){this.isChange=!0,this.changePercent(e.offsetX)},eventMouseUp:function(){this.isChange=!1},eventMouseMove:function(e){this.isChange&&this.changePercent(e.offsetX)},eventTouchStart:function(e){var n=e.target.getBoundingClientRect();this.isChange=!0,this.changePercent(e.touches[0].clientX-n.left)},eventTouchMove:function(e){if(this.isChange){var n=e.target.getBoundingClientRect();this.changePercent(e.touches[0].clientX-n.left)}},eventTouchEnd:function(){this.isChange=!1},displayTimeBox:function(){var e=1,n=2,o=this.audioPercent-e;o>100-n?o=100-n:o<0&&(o=0),this.$refs.timeBoxCircle.style.left=o+"%",this.$refs.timeBoxMeter.style.width=this.audioPercent+"%"},changePercent:function(e){var n=e/this.$refs.timeBox.clientWidth*100;this.$emit("changeAudioPercent",n),this.displayTimeBox()}}},x=o("6b0d"),b=o.n(x);const v=b()(d,[["render",h]]);var f=v,p={class:"menu-box"},m=Object(t["c"])("img",{src:"menu-play.png",alt:""},null,-1),g=[m],B=Object(t["c"])("img",{src:"menu-pause.png",alt:""},null,-1),C=[B],T=Object(t["c"])("img",{src:"menu-stop.png",alt:""},null,-1),y=[T];function O(e,n,o,a,i,u){return Object(t["f"])(),Object(t["b"])("div",p,[Object(t["c"])("button",{class:"menu-play",onClick:n[0]||(n[0]=function(){return u.menuPlay&&u.menuPlay.apply(u,arguments)})},g),Object(t["c"])("button",{class:"menu-pause",onClick:n[1]||(n[1]=function(){return u.menuPause&&u.menuPause.apply(u,arguments)})},C),Object(t["c"])("button",{class:"menu-stop",onClick:n[2]||(n[2]=function(){return u.menuStop&&u.menuStop.apply(u,arguments)})},y)])}var j={methods:{menuPlay:function(){this.$emit("audioPlay")},menuPause:function(){this.$emit("audioPause")},menuStop:function(){this.$emit("audioStop")}}};const P=b()(j,[["render",O]]);var M=P,A={class:"advance-box"};function w(e,n,o,a,i,u){var c=Object(t["g"])("MeterBox");return Object(t["f"])(),Object(t["b"])("div",A,[Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"70hz",boxText:"70",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"150hz",boxText:"150",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"300hz",boxText:"300",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"600hz",boxText:"600",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"1500hz",boxText:"1.5k",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"3000hz",boxText:"3k",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"6000hz",boxText:"6k",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"equalizer-box",boxValue:"12000hz",boxText:"12k",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"echo-box",boxValue:"echo",boxText:"echo",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"echo-box",boxValue:"feedback",boxText:"fb",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"echo-box",boxValue:"convolver",boxText:"con",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"]),Object(t["d"])(c,{boxType:"master-box",boxValue:"volume",boxText:"vol",onAudioBoxChange:u.audioBoxChange},null,8,["onAudioBoxChange"])])}var z={class:"box-text"};function S(e,n,o,a,i,u){return Object(t["f"])(),Object(t["b"])("div",{class:Object(t["e"])(u.getClassName(o.boxType,o.boxValue)),onMousedown:n[0]||(n[0]=function(){return u.eventMouseDown&&u.eventMouseDown.apply(u,arguments)}),onMousemove:n[1]||(n[1]=function(){return u.eventMouseMove&&u.eventMouseMove.apply(u,arguments)}),onMouseup:n[2]||(n[2]=function(){return u.eventMouseUp&&u.eventMouseUp.apply(u,arguments)}),onTouchstart:n[3]||(n[3]=function(){return u.eventTouchStart&&u.eventTouchStart.apply(u,arguments)}),onTouchmove:n[4]||(n[4]=function(){return u.eventTouchMove&&u.eventTouchMove.apply(u,arguments)}),onTouchEnd:n[5]||(n[5]=function(){return u.eventTouchEnd&&u.eventTouchEnd.apply(u,arguments)}),ref:"meterBox"},[Object(t["c"])("div",{class:Object(t["e"])(u.getClassName(o.boxType,o.boxValue,"meter")),ref:"meterBoxMeter"},null,2),Object(t["c"])("div",{class:Object(t["e"])(u.getClassName(o.boxType,o.boxValue,"circle")),ref:"meterBoxCircle"},null,2),Object(t["c"])("div",z,Object(t["h"])(o.boxText),1)],34)}var k={props:["boxType","boxValue","boxText"],data:function(){return{heightPercent:0,isChange:!1}},methods:{getClassName:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""!=o?e+"-"+n+"-"+o:e+"-"+n},eventMouseDown:function(e){this.isChange=!0,this.changePercent(e.offsetY)},eventMouseUp:function(){this.isChange=!1},eventMouseMove:function(e){this.isChange&&this.changePercent(e.offsetY)},eventTouchStart:function(e){var n=e.target.getBoundingClientRect();this.isChange=!0,this.changePercent(e.touches[0].clientY-n.top)},eventTouchMove:function(e){if(this.isChange){var n=e.target.getBoundingClientRect();this.changePercent(e.touches[0].clientY-n.top)}},eventTouchEnd:function(){this.isChange=!1},changePercent:function(e){var n=100*(1-e/this.$refs.meterBox.clientHeight),o=10,t=5,a=n-t;n>=100?n=100:n<=0&&(n=0),a>=100-o?a=100-o:a<=0&&(a=0),this.$refs.meterBoxMeter.style.height=n+"%",this.$refs.meterBoxCircle.style.bottom=a+"%",this.$emit("audioBoxChange",this.boxType,this.boxValue,n)}}};const V=b()(k,[["render",S]]);var q=V,E={components:{MeterBox:q},methods:{audioBoxChange:function(e,n,o){this.$emit("audioBoxChange",e,n,o)}}};const G=b()(E,[["render",w]]);var $=G,N="devilish 07 - Stage 4 - Air Passage.mp3",D=new Audio(N),F=new AudioContext,U=_();function _(){var e=[70,150,300,600,1500,3e3,6e3,12e3],n=F.createMediaElementSource(D),o=F.createGain(),t=[],a=[],i=F.createGain();i.gain.value=.25;var u=F.createDelay(1);u.delayTime.value=.25;var c=F.createGain();c.gain.value=.25;var r=F.createConvolver(),s=F.createGain();s.gain.value=.5;var l=F.createBuffer(1,48e3,48e3);r.buffer=l;for(var h=l.getChannelData(0),d=0;d<h.length;d++)h[d]=(1-2*Math.random())*(1-d/h.length);for(var x=F.createGain(),b=0;b<8;b++)t.push(F.createGain()),a.push(F.createBiquadFilter()),t[b].gain.value=.5,a[b].frequency.value=e[b],a[b].type="bandpass",o.connect(a[b]).connect(t[b]).connect(x);n.connect(o),o.connect(u).connect(i).connect(x),u.connect(c).connect(u),o.connect(r).connect(s).connect(x),x.connect(F.destination);var v=function(n,o){o>=2&&(o=2);var a=n>t.length?e.indexOf(n):n;-1!=a&&(t[a].gain.value=o)},f=function(e,n){n>=200&&(n=200);var o=n/100;v(e,o)},p=function(e,n){switch(n>=1&&(n=1),e){case"echo":i.gain.value=n;break;case"feedback":c.gain.value=n;break;case"convolver":s.gain.value=n;break}},m=function(e,n){n>=200&&(n=200);var o=n/100;"echo"!==e&&"feedback"!==e||(o*=.5),p(e,o)},g=function(e){e>=2&&(e=2),x.gain.value=e},B=function(e){e*=2,e>=200&&(e=200);var n=e/100;g(n)};return{startGain:o,audioElement:n,hzGain:t,hzFilter:a,echoGain:i,echoDelay:u,echoFeedbackGain:c,echoConvolverGain:s,masterGain:x,setEqualizer:v,setEqualizerPercent:f,setEcho:p,setEchoPercent:m,setMasterGain:g,setMasterGainPercent:B}}var I={name:"App",data:function(){return{timeBoxTime:"",timeBoxName:N,audioPercent:0,audioBox:U,animationId:0}},components:{TimeBox:f,AdvanceBox:$,MenuBox:M},mounted:function(){this.animationId=requestAnimationFrame(this.animation)},unmounted:function(){cancelAnimationFrame(this.animationId),F.close()},methods:{audioPlay:function(){F.resume(),D.play()},audioStop:function(){F.suspend(),D.pause(),D.currentTime=0},audioPause:function(){D.pause()},animation:function(){var e=D.currentTime/D.duration*100,n="".concat(D.currentTime.toFixed(2)," / ").concat(D.duration.toFixed(2)," (").concat(e.toFixed(2),"%)");this.timeBoxTime=n,this.audioPercent=e,requestAnimationFrame(this.animation)},changeAudioPercent:function(e){D.currentTime=D.duration*e/100},audioBoxChange:function(e,n,o){if("equalizer-box"===e){var t=parseInt(n);U.setEqualizerPercent(t,o)}else"echo-box"===e?U.setEchoPercent(n,o):"master-box"===e&&U.setMasterGainPercent(o)}}};o("bd4c");const R=b()(I,[["render",i]]);var X=R;Object(t["a"])(X).mount("#app")},"6d7d":function(e,n,o){},bd4c:function(e,n,o){"use strict";o("6d7d")}});
//# sourceMappingURL=app.f3ef280c.js.map