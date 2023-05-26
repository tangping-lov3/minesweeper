System.register(["./bits-b8bc8b22.js","./buffer-barrier-17698e09.js","./scene-asset-10397f71.js","./math-base-02e87bf8.js","./index-f2c2eec3.js","./deprecated-dacf9914.js","./collision-matrix-b9c58114.js"],(function(t){"use strict";var e,o,i,n,r,a,p,s,u,c,l,y,f,_,h,g,b,d,m,w,D,O,S,j,P,C,L,A;return{setters:[function(t){e=t.E,o=t.l,i=t.F,n=t.A,r=t.J,a=t.z,p=t.S,s=t.G,u=t.H,c=t.I},function(t){l=t.br},function(t){y=t.aF,f=t.a$,_=t.bR,h=t.b0,g=t.aI,b=t.bU,d=t.b7},function(t){m=t.V,w=t.R,D=t.S,O=t.a,S=t.Q,j=t.k},function(){},function(t){P=t.k,C=t.j},function(t){L=t.C,A=t.P}],execute:function(){var x,E,T,I,k,v;t({E:void 0,P:void 0,a:void 0,b:void 0,c:void 0,d:void 0,g:void 0,s:function(t,e){z=t,o._global.CC_PHYSICS_2D_BUILTIN="builtin"==t,o._global.CC_PHYSICS_2D_BOX2D="box2d"==t,M=e}}),function(t){t[t.Static=0]="Static",t[t.Kinematic=1]="Kinematic",t[t.Dynamic=2]="Dynamic",t[t.Animated=3]="Animated"}(x||(x=t("E",{}))),e(x),function(t){t[t.None=0]="None",t[t.BOX=1]="BOX",t[t.CIRCLE=2]="CIRCLE",t[t.POLYGON=3]="POLYGON"}(E||(E=t("a",{}))),e(E),function(t){t[t.None=0]="None",t[t.DISTANCE=1]="DISTANCE",t[t.SPRING=2]="SPRING",t[t.WHEEL=3]="WHEEL",t[t.MOUSE=4]="MOUSE",t[t.FIXED=5]="FIXED",t[t.SLIDER=6]="SLIDER",t[t.RELATIVE=7]="RELATIVE",t[t.HINGE=8]="HINGE"}(T||(T=t("b",{}))),e(T),function(t){t[t.DEFAULT=1]="DEFAULT"}(I||(I=t("P",{}))),e(I),function(t){t[t.Closest=0]="Closest",t[t.Any=1]="Any",t[t.AllClosest=2]="AllClosest",t[t.All=3]="All"}(k||(k=t("c",{}))),t("C",{None:"none-contact",BEGIN_CONTACT:"begin-contact",END_CONTACT:"end-contact",PRE_SOLVE:"pre-solve",POST_SOLVE:"post-solve"}),function(t){t[t.None=0]="None",t[t.Shape=1]="Shape",t[t.Joint=2]="Joint",t[t.Aabb=4]="Aabb",t[t.Pair=8]="Pair",t[t.CenterOfMass=16]="CenterOfMass",t[t.Particle=32]="Particle",t[t.Controller=64]="Controller",t[t.All=63]="All"}(v||(v=t("d",{})));var M,z,F=t("e",32),R=function(){return 0},q={impl:null,rigidBody:null,isAwake:!1,isSleeping:!1,initialize:R,setType:R,setLinearDamping:R,setAngularDamping:R,setGravityScale:R,setFixedRotation:R,setAllowSleep:R,isActive:R,setActive:R,wakeUp:R,sleep:R,getMass:R,getInertia:R,getLinearVelocity:R,setLinearVelocity:R,getLinearVelocityFromWorldPoint:R,getAngularVelocity:R,setAngularVelocity:R,getLocalVector:R,getWorldVector:R,getLocalPoint:R,getWorldPoint:R,getLocalCenter:R,getWorldCenter:R,applyForce:R,applyForceToCenter:R,applyTorque:R,applyLinearImpulse:R,applyLinearImpulseToCenter:R,applyAngularImpulse:R,onEnable:R,onDisable:R,onDestroy:R},N={INITED:!1};var V={INITED:!1},B={impl:null,initialize:R,setDampingRatio:R,setFrequency:R,setMaxForce:R,setTarget:R,setDistance:R,setAngularOffset:R,setCorrectionFactor:R,setLinearOffset:R,setMaxLength:R,setMaxTorque:R,setLowerLimit:R,setUpperLimit:R,setMaxMotorForce:R,setMaxMotorTorque:R,setMotorSpeed:R,enableLimit:R,enableMotor:R,setLowerAngle:R,setUpperAngle:R};var Y=null;o.internal.PhysicsGroup2D=I;var W,H,G,J,U,X,K,Q,$,Z,tt,et,ot,it,nt,rt,at,pt,st,ut,ct=t("f",function(t){function o(){var o,i,n,r,s;(s=t.call(this)||this).velocityIterations=10,s.positionIterations=10,s.physicsWorld=void 0,s.collisionMatrix=new L,s._enable=!0,s._allowSleep=!0,s._maxSubSteps=1,s._fixedTimeStep=1/60,s._autoSimulation=!0,s._accumulator=0,s._steping=!1,s._gravity=new m(0,-10*F),s._delayEvents=[];var u=a.querySettings(p.Category.PHYSICS,"gravity");u&&(m.copy(s._gravity,u),s._gravity.multiplyScalar(F)),s._allowSleep=null!==(o=a.querySettings(p.Category.PHYSICS,"allowSleep"))&&void 0!==o?o:s._allowSleep,s._fixedTimeStep=null!==(i=a.querySettings(p.Category.PHYSICS,"fixedTimeStep"))&&void 0!==i?i:s._fixedTimeStep,s._maxSubSteps=null!==(n=a.querySettings(p.Category.PHYSICS,"maxSubSteps"))&&void 0!==n?n:s._maxSubSteps,s._autoSimulation=null!==(r=a.querySettings(p.Category.PHYSICS,"autoSimulation"))&&void 0!==r?r:s._autoSimulation;var c=a.querySettings(p.Category.PHYSICS,"collisionMatrix");if(c)for(var l in c){var y=parseInt(l),f=1<<parseInt(l);s.collisionMatrix[""+f]=c[y]}var _=a.querySettings(p.Category.PHYSICS,"collisionGroups");return _&&_ instanceof Array&&(_.forEach((function(t){I[t.name]=1<<t.index})),e.update(I)),s.physicsWorld=new M.PhysicsWorld,s.gravity=s._gravity,s.allowSleep=s._allowSleep,s}i(o,t);var r=o.prototype;return r.postUpdate=function(t){if(this._enable&&this._autoSimulation){P.emit(C.EVENT_BEFORE_PHYSICS),this._steping=!0;var e=this._fixedTimeStep,o=this.velocityIterations,i=this.positionIterations;this._accumulator+=t;for(var n=0;n++<this._maxSubSteps&&this._accumulator>e;)this.physicsWorld.step(e,o,i),this._accumulator-=e;for(var r=this._delayEvents,a=0,p=r.length;a<p;a++){var s=r[a];s.func.call(s.target)}r.length=0,this.physicsWorld.syncPhysicsToScene(),this.debugDrawFlags&&this.physicsWorld.drawDebug(),this._steping=!1,P.emit(C.EVENT_AFTER_PHYSICS)}},r._callAfterStep=function(t,e){this._steping?this._delayEvents.push({target:t,func:e}):e.call(t)},r.resetAccumulator=function(t){void 0===t&&(t=0),this._accumulator=t},r.step=function(t){this.physicsWorld.step(t,this.velocityIterations,this.positionIterations)},r.raycast=function(t,e,o,i){return void 0===o&&(o=k.Closest),void 0===i&&(i=4294967295),this.physicsWorld.raycast(t,e,o,i)},r.testPoint=function(t){return this.physicsWorld.testPoint(t)},r.testAABB=function(t){return this.physicsWorld.testAABB(t)},n(o,[{key:"enable",get:function(){return this._enable},set:function(t){this._enable=t}},{key:"allowSleep",get:function(){return this._allowSleep},set:function(t){this._allowSleep=t,this.physicsWorld.setAllowSleep(t)}},{key:"gravity",get:function(){return this._gravity},set:function(t){this._gravity.set(t),this.physicsWorld.setGravity(new m(t.x/F,t.y/F))}},{key:"maxSubSteps",get:function(){return this._maxSubSteps},set:function(t){this._maxSubSteps=t}},{key:"fixedTimeStep",get:function(){return this._fixedTimeStep},set:function(t){this._fixedTimeStep=t}},{key:"autoSimulation",get:function(){return this._autoSimulation},set:function(t){this._autoSimulation=t}},{key:"debugDrawFlags",get:function(){return this.physicsWorld.debugDrawFlags},set:function(t){this.physicsWorld.debugDrawFlags=t}},{key:"stepping",get:function(){return this._steping}}],[{key:"PHYSICS_NONE",get:function(){return!z}},{key:"PHYSICS_BUILTIN",get:function(){return"builtin"===z}},{key:"PHYSICS_BOX2D",get:function(){return"box2d"===z}},{key:"PhysicsGroup",get:function(){return I}},{key:"instance",get:function(){return Y||(Y=new o),Y}}]),o}(l(y)));ct.ID="PHYSICS_2D",P.once(C.EVENT_INIT,(function(){ct.PHYSICS_NONE||r||P.registerSystem(ct.ID,ct.instance,y.Priority.LOW)})),function(t){t[t.Circles=0]="Circles",t[t.FaceA=1]="FaceA",t[t.FaceB=2]="FaceB"}(W||(W=t("g",{})));var lt,yt,ft,_t,ht,gt,bt,dt,mt,wt,Dt,Ot,St,jt,Pt,Ct,Lt,At,xt,Et,Tt,It,kt,vt,Mt,zt,Ft,Rt,qt,Nt,Vt,Bt,Yt,Wt,Ht,Gt,Jt,Ut,Xt,Kt,Qt,$t,Zt,te,ee,oe,ie,ne,re,ae,pe,se,ue,ce,le,ye,fe,_e,he,ge,be,de,me,we,De,Oe,Se,je,Pe,Ce,Le,Ae,xe,Ee,Te,Ie,ke,ve,Me,ze,Fe,Re,qe,Ne,Ve,Be,Ye,We,He,Ge,Je,Ue,Xe,Ke,Qe,$e,Ze,to,eo,oo,io=_,no=h,ro=b,ao=t("R",(H=f("cc.RigidBody2D"),G=ro(),J=no(A),U=no(x),H(X=G((ut=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"enabledContactListener",Q,c(e)),u(e,"bullet",$,c(e)),u(e,"awakeOnLoad",Z,c(e)),e._body=null,u(e,"_group",tt,c(e)),u(e,"_type",et,c(e)),u(e,"_allowSleep",ot,c(e)),u(e,"_gravityScale",it,c(e)),u(e,"_linearDamping",nt,c(e)),u(e,"_angularDamping",rt,c(e)),u(e,"_linearVelocity",at,c(e)),u(e,"_angularVelocity",pt,c(e)),u(e,"_fixedRotation",st,c(e)),e}i(e,t);var r=e.prototype;return r.isAwake=function(){return!!this._body&&this._body.isAwake},r.wakeUp=function(){this._body&&this._body.wakeUp()},r.sleep=function(){this._body&&this._body.sleep()},r.getMass=function(){return this._body?this._body.getMass():0},r.applyForce=function(t,e,o){this._body&&this._body.applyForce(t,e,o)},r.applyForceToCenter=function(t,e){this._body&&this._body.applyForceToCenter(t,e)},r.applyTorque=function(t,e){this._body&&this._body.applyTorque(t,e)},r.applyLinearImpulse=function(t,e,o){this._body&&this._body.applyLinearImpulse(t,e,o)},r.applyLinearImpulseToCenter=function(t,e){this._body&&this._body.applyLinearImpulseToCenter(t,e)},r.applyAngularImpulse=function(t,e){this._body&&this._body.applyAngularImpulse(t,e)},r.getLinearVelocityFromWorldPoint=function(t,e){return this._body?this._body.getLinearVelocityFromWorldPoint(t,e):e},r.getLocalVector=function(t,e){return this._body?this._body.getLocalVector(t,e):e},r.getWorldVector=function(t,e){return this._body?this._body.getWorldVector(t,e):e},r.getLocalPoint=function(t,e){return this._body?this._body.getLocalPoint(t,e):e},r.getWorldPoint=function(t,e){return this._body?this._body.getWorldPoint(t,e):e},r.getLocalCenter=function(t){return this._body?this._body.getLocalCenter(t):t},r.getWorldCenter=function(t){return this._body?this._body.getWorldCenter(t):t},r.getInertia=function(){return this._body&&this._body.getInertia(),0},r.onLoad=function(){this._body=o._global.CC_PHYSICS_2D_BUILTIN?q:new M.RigidBody,this._body.initialize(this)},r.onEnable=function(){this._body&&this._body.onEnable()},r.onDisable=function(){this._body&&this._body.onDisable()},r.onDestroy=function(){this._body&&this._body.onDestroy()},n(e,[{key:"group",get:function(){return this._group},set:function(t){this._group=t}},{key:"type",get:function(){return this._type},set:function(t){this._type=t,this._body&&(t===x.Animated?this._body.setType(x.Kinematic):this._body.setType(t))}},{key:"allowSleep",get:function(){return this._allowSleep},set:function(t){this._allowSleep=t,this._body&&this._body.setAllowSleep(t)}},{key:"gravityScale",get:function(){return this._gravityScale},set:function(t){this._gravityScale=t,this._body&&this._body.setGravityScale(t)}},{key:"linearDamping",get:function(){return this._linearDamping},set:function(t){this._linearDamping=t,this._body&&this._body.setLinearDamping(t)}},{key:"angularDamping",get:function(){return this._angularDamping},set:function(t){this._angularDamping=t,this._body&&this._body.setAngularDamping(t)}},{key:"linearVelocity",get:function(){return this._body&&this._body.getLinearVelocity(this._linearVelocity),this._linearVelocity},set:function(t){this._linearVelocity=t,this._body&&this._body.setLinearVelocity(t)}},{key:"angularVelocity",get:function(){return this._body&&(this._angularVelocity=this._body.getAngularVelocity()),this._angularVelocity},set:function(t){this._angularVelocity=t,this._body&&this._body.setAngularVelocity(t)}},{key:"fixedRotation",get:function(){return this._fixedRotation},set:function(t){this._fixedRotation=t,this._body&&this._body.setFixedRotation(t)}},{key:"impl",get:function(){return this._body}}]),e}(g),s((K=ut).prototype,"group",[J],Object.getOwnPropertyDescriptor(K.prototype,"group"),K.prototype),Q=s(K.prototype,"enabledContactListener",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),$=s(K.prototype,"bullet",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),s(K.prototype,"type",[U],Object.getOwnPropertyDescriptor(K.prototype,"type"),K.prototype),s(K.prototype,"allowSleep",[io],Object.getOwnPropertyDescriptor(K.prototype,"allowSleep"),K.prototype),s(K.prototype,"gravityScale",[io],Object.getOwnPropertyDescriptor(K.prototype,"gravityScale"),K.prototype),s(K.prototype,"linearDamping",[io],Object.getOwnPropertyDescriptor(K.prototype,"linearDamping"),K.prototype),s(K.prototype,"angularDamping",[io],Object.getOwnPropertyDescriptor(K.prototype,"angularDamping"),K.prototype),s(K.prototype,"linearVelocity",[io],Object.getOwnPropertyDescriptor(K.prototype,"linearVelocity"),K.prototype),s(K.prototype,"angularVelocity",[io],Object.getOwnPropertyDescriptor(K.prototype,"angularVelocity"),K.prototype),s(K.prototype,"fixedRotation",[io],Object.getOwnPropertyDescriptor(K.prototype,"fixedRotation"),K.prototype),Z=s(K.prototype,"awakeOnLoad",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),tt=s(K.prototype,"_group",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return A.DEFAULT}}),et=s(K.prototype,"_type",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return x.Dynamic}}),ot=s(K.prototype,"_allowSleep",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),it=s(K.prototype,"_gravityScale",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),nt=s(K.prototype,"_linearDamping",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),rt=s(K.prototype,"_angularDamping",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),at=s(K.prototype,"_linearVelocity",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new m}}),pt=s(K.prototype,"_angularVelocity",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),st=s(K.prototype,"_fixedRotation",[io],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),X=K))||X)||X)),po=t("h",(lt=f("cc.Collider2D"),yt=h(A),lt((St=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"editing",ht,c(e)),u(e,"tag",gt,c(e)),e.TYPE=E.None,e._shape=null,e._body=null,u(e,"_group",bt,c(e)),u(e,"_density",dt,c(e)),u(e,"_sensor",mt,c(e)),u(e,"_friction",wt,c(e)),u(e,"_restitution",Dt,c(e)),u(e,"_offset",Ot,c(e)),e}i(e,t);var o=e.prototype;return o.onLoad=function(){this._shape=function(t){return N.INITED||(N.INITED=!0,N[E.BOX]=function(){return new M.BoxShape},N[E.CIRCLE]=function(){return new M.CircleShape},N[E.POLYGON]=function(){return new M.PolygonShape}),N[t]()}(this.TYPE),this._shape.initialize(this),this._shape.onLoad&&this._shape.onLoad(),this._body=this.getComponent(ao)},o.onEnable=function(){this._shape&&this._shape.onEnable()},o.onDisable=function(){this._shape&&this._shape.onDisable&&this._shape.onDisable()},o.onDestroy=function(){this._shape&&this._shape.onDestroy&&this._shape.onDestroy()},o.apply=function(){this._shape&&this._shape.apply&&this._shape.apply()},n(e,[{key:"group",get:function(){return this._group},set:function(t){this._group=t,this._shape&&this._shape.onGroupChanged&&this._shape.onGroupChanged()}},{key:"density",get:function(){return this._density},set:function(t){this._density=t}},{key:"sensor",get:function(){return this._sensor},set:function(t){this._sensor=t}},{key:"friction",get:function(){return this._friction},set:function(t){this._friction=t}},{key:"restitution",get:function(){return this._restitution},set:function(t){this._restitution=t}},{key:"offset",get:function(){return this._offset},set:function(t){this._offset=t}},{key:"body",get:function(){return this._body}},{key:"impl",get:function(){return this._shape}},{key:"worldAABB",get:function(){return this._shape?this._shape.worldAABB:new w}}]),e}(l(g)),ht=s((_t=St).prototype,"editing",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),gt=s(_t.prototype,"tag",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s(_t.prototype,"group",[yt],Object.getOwnPropertyDescriptor(_t.prototype,"group"),_t.prototype),s(_t.prototype,"density",[_],Object.getOwnPropertyDescriptor(_t.prototype,"density"),_t.prototype),s(_t.prototype,"sensor",[_],Object.getOwnPropertyDescriptor(_t.prototype,"sensor"),_t.prototype),s(_t.prototype,"friction",[_],Object.getOwnPropertyDescriptor(_t.prototype,"friction"),_t.prototype),s(_t.prototype,"restitution",[_],Object.getOwnPropertyDescriptor(_t.prototype,"restitution"),_t.prototype),s(_t.prototype,"offset",[_],Object.getOwnPropertyDescriptor(_t.prototype,"offset"),_t.prototype),bt=s(_t.prototype,"_group",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return A.DEFAULT}}),dt=s(_t.prototype,"_density",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),mt=s(_t.prototype,"_sensor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),wt=s(_t.prototype,"_friction",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),Dt=s(_t.prototype,"_restitution",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ot=s(_t.prototype,"_offset",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new m}}),ft=_t))||ft)),so=(t("B",f("cc.BoxCollider2D")(jt=b()((Lt=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"_size",Ct,c(e)),e.TYPE=E.BOX,e}return i(e,t),n(e,[{key:"size",get:function(){return this._size},set:function(t){this._size=t}},{key:"worldPoints",get:function(){return this._shape?this._shape.worldPoints:[]}}]),e}(po),Ct=s((Pt=Lt).prototype,"_size",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new D(1,1)}}),s(Pt.prototype,"size",[_],Object.getOwnPropertyDescriptor(Pt.prototype,"size"),Pt.prototype),jt=Pt))||jt)||jt),t("i",f("cc.CircleCollider2D")(At=b()((Tt=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"_radius",Et,c(e)),e.TYPE=E.CIRCLE,e}return i(e,t),n(e,[{key:"radius",get:function(){return this._radius},set:function(t){this._radius=t<0?0:t}},{key:"worldPosition",get:function(){return this._shape?this._shape.worldPosition:new m}},{key:"worldRadius",get:function(){return this._shape?this._shape.worldRadius:0}}]),e}(po),Et=s((xt=Tt).prototype,"_radius",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),s(xt.prototype,"radius",[_],Object.getOwnPropertyDescriptor(xt.prototype,"radius"),xt.prototype),At=xt))||At)||At),t("j",(It=f("cc.PolygonCollider2D"),kt=b(),vt=_({serializable:!1,displayOrder:0}),Mt=_({type:m}),It(zt=kt((Nt=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"threshold",Rt,c(e)),u(e,"_points",qt,c(e)),e.TYPE=E.POLYGON,e}return i(e,t),n(e,[{key:"points",get:function(){return this._points},set:function(t){this._points=t}},{key:"worldPoints",get:function(){return this._shape?this._shape.worldPoints:[]}}]),e}(po),Rt=s((Ft=Nt).prototype,"threshold",[vt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),qt=s(Ft.prototype,"_points",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[new m(-1,-1),new m(1,-1),new m(1,1),new m(-1,1)]}}),s(Ft.prototype,"points",[Mt],Object.getOwnPropertyDescriptor(Ft.prototype,"points"),Ft.prototype),zt=Ft))||zt)||zt)),t("J",(Vt=f("cc.Joint2D"),Bt=h(ao),Vt((Xt=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,u(e,"anchor",Ht,c(e)),u(e,"connectedAnchor",Gt,c(e)),u(e,"collideConnected",Jt,c(e)),u(e,"connectedBody",Ut,c(e)),e._body=null,e._joint=null,e.TYPE=T.None,e}i(e,t);var r=e.prototype;return r.onLoad=function(){this._joint=function(t){return function(){if(!V.INITED){V.INITED=!0;var t=o._global.CC_PHYSICS_2D_BUILTIN;V[T.SPRING]=function(){return t?B:new M.SpringJoint},V[T.DISTANCE]=function(){return t?B:new M.DistanceJoint},V[T.FIXED]=function(){return t?B:new M.FixedJoint},V[T.MOUSE]=function(){return t?B:new M.MouseJoint},V[T.RELATIVE]=function(){return t?B:new M.RelativeJoint},V[T.SLIDER]=function(){return t?B:new M.SliderJoint},V[T.WHEEL]=function(){return t?B:new M.WheelJoint},V[T.HINGE]=function(){return t?B:new M.HingeJoint}}}(),V[t]()}(this.TYPE),this._joint.initialize(this),this._body=this.getComponent(ao)},r.onEnable=function(){this._joint&&this._joint.onEnable&&this._joint.onEnable()},r.onDisable=function(){this._joint&&this._joint.onDisable&&this._joint.onDisable()},r.start=function(){this._joint&&this._joint.start&&this._joint.start()},r.onDestroy=function(){this._joint&&this._joint.onDestroy&&this._joint.onDestroy()},n(e,[{key:"body",get:function(){return this._body}},{key:"impl",get:function(){return this._joint}}]),e}(g),Ht=s((Wt=Xt).prototype,"anchor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new m}}),Gt=s(Wt.prototype,"connectedAnchor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new m}}),Jt=s(Wt.prototype,"collideConnected",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ut=s(Wt.prototype,"connectedBody",[Bt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Yt=Wt))||Yt))),uo=(t("D",f("cc.DistanceJoint2D")(Kt=b()((te=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.DISTANCE,u(e,"_maxLength",$t,c(e)),u(e,"_autoCalcDistance",Zt,c(e)),e}return i(e,t),n(e,[{key:"maxLength",get:function(){return this._autoCalcDistance&&this.connectedBody?O.distance(this.node.worldPosition,this.connectedBody.node.worldPosition):this._maxLength},set:function(t){this._maxLength=t,this._joint&&this._joint.setMaxLength(t)}},{key:"autoCalcDistance",get:function(){return this._autoCalcDistance},set:function(t){this._autoCalcDistance=t}}]),e}(so),s((Qt=te).prototype,"maxLength",[_],Object.getOwnPropertyDescriptor(Qt.prototype,"maxLength"),Qt.prototype),s(Qt.prototype,"autoCalcDistance",[_],Object.getOwnPropertyDescriptor(Qt.prototype,"autoCalcDistance"),Qt.prototype),$t=s(Qt.prototype,"_maxLength",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),Zt=s(Qt.prototype,"_autoCalcDistance",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Kt=Qt))||Kt)||Kt),t("S",f("cc.SpringJoint2D")(ee=b()((pe=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.SPRING,u(e,"_frequency",ie,c(e)),u(e,"_dampingRatio",ne,c(e)),u(e,"_distance",re,c(e)),u(e,"_autoCalcDistance",ae,c(e)),e}return i(e,t),n(e,[{key:"frequency",get:function(){return this._frequency},set:function(t){this._frequency=t,this._joint&&this._joint.setFrequency(t)}},{key:"dampingRatio",get:function(){return this._dampingRatio},set:function(t){this._dampingRatio=t,this._joint&&this._joint.setDampingRatio(t)}},{key:"distance",get:function(){return this._autoCalcDistance&&this.connectedBody?O.distance(this.node.worldPosition,this.connectedBody.node.worldPosition):this._distance},set:function(t){this._distance=t,this._joint&&this._joint.setDistance(t)}},{key:"autoCalcDistance",get:function(){return this._autoCalcDistance},set:function(t){this._autoCalcDistance=t}}]),e}(so),s((oe=pe).prototype,"frequency",[_],Object.getOwnPropertyDescriptor(oe.prototype,"frequency"),oe.prototype),s(oe.prototype,"dampingRatio",[_],Object.getOwnPropertyDescriptor(oe.prototype,"dampingRatio"),oe.prototype),s(oe.prototype,"distance",[_],Object.getOwnPropertyDescriptor(oe.prototype,"distance"),oe.prototype),s(oe.prototype,"autoCalcDistance",[_],Object.getOwnPropertyDescriptor(oe.prototype,"autoCalcDistance"),oe.prototype),ie=s(oe.prototype,"_frequency",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),ne=s(oe.prototype,"_dampingRatio",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),re=s(oe.prototype,"_distance",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),ae=s(oe.prototype,"_autoCalcDistance",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),ee=oe))||ee)||ee),t("M",f("cc.MouseJoint2D")(se=b()((fe=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.MOUSE,u(e,"_maxForce",ce,c(e)),u(e,"_dampingRatio",le,c(e)),u(e,"_frequency",ye,c(e)),e._target=new m,e}return i(e,t),e.prototype.update=function(t){this._joint.update(t)},n(e,[{key:"target",get:function(){return this._target},set:function(t){this._target=t,this._joint&&this._joint.setTarget(t)}},{key:"frequency",get:function(){return this._frequency},set:function(t){this._frequency=t,this._joint&&this._joint.setFrequency(t)}},{key:"dampingRatio",get:function(){return this._dampingRatio},set:function(t){this._dampingRatio=t,this._joint&&this._joint.setDampingRatio(t)}},{key:"maxForce",get:function(){return this._maxForce},set:function(t){this._maxForce=t,this._joint&&this._joint.setMaxForce(t)}}]),e}(so),s((ue=fe).prototype,"frequency",[_],Object.getOwnPropertyDescriptor(ue.prototype,"frequency"),ue.prototype),s(ue.prototype,"dampingRatio",[_],Object.getOwnPropertyDescriptor(ue.prototype,"dampingRatio"),ue.prototype),s(ue.prototype,"maxForce",[_],Object.getOwnPropertyDescriptor(ue.prototype,"maxForce"),ue.prototype),ce=s(ue.prototype,"_maxForce",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),le=s(ue.prototype,"_dampingRatio",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),ye=s(ue.prototype,"_frequency",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),se=ue))||se)||se),new O),co=new O,lo=(t("k",f("cc.RelativeJoint2D")(_e=b()((Oe=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.RELATIVE,u(e,"_maxForce",ge,c(e)),u(e,"_maxTorque",be,c(e)),u(e,"_correctionFactor",de,c(e)),u(e,"_angularOffset",me,c(e)),u(e,"_linearOffset",we,c(e)),u(e,"_autoCalcOffset",De,c(e)),e}return i(e,t),n(e,[{key:"maxForce",get:function(){return this._maxForce},set:function(t){this._maxForce=t,this._joint&&this._joint.setMaxForce(t)}},{key:"maxTorque",get:function(){return this._maxTorque},set:function(t){this._maxTorque=t,this._joint&&this._joint.setMaxTorque(t)}},{key:"correctionFactor",get:function(){return this._correctionFactor},set:function(t){this._correctionFactor=t,this._joint&&this._joint.setCorrectionFactor(t)}},{key:"linearOffset",get:function(){return this._autoCalcOffset&&this.connectedBody?m.subtract(this._linearOffset,this.connectedBody.node.worldPosition,this.node.worldPosition):this._linearOffset},set:function(t){this._linearOffset.set(t),this._joint&&this._joint.setLinearOffset(t)}},{key:"angularOffset",get:function(){return this._autoCalcOffset&&this.connectedBody&&(S.toEuler(uo,this.node.worldRotation),S.toEuler(co,this.connectedBody.node.worldRotation),this._angularOffset=co.z-uo.z),this._angularOffset},set:function(t){this._angularOffset=t,this._joint&&this._joint.setAngularOffset(t)}},{key:"autoCalcOffset",get:function(){return this._autoCalcOffset},set:function(t){this._autoCalcOffset=t}}]),e}(so),s((he=Oe).prototype,"maxForce",[_],Object.getOwnPropertyDescriptor(he.prototype,"maxForce"),he.prototype),s(he.prototype,"maxTorque",[_],Object.getOwnPropertyDescriptor(he.prototype,"maxTorque"),he.prototype),s(he.prototype,"correctionFactor",[_],Object.getOwnPropertyDescriptor(he.prototype,"correctionFactor"),he.prototype),s(he.prototype,"linearOffset",[_],Object.getOwnPropertyDescriptor(he.prototype,"linearOffset"),he.prototype),s(he.prototype,"angularOffset",[_],Object.getOwnPropertyDescriptor(he.prototype,"angularOffset"),he.prototype),s(he.prototype,"autoCalcOffset",[_],Object.getOwnPropertyDescriptor(he.prototype,"autoCalcOffset"),he.prototype),ge=s(he.prototype,"_maxForce",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),be=s(he.prototype,"_maxTorque",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),de=s(he.prototype,"_correctionFactor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),me=s(he.prototype,"_angularOffset",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),we=s(he.prototype,"_linearOffset",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new m}}),De=s(he.prototype,"_autoCalcOffset",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),_e=he))||_e)||_e),new m);t("l",f("cc.SliderJoint2D")(Se=b()((ke=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.SLIDER,u(e,"_angle",Pe,c(e)),u(e,"_autoCalcAngle",Ce,c(e)),u(e,"_enableMotor",Le,c(e)),u(e,"_maxMotorForce",Ae,c(e)),u(e,"_motorSpeed",xe,c(e)),u(e,"_enableLimit",Ee,c(e)),u(e,"_lowerLimit",Te,c(e)),u(e,"_upperLimit",Ie,c(e)),e}return i(e,t),n(e,[{key:"angle",get:function(){return this._autoCalcAngle&&this.connectedBody&&(m.subtract(lo,this.connectedBody.node.worldPosition,this.node.worldPosition),this._angle=j(Math.atan2(lo.y,lo.x))),this._angle},set:function(t){this._angle=t}},{key:"autoCalcAngle",get:function(){return this._autoCalcAngle},set:function(t){this._autoCalcAngle=t}},{key:"enableMotor",get:function(){return this._enableMotor},set:function(t){this._enableMotor=t}},{key:"maxMotorForce",get:function(){return this._maxMotorForce},set:function(t){this._maxMotorForce=t,this._joint&&this._joint.setMaxMotorForce(t)}},{key:"motorSpeed",get:function(){return this._motorSpeed},set:function(t){this._motorSpeed=t,this._joint&&this._joint.setMotorSpeed(t)}},{key:"enableLimit",get:function(){return this._enableLimit},set:function(t){this._enableLimit=t}},{key:"lowerLimit",get:function(){return this._lowerLimit},set:function(t){this._lowerLimit=t,this._joint&&this._joint.setLowerLimit(t)}},{key:"upperLimit",get:function(){return this._upperLimit},set:function(t){this._upperLimit=t,this._joint&&this._joint.setUpperLimit(t)}}]),e}(so),s((je=ke).prototype,"angle",[_],Object.getOwnPropertyDescriptor(je.prototype,"angle"),je.prototype),s(je.prototype,"autoCalcAngle",[_],Object.getOwnPropertyDescriptor(je.prototype,"autoCalcAngle"),je.prototype),s(je.prototype,"enableMotor",[_],Object.getOwnPropertyDescriptor(je.prototype,"enableMotor"),je.prototype),s(je.prototype,"maxMotorForce",[_],Object.getOwnPropertyDescriptor(je.prototype,"maxMotorForce"),je.prototype),s(je.prototype,"motorSpeed",[_],Object.getOwnPropertyDescriptor(je.prototype,"motorSpeed"),je.prototype),s(je.prototype,"enableLimit",[_],Object.getOwnPropertyDescriptor(je.prototype,"enableLimit"),je.prototype),s(je.prototype,"lowerLimit",[_],Object.getOwnPropertyDescriptor(je.prototype,"lowerLimit"),je.prototype),s(je.prototype,"upperLimit",[_],Object.getOwnPropertyDescriptor(je.prototype,"upperLimit"),je.prototype),Pe=s(je.prototype,"_angle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ce=s(je.prototype,"_autoCalcAngle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Le=s(je.prototype,"_enableMotor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ae=s(je.prototype,"_maxMotorForce",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),xe=s(je.prototype,"_motorSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),Ee=s(je.prototype,"_enableLimit",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Te=s(je.prototype,"_lowerLimit",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ie=s(je.prototype,"_upperLimit",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Se=je))||Se)||Se),t("F",f("cc.FixedJoint2D")(ve=b()((Re=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.FIXED,u(e,"_frequency",ze,c(e)),u(e,"_dampingRatio",Fe,c(e)),e}return i(e,t),n(e,[{key:"frequency",get:function(){return this._frequency},set:function(t){this._frequency=t,this._joint&&this._joint.setFrequency(t)}},{key:"dampingRatio",get:function(){return this._dampingRatio},set:function(t){this._dampingRatio=t,this._joint&&this._joint.setDampingRatio(t)}}]),e}(so),s((Me=Re).prototype,"frequency",[_],Object.getOwnPropertyDescriptor(Me.prototype,"frequency"),Me.prototype),s(Me.prototype,"dampingRatio",[_],Object.getOwnPropertyDescriptor(Me.prototype,"dampingRatio"),Me.prototype),ze=s(Me.prototype,"_frequency",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),Fe=s(Me.prototype,"_dampingRatio",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),ve=Me))||ve)||ve),t("W",f("cc.WheelJoint2D")(qe=b()((Je=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.WHEEL,u(e,"_angle",Ve,c(e)),u(e,"_enableMotor",Be,c(e)),u(e,"_maxMotorTorque",Ye,c(e)),u(e,"_motorSpeed",We,c(e)),u(e,"_frequency",He,c(e)),u(e,"_dampingRatio",Ge,c(e)),e}return i(e,t),n(e,[{key:"angle",get:function(){return this._angle},set:function(t){this._angle=t}},{key:"enableMotor",get:function(){return this._enableMotor},set:function(t){this._enableMotor=t,this._joint&&this._joint.enableMotor(t)}},{key:"maxMotorTorque",get:function(){return this._maxMotorTorque},set:function(t){this._maxMotorTorque=t,this._joint&&this._joint.setMaxMotorTorque(t)}},{key:"motorSpeed",get:function(){return this._motorSpeed},set:function(t){this._motorSpeed=t,this._joint&&this._joint.setMotorSpeed(t)}},{key:"frequency",get:function(){return this._frequency},set:function(t){this._frequency=t,this._joint&&this._joint.setFrequency(t)}},{key:"dampingRatio",get:function(){return this._dampingRatio},set:function(t){this._dampingRatio=t,this._joint&&this._joint.setDampingRatio(t)}}]),e}(so),s((Ne=Je).prototype,"angle",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"angle"),Ne.prototype),s(Ne.prototype,"enableMotor",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"enableMotor"),Ne.prototype),s(Ne.prototype,"maxMotorTorque",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"maxMotorTorque"),Ne.prototype),s(Ne.prototype,"motorSpeed",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"motorSpeed"),Ne.prototype),s(Ne.prototype,"frequency",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"frequency"),Ne.prototype),s(Ne.prototype,"dampingRatio",[_],Object.getOwnPropertyDescriptor(Ne.prototype,"dampingRatio"),Ne.prototype),Ve=s(Ne.prototype,"_angle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),Be=s(Ne.prototype,"_enableMotor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ye=s(Ne.prototype,"_maxMotorTorque",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),We=s(Ne.prototype,"_motorSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),He=s(Ne.prototype,"_frequency",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),Ge=s(Ne.prototype,"_dampingRatio",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),qe=Ne))||qe)||qe),t("H",f("cc.HingeJoint2D")(Ue=b()((oo=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).TYPE=T.HINGE,u(e,"_enableLimit",Ke,c(e)),u(e,"_lowerAngle",Qe,c(e)),u(e,"_upperAngle",$e,c(e)),u(e,"_enableMotor",Ze,c(e)),u(e,"_maxMotorTorque",to,c(e)),u(e,"_motorSpeed",eo,c(e)),e}return i(e,t),n(e,[{key:"enableLimit",get:function(){return this._enableLimit},set:function(t){this._enableLimit=t}},{key:"lowerAngle",get:function(){return this._lowerAngle},set:function(t){this._lowerAngle=t,this._joint&&this._joint.setLowerAngle(t)}},{key:"upperAngle",get:function(){return this._upperAngle},set:function(t){this._upperAngle=t,this._joint&&this._joint.setUpperAngle(t)}},{key:"enableMotor",get:function(){return this._enableMotor},set:function(t){this._enableMotor=t,this._joint&&this._joint.enableMotor(t)}},{key:"maxMotorTorque",get:function(){return this._maxMotorTorque},set:function(t){this._maxMotorTorque=t,this._joint&&this._joint.setMaxMotorTorque(t)}},{key:"motorSpeed",get:function(){return this._motorSpeed},set:function(t){this._motorSpeed=t,this._joint&&this._joint.setMotorSpeed(t)}}]),e}(so),s((Xe=oo).prototype,"enableLimit",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"enableLimit"),Xe.prototype),s(Xe.prototype,"lowerAngle",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"lowerAngle"),Xe.prototype),s(Xe.prototype,"upperAngle",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"upperAngle"),Xe.prototype),s(Xe.prototype,"enableMotor",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"enableMotor"),Xe.prototype),s(Xe.prototype,"maxMotorTorque",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"maxMotorTorque"),Xe.prototype),s(Xe.prototype,"motorSpeed",[_],Object.getOwnPropertyDescriptor(Xe.prototype,"motorSpeed"),Xe.prototype),Ke=s(Xe.prototype,"_enableLimit",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Qe=s(Xe.prototype,"_lowerAngle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),$e=s(Xe.prototype,"_upperAngle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ze=s(Xe.prototype,"_enableMotor",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),to=s(Xe.prototype,"_maxMotorTorque",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),eo=s(Xe.prototype,"_motorSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ue=Xe))||Ue)||Ue)}}}));
