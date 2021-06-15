window.__require=function t(e,o,i){function n(s,a){if(!o[s]){if(!e[s]){var r=s.split("/");if(r=r[r.length-1],!e[r]){var h="function"==typeof __require&&__require;if(!a&&h)return h(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){return n(e[s][1][t]||t)},l,l.exports,t,e,o,i)}return o[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Boat:[function(t,e,o){"use strict";cc._RF.push(e,"c836cIBO+VGi4fSf0R8K5Tt","Boat");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,s=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(c<3?n(s):c>3?n(e,o,s):n(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,r=s.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultSpeed=200,e._velocity=0,e}return n(e,t),Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this._velocity=t},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._cacheScale=this.node.scaleX},e.prototype.update=function(t){var e=this.node.getPosition().clone().add(cc.v2(this._velocity*t,0)),o=this.node.convertToWorldSpaceAR(cc.v2(0,0));this._velocity>0?o.x<=cc.find("Canvas").width-Math.abs(this.node.width*this.node.scaleX/2)&&(this.node.setPosition(e),this.node.scaleX=this._cacheScale):0==this._velocity||o.x>=0+Math.abs(this.node.width*this.node.scaleX/2)&&(this.node.setPosition(e),this.node.scaleX=-this._cacheScale)},e.prototype.moveLeft=function(){this.velocity=-Math.abs(this.defaultSpeed)},e.prototype.moveRight=function(){this.velocity=Math.abs(this.defaultSpeed)},e.prototype.moveStop=function(){this.velocity=0},e.prototype.start=function(){},c([r],e.prototype,"defaultSpeed",void 0),c([a],e)}(cc.Component);o.default=h,cc._RF.pop()},{}],COMMON:[function(t,e,o){"use strict";var i;cc._RF.push(e,"70c55b49/FHJra/+sS7/mkC","COMMON"),Object.defineProperty(o,"__esModule",{value:!0}),function(t){t[t.Tu=0]="Tu",t[t.default=1]="default",t[t.Yu=2]="Yu",t[t.ZongZi=3]="ZongZi",t[t.QuYuan=4]="QuYuan"}(i||(i={})),o.default=i,cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"9304ciq/25CBKvHgUUO//8Y","Game");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,s=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(c<3?n(s):c>3?n(e,o,s):n(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s,a=t("./Boat"),r=cc._decorator,h=r.ccclass,l=r.property;(function(t){t[t.START=0]="START",t[t.PLAY=1]="PLAY",t[t.OVER=2]="OVER"})(s||(s={}));var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.boat=null,e.zongZi=null,e.yu=null,e.gui=null,e.zongZiParentNode=null,e.yuParentNode=null,e.startLevel=1,e.score=null,e.level=null,e.goal=null,e.win=null,e.lose=null,e.throwButtonUI=null,e._gameState=s.START,e.ZONGZI_LIMIT=5,e.FISH_LIMIT=30,e.GUI_LIMIT=10,e._startFlag=!1,e.thrownFlag=!1,e.stopFlag=!1,e._keys={},e}return n(e,t),e.prototype.onLoad=function(){var t;this._zongziPool=new cc.NodePool;for(var e=0;e<this.ZONGZI_LIMIT;++e)t=cc.instantiate(this.zongZi),this._zongziPool.put(cc.instantiate(this.zongZi));for(this._cache\u7cbd\u5b50start=t.getPosition(),this._fishPool=new cc.NodePool,e=0;e<this.FISH_LIMIT;++e)this._fishPool.put(cc.instantiate(this.yu));for(this._guiPool=new cc.NodePool,e=0;e<this.GUI_LIMIT;++e)this._guiPool.put(cc.instantiate(this.gui));cc.macro.ENABLE_MULTI_TOUCH=!0,cc.director.getCollisionManager().enabled=!0,this.registerEvents(),this.node.on("startGameEvent",this.onStartGameEvent,this),this._cache\u76f8\u673astart=this.node.getChildByName("Main Camera").getPosition(),this.init(!0)},e.prototype.startButton=function(){var t=this;this._startFlag||(this._startFlag=!0,cc.tween(this.node.getChildByName("Main Camera")).set({y:this._cache\u76f8\u673astart.y,x:this._cache\u76f8\u673astart.x}).to(2,{y:0}).call(function(){t._gameState=s.PLAY,t.node.emit("startGameEvent")}).start())},e.prototype.throwButton=function(t,e){this._gameState==s.START||this._gameState==s.OVER&&"fromButton"==e&&this.init(),this._gameState==s.PLAY&&this.zongZiParentNode.childrenCount+1<=this.ZONGZI_LIMIT&&this.createZongzi(this.zongZiParentNode,this.boat.x,this._cache\u7cbd\u5b50start.y)},e.prototype.onDestroy=function(){this.node.off(cc.Node.EventType.TOUCH_START,this.onTouchStartCallback,this),this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoveCallback,this),this.node.off(cc.Node.EventType.TOUCH_END,this.onTouchEndCallback,this),this.node.off("startGameEvent",this.onStartGameEvent,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.registerEvents=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStartCallback,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEndCallback,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoveCallback,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.onTouchStartCallback=function(t){t.stopPropagation(),t.getLocationX()>this.node.width/2?this.boat.getComponent(a.default).moveRight():this.boat.getComponent(a.default).moveLeft()},e.prototype.onTouchMoveCallback=function(t){this.onTouchStartCallback(t)},e.prototype.onTouchEndCallback=function(t){t.stopPropagation(),this.boat.getComponent(a.default).moveStop()},e.prototype.update=function(){this._keys[cc.macro.KEY.space]&&!this.thrownFlag&&(this.throwButton(),this.thrownFlag=!0);var t=0;this._keys[cc.macro.KEY.a]||this._keys[cc.macro.KEY.left]?t=-1:(this._keys[cc.macro.KEY.d]||this._keys[cc.macro.KEY.right])&&(t=1),0!=t?(t>0?this.boat.getComponent(a.default).moveRight():this.boat.getComponent(a.default).moveLeft(),this.stopFlag=!1):(this.stopFlag||(this.boat.getComponent(a.default).velocity=0),this.stopFlag=!0)},e.prototype.onKeyDown=function(t){this._keys[t.keyCode]=!0},e.prototype.onKeyUp=function(t){this._keys[t.keyCode]=!1,t.keyCode==cc.macro.KEY.space&&(this.thrownFlag=!1)},e.prototype.init=function(t){void 0===t&&(t=!0),this._startFlag=!1,this._gameState=s.START,t&&this.node.getChildByName("Main Camera").y!=this._cache\u76f8\u673astart.y&&cc.tween(this.node.getChildByName("Main Camera")).to(2,{y:this._cache\u76f8\u673astart.y,x:this._cache\u76f8\u673astart.x}).start(),this.score.active=!1,this.win.active=!1,this.lose.active=!1,this.goal.active=!1,this._\u52a8\u7269\u5582\u4e86=0,this.updateLevelUI(),this.updateScoreUI(),this.updateGoalUI(),this.throwButtonUI.string="\u70b9\u6211\u54e6\uff01"},e.prototype.onStartGameEvent=function(){this._gameState=s.PLAY;var t=this;cc.resources.load("levels/level"+t.startLevel,function(e,o){o||(t.startLevel=1,t.init());var i=o.json;t.upodateLevel(i),t.score.active=!0,t.updateScoreUI(),t.level.active=!0,t.updateLevelUI(),t.goal.active=!0,t.updateGoalUI()})},e.prototype.upodateLevel=function(t){for(var e=this,o=0,i=function(i){var c=t.waves[i];o+=c.number*(c.bites?c.bites:1),n.scheduleOnce(function(){for(var t=function(t){var o=c.type,i="\u5de6"==c.start?-e.node.width/2:e.node.width/2,n=c.velocity?c.velocity:200,s=c.bites?c.bites:1;e.scheduleOnce(function(){"\u9c7c"==o?e.createYu(e.yuParentNode,i,100,n,s):"\u9f9f"==o?e.createGui(e.yuParentNode,i,100,n,s):e.createYu(e.yuParentNode,i,100,n,s)},(.5+Math.random())*t)},o=0;o<c.number;o++)t(o)},c.delay)},n=this,c=0;c<t.waves.length;c++)i(c);this._\u52a8\u7269\u5269\u4e0b=Math.floor(.8*o)},e.prototype.updateScoreUI=function(){var t="<color=#ffffff>\u5206\u6570Score:</c> <color=#ffffff>"+this._\u52a8\u7269\u5582\u4e86+"</c>";this.score.getComponent(cc.RichText).string=t,cc.tween(this.score).to(.5,{scale:1.2}).to(1,{scale:1}).start()},e.prototype.updateLevelUI=function(){var t="<color=#ffffff>\u5173\u5361Level:</c> <color=#ffffff>"+this.startLevel+"</c>";this.level.getComponent(cc.RichText).string=t,cc.tween(this.level).to(.5,{scale:1.5}).to(1,{scale:1}).start()},e.prototype.updateGoalUI=function(){var t="<color=#ffffff>\u76ee\u6807Goal:</c> <color=#ffffff>"+Math.floor(this._\u52a8\u7269\u5269\u4e0b)+"</c>";this.goal.getComponent(cc.RichText).string=t,cc.tween(this.goal).to(.5,{scale:1.2}).to(1,{scale:1}).start()},e.prototype.on\u9c7c\u5403\u7cbd\u5b50=function(){this._\u52a8\u7269\u5582\u4e86++,this.updateScoreUI()},e.prototype.onCheckGameOver=function(){this.yuParentNode.childrenCount>=1||(console.log(this.yuParentNode.childrenCount),this._\u52a8\u7269\u5582\u4e86>=this._\u52a8\u7269\u5269\u4e0b?this.onGameWin():this.onGameOver())},e.prototype.onGameWin=function(){this._gameState!=s.OVER&&(this._gameState=s.OVER,this.throwButtonUI.string="\u4e0b\u4e00\u5173",this.startLevel++,this.win.active=!0,this.lose.active=!1)},e.prototype.onGameOver=function(){this._gameState!=s.OVER&&(this._gameState=s.OVER,this.throwButtonUI.string="   \u65b0\u6e38\u620f\uff1f",this.startLevel=1,this.win.active=!1,this.lose.active=!0)},e.prototype.createYu=function(t,e,o,i,n){void 0===t&&(t=this.yuParentNode),void 0===e&&(e=this.node.width/2),void 0===o&&(o=200),void 0===i&&(i=100),void 0===n&&(n=1);var c=null;(c=this._fishPool.size()>0?this._fishPool.get():cc.instantiate(this.yu)).x=e,c.y=o,c.parent=t,c.getComponent("Yu").init(e,o,i,n,"\u9c7c")},e.prototype.createGui=function(t,e,o,i,n){void 0===t&&(t=this.yuParentNode),void 0===e&&(e=this.node.width/2),void 0===o&&(o=200),void 0===i&&(i=100),void 0===n&&(n=1);var c=null;(c=this._guiPool.size()>0?this._guiPool.get():cc.instantiate(this.yu)).x=e,c.y=o,c.parent=t,c.getComponent("Yu").init(e,o,i,n,"\u9f9f")},e.prototype.createZongzi=function(t,e,o){void 0===t&&(t=this.zongZiParentNode),void 0===e&&(e=this.boat.x),void 0===o&&(o=0);var i=null;return(i=this._zongziPool.size()>0?this._zongziPool.get():cc.instantiate(this.zongZi)).x=e,i.y=o,i.parent=t,i.getComponent("ZhongZi").init(e,o),i},e.prototype.onCollidedZongZi=function(t){this._zongziPool.put(t)},e.prototype.onCollidedYu=function(t){this._fishPool.put(t),this.onCheckGameOver()},e.prototype.onCollidedGui=function(t){this._guiPool.put(t),this.onCheckGameOver()},c([l(cc.Node)],e.prototype,"boat",void 0),c([l(cc.Prefab)],e.prototype,"zongZi",void 0),c([l(cc.Prefab)],e.prototype,"yu",void 0),c([l(cc.Prefab)],e.prototype,"gui",void 0),c([l(cc.Node)],e.prototype,"zongZiParentNode",void 0),c([l(cc.Node)],e.prototype,"yuParentNode",void 0),c([l(cc.Integer)],e.prototype,"startLevel",void 0),c([l(cc.Node)],e.prototype,"score",void 0),c([l(cc.Node)],e.prototype,"level",void 0),c([l(cc.Node)],e.prototype,"goal",void 0),c([l(cc.Node)],e.prototype,"win",void 0),c([l(cc.Node)],e.prototype,"lose",void 0),c([l(cc.Label)],e.prototype,"throwButtonUI",void 0),c([h],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./Boat":"Boat"}],Yu:[function(t,e,o){"use strict";cc._RF.push(e,"453e1Sx1CpCJpJkMWFq8XIs","Yu");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,s=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(c<3?n(s):c>3?n(e,o,s):n(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,r=s.property,h=t("./COMMON"),l=t("./Game"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.\u9c7c=null,e.\u7cbd\u5b50=null,e._eating=!1,e._biteCount=0,e._velocity=0,e._bites=1,e}return n(e,t),e.prototype.onLoad=function(){this.node.on("onFinishEat",this.onFinishEat,this),this._cacheFishScale=this.node.scaleX,this._cacheYuScale=this.\u9c7c.scale},e.prototype.start=function(){},e.prototype.playEatAnimation=function(){this._eating||(this._biteCount++,cc.find("Canvas").getComponent(l.default).on\u9c7c\u5403\u7cbd\u5b50(),this._biteCount<this._bites?this.\u9c7c.setScale(this.\u9c7c.scale+this._cacheYuScale):(this._eating=!0,this.node.getComponent(cc.BoxCollider).enabled=!1,this._velocity=0,"\u9c7c"==this._type?this.node.getComponent(cc.Animation).play("\u9c7c\u5403\u7cbd\u5b50"):"\u9f9f"==this._type&&this.node.getComponent(cc.Animation).play("\u4e4c\u9f9f\u5403\u7cbd\u5b50"),this.node.getComponent(cc.AudioSource).play()))},e.prototype.onFinishEat=function(){"\u9c7c"==this._type?cc.find("Canvas").getComponent(l.default).onCollidedYu(this.node):"\u9f9f"==this._type&&cc.find("Canvas").getComponent(l.default).onCollidedGui(this.node)},e.prototype.update=function(t){this.node.x=this.node.x+t*this._velocity;var e=this.node.convertToWorldSpaceAR(cc.v2(0,0));e.x>cc.find("Canvas").width+100?(this.node.y-=50,this.refreshVelocity()):e.x<-100&&(this.node.y-=50,this.refreshVelocity())},e.prototype.refreshVelocity=function(t,e,o){void 0===t&&(t=this.node.x),void 0===e&&(e=this.node.y),void 0===o&&(o=this._velocity),this.node.x=t,this.node.y=e,o=Math.abs(o),this.node.x<0?(this.node.scaleX=this._cacheFishScale,this._velocity=o):(this.node.scaleX=-this._cacheFishScale,this._velocity=-o)},e.prototype.init=function(t,e,o,i,n){void 0===t&&(t=this.node.x),void 0===e&&(e=this.node.y),void 0===o&&(o=100),void 0===i&&(i=1),void 0===n&&(n="\u9c7c"),this.\u9c7c.setPosition(cc.v2(0,0)),this.\u7cbd\u5b50.setPosition(cc.v2(0,0)),this.\u7cbd\u5b50.opacity=0,this.\u9c7c.setScale(this._cacheYuScale),this._type=n,this.node.getComponent(cc.BoxCollider).enabled=!0,this._eating=!1,this.refreshVelocity(t,e,o),this._biteCount=0,this._bites=i;var c=Math.floor(3*Math.random()),s=[cc.color(255,0,0,255),cc.color(0,255,0,255),cc.color(0,0,255,255)];this.node.getChildByName("Yu").color=s[c],"\u9f9f"==this._type?this.node.getComponent(cc.Animation).play("\u4e4c\u9f9f\u6e38\u6cf3").speed=Math.min(2*Math.random()+1,2):this._type},e.prototype.onCollisionEnter=function(t){var e=t.node.group;switch(h.default[e]){case h.default.QuYuan:break;case h.default.Tu:this._velocity=0,cc.find("Canvas").getComponent(l.default).onCollidedYu(this.node),cc.find("Canvas").getComponent(l.default).onCheckGameOver()}},c([r(cc.Node)],e.prototype,"\u9c7c",void 0),c([r(cc.Node)],e.prototype,"\u7cbd\u5b50",void 0),c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./COMMON":"COMMON","./Game":"Game"}],ZhongZi:[function(t,e,o){"use strict";cc._RF.push(e,"5a496Kk4o5FJZjd/SAE5SfI","ZhongZi");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,s=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(c<3?n(s):c>3?n(e,o,s):n(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,r=(s.property,t("./COMMON")),h=t("./Game"),l=t("./Yu"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._velocity=-100,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.node.y=this.node.y+t*this._velocity},e.prototype.init=function(t,e){this._velocity=-100,this.node.x=t-30,this.node.y=e+30,this.node.getComponent(cc.Animation).play(),this.getComponent(cc.AudioSource).play()},e.prototype.onCollisionEnter=function(t){var e=t.node.group;switch(r.default[e]){case r.default.QuYuan:break;case r.default.Yu:this._velocity=0,cc.find("Canvas").getComponent(h.default).onCollidedZongZi(this.node),t.node.getComponent(l.default).playEatAnimation();break;case r.default.Tu:this._velocity=0,cc.find("Canvas").getComponent(h.default).onCollidedZongZi(this.node)}},c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./COMMON":"COMMON","./Game":"Game","./Yu":"Yu"}]},{},["Boat","COMMON","Game","Yu","ZhongZi"]);