(self.webpackChunkadmin_app=self.webpackChunkadmin_app||[]).push([[55],{5793:function(e,n,a){var t,l=a(2122).default,o=a(6690).default,r=a(9728).default,u=a(6115).default,i=a(1655).default,s=a(6389).default,c=a(4704).default,p=Object.create,y=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,h=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,v=function(e,n,a,t){if(n&&"object"===typeof n||"function"===typeof n){var l,o=c(f(n));try{var r=function(){var o=l.value;b.call(e,o)||o===a||y(e,o,{get:function(){return n[o]},enumerable:!(t=d(n,o))||t.enumerable})};for(o.s();!(l=o.n()).done;)r()}catch(u){o.e(u)}finally{o.f()}}return e},P=function(e,n,a){return function(e,n,a){n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a}(e,"symbol"!==typeof n?n+"":n,a),a},k={};!function(e,n){for(var a in n)y(e,a,{get:n[a],enumerable:!0})}(k,{default:function(){return C}}),e.exports=(t=k,v(y({},"__esModule",{value:!0}),t));var m=function(e,n,a){return a=null!=e?p(h(e)):{},v(!n&&e&&e.__esModule?a:y(a,"default",{value:e,enumerable:!0}),e)}(a(2791)),g=a(135),w=a(365),C=function(e){"use strict";i(a,e);var n=s(a);function a(){var e;return o(this,a),e=n.apply(this,arguments),P(u(e),"callPlayer",g.callPlayer),P(u(e),"playerID",e.props.config.playerId||"".concat("wistia-player-").concat((0,g.randomString)())),P(u(e),"onPlay",(function(){var n;return(n=e.props).onPlay.apply(n,arguments)})),P(u(e),"onPause",(function(){var n;return(n=e.props).onPause.apply(n,arguments)})),P(u(e),"onSeek",(function(){var n;return(n=e.props).onSeek.apply(n,arguments)})),P(u(e),"onEnded",(function(){var n;return(n=e.props).onEnded.apply(n,arguments)})),P(u(e),"onPlaybackRateChange",(function(){var n;return(n=e.props).onPlaybackRateChange.apply(n,arguments)})),P(u(e),"mute",(function(){e.callPlayer("mute")})),P(u(e),"unmute",(function(){e.callPlayer("unmute")})),e}return r(a,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this,a=this.props,t=a.playing,o=a.muted,r=a.controls,u=a.onReady,i=a.config,s=a.onError;(0,g.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((function(e){i.customControls&&i.customControls.forEach((function(n){return e.defineControl(n)})),window._wq=window._wq||[],window._wq.push({id:n.playerID,options:l({autoPlay:t,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:r,fullscreenButton:r,playbar:r,playbackRateControl:r,qualityControl:r,volumeControl:r,settingsControl:r,smallPlayButton:r},i.options),onReady:function(e){n.player=e,n.unbind(),n.player.bind("play",n.onPlay),n.player.bind("pause",n.onPause),n.player.bind("seek",n.onSeek),n.player.bind("end",n.onEnded),n.player.bind("playbackratechange",n.onPlaybackRateChange),u()}})}),s)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("time",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.url,n=e&&e.match(w.MATCH_URL_WISTIA)[1],a="wistia_embed wistia_async_".concat(n);return m.default.createElement("div",{id:this.playerID,key:n,className:a,style:{width:"100%",height:"100%"}})}}]),a}(m.Component);P(C,"displayName","Wistia"),P(C,"canPlay",w.canPlay.wistia),P(C,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerWistia.a551340e.chunk.js.map