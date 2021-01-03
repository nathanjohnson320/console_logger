!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ConsoleLogger=t():e.ConsoleLogger=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(t){e.exports=t.Phoenix=n(2)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return n}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}n.r(t),n.d(t,"Channel",(function(){return O})),n.d(t,"Serializer",(function(){return P})),n.d(t,"Socket",(function(){return A})),n.d(t,"LongPoll",(function(){return L})),n.d(t,"Ajax",(function(){return x})),n.d(t,"Presence",(function(){return _}));var h="undefined"!=typeof self?self:null,f="undefined"!=typeof window?window:null,d=h||f||void 0,p="closed",v="errored",y="joined",g="joining",m="leaving",b="phx_close",k="phx_error",j="phx_join",w="phx_reply",C="phx_leave",E=[b,k,j,w,C],R="websocket",S=function(e){return"function"==typeof e?e:function(){return e}},T=function(){function e(t,n,o,i){c(this,e),this.channel=t,this.event=n,this.payload=o||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}return l(e,[{key:"resend",value:function(e){this.timeout=e,this.reset(),this.send()}},{key:"send",value:function(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}},{key:"receive",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:"reset",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}},{key:"matchReceive",value:function(e){var t=e.status,n=e.response;e.ref,this.recHooks.filter((function(e){return e.status===t})).forEach((function(e){return e.callback(n)}))}},{key:"cancelRefEvent",value:function(){this.refEvent&&this.channel.off(this.refEvent)}},{key:"cancelTimeout",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}},{key:"startTimeout",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,(function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t)})),this.timeoutTimer=setTimeout((function(){e.trigger("timeout",{})}),this.timeout)}},{key:"hasReceived",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:"trigger",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}}]),e}(),O=function(){function e(t,n,o){var i=this;c(this,e),this.state=p,this.topic=t,this.params=S(n||{}),this.socket=o,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new T(this,j,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new D((function(){i.socket.isConnected()&&i.rejoin()}),this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError((function(){return i.rejoinTimer.reset()}))),this.stateChangeRefs.push(this.socket.onOpen((function(){i.rejoinTimer.reset(),i.isErrored()&&i.rejoin()}))),this.joinPush.receive("ok",(function(){i.state=y,i.rejoinTimer.reset(),i.pushBuffer.forEach((function(e){return e.send()})),i.pushBuffer=[]})),this.joinPush.receive("error",(function(){i.state=v,i.socket.isConnected()&&i.rejoinTimer.scheduleTimeout()})),this.onClose((function(){i.rejoinTimer.reset(),i.socket.hasLogger()&&i.socket.log("channel","close ".concat(i.topic," ").concat(i.joinRef())),i.state=p,i.socket.remove(i)})),this.onError((function(e){i.socket.hasLogger()&&i.socket.log("channel","error ".concat(i.topic),e),i.isJoining()&&i.joinPush.reset(),i.state=v,i.socket.isConnected()&&i.rejoinTimer.scheduleTimeout()})),this.joinPush.receive("timeout",(function(){i.socket.hasLogger()&&i.socket.log("channel","timeout ".concat(i.topic," (").concat(i.joinRef(),")"),i.joinPush.timeout),new T(i,C,S({}),i.timeout).send(),i.state=v,i.joinPush.reset(),i.socket.isConnected()&&i.rejoinTimer.scheduleTimeout()})),this.on(w,(function(e,t){i.trigger(i.replyEventName(t),e)}))}return l(e,[{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}},{key:"onClose",value:function(e){this.on(b,e)}},{key:"onError",value:function(e){return this.on(k,(function(t){return e(t)}))}},{key:"on",value:function(e,t){var n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}},{key:"off",value:function(e,t){this.bindings=this.bindings.filter((function(n){return!(n.event===e&&(void 0===t||t===n.ref))}))}},{key:"canPush",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:"push",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(!this.joinedOnce)throw new Error("tried to push '".concat(e,"' to '").concat(this.topic,"' before joining. Use channel.join() before pushing events"));var o=new T(this,e,(function(){return t}),n);return this.canPush()?o.send():(o.startTimeout(),this.pushBuffer.push(o)),o}},{key:"leave",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=m;var n=function(){e.socket.hasLogger()&&e.socket.log("channel","leave ".concat(e.topic)),e.trigger(b,"leave")},o=new T(this,C,S({}),t);return o.receive("ok",(function(){return n()})).receive("timeout",(function(){return n()})),o.send(),this.canPush()||o.trigger("ok",{}),o}},{key:"onMessage",value:function(e,t,n){return t}},{key:"isLifecycleEvent",value:function(e){return E.indexOf(e)>=0}},{key:"isMember",value:function(e,t,n,o){return!(this.topic!==e||o&&o!==this.joinRef()&&this.isLifecycleEvent(t)&&(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:n,joinRef:o}),1))}},{key:"joinRef",value:function(){return this.joinPush.ref}},{key:"rejoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=g,this.joinPush.resend(e))}},{key:"trigger",value:function(e,t,n,o){var i=this.onMessage(e,t,n,o);if(t&&!i)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");for(var r=this.bindings.filter((function(t){return t.event===e})),s=0;s<r.length;s++)r[s].callback(i,n,o||this.joinRef())}},{key:"replyEventName",value:function(e){return"chan_reply_".concat(e)}},{key:"isClosed",value:function(){return this.state===p}},{key:"isErrored",value:function(){return this.state===v}},{key:"isJoined",value:function(){return this.state===y}},{key:"isJoining",value:function(){return this.state===g}},{key:"isLeaving",value:function(){return this.state===m}}]),e}(),P={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode:function(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));var n=r(JSON.parse(e),5);return t({join_ref:n[0],ref:n[1],topic:n[2],event:n[3],payload:n[4]})},binaryEncode:function(e){var t=e.join_ref,n=e.ref,o=e.event,i=e.topic,r=e.payload,s=this.META_LENGTH+t.length+n.length+i.length+o.length,a=new ArrayBuffer(this.HEADER_LENGTH+s),c=new DataView(a),u=0;c.setUint8(u++,this.KINDS.push),c.setUint8(u++,t.length),c.setUint8(u++,n.length),c.setUint8(u++,i.length),c.setUint8(u++,o.length),Array.from(t,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(n,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(i,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(o,(function(e){return c.setUint8(u++,e.charCodeAt(0))}));var l=new Uint8Array(a.byteLength+r.byteLength);return l.set(new Uint8Array(a),0),l.set(new Uint8Array(r),a.byteLength),l.buffer},binaryDecode:function(e){var t=new DataView(e),n=t.getUint8(0),o=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,o);case this.KINDS.reply:return this.decodeReply(e,t,o);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,o)}},decodePush:function(e,t,n){var o=t.getUint8(1),i=t.getUint8(2),r=t.getUint8(3),s=this.HEADER_LENGTH+this.META_LENGTH-1,a=n.decode(e.slice(s,s+o));s+=o;var c=n.decode(e.slice(s,s+i));s+=i;var u=n.decode(e.slice(s,s+r));return s+=r,{join_ref:a,ref:null,topic:c,event:u,payload:e.slice(s,e.byteLength)}},decodeReply:function(e,t,n){var o=t.getUint8(1),i=t.getUint8(2),r=t.getUint8(3),s=t.getUint8(4),a=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(a,a+o));a+=o;var u=n.decode(e.slice(a,a+i));a+=i;var l=n.decode(e.slice(a,a+r));a+=r;var h=n.decode(e.slice(a,a+s));a+=s;var f=e.slice(a,e.byteLength);return{join_ref:c,ref:u,topic:l,event:w,payload:{status:h,response:f}}},decodeBroadcast:function(e,t,n){var o=t.getUint8(1),i=t.getUint8(2),r=this.HEADER_LENGTH+2,s=n.decode(e.slice(r,r+o));r+=o;var a=n.decode(e.slice(r,r+i));return r+=i,{join_ref:null,ref:null,topic:s,event:a,payload:e.slice(r,e.byteLength)}}},A=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=o.timeout||1e4,this.transport=o.transport||d.WebSocket||L,this.defaultEncoder=P.encode.bind(P),this.defaultDecoder=P.decode.bind(P),this.closeWasClean=!1,this.unloaded=!1,this.binaryType=o.binaryType||"arraybuffer",this.transport!==L?(this.encode=o.encode||this.defaultEncoder,this.decode=o.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),f&&f.addEventListener&&f.addEventListener("unload",(function(e){n.conn&&(n.unloaded=!0,n.abnormalClose("unloaded"))})),this.heartbeatIntervalMs=o.heartbeatIntervalMs||3e4,this.rejoinAfterMs=function(e){return o.rejoinAfterMs?o.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4},this.reconnectAfterMs=function(e){return n.unloaded?100:o.reconnectAfterMs?o.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3},this.logger=o.logger||null,this.longpollerTimeout=o.longpollerTimeout||2e4,this.params=S(o.params||{}),this.endPoint="".concat(t,"/").concat(R),this.vsn=o.vsn||"2.0.0",this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new D((function(){n.teardown((function(){return n.connect()}))}),this.reconnectAfterMs)}return l(e,[{key:"protocol",value:function(){return location.protocol.match(/^https/)?"wss":"ws"}},{key:"endPointURL",value:function(){var e=x.appendParams(x.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return"/"!==e.charAt(0)?e:"/"===e.charAt(1)?"".concat(this.protocol(),":").concat(e):"".concat(this.protocol(),"://").concat(location.host).concat(e)}},{key:"disconnect",value:function(e,t,n){this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,n)}},{key:"connect",value:function(e){var t=this;e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=S(e)),this.conn||(this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)})}},{key:"log",value:function(e,t,n){this.logger(e,t,n)}},{key:"hasLogger",value:function(){return null!==this.logger}},{key:"onOpen",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}},{key:"onClose",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}},{key:"onError",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}},{key:"onMessage",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}},{key:"onConnOpen",value:function(){this.hasLogger()&&this.log("transport","connected to ".concat(this.endPointURL())),this.unloaded=!1,this.closeWasClean=!1,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach((function(e){return(0,r(e,2)[1])()}))}},{key:"resetHeartbeat",value:function(){var e=this;this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval((function(){return e.sendHeartbeat()}),this.heartbeatIntervalMs))}},{key:"teardown",value:function(e,t,n){var o=this;if(!this.conn)return e&&e();this.waitForBufferDone((function(){o.conn&&(t?o.conn.close(t,n||""):o.conn.close()),o.waitForSocketClosed((function(){o.conn&&(o.conn.onclose=function(){},o.conn=null),e&&e()}))}))}},{key:"waitForBufferDone",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;5!==n&&this.conn&&this.conn.bufferedAmount?setTimeout((function(){t.waitForBufferDone(e,n+1)}),150*n):e()}},{key:"waitForSocketClosed",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;5!==n&&this.conn&&3!==this.conn.readyState?setTimeout((function(){t.waitForSocketClosed(e,n+1)}),150*n):e()}},{key:"onConnClose",value:function(e){this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((function(t){return(0,r(t,2)[1])(e)}))}},{key:"onConnError",value:function(e){this.hasLogger()&&this.log("transport",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach((function(t){return(0,r(t,2)[1])(e)}))}},{key:"triggerChanError",value:function(){this.channels.forEach((function(e){e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(k)}))}},{key:"connectionState",value:function(){switch(this.conn&&this.conn.readyState){case 0:return"connecting";case 1:return"open";case 2:return"closing";default:return"closed"}}},{key:"isConnected",value:function(){return"open"===this.connectionState()}},{key:"remove",value:function(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter((function(t){return t.joinRef()!==e.joinRef()}))}},{key:"off",value:function(e){for(var t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter((function(t){var n=r(t,1)[0];return-1===e.indexOf(n)}))}},{key:"channel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new O(e,t,this);return this.channels.push(n),n}},{key:"push",value:function(e){var t=this;if(this.hasLogger()){var n=e.topic,o=e.event,i=e.payload,r=e.ref,s=e.join_ref;this.log("push","".concat(n," ").concat(o," (").concat(s,", ").concat(r,")"),i)}this.isConnected()?this.encode(e,(function(e){return t.conn.send(e)})):this.sendBuffer.push((function(){return t.encode(e,(function(e){return t.conn.send(e)}))}))}},{key:"makeRef",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:"sendHeartbeat",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void this.abnormalClose("heartbeat timeout");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef})}}},{key:"abnormalClose",value:function(e){this.closeWasClean=!1,1===this.conn.readyState&&this.conn.close(1e3,e)}},{key:"flushSendBuffer",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((function(e){return e()})),this.sendBuffer=[])}},{key:"onConnMessage",value:function(e){var t=this;this.decode(e.data,(function(e){var n=e.topic,o=e.event,i=e.payload,s=e.ref,a=e.join_ref;s&&s===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.hasLogger()&&t.log("receive","".concat(i.status||""," ").concat(n," ").concat(o," ").concat(s&&"("+s+")"||""),i);for(var c=0;c<t.channels.length;c++){var u=t.channels[c];u.isMember(n,o,i,a)&&u.trigger(o,i,s,a)}for(var l=0;l<t.stateChangeCallbacks.message.length;l++)(0,r(t.stateChangeCallbacks.message[l],2)[1])(e)}))}},{key:"leaveOpenTopic",value:function(e){var t=this.channels.find((function(t){return t.topic===e&&(t.isJoined()||t.isJoining())}));t&&(this.hasLogger()&&this.log("transport",'leaving duplicate topic "'.concat(e,'"')),t.leave())}}]),e}(),L=function(){function e(t){c(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=0,this.poll()}return l(e,[{key:"normalizeEndpoint",value:function(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+R),"$1/longpoll")}},{key:"endpointURL",value:function(){return x.appendParams(this.pollEndpoint,{token:this.token})}},{key:"closeAndRetry",value:function(){this.close(),this.readyState=0}},{key:"ontimeout",value:function(){this.onerror("timeout"),this.closeAndRetry()}},{key:"poll",value:function(){var e=this;1!==this.readyState&&0!==this.readyState||x.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),(function(t){if(t){var n=t.status,o=t.token,i=t.messages;e.token=o}else n=0;switch(n){case 200:i.forEach((function(t){return e.onmessage({data:t})})),e.poll();break;case 204:e.poll();break;case 410:e.readyState=1,e.onopen(),e.poll();break;case 403:e.onerror(),e.close();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw new Error("unhandled poll status ".concat(n))}}))}},{key:"send",value:function(e){var t=this;x.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),(function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry())}))}},{key:"close",value:function(e,t){this.readyState=3,this.onclose()}}]),e}(),x=function(){function e(){c(this,e)}return l(e,null,[{key:"request",value:function(e,t,n,o,i,r,s){if(d.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,o,i,r,s)}else{var c=new d.XMLHttpRequest;this.xhrRequest(c,e,t,n,o,i,r,s)}}},{key:"xdomainRequest",value:function(e,t,n,o,i,r,s){var a=this;e.timeout=i,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t)},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(o)}},{key:"xhrRequest",value:function(e,t,n,o,i,r,s,a){var c=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader("Content-Type",o),e.onerror=function(){a&&a(null)},e.onreadystatechange=function(){if(e.readyState===c.states.complete&&a){var t=c.parseJSON(e.responseText);a(t)}},s&&(e.ontimeout=s),e.send(i)}},{key:"parseJSON",value:function(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}},{key:"serialize",value:function(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var r=t?"".concat(t,"[").concat(o,"]"):o,s=e[o];"object"===i(s)?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return n.join("&")}},{key:"appendParams",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\?/)?"&":"?";return"".concat(e).concat(n).concat(this.serialize(t))}}]),e}();x.states={complete:4};var _=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e);var i=o.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,(function(t){var o=n.caller,i=o.onJoin,r=o.onLeave,s=o.onSync;n.joinRef=n.channel.joinRef(),n.state=e.syncState(n.state,t,i,r),n.pendingDiffs.forEach((function(t){n.state=e.syncDiff(n.state,t,i,r)})),n.pendingDiffs=[],s()})),this.channel.on(i.diff,(function(t){var o=n.caller,i=o.onJoin,r=o.onLeave,s=o.onSync;n.inPendingSyncState()?n.pendingDiffs.push(t):(n.state=e.syncDiff(n.state,t,i,r),s())}))}return l(e,[{key:"onJoin",value:function(e){this.caller.onJoin=e}},{key:"onLeave",value:function(e){this.caller.onLeave=e}},{key:"onSync",value:function(e){this.caller.onSync=e}},{key:"list",value:function(t){return e.list(this.state,t)}},{key:"inPendingSyncState",value:function(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}}],[{key:"syncState",value:function(e,t,n,o){var i=this,r=this.clone(e),s={},a={};return this.map(r,(function(e,n){t[e]||(a[e]=n)})),this.map(t,(function(e,t){var n=r[e];if(n){var o=t.metas.map((function(e){return e.phx_ref})),c=n.metas.map((function(e){return e.phx_ref})),u=t.metas.filter((function(e){return c.indexOf(e.phx_ref)<0})),l=n.metas.filter((function(e){return o.indexOf(e.phx_ref)<0}));u.length>0&&(s[e]=t,s[e].metas=u),l.length>0&&(a[e]=i.clone(n),a[e].metas=l)}else s[e]=t})),this.syncDiff(r,{joins:s,leaves:a},n,o)}},{key:"syncDiff",value:function(e,t,n,i){var r=t.joins,s=t.leaves,a=this.clone(e);return n||(n=function(){}),i||(i=function(){}),this.map(r,(function(e,t){var i=a[e];if(a[e]=t,i){var r,s=a[e].metas.map((function(e){return e.phx_ref})),c=i.metas.filter((function(e){return s.indexOf(e.phx_ref)<0}));(r=a[e].metas).unshift.apply(r,o(c))}n(e,i,t)})),this.map(s,(function(e,t){var n=a[e];if(n){var o=t.metas.map((function(e){return e.phx_ref}));n.metas=n.metas.filter((function(e){return o.indexOf(e.phx_ref)<0})),i(e,n,t),0===n.metas.length&&delete a[e]}})),a}},{key:"list",value:function(e,t){return t||(t=function(e,t){return t}),this.map(e,(function(e,n){return t(e,n)}))}},{key:"map",value:function(e,t){return Object.getOwnPropertyNames(e).map((function(n){return t(n,e[n])}))}},{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}}]),e}(),D=function(){function e(t,n){c(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return l(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}()}])},function(e,t,n){(function(t){e.exports=t.ConsoleLogger=n(3)}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=new o.Socket("/socket",{params:{token:window.userToken}});a.connect(),t.default=function(){var e=a.channel("console:log",{});e.join().receive("ok",(function(){"toJSON"in Error.prototype||Object.defineProperty(Error.prototype,"toJSON",{value:function(){var e={};return Object.getOwnPropertyNames(this).forEach((function(t){e[t]=this[t]}),this),e},configurable:!0,writable:!0});var t,n=r(r({},t=window.console),{},{log:function(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];(n=t.log).apply.apply(n,i),e.push("log",i)},info:function(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];(n=t.info).apply.apply(n,i),e.push("info",i)},warn:function(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];(n=t.warn).apply.apply(n,i),e.push("warn",i)},error:function(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];(n=t.error).apply.apply(n,i),e.push("error",i)}});window.console=n})).receive("error",(function(e){console.log("Unable to join",e)}))}}])}));