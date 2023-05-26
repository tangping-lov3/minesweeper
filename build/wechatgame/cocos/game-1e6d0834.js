System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./pipeline-state-manager-f4a950fe.js","./deprecated-dacf9914.js"],(function(e,t){"use strict";var i,n,r,s,a,o,u,c,h,l,d,_,f,m,E,T,g,p,S,P,R,y,I,N,v,w,b,A,C,x,D,k,M,B,V,L,O,F,q,j,H,G,U,W,Y,X,J,z,Z,K,Q;return{setters:[function(e){i=e.z,n=e.S,r=e.l,s=e.A,a=e.F,o=e.D,u=e.ao,c=e.y,h=e.a,l=e.j,d=e.J,_=e.b,f=e.w},function(e){m=e.a8,E=e.a0,T=e.ac,g=e.e,p=e.g,S=e.at,P=e.c,R=e.av,y=e.b,I=e.aj,N=e.n,v=e.ah,w=e.h,b=e.i,A=e.a6,C=e.bA,x=e.bt,D=e.bH,k=e.bs,M=e.bq},function(e){B=e.bb,V=e.ad,L=e.aV,O=e.ak,F=e.aM},function(e){q=e.V,j=e.e,H=e.j},function(e){G=e.a,U=e.P,W=e.S,Y=e.s,X=e.d,J=e.J,z=e.c},function(e){Z=e.k,K=e.j,Q=e.m}],execute:function(){var $=new q,ee=function(){var e=t.prototype;function t(){this._curTime=0}return e.init=function(){var e,t,s,a,o,u,c,h=this;return this.settings={enabled:null===(e=i.querySettings(n.Category.SPLASH_SCREEN,"enabled"))||void 0===e||e,totalTime:null!==(t=i.querySettings(n.Category.SPLASH_SCREEN,"totalTime"))&&void 0!==t?t:3e3,base64src:null!==(s=i.querySettings(n.Category.SPLASH_SCREEN,"base64src"))&&void 0!==s?s:"",effect:null!==(a=i.querySettings(n.Category.SPLASH_SCREEN,"effect"))&&void 0!==a?a:"FADE-INOUT",clearColor:null!==(o=i.querySettings(n.Category.SPLASH_SCREEN,"clearColor"))&&void 0!==o?o:new m(.88,.88,.88,1),displayRatio:null!==(u=i.querySettings(n.Category.SPLASH_SCREEN,"displayRatio"))&&void 0!==u?u:.4,displayWatermark:null===(c=i.querySettings(n.Category.SPLASH_SCREEN,"displayWatermark"))||void 0===c||c},this._curTime=0,!this.settings.enabled||""===this.settings.base64src||this.settings.totalTime<=0?(this.settings.totalTime=0,Promise.resolve()):(this.device=r.director.root.device,this.swapchain=r.director.root.mainWindow.swapchain,this.framebuffer=r.director.root.mainWindow.framebuffer,this.preInit(),this.settings.displayWatermark&&this.initWarterMark(),new Promise((function(e,t){h.logoImage=new Image,h.logoImage.onload=function(){h.initLogo(),e()},h.logoImage.onerror=function(){t()},h.logoImage.src=h.settings.base64src})))},e.preInit=function(){var e=this.settings.clearColor;this.clearColors=[new m(e.x,e.y,e.z,e.w)];var t=this.device,i=this.swapchain;this.renderArea=new E(0,0,i.width,i.height),this.cmdBuff=t.commandBuffer;var n=new Float32Array([.5,.5,1,0,-.5,.5,0,0,.5,-.5,1,1,-.5,-.5,0,1]),r=4*Float32Array.BYTES_PER_ELEMENT,s=4*r;this.vertexBuffers=t.createBuffer(new T(g.VERTEX|g.TRANSFER_DST,p.DEVICE,s,r)),this.vertexBuffers.update(n);var a=new Uint16Array([0,1,2,1,3,2]),o=Uint16Array.BYTES_PER_ELEMENT,u=6*o;this.indicesBuffers=t.createBuffer(new T(g.INDEX|g.TRANSFER_DST,p.DEVICE,u,o)),this.indicesBuffers.update(a);var c=[new S("a_position",P.RG32F),new S("a_texCoord",P.RG32F)],h=new R(c,[this.vertexBuffers],this.indicesBuffers);this.quadAssmebler=t.createInputAssembler(h),this.projection=new j,j.ortho(this.projection,-1,1,-1,1,-1,1,t.capabilities.clipSpaceMinZ,t.capabilities.clipSpaceSignY,i.surfaceTransform)},e.update=function(e){var t=this.settings,i=this.device,n=this.swapchain;j.ortho(this.projection,-1,1,-1,1,-1,1,i.capabilities.clipSpaceMinZ,i.capabilities.clipSpaceSignY,n.surfaceTransform);var r=n.width,s=n.height,a=r<s?r:s;this._curTime+=1e3*e;var o=H(this._curTime/t.totalTime),u=B(o);"NONE"===t.effect&&(u=1);var c=this.logoTexture.width,h=this.logoTexture.height,l=a*t.displayRatio,d=l*c/h,_=l;if(n.surfaceTransform!==y.ROTATE_90&&n.surfaceTransform!==y.ROTATE_270||(d=l*r/s,_=l*h/c*s/r),this.logoMat.setProperty("resolution",$.set(r,s),0),this.logoMat.setProperty("scale",$.set(d,_),0),this.logoMat.setProperty("translate",$.set(.5*r,.5*s),0),this.logoMat.setProperty("percent",u),this.logoMat.setProperty("u_projection",this.projection),this.logoMat.passes[0].update(),t.displayWatermark&&this.watermarkMat){var f=.5*a,m=this.watermarkTexture.width,E=f,T=f*this.watermarkTexture.height/m;n.surfaceTransform!==y.ROTATE_90&&n.surfaceTransform!==y.ROTATE_270||(E=.5*f,T=f*r/s*.5),this.watermarkMat.setProperty("resolution",$.set(r,s),0),this.watermarkMat.setProperty("scale",$.set(E,T),0),this.watermarkMat.setProperty("translate",$.set(.5*r,.1*s),0),this.watermarkMat.setProperty("percent",u),this.watermarkMat.setProperty("u_projection",this.projection),this.watermarkMat.passes[0].update()}this.frame()},e.initLogo=function(){var e=this.device;this.logoMat=new V,this.logoMat.initialize({effectName:"util/splash-screen"});var t=new I;t.addressU=N.CLAMP,t.addressV=N.CLAMP,t.addressW=N.CLAMP,this.sampler=e.getSampler(t),this.logoTexture=e.createTexture(new v(w.TEX2D,b.SAMPLED|b.TRANSFER_DST,P.RGBA8,this.logoImage.width,this.logoImage.height));var i=this.logoMat.passes[0],n=i.getBinding("mainTexture");i.bindTexture(n,this.logoTexture),this.shader=i.getShaderVariant();var r=i.descriptorSet;r.bindSampler(n,this.sampler),r.update();var s=new A;s.texExtent.width=this.logoImage.width,s.texExtent.height=this.logoImage.height,s.texExtent.depth=1,e.copyTexImagesToTexture([this.logoImage],this.logoTexture,[s])},e.initWarterMark=function(){var e=document.createElement("canvas");e.width=330,e.height=30,e.style.width=""+e.width,e.style.height=""+e.height;var t=e.getContext("2d");t.font="18px Arial",t.textBaseline="top",t.textAlign="left",t.fillStyle="`#424242`";var i="Powered by Cocos Creator",n=t.measureText(i);t.fillText(i,(330-n.width)/2,6);var r=new A;r.texExtent.width=e.width,r.texExtent.height=e.height,r.texExtent.depth=1,this.watermarkTexture=this.device.createTexture(new v(w.TEX2D,b.SAMPLED|b.TRANSFER_DST,P.RGBA8,e.width,e.height)),this.device.copyTexImagesToTexture([e],this.watermarkTexture,[r]),this.watermarkMat=new V,this.watermarkMat.initialize({effectName:"util/splash-screen"});var s=this.watermarkMat.passes[0],a=s.getBinding("mainTexture");s.bindTexture(a,this.watermarkTexture),s.descriptorSet.update()},e.frame=function(){var e=this.device,t=this.swapchain;if(!G.isXR||xr.entry.isRenderAllowable())for(var i=G.isXR?2:1,n=0;n<i;n++){G.isXR&&xr.entry.renderLoopStart(n),e.acquire([t]);var r=this.cmdBuff,s=this.framebuffer,a=this.renderArea;a.width=t.width,a.height=t.height,r.begin(),r.beginRenderPass(s.renderPass,s,a,this.clearColors,1,0);var o=this.logoMat.passes[0],u=U.getOrCreatePipelineState(e,o,this.shader,s.renderPass,this.quadAssmebler);if(r.bindPipelineState(u),r.bindDescriptorSet(W.MATERIAL,o.descriptorSet),r.bindInputAssembler(this.quadAssmebler),r.draw(this.quadAssmebler),this.settings.displayWatermark&&this.watermarkMat){var c=this.watermarkMat.passes[0],h=U.getOrCreatePipelineState(e,c,this.shader,s.renderPass,this.quadAssmebler);r.bindPipelineState(h),r.bindDescriptorSet(W.MATERIAL,c.descriptorSet),r.bindInputAssembler(this.quadAssmebler),r.draw(this.quadAssmebler)}r.endRenderPass(),r.end(),e.flushCommands([r]),e.queue.submit([r]),e.present(),G.isXR&&xr.entry.renderLoopEnd(n)}},e.destroy=function(){this.device=null,this.swapchain=null,this.clearColors=null,this.logoImage.destroy&&this.logoImage.destroy(),this.logoImage=null,this.framebuffer=null,this.renderArea=null,this.cmdBuff=null,this.shader=null,this.logoMat.destroy(),this.logoMat=null,this.logoTexture.destroy(),this.logoTexture=null,this.quadAssmebler.destroy(),this.quadAssmebler=null,this.vertexBuffers.destroy(),this.vertexBuffers=null,this.indicesBuffers.destroy(),this.indicesBuffers=null,this.sampler=null,this.watermarkTexture&&(this.watermarkMat.destroy(),this.watermarkMat=null,this.watermarkTexture.destroy(),this.watermarkTexture=null),this.settings=null},s(t,[{key:"isFinished",get:function(){return this._curTime>=this.settings.totalTime}},{key:"curTime",get:function(){return this._curTime},set:function(e){this._curTime=e}}],[{key:"instance",get:function(){return t._ins||(t._ins=new t),t._ins}}]),t}();ee._ins=void 0,r.internal.SplashScreen=ee;var te=function(){function e(){var e=this;this._rafHandle=0,this._onTick=null,this._updateCallback=void 0,this._targetFrameRate=60,this._isPlaying=!1,this._updateCallback=function(){e._isPlaying&&(e._rafHandle=requestAnimationFrame(e._updateCallback)),e._onTick&&e._onTick()}}var t=e.prototype;return t.start=function(){this._isPlaying||(this._rafHandle=requestAnimationFrame(this._updateCallback),this._isPlaying=!0)},t.stop=function(){this._isPlaying&&(cancelAnimationFrame(this._rafHandle),this._rafHandle=0,this._isPlaying=!1)},s(e,[{key:"targetFrameRate",get:function(){return this._targetFrameRate},set:function(e){this._targetFrameRate!==e&&(this._targetFrameRate=e,C.setPreferredFramesPerSecond(this._targetFrameRate),this._isPlaying&&(this.stop(),this.start()))}},{key:"onTick",get:function(){return this._onTick},set:function(e){this._onTick=e}}]),e}(),ie=e("G",function(e){function m(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).frame=null,t.container=null,t.canvas=null,t.renderType=-1,t.eventTargetOn=e.prototype.on,t.eventTargetOnce=e.prototype.once,t.config={},t.onStart=null,t.frameTime=1e3/60,t._isCloning=!1,t._inited=!1,t._engineInited=!1,t._rendererInitialized=!1,t._paused=!0,t._frameRate=60,t._pacer=null,t._initTime=0,t._startTime=0,t._deltaTime=0,t._shouldLoadLaunchScene=!0,t.onPreBaseInitDelegate=new k,t.onPostBaseInitDelegate=new k,t.onPreInfrastructureInitDelegate=new k,t.onPostInfrastructureInitDelegate=new k,t.onPreSubsystemInitDelegate=new k,t.onPostSubsystemInitDelegate=new k,t.onPreProjectInitDelegate=new k,t.onPostProjectInitDelegate=new k,t}a(m,e);var E=m.prototype;return E.setFrameRate=function(e){this.frameRate=e},E.getFrameRate=function(){return this.frameRate},E.step=function(){Z.tick(this.frameTime/1e3)},E.pause=function(){var e;this._paused||(this._paused=!0,null===(e=this._pacer)||void 0===e||e.stop())},E.resume=function(){var e;this._paused&&(L._clearEvents(),this._paused=!1,null===(e=this._pacer)||void 0===e||e.start())},E.isPaused=function(){return this._paused},E.restart=function(){var e=this;return new Promise((function(e){Z.once(K.EVENT_END_FRAME,(function(){return e()}))})).then((function(){Z.reset(),r.Object._deferredDestroy(),e.pause(),e.resume(),e._shouldLoadLaunchScene=!0,ee.instance.curTime=0,e._safeEmit(m.EVENT_RESTART)}))},E.end=function(){x.close()},E.on=function(e,t,i,n){return(this._engineInited&&e===m.EVENT_ENGINE_INITED||this._inited&&e===m.EVENT_GAME_INITED||this._rendererInitialized&&e===m.EVENT_RENDERER_INITED)&&t.call(i),this.eventTargetOn(e,t,i,n)},E.once=function(e,t,i){return this._engineInited&&e===m.EVENT_ENGINE_INITED?t.call(i):this.eventTargetOnce(e,t,i)},E.init=function(e){var r=this;return this._compatibleWithOldParams(e),Promise.resolve().then((function(){return r.emit(m.EVENT_PRE_BASE_INIT),r.onPreBaseInitDelegate.dispatch()})).then((function(){var t=e.debugMode||o.NONE;u(t),G.init(),r._initEvents()})).then((function(){return i.init(e.settingsPath,e.overrideSettings)})).then((function(){return r.emit(m.EVENT_POST_BASE_INIT),r.onPostBaseInitDelegate.dispatch()})).then((function(){return r.emit(m.EVENT_PRE_INFRASTRUCTURE_INIT),r.onPreInfrastructureInitDelegate.dispatch()})).then((function(){c.init(),r._initXR();var e,t={frame:e=document.createElement("div"),canvas:window.canvas,container:e};t&&(r.canvas=t.canvas,r.frame=t.frame,r.container=t.container),Y.init(),D.init(),X.init(r.canvas,J),O.init(),F.init(),z.init(),r.initPacer()})).then((function(){return r.emit(m.EVENT_POST_INFRASTRUCTURE_INIT),r.onPostInfrastructureInitDelegate.dispatch()})).then((function(){return r.emit(m.EVENT_PRE_SUBSYSTEM_INIT),r.onPreSubsystemInitDelegate.dispatch()})).then((function(){return Z.init(),F.loadBuiltinAssets()})).then((function(){return r.emit(m.EVENT_POST_SUBSYSTEM_INIT),r.onPostSubsystemInitDelegate.dispatch()})).then((function(){h("Cocos Creator v"+l),r.emit(m.EVENT_ENGINE_INITED),r._engineInited=!0})).then((function(){return r.emit(m.EVENT_PRE_PROJECT_INIT),r.onPreProjectInitDelegate.dispatch()})).then((function(){var e=i.querySettings(n.Category.PLUGINS,"jsList"),t=Promise.resolve();return e&&(i.querySettings(n.Category.PATH,"projectPath"),e.forEach((function(e){t=t.then((function(){return __wxRequire("src/"+e)}))}))),t})).then((function(){var e=i.querySettings(n.Category.SCRIPTING,"scriptPackages");return e?Promise.all(e.map((function(e){return t.import(e)}))):Promise.resolve([])})).then((function(){return r._loadProjectBundles()})).then((function(){return r._loadCCEScripts()})).then((function(){return r._setupRenderPipeline()})).then((function(){return r._loadPreloadAssets()})).then((function(){return F.compileBuiltinMaterial(),ee.instance.init()})).then((function(){return r.emit(m.EVENT_POST_PROJECT_INIT),r.onPostProjectInitDelegate.dispatch()})).then((function(){r._inited=!0,r._safeEmit(m.EVENT_GAME_INITED)}))},E._initXR=function(){if(G.isXR){var e,t;xr.entry=xr.XrEntry.getInstance();var r=null!==(e=i.querySettings(n.Category.RENDERING,"msaa"))&&void 0!==e?e:1,s=null!==(t=i.querySettings(n.Category.RENDERING,"renderingScale"))&&void 0!==t?t:1;xr.entry.setMultisamplesRTT(r),xr.entry.setRenderingScale(s)}},E._compatibleWithOldParams=function(e){var t=e.overrideSettings=e.overrideSettings||{};"showFPS"in e&&(t.profiling=t.profiling||{},t.profiling.showFPS=e.showFPS),"frameRate"in e&&(t.screen=t.screen||{},t.screen.frameRate=e.frameRate),"renderMode"in e&&(t.rendering=t.rendering||{},t.rendering.renderMode=e.renderMode),"renderPipeline"in e&&(t.rendering=t.rendering||{},t.rendering.renderPipeline=e.renderPipeline),"assetOptions"in e&&(t.assets=t.assets||{},Object.assign(t.assets,e.assetOptions)),"customJointTextureLayouts"in e&&(t.animation=t.animation||{},t.animation.customJointTextureLayouts=e.customJointTextureLayouts),"physics"in e&&(t.physics=t.physics||{},Object.assign(t.physics,e.physics)),"orientation"in e&&(t.screen=t.screen||{},t.screen.orientation=e.orientation),"exactFitScreen"in e&&(t.screen=t.screen||{},t.screen.exactFitScreen=e.exactFitScreen)},E._loadPreloadAssets=function(){var e=i.querySettings(n.Category.ASSETS,"preloadAssets");return e?Promise.all(e.map((function(e){return new Promise((function(t,i){O.loadAny(e,(function(e){e?i(e):t()}))}))}))):Promise.resolve([])},E._loadCCEScripts=function(){return new Promise((function(e){e()}))},E._loadProjectBundles=function(){var e=i.querySettings(n.Category.ASSETS,"preloadBundles");return e?Promise.all(e.map((function(e){var t=e.bundle,i=e.version;return new Promise((function(e,n){var r={};i&&(r.version=i),O.loadBundle(t,r,(function(t){t?n(t):e()}))}))}))):Promise.resolve([])},E.run=function(e){e&&(this.onStart=e),this._inited&&!d&&this.resume()},E._calculateDT=function(){var e=performance.now();return this._deltaTime=e>this._startTime?(e-this._startTime)/1e3:0,this._deltaTime>m.DEBUG_DT_THRESHOLD&&(this._deltaTime=this.frameTime/1e3),this._startTime=e,this._deltaTime},E._updateCallback=function(){var e=this;if(this._inited)if(ee.instance.isFinished)if(this._shouldLoadLaunchScene){this._shouldLoadLaunchScene=!1;var t,r=i.querySettings(n.Category.LAUNCH,"launchScene");r?Z.loadScene(r,(function(){var t;console.log("Success to load scene: "+r),e._initTime=performance.now(),Z.startAnimation(),null===(t=e.onStart)||void 0===t||t.call(e)})):(this._initTime=performance.now(),Z.startAnimation(),null===(t=this.onStart)||void 0===t||t.call(this))}else Z.tick(this._calculateDT());else ee.instance.update(this._calculateDT())},E.initPacer=function(){var e,t=null!==(e=i.querySettings(n.Category.SCREEN,"frameRate"))&&void 0!==e?e:60;_("number"==typeof t),this._pacer=new te,this._pacer.onTick=this._updateCallback.bind(this),this.frameRate=t},E._initEvents=function(){x.on("show",this._onShow,this),x.on("hide",this._onHide,this)},E._onHide=function(){this.emit(m.EVENT_HIDE),this.pause()},E._onShow=function(){this.emit(m.EVENT_SHOW),this.resume()},E.addPersistRootNode=function(e){Z.addPersistRootNode(e)},E.removePersistRootNode=function(e){Z.removePersistRootNode(e)},E.isPersistRootNode=function(e){return Z.isPersistRootNode(e)},E._setupRenderPipeline=function(){var e=this,t=i.querySettings(n.Category.RENDERING,"renderPipeline");return t?new Promise((function(e,i){O.loadAny(t,(function(t,n){return!t&&n instanceof Q?e(n):i(t)}))})).then((function(t){e._setRenderPipeline(t)})).catch((function(i){f(i),f("Failed load render pipeline: "+t+", engine failed to initialize, will fallback to default pipeline"),e._setRenderPipeline()})):this._setRenderPipeline()},E._setRenderPipeline=function(e){Z.root.setRenderPipeline(e)||this._setRenderPipeline(),this._rendererInitialized=!0,this._safeEmit(m.EVENT_RENDERER_INITED)},E._safeEmit=function(e){this.emit(e)},s(m,[{key:"inited",get:function(){return this._inited}},{key:"frameRate",get:function(){return this._frameRate},set:function(e){"number"!=typeof e&&(e=parseInt(e,10),Number.isNaN(e)&&(e=60)),this._frameRate=e,this.frameTime=1e3/e,this._pacer&&(this._pacer.targetFrameRate=this._frameRate)}},{key:"deltaTime",get:function(){return this._deltaTime}},{key:"totalTime",get:function(){return performance.now()-this._initTime}},{key:"frameStartTime",get:function(){return this._startTime}}]),m}(M));ie.EVENT_HIDE="game_on_hide",ie.EVENT_SHOW="game_on_show",ie.EVENT_LOW_MEMORY="game_on_low_memory",ie.EVENT_GAME_INITED="game_inited",ie.EVENT_ENGINE_INITED="engine_inited",ie.EVENT_RENDERER_INITED="renderer_inited",ie.EVENT_PRE_BASE_INIT="pre_base_init",ie.EVENT_POST_BASE_INIT="post_base_init",ie.EVENT_PRE_INFRASTRUCTURE_INIT="pre_infrastructure_init",ie.EVENT_POST_INFRASTRUCTURE_INIT="post_infrastructure_init",ie.EVENT_PRE_SUBSYSTEM_INIT="pre_subsystem_init",ie.EVENT_POST_SUBSYSTEM_INIT="post_subsystem_init",ie.EVENT_PRE_PROJECT_INIT="pre_project_init",ie.EVENT_POST_PROJECT_INIT="post_project_init",ie.EVENT_RESTART="game_on_restart",ie.RENDER_TYPE_CANVAS=0,ie.RENDER_TYPE_WEBGL=1,ie.RENDER_TYPE_OPENGL=2,ie.RENDER_TYPE_HEADLESS=3,ie.DEBUG_DT_THRESHOLD=1,r.Game=ie,e("g",r.game=new ie)}}}));
