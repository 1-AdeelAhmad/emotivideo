(this.webpackJsonpemotivideo=this.webpackJsonpemotivideo||[]).push([[0],{41:function(e,t,n){e.exports=n(63)},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t){},56:function(e,t){},57:function(e,t){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(15),o=n.n(i),c=(n(46),n(23)),s=n(24),l=n(29),u=n(28),m=(n(47),n(83)),d=n(64),h=n(12),v=n.n(h),f=n(18),p=n(6),g=n(9);function E(){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/emotivideo/models",e.next=3,g.g(t);case 3:return e.next=5,g.i(t);case 5:return e.next=7,g.h(t);case 7:return e.next=9,g.f(t);case 9:return e.next=11,g.e(t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).componentDidMount=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:e.videoFeed(),e.startCanvasFeed();case 4:case"end":return t.stop()}}),t)}))),e.startCanvasFeed=function(){e.interval=setInterval((function(){e.canvasFeed()}),100)},e.componentWillUnmount=function(){clearInterval(e.interval)},e.videoFeed=function(){navigator.mediaDevices.getUserMedia({audio:!1,video:{width:"340",height:"180"}}).then((function(t){e.setState({stream:t}),e.videoPlayer.srcObject=t,e.videoPlayer.play()})).catch((function(e){return console.log(e)}))},e.canvasFeed=Object(f.a)(v.a.mark((function t(){var n,a,r,i,o,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.canvasFeedRef.current.getContext("2d").drawImage(e.videoPlayer,0,0,e.videoPlayer.width,e.videoPlayer.height),n=document.getElementById("videoFeed"),a=document.getElementById("canvasFeed"),t.next=6,g.b(n,new g.a).withFaceLandmarks().withAgeAndGender().withFaceExpressions();case 6:r=t.sent,i={width:e.videoPlayer.width,height:e.videoPlayer.height},o=g.j(r,i),g.c.drawFaceExpressions(a,o),c=Object.keys(r[0].expressions).find((function(e){return r[0].expressions[e]>.5})),e.props.getCurrentEmotion(c),console.log("detections",r);case 13:case"end":return t.stop()}}),t)}))),e.state={},e.canvasFeedRef=r.a.createRef(),e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(d.a,{elevation:3,variant:"outlined",className:t.root},r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement("video",{id:"videoFeed",ref:function(t){return e.videoPlayer=t},width:"340",height:"180"}),r.a.createElement("canvas",{id:"canvasFeed",ref:this.canvasFeedRef,width:"340",height:"180"})))}}]),n}(r.a.Component),b=Object(p.a)((function(e){return{root:{flexGrow:1,margin:"0 auto",width:"340px",height:"auto",marginTop:"1rem",marginBottom:"1rem"}}}))(y),x=n(79),F=n(80),j=n(81),O=n(82),k=n(84),C=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},subtitle:{marginTop:"1rem",marginBottom:"1rem",fontStyle:"italic"}}})),R=function(){var e=C();return r.a.createElement("div",null,r.a.createElement(F.a,{position:"static",color:"primary",style:{borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}},r.a.createElement(j.a,null,r.a.createElement(O.a,{variant:"h5",className:e.title},"Emoti Video"),r.a.createElement(k.a,{color:"inherit"},"Name"))),r.a.createElement(O.a,{className:e.subtitle,align:"center",display:"block",variant:"button"},"An App That Detects Facial Emotions In Real-Time"))},B=function(e){var t=e.emotion;return r.a.createElement("div",{style:{width:"75%",margin:"0 auto",paddingTop:"1rem",paddingBottom:"2rem"}},r.a.createElement(d.a,{elevation:3,style:{padding:"1rem"}},r.a.createElement(O.a,{align:"center",variant:"subtitle1"},"Current Emotion:"),r.a.createElement(O.a,{align:"center",variant:"h6"},t)))},P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).getCurrentEmotion=function(t){e.setState({emotion:t})},e.state={emotion:""},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{maxWidth:"sm",style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement(d.a,{elevation:3,style:{borderRadius:"20px"}},r.a.createElement(R,null),r.a.createElement("hr",{style:{width:"60%"}}),r.a.createElement(b,{getCurrentEmotion:this.getCurrentEmotion}),r.a.createElement("hr",{style:{width:"60%"}}),r.a.createElement(B,{emotion:this.state.emotion})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.714587e4.chunk.js.map