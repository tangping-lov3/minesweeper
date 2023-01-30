System.register("chunks:///_virtual/Block.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index2.ts","./CIrcle.ts","./index.ts"],(function(t){"use strict";var i,e,o,r,n,s,u,l,h,a,c,d,f,p,m,g,C,T;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized,n=t.createForOfIteratorHelperLoose},function(t){s=t.cclegacy,u=t._decorator,l=t.UITransform,h=t.Sprite,a=t.Button,c=t.Label,d=t.Color,f=t.Input,p=t.Component},function(t){m=t.emitter,g=t.flat},function(t){C=t.Circle},function(t){T=t.useThunder}],execute:function(){var v,k,F,A,S,y,B,b,w,I,x;s._RF.push({},"ee996MiDO9ICLjJXkbLtlvl","Block",void 0);var z=u.ccclass,E=u.property;t("Block",(v=z("Block"),k=E({type:l}),F=E({type:h}),A=E({type:a}),S=E({type:c}),v((b=i((B=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).lastClickTime=0,i.timer=0,i.thunderCount=0,i.colors=["#b3d665","#77A21A"],i.status="normal",i.isThunder=!1,i.originBlocks=[],i.position=[0,0],i.thunderColors=["#FF0000AA","#FF7F00AA","#FFFF00AA","#00FF00AA","#0000FFAA","#4B0082AA","#8B00FFAA"],i.aroundBlockPos=[],i.colorIndex=0,i.thunderStore=T(),o(i,"UI",b,r(i)),o(i,"Sprite",w,r(i)),o(i,"Circle",I,r(i)),o(i,"Text",x,r(i)),i}e(i,t);var s=i.prototype;return s.reset=function(){this.status="normal",this.Sprite.color=(new d).fromHEX(this.colors[this.colorIndex]),this.Text.string="",this.Circle.node.active=!1,this.lastClickTime=0,clearTimeout(this.timer)},s.start=function(){this.node.on(f.EventType.TOUCH_END,this.onClick,this)},s.init=function(){this.UI=this.getComponent(l),this.Sprite=this.getComponent(h)},s.updateInfo=function(t,i){var e=t[0],o=t[1];this.UI.setContentSize(e,o),this.colorIndex=i,this.Sprite.color=(new d).fromHEX(this.colors[i])},s.onClick=function(){var t=this,i=Date.now();if(i-this.lastClickTime<300)return this.mark(),this.lastClickTime=0,void clearTimeout(this.timer);this.lastClickTime=i,clearTimeout(this.timer),this.timer=setTimeout((function(){t.dig()}),300)},s.dig=function(t){if(void 0===t&&(t=!0),m.emit("start"),"normal"===this.status){if(this.isThunder&&t)return this.digThunder(),g(this.originBlocks).forEach((function(t){return t.digThunder()})),void m.emit("gameover");this.computeAroundThunderCount(),this.status="diged",this.Sprite.color=(new d).fromHEX("#FFFFFF"),0===this.thunderCount?this.digAround():this.Text.string=this.thunderCount.toString(),this.thunderStore.state.digedCount++,this.thunderStore.state.thunderCount===this.thunderStore.state.flagCount&&this.thunderStore.state.digedCount+this.thunderStore.state.flagCount===this.thunderStore.state.totalCount&&m.emit("win")}},s.digThunder=function(){this.isThunder&&"normal"===this.status&&(this.status="thunder",this.showCircle(),this.Sprite.color=(new d).fromHEX(this.thunderColors[Math.floor(Math.random()*this.thunderColors.length)]))},s.showCircle=function(){this.Circle.getComponent(C).show()},s.digAround=function(){for(var t,i=n(this.aroundBlockPos);!(t=i()).done;){var e,o=t.value,r=o[0],s=o[1],u=null==(e=this.originBlocks[r])?void 0:e[s];u&&"normal"===u.status&&u.dig(!1)}},s.mark=function(){"flag"!==this.status&&"normal"!==this.status||(this.status="flag"===this.status?"normal":"flag","flag"===this.status?(this.Text.string="🚩",this.thunderStore.state.flagCount++):(this.Text.string="",this.thunderStore.state.flagCount--))},s.computeAroundThunderCount=function(){var t=this.position,i=t[0],e=t[1];this.aroundBlockPos=[[i-1,e-1],[i-1,e],[i-1,e+1],[i,e-1],[i,e+1],[i+1,e-1],[i+1,e],[i+1,e+1]];for(var o,r=n(this.aroundBlockPos);!(o=r()).done;){var s,u=o.value,l=u[0],h=u[1];(null==(s=this.originBlocks[l])?void 0:s[h])&&this.originBlocks[l][h].isThunder&&this.thunderCount++}},i}(p)).prototype,"UI",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(B.prototype,"Sprite",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(B.prototype,"Circle",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=i(B.prototype,"Text",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/CIrcle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,c,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var o;c._RF.push({},"cdbcfv7A/BFsqWLuCYIkVl2","CIrcle",void 0);var i=n.ccclass;t("Circle",i("Circle")(o=function(t){function c(){return t.apply(this,arguments)||this}e(c,t);var n=c.prototype;return n.start=function(){this.node.active=!1},n.show=function(){this.node.active=!0},c}(r))||o);c._RF.pop()}}}));

System.register("chunks:///_virtual/index.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"4b6a4hGYN9MFI1mJKzFTjqT","index",void 0);var u,e;t("useThunder",(u={flagCount:0,totalCount:0,digedCount:0,thunderCount:0},e=function(){u.flagCount=0,u.totalCount=0,u.digedCount=0,u.thunderCount=0},function(){return{state:u,reset:e}}));n._RF.pop()}}}));

System.register("chunks:///_virtual/index2.ts",["cc","./mitt.mjs"],(function(n){"use strict";var t,e,u,c;return{setters:[function(n){t=n.cclegacy,e=n.resources,u=n.Prefab},function(n){c=n.default}],execute:function(){n({flat:function(n){return n.reduce((function(n,t){return n.concat(t)}),[])},loadPrefab:function(n){return new Promise((function(t,c){e.load(n,u,(function(n,e){n?c(n):t(e)}))}))},sleep:function(n){return new Promise((function(t){setTimeout((function(){t()}),n)}))}}),t._RF.push({},"a3166qVWGZNF6Xl5KhPEATv","index",void 0);n("emitter",c());t._RF.pop()}}}));

System.register("chunks:///_virtual/Init.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index2.ts","./Block.ts","./Result.ts","./index.ts"],(function(t){"use strict";var e,i,n,o,r,s,a,l,u,c,h,p,d,f,v,m,w,k,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized,r=t.asyncToGenerator,s=t.regeneratorRuntime},function(t){a=t.cclegacy,l=t._decorator,u=t.Button,c=t.Layout,h=t.view,p=t.UITransform,d=t.Component,f=t.instantiate},function(t){v=t.emitter,m=t.loadPrefab},function(t){w=t.Block},function(t){k=t.Result},function(t){g=t.useThunder}],execute:function(){var b,y,R,S,T,z,B;a._RF.push({},"a28d5J3W29Lvp6pC33bLlYS","Init",void 0);var _={1:12,2:18,3:24},C={1:20,2:40,3:99},I=l.ccclass,x=l.property;t("Init",(b=I("Init"),y=x({type:u}),R=x({type:c}),b((z=e((T=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).blockSize=0,e.windowSize={width:0,height:0},e.startX=0,e.startY=0,e.TopBar=null,e.thunders=[],e.level=2,e.blocks=[],e.startTime=0,e.thunderStore=g(),n(e,"Restart",z,o(e)),n(e,"Result",B,o(e)),e}i(e,t);var a=e.prototype;return a.startGame=function(){this.startTime||(this.startTime=Date.now())},a.start=function(){var t=this;v.on("win",(function(){return t.win()})),v.on("gameover",(function(){return t.gameover()})),v.on("start",(function(){return t.startGame()})),this.Result.node.active=!1,this.Restart.node.on("click",(function(){t.restart()}),this),this.windowSize=h.getVisibleSize(),this.blockSize=this.windowSize.width/_[this.level],this.startX=-this.windowSize.width/2,this.TopBar=this.node.getChildByName("TopBar").getComponent(p),this.startY=-this.TopBar.height,this._update()},a.initThunders=function(){var t=Math.pow(_[this.level],2),e=C[this.level];this.thunderStore.state.thunderCount=e,this.thunders=new Array(t-e).fill(!1).concat(new Array(e).fill(!0)).sort((function(){return Math.random()-.5}))},a.insertBlock=function(){var t=r(s().mark((function t(){var e,i,n,o,r,a,l,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("prefab/Block");case 2:for(e=t.sent,i=1,n=0,o=[],r=0;r<_[this.level];r++)for(n=((i=(i+1)%2)+1)%2,o[r]=[],this.blocks[r]=[],a=0;a<_[this.level];a++)n=(n+1)%2,l=f(e),u=l.getComponent(w),o[r][a]=u,this.blocks[r][a]=l,u.init(),u.updateInfo([this.blockSize,this.blockSize],n),u.position=[r,a],u.originBlocks=o,u.isThunder=this.thunders.pop(),l.setPosition(r*this.blockSize+this.startX,-(a+1)*this.blockSize+this.startY),this.node.addChild(l);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),a._update=function(){this.removeBlockNode(),this.initThunders(),this.insertBlock()},a.removeBlockNode=function(){for(var t=0;t<this.blocks.length;t++)for(var e=0;e<this.blocks[t].length;e++)this.blocks[t][e].removeFromParent()},a.restart=function(){this._update(),console.log("restart")},a.showResult=function(t){this.Result.node.active=!0,this.Result.getComponent(k).updateInfo(t),this.startTime=0},a.win=function(){var t={time:((Date.now()-this.startTime)/1e3).toFixed(2)+"S",rank:1};this.showResult(t),console.log("win")},a.gameover=function(){this.showResult({time:"___",rank:"___"}),console.log("gameover")},e}(d)).prototype,"Restart",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(T.prototype,"Result",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=T))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Block.ts","./CIrcle.ts","./Init.ts","./Result.ts","./index.ts","./index2.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Result.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Init.ts"],(function(e){"use strict";var t,n,i,r,o,a,l,s,c,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Layout,s=e.Button,c=e.Label,u=e.Component},function(e){p=e.Init}],execute:function(){var d,h,y,f,b,g,m,R,v,C,k;o._RF.push({},"0a191ZpeedOX75QckhqQ2Aq","Result",void 0);var z=a.ccclass,L=a.property;e("Result",(d=z("Result"),h=L({type:l}),y=L({type:l}),f=L({type:s}),b=L({type:s}),d((R=t((m=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(t,"Time",R,r(t)),i(t,"Rank",v,r(t)),i(t,"Restart",C,r(t)),i(t,"Close",k,r(t)),t}n(t,e);var o=t.prototype;return o.start=function(){var e=this;this.Restart.node.on("click",(function(){e.node.active=!1,e.node.parent.getComponent(p).restart()}),this),this.Close.node.on("click",(function(){e.node.active=!1}))},o.updateInfo=function(e){var t=this.node.parent.children.length;this.node.setSiblingIndex(t-1),this.Time.node.getChildByName("Label").getComponent(c).string=""+e.time,this.Rank.node.getChildByName("Label").getComponent(c).string="排名: "+e.rank},t}(u)).prototype,"Time",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=t(m.prototype,"Rank",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(m.prototype,"Restart",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(m.prototype,"Close",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=m))||g));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});