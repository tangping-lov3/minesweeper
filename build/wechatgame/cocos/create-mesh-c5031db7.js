System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./pipeline-state-manager-f4a950fe.js","./mesh-20100c2c.js"],(function(e){"use strict";var t,a,n,s,r,i,u,o,f,l,h;return{setters:[function(e){t=e.i},function(e){a=e.aS,n=e.aT,s=e.c,r=e.at,i=e.y},function(e){u=e.bL,o=e.bM},function(e){f=e.a},function(){},function(e){l=e.M,h=e.B}],execute:function(){var v;e({_:d,r:function(e,a){void 0===a&&(a=0);for(var r,i={positions:[]},o=new DataView(e.data.buffer,e.data.byteOffset,e.data.byteLength),f=e.struct,l=f.primitives[a],h=t(l.vertexBundelIndices);!(r=h()).done;)for(var c,m=r.value,d=f.vertexBundles[m],b=d.view.offset,T=d.view,g=T.length,R=T.stride,A=t(d.attributes);!(c=A()).done;){var M=c.value,p=v[M.name];p&&(i[p]=(i[p]||[]).concat(u(o,M.format,b,g,R))),b+=n[M.format].size}var x=l.indexView;return i.indices=u(o,s["R"+8*x.stride+"UI"],x.offset,x.length),i}}),function(e){e[e.positions=a.ATTR_POSITION]="positions",e[e.normals=a.ATTR_NORMAL]="normals",e[e.uvs=a.ATTR_TEX_COORD]="uvs",e[e.colors=a.ATTR_COLOR]="colors"}(v||(v={}));var c=[new r(a.ATTR_POSITION,s.RGB32F),new r(a.ATTR_NORMAL,s.RGB32F),new r(a.ATTR_TEX_COORD,s.RG32F),new r(a.ATTR_TANGENT,s.RGBA32F),new r(a.ATTR_COLOR,s.RGBA32F)],m=new f;function d(e,r,u){u=u||{};var v,d=[],b=0,T=[],g=0,R=e.positions.slice();if(R.length>0){if(v=null,e.attributes)for(var A,M=t(e.attributes);!(A=M()).done;){var p=A.value;if(p.name===a.ATTR_POSITION){v=p;break}}v||(v=c[0]),d.push(v);var x=n[v.format];g=Math.max(g,Math.floor(R.length/x.count)),T.push({offset:b,data:R,attribute:v}),b+=x.size}if(e.normals&&e.normals.length>0){if(v=null,e.attributes)for(var w,O=t(e.attributes);!(w=O()).done;){var _=w.value;if(_.name===a.ATTR_NORMAL){v=_;break}}v||(v=c[1]);var B=n[v.format];d.push(v),g=Math.max(g,Math.floor(e.normals.length/B.count)),T.push({offset:b,data:e.normals,attribute:v}),b+=B.size}if(e.uvs&&e.uvs.length>0){if(v=null,e.attributes)for(var I,S=t(e.attributes);!(I=S()).done;){var L=I.value;if(L.name===a.ATTR_TEX_COORD){v=L;break}}v||(v=c[2]);var N=n[v.format];d.push(v),g=Math.max(g,Math.floor(e.uvs.length/N.count)),T.push({offset:b,data:e.uvs,attribute:v}),b+=N.size}if(e.tangents&&e.tangents.length>0){if(v=null,e.attributes)for(var y,G=t(e.attributes);!(y=G()).done;){var z=y.value;if(z.name===a.ATTR_TANGENT){v=z;break}}v||(v=c[3]);var F=n[v.format];d.push(v),g=Math.max(g,Math.floor(e.tangents.length/F.count)),T.push({offset:b,data:e.tangents,attribute:v}),b+=F.size}if(e.colors&&e.colors.length>0){if(v=null,e.attributes)for(var V,C=t(e.attributes);!(V=C()).done;){var E=V.value;if(E.name===a.ATTR_COLOR){v=E;break}}v||(v=c[4]);var D=n[v.format];d.push(v),g=Math.max(g,Math.floor(e.colors.length/D.count)),T.push({offset:b,data:e.colors,attribute:v}),b+=D.size}if(e.customAttributes)for(var P=0;P<e.customAttributes.length;P++){var j=e.customAttributes[P],k=n[j.attr.format];d.push(j.attr),g=Math.max(g,Math.floor(j.values.length/k.count)),T.push({offset:b,data:j.values,attribute:j.attr}),b+=k.size}for(var U=new h,X=new ArrayBuffer(g*b),q=new DataView(X),H=0,J=T;H<J.length;H++){var K=J[H];o(q,K.data,K.attribute.format,K.offset,b)}U.setNextAlignment(0);var Q={attributes:d,view:{offset:U.getLength(),length:X.byteLength,count:g,stride:b}};U.addBuffer(X);var W=null,Y=0;if(e.indices){var Z=e.indices;Y=Z.length,W=new ArrayBuffer(2*Y);var $=new DataView(W);o($,Z,s.R16UI)}var ee={primitiveMode:e.primitiveMode||i.TRIANGLE_LIST,vertexBundelIndices:[0]};W&&(U.setNextAlignment(2),ee.indexView={offset:U.getLength(),length:W.byteLength,count:Y,stride:2},U.addBuffer(W));var te=e.minPos;if(!te&&u.calculateBounds){te=f.set(new f,1/0,1/0,1/0);for(var ae=0;ae<g;++ae)f.set(m,R[3*ae+0],R[3*ae+1],R[3*ae+2]),f.min(te,te,m)}var ne=e.maxPos;if(!ne&&u.calculateBounds){ne=f.set(new f,-1/0,-1/0,-1/0);for(var se=0;se<g;++se)f.set(m,R[3*se+0],R[3*se+1],R[3*se+2]),f.max(ne,ne,m)}var re={vertexBundles:[Q],primitives:[ee]};return te&&(re.minPosition=new f(te.x,te.y,te.z)),ne&&(re.maxPosition=new f(ne.x,ne.y,ne.z)),r||(r=new l),r.reset({struct:re,data:new Uint8Array(U.getCombined())}),r}function b(e,t){if(t>0){var a=e%t;if(0!==a)return t-a}return 0}e("M",function(){function e(){}return e.createMesh=function(e,t,a){return d(e,t,a)},e.createDynamicMesh=function(e,u,o,f){return function(e,u,o,f){f=f||{maxSubMeshes:1,maxSubMeshVertices:1024,maxSubMeshIndices:1024};var h=[],v=0;if(u.positions.length>0&&h.push(new r(a.ATTR_POSITION,s.RGB32F,!1,v++,!1,0)),u.normals&&u.normals.length>0&&h.push(new r(a.ATTR_NORMAL,s.RGB32F,!1,v++,!1,0)),u.uvs&&u.uvs.length>0&&h.push(new r(a.ATTR_TEX_COORD,s.RG32F,!1,v++,!1,0)),u.tangents&&u.tangents.length>0&&h.push(new r(a.ATTR_TANGENT,s.RGBA32F,!1,v++,!1,0)),u.colors&&u.colors.length>0&&h.push(new r(a.ATTR_COLOR,s.RGBA32F,!1,v++,!1,0)),u.customAttributes)for(var c=0;c<u.customAttributes.length;c++){var m=u.customAttributes[c],d=new r;d.copy(m.attr),d.stream=v++,h.push(d)}for(var T=[],g=[],R=0,A=0;A<f.maxSubMeshes;A++){for(var M,p={vertexBundelIndices:[],primitiveMode:u.primitiveMode||i.TRIANGLE_LIST},x=t(h);!(M=x()).done;){var w=M.value,O=n[w.format],_=f.maxSubMeshVertices*O.size,B={view:{offset:R,length:_,count:0,stride:O.size},attributes:[w]},I=T.length;p.vertexBundelIndices.push(I),T.push(B),R+=_}var S=0;if(u.indices16&&u.indices16.length>0?S=2:u.indices32&&u.indices32.length>0&&(S=4),S>0){R+=b(R,S);var L=f.maxSubMeshIndices*S,N={offset:R,length:L,count:0,stride:S};p.indexView=N,R+=L}g.push(p)}var y={info:{maxSubMeshes:f.maxSubMeshes,maxSubMeshVertices:f.maxSubMeshVertices,maxSubMeshIndices:f.maxSubMeshIndices},bounds:[]};y.bounds.length=f.maxSubMeshes;var G={struct:{vertexBundles:T,primitives:g,dynamic:y},data:new Uint8Array(R)};return o||(o=new l),o.reset(G),o.initialize(),o.updateSubMesh(e,u),o}(e,u,o,f)},e}())}}}));
