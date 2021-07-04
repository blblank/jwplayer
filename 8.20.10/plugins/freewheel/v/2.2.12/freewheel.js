!function(){var e="freewheel",t="-1",i=15e3,r=15e3,n=4e3,s="time",a="adError",o="interaction";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var f=function(){function e(t,s,a){d(this,e),this.config=s;var o=t.localization.advertising,l={admessage:o.admessage,podmessage:o.podmessage,cuetext:o.cuetext,loadingAd:o.loadingAd,skipMessage:o.skipmessage,skipText:o.skiptext,debug:!1,admessagedynamickey:/(\b)xx(s?\b)/g,loadVideoTimeout:r,requestTimeout:i,adBlockTimeout:n};this.setOptions(l),this.fwassetid=a.fwassetid||t.fwassetid,this.duration=a.duration||t.duration||0,this.adschedule=a.adschedule||null;var u=a.freewheel||{},h=this.config.freewheel||{};this.profileid=u.profileid||h.profileid,this.sectionid=u.sectionid||h.sectionid,this.networkid=u.networkid||h.networkid,this.serverid=u.serverid||h.serverid,this.custom=u.custom||h.custom||{}}return h(e,[{key:"getSchedule",value:function(){var e=this.config;return this.adschedule||e.tag||e.schedule||e.ad}},{key:"getAdRules",value:function(){var e=this.config.rules||{},t=parseInt(e.frequency,10);return{startOn:e.startOn||1,frequency:isNaN(t)?1:t}}},{key:"setOptions",value:function(e){var t=this;Object.keys(e).forEach((function(i){var r=t.config[i]||t.config[i.toLowerCase()],n=e[i],s=l(n);if(void 0!==r){if("boolean"!==s&&"number"!==s||(r=function(e){if("true"===e)return!0;if("false"===e)return!1;var t=parseFloat(e);return isNaN(t)?e:t}(r)),l(r)!==s)throw new Error("invalid parameter: "+i+" should be a "+s);t[i]=r}else t[i]=n})),this.admessagedynamic=e.admessage}}]),e}(),p=null;function v(e,t){if(p)return p;if(window.tv&&tv.freewheel)return p=Promise.resolve();var i=document.location.protocol,r="file:"===i||"https:"===i?"https://mssl.fwmrm.net/libs/adm/6.33.0/AdManager.js":"http://adm.fwmrm.net/libs/adm/6.33.0/AdManager.js",n=new e.scriptloader(t||r);return p=n.load().then((function(){}))}var m={};var g=function(){function e(t,i){d(this,e),t.extend(this,i),this.isMuted=!1,this.vol=0,this.freewheelProxy=null}return h(e,[{key:"setProxy",value:function(e){this.freewheelProxy=e,this.mute(this.isMuted)}},{key:"attachMedia",value:function(){}},{key:"detachMedia",value:function(){}},{key:"mute",value:function(e){this.isMuted=e,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.isMuted?0:this.vol)}},{key:"volume",value:function(e){this.vol=e/100,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.vol)}},{key:"setFullscreen",value:function(e){if(this.video){if(e)try{var t=this.video.webkitEnterFullscreen;t&&t.apply(this.video)}catch(e){return!1}else{var i=this.video.webkitExitFullscreen;i&&i.apply(this.video)}return!!e}}}]),e}();function y(e,t,i){if(!e)return e;for(var r,n,s,a,o=t.getPlaylistItem(),l=e.replace("__random-number__",Math.random()*Math.pow(10,18)).replace("__timestamp__",(new Date).getTime()).replace("__page-url__",encodeURIComponent(window.location.href)).replace("__referrer__",encodeURIComponent(document.referrer)).replace("__player-height__",t.getHeight()).replace("__player-width__",t.getWidth()).replace("__item-duration__",(n=t.getDuration(),s=3,a=Math.pow(10,s),Math.round(n*a)/a)).replace("__domain__",encodeURIComponent((r=window.location.href.match(new RegExp(/^[^/]*:\/\/\/?([^/]*)/)))&&r.length>1?r[1]:"")),d=(l=i.companiondiv&&i.companiondiv.id?l.replace("__companion-div__",i.companiondiv.id):l.replace("__companion-div__","")).match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)),u=0;d&&u<d.length;u++){var h=d[u],c=h.substring(7,h.length-2);if(o.hasOwnProperty(c)&&t._.isString(o[c])){var f=o[c];f.length>1e3&&(f=f.substring(0,1e3)),l=l.replace(h,encodeURIComponent(f))}else l=l.replace(h,"")}return l}function E(e,t,i){if("start"===e||"0%"===e)return"pre";if("end"===e||"100%"===e)return"post";if("pre"===e||"post"===e||i.indexOf(e,"%")>-1)return e;var r=t.seconds(e);return!!i.isNumber(r)&&r}function w(e,t,i){var r,n,s,a,o,l=E(e,t,i);return l||(l="pre"),i.isNumber(l)&&(r=parseInt(1e3*l,10),n=Math.floor(r)%1e3,s=Math.floor(r/1e3)%60,a=Math.floor(r/6e4)%60,l=(o=(o=Math.floor(r/36e5)%24)<10?"0"+o:o)+":"+(a=a<10?"0"+a:a)+":"+(s=s<10?"0"+s:s)+"."+(n=("000"+n).slice(-3))),l}var _=function(){function e(t,i){d(this,e),this.player=t,this.options=i}return h(e,[{key:"getTagMap",value:function(e){var t=this,i=this.player,r=i.utils,n={};return r.foreach(function(e,t,i){var r={};return t.foreach(e,(function(e,n){var s={},a=n;n.ad&&(a=n.ad),s.offset=w(a.offset||a.position||n.offset||"",t,i),s.tag=a.tag,a.customadunitname&&(s.customadunitname=a.customadunitname),s.type=a.type||n.type||"linear,nonlinear",void 0!==a.skipoffset&&(s.skipoffset=a.skipoffset),r[e]=s})),r}(e,r,i._),(function(e,s){var a=E(s.offset,r,i._);if(i._.isString(a)&&(a=parseFloat(a.replace("pre","0").replace("post","-1"))),i._.isNumber(a)){var o={tagName:y(s.tag,i,t.options),type:s.type};void 0!==s.skipoffset&&(o.skipoffset=s.skipoffset),s.customadunitname&&(o.customAdUnitName=s.customadunitname),n[a]=o}})),n}}]),e}(),A={},S=function(){function e(t,i,r){d(this,e),this.responsePromise=null,this.streamType=r,this.adsManager=new tv.freewheel.SDK.AdManager,this.adsManager.setNetwork(i.networkid),this.adsManager.setServer(i.serverid),this.options=i||{},this.version=t,this.schedule=null,this.tagMap={},this._fwassetid=null,this._fwduration=0}return h(e,[{key:"open",value:function(e,t){var i=this,r=this.options;if(this.currentAdContext)throw new Error("Request already made");var n=r.getSchedule();if(!n)return this.responsePromise=Promise.reject(),this.responsePromise;A[r.sectionid]||(A[r.sectionid]=Math.floor(2147483648*Math.random()));var s=A[r.sectionid];this.currentAdContext=this.adsManager.newContext(),this.currentAdContext.setProfile(r.profileid);var a=r.freewheel?r.freewheel.sfid:null;if(this.currentAdContext.setSiteSection(r.sectionid,null,s,null,a),this.currentAdContext.addKeyValue("customTargetingKey","JSAMDemoPlayer"),this._fwassetid=r.fwassetid,this._fwduration=r.duration,this.schedule=n,this.responsePromise=new Promise((function(e,t){i.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,e),i.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_ERROR,t)})),"string"==typeof n)this.currentAdContext.addTemporalSlot(n,tv.freewheel.SDK.ADUNIT_PREROLL,0);else for(var o=new _(e,t),l=this.tagMap=o.getTagMap(n),d=Object.keys(l),u=0;u<d.length;u++){var h=parseFloat(d[u]),c=l[h].tagName,f=l[h].customAdUnitName,p=null;if("overlay"===l[h].type){if(-1===h)continue;p=tv.freewheel.SDK.ADUNIT_OVERLAY}if(!p)switch(h){case 0:p=f||tv.freewheel.SDK.ADUNIT_PREROLL;break;case-1:p=f||tv.freewheel.SDK.ADUNIT_POSTROLL,h=r.duration||1;break;default:p=f||tv.freewheel.SDK.ADUNIT_MIDROLL}this.currentAdContext.addTemporalSlot(c,p,h)}var v=r.custom;for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&this.currentAdContext.addKeyValue(m,v[m]);return this.responsePromise}},{key:"requestAds",value:function(e){var t=e.getConfig(),i=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE;t.autostart&&(i=t.playOnViewable?tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED:tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED);var r=Math.floor(2147483648*Math.random()),n=this.options.freewheel?this.options.freewheel.afid:null;"LIVE"===t.streamType||this.streamType&&"LIVE"===this.streamType.toUpperCase()?(this.currentAdContext.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,n,tv.freewheel.SDK.VIDEO_ASSET_DURATION_TYPE_VARIABLE),this.currentAdContext.setRequestMode(tv.freewheel.SDK.REQUEST_MODE_LIVE)):this.currentAdContext.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,n);var s=Math.floor(t.bandwidthEstimate/1e3);this.currentAdContext.setParameter(tv.freewheel.SDK.PARAMETER_DESIRED_BITRATE,s,tv.freewheel.SDK.PARAMETER_LEVEL_OVERRIDE),this.currentAdContext.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);var a=e.getContainer(),o=a.querySelector(".jw-wrapper");o.id="".concat(a.id,"-jw-wrapper"),this.currentAdContext.registerVideoDisplayBase(o.id),this.currentAdContext.submitRequest()}},{key:"destroy",value:function(){}}]),e}();function k(t,i){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=(c(r={},tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL,"pre"),c(r,tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL,"mid"),c(r,tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL,"post"),c(r,tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY,"overlay"),c(r,tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY,"display"),r);return{type:t,client:e,adposition:s[n]||T(i),viewable:i.getViewable()}}function T(e){return e.isBeforePlay()||0===e.getPosition()?"pre":e.isBeforeComplete()||e.getPosition()===e.getDuration()?"post":"mid"}var I=function(){function t(e,i,r,n,s){var a=this;d(this,t),r.utils.extend(this,r.Events),this.item=e,this.options=i,this.streamType=s,this.player=r,this.utils=r.utils,this.style=r.utils.style,this.environment=r.getEnvironment(),this.instreamProvider=n,this.initAdsManagerPromise=null,this.adsLoadedPromise=null,this.blockingInstreamPlayer=null,this.video=null,this.timeoutAdStart=-1,this.timeoutAdLoad=-1,this.adBlockTimeout=-1,this.progressIntervalId=-1,this.nonlinearContainerId=null,this.slots={prerolls:[],midrolls:[],postrolls:[]},this.playedMidrollIndex=[],this.mobileEventListeners={play:function(){return a.adResume({reason:a.reason||o})},beginFullscreen:function(e){return a.startFullscreen(e)},endFullscreen:function(e){return a.endFullscreen(e)}},this.reason=null,this.playerEventListeners={"idle play pause beforeComplete":this.setVideoState},this.addPlayerListeners(),this._qoe=new r.utils.Timer}return h(t,[{key:"init",value:function(){var t=this;this.initAdsManagerPromise=v().then((function(){return t.destroyed()?null:(t.adsLoaderManager=new S(t.player.version,t.options,t.streamType),t.player.trigger("adManager",{adManager:t.adsLoaderManager.adsManager}),t.player.trigger("adsManager",{adsManager:t.adsLoaderManager.adsManager}),t.adsLoaderManager)})).catch((function(e){return t.asyncError(e)})),this.adsLoadedPromise=this.initAdsManagerPromise.then((function(){return t.adsLoaderManager.open(t.player,t.options)})).then((function(i){if(t.destroyed())return null;if(i.success){t.trigger("adRequest",{client:e,networkid:i.response.networkId});var r=t.adsLoaderManager.currentAdContext;t.instreamProvider.setProxy(r);for(var n=r.getTemporalSlots(),s=[],a=0;a<n.length;a++){var o=n[a];switch(o.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:t.slots.prerolls.push(o);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:t.slots.midrolls.push(o);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:t.slots.midrolls.push(o),s.push({begin:o.getTimePosition(),text:t.options.cuetext,cueType:"ads"});break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:t.slots.postrolls.push(o)}}t.player.addCues(s),t.registerEvents(r),r.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL)}else t.asyncError(i);return t.slots.prerolls.length&&t.utils.addClass(t.player.getContainer(),"jw-flag-ads-freewheel"),i})).catch((function(e){return t.asyncError(e)}))}},{key:"registerEvents",value:function(e){var t=this;e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED,(function(e){return t.adStarted(e)})),e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,(function(e){return t.adSlotComplete(e)})),e.addEventListener(tv.freewheel.SDK.EVENT_AD,(function(e){return t.allAdEvent(e)}))}},{key:"startFullscreen",value:function(e){this.sendFullscreenEvent(e,!0)}},{key:"endFullscreen",value:function(e){this.sendFullscreenEvent(e,!1)}},{key:"sendFullscreenEvent",value:function(e,t){this.blockingInstreamPlayer&&this.blockingInstreamPlayer.trigger("fullscreenchange",{target:e.target,jwstate:t})}},{key:"adErrorEventObject",value:function(t){if(60003===t.adErrorCode)return t;var i=t.adInstance,r=tv?t[tv.freewheel.SDK.INFO_KEY_ERROR_INFO]:"FreeWheel SDK unavailable";return{id:i?i.getAdId():void 0,client:e,message:"Ad Error: "+r,code:t[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],module:t[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}}},{key:"adEventObject",value:function(t){var i=this.currentSlot,r={client:e};if(i&&(r.tag=i.getCustomId()),!t&&i&&(t=i.getCurrentAdInstance()),!t)return r;var n=i.getTimePositionClass(),s="OVERLAY"===n,a=t.getActiveCreativeRendition();r.freewheel={ad:{adId:t.getAdId()}},r.adposition=n.toLowerCase().replace("roll",""),r.id=t.getAdId(),r.linear=s?"nonlinear":"linear",r.creativetype="static",r.viewable=this.player.getViewable(),s||(r.creativetype="VPAID"===a.getCreativeApi()?"vpaid-js":a.getContentType());var o=i.getAdCount();return o>1&&(r.sequence=i.getAdInstances().indexOf(t),r.podcount=o),t.skipoffset&&(r.skipoffset=t.skipoffset),r}},{key:"allAdEvent",value:function(e){var t=e.subType;switch(t){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:this.adImpression.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:this.setTimeoutAdStart.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_PAUSE:case tv.freewheel.SDK.EVENT_AD_RESUME:var i=e.adInstance;null===this.reason&&"VPAID"===i.getActiveCreativeRendition().getCreativeApi()&&(this.reason="external");var r=t===tv.freewheel.SDK.EVENT_AD_PAUSE?"paused":"playing";this.setState(i,r);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:this.adComplete.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_CLICK:this.adClick.call(this,e);break;case tv.freewheel.SDK.EVENT_ERROR:this.adError.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_AUTO_PLAY_BLOCKED:this.pause.call(this,{reason:"autostart"}),this.currentSlot&&this.instreamProvider.trigger("playAttemptFailed")}}},{key:"setupSkipButton",value:function(e){var t=this.options.config.skipoffset,i="POSTROLL"===e.slot.getTimePositionClass()?-1:e.slot.getTimePosition(),r=this.adsLoaderManager.tagMap;if(r){var n=r[i];n&&void 0!==n.skipoffset&&(t=n.skipoffset)}void 0!==t&&this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off("adSkipped",this.adSkip,this),e.adInstance.skipoffset=t,this.blockingInstreamPlayer.setupSkipButton(t,this.options,this.utils.noop),this.blockingInstreamPlayer.on("adSkipped",this.adSkip,this))}},{key:"adStarted",value:function(e){var t=this,i=e.slot.getTimePositionClass();i!==tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY&&(this.player.trigger("adBreakStart",k("adBreakStart",this.player,i)),this.blockingInstreamPlayer.on("destroyed",(function(){t.player.trigger("adBreakEnd",k("adBreakEnd",t.player,i))})))}},{key:"adImpression",value:function(e){clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout);var t=e.adInstance,i=this.adEventObject(t),r="VPAID"===t.getActiveCreativeRendition().getCreativeApi();if(this.utils.removeClass(this.player.getContainer(),"jw-freewheel-before-impression"),this.utils.toggleClass(this.player.getContainer(),"jw-flag-ads-vpaid",r),this.isPreroll(i)&&(this._qoe.tick("adImpression"),i.timeLoading=this._qoe.between("adLoading","adImpression")),this.updateAdPosition(t),this.progressInterval(this.currentSlot),this.setupSkipButton(e),this.setupNonlinearContainer(),this.resize(),this.trigger("adImpression",i),r&&this.trigger("adStarted",i),t.getCompanionAdInstances().length){var n=this.utils.extend({},i);n.companions=t.getCompanionAdInstances(),this.trigger("adCompanions",n)}this.setState(e.adInstance,"playing")}},{key:"setTimeoutAdStart",value:function(){var e=this;clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((function(){if(!e.destroyed()){var t=e.adEventObject();t.message="Ad Error: Creative timeout",e.trigger(a,t),e.currentSlot.skipCurrentAd()}}),this.options.loadVideoTimeout)}},{key:"setAdBlockTimeout",value:function(){var t=this;this.player.getAdBlock()&&(clearTimeout(this.adBlockTimeout),this.adBlockTimeout=setTimeout((function(){t.destroyed()||t.adError({id:void 0,client:e,message:"Ad playback blocked by an ad blocker",code:900,adErrorCode:60003})}),this.options.adBlockTimeout))}},{key:"setVideoState",value:function(e){var t=e.type;if(this.adsLoaderManager&&this.adsLoaderManager.currentAdContext){var i={idle:tv.freewheel.SDK.VIDEO_STATE_STOPPED,play:tv.freewheel.SDK.VIDEO_STATE_PLAYING,pause:tv.freewheel.SDK.VIDEO_STATE_PAUSED,beforeComplete:tv.freewheel.SDK.VIDEO_STATE_COMPLETED};this.adsLoaderManager.currentAdContext.setVideoState(i[t])}}},{key:"adResume",value:function(e){var t=e.reason;this.hasResumed||(this.reason=t,this.currentSlot.resume()),this.hasResumed=!1}},{key:"adSkip",value:function(){var e=this.currentSlot,t=e.getCurrentAdInstance();if(t){var i=t.getPlayheadTime(),r=t.skipoffset;(void 0===r||i-r>=0)&&(clearInterval(this.progressIntervalId),this.trigger("adSkipped",this.adEventObject()),e.skipCurrentAd())}}},{key:"stopAd",value:function(){var e=this.currentSlot;e&&(clearInterval(this.progressIntervalId),this.trigger("adSkipped",this.adEventObject()),e.stop())}},{key:"adComplete",value:function(e){clearInterval(this.progressIntervalId),this.trigger("adComplete",this.adEventObject(e.adInstance))}},{key:"adSlotComplete",value:function(e){var t=this,i=e.slot;i&&"POSTROLL"===i.getTimePositionClass()?setTimeout((function(){t.stopBlocking(),t.nonlinearContainerId=null,t.destroy()}),0):(this.stopBlocking(),this.nonlinearContainerId=null)}},{key:"adClick",value:function(e){this.trigger("adClick",this.adEventObject(e.adInstance)),this.pause({reason:"clickthrough"})}},{key:"adError",value:function(e){var t=this;this.options.debug&&console.error(e);var i=this.adErrorEventObject(e);900===i.code&&(this.timeoutAdStart=setTimeout((function(){return t.destroy()}),0));var r=e?e.adInstance:null;r&&this.isPreroll(this.adEventObject(r))&&(this._qoe.tick("adError"),i.timeLoading=this._qoe.between("adLoading","adError")),this.trigger(a,i)}},{key:"updateAdPosition",value:function(e){this.instreamProvider&&this.instreamProvider.trigger(s,{position:Math.max(e.getPlayheadTime(),0),duration:e.getDuration()})}},{key:"prepareToPlayAd",value:function(e){if(!this.destroyed())if(this.blockingInstreamPlayer){var t=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(t)}else this.startBlocking(e)}},{key:"addMobileListeners",value:function(){var e=this;Object.keys(this.mobileEventListeners).forEach((function(t){e.video.addEventListener(t,e.mobileEventListeners[t])}))}},{key:"removeMobileListeners",value:function(){var e=this;Object.keys(this.mobileEventListeners).forEach((function(t){e.video.removeEventListener(t,e.mobileEventListeners[t])}))}},{key:"addPlayerListeners",value:function(){this.player.on(this.playerEventListeners,this)}},{key:"removePlayerListeners",value:function(){this.player.off(this.playerEventListeners,this)}},{key:"startBlocking",value:function(e){var t=this;if(!this.blockingInstreamPlayer){this._qoe.tick("adLoading"),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.timeoutAdLoad=setTimeout((function(){if(!t.destroyed()){t.currentSlot&&t.currentSlot.stop();var e=t.adEventObject();e.message="Ad Error: Request timeout",t.trigger(a,e),t.stopBlocking()}}),this.options.requestTimeout),this.utils.addClass(this.player.getContainer(),"jw-flag-ads-freewheel"),this.blockingInstreamPlayer=this.player.createInstream().init(),this.video=this.instreamProvider.video=this.blockingInstreamPlayer.getMediaElement(),this.video.addEventListener("mousedown",P),this.video.addEventListener("pointerdown",P);var i=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(i),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.environment.OS.mobile&&(this.removeMobileListeners(),this.addMobileListeners())}}},{key:"stopBlocking",value:function(){this.destroyed()||(clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.utils.removeClass(this.player.getContainer(),["jw-flag-ads-vpaid","jw-flag-ads-freewheel","jw-freewheel-before-impression"]),this.environment.OS.mobile&&this.removeMobileListeners(),this.blockingInstreamPlayer&&(this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null,this.video.removeEventListener("mousedown",P),this.video.removeEventListener("pointerdown",P),this.video=this.instreamProvider.video=null))}},{key:"setupNonlinearContainer",value:function(){if(this.nonlinearContainerId){var e=document.getElementById(this.nonlinearContainerId);this.utils.addClass(e,"jw-freewheel-nonlinear-container"),this.style(e,{top:"auto",height:"100%",width:"100%"})}}},{key:"beforePlay",value:function(e){var t=this;this.reason=e&&e.playReason?e.playReason:"external";var i=!this.slots.prerolls.length;this.startBlocking(i),this.utils.addClass(this.player.getContainer(),"jw-freewheel-before-impression"),this.initAdsManagerPromise.then((function(){t.setAdBlockTimeout(),t.adsLoaderManager.requestAds(t.player)})),this.adsLoadedPromise.then((function(e){!t.destroyed()&&e.success&&t.playNextAd(t.slots.prerolls)})).catch((function(e){return t.asyncError(e)}))}},{key:"playNextAd",value:function(e){if(e.length){var t=this.currentSlot=e.shift();if("OVERLAY"!==t.getTimePositionClass()){var i=!t.getAdCount();this.prepareToPlayAd(i),this.nonlinearContainerId=null}else this.utils.addClass(this.player.getContainer(),"jw-flag-ads-freewheel"),this.nonlinearContainerId="_fw_ad_container_html_"+this.currentSlot.getCustomId()+"_";this.setTimeoutAdStart(),t.play(),"MIDROLL"===t.getTimePositionClass()&&this.setVideoState({type:"pause"})}else this.stopBlocking()}},{key:"beforeComplete",value:function(){this.slots.postrolls.length&&this.playNextAd(this.slots.postrolls)}},{key:"time",value:function(e){if(this.slots.midrolls.length){var t=this.getNextMidRollIndex(e.position);if(t>=0){var i=[this.slots.midrolls[t]];this.playNextAd(i)}}}},{key:"progressInterval",value:function(e){var t=this;if(clearInterval(this.progressIntervalId),e){var i=e.getCurrentAdInstance(),r=e.getAdInstances().indexOf(i)+1,n=i.getDuration(),s=e.getAdCount(),a=-1,o=this.options.admessage||"",l=this.options.admessagedynamickey,d=this.options.podmessage||"",u=new RegExp("__AD_POD_CURRENT__","g"),h=new RegExp("__AD_POD_LENGTH__","g");this.progressIntervalId=setInterval((function(){var e=i.getPlayheadTime(),c=n-e;if(a!==c){if(a=c,t.blockingInstreamPlayer){var f=o.replace(l,"$1".concat(Math.round(c),"$2"));s>1&&(f=d.replace(u,r).replace(h,s)+"  "+f),t.blockingInstreamPlayer.setText(f)}if(n>0){var p=t.adEventObject(i);p.position=e,p.duration=n,t.trigger("adTime",p),t.updateAdPosition(i)}}}),250)}}},{key:"getNextMidRollIndex",value:function(e){var t=-1;if(this.playedMidrollIndex.length>=this.slots.midrolls.length)return t;for(var i=0;i<this.slots.midrolls.length;i++){if(!(this.slots.midrolls[i].getTimePosition()<=e))break;t=i}return this.playedMidrollIndex.indexOf(t)<0&&t>=0?(this.playedMidrollIndex.push(t),t):-1}},{key:"setState",value:function(e,t){if(this.currentSlot.getTimePositionClass()!==tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY){var i=this.adEventObject(e);if(i.newstate=t,null!==this.reason)i["playing"===t?"playReason":"pauseReason"]=this.reason,this.reason=null;this.instreamProvider.trigger("state",i)}}},{key:"asyncError",value:function(e){var t=this;this.destroyed()||(e&&this.adError(e),this.timeoutAdStart=setTimeout((function(){return t.destroy()}),0))}},{key:"pause",value:function(e){var t=e.reason;this.currentSlot&&!this.video.paused&&(this.reason=t||"external",this.currentSlot.pause())}},{key:"resume",value:function(e){var t=e.reason;this.currentSlot&&this.video.paused&&(this.reason=t||"external",this.currentSlot.resume(),this.hasResumed=!0)}},{key:"resize",value:function(e,t){var i=document.getElementById(this.nonlinearContainerId);if(i){var r=i.querySelector("iframe"),n=this.player.getSafeRegion(!0);this.style(r,{left:(n.width-r.offsetWidth)/2})}this.adsLoaderManager&&this.adsLoaderManager.currentAdContext&&e&&t&&this.adsLoaderManager.currentAdContext.resize(e,t)}},{key:"destroy",value:function(){clearInterval(this.progressIntervalId),this.off(),this.destroyed()||(this.removePlayerListeners(),this.currentSlot&&this.currentSlot.stop(),this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(null,null,this),this.stopBlocking()),this.adsLoaderManager&&this.adsLoaderManager.destroy(),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.nonlinearContainerId=null,this.item=null,this.options=null,this.player.off(null,null,this),this.player=null,this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.video=null,this.initAdsManagerPromise=null,this.adsLoadedPromise=null)}},{key:"destroyed",value:function(){return!this.item}},{key:"isPreroll",value:function(e){return"pre"===e.adposition&&(void 0===e.podcount||0===e.sequence)}}]),t}();function P(e){e.stopPropagation()}!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}(".jwplayer.jw-flag-ads-freewheel.jw-flag-floating .jw-wrapper,.jwplayer.jw-flag-ads-freewheel.jw-freewheel-before-impression .jw-media video{pointer-events:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-touch.jwplayer.jw-flag-ads-freewheel.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-user-inactive.jw-state-playing .jw-freewheel-nonlinear-container{bottom:.5em}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container{bottom:3.5em;pointer-events:none}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container iframe{pointer-events:all}.jwplayer.jw-flag-ads-freewheel.jw-flag-time-slider-above .jw-freewheel-nonlinear-container{bottom:66px}"),(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(e,"8.1",(function(i,r){var n=this,o=i.utils,l=i.getConfig(),d=l.key,u=new g(o,i.Events),h=r.freewheel?r.freewheel.adManagerURL:null,c=0;v(o,h).then((function(){r.debug?tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_DEBUG):tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_QUIET)})).catch(o.noop);var p=null;function y(){p&&!p.destroyed()&&(p.destroy(),p=null)}function E(){y(),i.setCues([])}function w(e,t){var n=e.item,s=new f(i.getConfig(),r||{},n);E(),function(e){var t=e.getAdRules(),i=0===t.frequency&&1===c,r=c>=t.startOn&&(c-t.startOn)%t.frequency==0;return i||r}(s)?s.getSchedule()&&((p=new I(n,s,i,u,t)).init(),p.on("all",(function(e,t){return i.trigger(e,t)})),i.once("beforePlay",(function(e){return p.beforePlay(e)}),p).on("resize",(function(e){var t=e.width,i=e.height;return p.resize(t,i)}),p).on("fullscreen",(function(){return p.resize()}),p).on("all",_,p)):s.adschedule=null}function _(e,t){e===s?p.time(t):"beforeComplete"===e&&p.beforeComplete()}o.extend(this,i.Events),this.version="2.2.12",i.pauseAd=function(e,t){p&&(e?p.pause(t||{}):p.resume(t||{}))},i.skipAd=function(){p&&p.adSkip()},i.on("ready",(function(){v().catch((function(){A("Ad playback blocked by an ad blocker",2e4)})),S.catch((function(e){A("Ad Error: "+e.message,60002)}))}),this).on("playlistItem",(function(e){c++,w(e,e.item.streamtype||l.streamtype)}),this).on("playlistComplete",(function(){E()}),this).on("cast",(function(e){e.active&&E()}),this).on("destroyPlugin",(function(){n.destroy()}),this);var A=function(r,s){y(),i.off(null,null,n),i.playAd=o.noop,i.trigger(a,{id:t,client:e,message:r,code:900,adErrorCode:s,tag:""})},S=function(e,t,i){var r=m[t];return r||(m[t]=new Promise((function(r,n){!function(i){var r=new e.key(t);if("unlimited"===r.edition())return i();var n=["//","entitlements.jwplayer.com","/",r.token(),".json"];"file:"===window.location.protocol&&n.unshift("https:"),e.ajax(n.join(""),(function(e){i(e&&e.response)}),(function(){i()}),{timeout:1e4,responseType:"json"})}((function(e){var t,s,a=e||{};!0===i.outstream?(t=!1!==a.canPlayOutstreamAds,s="Outstream Ad Limit Reached"):(t=!1!==a.canPlayAds,s="Ad Limit Reached"),!1!==t?r({message:"Can Play Ads"}):n({message:s})}))})))}(o,d,r);S.catch(o.noop),this.destroy=y,this.stopAd=function(){p&&p.stopAd()}}))}();
