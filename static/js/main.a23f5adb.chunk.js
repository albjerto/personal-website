(this.webpackJsonpportfolio_website=this.webpackJsonpportfolio_website||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/download.8dcad839.png"},,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/box_1.882e172a.jpg"},function(e,t,a){e.exports=a.p+"static/media/edil_1.9b747ed9.JPG"},function(e,t,a){e.exports=a.p+"static/media/edil_2.2bce1f70.JPG"},function(e,t,a){e.exports=a.p+"static/media/edil_3.4cfb3a7b.JPG"},function(e,t,a){e.exports=a.p+"static/media/koine_1.d1e4cc3d.JPG"},function(e,t,a){e.exports=a.p+"static/media/koine_2.7369de12.JPG"},function(e,t,a){e.exports=a.p+"static/media/koine_3.2845525a.JPG"},function(e,t,a){e.exports=a.p+"static/media/mitm_1.a24fd012.JPG"},function(e,t,a){e.exports=a.p+"static/media/fabio_1.9c9d9861.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),o=a.n(r),i=(a(19),a(3)),c=a(7),l=a(5),m=a(4),d=a(6),u=(a(20),a(13));a(21);function p(e){var t=s.a.useState(0),a=Object(u.a)(t,2),n=a[0],r=a[1];return s.a.useEffect((function(){var t=setInterval((function(){n<100&&r(n+2)}),50);return 100===e.progress&&100===n&&(document.getElementById("loader-container").classList.add("fade-out-up-big"),setTimeout(e.loadingDoneCallback,500)),function(){clearTimeout(),clearInterval(t)}})),s.a.createElement("section",{id:"loader"},s.a.createElement("div",{id:"loader-container",className:"loader-container container"},s.a.createElement("svg",{viewBox:"0 0 662.3936767578125 976.2302856445312",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"662.3936767578125px",height:"976.2302856445312px",id:"loader-logo"},s.a.createElement("defs",null,s.a.createElement("linearGradient",{id:"load",x1:"0",y1:"100%",x2:"0",y2:"0"},s.a.createElement("stop",{offset:n+"%",stopColor:"#61d3a3"}),s.a.createElement("stop",{offset:n+"%",stopColor:"transparent"}))),s.a.createElement("g",{transform:"matrix(6.633274555206299, 0, 0, 6.633274555206299, -7.0870361328125, -2.51312255859375)",fill:"url(#load)",id:"g10"},s.a.createElement("path",{d:"M 154.83203 -2.5136719 L 2.265625 646.2207 L 154.83203 646.2207 L 315.95312 -2.5136719 L 154.83203 -2.5136719 z M 334.72656 88.363281 L 258.37695 389.11523 L 320.19922 646.28711 L 472.76367 646.28711 L 334.72656 88.363281 z M 433.89258 326.29883 L 455.11914 415.05078 L 598.79688 411.66797 L 578.89648 326.29883 L 433.89258 326.29883 z M 617.16992 473.68945 L 475.21875 478.92969 L 512.56445 650.00195 L 442.44922 977.48633 L 587.45312 976.42578 L 660.75195 650.66602 L 617.16992 473.68945 z ",transform:"matrix(0.1507551,0,0,0.1507551,1.0684069,0.37886605)",id:"path2"})))))}var h=a(11),v=a.n(h),f=(a(30),function(e){var t=e.clickHandler,a=e.currentSection,n=e.items.map((function(e){return s.a.createElement("li",{className:"navbar-item",key:e.name},s.a.createElement("a",{href:"#"+e.name,onClick:t,className:"navbar-item navbar-item-dimensions"+(e.name===a?" active":"")},e.name))}));return s.a.createElement("nav",{className:"navbar"},n)}),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).navbarMenuClick=function(){var e=!a.state.isExpanded;a.setState({isExpanded:e}),document.getElementById("navbar-list").classList.toggle("fade-in-down")},a.navbarLinkClink=function(e){e.preventDefault();var t=e.target.hash;v()(t,{ease:"inOutQuad",duration:400})},a.state={isExpanded:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.currentSection;return s.a.createElement("div",{className:"top"},s.a.createElement("div",{className:"overlay"+(this.state.isExpanded?" expanded":"")},s.a.createElement("ul",{className:"navbar-list",id:"navbar-list"},s.a.createElement(f,{items:t,clickHandler:this.navbarLinkClink,currentSection:a}))),s.a.createElement("div",{className:"burger-button"+(this.state.isExpanded?" expanded":""),onClick:this.navbarMenuClick},s.a.createElement("span",{className:"burger-line"}),s.a.createElement("span",{className:"burger-line"}),s.a.createElement("span",{className:"burger-line"})))}}]),t}(s.a.Component),w=a(2),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._setMaxPoints=function(e){a.setState({totPoints:e})},a._setThreshold=function(e){a.setState({thr:e})},a._setDelts=function(e){a.setState({delta:e})},a._setColors=function(e){a.setState({colors:e})},a._easeOutExpo=function(e){return 1-Math.pow(1-e,4)},a._bezier=function(e){return e*e*(3-2*e)},a._updateCameraPosition=function(){var e=1===a.state.cameraDirection?a.state.cameraStartingPos.x:a.state.cameraEndPos.x,t=1===a.state.cameraDirection?a.state.cameraEndPos.x:a.state.cameraStartingPos.x,n=1===a.state.cameraDirection?a.state.cameraStartingPos.z:a.state.cameraEndPos.z,s=1===a.state.cameraDirection?a.state.cameraEndPos.z:a.state.cameraStartingPos.z,r=Math.round(100*((a.camera.position.x-e)/(t-e)+Number.EPSILON))/100,o=Math.round(100*((a.camera.position.z-n)/(s-n)+Number.EPSILON))/100;if(1!==r){var i=e+a._easeOutExpo(2.5*(a.clock.elapsedTime-a.state.startTime))*(t-e);a.camera.position.setX(i)}if(1!==o){var c=n+a._easeOutExpo(2.5*(a.clock.elapsedTime-a.state.startTime))*(s-n);a.camera.position.setZ(c)}1===o&&1===r&&a.setState({cameraStillMoving:!1})},a.createCanvas=function(e,t){var a=e.createElement("canvas");return a.className="scene",a.container=e.getElementById(t),a.container.appendChild(a),a},a.rendererSetup=function(e){var t=e.offsetWidth,a=e.offsetHeight,n=new w.r({canvas:e,antialias:!0,alpha:!0});return n.setPixelRatio(window.devicePixelRatio),n.setSize(t,a),n},a.raycasterSetup=function(e){var t=new w.k;return t.params.Points.threshold=e,t},a.cameraSetup=function(e,t,n,s,r,o,i,c){var l=new w.i(e,t/n,s,r);return l.position.set(o,i,c),l.lookAt(a.state.origin),l},a.getEuclideanFromSpherical=function(e,t){var a=Object();return a.x=Math.cos(e)*Math.cos(t),a.y=Math.sin(t),a.z=Math.sin(e)*Math.cos(t),a},a.movePoint=function(e){var t=a.getEuclideanFromSpherical(e.vec.theta,e.vec.phi);e.vec.x+=t.x*a.state.delta*e.dir,e.vec.y+=t.y*a.state.delta*e.dir,e.vec.z+=t.z*a.state.delta*e.dir,a.attributePositions.array[3*e.idx]=e.vec.x,a.attributePositions.array[3*e.idx+1]=e.vec.y,a.attributePositions.array[3*e.idx+2]=e.vec.z,(Math.abs(e.initial.x-e.vec.x)>a.state.thr||Math.abs(e.initial.y-e.vec.y)>a.state.thr||Math.abs(e.initial.z-e.vec.z)>a.state.thr)&&(e.dir=-e.dir)},a.rotate=function(e,t,a){var n={x:0,y:0},s=e*Math.cos(a)-t*Math.sin(a),r=e*Math.sin(a)+t*Math.cos(a);return n.x=s,n.y=r,n},a.componentDidMount=function(){a.canvas=a.createCanvas(document,"home"),a.toMove=[],a.renderer=a.rendererSetup(a.canvas),a.scene=new w.l,a.raycaster=a.raycasterSetup(6),a.camera=a.cameraSetup(50,a.canvas.offsetWidth,a.canvas.offsetHeight,.1,2e3,a.state.cameraStartingPos.x,a.state.cameraStartingPos.y,a.state.cameraStartingPos.z);var e=new w.f;a.scene.add(e);var t=new w.n;t.setCrossOrigin("");var n=t.load("dotTexture.png");n.anisotropy=a.renderer.capabilities.getMaxAnisotropy(),a.dotsGeometry=new w.e;for(var s=new Float32Array(3*a.state.totPoints),r=new Float32Array(a.state.totPoints),o=new Float32Array(3*a.state.totPoints),i=0;i<a.state.totPoints;i++){var c=new w.p;c.color=Math.floor(Math.random()*a.state.colors.length),c.theta=Math.random()*Math.PI*2,c.phi=(1-Math.sqrt(Math.random()))*Math.PI/2*(Math.random()>.5?1:-1);var l=a.getEuclideanFromSpherical(c.theta,c.phi);if(c.x=l.x,c.y=l.y,c.z=l.z,c.multiplyScalar(100+2*(Math.random()-.5)),c.scaleX=5,Math.random()>.5){var m=Math.random()>.5?1:-1,d={initial:c.clone(),vec:c,idx:i,dir:m};a.toMove.push(d)}if(a.dotsGeometry.vertices.push(c),c.toArray(s,3*i),a.state.colors[c.color].toArray(o,3*i),r[i]=4,i>100){var u=Math.floor(100*(i-100)/a.state.totPoints);u%10===0&&a.props.progressCallback(u)}}var p=new w.b;a.attributePositions=new w.a(s,3),p.setAttribute("position",a.attributePositions),a.attributeSizes=new w.a(r,1),p.setAttribute("size",a.attributeSizes),a.attributeColors=new w.a(o,3),p.setAttribute("color",a.attributeColors);var h=new w.m({uniforms:{texture:{value:n}},vertexShader:document.getElementById("wrapVertexShader").textContent,fragmentShader:document.getElementById("wrapFragmentShader").textContent,transparent:!0,opacity:.6});a.wrap=new w.j(p,h),a.wrap.translateX(150),a.scene.add(a.wrap),a.segmentsGeom=new w.e;var v=new w.g({color:16777215,opacity:.25,vertexColors:w.q,transparent:!0});for(i=0;i<a.dotsGeometry.vertices.length-1;i++)for(var f=a.dotsGeometry.vertices[i],g=0;g<a.dotsGeometry.vertices.length-1;g++)i!==g&&f.distanceTo(a.dotsGeometry.vertices[g])<13&&(a.segmentsGeom.vertices.push(f),a.segmentsGeom.vertices.push(a.dotsGeometry.vertices[g]),a.segmentsGeom.colors.push(a.state.colors[f.color]),a.segmentsGeom.colors.push(a.state.colors[f.color]));a.segments=new w.h(a.segmentsGeom,v),a.segments.translateX(150),e.add(a.segments),window.addEventListener("mousemove",a.mouseMovementHandler),window.addEventListener("resize",a.resizeHandler),document.getElementById("header-container").addEventListener("click",a.canvasClickHandler),a.canvas.addEventListener("click",a.canvasClickHandler),a.mouse=new w.o(-100,-100),a.clock=new w.c,a.props.progressCallback(100),a.start()},a.start=function(){a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.animate=function(){a.dotsGeometry.verticesNeedUpdate=!0,a.segmentsGeom.verticesNeedUpdate=!0,a.wrap.rotation.z+=.001,a.segments.rotation.z+=.001,a.state.cameraStillMoving?a._updateCameraPosition():(a.wrap.rotation.x=.05*a.state.mouse.x,a.wrap.rotation.y=.05*a.state.mouse.y,a.segments.rotation.x=.05*a.state.mouse.x,a.segments.rotation.y=.05*a.state.mouse.y),a.toMove.forEach((function(e){a.movePoint(e)})),a.raycaster.setFromCamera(a.state.mouse,a.camera),a.clock.getElapsedTime(),a.attributeSizes.needsUpdate=!0,a.attributePositions.needsUpdate=!0,a.renderScene(),a.frameId=requestAnimationFrame(a.animate)},a.renderScene=function(){a.renderer.render(a.scene,a.camera)},a.stop=function(){cancelAnimationFrame(a.frameId)},a.componentWillUnmount=function(){a.stop(),window.removeEventListener("resize",a.resizeHandler),window.removeEventListener("mousemove",a.mouseMovementHandler),document.getElementById("header-container").removeEventListener("click",a.canvasClickHandler),a.canvas.removeEventListener("click",a.canvasClickHandler)},a.mouseMovementHandler=function(e){var t=a.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/a.canvas.offsetWidth*2-1,s=-(e.clientY-t.top)/a.canvas.offsetHeight*2+1;a.setState({mouse:{x:n,y:s}})},a.resizeHandler=function(e){var t=a.canvas.offsetWidth,n=a.canvas.container.offsetHeight;a.canvas.height=a.canvas.offsetHeight,a.canvas.width=a.canvas.container.offsetWidth,a.camera.aspect=t/n,a.camera.updateProjectionMatrix(),a.renderer.setSize(t,n),a.renderer.setPixelRatio(window.devicePixelRatio)},a.canvasClickHandler=function(){a.state.cameraStillMoving||(a.setState({clicked:!a.state.clicked}),a.setState({cameraStillMoving:!0}),a.setState({startTime:a.clock.elapsedTime}),a.state.clicked?(a.setState({cameraDirection:1}),window.removeEventListener("mousemove",a.mouseMovementHandler)):(a.setState({cameraDirection:-1}),window.addEventListener("mousemove",a.mouseMovementHandler)))},a.state={origin:new w.p(0,0,0),thr:15,totPoints:2200,delta:.1,colors:[new w.d(13692927),new w.d(1604557),new w.d(1795966)],mouse:{x:0,y:0},cameraStartingPos:new w.p(-100,0,350),cameraEndPos:new w.p(130,0,80),animationStartTime:null,clicked:!1,cameraDirection:1,cameraStillMoving:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return null}}]),t}(s.a.Component),b=(a(31),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).slideOut=function(){a.setState({active:!1})},a.progressCallback=function(e){a.props.progressCallback(e)},a.render=function(){return s.a.createElement("section",{id:"home",className:"header-section"},s.a.createElement("div",{id:"header-container",className:"header-container container"},s.a.createElement("div",{id:"welcome",className:"welcome"},s.a.createElement("h1",{id:"welcome-hero",className:"welcome-hero"},"Hello!"),s.a.createElement("h2",{id:"welcome-name",className:"welcome-name"},s.a.createElement("span",{className:"letter"},"I"),s.a.createElement("span",{className:"letter"},"'"),s.a.createElement("span",{className:"letter"},"m"),s.a.createElement("span",{className:"space"}," "),s.a.createElement("span",{className:"letter"},"A"),s.a.createElement("span",{className:"letter"},"l"),s.a.createElement("span",{className:"letter"},"b"),s.a.createElement("span",{className:"letter"},"e"),s.a.createElement("span",{className:"letter"},"r"),s.a.createElement("span",{className:"letter"},"t"),s.a.createElement("span",{className:"letter"},"o"),s.a.createElement("span",{className:"space"}," "),s.a.createElement("span",{className:"letter"},"J"),s.a.createElement("span",{className:"letter"},"e"),s.a.createElement("span",{className:"letter"},"s"),s.a.createElement("span",{className:"letter"},"u"),s.a.createElement("span",{className:"letter"},".")),s.a.createElement("p",{id:"welcome-info",className:"welcome-info"},"Software Engineer and Web Developer. I build things."),s.a.createElement("p",{id:"welcome-sectors",className:"welcome-sectors"},s.a.createElement("span",null,"AI"),s.a.createElement("span",null,"Web"),s.a.createElement("span",null,"Security")))),s.a.createElement(E,{progressCallback:a.progressCallback}))},a.state={active:!0},a}return Object(d.a)(t,e),t}(s.a.Component)),x=a(12),y=a.n(x),k=(a(32),function(){return s.a.createElement("section",{id:"about",className:"about-section"},s.a.createElement("div",{className:"about-container container to-slide up"},s.a.createElement("div",{className:"about-text"},s.a.createElement("h3",null,"About me"),s.a.createElement("p",{className:"about-info"},"I'm a Software Engineer based in Forl\xec, Italy."),s.a.createElement("p",{className:"about-info"},"I'm currently attending the Master Degree in Computer Engineering @ University of Bologna."),s.a.createElement("p",{className:"about-info about-interests"},"I love bringing things to life, creating smooth and elegant digital experiences."),s.a.createElement("p",{className:"about-info about-interests"},"I'm interested in all kinds of technology, but my major focuses are Artificial Intelligence, Machine Learning, CyberSecurity and Web Development."),s.a.createElement("p",{className:"about-additional about-interests"},"I also have good knowledge of photographic post-processing and editing software."),s.a.createElement("p",{className:"about-additional about-interests"},"In my free time, I enjoy learning new things, taking landscape photographs or hiking.")),s.a.createElement("div",{className:"about-photo"},s.a.createElement("img",{className:"propic",alt:"Alberto profile",src:y.a}))))}),S=(a(33),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._nextSlide=function(e){var t=a.state.curr+1>=a.state.len?0:a.state.curr+1;a.setState({curr:t},(function(){a.changeSlide(e)}))},a._prevSlide=function(e){var t=a.state.curr-1<0?a.state.len-1:a.state.curr-1;a.setState({curr:t},(function(){a.changeSlide(e)}))},a.onButtonClick=function(e){var t=e.target;t.classList.contains("next")||t.classList.contains("next-button")?a._nextSlide(t):a._prevSlide(t)},a.changeSlide=function(e){var t=Array.from(e.classList.contains("next")?e.parentElement.parentElement.children:e.parentElement.children),n=e.classList.contains("next")||e.classList.contains("next-button")?"right":"left",s=t.find((function(e){return"DIV"!==e.tagName&&!e.classList.contains("hidden")}));if(void 0!==s){s.classList.remove("fade-in-left"),s.classList.remove("fade-in-right"),s.classList.add("hidden");var r=t.find((function(e){return e.classList.contains("image-slide-"+a.state.curr)}));void 0!==r&&(r.classList.remove("hidden"),r.classList.add("fade-in-"+n))}};var n=a.props.imgs.length;return a.state={curr:0,len:n},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.imgs;return this.state.len>1?s.a.createElement("div",{className:"project-thumbnail"},e,s.a.createElement("div",{className:"next-button",onClick:this.onButtonClick},s.a.createElement("span",{className:"next"}),s.a.createElement("span",{className:"next"})),s.a.createElement("div",{className:"prev-button",onClick:this.onButtonClick},s.a.createElement("span",{className:"prev"}),s.a.createElement("span",{className:"prev"}))):s.a.createElement("div",{className:"project-thumbnail"},e)}}]),t}(s.a.Component)),N=function(e){var t=0,a=0,n=e.list.map((function(e){var n=0,r=e.image.map((function(t){return s.a.createElement("img",{key:t,className:"image-slide-"+n+(n++>0?" hidden":""),src:t,alt:"Preview for project "+e.title})}));return s.a.createElement("div",{className:"project to-slide "+(t++%2===0?"left":"right"),key:e.title},s.a.createElement("div",{className:"project-info"},s.a.createElement(S,{imgs:r}),s.a.createElement("div",{className:"project-text-wrapper"},s.a.createElement("h4",{className:"project-title"},e.title),s.a.createElement("p",{className:"project-description"},e.desc),s.a.createElement("div",{className:"project-tech"},e.tech.map((function(e){return s.a.createElement("span",{className:"tech",key:a++},e)}))),s.a.createElement("div",{className:"project-more"},s.a.createElement("a",{href:e.more,target:"projects",title:e.link_title},e.icon)))))}));return s.a.createElement("section",{id:"projects",className:"projects-section"},s.a.createElement("div",{className:"projects-container container to-slide up"},s.a.createElement("h3",null,"Projects"),s.a.createElement("p",null,"Here are some of the projects I have worked on lately:"),s.a.createElement("div",{className:"projects"},n)))},M=a(1),L=(a(34),function(e){var t=e.side,a=11;return e.items.map((function(e){return s.a.createElement("li",{key:e.name,className:"contacts-item"},s.a.createElement("a",{className:"contacts-link"+(t?" fade-in-left-"+a--:""),title:"Link to Alberto's "+e.name,href:e.link,target:"social"},e.icon))}))}),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.attribute.it;a.setState(Object(M.a)({},t,e.target.value.trim()))},a.handleSubmit=function(e){e.preventDefault(),a._validateForm()},a._validateForm=function(){if(a.state.name.length<5)return document.getElementById(a.nameId).classList.add("error-highlight"),!1;document.getElementById(a.nameId).classList.remove("error-highlight");var e=a.state.email;return a._validateMail(e)?(document.getElementById(a.emailId).classList.remove("error-highlight"),a.state.text.length<5?(document.getElementById(a.textId).classList.add("error-highlight"),!1):(document.getElementById(a.textId).classList.remove("error-highlight"),!0)):(document.getElementById(a.emailId).classList.add("error-highlight"),!1)},a._validateMail=function(e){return!!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)},a.nameId="name",a.emailId="email",a.textId="text",a.state={name:"",email:"",text:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.contacts;return s.a.createElement("section",{id:"contacts",className:"contacts-section"},s.a.createElement("div",{className:"contacts-container container to-slide up"},s.a.createElement("div",{className:"contacts-text"},s.a.createElement("h3",null,"Get in touch "),s.a.createElement("p",{className:"mail-contacts"},"If you want to get in touch with me for any reason, may it be about work or just to say hi, send me a mail at ",s.a.createElement("a",{className:"mail-link",href:"mailto:albertojesu1995@gmail.com"},"albertojesu1995@gmail.com")," and I will get back to you as soon as possible.")),s.a.createElement("div",{className:"contacts-mobile"},s.a.createElement("p",null,"Alternatively, if you wish to follow me or to contact me in other ways, you can also find me on "),s.a.createElement("ul",{className:"contacts-banner"},s.a.createElement(L,{items:e,side:!1})))),s.a.createElement("div",{className:"contacts-sidebar",id:"contacts-sidebar"},s.a.createElement("ul",{className:"contacts-sidebar-list"},s.a.createElement(L,{items:e,side:!0}))))}}]),t}(s.a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).navItems=[{name:"home"},{name:"about"},{name:"projects"},{name:"contacts"}],n.socialMedia=[{name:"LinkedIn",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})),link:"https://www.linkedin.com/in/alberto-jesu"},{name:"Facebook",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})),link:"https://www.facebook.com/alberto.jesu"},{name:"Instagram",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),link:"https://www.instagram.com/albjerto"},{name:"GitHub",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},s.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),link:"https://www.github.com/albjerto"},{name:"500px",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M103.3 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2h.3v-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5s-68.8 13.8-93.5 38.5c-.3.3-16 16.5-21.2 23.9l-.5.6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8V20c0-5 3.9-10.5 10.5-10.5h241.3c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1H130.3v132.9h.3c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zm63.3-260.8c-.5 4.2 4.6 24.5 14.6 20.6C306 56.6 384 144.5 390.6 144.5c4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM393 414.7C283 524.6 94 475.5 61 310.5c0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM213.6 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6.2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2L265.6 284l18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L249.7 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L234 284c-18.1 17.9-20.4 19.2-20.4 22.6z"})),link:"https://www.500px.com/albjerto"}],n.projects=[{title:"Store shelf recognition",image:[a(35)],desc:"University project for the development of a computer vision algorithm that recognizes cereal boxes on store shelves, with the intent of creating a device for blind people",more:"https://github.com/gpisanelli/ProgettoCV",link_title:"Link to GitHub repository",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},s.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),tech:["python","opencv"]},{title:"Edil Landi Portfolio",image:[a(36),a(37),a(38)],desc:"Simple and fully responsive portfolio website for a construction company in Forl\xec",more:"https://www.edil-landi.it",link_title:"Link to external website",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"})),tech:["php","bootstrap","javascript"]},{title:"cercAlloggi",image:[a(39),a(40),a(41)],desc:"User friendly and map-based platform that aids off-site students in searching for an accomodation in Forl\xec (as of now)",more:"mailto:albertojesu1995@gmail.com",link_title:"Contact me to know more",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})),tech:["php","bootstrap","mysql","maps-api","javascript"]},{title:"MITM attack simulation",image:[a(42)],desc:"Simulation of a man-in-the-middle attack that aims to find vulnerabilities in the most used IoT protocols, in collaboration with CryptoNet Labs",more:"mailto:albertojesu1995@gmail.com",link_title:"Contact me to know more",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})),tech:["python","java","android","wolfssl"]},{title:"robo-butler",image:[a(43)],desc:"Project that simulates with a physical robot, and its virtual twin, the behaviour of a butler in a room full of moving obstacles in a technologically heterogeneous environment",more:"https://github.com/albjerto/EsameISS2019",link_title:"Link to GitHub repository",icon:s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},s.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),tech:["kotlin","java","ai","node","javascript","mqtt","coap","prolog"]}],n.componentDidMount=function(){window.addEventListener("scroll",n.handleScroll)},n.loadingDoneCallback=function(){n.setState({loaded:!0})},n.updateProgressCallback=function(e){n.setState({progress:e})},n.componentWillUnmount=function(){window.removeEventListener("scroll",n.handleScroll)},n.componentDidUpdate=function(){n.state.loaded&&(document.body.style.overflowY="visible",n.slideInHeaderElements())},n.slideInHeaderElements=function(){document.getElementsByClassName("scene")[0].style.animation="fadeInRight .3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";for(var e,t=document.getElementById("welcome").childNodes,a=0;a<t.length;a++)e=a+1,t[a].style.animation="fadeInLeft .3s cubic-bezier(0.645, 0.045, 0.355, 1) ."+e+"s forwards"},n.handleScroll=function(e){n.updateScroll(),n.updateSection(),n.slideInVisibleElements()},n.slideInVisibleElements=function(){Array.from(document.getElementsByClassName("to-slide")).forEach((function(e){if(n._isInViewPort(e)){e.classList.remove("to-slide");var t=e.classList[e.classList.length-1];e.classList.remove(t),e.classList.add("fade-in-"+t)}}))},n._isInViewPort=function(e){var t=e.getBoundingClientRect();return((window.innerHeight||document.documentElement.clientHeight)-t.top)/100>=2},n.updateScroll=function(){var e;e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n.setState({currentScroll:e})},n.updateSection=function(){var e=Array.from(document.getElementsByTagName("section")).filter((function(e){return e.offsetTop-n.state.currentScroll<=1})),t=e[e.length-1];t&&(n.toggleSidebar(t.getAttribute("id"),n.state.currentSection,document.getElementById("contacts-sidebar")),n.setState({currentSection:t.getAttribute("id")}))},n.toggleSidebar=function(e,t,a){"contacts"===e?(a.classList.contains("fade-in-left")&&a.classList.remove("fade-in-left"),a.classList.add("fade-out-left")):"contacts"!==e&&"contacts"===t&&(a.classList.contains("fade-out-left")&&a.classList.remove("fade-out-left"),a.classList.add("fade-in-left"))},n.state={currentScroll:0,currentSection:"home",loaded:!1,progress:0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=s.a.createElement(b,{progressCallback:this.updateProgressCallback});return this.state.loaded?s.a.createElement("div",{className:"page-container"},s.a.createElement(g,{items:this.navItems,currentSection:this.state.currentSection}),e,s.a.createElement(k,null),s.a.createElement(N,{list:this.projects}),s.a.createElement(z,{contacts:this.socialMedia})):s.a.createElement("div",{className:"page-container"},s.a.createElement(p,{progress:this.state.progress,loadingDoneCallback:this.loadingDoneCallback}),e)}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.a23f5adb.chunk.js.map