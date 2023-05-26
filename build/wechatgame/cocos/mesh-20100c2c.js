System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./pipeline-state-manager-f4a950fe.js"],(function(t){"use strict";var e,r,i,n,s,a,u,o,f,h,c,d,l,v,_,m,g,w,p,b,x,T,y,A,I,M,E,B,P,R,S,U,O,N,V,D,F,C,L,k,z;return{setters:[function(t){e=t.A,r=t.Q,i=t.l,n=t.w,s=t.i,a=t.ap,u=t.an,o=t.ae,f=t.F,h=t.d,c=t.G,d=t.H,l=t.I},function(t){v=t.aS,_=t.ac,m=t.e,g=t.g,w=t.c,p=t.k,b=t.at,x=t.ae,T=t.F,y=t.aT,A=t.b0,I=t.d,M=t.bm},function(t){E=t.a9,B=t.aa,P=t.a$,R=t.a5,S=t.aZ,U=t.a2,O=t.b1},function(t){N=t.a,V=t.Q},function(t){D=t.K,F=t.M,C=t.N,L=t.O,k=t.d,z=t.a}],execute:function(){var G,H,W,X,j,q,Q=t("B",function(){function t(){this._arrayBufferOrPaddings=[],this._length=0}var e=t.prototype;return e.setNextAlignment=function(t){if(0!==t){var e=this._length%t;if(0!==e){var r=t-e;this._arrayBufferOrPaddings.push(r),this._length+=r}}},e.addBuffer=function(t){var e=this._length;return this._arrayBufferOrPaddings.push(t),this._length+=t.byteLength,e},e.getLength=function(){return this._length},e.getCombined=function(){var t=new Uint8Array(this._length),e=0;return this._arrayBufferOrPaddings.forEach((function(r){"number"==typeof r?e+=r:(t.set(new Uint8Array(r),e),e+=r.byteLength)})),t.buffer},t}()),Z=function(){function t(t,e){if(this._mesh=void 0,this._subMeshRenderings=[],this._mesh=t,this._mesh.struct.morph){var r=this._mesh.struct.primitives.length;this._subMeshRenderings=new Array(r).fill(null);for(var i=0;i<r;++i){var n=this._mesh.struct.morph.subMeshMorphs[i];n&&(n.targets.length>D.MAX_MORPH_TARGET_COUNT?this._subMeshRenderings[i]=new K(this._mesh,i,this._mesh.struct.morph,e):this._subMeshRenderings[i]=new J(this._mesh,i,this._mesh.struct.morph,e))}}}return t.prototype.createInstance=function(){for(var t=this,e=this._mesh.struct.primitives.length,r=new Array(e),i=0;i<e;++i){var n,a;r[i]=null!==(n=null===(a=this._subMeshRenderings[i])||void 0===a?void 0:a.createInstance())&&void 0!==n?n:null}return{setWeights:function(t,e){var i;null===(i=r[t])||void 0===i||i.setWeights(e)},requiredPatches:function(e){o(t._mesh.struct.morph);var i=t._mesh.struct.morph.subMeshMorphs[e],n=r[e];if(null===n)return null;var s=[{name:"CC_USE_MORPH",value:!0},{name:"CC_MORPH_TARGET_COUNT",value:i.targets.length}];return i.attributes.includes(v.ATTR_POSITION)&&s.push({name:"CC_MORPH_TARGET_HAS_POSITION",value:!0}),i.attributes.includes(v.ATTR_NORMAL)&&s.push({name:"CC_MORPH_TARGET_HAS_NORMAL",value:!0}),i.attributes.includes(v.ATTR_TANGENT)&&s.push({name:"CC_MORPH_TARGET_HAS_TANGENT",value:!0}),s.push.apply(s,n.requiredPatches()),s},adaptPipelineState:function(t,e){var i;null===(i=r[t])||void 0===i||i.adaptPipelineState(e)},destroy:function(){for(var t,e=s(r);!(t=e()).done;){var i=t.value;null==i||i.destroy()}}}},t}(),J=function(){function t(t,e,r,i){this._gfxDevice=void 0,this._subMeshMorph=void 0,this._textureInfo=void 0,this._attributes=void 0,this._verticesCount=void 0,this._gfxDevice=i;var n=r.subMeshMorphs[e];this._subMeshMorph=n,et(t,e,i);var s=t.struct.vertexBundles[t.struct.primitives[e].vertexBundelIndices[0]].view.count;this._verticesCount=s;var a=n.targets.length,u=tt(i,s*a);this._textureInfo={width:u.width,height:u.height},this._attributes=n.attributes.map((function(e,r){var i=u.create(),a=i.valueView;return n.targets.forEach((function(e,i){for(var n=e.displacements[r],u=new Float32Array(t.data.buffer,t.data.byteOffset+n.offset,n.count),o=s*i*4,f=0;f<s;++f)a[o+4*f+0]=u[3*f+0],a[o+4*f+1]=u[3*f+1],a[o+4*f+2]=u[3*f+2]})),i.updatePixels(),{name:e,morphTexture:i}}))}var e=t.prototype;return e.destroy=function(){for(var t,e=s(this._attributes);!(t=e()).done;)t.value.morphTexture.destroy()},e.createInstance=function(){var t=this,e=new $(this._gfxDevice,this._subMeshMorph.targets.length);return e.setMorphTextureInfo(this._textureInfo.width,this._textureInfo.height),e.setVerticesCount(this._verticesCount),e.commit(),{setWeights:function(t){e.setWeights(t),e.commit()},requiredPatches:function(){return[{name:"CC_MORPH_TARGET_USE_TEXTURE",value:!0}]},adaptPipelineState:function(r){for(var i,a=s(t._attributes);!(i=a()).done;){var u=i.value,o=void 0;switch(u.name){case v.ATTR_POSITION:o=L;break;case v.ATTR_NORMAL:o=C;break;case v.ATTR_TANGENT:o=F;break;default:n("Unexpected attribute!")}void 0!==o&&(r.bindSampler(o,u.morphTexture.sampler),r.bindTexture(o,u.morphTexture.texture))}r.bindBuffer(D.BINDING,e.buffer),r.update()},destroy:function(){}}},t}(),K=function(){function t(t,e,r,i){this._gfxDevice=void 0,this._attributes=[],this._gfxDevice=i;var n=r.subMeshMorphs[e];et(t,e,i),this._attributes=n.attributes.map((function(e,r){return{name:e,targets:n.targets.map((function(e){return{displacements:new Float32Array(t.data.buffer,t.data.byteOffset+e.displacements[r].offset,e.displacements[r].count)}}))}}))}return t.prototype.createInstance=function(){return new Y(this,this._attributes[0].targets[0].displacements.length/3,this._gfxDevice)},e(t,[{key:"data",get:function(){return this._attributes}}]),t}(),Y=function(){function t(t,e,r){this._attributes=void 0,this._owner=void 0,this._morphUniforms=void 0,this._owner=t,this._morphUniforms=new $(r,0);var i=tt(r,e);this._morphUniforms.setMorphTextureInfo(i.width,i.height),this._morphUniforms.commit(),this._attributes=this._owner.data.map((function(t){var e=i.create();return{attributeName:t.name,morphTexture:e}}))}var e=t.prototype;return e.setWeights=function(t){for(var e=0;e<this._attributes.length;++e){var i=this._attributes[e],n=i.morphTexture.valueView,s=this._owner.data[e];r(t.length===s.targets.length);for(var a=0;a<s.targets.length;++a){var u=s.targets[a].displacements,o=t[a],f=u.length/3;if(0===a)for(var h=0;h<f;++h)n[4*h+0]=u[3*h+0]*o,n[4*h+1]=u[3*h+1]*o,n[4*h+2]=u[3*h+2]*o;else if(0!==o)for(var c=0;c<f;++c)n[4*c+0]+=u[3*c+0]*o,n[4*c+1]+=u[3*c+1]*o,n[4*c+2]+=u[3*c+2]*o}i.morphTexture.updatePixels()}},e.requiredPatches=function(){return[{name:"CC_MORPH_TARGET_USE_TEXTURE",value:!0},{name:"CC_MORPH_PRECOMPUTED",value:!0}]},e.adaptPipelineState=function(t){for(var e,r=s(this._attributes);!(e=r()).done;){var i=e.value,a=void 0;switch(i.attributeName){case v.ATTR_POSITION:a=L;break;case v.ATTR_NORMAL:a=C;break;case v.ATTR_TANGENT:a=F;break;default:n("Unexpected attribute!")}void 0!==a&&(t.bindSampler(a,i.morphTexture.sampler),t.bindTexture(a,i.morphTexture.texture))}t.bindBuffer(D.BINDING,this._morphUniforms.buffer),t.update()},e.destroy=function(){this._morphUniforms.destroy();for(var t=0;t<this._attributes.length;++t)this._attributes[t].morphTexture.destroy()},t}(),$=function(){function t(t,e){this._targetCount=void 0,this._localBuffer=void 0,this._remoteBuffer=void 0,this._targetCount=e,this._localBuffer=new DataView(new ArrayBuffer(D.SIZE)),this._remoteBuffer=t.createBuffer(new _(m.UNIFORM|m.TRANSFER_DST,g.HOST|g.DEVICE,D.SIZE,D.SIZE))}var n=t.prototype;return n.destroy=function(){this._remoteBuffer.destroy()},n.setWeights=function(t){r(t.length===this._targetCount);for(var e=0;e<t.length;++e)this._localBuffer.setFloat32(D.OFFSET_OF_WEIGHTS+4*e,t[e],i.sys.isLittleEndian)},n.setMorphTextureInfo=function(t,e){this._localBuffer.setFloat32(D.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH,t,i.sys.isLittleEndian),this._localBuffer.setFloat32(D.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT,e,i.sys.isLittleEndian)},n.setVerticesCount=function(t){this._localBuffer.setFloat32(D.OFFSET_OF_VERTICES_COUNT,t,i.sys.isLittleEndian)},n.commit=function(){this._remoteBuffer.update(this._localBuffer.buffer)},e(t,[{key:"buffer",get:function(){return this._remoteBuffer}}]),t}();function tt(t,e){var r,i,s,o;t.getFormatFeatures(w.RGBA32F)&p.SAMPLED_TEXTURE?(r=e,s=16,i=B.PixelFormat.RGBA32F,o=Float32Array):(r=4*e,s=4,i=B.PixelFormat.RGBA8888,o=Uint8Array);var f=function(t){t<5&&(t=5);var e=a(t),r=u(e),i=r>>1;return{width:1<<(1&r?i+1:i),height:1<<i}}(r),h=f.width,c=f.height;return{width:h,height:c,create:function(){var e=new ArrayBuffer(h*c*s),r=new Float32Array(e),a=o===Float32Array?r:new o(e),u=new E({width:h,height:c,_data:a,_compressed:!1,format:i}),f=new B;f.setFilters(B.Filter.NEAREST,B.Filter.NEAREST),f.setMipFilter(B.Filter.NONE),f.setWrapMode(B.WrapMode.CLAMP_TO_EDGE,B.WrapMode.CLAMP_TO_EDGE,B.WrapMode.CLAMP_TO_EDGE),f.image=u,f.getGFXTexture()||n("Unexpected: failed to create morph texture?");var d=t.getSampler(f.getSamplerInfo());return{get texture(){return f.getGFXTexture()},get sampler(){return d},get valueView(){return r},destroy:function(){f.destroy()},updatePixels:function(){f.uploadData(a)}}}}}function et(t,e,r){t.renderingSubMeshes[e].enableVertexIdChannel(r)}function rt(t){switch(t){case 1:return Uint8Array;case 2:return Uint16Array;case 4:return Uint32Array;default:return Uint8Array}}var it=new N,nt=new N,st=new Uint8Array,at=t("M",P("cc.Mesh")((q=function(t){function i(){var e;return(e=t.call(this)||this).morphRendering=null,d(e,"_struct",W,l(e)),d(e,"_hash",X,l(e)),e._data=st,e._initialized=!1,d(e,"_allowDataAccess",j,l(e)),e._isMeshDataUploaded=!1,e._renderingSubMeshes=null,e._boneSpaceBounds=new Map,e._jointBufferIndices=null,e}f(i,t);var n=i.prototype;return n.onLoaded=function(){this.initialize()},n.initialize=function(){var t=this;if(!this._initialized)if(this._initialized=!0,this._struct.dynamic){for(var e=k.gfxDevice,r=[],i=[],n=0;n<this._struct.vertexBundles.length;n++){var a=this._struct.vertexBundles[n],u=e.createBuffer(new _(m.VERTEX|m.TRANSFER_DST,g.DEVICE,a.view.length,a.view.stride));r.push(u)}for(var o=0;o<this._struct.primitives.length;o++){var f=this._struct.primitives[o],c=f.indexView,d=null;c&&(d=e.createBuffer(new _(m.INDEX|m.TRANSFER_DST,g.DEVICE,c.length,c.stride)));for(var l=[],v=0;v<f.vertexBundelIndices.length;v++){var w=f.vertexBundelIndices[v];l.push(r[w])}for(var p=[],y=0;y<f.vertexBundelIndices.length;y++)for(var A,I=f.vertexBundelIndices[y],M=this._struct.vertexBundles[I],E=s(M.attributes);!(A=E()).done;){var B=A.value,P=new b;P.copy(B),p.push(P)}var S=new R(l,p,f.primitiveMode,d);S.drawInfo=new x,S.mesh=this,S.subMeshIdx=o,i.push(S)}this._renderingSubMeshes=i}else!function(){for(var e=t._data.buffer,r=k.gfxDevice,i=t._createVertexBuffers(r,e),n=[],s=0;s<t._struct.primitives.length;s++){var a=t._struct.primitives[s];if(0!==a.vertexBundelIndices.length){var u=null,o=null;if(a.indexView){var f=a.indexView,c=f.stride,d=f.length;if(4===c&&!r.hasFeature(T.ELEMENT_INDEX_UINT)){var l=t._struct.vertexBundles[a.vertexBundelIndices[0]].view.count;if(l>=65536){h(10001,l,65536);continue}c>>=1,d>>=1}u=r.createBuffer(new _(m.INDEX,g.DEVICE,d,c)),o=new(rt(f.stride))(e,f.offset,f.count),f.stride!==c&&(o=rt(c).from(o)),u.update(o)}var v=a.vertexBundelIndices.map((function(t){return i[t]})),w=[];if(a.vertexBundelIndices.length>0)for(var p=a.vertexBundelIndices[0],x=t._struct.vertexBundles[p].attributes,y=0;y<x.length;++y){var A=x[y];w[y]=new b(A.name,A.format,A.isNormalized,A.stream,A.isInstanced,A.location)}var I=new R(v,w,a.primitiveMode,u);I.mesh=t,I.subMeshIdx=s,n.push(I)}}t._renderingSubMeshes=n,t._struct.morph&&(t.morphRendering=function(t,e){return new Z(t,e)}(t,r)),t._isMeshDataUploaded=!0,t._allowDataAccess||t.releaseData()}()},n.updateSubMesh=function(t,e){if(this._struct.dynamic)if(t>=this._struct.primitives.length)h(14201);else{var i=[];if(e.positions.length>0&&i.push(e.positions),e.normals&&e.normals.length>0&&i.push(e.normals),e.uvs&&e.uvs.length>0&&i.push(e.uvs),e.tangents&&e.tangents.length>0&&i.push(e.tangents),e.colors&&e.colors.length>0&&i.push(e.colors),e.customAttributes)for(var n=0;n<e.customAttributes.length;n++)i.push(e.customAttributes[n].values);for(var a=this._struct.dynamic,u=a.info,o=this._struct.primitives[t],f=this._renderingSubMeshes[t],c=f.drawInfo,d=0;d<i.length;d++){var l=i[d],v=this._struct.vertexBundles[o.vertexBundelIndices[d]],_=v.view.stride,m=l.byteLength/_,g=l.byteLength,w=new Uint8Array(this._data.buffer,v.view.offset,g),p=new Uint8Array(l.buffer,l.byteOffset,g),b=f.vertexBuffers[d];r(m<=u.maxSubMeshVertices),g>0&&(w.set(p),b.update(p,g)),v.view.count=m,c.vertexCount=m}if(o.indexView){var x=o.indexView,T=x.stride,y=2===T?e.indices16.length:e.indices32.length,A=y*T,I=new Uint8Array(this._data.buffer,x.offset,A),M=2===T?new Uint8Array(e.indices16.buffer,e.indices16.byteOffset,A):new Uint8Array(e.indices32.buffer,e.indices32.byteOffset,A),E=f.indexBuffer;r(y<=u.maxSubMeshIndices),A>0&&(I.set(M),E.update(M,A)),x.count=y,c.indexCount=y}if(e.minPos&&e.maxPos){var B=new N(e.minPos.x,e.minPos.y,e.minPos.z),P=new N(e.maxPos.x,e.maxPos.y,e.maxPos.z);a.bounds[t]||(a.bounds[t]=new S),S.fromPoints(a.bounds[t],B,P);for(var R,U=new N,O=new N,V=s(a.bounds);!(R=V()).done;){var D=R.value;D&&(D.getBoundary(U,O),N.min(B,U,B),N.max(P,O,P))}this._struct.minPosition=new N(B.x,B.y,B.z),this._struct.maxPosition=new N(P.x,P.y,P.z)}f.invalidateGeometricInfo()}else h(14200)},n.destroy=function(){return this.destroyRenderingMesh(),t.prototype.destroy.call(this)},n.destroyRenderingMesh=function(){if(this._renderingSubMeshes){for(var t=0;t<this._renderingSubMeshes.length;t++)this._renderingSubMeshes[t].destroy();this._renderingSubMeshes=null,this._initialized=!1,this._isMeshDataUploaded=!1}},n.assign=function(t,e){this.reset({struct:t,data:e})},n.reset=function(t){this.destroyRenderingMesh(),this._struct=t.struct,this._data=t.data,this._hash=0},n.getBoneSpaceBounds=function(t){if(this._boneSpaceBounds.has(t.hash))return this._boneSpaceBounds.get(t.hash);var e=[];this._boneSpaceBounds.set(t.hash,e);for(var r=[],i=t.bindposes,n=0;n<i.length;n++)e.push(new S(1/0,1/0,1/0,-1/0,-1/0,-1/0)),r.push(!1);for(var s=this._struct.primitives,a=0;a<s.length;a++){var u=this.readAttribute(a,v.ATTR_JOINTS),o=this.readAttribute(a,v.ATTR_WEIGHTS),f=this.readAttribute(a,v.ATTR_POSITION);if(u&&o&&f)for(var h=Math.min(u.length/4,o.length/4,f.length/3),c=0;c<h;c++){N.set(it,f[3*c+0],f[3*c+1],f[3*c+2]);for(var d=0;d<4;++d){var l=4*c+d,_=u[l];if(!(0===o[l]||_>=i.length)){N.transformMat4(nt,it,i[_]),r[_]=!0;var m=e[_];N.min(m.center,m.center,nt),N.max(m.halfExtents,m.halfExtents,nt)}}}}for(var g=0;g<i.length;g++){var w=e[g];r[g]?S.fromPoints(w,w.center,w.halfExtents):e[g]=null}return e},n.merge=function(t,e,r){if(r&&!this.validateMergingMesh(t))return!1;var i=new N,n=e&&new V,a=e&&new S;if(n&&e.getRotation(n),!this._initialized){var u=JSON.parse(JSON.stringify(t._struct)),o=t._data.slice();if(e){u.maxPosition&&u.minPosition&&(N.add(a.center,u.maxPosition,u.minPosition),N.multiplyScalar(a.center,a.center,.5),N.subtract(a.halfExtents,u.maxPosition,u.minPosition),N.multiplyScalar(a.halfExtents,a.halfExtents,.5),S.transform(a,a,e),N.add(u.maxPosition,a.center,a.halfExtents),N.subtract(u.minPosition,a.center,a.halfExtents));for(var f=0;f<u.vertexBundles.length;f++)for(var h=u.vertexBundles[f],c=0;c<h.attributes.length;c++)if(h.attributes[c].name===v.ATTR_POSITION||h.attributes[c].name===v.ATTR_NORMAL){var d=h.attributes[c].format,l=new DataView(o.buffer,h.view.offset+ut(h.attributes,c)),_=ht(l,d),m=ct(l,d);if(!_||!m)continue;for(var g=h.view.count,w=h.view.stride,p=ft(d),b=0;b<g;b++){var x=b*w,T=x+p,A=T+p;switch(i.set(_(x),_(T),_(A)),h.attributes[c].name){case v.ATTR_POSITION:i.transformMat4(e);break;case v.ATTR_NORMAL:N.transformQuat(i,i,n)}m(x,i.x),m(T,i.y),m(A,i.z)}}}return this.reset({struct:u,data:o}),this.initialize(),!0}for(var I,M,E,B,P,R=new Q,U=0,O=0,D=0,F=0,C=0,L=0,k=0,z=0,G=!1,H=new Array(this._struct.vertexBundles.length),W=0;W<this._struct.vertexBundles.length;++W){var X=this._struct.vertexBundles[W],j=t._struct.vertexBundles[W];D=X.view.offset,F=j.view.offset,O=X.view.stride,U=X.view.count+j.view.count,I=new ArrayBuffer(U*O),M=new Uint8Array(I),D+=(E=this._data.subarray(D,D+X.view.length)).length,F+=(B=t._data.subarray(F,F+j.view.length)).length,M.set(E),C=0;for(var q,Z=s(X.attributes);!(q=Z()).done;){var J=q.value;k=0,G=!1;for(var K,Y=s(j.attributes);!(K=Y()).done;){var $=K.value;if(J.name===$.name&&J.format===$.format){G=!0;break}k+=y[$.format].size}if(G){z=y[J.format].size,L=X.view.length+C;for(var tt=0;tt<j.view.count;++tt){if(P=B.subarray(k,k+z),M.set(P,L),(J.name===v.ATTR_POSITION||J.name===v.ATTR_NORMAL)&&e){var et=new Float32Array(M.buffer,L,3);switch(i.set(et[0],et[1],et[2]),J.name){case v.ATTR_POSITION:i.transformMat4(e);break;case v.ATTR_NORMAL:N.transformQuat(i,i,n)}et[0]=i.x,et[1]=i.y,et[2]=i.z}L+=X.view.stride,k+=j.view.stride}}C+=y[J.format].size}H[W]={attributes:X.attributes,view:{offset:R.getLength(),length:I.byteLength,count:U,stride:O}},R.addBuffer(I)}for(var rt,it,nt,st=0,at=2,ot=0,dt=new Array(this._struct.primitives.length),lt=0;lt<this._struct.primitives.length;++lt){var vt=this._struct.primitives[lt],_t=t._struct.primitives[lt];dt[lt]={primitiveMode:vt.primitiveMode,vertexBundelIndices:vt.vertexBundelIndices};for(var mt,gt=s(vt.vertexBundelIndices);!(mt=gt()).done;){var wt=mt.value;ot=Math.max(ot,this._struct.vertexBundles[wt].view.count)}if(vt.indexView&&_t.indexView){st=vt.indexView.count,st+=_t.indexView.count,D=vt.indexView.offset,F=_t.indexView.offset,at=st<256?1:st<65536?2:4;var pt=new ArrayBuffer(st*at);if(rt=2===at?new Uint16Array(pt):1===at?new Uint8Array(pt):new Uint32Array(pt),it=2===vt.indexView.stride?new Uint16Array(this._data.buffer,D,vt.indexView.count):1===vt.indexView.stride?new Uint8Array(this._data.buffer,D,vt.indexView.count):new Uint32Array(this._data.buffer,D,vt.indexView.count),at===vt.indexView.stride)rt.set(it);else for(var bt=0;bt<vt.indexView.count;++bt)rt[bt]=it[bt];D+=vt.indexView.length,nt=2===_t.indexView.stride?new Uint16Array(t._data.buffer,F,_t.indexView.count):1===_t.indexView.stride?new Uint8Array(t._data.buffer,F,_t.indexView.count):new Uint32Array(t._data.buffer,F,_t.indexView.count);for(var xt=0;xt<_t.indexView.count;++xt)rt[vt.indexView.count+xt]=ot+nt[xt];F+=_t.indexView.length,dt[lt].indexView={offset:R.getLength(),length:pt.byteLength,count:st,stride:at},R.setNextAlignment(at),R.addBuffer(pt)}}var Tt={vertexBundles:H,primitives:dt,minPosition:this._struct.minPosition,maxPosition:this._struct.maxPosition};return Tt.minPosition&&t._struct.minPosition&&Tt.maxPosition&&t._struct.maxPosition&&(e?(N.add(a.center,t._struct.maxPosition,t._struct.minPosition),N.multiplyScalar(a.center,a.center,.5),N.subtract(a.halfExtents,t._struct.maxPosition,t._struct.minPosition),N.multiplyScalar(a.halfExtents,a.halfExtents,.5),S.transform(a,a,e),N.add(i,a.center,a.halfExtents),N.max(Tt.maxPosition,Tt.maxPosition,i),N.subtract(i,a.center,a.halfExtents),N.min(Tt.minPosition,Tt.minPosition,i)):(N.min(Tt.minPosition,Tt.minPosition,t._struct.minPosition),N.max(Tt.maxPosition,Tt.maxPosition,t._struct.maxPosition))),this.reset({struct:Tt,data:new Uint8Array(R.getCombined())}),this.initialize(),!0},n.validateMergingMesh=function(t){if(this._struct.dynamic||t._struct.dynamic)return!1;if(this._struct.vertexBundles.length!==t._struct.vertexBundles.length)return!1;for(var e=0;e<this._struct.vertexBundles.length;++e){var r=this._struct.vertexBundles[e],i=t._struct.vertexBundles[e];if(r.attributes.length!==i.attributes.length)return!1;for(var n=0;n<r.attributes.length;++n)if(r.attributes[n].format!==i.attributes[n].format)return!1}if(this._struct.primitives.length!==t._struct.primitives.length)return!1;for(var s=0;s<this._struct.primitives.length;++s){var a=this._struct.primitives[s],u=t._struct.primitives[s];if(a.vertexBundelIndices.length!==u.vertexBundelIndices.length)return!1;for(var o=0;o<a.vertexBundelIndices.length;++o)if(a.vertexBundelIndices[o]!==u.vertexBundelIndices[o])return!1;if(a.primitiveMode!==u.primitiveMode)return!1;if(a.indexView){if(void 0===u.indexView)return!1}else if(u.indexView)return!1}return!0},n.readAttribute=function(t,e){var r=this,i=null;return this._accessAttribute(t,e,(function(t,e){var n=t.view.count,s=t.attributes[e].format,a=A(y[s]);if(0!==n){var u=new DataView(r._data.buffer,t.view.offset+ut(t.attributes,e)),o=y[s],f=ht(u,s);if(a&&f){for(var h=o.count,c=new a(n*h),d=t.view.stride,l=0;l<n;++l)for(var v=0;v<h;++v)c[h*l+v]=f(d*l+c.BYTES_PER_ELEMENT*v);i=c}}})),i},n.copyAttribute=function(t,e,r,i,n){var s=this,a=!1;return this._accessAttribute(t,e,(function(t,e){var u=t.view.count;if(0!==u){var o=t.attributes[e].format,f=new DataView(s._data.buffer,t.view.offset+ut(t.attributes,e)),h=new DataView(r,n),c=y[o],d=ht(f,o),l=ct(h,o);if(d&&l){for(var v=c.count,_=t.view.stride,m=ft(o),g=i,w=m,p=0;p<u;++p)for(var b=0;b<v;++b)l(g*p+w*b,d(_*p+m*b));a=!0}}else a=!0})),a},n.readIndices=function(t){if(t>=this._struct.primitives.length)return null;var e=this._struct.primitives[t];if(!e.indexView)return null;var r=e.indexView.stride;return new(1===r?Uint8Array:2===r?Uint16Array:Uint32Array)(this._data.buffer,e.indexView.offset,e.indexView.count)},n.copyIndices=function(t,e){if(t>=this._struct.primitives.length)return!1;var r=this._struct.primitives[t];if(!r.indexView)return!1;for(var i=r.indexView.count,n=1===r.indexView.stride?w.R8UI:2===r.indexView.stride?w.R16UI:w.R32UI,s=ht(new DataView(this._data.buffer),n),a=0;a<i;++a)e[a]=s(r.indexView.offset+y[n].size*a);return!0},n.readAttributeFormat=function(t,e){var r=null;return this._accessAttribute(t,e,(function(t,e){var i=t.attributes[e].format;r=y[i]})),r},n._accessAttribute=function(t,e,r){if(!(t>=this._struct.primitives.length))for(var i,n=this._struct.primitives[t],a=s(n.vertexBundelIndices);!(i=a()).done;){var u=i.value,o=this._struct.vertexBundles[u],f=o.attributes.findIndex((function(t){return t.name===e}));if(!(f<0)){r(o,f);break}}},n._createVertexBuffers=function(t,e){return this._struct.vertexBundles.map((function(r){var i=t.createBuffer(new _(m.VERTEX,g.DEVICE,r.view.length,r.view.stride)),n=new Uint8Array(e,r.view.offset,r.view.length);return i.update(n),i}))},n.initDefault=function(e){t.prototype.initDefault.call(this,e),this.reset({struct:{vertexBundles:[],primitives:[]},data:st})},n.releaseData=function(){this._data=st},e(i,[{key:"_nativeAsset",get:function(){return this._data.buffer},set:function(t){this._data=new Uint8Array(t)}},{key:"subMeshCount",get:function(){var t=this.renderingSubMeshes;return t?t.length:0}},{key:"minPosition",get:function(){return this.struct.minPosition}},{key:"maxPosition",get:function(){return this.struct.maxPosition}},{key:"struct",get:function(){return this._struct}},{key:"data",get:function(){return this._data}},{key:"hash",get:function(){return this._hash||(this._hash=M(this._data,666)),this._hash}},{key:"jointBufferIndices",get:function(){return this._jointBufferIndices?this._jointBufferIndices:this._jointBufferIndices=this._struct.primitives.map((function(t){return t.jointMapIndex||0}))}},{key:"renderingSubMeshes",get:function(){return this.initialize(),this._renderingSubMeshes}},{key:"allowDataAccess",get:function(){return this._allowDataAccess},set:function(t){this._allowDataAccess=t,this._isMeshDataUploaded&&!this._allowDataAccess&&this.releaseData()}}]),i}(U),W=c((H=q).prototype,"_struct",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{vertexBundles:[],primitives:[]}}}),X=c(H.prototype,"_hash",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=c(H.prototype,"_allowDataAccess",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),G=H))||G);function ut(t,e){for(var r=0,i=0;i<e;++i){var n=t[i];r+=y[n.format].size}return r}i.Mesh=at;var ot=z.isLittleEndian;function ft(t){var e=y[t];return e.size/e.count}function ht(t,e){var r=y[e],i=r.size/r.count;switch(r.type){case I.UNORM:switch(i){case 1:return function(e){return t.getUint8(e)};case 2:return function(e){return t.getUint16(e,ot)};case 4:return function(e){return t.getUint32(e,ot)}}break;case I.SNORM:case I.INT:switch(i){case 1:return function(e){return t.getInt8(e)};case 2:return function(e){return t.getInt16(e,ot)};case 4:return function(e){return t.getInt32(e,ot)}}break;case I.UINT:switch(i){case 1:return function(e){return t.getUint8(e)};case 2:return function(e){return t.getUint16(e,ot)};case 4:return function(e){return t.getUint32(e,ot)}}break;case I.FLOAT:return function(e){return t.getFloat32(e,ot)}}return null}function ct(t,e){var r=y[e],i=r.size/r.count;switch(r.type){case I.UNORM:switch(i){case 1:return function(e,r){return t.setUint8(e,r)};case 2:return function(e,r){return t.setUint16(e,r,ot)};case 4:return function(e,r){return t.setUint32(e,r,ot)}}break;case I.SNORM:case I.INT:switch(i){case 1:return function(e,r){return t.setInt8(e,r)};case 2:return function(e,r){return t.setInt16(e,r,ot)};case 4:return function(e,r){return t.setInt32(e,r,ot)}}break;case I.UINT:switch(i){case 1:return function(e,r){return t.setUint8(e,r)};case 2:return function(e,r){return t.setUint16(e,r,ot)};case 4:return function(e,r){return t.setUint32(e,r,ot)}}break;case I.FLOAT:return function(e,r){return t.setFloat32(e,r,ot)}}return null}}}}));
