/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.24
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */
var tipJS=tipJS||{};tipJS.ver=tipJS.version="1.24";(function(){var j=function(W,X){for(var i in X){if(W[i]){continue}W[i]=X[i]}return W};var f=function(Z,i){if(!i||typeof i!="object"||(!i.__name&&!i.name)){throw"Please check your "+Z+" definition"}var X=(i.__name)?i.__name:i.name;if(typeof(X)!="string"){throw"Please check your "+Z+" definition"}if(i.__extend&&i.__extend===X&&Z!="controllers"){throw"Can't extend itself"}var W=X.split("."),Y=W[0],X=W[1],aa=H(Y);if(!aa){throw"Please check your "+Z+" definition"}if(aa.loadOrder.presentOrder()===Z){if(Z=="controllers"){i.__appName__=Y}else{if(i.__name){delete i.__name}}q.department[Y]=q.department[Y]||{};q.department[Y][Z]=q.department[Y][Z]||{};q.department[Y][Z][X]=i}};var K=function(aa,W){if(W===q.OBJECT_TEMPLATE.loadOrder.order[0]){return s(aa[W])}var Z=aa.name,X=p.path[W],Y=p.applicationPath[Z],i=s(aa[W]);return z(Y,X,i)};var z=function(Y,aa,Z){var X=[];for(var W=Z.length;W--;){X.push(Y+k(aa)+Z[W])}return X};var P=function(W,i){if(i.nocache===true){W=(W.indexOf("?")<0)?W+"?":W+"&";W=W+i.paramName+"="+i.version}return W};var v=tipJS.loadJS=function(Y,X,W){var i=document.createElement("script");i.type="text/javascript";i.src=P(Y,X);i.charset=p.charSet;if(W){if(i.readyState){i.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){this.onreadystatechange=null;W(this)}}}else{i.onload=function(){W(this)}}}document.getElementsByTagName("head")[0].appendChild(i)};var b=function(W,Y,X){var i=function(Z){if(u(W,Y,Z.src)){T(W)}};v(X,C(W),i)};var y=function(W,Z){L(W,Z);var X=h(W);var aa=K(X,Z);q[W][Z].requireList=aa;if(aa.length>0){for(var Y=aa.length;Y--;){b(W,Z,aa[Y])}}else{T(W)}};var o=function(Z){if(!Z.__extend){return Z}if(typeof Z.__extend==="string"){var X=Z.__extend.split(".");if(X.length==2){Z=j(Z,n(X[1],false,X[0]))}else{Z=j(Z,w(Z.__extend))}}else{if(Z.__extend instanceof Array){var i=Z.__extend,W=0,Y=i.length;for(W=0;W<Y;W++){var X=i[U].split(".");if(X.length==2){Z=j(Z,n(X[1],false,X[0]))}else{Z=j(Z,w(i[U]))}}}}delete Z.__extend;return Z};var w=tipJS.loadCommonModel=function(W,aa){var Y=q.common.models;if(!Y[W]||Y[W]==undefined){throw"Could not find commonModel: "+W}if(aa===true){var X=q.common.syncModels;if(!X){X=q.common.syncModels={}}if(X[W]){return X[W]}var i=X[W]=o(c(Y[W]));if(W.lastIndexOf("VO")==(W.length-2)){if(typeof i.__init==="function"){i.__init();delete i.__init}return i}i.loadCommonModel=w;if(typeof i.__init==="function"){i.__init();delete i.__init}return i}var Z=o(c(Y[W]));if(W.lastIndexOf("VO")==(W.length-2)){if(typeof Z.__init==="function"){Z.__init();delete Z.__init}return Z}Z.loadCommonModel=w;if(typeof Z.__init==="function"){Z.__init();delete Z.__init}return Z};var n=function(X,ac,W){var ab=(!W)?S():W,Z=q.department[ab].models;if(!Z[X]||Z[X]==undefined){throw"Could not find model: "+X}if(ac===true){var Y=q.department[ab].syncModels;if(!Y){Y=q.department[ab].syncModels={}}if(Y[X]){return Y[X]}var i=Y[X]=o(c(Z[X]));if(X.lastIndexOf("VO")==(X.length-2)){if(typeof i.__init==="function"){i.__init();delete i.__init}return i}i.loadCommonModel=w;i.loadModel=n;if(typeof i.__init==="function"){i.__init();delete i.__init}return i}var aa=o(c(Z[X]));if(X.lastIndexOf("VO")==(X.length-2)){if(typeof aa.__init==="function"){aa.__init();delete aa.__init}return aa}aa.loadCommonModel=w;aa.loadModel=n;if(typeof aa.__init==="function"){aa.__init();delete aa.__init}return aa};var V=tipJS.loadModel=function(W,aa){var ab=(typeof(aa)==="boolean")?aa:false;try{var X=W.split("."),Z=X[0],i=X[1];return n(i,ab,Z)}catch(Y){throw"tipJS.loadModel : invalid parameter"}};var H=function(i){return M[i]};var h=function(i){return M[i].define};var C=function(i){var X={};var W=h(i);if(W){var Y=W.noCacheVersion;if(W.noCacheAuto===true){Y=""+Math.random()}X.nocache=W.noCache;X.version=Y;X.paramName=W.noCacheParam}return X};var E=function(){return M.controllerStack[M.controllerStack.length-1]};var S=tipJS.getLiveAppName=function(){return E().__appName__};var T=function(W){var aa=H(W);if(aa.loadOrder.isLastOrder()===false){y(W,aa.loadOrder.nextOrder());return}var i=function(ad){var ac=q.common.views;if(!ac||!ac[ad]||ac[ad]==undefined){throw"Could not find commonView: "+ad}var ab=c(ac[ad]);ab.loadCommonView=i;ab.renderTemplate=e;if(ab.__extend&&typeof ab.__extend==="string"){ab=j(ab,i(ab.__extend));delete ab.__extend}if(typeof ab.__init==="function"){ab.__init();delete ab.__init}return ab};var Z=function(ag,ab){var af=(!ab)?S():ab,ae=q.department[af].views;if(!ae||!ae[ag]||ae[ag]==undefined){throw"Could not find view: "+ag}var ad=c(ae[ag]);ad.loadCommonView=i;ad.loadView=Z;ad.renderTemplate=e;if(ad.__extend&&typeof ad.__extend==="string"){var ac=ad.__extend.split(".");if(ac.length==2){ad=j(ad,Z(ac[1],ac[0]))}else{ad=j(ad,i(ad.__extend))}delete ad.__extend}if(typeof ad.__init==="function"){ad.__init();delete ad.__init}return ad};var Y=aa.controller=q.department[W].controllers;if(Y){for(var X in Y){Y[X].loadCommonModel=w;Y[X].loadCommonView=i;Y[X].loadModel=n;Y[X].loadView=Z;Y[X].renderTemplate=e}}(function(ac){var ag=H(ac);ag.define.onLoad(ag.onLoadParam);if(A&&A[ac]){var ad=A[ac];for(var af=0,ae=ad.length;af<ae;af++){var ab=ad[af];tipJS.action(ab.name,ab.param)}delete A[ac]}})(W)};var u=function(W,Y,aa){var Z=q[W][Y].requireList;for(var X=Z.length;X--;){if(Z[X]===true){continue}if(aa.indexOf(Z[X])>=0){Z[X]=true;break}}for(var X=Z.length;X--;){if(Z[X]!==true){return false}}return true};var k=function(i){return g.pathDiv+i+g.pathDiv};var c=tipJS.cloneObject=function(i){if(typeof Object.create==="function"){return Object.create(i)}c=tipJS.cloneObject=function(X){function W(){}W.prototype=X;return new W()};return c(i)};var D=tipJS.echo=function(Y,W,X){if(X&&(typeof X!="string"||typeof X=="string"&&X.split(".").length>5)){return}if(!W){W=""}if(Y===null||Y===undefined){console.log(((X)?X+".":"")+Y);return}if(typeof Y=="boolean"||typeof Y=="number"||typeof Y=="string"){if(typeof Y==W||W==""){console.log(((X)?X+".":"")+Y)}return}for(var i in Y){if(Y[i]&&Y[i] instanceof Array){console.log(((X)?X+".":"")+i+":Array");D(Y[i],W,((X)?X+".":"")+i)}else{if(Y[i]&&typeof Y[i]=="object"){console.log(((X)?X+".":"")+i+":Object");D(Y[i],W,((X)?X+".":"")+i)}else{if(typeof Y[i]==W||W==""){console.log(((X)?X+".":"")+i+":"+Y[i])}}}}};var s=tipJS.uniqueArray=function(X){var Z=[],W=X.length;for(var aa=0;aa<W;aa++){for(var Y=aa+1;Y<W;Y++){if(X[aa]===X[Y]){Y=++aa}}Z.push(X[aa])}return Z};var L=function(i,W){q[i]=q[i]||{};q[i][W]=q[i][W]||{}};var F=function(Y,X){for(var Z=0,W=X.length;Z<W;Z++){var aa=X[Z];if(Y.noCache&&Y.noCache===true){aa+=(aa.indexOf("?")<0)?"?":"&";aa+=(Y.noCacheParam?Y.noCacheParam:p.noCacheParam)+"=";if(Y.noCacheAuto===true){aa+=Math.random()}else{aa+=(Y.noCacheVersion?Y.noCacheVersion:p.noCacheVersion)}}document.write('<script type="text/javascript" charset="'+(Y.charSet?Y.charSet:p.charSet)+'" src="'+aa+'"><\/script>')}};tipJS.config=function(X){if(X.commonLib){F(X,X.commonLib);delete X.commonLib}if(X.commonModel){F(X,X.commonModel);delete X.commonModel}if(X.commonView){F(X,X.commonView);delete X.commonView}p=j(X,q.OBJECT_TEMPLATE.config);if(tipJS.isDevelopment===null){var W=window.location.hostname;for(var Y=p.developmentHostList.length;Y--;){if(W.match(p.developmentHostList[Y])!==null){tipJS.isDevelopment=true;break}}}};var a=function(){var i=new Date();return(i.getHours()*60*60+i.getMinutes()*60+i.getSeconds())+(i.getMilliseconds()/1000)};tipJS.benchmark={};var x={};tipJS.benchmark.mark=function(i){x[i]=a()};tipJS.benchmark.elapsedTime=function(i,Y,W){var X=x[i],aa=x[Y],Z=aa-X;if(W){W(i,Y,X,aa,Z)}else{tipJS.log("elapsed time["+i+" to "+Y+"] : "+Z+" seconds","[BENCHMARK]")}};var I=function(){var i=false;if(window.XMLHttpRequest){i=new XMLHttpRequest()}else{if(window.ActiveXObject){try{i=new ActiveXObject("Msxml2.XMLHTTP")}catch(X){try{i=new ActiveXObject("Microsoft.XMLHTTP")}catch(W){}}}}I=function(){return i};return I()};var e=function(Y){var aa=S();if(h(aa).templateCache&&r[Y.url]){var X=N(r[Y.url],Y.data);if(typeof Y.renderTo=="string"){document.getElementById(Y.renderTo).innerHTML+=X}return X}var W=C(aa),ab=P(Y.url,W),i=I();i.open("GET",ab,false);try{i.send(null)}catch(Z){return null}if(i.readyState==4&&i.status==200){var X=r[Y.url]=i.responseText;X=N(X,Y.data);if(typeof Y.renderTo=="string"){document.getElementById(Y.renderTo).innerHTML+=X}return X}else{throw"Could not find template file:"+ab}};var N=function(W,Y){W=W.replace(/\r\n/g,"\n");W=W.replace(/\r/g,"\n");W=W.replace(/\\/g,"\\\\");W=W.replace(/\n/g,"\\n");W=W.replace(/"/g,'\\"');var i=W.split("\\n"),X=new Function("data",O(i));return X(Y)};var O=function(ae){var ah=[],af=[],ac="PLANE",ag="VALUE",X="PARSE",aa="__temp_HTML__.push(";ah.push("var __temp_HTML__ = [];");for(var Z=0,ad=ae.length;Z<ad;Z++){var ab=ae[Z];af.push(ac);if(ab.indexOf("@>")>-1){if(ab.indexOf("<@=")>-1){af[Z]=ag}else{if(ab.indexOf("<@")>-1){af[Z]=X}else{for(var Y=af.length-1;Y>=0;Y--){if(ae[Y].indexOf("<@")>-1&&af[Y]==ac){for(var W=Y;W<=Z;W++){af[W]=X}break}}}}}}for(var Z=0,ad=af.length;Z<ad;Z++){var ab=ae[Z];if(af[Z]==ag){ab='"'+ab+'"';ab=ab.replace(/<@=/g,'"+');ab=ab.replace(/@>/g,'+"');ah.push(aa+ab+");")}else{if(af[Z]==X){ab=ab.replace(/<@/g,"");ab=ab.replace(/@>/g,"");ah.push(ab)}else{ab='"'+ab+'"';ah.push(aa+ab+");")}}}ah.push("return __temp_HTML__.join('');");return ah.join("")};tipJS.commonModel=function(i){if(!i||typeof i!="object"||(!i.__name&&!i.name)){throw"Please check your CommonModel definition"}var W=(i.__name)?i.__name:i.name;if(typeof(W)!="string"){throw"Please check your CommonModel definition"}if(i.__extend&&i.__extend===W){throw"Can't extend itself"}if(i.__name){delete i.__name}q.common.models[W]=i};tipJS.commonView=function(i){if(!i||typeof i!="object"||(!i.__name&&!i.name)){throw"Please check your CommonView definition"}var W=(i.__name)?i.__name:i.name;if(typeof(W)!="string"){throw"Please check your CommonView definition"}if(i.__extend&&i.__extend===W){throw"Can't extend itself"}if(i.__name){delete i.__name}q.common.views[W]=i};var g=(function(){var i={pathDiv:"/",blank:"",extJS:"js",extDiv:"."};return i})();tipJS.log=function(X,Y){window.console=window.console||{log:function(){},error:function(){}};var ac=new Date(),i=ac.getFullYear(),ae=ac.getMonth()+1,Z=ac.getDate(),ad=ac.getHours(),W=ac.getMinutes(),aa=ac.getSeconds(),ab=ac.getMilliseconds();console.log(((Y)?Y:"")+i+"/"+ae+"/"+Z+" "+ad+":"+W+":"+aa+"."+ab+" "+X)};tipJS.debug=function(i){if(tipJS.isDevelopment){tipJS.log(i,"[DEBUG]")}};tipJS.controller=function(i){f("controllers",i)};tipJS.model=function(i){f("models",i)};tipJS.view=function(i){f("views",i)};tipJS.action=function(af,W){var ag,aa,ac;try{ag=af.split(".");aa=ag[0];ac=ag[1];if(aa.length==0||ac.length==0){throw""}}catch(ab){throw"tipJS.action : invalid parameter"}var ae=H(aa);if(!ae||!ae.loadOrder||!ae.loadOrder.isLastOrder()){A=A||{};A[aa]=A[aa]||[];A[aa].push({name:af,param:W});return}if(!ae.controller||!ae.controller[ac]){throw"Could not find controller: "+af}var i;if(tipJS.isDevelopment===true){i=a()}var Y=c(ae.controller[ac]);if(!Y){throw"Could not find controller"}var X={controllerName:(Y.__name)?Y.__name:Y.name,controller:Y,beforeController:ae.define.beforeController,afterController:ae.define.afterController};if(X.beforeController){var Z=X.beforeController(W);if(Z===false){return}Z=true}var ad=function(){var ak=X.controller;try{var al=function(){if(ak.afterInvoke){ak.afterInvoke(W)}};var ah=function(){var am=true;if(ak.invoke){am=ak.invoke(W)}if(am!==false){al()}};var ai=function(){var am=true;if(ak.beforeInvoke){am=ak.beforeInvoke(W)}if(am!==false){ah()}};M.controllerStack=M.controllerStack||[];M.controllerStack.push(ak);ai();M.controllerStack.pop()}catch(aj){M.controllerStack.pop();if(ak.exceptionInvoke){ak.exceptionInvoke(aj,W)}else{M.controllerStack=[];throw aj}}if(X.afterController){X.afterController(W)}if(tipJS.isDevelopment===true){tipJS.debug(af+" completed in "+(a()-i)+" seconds")}};if(X.controller.async===true){setTimeout(ad,15)}else{ad()}};tipJS.loadApp=function(aa,ab){for(var W=0,X=aa.length;W<X;W++){var Z=aa[W],Y=[];if(ab){M[Z]=M[Z]||{};M[Z].onLoadParam=ab}Y.push(p.applicationPath[Z]);Y.push(g.pathDiv);Y.push(p.defineFileName);Y.push(g.extDiv);Y.push(g.extJS);setTimeout(function(){if(!M[Z].define){throw"Could not find application: "+Z}},1000);v(Y.join(g.blank),{nocache:true,version:Math.random(),paramName:p.noCacheParam})}};tipJS.define=function(X){X=j(X,q.OBJECT_TEMPLATE.define);if(X.templateCache===undefined){X.templateCache=p.templateCache}if(X.noCache===undefined){X.noCache=p.noCache;X.noCacheVersion=p.noCacheVersion;X.noCacheParam=p.noCacheParam;X.noCacheAuto=p.noCacheAuto}else{if(X.noCache===true){if(X.noCacheVersion===undefined){X.noCacheVersion=p.noCacheVersion}if(X.noCacheParam===undefined){X.noCacheParam=p.noCacheParam}if(X.noCacheAuto===undefined){X.noCacheAuto=p.noCacheAuto}}}var i=X.name;M[i]=M[i]||{};M[i].loadOrder={};M[i].loadOrder=j(M[i].loadOrder,q.OBJECT_TEMPLATE.loadOrder);var W=M[i].loadOrder.presentOrder();L(i,W);M[i].define=X;y(i,W)};var q={};q.OBJECT_TEMPLATE={config:{noCache:false,noCacheVersion:1,noCacheParam:"noCacheVersion",noCacheAuto:false,templateCache:true,charSet:"utf-8",defineFileName:"define",path:{controllers:"controllers",models:"models",views:"views"},developmentHostList:[],applicationPath:{}},define:{extLib:[],controllers:[],models:[],views:[],templates:[],onLoad:function(){},beforeController:function(){},afterController:function(){}},loadOrder:{index:0,init:function(){this.index=0},presentOrder:function(){return this.order[this.index]},nextOrder:function(){return this.order[++this.index]},isLastOrder:function(){return(this.index+1)==this.order.length},order:["extLib","controllers","models","views"]}};q.department=q.department||{};q.common=q.common||{};q.common.models=q.common.models||{};q.common.views=q.common.views||{};var M={controllerStack:[]},r={},A={},p=j({},q.OBJECT_TEMPLATE.config),l=window.location.pathname,Q=window.location.search,J=document.getElementsByTagName("script"),G,d,m,t,B=null,R=p.developmentHostList;for(var U=J.length;U--;){d=J[U].src;m=d.match(/tipJS-MVC-1\.24\.js$/);if(m){G=d.substring(0,d.length-m[0].length);break}}document.write('<script type="text/javascript" charset="UTF-8" src="'+G+"tipJS.config.js?"+p.noCacheParam+"="+Math.random()+'"><\/script>');if(Q.match("(\\?|&)debug")!==null||l.match("debug")!==null){B=true}else{if(Q.match("(\\?|&)nodebug")!==null||l.match("nodebug")!==null){B=false}}tipJS.isDevelopment=B})();