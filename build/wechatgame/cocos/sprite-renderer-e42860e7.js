System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./index-f2c2eec3.js","./pipeline-state-manager-f4a950fe.js","./deprecated-dacf9914.js","./create-mesh-c5031db7.js","./ui-renderer-09c699a1.js"],(function(t){"use strict";var e,i,s,n,r,a,o,h,c,u,_,l,m,p,d,f,v,g,x,y,S,w,C,b,T,F,U,I,P,R,V,A,E,z,M,D,k,O,N,L,B,G,X,Y,H,W,j,q,K,J,Z,$,Q,tt,et,it,st,nt,rt,at;return{setters:[function(t){e=t.F,i=t.l,s=t.y,n=t.M,r=t.A,a=t.f,o=t.d,h=t.E,c=t.G,u=t.H,_=t.I},function(t){l=t.a6,m=t.y,p=t.at,d=t.aS,f=t.c},function(t){v=t.bY,g=t.aa,x=t.bZ,y=t.aF,S=t.a$,w=t.a2,C=t.a9,b=t.ce,T=t.bS,F=t.bX,U=t.bU,I=t.cf,P=t.aI,R=t.b0,V=t.aJ,A=t.au,E=t.bT,z=t.bP,M=t.b1,D=t.at,k=t.aM,O=t.aK,N=t.b2},function(t){L=t.a,B=t.e,G=t.R,X=t.V,Y=t.S,H=t.c,W=t.P,j=t.N,q=t.L,K=t.C,J=t.O},function(){},function(t){Z=t.s,$=t.Y},function(t){Q=t.k,tt=t.I,et=t.v,it=t.a},function(t){st=t._},function(t){nt=t.a,rt=t.c,at=t.U}],execute:function(){var ot=function(){function t(t,e){this._texture=void 0,this._width=void 0,this._height=void 0,this._x=void 0,this._y=void 0,this._nexty=void 0,this._innerTextureInfos={},this._innerSpriteFrames=void 0,this._count=void 0;var i=new ht;i.initWithSize(t,e),this._texture=i,this._width=t,this._height=e,this._x=2,this._y=2,this._nexty=2,this._innerTextureInfos={},this._innerSpriteFrames=[],this._count=0}var e=t.prototype;return e.insertSpriteFrame=function(t){var e=t.rect,s=t.texture,n=this._innerTextureInfos[s.getId()],r=e.x,a=e.y;if(n)r+=n.x,a+=n.y;else{var o=s.width,h=s.height;if(this._x+o+2>this._width&&(this._x=2,this._y=this._nexty),this._y+h+2>this._nexty&&(this._nexty=this._y+h+2),this._nexty>this._height)return null;i.internal.dynamicAtlasManager.textureBleeding&&((o<=8||h<=8)&&(this._texture.drawTextureAt(s.image,this._x-1,this._y-1),this._texture.drawTextureAt(s.image,this._x-1,this._y+1),this._texture.drawTextureAt(s.image,this._x+1,this._y-1),this._texture.drawTextureAt(s.image,this._x+1,this._y+1)),this._texture.drawTextureAt(s.image,this._x-1,this._y),this._texture.drawTextureAt(s.image,this._x+1,this._y),this._texture.drawTextureAt(s.image,this._x,this._y-1),this._texture.drawTextureAt(s.image,this._x,this._y+1)),this._texture.drawTextureAt(s.image,this._x,this._y),this._innerTextureInfos[s.getId()]={x:this._x,y:this._y,texture:s},this._count++,r+=this._x,a+=this._y,this._x+=o+2}var c={x:r,y:a,texture:this._texture};return this._innerSpriteFrames.push(t),c},e.deleteInnerTexture=function(t){t&&this._innerTextureInfos[t.getId()]&&(delete this._innerTextureInfos[t.getId()],this._count--)},e.isEmpty=function(){return this._count<=0},e.reset=function(){this._x=2,this._y=2,this._nexty=2;for(var t=this._innerSpriteFrames,e=0,i=t.length;e<i;e++){var s=t[e];s.isValid&&s._resetDynamicAtlasFrame()}this._innerSpriteFrames.length=0,this._innerTextureInfos={}},e.destroy=function(){this.reset(),this._texture.destroy()},t}(),ht=function(t){function i(){return t.apply(this,arguments)||this}e(i,t);var s=i.prototype;return s.initWithSize=function(t,e,i){void 0===i&&(i=v.RGBA8888),this.reset({width:t,height:e,format:i})},s.drawTextureAt=function(t,e,i){var s=this.getGFXTexture();if(t&&s){var n=this._getGFXDevice();if(n){var r=new l;r.texOffset.x=e,r.texOffset.y=i,r.texExtent.width=t.width,r.texExtent.height=t.height,n.copyTexImagesToTexture([t.data],s,[r])}else console.warn("Unable to get device")}},i}(g),ct=function(t){function a(){for(var e,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this)._atlases=[],e._atlasIndex=-1,e._maxAtlasCount=5,e._textureSize=2048,e._maxFrameSize=512,e._textureBleeding=!0,e._enabled=!1,e}e(a,t);var o=a.prototype;return o.newAtlas=function(){var t=this._atlases[++this._atlasIndex];return t||(t=new ot(this._textureSize,this._textureSize),this._atlases.push(t)),t},o.beforeSceneLoad=function(){this.reset()},o.init=function(){this.enabled=!s.CLEANUP_IMAGE_CACHE},o.insertSpriteFrame=function(t){if(!this._enabled||this._atlasIndex===this._maxAtlasCount||!t||t._original)return null;if(!t.packable)return null;var e=t.texture.getSamplerInfo();if(e.minFilter!==x.LINEAR||e.magFilter!==x.LINEAR||e.mipFilter!==x.NONE)return null;var i=this._atlases[this._atlasIndex];i||(i=this.newAtlas());var s=i.insertSpriteFrame(t);return s||this._atlasIndex===this._maxAtlasCount?s:(i=this.newAtlas()).insertSpriteFrame(t)},o.reset=function(){for(var t=0,e=this._atlases.length;t<e;t++)this._atlases[t].destroy();this._atlases.length=0,this._atlasIndex=-1},o.deleteAtlasSpriteFrame=function(t){if(t._original){for(var e,i=this._atlases.length-1;i>=0;i--)e=this._atlases[i],n.array.fastRemove(e._innerSpriteFrames,t);var s=t._original._texture;this.deleteAtlasTexture(s)}},o.deleteAtlasTexture=function(t){if(t)for(var e=this._atlases.length-1;e>=0;e--)this._atlases[e].deleteInnerTexture(t),this._atlases[e].isEmpty()&&(this._atlases[e].destroy(),this._atlases.splice(e,1),this._atlasIndex--)},o.packToDynamicAtlas=function(t,e){if(this._enabled&&e&&!e._original&&e.packable&&e.texture&&e.texture.width>0&&e.texture.height>0){var i=this.insertSpriteFrame(e);i&&e._setDynamicAtlasFrame(i)}},r(a,[{key:"enabled",get:function(){return this._enabled},set:function(t){this._enabled!==t&&(t?(this.reset(),i.director.on(i.Director.EVENT_BEFORE_SCENE_LAUNCH,this.beforeSceneLoad,this)):(this.reset(),i.director.off(i.Director.EVENT_BEFORE_SCENE_LAUNCH,this.beforeSceneLoad,this)),this._enabled=t)}},{key:"maxAtlasCount",get:function(){return this._maxAtlasCount},set:function(t){this._maxAtlasCount=t}},{key:"atlasCount",get:function(){return this._atlases.length}},{key:"textureBleeding",get:function(){return this._textureBleeding},set:function(t){this._textureBleeding=t}},{key:"textureSize",get:function(){return this._textureSize},set:function(t){this._textureSize=t}},{key:"maxFrameSize",get:function(){return this._maxFrameSize},set:function(t){this._maxFrameSize=t}}]),a}(y);ct.instance=void 0;var ut,_t,lt,mt=t("d",ct.instance=new ct);Q.registerSystem("dynamicAtlasManager",mt,0),i.internal.dynamicAtlasManager=mt;var pt,dt=new L,ft=new B;!function(t){t[t.RECT=0]="RECT",t[t.POLYGON=1]="POLYGON"}(pt||(pt={}));var vt,gt=[{u:0,v:0},{u:0,v:0},{u:0,v:0},{u:0,v:0}],xt=t("S",S("cc.SpriteFrame")((lt=_t=function(t){function i(){var e;return(e=t.call(this)||this).vertices=null,e.uv=[],e.unbiasUV=[],e.uvSliced=[],e._rect=new G,e._trimmedBorder=new H,e._offset=new X,e._originalSize=new Y,e._rotated=!1,e._capInsets=[0,0,0,0],e._atlasUuid="",e._texture=void 0,e._isFlipUVY=!1,e._isFlipUVX=!1,e._original=null,e._packable=!0,e._pixelsToUnit=100,e._pivot=new X(.5,.5),e._meshType=pt.RECT,e._extrude=0,e._customOutLine=[],e._minPos=new L,e._maxPos=new L,e}e(i,t),i.createWithImage=function(t){var e=t instanceof C?t:new C(t),s=new g;s.image=e;var n=new i;return n.texture=s,n};var s=i.prototype;return s.textureLoaded=function(){return!!this.texture},s.isRotated=function(){return this._rotated},s.setRotated=function(t){this.rotated=t},s.getRect=function(t){return t?(t.set(this._rect),t):this._rect.clone()},s.setRect=function(t){this.rect=t},s.getOriginalSize=function(t){return t?(t.set(this._originalSize),t):this._originalSize.clone()},s.setOriginalSize=function(t){this.originalSize=t},s.getOffset=function(t){return t?(t.set(this._offset),t):this._offset.clone()},s.setOffset=function(t){this.offset=t},s.getGFXTexture=function(){return this._texture.getGFXTexture()},s.getGFXSampler=function(){return this._texture.getGFXSampler()},s.getHash=function(){return this._texture.getHash()},s.getSamplerInfo=function(){return this._texture.getSamplerInfo()},s.reset=function(t,e){void 0===e&&(e=!1);var i=!1;e&&(this._originalSize.set(0,0),this._rect.set(0,0,0,0),this._offset.set(0,0),this._capInsets=[0,0,0,0],this._rotated=!1,i=!0),t&&(t.texture&&(this._rect.x=this._rect.y=0,this._rect.width=t.texture.width,this._rect.height=t.texture.height,this._refreshTexture(t.texture),this.checkRect(this._texture)),t.originalSize&&this._originalSize.set(t.originalSize),t.rect&&this._rect.set(t.rect),t.offset&&this._offset.set(t.offset),void 0!==t.borderTop&&(this._capInsets[1]=t.borderTop),void 0!==t.borderBottom&&(this._capInsets[3]=t.borderBottom),void 0!==t.borderLeft&&(this._capInsets[0]=t.borderLeft),void 0!==t.borderRight&&(this._capInsets[2]=t.borderRight),void 0!==t.isRotate&&(this._rotated=!!t.isRotate),void 0!==t.isFlipUv&&(this._isFlipUVY=!!t.isFlipUv),i=!0),i&&this.texture&&this._calculateUV(),this._calcTrimmedBorder()},s.checkRect=function(t){var e=this._rect,i=e.x,s=e.y;return this._rotated?(i+=e.height,s+=e.width):(i+=e.width,s+=e.height),i>t.width?(a(3300,this.name+"/"+t.name,i,t.width),!1):!(s>t.height&&(a(3301,this.name+"/"+t.name,s,t.height),1))},s._calcTrimmedBorder=function(){var t=this._originalSize.width,e=this._originalSize.height,i=.5*(t-this._rect.width),s=.5*(e-this._rect.height);this._trimmedBorder.x=this._offset.x+i,this._trimmedBorder.y=this._offset.x-i,this._trimmedBorder.z=this._offset.y+s,this._trimmedBorder.w=this._offset.y-s},s.ensureMeshData=function(){this._mesh||(this._initVertices(),this._createMesh())},s.destroy=function(){return this._packable&&mt&&mt.deleteAtlasSpriteFrame(this),t.prototype.destroy.call(this)},s._calculateSlicedUV=function(){var t=this._rect,e=this.texture,s=e.width,n=e.height,r=this._capInsets[0],a=this._capInsets[2],o=t.width-r-a,h=this._capInsets[1],c=this._capInsets[3],u=t.height-h-c,_=this.uvSliced;if(_.length=0,this._rotated){gt[0].u=t.x/s,gt[1].u=(t.x+c)/s,gt[2].u=(t.x+c+u)/s,gt[3].u=(t.x+t.height)/s,gt[3].v=t.y/n,gt[2].v=(t.y+r)/n,gt[1].v=(t.y+r+o)/n,gt[0].v=(t.y+t.width)/n;for(var l=0;l<4;++l)for(var m=gt[l],p=0;p<4;++p){var d=gt[3-p];_.push({u:m.u,v:d.v})}}else{gt[0].u=t.x/s,gt[1].u=(t.x+r)/s,gt[2].u=(t.x+r+o)/s,gt[3].u=(t.x+t.width)/s,gt[3].v=t.y/n,gt[2].v=(t.y+h)/n,gt[1].v=(t.y+h+u)/n,gt[0].v=(t.y+t.height)/n;for(var f=0;f<4;++f)for(var v=gt[f],g=0;g<4;++g){var x=gt[g];_.push({u:x.u,v:v.v})}}this.emit(i.EVENT_UV_UPDATED,this)},s._calculateUV=function(){var t=this._rect,e=this.uv,i=this.unbiasUV,s=this.texture,n=s.width,r=s.height;if(this._rotated){var a=0===n?0:t.x/n,o=0===n?1:(t.x+t.height)/n,h=0===r?0:t.y/r,c=0===r?1:(t.y+t.width)/r;this._isFlipUVX&&this._isFlipUVY?(e[0]=o,e[1]=c,e[2]=o,e[3]=h,e[4]=a,e[5]=c,e[6]=a,e[7]=h):this._isFlipUVX?(e[0]=o,e[1]=h,e[2]=o,e[3]=c,e[4]=a,e[5]=h,e[6]=a,e[7]=c):this._isFlipUVY?(e[0]=a,e[1]=c,e[2]=a,e[3]=h,e[4]=o,e[5]=c,e[6]=o,e[7]=h):(e[0]=a,e[1]=h,e[2]=a,e[3]=c,e[4]=o,e[5]=h,e[6]=o,e[7]=c);var u=0===n?0:t.x/n,_=0===n?1:(t.x+t.height)/n,l=0===r?0:t.y/r,m=0===r?1:(t.y+t.width)/r;this._isFlipUVX&&this._isFlipUVY?(i[0]=_,i[1]=m,i[2]=_,i[3]=l,i[4]=u,i[5]=m,i[6]=u,i[7]=l):this._isFlipUVX?(i[0]=_,i[1]=l,i[2]=_,i[3]=m,i[4]=u,i[5]=l,i[6]=u,i[7]=m):this._isFlipUVY?(i[0]=u,i[1]=m,i[2]=u,i[3]=l,i[4]=_,i[5]=m,i[6]=_,i[7]=l):(i[0]=u,i[1]=l,i[2]=u,i[3]=m,i[4]=_,i[5]=l,i[6]=_,i[7]=m)}else{var p=0===n?0:t.x/n,d=0===n?1:(t.x+t.width)/n,f=0===r?1:(t.y+t.height)/r,v=0===r?0:t.y/r;this._isFlipUVX&&this._isFlipUVY?(e[0]=d,e[1]=v,e[2]=p,e[3]=v,e[4]=d,e[5]=f,e[6]=p,e[7]=f):this._isFlipUVX?(e[0]=d,e[1]=f,e[2]=p,e[3]=f,e[4]=d,e[5]=v,e[6]=p,e[7]=v):this._isFlipUVY?(e[0]=p,e[1]=v,e[2]=d,e[3]=v,e[4]=p,e[5]=f,e[6]=d,e[7]=f):(e[0]=p,e[1]=f,e[2]=d,e[3]=f,e[4]=p,e[5]=v,e[6]=d,e[7]=v);var g=0===n?0:t.x/n,x=0===n?1:(t.x+t.width)/n,y=0===r?1:(t.y+t.height)/r,S=0===r?0:t.y/r;this._isFlipUVX&&this._isFlipUVY?(i[0]=x,i[1]=S,i[2]=g,i[3]=S,i[4]=x,i[5]=y,i[6]=g,i[7]=y):this._isFlipUVX?(i[0]=x,i[1]=y,i[2]=g,i[3]=y,i[4]=x,i[5]=S,i[6]=g,i[7]=S):this._isFlipUVY?(i[0]=g,i[1]=S,i[2]=x,i[3]=S,i[4]=g,i[5]=y,i[6]=x,i[7]=y):(i[0]=g,i[1]=y,i[2]=x,i[3]=y,i[4]=g,i[5]=S,i[6]=x,i[7]=S)}this._calculateSlicedUV()},s._setDynamicAtlasFrame=function(t){t&&(this._original={_texture:this._texture,_x:this._rect.x,_y:this._rect.y},this._texture=t.texture,this._rect.x=t.x,this._rect.y=t.y,this._calculateUV())},s._resetDynamicAtlasFrame=function(){this._original&&(this._rect.x=this._original._x,this._rect.y=this._original._y,this._texture=this._original._texture,this._original=null,this._calculateUV())},s._checkPackable=function(){var t=mt;if(t){var e=this._texture;if(e instanceof g&&!e.isCompressed){var i=this.width,s=this.height;!e.image||i>t.maxFrameSize||s>t.maxFrameSize?this._packable=!1:e.image&&e.image instanceof HTMLCanvasElement&&(this._packable=!0)}else this._packable=!1}},s._serialize=function(){return null},s._deserialize=function(t){var e=t,i=e.rect;i&&(this._rect=new G(i.x,i.y,i.width,i.height));var s=e.offset;e.offset&&(this._offset=new X(s.x,s.y));var n=e.originalSize;e.originalSize&&(this._originalSize=new Y(n.width,n.height)),this._rotated=!!e.rotated,this._name=e.name,this._packable=!!e.packable,this._pixelsToUnit=e.pixelsToUnit;var r=e.pivot;r&&(this._pivot=new X(r.x,r.y)),this._meshType=e.meshType;var a=e.capInsets;a&&(this._capInsets[0]=a[0],this._capInsets[1]=a[1],this._capInsets[2]=a[2],this._capInsets[3]=a[3]);var o=e.vertices;if(o){this.vertices||(this.vertices={rawPosition:[],positions:[],indexes:o.indexes,uv:o.uv,nuv:o.nuv,minPos:new L(o.minPos.x,o.minPos.y,o.minPos.z),maxPos:new L(o.maxPos.x,o.maxPos.y,o.maxPos.z)}),this.vertices.rawPosition.length=0;for(var h=o.rawPosition,c=0;c<h.length;c+=3)this.vertices.rawPosition.push(new L(h[c],h[c+1],h[c+2]));this._updateMeshVertices()}},s.clone=function(){var t,e,s,n,r=new i,a=this.vertices;return r.vertices=a?{rawPosition:a.rawPosition.slice(0),positions:a.positions.slice(0),indexes:a.indexes.slice(0),uv:a.uv.slice(0),nuv:a.nuv.slice(0),minPos:a.minPos.clone(),maxPos:a.minPos.clone()}:null,(t=r.uv).splice.apply(t,[0,r.uv.length].concat(this.uv)),(e=r.unbiasUV).splice.apply(e,[0,r.unbiasUV.length].concat(this.unbiasUV)),(s=r.uvSliced).splice.apply(s,[0,r.uvSliced.length].concat(this.uvSliced)),r._rect.set(this._rect),r._offset.set(this._offset),r._originalSize.set(this._originalSize),r._rotated=this._rotated,(n=r._capInsets).splice.apply(n,[0,r._capInsets.length].concat(this._capInsets)),r._atlasUuid=this._atlasUuid,r._texture=this._texture,r._isFlipUVX=this._isFlipUVX,r._isFlipUVY=this._isFlipUVY,r._pixelsToUnit=this._pixelsToUnit,r._pivot.set(this._pivot),r._meshType=this._meshType,r},s._refreshTexture=function(t){this._texture=t;var e=this._texture,i={},s=!1;0!==this._rect.width&&0!==this._rect.height&&this.checkRect(e)||(i.rect=new G(0,0,e.width,e.height),s=!0),(0===this._originalSize.width||0===this._originalSize.height||s)&&(i.originalSize=new Y(e.width,e.height),s=!0),s&&this.reset(i),this._checkPackable(),this._mesh&&this._updateMesh()},s.onLoaded=function(){this._calcTrimmedBorder()},s.initDefault=function(e){t.prototype.initDefault.call(this,e);var i=new g;i.initDefault(),this._refreshTexture(i),this._calculateUV()},s.validate=function(){return this._texture&&this._rect&&0!==this._rect.width&&0!==this._rect.height},s._initVertices=function(){if(this.vertices?(this.vertices.rawPosition.length=0,this.vertices.positions.length=0,this.vertices.indexes.length=0,this.vertices.uv.length=0,this.vertices.nuv.length=0,this.vertices.minPos.set(0,0,0),this.vertices.maxPos.set(0,0,0)):this.vertices={rawPosition:[],positions:[],indexes:[],uv:[],nuv:[],minPos:new L,maxPos:new L},this._meshType===pt.POLYGON);else{var t=this.texture,e=t.width,i=t.height,s=this.rect,n=s.width,r=s.height,a=s.x,o=i-s.y-r,h=n/2,c=r/2,u=0===e?0:a/e,_=0===e?1:(a+n)/e,l=0===i?1:(o+r)/i,m=0===i?0:s.y/i;dt.set(-h,-c,0),this.vertices.rawPosition.push(dt.clone()),this.vertices.uv.push(a),this.vertices.uv.push(o+r),this.vertices.nuv.push(u),this.vertices.nuv.push(m),this.vertices.minPos.set(dt),dt.set(h,-c,0),this.vertices.rawPosition.push(dt.clone()),this.vertices.uv.push(a+n),this.vertices.uv.push(o+r),this.vertices.nuv.push(_),this.vertices.nuv.push(m),dt.set(-h,c,0),this.vertices.rawPosition.push(dt.clone()),this.vertices.uv.push(a),this.vertices.uv.push(o),this.vertices.nuv.push(u),this.vertices.nuv.push(l),dt.set(h,c,0),this.vertices.rawPosition.push(dt.clone()),this.vertices.uv.push(a+n),this.vertices.uv.push(o),this.vertices.nuv.push(_),this.vertices.nuv.push(l),this.vertices.maxPos.set(dt),this.vertices.indexes.push(0),this.vertices.indexes.push(1),this.vertices.indexes.push(2),this.vertices.indexes.push(2),this.vertices.indexes.push(1),this.vertices.indexes.push(3)}this._updateMeshVertices()},s._updateMeshVertices=function(){ft.identity();var t=1/this._pixelsToUnit,e=new L(t,t,1);ft.scale(e);var i=-(this._pivot.x-.5)*this.rect.width*t,s=-(this._pivot.y-.5)*this.rect.height*t;e.set(i,s,0),ft.translate(e);for(var n=this.vertices,r=0;r<n.rawPosition.length;r++){var a=n.rawPosition[r];L.transformMat4(e,a,ft),L.toArray(n.positions,e,3*r)}L.transformMat4(this._minPos,n.minPos,ft),L.transformMat4(this._maxPos,n.maxPos,ft)},s._createMesh=function(){this._mesh=st({primitiveMode:m.TRIANGLE_LIST,positions:this.vertices.positions,uvs:this.vertices.nuv,indices:this.vertices.indexes,minPos:this._minPos,maxPos:this._maxPos,attributes:[new p(d.ATTR_POSITION,f.RGB32F),new p(d.ATTR_TEX_COORD,f.RG32F)]})},s._updateMesh=function(){this._mesh&&this._mesh.destroy(),this._initVertices(),this._createMesh()},r(i,[{key:"insetTop",get:function(){return this._capInsets[1]},set:function(t){this._capInsets[1]!==t&&(this._capInsets[1]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetBottom",get:function(){return this._capInsets[3]},set:function(t){this._capInsets[3]!==t&&(this._capInsets[3]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetLeft",get:function(){return this._capInsets[0]},set:function(t){this._capInsets[0]!==t&&(this._capInsets[0]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetRight",get:function(){return this._capInsets[2]},set:function(t){this._capInsets[2]!==t&&(this._capInsets[2]=t,this._texture&&this._calculateSlicedUV())}},{key:"rect",get:function(){return this._rect},set:function(t){this._rect.equals(t)||(this._rect.set(t),this._texture&&this._calculateUV(),this._calcTrimmedBorder())}},{key:"originalSize",get:function(){return this._originalSize},set:function(t){this._originalSize.equals(t)||(this._originalSize.set(t),this._texture&&this._calculateUV(),this._calcTrimmedBorder())}},{key:"offset",get:function(){return this._offset},set:function(t){this._offset.set(t),this._calcTrimmedBorder()}},{key:"rotated",get:function(){return this._rotated},set:function(t){this._rotated!==t&&(this._rotated=t,this._texture&&this._calculateUV())}},{key:"texture",get:function(){return this._texture},set:function(t){t?t!==this._texture&&this.reset({texture:t},!0):o(3122,this.name)}},{key:"atlasUuid",get:function(){return this._atlasUuid},set:function(t){this._atlasUuid=t}},{key:"width",get:function(){return this._texture.width}},{key:"height",get:function(){return this._texture.height}},{key:"_textureSource",set:function(t){window.Build?this._texture=t:t&&(this._refreshTexture(t),this._calculateUV())}},{key:"flipUVX",get:function(){return this._isFlipUVX},set:function(t){this._isFlipUVX=t,this._calculateUV()}},{key:"flipUVY",get:function(){return this._isFlipUVY},set:function(t){this._isFlipUVY=t,this._calculateUV()}},{key:"packable",get:function(){return this._packable},set:function(t){this._packable=t}},{key:"original",get:function(){return this._original}},{key:"pixelsToUnit",get:function(){return this._pixelsToUnit}},{key:"pivot",get:function(){return this._pivot}},{key:"mesh",get:function(){return this._mesh}},{key:"trimmedBorder",get:function(){return this._trimmedBorder}}]),i}(w),_t.EVENT_UV_UPDATED="uv_updated",_t.MeshType=pt,ut=lt))||ut);i.SpriteFrame=xt,W({RenderComponent:{newName:"UIRenderer",since:"1.2.0",removed:!0},UITransformComponent:{newName:"UITransform",since:"1.2.0",removed:!1},CanvasComponent:{newName:"Canvas",since:"1.2.0",removed:!1}}),W({UIRenderable:{newName:"UIRenderer",since:"3.0.0",removed:!0}}),W({Renderable2D:{newName:"UIRenderer",since:"3.6.0",removed:!0}});var yt,St,wt,Ct,bt,Tt,Ft,Ut,It,Pt,Rt,Vt,At,Et,zt=t("R",S("cc.RenderRoot2D")(vt=F(100)(vt=U()(vt=I(nt)(vt=b(vt=T(vt=function(t){function s(){return t.apply(this,arguments)||this}e(s,t);var n=s.prototype;return n.onEnable=function(){i.director.root.batcher2D.addScreen(this)},n.onDisable=function(){i.director.root.batcher2D.removeScreen(this)},n.onDestroy=function(){i.director.root.batcher2D.removeScreen(this)},s}(P))||vt)||vt)||vt)||vt)||vt)||vt),Mt=new L,Dt=h({OVERLAY:0,INTERSPERSE:1}),kt=t("C",(yt=S("cc.Canvas"),St=E(),wt=F(100),Ct=U(),bt=R(V),Tt=z(),Ft=z(),Ut=R(V),yt(It=St(It=wt(It=Ct(It=T(It=b((At=function(t){function i(){var e;return e=t.call(this)||this,u(e,"_cameraComponent",Rt,_(e)),u(e,"_alignCanvasWithScreen",Vt,_(e)),e._thisOnCameraResized=void 0,e._fitDesignResolution=void 0,e._pos=new L,e._renderMode=Dt.OVERLAY,e._thisOnCameraResized=e._onResizeCamera.bind(_(e)),e}e(i,t);var s=i.prototype;return s.__preload=function(){var t=this.getComponent("cc.Widget");t&&t.updateAlignment(),this._cameraComponent&&(this._cameraComponent._createCamera(),this._cameraComponent.node.on(V.TARGET_TEXTURE_CHANGE,this._thisOnCameraResized)),this._onResizeCamera(),this.node.on(A.TRANSFORM_CHANGED,this._thisOnCameraResized)},s.onEnable=function(){t.prototype.onEnable.call(this),this._cameraComponent&&this._cameraComponent.node.on(V.TARGET_TEXTURE_CHANGE,this._thisOnCameraResized)},s.onDisable=function(){t.prototype.onDisable.call(this),this._cameraComponent&&this._cameraComponent.node.off(V.TARGET_TEXTURE_CHANGE,this._thisOnCameraResized)},s.onDestroy=function(){t.prototype.onDestroy.call(this),this.node.off(A.TRANSFORM_CHANGED,this._thisOnCameraResized)},s._onResizeCamera=function(){if(this._cameraComponent&&this._alignCanvasWithScreen){if(this._cameraComponent.targetTexture)this._cameraComponent.orthoHeight=tt.height/2;else{var t=Z.windowSize;this._cameraComponent.orthoHeight=t.height/et.getScaleY()/2}this.node.getWorldPosition(Mt),this._cameraComponent.node.setWorldPosition(Mt.x,Mt.y,1e3)}},s._getViewPriority=function(){if(this._cameraComponent){var t,e=null===(t=this.cameraComponent)||void 0===t?void 0:t.priority;return this._renderMode===Dt.OVERLAY?e|1<<30:e&~(1<<30)}return 0},r(i,[{key:"renderMode",get:function(){return this._renderMode},set:function(t){this._renderMode=t,this._cameraComponent&&(this._cameraComponent.priority=this._getViewPriority())}},{key:"cameraComponent",get:function(){return this._cameraComponent},set:function(t){this._cameraComponent!==t&&(this._cameraComponent=t,this._onResizeCamera())}},{key:"alignCanvasWithScreen",get:function(){return this._alignCanvasWithScreen},set:function(t){this._alignCanvasWithScreen=t,this._onResizeCamera()}}]),i}(zt),c((Pt=At).prototype,"cameraComponent",[bt,Tt],Object.getOwnPropertyDescriptor(Pt.prototype,"cameraComponent"),Pt.prototype),c(Pt.prototype,"alignCanvasWithScreen",[Ft],Object.getOwnPropertyDescriptor(Pt.prototype,"alignCanvasWithScreen"),Pt.prototype),Rt=c(Pt.prototype,"_cameraComponent",[Ut],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Vt=c(Pt.prototype,"_alignCanvasWithScreen",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),It=Pt))||It)||It)||It)||It)||It)||It));i.Canvas=kt;var Ot,Nt,Lt,Bt,Gt,Xt,Yt,Ht,Wt,jt,qt,Kt,Jt,Zt,$t,Qt,te=t("U",S("cc.UIComponent")(Et=I(nt)(Et=F(110)(Et=b(Et=T(Et=function(t){function i(){for(var e,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this)._lastParent=null,e.stencilStage=rt.DISABLED,e}e(i,t);var s=i.prototype;return s.__preload=function(){this.node._uiProps.uiComp=this},s.onEnable=function(){},s.onDisable=function(){},s.onDestroy=function(){this.node._uiProps.uiComp===this&&(this.node._uiProps.uiComp=null)},s.postUpdateAssembler=function(){},s.markForUpdateRenderData=function(){},s.setNodeDirty=function(){},s.setTextureDirty=function(){},i}(P))||Et)||Et)||Et)||Et)||Et);j(te.prototype,"UIComponent",[{name:"_visibility"},{name:"setVisibility"}]),j(at.prototype,"Renderable2D.prototype",[{name:"srcBlendFactor"},{name:"dstBlendFactor"}]),q(kt.prototype,"Canvas.prototype",[{name:"camera",newName:"cameraComponent.camera",customGetter:function(){return this._cameraComponent.camera}},{name:"clearFlag",newName:"cameraComponent.clearFlags",customGetter:function(){return this._cameraComponent?this._cameraComponent.clearFlags:0},customSetter:function(t){this._cameraComponent&&(this._cameraComponent.clearFlags=t)}},{name:"color",newName:"cameraComponent.clearColor",customGetter:function(){return this._cameraComponent?this._cameraComponent.clearColor:K.BLACK},customSetter:function(t){this._cameraComponent&&(this._cameraComponent.clearColor=t)}},{name:"priority",newName:"cameraComponent.priority",customGetter:function(){return this._cameraComponent?this._cameraComponent.priority:0},customSetter:function(t){this._cameraComponent&&(this._cameraComponent.priority=t)}},{name:"targetTexture",newName:"cameraComponent.targetTexture",customGetter:function(){return this._cameraComponent?this._cameraComponent.targetTexture:null},customSetter:function(t){this._cameraComponent&&(this._cameraComponent.targetTexture=t)}},{name:"visibility",newName:"cameraComponent.visibility",customGetter:function(){return this._cameraComponent?this._cameraComponent.visibility:0}}]),J(nt.prototype,"UITransform.prototype",[{name:"priority",suggest:"Please use setSiblingIndex to change index of the current node in its parent's children array."}]),i.UITransformComponent=nt,n.setClassAlias(nt,"cc.UITransformComponent"),n.setClassAlias(at,"cc.RenderComponent"),i.CanvasComponent=kt,n.setClassAlias(kt,"cc.CanvasComponent"),i.internal.Renderable2D=at,n.setClassAlias(at,"cc.Renderable2D"),function(t){t[t.SIMPLE=0]="SIMPLE",t[t.SLICED=1]="SLICED",t[t.TILED=2]="TILED"}(Qt||(Qt={})),t("a",(Ot=S("cc.SpriteRenderer"),Nt=E(),Lt=F(100),Bt=U(),Gt=R(xt),Xt=N(),Ot(Yt=Nt(Yt=Lt(Yt=Bt(Yt=T(($t=function(t){function s(){for(var e,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return e=t.call.apply(t,[this].concat(s))||this,u(e,"_spriteFrame",Wt,_(e)),u(e,"_mode",jt,_(e)),u(e,"_color",qt,_(e)),u(e,"_flipX",Kt,_(e)),u(e,"_flipY",Jt,_(e)),u(e,"_size",Zt,_(e)),e._model=null,e}e(s,t);var n=s.prototype;return n.onLoad=function(){this._spriteFrame&&(this._spriteFrame.mesh||this._spriteFrame.ensureMeshData(),this._spriteFrame.mesh.initialize()),this._updateModels()},n.onRestore=function(){this._updateModels(),this.enabledInHierarchy&&this._attachToScene()},n.onEnable=function(){this._model||this._updateModels(),this._attachToScene()},n.onDisable=function(){this._model&&this._detachFromScene()},n.onDestroy=function(){this._model&&(i.director.root.destroyModel(this._model),this._model=null,this._models.length=0)},n._updateModels=function(){if(this._spriteFrame){var t=this._model;if(t?(t.destroy(),t.initialize(),t.node=t.transform=this.node):this._createModel(),this._model){var e=this._spriteFrame.mesh;this._model.createBoundingShape(e.struct.minPosition,e.struct.maxPosition),this._updateModelParams(),this._onUpdateLocalDescriptorSet()}}},n._createModel=function(){var t=this._model=i.director.root.createModel(it);t.visFlags=this.visibility,t.node=t.transform=this.node,this._models.length=0,this._models.push(this._model)},n._updateModelParams=function(){if(this._spriteFrame&&this._model){this._spriteFrame.ensureMeshData();var t=this._spriteFrame.mesh;this.node.hasChangedFlags|=D.POSITION,this._model.transform.hasChangedFlags|=D.POSITION;var e=t?t.renderingSubMeshes.length:0,i=t.renderingSubMeshes;if(i)for(var s=0;s<e;++s){var n=this.getRenderMaterial(s);n&&!n.isValid&&(n=null);var r=i[s];r&&this._model.initSubModel(s,r,n||this._getBuiltinMaterial())}this._model.enabled=!0}},n._getBuiltinMaterial=function(){return k.get("missing-material")},n._onMaterialModified=function(e,i){t.prototype._onMaterialModified.call(this,e,i),this._spriteFrame&&this._model&&this._model.inited&&this._onRebuildPSO(e,i||this._getBuiltinMaterial())},n._onRebuildPSO=function(t,e){this._model&&this._model.inited&&(this._model.setSubModelMaterial(t,e),this._onUpdateLocalDescriptorSet())},n._onUpdateLocalDescriptorSet=function(){if(this._spriteFrame&&this._model&&this._model.inited)for(var t=this._spriteFrame.getGFXTexture(),e=this._spriteFrame.getGFXSampler(),i=this._model.subModels,s=$.SAMPLER_SPRITE,n=0;n<i.length;n++){var r=i[n].descriptorSet;r.bindTexture(s,t),r.bindSampler(s,e),r.update()}},n._attachToScene=function(){if(this.node.scene&&this._model){var t=this._getRenderScene();null!==this._model.scene&&this._detachFromScene(),t.addModel(this._model)}},n._detachFromScene=function(){this._model&&this._model.scene&&this._model.scene.removeModel(this._model)},r(s,[{key:"spriteFrame",get:function(){return this._spriteFrame},set:function(t){this._spriteFrame!==t&&(this._spriteFrame,this._spriteFrame=t,this._spriteFrame&&(this._spriteFrame.ensureMeshData(),this._spriteFrame.mesh.initialize()),this._updateModels(),this.enabledInHierarchy&&this._attachToScene())}},{key:"model",get:function(){return this._model}}]),s}(O),c((Ht=$t).prototype,"spriteFrame",[Gt],Object.getOwnPropertyDescriptor(Ht.prototype,"spriteFrame"),Ht.prototype),Wt=c(Ht.prototype,"_spriteFrame",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),jt=c(Ht.prototype,"_mode",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Qt.SIMPLE}}),qt=c(Ht.prototype,"_color",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return K.WHITE.clone()}}),Kt=c(Ht.prototype,"_flipX",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Jt=c(Ht.prototype,"_flipY",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Zt=c(Ht.prototype,"_size",[Xt,M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new X}}),Yt=Ht))||Yt)||Yt)||Yt)||Yt)||Yt))}}}));