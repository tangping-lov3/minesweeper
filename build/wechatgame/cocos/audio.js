System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./index-f2c2eec3.js","./pipeline-state-manager-f4a950fe.js","./deprecated-dacf9914.js","./touch-37ec7c16.js","./game-1e6d0834.js"],(function(t){"use strict";var e,n,o,i,r,a,u,s,c,l,h,d,f,_,p,y,v,g,m,P,T,N,E,A,I,S,w;return{setters:[function(t){e=t.A,n=t.G,o=t.l,i=t.F,r=t.H,a=t.I,u=t.N,s=t.M},function(t){c=t.bt,l=t.bq,h=t.bA},function(t){d=t.a$,f=t.a2,_=t.b_,p=t.b1,y=t.bA,v=t.bG,g=t.b0,m=t.bT,P=t.bU,T=t.bP,N=t.bQ,E=t.aI},function(t){A=t.i,I=t.j,S=t.L,w=t.O},function(){},function(){},function(){},function(){},function(){}],execute:function(){var O,D,C;!function(t){t.PLAYED="play",t.PAUSED="pause",t.STOPPED="stop",t.SEEKED="seeked",t.ENDED="ended",t.INTERRUPTION_BEGIN="interruptionBegin",t.INTERRUPTION_END="interruptionEnd",t.USER_GESTURE="on_gesture"}(O||(O={})),function(t){t[t.DOM_AUDIO=0]="DOM_AUDIO",t[t.WEB_AUDIO=1]="WEB_AUDIO",t[t.MINIGAME_AUDIO=2]="MINIGAME_AUDIO",t[t.NATIVE_AUDIO=3]="NATIVE_AUDIO",t[t.UNKNOWN_AUDIO=4]="UNKNOWN_AUDIO"}(D||(D={})),function(t){t[t.INIT=0]="INIT",t[t.PLAYING=1]="PLAYING",t[t.PAUSED=2]="PAUSED",t[t.STOPPED=3]="STOPPED",t[t.INTERRUPTED=4]="INTERRUPTED"}(C||(C={}));var b,k,R=t("AudioPCMDataView",function(){function t(){if(this._bufferView=void 0,this._normalizeFactor=1,2===arguments.length)this._bufferView=arguments.length<=0?void 0:arguments[0],this._normalizeFactor=arguments.length<=1?void 0:arguments[1];else{var t=arguments.length<=0?void 0:arguments[0],e=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2];this._bufferView=new e(t),this._normalizeFactor=n}}return t.prototype.getData=function(t){return this._bufferView[t]*this._normalizeFactor},e(t,[{key:"length",get:function(){return this._bufferView.length}}]),t}()),U=0;function B(t,e){var n;e.invoking||(e.invoking=!0,(n=e.func).call.apply(n,[t].concat(e.args)).then((function(){e.invoking=!1,t._operationQueue.shift(),t._eventTarget.emit(e.id.toString());var n=t._operationQueue[0];n&&B(t,n)})).catch((function(){})))}function L(t,e,n){var o=n.value;n.value=function(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return new Promise((function(e){var i=U++,r=t;r._operationQueue.push({id:i,func:o,args:n,invoking:!1}),r._eventTarget.once(i.toString(),e),B(r,r._operationQueue[0])}))}}var x,M,G,j,H,Y,V,z,Q,W=function(){function t(t,e){var n=this;this._innerAudioContext=void 0,this._onPlayCb=void 0,this._onEndCb=void 0,this._innerAudioContext=t,t.volume=e,t.onPlay((function(){var t;null===(t=n._onPlayCb)||void 0===t||t.call(n)})),t.onEnded((function(){var e;null===(e=n._onEndCb)||void 0===e||e.call(n),t.destroy(),n._innerAudioContext=null}))}var n=t.prototype;return n.play=function(){this._innerAudioContext.play()},n.stop=function(){this._innerAudioContext.stop()},e(t,[{key:"onPlay",get:function(){return this._onPlayCb},set:function(t){this._onPlayCb=t}},{key:"onEnd",get:function(){return this._onEndCb},set:function(t){this._onEndCb=t}}]),t}(),K=(k=function(){var t=n.prototype;function n(t){var e=this;this._innerAudioContext=void 0,this._state=C.INIT,this._cacheTime=0,this._needSeek=!1,this._seeking=!1,this._onPlay=void 0,this._onPause=void 0,this._onStop=void 0,this._onSeeked=void 0,this._onEnded=void 0,this._readyToHandleOnShow=!1,this._eventTarget=new l,this._operationQueue=[],this._innerAudioContext=t,this._eventTarget=new l,c.on("hide",this._onHide,this),c.on("show",this._onShow,this);var n=this._eventTarget;this._onPlay=function(){e._state=C.PLAYING,n.emit(O.PLAYED),e._needSeek&&(e._needSeek=!1,e.seek(e._cacheTime).catch((function(){})))},t.onPlay(this._onPlay),this._onPause=function(){e._state=C.PAUSED,e._cacheTime=e._innerAudioContext.currentTime,n.emit(O.PAUSED)},t.onPause(this._onPause),this._onStop=function(){e._state=C.STOPPED,e._resetSeekCache(),n.emit(O.STOPPED)},t.onStop(this._onStop),this._onSeeked=function(){n.emit(O.SEEKED),e._seeking=!1,e._needSeek&&(e._needSeek=!1,e.seek(e._cacheTime).catch((function(){})))},t.onSeeked(this._onSeeked),this._onEnded=function(){e._state=C.INIT,e._resetSeekCache(),n.emit(O.ENDED)},t.onEnded(this._onEnded)}return t._resetSeekCache=function(){this._cacheTime=0,this._needSeek=!1,this._seeking=!1},t.destroy=function(){var t=this;c.off("hide",this._onHide,this),c.off("show",this._onShow,this),this._innerAudioContext&&(["Play","Pause","Stop","Seeked","Ended"].forEach((function(e){t._offEvent(e)})),this._innerAudioContext.destroy(),this._innerAudioContext=null)},t._onHide=function(){var t=this;this._state===C.PLAYING&&this.pause().then((function(){t._state=C.INTERRUPTED,t._readyToHandleOnShow=!0,t._eventTarget.emit(O.INTERRUPTION_BEGIN)})).catch((function(){}))},t._onShow=function(){var t=this;this._readyToHandleOnShow?(this._state===C.INTERRUPTED&&this.play().then((function(){t._eventTarget.emit(O.INTERRUPTION_END)})).catch((function(){})),this._readyToHandleOnShow=!1):this._eventTarget.once(O.INTERRUPTION_BEGIN,this._onShow,this)},t._offEvent=function(t){this["_on"+t]&&(this._innerAudioContext["off"+t](this["_on"+t]),this["_on"+t]=null)},n.load=function(t){return new Promise((function(e){n.loadNative(t).then((function(t){e(new n(t))})).catch((function(){}))}))},n.loadNative=function(t){return new Promise((function(e,n){var o=h.createInnerAudioContext(),i=setTimeout((function(){r(),e(o)}),8e3);function r(){o.offCanplay(a),o.offError(u)}function a(){r(),clearTimeout(i),e(o)}function u(t){r(),clearTimeout(i),console.error("failed to load innerAudioContext"),n(new Error(t))}o.onCanplay(a),o.onError(u),o.src=t}))},n.loadOneShotAudio=function(t,e){return new Promise((function(o,i){n.loadNative(t).then((function(t){o(new W(t,e))})).catch(i)}))},t.getPCMData=function(){},t.seek=function(t){var e=this;return new Promise((function(n){e._state!==C.PLAYING||e._seeking?e._cacheTime!==t&&(e._cacheTime=t,e._needSeek=!0):(t=A(t,0,e.duration),e._seeking=!0,e._innerAudioContext.seek(t)),n()}))},t.play=function(){var t=this;return new Promise((function(e){t._eventTarget.once(O.PLAYED,e),t._innerAudioContext.play()}))},t.pause=function(){var t=this;return new Promise((function(e){t._eventTarget.once(O.PAUSED,e),t._innerAudioContext.pause()}))},t.stop=function(){var t=this;return new Promise((function(e){t._eventTarget.once(O.STOPPED,e),t._innerAudioContext.stop()}))},t.onInterruptionBegin=function(t){this._eventTarget.on(O.INTERRUPTION_BEGIN,t)},t.offInterruptionBegin=function(t){this._eventTarget.off(O.INTERRUPTION_BEGIN,t)},t.onInterruptionEnd=function(t){this._eventTarget.on(O.INTERRUPTION_END,t)},t.offInterruptionEnd=function(t){this._eventTarget.off(O.INTERRUPTION_END,t)},t.onEnded=function(t){this._eventTarget.on(O.ENDED,t)},t.offEnded=function(t){this._eventTarget.off(O.ENDED,t)},e(n,[{key:"src",get:function(){return this._innerAudioContext?this._innerAudioContext.src:""}},{key:"type",get:function(){return D.MINIGAME_AUDIO}},{key:"state",get:function(){return this._state}},{key:"loop",get:function(){return this._innerAudioContext.loop},set:function(t){this._innerAudioContext.loop=t}},{key:"volume",get:function(){return this._innerAudioContext.volume},set:function(t){t=I(t),this._innerAudioContext.volume=t}},{key:"duration",get:function(){return this._innerAudioContext.duration}},{key:"currentTime",get:function(){return this._state!==C.PLAYING?this._cacheTime:this._innerAudioContext.currentTime}},{key:"sampleRate",get:function(){return 0}}]),n}(),n((b=k).prototype,"seek",[L],Object.getOwnPropertyDescriptor(b.prototype,"seek"),b.prototype),n(b.prototype,"play",[L],Object.getOwnPropertyDescriptor(b.prototype,"play"),b.prototype),n(b.prototype,"pause",[L],Object.getOwnPropertyDescriptor(b.prototype,"pause"),b.prototype),n(b.prototype,"stop",[L],Object.getOwnPropertyDescriptor(b.prototype,"stop"),b.prototype),b),F=new(function(){function t(){this._audioBufferDataMap={}}var e=t.prototype;return e.addCache=function(t,e){this._audioBufferDataMap[t]?console.warn("Audio buffer "+t+" has been cached"):this._audioBufferDataMap[t]={usedCount:1,audioBuffer:e}},e.retainCache=function(t){var e=this._audioBufferDataMap[t];e?e.usedCount++:console.warn("Audio buffer cache "+t+" has not been added.")},e.getCache=function(t){var e=this._audioBufferDataMap[t];return null==e?void 0:e.audioBuffer},e.tryReleasingCache=function(t){var e=this._audioBufferDataMap[t];e?--e.usedCount<=0&&delete this._audioBufferDataMap[t]:console.warn("Audio buffer cache "+t+" has not been added.")},t}()),q=function(){function t(t){this._nativeAudio=void 0,this._startTime=0,this._startOffset=0,this._isPaused=!0,this._nativeAudio=t}var n=t.prototype;return n.destroy=function(){this._nativeAudio=void 0},n._now=function(){return performance.now()/1e3},n._calculateCurrentTime=function(){var t=this._now()-this._startTime,e=this._startOffset+t;return e>=this.duration&&(this._startTime=this._now(),this._startOffset=0),e%this.duration},n.start=function(){this._isPaused=!1,this._startTime=this._now()},n.pause=function(){this._isPaused||(this._isPaused=!0,this._startOffset=this._calculateCurrentTime())},n.stop=function(){this._isPaused=!0,this._startOffset=0},n.seek=function(t){this._startTime=this._now(),this._startOffset=A(t,0,this.duration)},e(t,[{key:"duration",get:function(){return this._nativeAudio.duration}},{key:"currentTime",get:function(){return this._isPaused?this._startOffset:this._calculateCurrentTime()}}]),t}(),$=null===(x=h.tt)||void 0===x||null===(M=x.getAudioContext)||void 0===M?void 0:M.call(x),J=function(){function t(t,e,n){this._bufferSourceNode=void 0,this._onPlayCb=void 0,this._url=void 0,this._onEndCb=void 0,this._bufferSourceNode=$.createBufferSource(),this._bufferSourceNode.buffer=t,this._bufferSourceNode.loop=!1,this._url=n;var o=$.createGain();o.gain.value=e,this._bufferSourceNode.connect(o),o.connect($.destination)}var n=t.prototype;return n.play=function(){var t,e=this;this._bufferSourceNode.start(),null===(t=this.onPlay)||void 0===t||t.call(this),this._bufferSourceNode.onended=function(){var t;F.tryReleasingCache(e._url),null===(t=e._onEndCb)||void 0===t||t.call(e)}},n.stop=function(){this._bufferSourceNode.onended=null,F.tryReleasingCache(this._url),this._bufferSourceNode.stop(),this._bufferSourceNode.buffer=null},e(t,[{key:"onPlay",get:function(){return this._onPlayCb},set:function(t){this._onPlayCb=t}},{key:"onEnd",get:function(){return this._onEndCb},set:function(t){this._onEndCb=t}}]),t}(),X=(j=function(){function t(t,e){this._src=void 0,this._audioBuffer=void 0,this._sourceNode=void 0,this._gainNode=void 0,this._volume=1,this._loop=!1,this._state=C.INIT,this._audioTimer=void 0,this._readyToHandleOnShow=!1,this._eventTarget=new l,this._operationQueue=[],this._audioBuffer=t,this._audioTimer=new q(t),this._gainNode=$.createGain(),this._gainNode.connect($.destination),this._src=e,c.on("hide",this._onHide,this),c.on("show",this._onShow,this)}var n=t.prototype;return n.destroy=function(){this._audioTimer.destroy(),this._audioBuffer&&(this._audioBuffer=null),F.tryReleasingCache(this._src),c.off("hide",this._onHide,this),c.off("show",this._onShow,this)},n._onHide=function(){var t=this;this._state===C.PLAYING&&this.pause().then((function(){t._state=C.INTERRUPTED,t._readyToHandleOnShow=!0,t._eventTarget.emit(O.INTERRUPTION_BEGIN)})).catch((function(){}))},n._onShow=function(){var t=this;this._readyToHandleOnShow?(this._state===C.INTERRUPTED&&this.play().then((function(){t._eventTarget.emit(O.INTERRUPTION_END)})).catch((function(){})),this._readyToHandleOnShow=!1):this._eventTarget.once(O.INTERRUPTION_BEGIN,this._onShow,this)},t.load=function(e){return new Promise((function(n){t.loadNative(e).then((function(o){n(new t(o,e))})).catch((function(){}))}))},t.loadNative=function(t){return new Promise((function(e,n){var o=F.getCache(t);if(o)return F.retainCache(t),void e(o);fsUtils.readArrayBuffer(t,(function(o,i){o?n(o):$.decodeAudioData(i).then((function(n){F.addCache(t,n),e(n)})).catch((function(){}))}))}))},t.loadOneShotAudio=function(e,n){return new Promise((function(o,i){t.loadNative(e).then((function(t){var i=new J(t,n,e);o(i)})).catch(i)}))},n.getPCMData=function(t){return new R(this._audioBuffer.getChannelData(t),1)},n.seek=function(t){var e=this;return new Promise((function(n){e._audioTimer.seek(t),e._state===C.PLAYING?e._doPlay().then(n).catch((function(){})):n()}))},n.play=function(){return this._doPlay()},n._doPlay=function(){var t=this;return new Promise((function(e){t._stopSourceNode(),t._sourceNode=$.createBufferSource(),t._sourceNode.buffer=t._audioBuffer,t._sourceNode.loop=t._loop,t._sourceNode.connect(t._gainNode),t._sourceNode.start(0,t._audioTimer.currentTime),t._state=C.PLAYING,t._audioTimer.start(),t._sourceNode.onended=function(){t._audioTimer.stop(),t._eventTarget.emit(O.ENDED),t._state=C.INIT},e()}))},n._stopSourceNode=function(){try{this._sourceNode&&(this._sourceNode.onended=null,this._sourceNode.stop(),this._sourceNode.buffer=null)}catch(t){}},n.pause=function(){return this._state===C.PLAYING&&this._sourceNode?(this._audioTimer.pause(),this._state=C.PAUSED,this._stopSourceNode(),Promise.resolve()):Promise.resolve()},n.stop=function(){return this._sourceNode?(this._audioTimer.stop(),this._state=C.STOPPED,this._stopSourceNode(),Promise.resolve()):Promise.resolve()},n.onInterruptionBegin=function(t){this._eventTarget.on(O.INTERRUPTION_BEGIN,t)},n.offInterruptionBegin=function(t){this._eventTarget.off(O.INTERRUPTION_BEGIN,t)},n.onInterruptionEnd=function(t){this._eventTarget.on(O.INTERRUPTION_END,t)},n.offInterruptionEnd=function(t){this._eventTarget.off(O.INTERRUPTION_END,t)},n.onEnded=function(t){this._eventTarget.on(O.ENDED,t)},n.offEnded=function(t){this._eventTarget.off(O.ENDED,t)},e(t,[{key:"src",get:function(){return this._src}},{key:"type",get:function(){return D.WEB_AUDIO}},{key:"state",get:function(){return this._state}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._sourceNode&&(this._sourceNode.loop=t)}},{key:"volume",get:function(){return this._volume},set:function(t){t=I(t),this._volume=t,this._gainNode.gain.value=t}},{key:"duration",get:function(){return this._audioBuffer.duration}},{key:"currentTime",get:function(){return this._audioTimer.currentTime}},{key:"sampleRate",get:function(){return this._audioBuffer.sampleRate}}]),t}(),n((G=j).prototype,"seek",[L],Object.getOwnPropertyDescriptor(G.prototype,"seek"),G.prototype),n(G.prototype,"play",[L],Object.getOwnPropertyDescriptor(G.prototype,"play"),G.prototype),n(G.prototype,"pause",[L],Object.getOwnPropertyDescriptor(G.prototype,"pause"),G.prototype),n(G.prototype,"stop",[L],Object.getOwnPropertyDescriptor(G.prototype,"stop"),G.prototype),G),Z=function(){function t(t){this._audio=void 0,this._audio=t}var n=t.prototype;return n.play=function(){this._audio.play()},n.stop=function(){this._audio.stop()},e(t,[{key:"onPlay",get:function(){return this._audio.onPlay},set:function(t){this._audio.onPlay=t}},{key:"onEnd",get:function(){return this._audio.onEnd},set:function(t){this._audio.onEnd=t}}]),t}(),tt=function(){function t(t){this._player=void 0,this._player=t}t.load=function(e){return new Promise((function(n){"object"==typeof h.tt&&void 0!==h.tt.getAudioContext?X.load(e).then((function(e){n(new t(e))})).catch((function(){})):K.load(e).then((function(e){n(new t(e))})).catch((function(){}))}))};var n=t.prototype;return n.destroy=function(){this._player.destroy()},t.loadNative=function(t){return"object"==typeof h.tt&&void 0!==h.tt.getAudioContext?X.loadNative(t):K.loadNative(t)},t.loadOneShotAudio=function(t,e){return new Promise((function(n,o){"object"==typeof h.tt&&void 0!==h.tt.getAudioContext?X.loadOneShotAudio(t,e).then((function(t){n(new Z(t))})).catch(o):K.loadOneShotAudio(t,e).then((function(t){n(new Z(t))})).catch(o)}))},n.getPCMData=function(t){return this._player.getPCMData(t)},n.seek=function(t){return this._player.seek(t)},n.play=function(){return this._player.play()},n.pause=function(){return this._player.pause()},n.stop=function(){return this._player.stop()},n.onInterruptionBegin=function(t){this._player.onInterruptionBegin(t)},n.offInterruptionBegin=function(t){this._player.offInterruptionBegin(t)},n.onInterruptionEnd=function(t){this._player.onInterruptionEnd(t)},n.offInterruptionEnd=function(t){this._player.offInterruptionEnd(t)},n.onEnded=function(t){this._player.onEnded(t)},n.offEnded=function(t){this._player.offEnded(t)},e(t,[{key:"src",get:function(){return this._player.src}},{key:"type",get:function(){return this._player.type}},{key:"state",get:function(){return this._player.state}},{key:"loop",get:function(){return this._player.loop},set:function(t){this._player.loop=t}},{key:"volume",get:function(){return this._player.volume},set:function(t){this._player.volume=t}},{key:"duration",get:function(){return this._player.duration}},{key:"currentTime",get:function(){return this._player.currentTime}},{key:"sampleRate",get:function(){return this._player.sampleRate}}]),t}();tt.maxAudioChannel=10,o.AudioPlayer=tt;var et=t("AudioClip",d("cc.AudioClip")((Q=z=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o))||this,r(e,"_duration",V,a(e)),e._loadMode=D.UNKNOWN_AUDIO,e._meta=null,e._player=null,e}i(n,t);var o=n.prototype;return o.destroy=function(){var e,n=t.prototype.destroy.call(this);return null===(e=this._player)||void 0===e||e.destroy(),this._player=null,this._meta&&(this._meta.player=null),n},o.validate=function(){return!!this._meta},o.getDuration=function(){return this._duration?this._duration:this._meta?this._meta.duration:0},o.getCurrentTime=function(){return this._player?this._player.currentTime:0},o.getVolume=function(){return this._player?this._player.volume:0},o.getLoop=function(){return!!this._player&&this._player.loop},o.setCurrentTime=function(t){var e;null===(e=this._player)||void 0===e||e.seek(t).catch((function(){}))},o.setVolume=function(t){this._player&&(this._player.volume=t)},o.setLoop=function(t){this._player&&(this._player.loop=t)},o.play=function(){var t;null===(t=this._player)||void 0===t||t.play().catch((function(){}))},o.pause=function(){var t;null===(t=this._player)||void 0===t||t.pause().catch((function(){}))},o.stop=function(){var t;null===(t=this._player)||void 0===t||t.stop().catch((function(){}))},o.playOneShot=function(t){void 0===t&&(t=1),this._nativeAsset&&tt.loadOneShotAudio(this._nativeAsset.url,t).then((function(t){t.play()})).catch((function(){}))},e(n,[{key:"_nativeAsset",get:function(){return this._meta},set:function(t){this._meta=t,t?(this._loadMode=t.type,this._player=t.player):(this._meta=null,this._loadMode=D.UNKNOWN_AUDIO,this._duration=0)}},{key:"_nativeDep",get:function(){return{uuid:this._uuid,audioLoadMode:this.loadMode,ext:this._native,__isNative__:!0}}},{key:"loadMode",get:function(){return this._loadMode}},{key:"state",get:function(){return this._player?this._player.state:C.INIT}}]),n}(f),z.AudioType=D,V=n((Y=Q).prototype,"_duration",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),n(Y.prototype,"_nativeDep",[_],Object.getOwnPropertyDescriptor(Y.prototype,"_nativeDep"),Y.prototype),H=Y))||H);function nt(t,e,n){tt.load(t,{audioLoadMode:e.audioLoadMode}).then((function(e){var o={player:e,url:t,duration:e.duration,type:e.type};n(null,o)})).catch((function(t){n(t)}))}function ot(t,e,n,o){var i=new et;i._nativeUrl=t,i._nativeAsset=e,i._duration=e.duration,o(null,i)}o.AudioClip=et,y.register({".mp3":nt,".ogg":nt,".wav":nt,".m4a":nt}),v.register({".mp3":ot,".ogg":ot,".wav":ot,".m4a":ot});var it,rt,at,ut,st,ct,lt,ht,dt,ft,_t,pt,yt,vt,gt,mt,Pt,Tt,Nt,Et=new(function(){function t(){this._oneShotAudioInfoList=[],this._audioPlayerInfoList=[]}var e=t.prototype;return e._findIndex=function(t,e){return t.findIndex((function(t){return t.audio===e}))},e._tryAddPlaying=function(t,e){var n=this._findIndex(t,e);return n>-1?(t[n].playTime=performance.now(),!1):(t.push({audio:e,playTime:performance.now()}),!0)},e.addPlaying=function(t){if(t instanceof tt){if(this._tryAddPlaying(this._audioPlayerInfoList,t))return}else this._tryAddPlaying(this._oneShotAudioInfoList,t)},e._tryRemovePlaying=function(t,e){var n=this._findIndex(t,e);return-1!==n&&(u(t,n),!0)},e.removePlaying=function(t){if(t instanceof tt){if(this._tryRemovePlaying(this._audioPlayerInfoList,t))return}else this._tryRemovePlaying(this._oneShotAudioInfoList,t)},e.discardOnePlayingIfNeeded=function(){var t;this._audioPlayerInfoList.length+this._oneShotAudioInfoList.length<tt.maxAudioChannel||(this._oneShotAudioInfoList.length>0?this._oneShotAudioInfoList.forEach((function(e){(!t||e.playTime<t.playTime)&&(t=e)})):this._audioPlayerInfoList.forEach((function(e){(!t||e.playTime<t.playTime)&&(t=e)})),t&&(t.audio.stop(),this.removePlaying(t.audio)))},t}()),At="audiosource-loaded";!function(t){t.STARTED="started",t.ENDED="ended"}(Nt||(Nt={}));var It,St=(it=d("cc.AudioSource"),rt=m(),at=P(),ut=g(et),st=g(et),ct=T(),lt=T(),ht=T(),dt=N(),ft=T(),It=it(_t=rt(_t=at((Tt=Pt=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o))||this,r(e,"_clip",yt,a(e)),e._player=null,r(e,"_loop",vt,a(e)),r(e,"_playOnAwake",gt,a(e)),r(e,"_volume",mt,a(e)),e._cachedCurrentTime=0,e._operationsBeforeLoading=[],e._isLoaded=!1,e._lastSetClip=null,e}i(n,t);var o=n.prototype;return o._resetPlayer=function(){this._player&&(Et.removePlaying(this._player),this._player.offEnded(),this._player.offInterruptionBegin(),this._player.offInterruptionEnd(),this._player.destroy(),this._player=null)},o._syncPlayer=function(){var t=this,e=this._clip;if(this._isLoaded=!1,this._lastSetClip!==e)return e?void(e._nativeAsset?(this._lastSetClip=e,this._operationsBeforeLoading.length=0,tt.load(e._nativeAsset.url,{audioLoadMode:e.loadMode}).then((function(n){var o;t._lastSetClip===e?(t._isLoaded=!0,t._resetPlayer(),t._player=n,n.onEnded((function(){var e;Et.removePlaying(n),null===(e=t.node)||void 0===e||e.emit(Nt.ENDED,t)})),n.onInterruptionBegin((function(){Et.removePlaying(n)})),n.onInterruptionEnd((function(){Et.addPlaying(n)})),t._syncStates(),null===(o=t.node)||void 0===o||o.emit(At)):n.destroy()})).catch((function(){}))):console.error("Invalid audio clip")):(this._lastSetClip=null,void this._resetPlayer())},o.onLoad=function(){this._syncPlayer()},o.onEnable=function(){this._playOnAwake&&!this.playing&&this.play()},o.onDisable=function(){var t=this._getRootNode();(null==t?void 0:t._persistNode)||this.pause()},o.onDestroy=function(){var t;this.stop(),null===(t=this._player)||void 0===t||t.destroy(),this._player=null},o.getPCMData=function(t){var e=this;return new Promise((function(n){if(0!==t&&1!==t)return console.warn("Only support channel index 0 or 1 to get buffer"),void n(void 0);var o;e._player?n(e._player.getPCMData(t)):null===(o=e.node)||void 0===o||o.once(At,(function(){var o;n(null===(o=e._player)||void 0===o?void 0:o.getPCMData(t))}))}))},o.getSampleRate=function(){var t=this;return new Promise((function(e){var n;t._player?e(t._player.sampleRate):null===(n=t.node)||void 0===n||n.once(At,(function(){e(t._player.sampleRate)}))}))},o._getRootNode=function(){for(var t,e,n=this.node,o=null===(t=n)||void 0===t||null===(e=t.parent)||void 0===e?void 0:e.parent;o;){var i,r,a;o=null===(r=n=null===(i=n)||void 0===i?void 0:i.parent)||void 0===r||null===(a=r.parent)||void 0===a?void 0:a.parent}return n},o.play=function(){var t,e=this;if(this._isLoaded||!this.clip){var n;Et.discardOnePlayingIfNeeded(),this.state===C.PLAYING&&(null===(n=this._player)||void 0===n||n.stop().catch((function(){})));var o=this._player;null===(t=this._player)||void 0===t||t.play().then((function(){var t;Et.addPlaying(o),null===(t=e.node)||void 0===t||t.emit(Nt.STARTED,e)})).catch((function(){}))}else this._operationsBeforeLoading.push("play")},o.pause=function(){var t;if(this._isLoaded||!this.clip){var e=this._player;null===(t=this._player)||void 0===t||t.pause().then((function(){Et.removePlaying(e)})).catch((function(){}))}else this._operationsBeforeLoading.push("pause")},o.stop=function(){var t;if(this._isLoaded||!this.clip){var e=this._player;null===(t=this._player)||void 0===t||t.stop().then((function(){Et.removePlaying(e)})).catch((function(){}))}else this._operationsBeforeLoading.push("stop")},o.playOneShot=function(t,e){void 0===e&&(e=1),t._nativeAsset?tt.loadOneShotAudio(t._nativeAsset.url,this._volume*e,{audioLoadMode:t.loadMode}).then((function(t){Et.discardOnePlayingIfNeeded(),t.onPlay=function(){Et.addPlaying(t)},t.onEnd=function(){Et.removePlaying(t)},t.play()})).catch((function(){})):console.error("Invalid audio clip")},o._syncStates=function(){var t=this;this._player&&this._player.seek(this._cachedCurrentTime).then((function(){t._player&&(t._player.loop=t._loop,t._player.volume=t._volume,t._operationsBeforeLoading.forEach((function(e){var n;null===(n=t[e])||void 0===n||n.call(t)})),t._operationsBeforeLoading.length=0)})).catch((function(){}))},e(n,[{key:"clip",get:function(){return this._clip},set:function(t){t!==this._clip&&(this._clip=t,this._syncPlayer())}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._player&&(this._player.loop=t)}},{key:"playOnAwake",get:function(){return this._playOnAwake},set:function(t){this._playOnAwake=t}},{key:"volume",get:function(){return this._volume},set:function(t){Number.isNaN(t)?console.warn("illegal audio volume!"):(t=A(t,0,1),this._player?(this._player.volume=t,this._volume=this._player.volume):this._volume=t)}},{key:"currentTime",get:function(){return this._player?this._player.currentTime:this._cachedCurrentTime},set:function(t){var e;Number.isNaN(t)?console.warn("illegal audio time!"):(t=A(t,0,this.duration),this._cachedCurrentTime=t,null===(e=this._player)||void 0===e||e.seek(this._cachedCurrentTime).catch((function(){})))}},{key:"duration",get:function(){var t,e;return null!==(t=null===(e=this._clip)||void 0===e?void 0:e.getDuration())&&void 0!==t?t:this._player?this._player.duration:0}},{key:"state",get:function(){return this._player?this._player.state:C.INIT}},{key:"playing",get:function(){return this.state===n.AudioState.PLAYING}}],[{key:"maxAudioChannel",get:function(){return tt.maxAudioChannel}}]),n}(E),Pt.AudioState=C,Pt.EventType=Nt,yt=n((pt=Tt).prototype,"_clip",[ut],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),vt=n(pt.prototype,"_loop",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),gt=n(pt.prototype,"_playOnAwake",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),mt=n(pt.prototype,"_volume",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),n(pt.prototype,"clip",[st,ct],Object.getOwnPropertyDescriptor(pt.prototype,"clip"),pt.prototype),n(pt.prototype,"loop",[lt],Object.getOwnPropertyDescriptor(pt.prototype,"loop"),pt.prototype),n(pt.prototype,"playOnAwake",[ht],Object.getOwnPropertyDescriptor(pt.prototype,"playOnAwake"),pt.prototype),n(pt.prototype,"volume",[dt,ft],Object.getOwnPropertyDescriptor(pt.prototype,"volume"),pt.prototype),_t=pt))||_t)||_t)||_t,t({AudioSource:It,AudioSourceComponent:It}),It);S(et,"AudioClip",[{name:"PlayingState",newName:"AudioState",target:St,targetName:"AudioSource"}]),w(et.prototype,"AudioClip.prototype",["state","play","pause","stop","playOneShot","setCurrentTime","setVolume","setLoop","getCurrentTime","getVolume","getLoop"].map((function(t){return{name:t,suggest:"please use AudioSource.prototype."+t+" instead"}}))),o.AudioSourceComponent=St,s.setClassAlias(St,"cc.AudioSourceComponent")}}}));
