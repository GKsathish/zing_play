(self.webpackChunkadmin_app=self.webpackChunkadmin_app||[]).push([[743],{7600:function(e,n,t){var r,o=t(2122).default,a=t(6690).default,l=t(9728).default,u=t(6115).default,i=t(1655).default,s=t(6389).default,p=t(4704).default,c=Object.create,f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,h=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,m=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var o,a=p(d(n));try{var l=function(){var a=o.value;v.call(e,a)||a===t||f(e,a,{get:function(){return n[a]},enumerable:!(r=y(n,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)l()}catch(u){a.e(u)}finally{a.f()}}return e},k=function(e,n,t){return function(e,n,t){n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},b={};!function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})}(b,{default:function(){return M}}),e.exports=(r=b,m(f({},"__esModule",{value:!0}),r));var P=function(e,n,t){return t=null!=e?c(h(e)):{},m(!n&&e&&e.__esModule?t:f(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),g=t(135),O=t(365),w=function(e){return e.replace("/manage/videos","")},M=function(e){"use strict";i(t,e);var n=s(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),k(u(e),"callPlayer",g.callPlayer),k(u(e),"duration",null),k(u(e),"currentTime",null),k(u(e),"secondsLoaded",null),k(u(e),"mute",(function(){e.setMuted(!0)})),k(u(e),"unmute",(function(){e.setMuted(!1)})),k(u(e),"ref",(function(n){e.container=n})),e}return l(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;this.duration=null,(0,g.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((function(t){if(n.container){var r=n.props.config,a=r.playerOptions,l=r.title;n.player=new t.Player(n.container,o({url:w(e),autoplay:n.props.playing,muted:n.props.muted,loop:n.props.loop,playsinline:n.props.playsinline,controls:n.props.controls},a)),n.player.ready().then((function(){var e=n.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",l&&(e.title=l)})).catch(n.props.onError),n.player.on("loaded",(function(){n.props.onReady(),n.refreshDuration()})),n.player.on("play",(function(){n.props.onPlay(),n.refreshDuration()})),n.player.on("pause",n.props.onPause),n.player.on("seeked",(function(e){return n.props.onSeek(e.seconds)})),n.player.on("ended",n.props.onEnded),n.player.on("error",n.props.onError),n.player.on("timeupdate",(function(e){var t=e.seconds;n.currentTime=t})),n.player.on("progress",(function(e){var t=e.seconds;n.secondsLoaded=t})),n.player.on("bufferstart",n.props.onBuffer),n.player.on("bufferend",n.props.onBufferEnd),n.player.on("playbackratechange",(function(e){return n.props.onPlaybackRateChange(e.playbackRate)}))}}),this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then((function(n){e.duration=n}))}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setMuted",value:function(e){this.callPlayer("setMuted",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e={width:"100%",height:"100%",overflow:"hidden",display:this.props.display};return P.default.createElement("div",{key:this.props.url,ref:this.ref,style:e})}}]),t}(P.Component);k(M,"displayName","Vimeo"),k(M,"canPlay",O.canPlay.vimeo),k(M,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.16530b2f.chunk.js.map