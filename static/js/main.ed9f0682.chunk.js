(this["webpackJsonptensorflow-js-practice"]=this["webpackJsonptensorflow-js-practice"]||[]).push([[0],{232:function(e,a,t){e.exports={container:"layers-ui_container__2GhWk","table-header":"layers-ui_table-header__37MNX",item:"layers-ui_item__2NbMY"}},233:function(e,a,t){e.exports={container:"train_container__3jwrY",controls:"train_controls__lcD_S",graph:"train_graph__2kzE-"}},250:function(e,a,t){e.exports={container:"model_container__3fCLH",model:"model_model__DMkpV"}},251:function(e,a,t){e.exports={container:"predict_container__3ynJF",graph:"predict_graph__3jTjA"}},304:function(e,a,t){e.exports={"load-data":"load-data_load-data__3K1FU"}},327:function(e,a,t){e.exports={"data-plot":"data-plot_data-plot__12tgk"}},328:function(e,a,t){e.exports=t.p+"static/media/github.49e6c8b3.png"},329:function(e,a,t){e.exports={container:"links_container__bOZ1p"}},330:function(e,a,t){e.exports={header:"header_header__v9FKw"}},334:function(e,a,t){e.exports=t(436)},339:function(e,a,t){},340:function(e,a,t){},411:function(e,a){},412:function(e,a){},420:function(e,a){},423:function(e,a){},424:function(e,a){},436:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t.n(n),c=t(303),o=t.n(c),l=(t(339),t(340),t(3)),i=t.n(l),s=t(16),u=t(8),m=t(153),f=t(47),b=t(304),d=t.n(b),p="https://storage.googleapis.com/tfjs-tutorials/carsData.json";function h(e){var a=e.dataGateway,t=Object(f.a)(a),c=Object(u.a)(t,2)[1],o=Object(n.useState)("loading..."),l=Object(u.a)(o,2),b=l[0],h=l[1],v=Object(m.a)((function(){return g.apply(this,arguments)})),y=Object(u.a)(v,2),j=y[0],O=y[1];function g(){return(g=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t.map((function(e){return{mpg:e.Miles_per_Gallon,horsepower:e.Horsepower}})).filter((function(e){return null!=e.mpg&&null!=e.horsepower})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){h("loading..."),j().then((function(e){c(e),h("Dataset successfully loaded Click to re-load")})).catch((function(e){h(e)}))}return Object(n.useEffect)((function(){return E(),function(){O()}}),[]),r.a.createElement("div",{className:d.a["load-data"]},r.a.createElement("button",{className:"btn",onClick:E},b))}var v=t(119),y=t(327),j=t.n(y);function O(e){var a=e.dataGateway,t=e.refreshGateway,c=Object(f.a)(a),o=Object(u.a)(c,1)[0],l=Object(f.a)(t),i=(Object(u.a)(l,1)[0],Object(n.useRef)());return Object(n.useEffect)((function(){if(null!=o){var e=o.map((function(e){return{x:e.horsepower,y:e.mpg}}));v.render.scatterplot(i.current,{values:e},{xLabel:"Horsepower",yLabel:"MPG",height:400})}})),r.a.createElement("div",{className:j.a["data-plot"],ref:i})}var g=t(7),E=t(57),w=t(18),_=t(121),N=t(15),G=t(232),x=t.n(G);function k(e){var a=e.layers,t=e.updateFunc,n=e.ACTIVATION;var c=function(e){var n=Number(e.target.value);a.filter((function(e){return e.layerNo!==n})).map((function(e,a){return Object(_.a)(Object(_.a)({},e),{},{layerNo:a+1})}));t((function(e){return e.filter((function(e){return e.layerNo!==n})).map((function(e,a){return Object(_.a)(Object(_.a)({},e),{},{layerNo:a+1})}))}))},o=function(e){var a,n=e.target.name,r=Number(n.match(/(\d+)/)[0]),c=e.target.value;n.includes("u-")&&(a="units",(c=Number(c))<1)||(n.includes("a-")&&(a="activation"),t((function(e){return e.map((function(e){return e.layerNo===r?Object(_.a)(Object(_.a)({},e),{},Object(w.a)({},a,c)):Object(_.a)({},e)}))})))};return r.a.createElement("div",{className:x.a.container},r.a.createElement("div",null,r.a.createElement("div",{className:x.a["table-header"]},r.a.createElement("span",null,"Layer"),r.a.createElement("span",null,"Units"),r.a.createElement("span",null,"Activation"),r.a.createElement("span",null,"Action")),a.map((function(e){return r.a.createElement("div",{className:x.a.item,key:e.layerNo},r.a.createElement("label",null,e.layerNo),r.a.createElement("input",{name:"u-".concat(e.layerNo),type:"number",min:1,max:1e5,value:e.units,onChange:o}),r.a.createElement("select",{name:"a-".concat(e.layerNo),onChange:o,defaultValue:e.activation},n.map((function(e,a){return r.a.createElement("option",{key:"o-".concat(a),value:e},e)}))),1!==a.length?r.a.createElement("button",{className:"btn",onClick:c,value:e.layerNo},"Delete"):null)}))),r.a.createElement("button",{className:"btn",onClick:function(){var e=a[a.length-1],n={layerNo:e.layerNo+1,units:e.units,activation:e.activation};t((function(e){return[].concat(Object(N.a)(e),[n])}))}},"Add new layer"))}var M=t(250),S=t.n(M),C=["relu","sigmoid","tanh","softmax","linear"];function A(e){var a=e.modelGateway,t=e.refreshGateway,c=Object(f.a)(t),o=(Object(u.a)(c,1)[0],Object(f.a)(a)),l=Object(u.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)([{layerNo:1,units:50,activation:C[0]},{layerNo:2,units:50,activation:C[0]},{layerNo:3,units:50,activation:C[0]},{layerNo:4,units:50,activation:C[0]}]),b=Object(u.a)(m,2),d=b[0],p=b[1],h=Object(n.useRef)();return Object(n.useEffect)((function(){i&&i.layers.forEach((function(e){return e.dispose()}));var e=E.sequential();e.add(E.layers.dense({inputShape:[1],units:1}));var a,t=Object(g.a)(d);try{for(t.s();!(a=t.n()).done;){var n=a.value;e.add(E.layers.dense({units:Number(n.units),activation:n.activation}))}}catch(r){t.e(r)}finally{t.f()}e.add(E.layers.dense({units:1})),s(e)}),[d]),Object(n.useEffect)((function(){i&&v.show.modelSummary(h.current,i)}),[i]),r.a.createElement("div",{className:S.a.container},r.a.createElement(k,{layers:d,updateFunc:p,ACTIVATION:C}),r.a.createElement("div",{className:S.a.model,ref:h}))}function F(e){var a=e.dataGateway,t=e.tensorsGateway,c=Object(f.a)(a),o=Object(u.a)(c,1)[0],l=Object(f.a)(t),i=Object(u.a)(l,2)[1];return Object(n.useEffect)((function(){if(null!==o){var e=E.tidy((function(){E.util.shuffle(o);var e=o.map((function(e){return e.horsepower})),a=o.map((function(e){return e.mpg})),t=E.tensor2d(e,[e.length,1]),n=E.tensor2d(a,[a.length,1]),r=t.max(),c=t.min(),l=n.max(),i=n.min();return{inputs:t.sub(c).div(r.sub(c)),labels:n.sub(i).div(l.sub(i)),inputsMin:c,inputsMax:r,labelsMin:i,labelsMax:l}}));i(e)}}),[o]),r.a.createElement("div",null)}var z=t(233),T=t.n(z);function D(e){var a=e.tensorsGateway,t=e.modelGateway,c=e.refreshGateway,o=Object(f.a)(c),l=(Object(u.a)(o,1)[0],Object(f.a)(t)),i=Object(u.a)(l,1)[0],s=Object(f.a)(a),b=Object(u.a)(s,1)[0],d=Object(n.useState)(32),p=Object(u.a)(d,2),h=p[0],y=p[1],j=Object(n.useState)(20),O=Object(u.a)(j,2),g=O[0],w=O[1],_=Object(n.useState)(!1),N=Object(u.a)(_,2),G=N[0],x=N[1],k=Object(m.a)((function(){if(!i||!b)return;return i.compile({optimizer:E.train.adam(),loss:E.losses.meanSquaredError,metrics:["mse"]}),i.fit(b.inputs,b.labels,{batchSize:h,epochs:g,shuffle:!0,callbacks:v.show.fitCallbacks(S.current,["mse"],{height:200,callbacks:["onEpochEnd"]})})})),M=Object(u.a)(k,1)[0],S=Object(n.useRef)();function C(e){switch(e.target.name){case"epochs":w(Number(e.target.value));break;case"batchSize":y(Number(e.target.value))}}return r.a.createElement("div",{className:T.a.container},r.a.createElement("div",{className:T.a.controls},r.a.createElement("label",{htmlFor:"epochs"},"Epochs: ".concat(g)),r.a.createElement("input",{type:"range",name:"epochs",value:g,min:"1",max:"200",step:"1",onChange:C}),r.a.createElement("label",{htmlFor:"batchSize"},"BatchSize: ".concat(h)),r.a.createElement("input",{type:"range",name:"batchSize",value:h,min:"1",max:"400",step:"1",onChange:C}),r.a.createElement("button",{className:"btn",onClick:function(){G||(x(!0),M().then((function(){x(!1)})))}},G?"Training in progress...":"Click to train!")),r.a.createElement("div",{className:T.a.graph,ref:S}))}var L=t(251),I=t.n(L);function H(e){var a=e.modelGateway,t=e.tensorsGateway,c=e.dataGateway,o=e.refreshGateway,l=Object(f.a)(o),i=(Object(u.a)(l,1)[0],Object(f.a)(a)),s=Object(u.a)(i,1)[0],m=Object(f.a)(t),b=Object(u.a)(m,1)[0],d=Object(f.a)(c),p=Object(u.a)(d,1)[0],h=Object(n.useRef)();return r.a.createElement("div",{className:I.a.container},r.a.createElement("button",{className:"btn",onClick:function(){var e=E.tidy((function(){var e=b.inputsMin,a=b.inputsMax,t=b.labelsMin,n=b.labelsMax,r=E.linspace(0,1,100),c=s.predict(r.reshape([100,1])),o=r.mul(a.sub(e)).add(e),l=c.mul(n.sub(t)).add(t);return[o.dataSync(),l.dataSync()]})),a=Object(u.a)(e,2),t=a[0],n=a[1],r=Array.from(t).map((function(e,a){return{x:e,y:n[a]}})),c=p.map((function(e){return{x:e.horsepower,y:e.mpg}}));v.render.scatterplot(h.current,{values:[r,c],series:["predicted","data"]},{xLabel:"Horsepower",yLabel:"MPG",height:300})}},"Do prediction"),r.a.createElement("div",{className:I.a.graph,ref:h}))}var P=t(328),B=t.n(P),R=t(329),V=t.n(R);function J(){return r.a.createElement("div",{className:V.a.container},r.a.createElement("div",null,r.a.createElement("h6",null,"By following google tutorial for"),r.a.createElement("a",{href:"https://codelabs.developers.google.com/codelabs/tfjs-training-regression/index.html#0",target:"_blank",rel:"noopener noreferrer"},"TensorFlow.js \u2014 Making Predictions from 2D Data")),r.a.createElement("a",{href:"https://github.com/makannew/tensorflow-js-practice",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:B.a,alt:"github"})," "))}var W=t(330),q=t.n(W);function K(){return r.a.createElement("div",{className:q.a.header},r.a.createElement("h1",null,"Practice the regression task through Tensorflow.js"),r.a.createElement("p",null,"The goal is predicting cars MPG (Miles per Gallon) from given Horsepower. It achieves by adjusting and training a model by the available dataset. Finally, evaluating the model by comparing the predicted values with the real one."))}function U(e){var a=e.refreshGateway,t=Object(f.a)(a),c=Object(u.a)(t,2)[1],o=Object(m.a)(c,200),l=Object(u.a)(o,1)[0];return Object(n.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}})),r.a.createElement(r.a.Fragment,null)}var Y=function(){var e=Object(f.b)(null),a=Object(f.b)(null),t=Object(f.b)(null),n=Object(f.b)(!1);return r.a.createElement("div",{className:"App"},r.a.createElement(U,{refreshGateway:n}),r.a.createElement(K,null),r.a.createElement(h,{dataGateway:e}),r.a.createElement(O,{dataGateway:e,refreshGateway:n}),r.a.createElement(A,{modelGateway:a,refreshGateway:n}),r.a.createElement(F,{dataGateway:e,tensorsGateway:t}),r.a.createElement(D,{tensorsGateway:t,modelGateway:a,refreshGateway:n}),r.a.createElement(H,{tensorsGateway:t,modelGateway:a,dataGateway:e,refreshGateway:n}),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[334,1,2]]]);
//# sourceMappingURL=main.ed9f0682.chunk.js.map