var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);
}
return t;
};
define("pages_new/common_share/video/player/plugins/danmu/danmu.js",["icon/emotion_panel/weemoji_panel.css","biz_wap/utils/ajax.js","pages_new/common_share/video/player/plugins/base.js","pages_new/common_share/video/player/plugins/danmu/input.html.js","pages_new/common_share/video/player/plugins/danmu/danmu_util.js","common/keyboard.js","biz_common/utils/url/parse.js","appmsg/emotion/weemoji.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/utils/storage.js","biz_wap/utils/jsmonitor_report.js","pages_new/3rd/vuex.js","page/pages/video_mod/video_danmu.css"],function(t){
"use strict";
t("icon/emotion_panel/weemoji_panel.css");
var e=t("biz_wap/utils/ajax.js"),i=t("pages_new/common_share/video/player/plugins/base.js"),n=t("pages_new/common_share/video/player/plugins/danmu/input.html.js"),s=t("pages_new/common_share/video/player/plugins/danmu/danmu_util.js"),r=t("common/keyboard.js"),o=t("biz_common/utils/url/parse.js"),a=t("appmsg/emotion/weemoji.js"),u=a.EmojiData||[],l=t("biz_wap/utils/mmversion.js"),c=t("biz_wap/jsapi/core.js"),m=t("biz_wap/utils/storage.js"),d=t("biz_wap/utils/jsmonitor_report.js"),h=t("pages_new/3rd/vuex.js"),p=h.mapState,_=h.mapMutations,f="xs",g="s",w=3,v=6,y=.6,S=.6,b=31536e7,j=2,I='<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single we-emoji #name#" alt="" />',P={
"default":"无法发弹幕",
1:"关注可发",
2:"关注7天可发"
},x={
"default":"无法发弹幕",
1:"关注后可发弹幕",
2:"关注7天后可发弹幕"
},T=i.extend({
name:"danmu-plugin",
template:n,
data:function(){
return{
step:1/0,
buffer:"",
inputTime:0,
switchOn:!1,
requestCnt:0,
text:""
};
},
computed:_extends({},p({
bizUin:function(t){
return t.cgiData.biz||0;
},
msgId:function(t){
return t.cgiData.mid||0;
},
idx:function(t){
return t.cgiData.idx||0;
},
vid:function(t){
return(t.cgiData.txvideo_vid?t.cgiData.txvideo_vid:t.cgiData.vid)||0;
}
}),p("mp-video-player",["fullscreenStatus","seekingStatus","orientationStatus"]),p("mp-video-player/danmu-plugin",["inputStatus","danmuInfo"]),{
playerWidth:function(){
return this.controller.getPlayer().width;
},
fullscreenType:function(){
return this.fullscreenStatus?0===this.orientationStatus?2:3:1;
},
inputPlaceholder:function(){
if(!this.fullscreenStatus){
var t=this.controller&&this.controller.getPlayer().width,e=this.controller&&this.controller.getPlayer().duration;
if(e&&e>=3600)return"弹幕";
if(347>t)return"弹幕";
}
return this.danmuInfo&&!this.danmuInfo.isAllowPost?P[this.danmuInfo.reasonId]||P.default:2===this.inputStatus?"正在输入...":"发送弹幕";
},
inputBarConfig:function(){
var t=this;
return{
maxLength:30,
text:this.text,
fallbackIfUnsupport:!0,
forceFallback:l.isAndroid,
isFullscreen:this.fullscreenStatus,
isLandscape:1===this.orientationStatus,
success:function(e){
t.submitDanmu(e.replace(/\n/g," ")),t.text="";
},
cancel:function(e){
t.text=e;
},
input:function(e){
t.setInputStatus({
value:e?2:1
});
},
show:function(){
t.fullscreenStatus&&t.controller.getPlayer().preventOperating(2),t.controller.getPlayer().showControlBar(),
t.setInputStatus({
value:1
});
},
hide:function(){
t.controller.getPlayer().hideControlBarAfterTimeout(),t.controller.getPlayer().resumeOperating(),
t.setInputStatus({
value:0
});
}
};
},
display:function(){
if(!this.fullscreenStatus){
var t=this.controller&&this.controller.getPlayer().width,e=this.controller&&this.controller.getPlayer().duration;
if(e&&e>=3600){
if(378>t)return!1;
}else if(312>t)return!1;
}
return!0;
}
}),
mounted:function(){
this.LS=new m("video_danmu_plugin");
},
beforeDestroy:function(){
this.controller.__danmuUtil&&(this.controller.__danmuUtil.switchOff(),this.controller.__danmuUtil.list.reset());
},
methods:_extends({},_("mp-video-player",["setEnter23439ReportExData"]),_("mp-video-player/danmu-plugin",["setInputStatus","setDanmuInfo"]),{
initPlugin:function(){
var t=this,i=setTimeout(function(){
return d.setSum(221764,4,1);
},5e3);
e({
type:"GET",
dataType:"json",
url:o.join("/mp/danmu?action=get_danmu_info",{
__biz:this.bizUin,
vid:this.vid
}),
success:function(e){
if(e&&e.base_resp&&1*e.base_resp.ret===0){
var i=-1!==[9,70,10002].indexOf(1*window.appmsg_type)&&!!e.is_allow_danmu;
if(t.setDanmuInfo({
isAllow:i,
isAllowPost:!!e.is_allow_post_danmu,
unitId:e.unit_id,
reasonId:e.reason_id
}),console.log("[Danmu Plugin Get Info]",t.danmuInfo,e),t.danmuInfo&&(t.controller.triggerEvent("getDanmuInfo",t.danmuInfo),
t.setEnter23439ReportExData({
UserDanMuFlag:t.danmuInfo.isAllow?t.danmuInfo.isAllowPost?1:t.danmuInfo.reasonId+1:4
})),!t.danmuInfo||!t.danmuInfo.isAllow)return;
t.init(),d.setSum(221764,1,1);
}else console.error("[Danmu Plugin Get Info Ret != 0]",e),d.setSum(221764,2,1);
},
error:function(t,e){
console.error("[Danmu Plugin Get Info Error]",e),d.setSum(221764,3,1);
},
complete:function(){
clearTimeout(i),t.controller.triggerEvent("danmuPluginInited");
}
});
},
init:function(){
this.controller.__danmuUtil||($(this.controller.$el).find(".js_page_video").append('<div aria-live="assertive" aria-atomic="false" aira-relevant="removals" class="js_video_danmu danmu_full"></div>'),
this.controller.__danmuUtil=new s({
wrapper:$(this.controller.$el).find(".js_video_danmu")[0],
fontSize:this.fullscreenStatus?g:f,
userNum:this.fullscreenStatus?v:w,
rate:this.fullscreenStatus?S:y
}),t("page/pages/video_mod/video_danmu.css")),this.switchOn="number"==typeof this.LS.get("switch")?1===this.LS.get("switch"):!0,
this.triggerDanmuSwitch(!0);
},
triggerDanmuSwitch:function(t){
t||(this.switchOn=!this.switchOn,this.LS.set("switch",this.switchOn?1:2,Date.now()+b),
d.setSum(221764,this.switchOn?14:15,1),e({
type:"POST",
url:"/mp/danmu?action=report_switch",
dataType:"json",
data:{
__biz:this.bizUin,
unit_id:this.danmuInfo.unitId,
vid:this.vid,
time_point:this.getCurTime(),
video_duration:this.controller.getPlayer().duration,
appmsgid:this.msgId,
idx:this.idx,
switch_option:this.switchOn?1:0,
enterid:window.enterid||0,
fullscreen_type:this.fullscreenType,
item_show_type:o.getQuery("item_show_type")||window.item_show_type||window.cgiData.item_show_type
}
})),this.switchOn?(this.step=this.getCurTime(),this.controller.__danmuUtil.switchOn(),
this.controller.getPlayer().isPause()&&this.controller.__danmuUtil.pause()):(this.step=1/0,
this.controller.__danmuUtil.switchOff(),this.controller.__danmuUtil.list.reset()),
this.setEnter23439ReportExData({
isDanShow:this.switchOn?1:2
});
},
statusChangeHandler:function(t,e){
this.switchOn&&("loading"===e.status&&"seeked"===e.subStatus?(this.step=this.parseTime(e.currentTime),
this.controller.__danmuUtil._clear(),this.controller.__danmuUtil.list.reset()):"play"===e.status?this.controller.__danmuUtil.switchOn():"pause"===e.status?this.controller.__danmuUtil.pause():"end"===e.status&&(this.controller.__danmuUtil.switchOff(),
this.controller.__danmuUtil.list.reset(),this.step=0));
},
timeupdateHandler:function(t,e){
if(this.switchOn&&!this.seekingStatus){
var i=parseInt(e.currentTime,10);
this.controller.__danmuUtil.updateTime(i),i>this.step-j&&(this.requestDanmu(),this.step=this.getCurTime(5));
}
},
fullscreenchangeHandler:function(t,e){
r.hide(),this.controller&&(this.controller.__danmuUtil&&(this.controller.__danmuUtil.setFont(e.state?g:f),
this.controller.__danmuUtil.setLine(e.state?v:w),this.controller.__danmuUtil.setRate(e.state?S:y)),
l.isAndroid&&$(this.controller.$el).find(".js_video_danmu .txp_barrage_external").css("top",e.state?this.controller.getPlayer().getSafeAreaInsets().top+16+"px":"0px"));
},
onInputClick:function(){
this.danmuInfo.isAllowPost?window.is_temp_url?c.invoke("confirmDialog",{
title:"Unable to do this in preview",
contentDesc:"",
confirmText:"OK"
}):(this.inputTime=this.getCurTime(),r.show(this.inputBarConfig)):this.controller.getPlayer().showToast(x[this.danmuInfo.reasonId]||x.default,2e3);
},
onSwitchClick:function(){
this.controller.getPlayer().hideControlBarAfterTimeout(),this.triggerDanmuSwitch();
},
submitDanmu:function(t){
var i=this;
if(t&&this.switchOn){
this.controller.__danmuUtil.add({
html:'<div class="danmu_self">'+this.decodeEmoji(t.html(!0))+"</div>",
contentLength:t.length,
mustShow:!0
});
var n=setTimeout(function(){
return d.setSum(221764,12,1);
},5e3);
e({
type:"POST",
url:"/mp/danmu?action=post_danmu",
dataType:"json",
data:{
__biz:this.bizUin,
unit_id:this.danmuInfo.unitId,
content:t,
vid:this.vid,
time_point:this.inputTime,
video_duration:this.controller.getPlayer().duration,
appmsgid:this.msgId,
idx:this.idx,
enterid:window.enterid||0,
fullscreen_type:this.fullscreenType,
item_show_type:o.getQuery("item_show_type")||window.item_show_type||window.cgiData.item_show_type
},
success:function(t){
if(t&&t.base_resp){
var e=1*t.base_resp.ret;
switch(e){
case 0:
return i.controller.getPlayer().showSubscribeBtn(),void d.setSum(221764,9,1);

case 2:
d.setSum(221764,13,1);
}
}
console.error("[Danmu Plugin Submit Ret != 0]",t),d.setSum(221764,10,1);
},
error:function(t,e){
console.error("[Danmu Plugin Submit Error]",e),d.setSum(221764,11,1);
},
complete:function(){
return clearTimeout(n);
}
});
}
},
requestDanmu:function(){
var t=this;
if(this.switchOn){
var i=setTimeout(function(){
return d.setSum(221764,8,1);
},3e3),n=++this.requestCnt,s=[];
e({
type:"GET",
dataType:"json",
url:o.join("/mp/danmu?action=pull_danmu",{
__biz:this.bizUin,
unit_id:this.danmuInfo.unitId,
vid:this.vid,
buffer:this.buffer,
step:this.step
}),
success:function(e){
if(n!==t.requestCnt)return console.warn("[Danmu Plugin Abort Pull Resp]",n,t.requestCnt,e),
void d.setSum(221764,16,1);
if(console.log("[Danmu Plugin Pull Resp]",e),e&&e.base_resp&&1*e.base_resp.ret===0){
var i=void 0;
try{
i=JSON.parse(e.json);
}catch(r){
i={};
}
t.step=i.next_step||t.step,t.buffer=i.buffer||t.buffer;
var o=i.list||[];
if(o.length){
for(var a=t.getCurTime(1),u=0;u<o.length;u++){
var l=o[u],c={
html:t.decodeEmoji(l.content),
index:Math.max(l.time_point,a),
contentLength:l.content.length,
mustShow:!!l.is_self
};
c&&s.push(c);
}
s.length&&(t.controller.__danmuUtil.list.reset(),t.controller.__danmuUtil.add(s));
}
d.setSum(221764,5,1);
}else console.error("[Danmu Plugin Pull Ret != 0]",e),d.setSum(221764,6,1);
},
error:function(t,e){
console.error("[Danmu Plugin Pull Error]",e),d.setSum(221764,7,1);
},
complete:function(){
return clearTimeout(i);
}
});
}
},
decodeEmoji:function(t){
if(!/\[[^\[\]]+\]/.test(t))return t;
for(var e=0,i=u.length;i>e;e++){
var n=u[e],s=I.replace("#name#",n.style);
if(n.cn){
var r=new RegExp("\\["+n.cn.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(r,s);
}
if(n.hk){
var o=new RegExp("\\["+n.hk.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(o,s);
}
if(n.us){
var a=new RegExp("\\["+n.us.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(a,s);
}
}
return t;
},
getCurTime:function(){
var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=this.controller&&this.controller.getPlayer()&&this.controller.getPlayer().$refs.video;
return this.parseTime((e&&1*e.currentTime||0)+t);
},
parseTime:function(t){
return parseInt(1*t||0,10);
}
})
});
return T.type=i.TYPE_CONTROL,T;
});function _toConsumableArray(t){
if(Array.isArray(t)){
for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];
return i;
}
return Array.from(t);
}
function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
function _defineProperty(t,e,i){
return e in t?Object.defineProperty(t,e,{
value:i,
enumerable:!0,
configurable:!0,
writable:!0
}):t[e]=i,t;
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);
}
return t;
};
define("pages_new/common_share/video/player/controller.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","pages_new/3rd/vue.js","pages_new/3rd/vuex.js","a/a_utils.js","pages/utils.js","pages_new/common_share/video/player/controller.html.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","appmsg/kan_report.js","common/comm_report.js","pages_new/common_share/video/player/plugins/base.js","pages_new/common_share/video/player/plugins/danmu/danmu.js","pages_new/common_share/video/player/plugins/monitor/monitor.js","biz_wap/utils/localstorage.js","pages/report.js","pages_new/common_share/video/player/player.js","new_video/ctl.js","pages/create_txv.js","biz_wap/utils/jsmonitor_report.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/setMpInfo.js","biz_wap/jsapi/log.js","appmsg/topbar.js","common/utils.js","common/safeAreaInsets.js","pages_new/modules/utils/event_bus.js","pages_new/common_share/video/utils/immersive_data.js","pages_new/common_share/video/report.js"],function(t){
"use strict";
function e(t){
var e={};
return t.url_info.forEach(function(i){
var o=void 0,r=i.format_id;
switch(1*r){
case 20003:
case 10002:
case 10003:
case 10004:
e[pe.definitionMap[r]]||(o=pe.definitionMap[r]);
break;

case 10102:
case 10103:
case 10104:
t.h265&&(o=pe.definitionMap[r]);
}
o&&(e[o]=i);
}),e;
}
function i(t){
var i=e(t),o=void 0;
if(pe.playerStatus&&pe.playerStatus.formatId&&"3g"!==pe.networkType&&"2g"!==pe.networkType&&1*t.is_mp_video_urgent_state!==1)switch(1*pe.playerStatus.formatId){
case 10002:
case 10003:
case 10004:
case 10102:
case 10103:
case 10104:
i[pe.definitionMap[pe.playerStatus.formatId]]&&(o=i[pe.definitionMap[pe.playerStatus.formatId]]);
}
o||("2g"===pe.networkType||1*t.is_mp_video_urgent_state===1?i[pe.definitionMap[10004]]?o=i[pe.definitionMap[10004]]:i[pe.definitionMap[10003]]&&(o=i[pe.definitionMap[10003]]):pe.isPc||"wifi"===pe.networkType?i[pe.definitionMap[10002]]?o=i[pe.definitionMap[10002]]:i[pe.definitionMap[10003]]&&(o=i[pe.definitionMap[10003]]):i[pe.definitionMap[10003]]?o=i[pe.definitionMap[10003]]:i[pe.definitionMap[10002]]&&(o=i[pe.definitionMap[10002]])),
o||(o=t.url_info[0]);
var r=function s(t){
var e=Math.floor(Math.max(t.width,t.height));
if(e>3841)switch(1*t.format_id){
case 10002:
case 10102:
t=i[pe.definitionMap[10003]],t=s(t),W.setSum(27302,6,1);
break;

case 10003:
case 10103:
t=i[pe.definitionMap[10004]],W.setSum(27302,7,1);
}
return t;
};
o=r(o);
var a=Math.floor(o.duration_ms/1e3),n=(parseFloat(o.filesize)/1024/1024).toFixed(2);
return{
formatid:1*o.format_id,
time:a,
title:o.title||"",
width:o.width,
height:o.height,
file_size:o.filesize,
totalUrl:o.url,
rate:Math.round(o.filesize/1024*8/a),
flow:n,
ori_url_info:t.url_info
};
}
function o(t){
!pe.networkType&&M.isWechat&&(M.isIOS||M.isAndroid)?I.invoke("getNetworkType",{},function(e){
pe.networkType=pe.netTypeMap[e.err_msg]||"fail",("network_type:edge"==e.err_msg||"network_type:wwan"==e.err_msg)&&(e.detailtype||e.subtype)&&(pe.networkType=e.detailtype||e.subtype),
"function"==typeof t&&t();
}):"function"==typeof t&&t();
}
function r(t){
function e(){
O({
type:"GET",
dataType:"json",
timeout:3e4,
url:s,
success:function(e){
if(e&&e.base_resp&&0==e.base_resp.ret){
var o="",r=void 0;
if(e.is_mp_video_delete?(o="This video has been deleted by the publisher.",r=72):e.is_mp_video_forbid?(o="This video has been removed due to a violation of the terms of service.",
r=73):1*e.is_mp_video_transing===1?(o="正在转码，转码完成后可播放",r=78):e.is_mp_video_checking?(o="Under Review",
r=75):e.is_mp_video_check_fail?(o="Verification failed",r=76):1*e.is_appmsg_unauthorized===1&&(o="This video is not authorized for use. Unable to watch.",
r=77),o&&"undefined"!=typeof r)return void n({
err_msg:o,
code:r
});
if(e.url_info&&e.url_info.length>0)return void a({
data:i(_extends({
h265:t.h265
},e))
});
n({
err_msg:pe.defaultErrorWording,
code:71
});
}else n({
err_msg:"Unable to watch this video as it does not exist.",
code:74
});
},
error:function(t){
var e=void 0;
e=t?t.status>=200&&t.status<400?81:t.status>=400&&t.status<500?82:t.status>=500&&t.status<600?83:0==t.status&&4==t.readyState?84:85:80,
n({
err_msg:pe.defaultErrorWording,
code:e
});
}
});
}
var r=t.retry||1,a="function"==typeof t.onSuccess?t.onSuccess:function(){},n=function(i){
return i&&i.code>=80&&i.code<=85&&r>0?(r--,void e()):void("function"==typeof t.onError&&t.onError(i));
},s=["/mp/videoplayer?action=get_mp_video_play_url","&preview=",t.preview?"1":"0","&__biz=",t.__biz,"&mid=",t.mid,"&idx=",t.idx,"&vid=",t.vid,t.h265?"&ish265=true":"",t.auto?"&isauto=true":""].join("");
o(e);
}
function a(t){
function e(){
O({
type:"GET",
dataType:"json",
timeout:3e4,
url:p,
notJoinUrl:!0,
noXRequestedWidthHeader:!0,
success:function(e){
var i=Date.now()-r;
e=e||{},"undefined"==typeof e.em&&(e.em=0);
var o=e.em,p=void 0;
if(0==e.em){
if(e.exem>0?o=-4:0==e.exem&&e.vl&&e.vl.vi&&e.vl.vi[0]&&8==e.vl.vi[0].st&&(o=e.preview>0?-5:-3),
0!=o||e.vl&&e.vl.vi&&e.vl.vi[0]||(o=-2),0==o){
var h=e.vl.vi[0];
if(p={
newVid:h.lnk,
time:Math.floor(h.td),
title:h.ti,
width:h.vw,
height:h.vh,
file_size:h.fs,
rate:Math.round(h.fs/1024*8/h.td),
flow:(parseFloat(h.fs)/1024/1024).toFixed(2)
},h.ul&&h.ul.ui&&h.ul.ui[0]){
var d=h.ul.ui[0],l=d.url+h.fn,u=e.fl,_="";
if(u&&u.cnt>0){
p.formatid=10003,_="高清",p.resolution="高清;(480P)".replace(/^.*;\((:?.*)P\)$/,"$1")||0,
p.format=_,p.vt=d.vt,p.totalUrl=[l,-1!=l.indexOf("?")?"&":"?","vkey=",h.fvkey,"&sdtfrom=",B.getsdtfrom(),"&type=",1==d.dt?"tflv":2==d.dt||0==d.dt?"mp4":"","&platform=",B.getPlatformType(),"&fmt=",_,"&level=",h.level,"&br=",h.br,"&sp=",h.sp].join("");
for(var c=0;c<u.fi.length;c++)if(u.fi[c].sl){
-1!==[2,8].indexOf(u.fi[c].video)&&(p.formatid+=100);
break;
}
}else o=-2;
}
}
0==o?(B.getinfoReport({
vid:t.vid,
val:i,
val1:o,
vurl:p.totalUrl
}),a({
data:p,
oriData:e,
c_time:i,
ret_code:o
})):(B.getinfoReport({
vid:t.vid,
val:i,
val1:o,
vurl:""
}),s(-2,{
ret_code:o,
http_status:200,
c_time:i,
err_msg:n(1*o,1*e.exem,e)
}));
}else s(o,{
ret_code:o,
http_status:200,
c_time:i,
err_msg:n(o)
});
},
error:function(e){
var i=Date.now()-r,o=void 0;
o=e?e.status>=200&&e.status<400?-23:e.status>=400&&e.status<500?-22:e.status>=500&&e.status<600?-22:0==e.status&&4==e.readyState?-21:-21:-23,
B.getinfoReport({
vid:t.vid,
val:i,
val1:o,
vurl:""
}),s(o,{
ret_code:o,
http_status:e&&e.status||0,
c_time:i,
err_msg:n(-1)
});
}
});
}
var i=t.retry||1,r=Date.now(),a="function"==typeof t.onSuccess?t.onSuccess:function(){},s=function(o,r){
return o&&-20>o&&i>0?(i--,void e()):void("function"==typeof t.onError&&t.onError(o,r));
},p=["https://h5vv6.video.qq.com/getvinfo?dtype=1&otype=ojson&appVer=1&encryptVer=6.3&platform=61001&use_proxy_sdk=0","&vid=",t.vid,"&cKey=",t.ckey,"&sdtfrom=",B.getsdtfrom(),"&device=",B.getPlatformType(),t.h265?"&hevclv=16":""].join("");
o(e);
}
function n(t,e){
var i="";
switch(1*t){
case-4:
i="Unable to play due to copyright restrictions.";
break;

case-5:
i="Unable to play due to copyright restrictions.";
break;

case-3:
i="Unable to play due to copyright restrictions.";
break;

case 61:
i="Unable to watch this video as it does not exist.";
break;

case 62:
i="Unable to watch this video as it has been removed.";
break;

case 63:
i="Failed to load video. Unable to watch.";
break;

case 65:
i="Failed to load video. Unable to watch.";
break;

case 67:
i="Failed to load video. Unable to watch.";
break;

case 69:
i="The video format does not support mobile devices. Watch it on a computer instead.";
break;

case 71:
i="Failed to load video. Unable to watch.";
break;

case 73:
i="Failed to load video. Unable to watch.";
break;

case 74:
i="Failed to load video. Unable to watch.";
break;

case 80:
switch(1*e){
case 1:
i="Unfortunately, this video is not supported in your region.";
break;

case 2:
i="Unable to play due to copyright restrictions.";
break;

default:
i="Unable to play due to copyright restrictions.";
}
break;

case 81:
i="Failed to load video. Unable to watch.";
break;

case 82:
i="Failed to load video. Unable to watch.";
break;

case 83:
switch(1*e){
case-1:
i=pe.defaultErrorWording;
break;

case-2:
i="Unable to play due to copyright restrictions.";
break;

default:
i="Paid video. Open Tencent Video to watch it.";
}
break;

case 84:
i="Unfortunately, this video cannot be played in your region.";
break;

default:
i=pe.defaultErrorWording;
}
return i;
}
function s(t){
var e=["https://h5vv6.video.qq.com/getextinfo?otype=ojson","&vid=",t.vid].join("");
O({
type:"GET",
dataType:"json",
timeout:3e4,
url:e,
notJoinUrl:!0,
noXRequestedWidthHeader:!0,
success:function(e){
if(!e||"o"!=e.s||e.vl.cnt<=0)return void("function"==typeof t.onError&&t.onError(-1));
var i=e.vl.vi[0],o={
title:i.title||"Video",
desc:1*i.desc===0?"":i.desc||"",
director:i.director||"",
leading_actor:i.leading_actor||"",
costar:i.costar||"",
time:Math.floor(i.td)||0
};
if(i.pl&&i.pl.cnt>0){
var r=i.pl.pi;
o.p400_300=r[0]?r[0].url:"",o.p140_100=r[1]?r[1].url:"",o.p120_90=r[2]?r[2].url:"",
o.p400_300=o.p400_300&&-1==o.p400_300.indexOf("http")?"http://"+o.p400_300:o.p400_300,
o.p140_100=o.p140_100&&-1==o.p140_100.indexOf("http")?"http://"+o.p140_100:o.p140_100,
o.p120_90=o.p120_90&&-1==o.p120_90.indexOf("http")?"http://"+o.p120_90:o.p120_90;
}
"function"==typeof t.onSuccess&&t.onSuccess(o);
},
error:function(e){
var i=void 0;
i=e?e.status>=200&&e.status<400?-1:e.status>=400&&e.status<500?400:e.status>=500&&e.status<600?400:0==e.status&&4==e.readyState?500:500:-1,
"function"==typeof t.onError&&t.onError(i);
}
});
}
function p(){
var t=arguments.length<=0||void 0===arguments[0]?"cover":arguments[0],e=arguments[1],i=arguments[2],o=arguments[3],r=arguments[4],a=1,n=0,s=0,p=o,h=r,d=0,l=0,u=e,_=i,c=e/i,m=o/r;
return"cover"===t?m>=c?(a=i/r,n=(o-e/a)/2,p=e/a,h=r):(a=e/o,s=(r-i/a)/2,p=o,h=i/a):"contain"===t&&(m>=c?(a=e/o,
l=(i-r*a)/2,_=r*a):(a=i/r,d=(e-o*a)/2,u=o*a)),[n,s,p,h,d,l,u,_];
}
function h(t){
for(var e=1e8,i=0,o=0,r=t.length;r>o;o++)i=(i<<5)+i+t.charCodeAt(o);
return i%e;
}
function d(t,e){
return e?"/mp/videoplayer?action=get_mp_video_cover&vid="+t:location.protocol+"//puui.qpic.cn/qqvideo/0/"+t+"/0";
}
function l(t,e,i,o){
var r=z.get(pe.cachekey+o);
if(!r)return null;
try{
if(r=JSON.parse(r)||{},!r.time||Date.now()-pe.cacheTime>1*r.time)return v(o),r.videoInfo={
status:u(t,e,i,o)
},r;
}catch(a){
return v(o),null;
}
return r=r.videoInfo?r:{
videoInfo:{}
},r.videoInfo.status=u(t,e,i,o),r.videoInfo?r:null;
}
function u(t,e,i,o){
var r=z.get(pe.cachekey+t+e+i+o);
if(!r)return null;
try{
r=JSON.parse(r)||{};
}catch(a){
return f(t,e,i,o),null;
}
return r;
}
function _(){
var t=z.get(pe.cachekey+"playerStatus");
if(t){
try{
t=JSON.parse(t)||{};
}catch(e){
return void v("playerStatus");
}
t.playerStatus&&(pe.playerStatus=t.playerStatus,N.info("player controller: get player status cache "+JSON.stringify(pe.playerStatus)));
}
}
function c(t,e,i,o,r,a){
var n={
dynamicData:r.dynamicData||null,
coverUrl:r.coverUrl||""
};
z.set(pe.cachekey+o,JSON.stringify({
time:a||Date.now(),
videoInfo:n
})),r.status&&z.set(pe.cachekey+t+e+i+o,JSON.stringify(r.status));
}
function m(){
z.set(pe.cachekey+"playerStatus",JSON.stringify({
playerStatus:pe.playerStatus
})),I.invoke("handleMPPageAction",{
action:"setLocalData",
key:"formatId",
data:String(pe.playerStatus.formatId)
},function(t){
console.log("setLocalData"+JSON.stringify(t));
}),N.info("player controller: set player status cache "+JSON.stringify(pe.playerStatus));
}
function v(t){
z.remove(pe.cachekey+t);
}
function f(t,e,i,o){
z.remove(pe.cachekey+t+e+i+o);
}
function g(t){
window.ext_complete?t():Y.on("ext-complete",t);
}
t("biz_wap/ui/weui.js"),t("biz_common/utils/string/html.js");
var y=t("pages_new/3rd/vue.js"),w=t("pages_new/3rd/vuex.js"),T=w.mapState,S=w.mapMutations,E=w.mapActions,b=t("a/a_utils.js"),k=t("pages/utils.js"),R=t("pages_new/common_share/video/player/controller.html.js"),I=t("biz_wap/jsapi/core.js"),D=t("biz_wap/utils/device.js"),M=t("biz_wap/utils/mmversion.js"),P=t("biz_common/utils/url/parse.js"),O=t("biz_wap/utils/ajax.js"),C=t("appmsg/kan_report.js"),x=t("common/comm_report.js"),V=t("pages_new/common_share/video/player/plugins/base.js"),j=t("pages_new/common_share/video/player/plugins/danmu/danmu.js"),U=t("pages_new/common_share/video/player/plugins/monitor/monitor.js"),z=t("biz_wap/utils/localstorage.js"),B=t("pages/report.js"),F=t("pages_new/common_share/video/player/player.js"),L=t("new_video/ctl.js"),$=t("pages/create_txv.js"),W=t("biz_wap/utils/jsmonitor_report.js"),H=t("biz_wap/jsapi/leaveReport.js"),A=t("biz_wap/utils/setMpInfo.js"),N=t("biz_wap/jsapi/log.js"),q=t("appmsg/topbar.js"),J=t("common/utils.js"),K=t("common/safeAreaInsets.js"),X=t("appmsg/topbar.js"),G=X.setTopBarWhenVisible,Y=t("pages_new/modules/utils/event_bus.js"),Q=t("biz_wap/utils/jsmonitor_report.js"),Z=t("pages_new/common_share/video/utils/immersive_data.js"),te=Z.getImmersivePlayerData,ee=Z.oprImmersivePlayerData,ie=t("pages_new/common_share/video/report.js"),oe=ie.getNetType,re=ie.getDeviceModel,ae=ie.getOsName,ne=ie.getOsVersion,se=ie.getMiaoKai,pe={
cachekey:"qqmovieStatus_",
cacheTime:6e5,
networkType:"",
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
defaultErrorWording:"Unable to load video. Refresh page to retry.",
defaultHeadImgUrl:"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0",
playerStatus:{
formatId:null
},
netTypeMap:{
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
},
definitionMap:{
20003:4,
10002:3,
10003:2,
10004:1,
10102:3,
10103:2,
10104:1
},
resolutionNameMap:{
10002:"超清",
10003:"高清",
10004:"流畅",
10102:"超清",
10103:"高清",
10104:"流畅",
20003:"自动"
},
playbackRateInfo:[{
rate:.5,
name:"0.5倍"
},{
rate:.75,
name:"0.75倍"
},{
rate:1,
name:"1.0倍"
},{
rate:1.5,
name:"1.5倍"
},{
rate:2,
name:"2.0倍"
}]
},he=["继续观看",""],de=["再次观看","refresh"],le={
1:he.concat("135px"),
2:de.concat("135px"),
201:he.concat("100%"),
202:de.concat("100%"),
203:he.concat("135px"),
204:de.concat("135px")
},ue="update_recommend_status",_e="submitMsgToTL",ce=200,me=function(t,e){
var i={
origin:"mp",
isLike:t?1:0,
url:encodeURIComponent(window.msg_link.html(!1)),
content:e||""
};
I.invoke("handleHaokanAction",{
action:_e,
recommend:t?1:0,
server_data:JSON.stringify(i)
},function(t){
console.log("handleHaokanAction",t);
}),I.invoke("handleHaokanAction",{
action:ue,
permission:1,
recommend:t?1:0
},function(t){
console.log("handleHaokanAction for client",t);
});
},ve=y.extend({
template:R,
components:_defineProperty({},F.name,F),
data:function(){
return{
opt:null,
playerOpt:null,
wrapStyle:null,
videoStyle:null,
posterStyle:null,
topStickyExpendWhenPaused:!1,
toastTips:""
};
},
computed:_extends({},T("mp-video-player",["errType","errCode","errMsg","banOprStatus","fullscreenStatus","orientationStatus","refreshBtnStatus","topStickyInfoStatus","commonReportData"]),{
innerPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(t){
return t.type===V.TYPE_INNER;
})||[];
},
coverPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(t){
return t.type===V.TYPE_COVER;
})||[];
},
controlPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(t){
return t.type===V.TYPE_CONTROL;
})||[];
},
topStickyInfoWording:function(){
var t=le[this.topStickyInfoStatus];
return t&&t[0]||"继续观看";
},
topStickyInfoIconClass:function(){
var t=le[this.topStickyInfoStatus];
return t&&t[1]||"";
},
topStickyInfoMaskWidth:function(){
var t=le[this.topStickyInfoStatus];
return t&&t[2]||"100%";
}
}),
watch:{
banOprStatus:function(){
this.setVideoMenuItems();
},
orientationStatus:function(){
this.onOrientationStatusChange();
}
},
mounted:function(){
var t=this;
this.init(),window.addEventListener("unload",this.__onLeaveReport23443EventType1=function(){
return t.onLeaveReport23443({
event:1
});
}),window.addEventListener("unload",this.__onLeaveReport23443EventType2or3=function(){
return t.onLeaveReport23443();
}),window.addEventListener("unload",this.onLeaveReport23442),window.addEventListener("unload",this.onKykLeaveReport),
window.addEventListener("unload",this.onPageUnload),window.addEventListener("resize",this.onPageResize),
document.addEventListener("visibilitychange",this.onVisibilityChange);
},
beforeDestroy:function(){
this.disableTopSticky(),window.removeEventListener("unload",this.__onLeaveReport23443EventType1),
window.removeEventListener("unload",this.__onLeaveReport23443EventType2or3),window.removeEventListener("unload",this.onLeaveReport23442),
window.removeEventListener("unload",this.onKykLeaveReport),window.removeEventListener("unload",this.onPageUnload),
window.removeEventListener("resize",this.onPageResize),document.removeEventListener("visibilitychange",this.onVisibilityChange);
},
methods:_extends({},S("mp-video-player",["setError","setTopStickyInfoStatus","setCommonReportData","setEnter23439ReportExData","setPlay23440ReportExData","setPerf23442ReportExData","setLeave23443ReportExData","setOp23444ReportExData","setReload23445ReportExData","setAd23446ReportExData"]),E("mp-video-player",["reportEnter23439","reportPlay23440","reportPerf23442","reportLeave23443","reportOp23444","reportReload23445","reportAd23446"]),{
init:function(){
var t=this;
this.initController(),this.initImmersiveReportCommonData(1),this.reportPv23447(),
x.leaveReport(23443,function(){
return t.onLeaveReport23443({
event:1,
type:"leaveReport"
});
}),x.leaveReport(23443,function(){
return t.onLeaveReport23443({
type:"leaveReport"
});
}),x.leaveReport(23442,function(){
return t.onLeaveReport23442({
type:"leaveReport"
});
}),H.addReport(function(){
return t.onKykLeaveReport({
type:"leaveReport"
});
}),H.addReport(function(){
return t.onPageUnload({
type:"leaveReport"
});
}),H.addSpecificReport("native_data",function(){
return{
video_data:{
vid:t.opt.vid,
lastPlayedTime:t.getCurrentTime(),
lastPlayedTimeExpiredTime:(Date.now()+pe.cacheTime)/1e3
}
};
}),"number"==typeof this.opt.leaveReport12710Type&&this.leaveReport12710();
},
initController:function(){
var t=this;
return this.opt=_extends({
bizUserName:"",
bizNickName:"",
profileTabType:2,
videoTitle:"",
headImgUrl:"",
preview:!1,
fromid:0,
oriStatus:3,
isMpVideo:0,
mpVideoCoverUrl:"",
mpVideoTransInfo:[],
showFullscreenMenu:!0,
videoMd5:"",
oriVid:"",
vid:"",
ckey:"",
width:0,
height:0,
autoplay:!1,
muted:!1,
loop:!1,
__biz:"",
uin:"",
mid:"",
idx:"",
comment_id:"",
scene_type:0,
hitBizuin:"",
hitVid:"",
totalRange:10,
useWcSlPlayer:!1,
useImmersiveMode:!1,
useFeFullscreen:!1,
coverFit:"contain"
},this.$options.opt),this.opt.oriVid=this.opt.oriVid||this.opt.vid,this.opt.headImgUrl=this.opt.headImgUrl||pe.defaultHeadImgUrl,
1!=this.opt.oriStatus&&2!=this.opt.oriStatus&&(this.opt.oriStatus=3),this.__reportData=B.getVideoReportData(),
this.__gWidth=this.__gWidth||this.opt.width,this.__gHeight=this.__gHeight||this.opt.height,
this.__playRangeInfo=[],this.__dynamicErrMsg="",this.__isUnloaded=!1,this.__isShowTx=!1,
this.__dataCount=0,this.__targetDataCount=2,this.__coverUrl="",this.__cacheStartTs=0,
this.__initialData=null,this.__vInfo={
status:null,
coverUrl:"",
dynamicData:null
},this.hideError(),this.initLegacyPlugins(),this.initReportData(),this.initKykReportData(),
b.report115849(71),this.replaceByTxVideo()===!0?void b.report115849(70):(this.getCache(),
window.__timelineInitialData&&(this.__initialData=window.__timelineInitialData,delete window.__timelineInitialData),
this.getCoverUrl(),this.getAdvanceCodecSupportBeforeCallback(function(){
pe.playerStatus&&!pe.playerStatus.formatId?o(function(){
return t.getDynamicData();
}):t.getDynamicData();
}),void(J.supportImmersiveMode&&te({
biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
vid:this.opt.vid,
onSuccess:function(e){
t.playerOpt?(t.playerOpt.readNum=e.view_num&&e.view_num.pv||0,t.playerOpt.praiseNum=e.like_num&&e.like_num.pv||0,
t.playerOpt.likeNum=e.seen_num&&e.seen_num.pv||0,t.playerOpt.isPraised=e.like_num&&e.like_num.liked||0,
t.playerOpt.isLiked=e.seen_num&&e.seen_num.seen||0):t.__immersiveData=e,!t.opt.preview&&t.opt.useImmersiveMode&&I.invoke("handleHaokanAction",{
action:ue,
recommend:e.seen_num.seen?1:0,
permission:1
});
}
})));
},
reinit:function(t){
this.opt&&"object"===_typeof(this.opt)&&(this.$options.opt=t),delete this.__gWidth,
delete this.__gHeight,this.$nextTick(this.init);
},
reload:function(){
this.playerOpt=null,this.initController();
},
resetPlayer:function(){
var t=this.$refs.player;
t&&(t.__canplay=!1,t.pause(),t.showLoading(),t.preventOperating(2),t.$refs.video.currentTime=0,
t.currentTime=0);
},
initLegacyPlugins:function(){
var t=this.opt.plugins||[];
this.__blockPlugin={},this.__legacyPlugins=[];
var e=new U;
e.setPlayer(this),e.init&&e.init(),this.__legacyPlugins.push(e);
for(var i=0,o=t.length;o>i;i++){
var r=t[i];
r.prototype instanceof V||(r.setPlayer(this),r.init&&r.init(),this.__legacyPlugins.push(r));
}
},
initPlugins:function(){
var t=this;
this.$refs.innerPlugins&&this.$refs.innerPlugins.forEach(function(e){
return e.initContext(t);
}),this.$refs.coverPlugins&&this.$refs.coverPlugins.forEach(function(e){
return e.initContext(t);
}),this.$refs.controlPlugins&&this.$refs.controlPlugins.forEach(function(e){
return e.initContext(t);
});
},
destroyPlugins:function(){
this.opt.plugins=[],this.__legacyPlugins.forEach(function(t){
return t.destroy&&t.destroy();
}),this.__legacyPlugins=[],this.__blockPlugin={};
},
initReportData:function(){
var t=this.__reportData;
t.mid=this.opt.mid,t.__biz=this.opt.__biz,t.idx=this.opt.idx,t.vid=this.opt.vid,
t.commentid=this.opt.comment_id,t.scene_type=this.opt.scene_type,t.auto_play=this.opt.autoplay?1:0,
t.fromid=this.opt.fromid,t.hit_bizuin=this.opt.hitBizuin,t.hit_vid=this.opt.hitVid,
this.__monitorUid=this.triggerEvent("initMonitor",64728),this.__monitorUid2=this.triggerEvent("initMonitor",110644);
},
initKykReportData:function(){
this.__videoReportInfo={
hasUnloadReport:!1,
hasApiReport:!1,
every_start_play_time:0,
every_end_play_time:0,
total_play_time:0
},this.__kanReportData={
rec_expand:k.getParam("rec_expand")||"",
scene:k.getParam("scene")||"",
report_action:1,
vid:this.opt.vid,
start_play_time:0,
end_play_time:0,
play_time:0,
has_end:0,
replay_cnt:0,
pause_cnt:0,
auto_play:this.opt.autoplay?1:0,
has_full_screen:this.fullscreenStatus?1:0
};
},
initImmersiveReportCommonData:function(t){
if(1===t){
var e=0;
try{
e=1*window.atob(this.opt.__biz);
}catch(i){}
var o=-1;
M.isIOS?o=1:M.isAndroid&&(o=2);
var r={
DeviceModel:re(),
DeviceBrand:re(),
OsName:ae(),
OsVersion:ne(),
NetType:oe(),
MiaoKai:se(),
ScreenWidth:window.screen.width,
ScreenHeight:window.screen.height
};
this.__hasFirstPlayed=!1,this.__hasReport23439EnterStatus=0,this.__hasReport23444SubscribeBtnExpose=!1,
this.__hasLeaveReport23443EventType1=!1,this.__hasLeaveReport23443EventType2or3=!1,
this.__23443ReportPageEnterTime=Date.now(),this.__23443ReportPageTotalStayTime=0,
this.__23443ReportPageTotalPlayTime=0,this.__23443ReportImmersiveTotalStayTime=0,
this.__23443ReportImmersiveTotalPlayTime=0,this.setCommonReportData({
Vid:this.opt.vid,
BizUin:e,
MsgId:1*this.opt.mid,
ItemIdx:1*this.opt.idx,
PlayerType:J.isWcSlPage()?1:this.__isShowTx?3:2,
Scene:1*(window.source||window.cgiData.scene||k.getParam("scene")),
SubScene:1*(window.subscene||window.cgiData.subscene||k.getParam("subscene")),
ItemShowType:this.opt.useImmersiveMode?16:1*window.real_item_show_type,
EnterId:1*window.enterid||1*window.cgiData.enterid||parseInt(Date.now()/1e3,10),
SessionId:(window.sessionid||"")+"",
ChannelId:(k.getParam("channel_session_id")||"")+"",
ReloadId:(window.reloadid||"")+"",
ReloadSeq:1*(window.reloadseq||1),
OrStatus:1*this.opt.oriStatus,
PageUrl:window.location.href,
Device:o
}),this.setPlay23440ReportExData(_extends({},r)),this.setPerf23442ReportExData(_extends({},r)),
this.setOp23444ReportExData({
FullscreenType:1
}),this.setReload23445ReportExData({
FullscreenType:1
});
}else if(2===t){
var a=this.__vInfo.dynamicData&&this.__vInfo.dynamicData.data||{};
this.setCommonReportData({
Duration:parseInt(1e3*(a.time||0)),
VideoUrl:a.totalUrl||""
});
}else 3===t&&this.setCommonReportData({
IsFans:window.isFans?2:1
});
},
getReportTypeBySceneType:function(){
return 0==this.opt.scene_type?1:1==this.opt.scene_type||2==this.opt.scene_type?2:4==this.opt.scene_type?3:7==this.opt.scene_type?4:0;
},
onPageUnload:function(t){
if(!this.__isUnloaded){
this.__isUnloaded=!0;
var e=this.__reportData;
if(0===e.videoerror?this.cacheData():this.clearCache(),this.getPlayerReportData(),
t&&"leaveReport"===t.type){
var i=[];
for(var o in e)e.hasOwnProperty(o)&&i.push(o+"="+encodeURIComponent(e[o]));
return{
reportUrl:"/mp/videoreport?",
method:"POST",
reportData:i.join("&")
};
}
B.videoreport({
data:e,
async:!1
});
}
},
onLeaveReport23442:function(t){
var e=void 0,i=void 0;
if(this.$refs.player&&(this.$refs.player.__firstPlayStart?(e=6,i=Date.now()-this.$refs.player.__firstPlayStart):this.$refs.player.__playingBufferingStartTime&&(e=7,
i=Date.now()-this.$refs.player.__playingBufferingStartTime)),e){
var o={
EventType:e,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferTime:i
};
if(t&&"leaveReport"===t.type)return _extends({},this.commonReportData,o);
this.reportPerf23442(o);
}
},
onLeaveReport23443:function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(!(1===t.event&&this.__hasLeaveReport23443EventType1||1!==t.event&&this.__hasLeaveReport23443EventType2or3)){
var e=void 0;
if(1===t.event?(this.__hasLeaveReport23443EventType1=!0,e={
EventType:1,
EventTime:this.getCurrentTimeMs(),
PlayTime:this.getRealPlayTime(),
StayTime:Date.now()-this.__23443ReportPageEnterTime
}):(this.__hasLeaveReport23443EventType2or3=!0,e=this.fullscreenStatus?{
EventType:3,
EventTime:this.getCurrentTimeMs(),
ImmersivePlayTime:this.getIntervalPlayTimeFor23443(),
ImmersiveStayTime:this.getIntervalStayTimeFor23443()
}:{
EventType:2,
EventTime:this.getCurrentTimeMs(),
PagePlayTime:this.getIntervalPlayTimeFor23443(),
PageStayTime:this.getIntervalStayTimeFor23443()
}),e){
if("leaveReport"===t.type)return _extends({},this.commonReportData,e);
this.reportLeave23443(e);
}
}
},
onKykLeaveReport:function(t){
if(t&&"leaveReport"===t.type&&!this.__videoReportInfo.hasUnloadReport||!this.__videoReportInfo.hasApiReport)if(this.__videoReportInfo.every_end_play_time=Math.round(1e3*this.getCurrentTime()),
this.__pauseTimestamp||(this.__videoReportInfo.total_play_time+=this.__videoReportInfo.every_end_play_time-this.__videoReportInfo.every_start_play_time),
this.__kanReportData.play_time=this.__videoReportInfo.total_play_time,this.__kanReportData.end_play_time=Date.parse(new Date)/1e3,
t&&"leaveReport"===t.type){
if(k.getParam("rec_expand")&&1*k.getParam("scene")===94){
this.__videoReportInfo.hasApiReport=!0,console.log("kanReportData"+JSON.stringify(this.__kanReportData));
var e=[];
for(var i in this.__kanReportData)this.__kanReportData.hasOwnProperty(i)&&e.push(i+"="+encodeURIComponent(this.__kanReportData[i]));
return{
reportUrl:"https://mp.weixin.qq.com/mp/videoreport?action=report_for_kyk",
reportData:e.join("&"),
method:"POST"
};
}
}else this.__videoReportInfo.hasUnloadReport=!0,console.log("real play time"+this.__videoReportInfo.total_play_time),
C.reportKanData(this.__kanReportData);
},
onVisibilityChange:function(){
document.hidden&&this.cacheData();
},
onPageResize:function(){
var t=this;
if(!this.__preventResize)return this.$refs.player&&this.$refs.player.isWcSlPlayer?void(this.fullscreenStatus||setTimeout(function(){
var e=t.$el.parentNode,i=e&&e.getBoundingClientRect(),o=i&&i.width||0;
0!==o&&t.setVideoSize({
width:o
});
},0)):void(this.opt.height&&this.opt.width&&(this.__isShowTx&&this.__txPlayer?setTimeout(function(){
try{
var e=t.$el.parentNode,i=e&&e.getBoundingClientRect(),o=t.opt.width/t.opt.height,r=i&&i.width||0,a=Math.floor(r/o);
0!==r&&(e.style.height=a+"px",t.__gWidth=r,t.__gHeight=a,t.__txPlayer.resize({
width:r,
height:a
}));
}catch(n){}
},0):setTimeout(function(){
var e=t.$el.parentNode,i=e&&e.getBoundingClientRect(),o=t.opt.width/t.opt.height,r=i&&i.width||0,a=Math.floor(r/o);
0!==r&&(e.style.height=a+"px",t.__gWidth=r,t.__gHeight=a,t.setVideoSize({
width:r,
height:a
}));
},0)));
},
getCache:function(){
var t=l(this.opt.__biz,this.opt.mid,this.opt.idx,this.opt.vid);
if(t){
var e=this.__vInfo;
e.dynamicData=t.videoInfo.dynamicData||null,e.coverUrl=t.videoInfo.coverUrl||"",
e.status=t.videoInfo.status||null,this.__cacheStartTs=t.time||null;
}
},
cacheData:function(){
var t=this.$refs.player,e=this.__vInfo;
t&&(e.status||(e.status={}),"function"==typeof t.isEnd&&(e.status.isEnd=t.isEnd()),
"function"==typeof t.getCurTime&&(e.status.playTime=t.getCurTime()),"function"==typeof t.getPlaybackRate&&(e.status.playbackRate=t.getPlaybackRate()),
!this.__initialData&&this.__coverUrl&&(e.coverUrl=this.__coverUrl),c(this.opt.__biz,this.opt.mid,this.opt.idx,this.opt.vid,this.__vInfo,this.__cacheStartTs));
},
clearCache:function(){
v(this.opt.vid);
},
leaveReport12710:function(){
var t=this,e={
type:this.opt.leaveReport12710Type,
step:17,
useruin:this.opt.uin,
bizuin:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
vid:this.opt.vid
};
H.addReport(function(){
var i=t.getRealPlayTime();
if(!i)return!1;
var o=t.getVideoData();
return e.duration=Math.round(1e3*o.time),e.fromid=t.getFromid(),e.clienttime=Date.now(),
e.real_play_time=i,e.appmsg_scene=window.source||window.scene||0,{
reportUrl:"https://mp.weixin.qq.com/mp/ad_video_report?action=video_play_exit_report",
reportData:Object.keys(e).map(function(t){
return t+"="+encodeURIComponent(e[t]||"");
}).join("&"),
method:"POST"
};
});
},
getCoverUrl:function(){
var t=this,e="";
if(this.__initialData&&this.__initialData.initialCover?e=this.__initialData.initialCover:this.opt.isMpVideo&&(this.opt.mpVideoCoverUrl||window.__mpVideoCoverUrl)?(e=this.opt.mpVideoCoverUrl||window.__mpVideoCoverUrl,
delete window.__mpVideoCoverUrl,this.opt.mpVideoCoverUrl=""):this.__vInfo.coverUrl&&(e=this.__vInfo.coverUrl),
e)return this.__coverUrl=e,this.__dataCount++,this.videoDataReady(),void this.getFloatCoverBase64(this.__coverUrl);
if(this.__coverUrl=d(this.opt.vid,this.opt.isMpVideo),!this.opt.isMpVideo)return this.__dataCount++,
this.videoDataReady(),void this.getFloatCoverBase64(this.__coverUrl);
var i=1,o=function r(){
O({
type:"GET",
dataType:"json",
timeout:3e4,
url:t.__coverUrl+"&f=json",
success:function(e){
e&&e.base_resp&&0==e.base_resp.ret&&e.url&&(t.__coverUrl=e.url),t.__dataCount++,
t.videoDataReady(),t.getFloatCoverBase64(t.__coverUrl);
},
error:function(){
return i>0?(i--,void r()):(t.__dataCount++,void t.videoDataReady());
}
});
};
o();
},
getDynamicData:function(){
var t=this;
if(this.opt.isMpVideo&&(this.opt.mpVideoTransInfo&&this.opt.mpVideoTransInfo.length>0||window.__mpVideoTransInfo&&window.__mpVideoTransInfo.length>0)){
this.__dataCount++;
var e=this.opt.mpVideoTransInfo&&this.opt.mpVideoTransInfo.length>0?this.opt.mpVideoTransInfo:window.__mpVideoTransInfo;
return this.__vInfo.dynamicData={
data:i({
h265:this.__supportH256,
url_info:e.map(function(t){
return t.url=t.url.htmlDecode(),t;
})
})
},delete window.__mpVideoTransInfo,this.opt.mpVideoTransInfo=[],void this.videoDataReady();
}
if(this.__vInfo.dynamicData){
this.__dataCount++;
var o=this.__vInfo.dynamicData;
return this.__reportData.getvinfo_ret="undefined"!=typeof o.ret_code?o.ret_code:-2,
this.__reportData.getvinfo_time=o.c_time||0,this.opt.isMpVideo&&o.data&&o.data.ori_url_info&&o.data.ori_url_info.length>0&&(this.__vInfo.dynamicData={
data:i({
h265:this.__supportH256,
url_info:o.data.ori_url_info
})
}),void this.videoDataReady();
}
var n=this.__monitorUid,s=this.__monitorUid2;
return this.opt.isMpVideo?void r({
preview:this.opt.preview,
vid:this.opt.vid,
__biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
h265:this.__supportH256,
auto:!(!M.isAndroid||!M.gtVersion("7.0.16",1)),
onSuccess:function(e){
t.triggerEvent("setMonitor",s,{
4:1,
5:1
}),t.triggerEvent("sendMonitor",s),t.__dataCount++,t.__vInfo.dynamicData=e,t.videoDataReady();
},
onError:function(e){
var i=e.code;
switch(t.triggerEvent("setMonitor",s,{
4:1,
6:1
}),i){
case 80:
t.triggerEvent("setMonitor",s,{
7:1,
24:1
});
break;

case 81:
t.triggerEvent("setMonitor",s,{
7:1,
25:1
});
break;

case 82:
t.triggerEvent("setMonitor",s,{
7:1,
26:1
});
break;

case 83:
t.triggerEvent("setMonitor",s,{
7:1,
27:1
});
break;

case 84:
t.triggerEvent("setMonitor",s,{
7:1,
28:1
});
break;

case 85:
t.triggerEvent("setMonitor",s,{
7:1,
29:1
});
break;

case 71:
t.triggerEvent("setMonitor",s,{
8:1
});
break;

case 72:
t.triggerEvent("setMonitor",s,{
9:1
});
break;

case 73:
t.triggerEvent("setMonitor",s,{
10:1
});
break;

case 74:
t.triggerEvent("setMonitor",s,{
11:1
});
break;

case 75:
t.triggerEvent("setMonitor",s,{
34:1
});
break;

case 76:
t.triggerEvent("setMonitor",s,{
35:1
});
}
t.triggerEvent("sendMonitor",s),t.__reportData.videoerror=i,t.__dynamicErrMsg=e.err_msg||"",
t.__reportData.duration_ms=0,t.__vInfo.dynamicData=null,t.__dataCount=t.__targetDataCount,
t.videoDataReady(),t.reportPerf23442({
EventType:4,
EventTime:t.getCurrentTimeMs(),
Definition:t.getCurrentDefinition(),
VideoWidth:t.playerOpt&&t.playerOpt.videoWidth||0,
VideoHeight:t.playerOpt&&t.playerOpt.videoHeight||0,
PlayErrType:i
});
}
}):void a({
vid:this.opt.vid,
ckey:this.opt.ckey,
h265:this.__supportH256,
onSuccess:function(e){
if(t.triggerEvent("setMonitor",n,{
10:1,
11:1,
13:Math.min(e.c_time,6e4)
}),e.data.width&&e.data.height){
var i=Math.round(10*e.data.width/e.data.height*1);
i>20?i=20:0>i&&(i=0);
var o=41+2*i,r={};
r[o]=1,t.triggerEvent("setMonitor",n,r);
}else t.triggerEvent("setMonitor",n,{
83:1
});
t.triggerEvent("sendMonitor",n),t.__dataCount++,t.__vInfo.dynamicData=e,t.__reportData.getvinfo_ret=e.ret_code,
t.__reportData.getvinfo_time=e.c_time,t.__reportData.file_size=e.data.file_size,
t.__reportData.rate=e.data.rate,t.__reportData.resolution=e.data.resolution,t.__reportData.format=e.data.format,
t.__reportData.vt=e.data.vt,t.__reportData.video_ext=B.getsdtfrom(),t.videoDataReady();
},
onError:function(e,i){
if(t.triggerEvent("setMonitor",n,{
10:1,
12:1,
13:Math.min(i.c_time,6e4)
}),-2==e)switch(1*i.ret_code){
case-2:
t.triggerEvent("setMonitor",n,{
17:1
}),t.__reportData.videoerror=2;
break;

case-3:
t.triggerEvent("setMonitor",n,{
40:1
}),t.__reportData.videoerror=53;
break;

case-4:
t.triggerEvent("setMonitor",n,{
109:1
}),t.__reportData.videoerror=54;
break;

case-5:
t.triggerEvent("setMonitor",n,{
110:1
}),t.__reportData.videoerror=55;
break;

case 61:
t.triggerEvent("setMonitor",n,{
18:1
}),t.__reportData.videoerror=25;
break;

case 62:
t.triggerEvent("setMonitor",n,{
19:1
}),t.__reportData.videoerror=26;
break;

case 64:
t.triggerEvent("setMonitor",n,{
20:1
}),t.__reportData.videoerror=27;
break;

case 67:
t.triggerEvent("setMonitor",n,{
21:1
}),t.__reportData.videoerror=28;
break;

case 69:
t.triggerEvent("setMonitor",n,{
22:1
}),t.__reportData.videoerror=52;
break;

case 80:
t.triggerEvent("setMonitor",n,{
23:1
}),t.__reportData.videoerror=29;
break;

case 81:
t.triggerEvent("setMonitor",n,{
24:1
}),t.__reportData.videoerror=50;
break;

case 85:
t.triggerEvent("setMonitor",n,{
25:1
}),t.__reportData.videoerror=51;
break;

default:
t.triggerEvent("setMonitor",n,{
26:1
}),t.__reportData.videoerror=24;
}else{
switch(1*e){
case-21:
t.triggerEvent("setMonitor",n,{
14:1
});
break;

case-22:
t.triggerEvent("setMonitor",n,{
15:1
});
break;

case-23:
t.triggerEvent("setMonitor",n,{
16:1
});
}
t.__reportData.videoerror=-1*e;
}
t.triggerEvent("sendMonitor",n),t.__dynamicErrMsg=i.err_msg||"",t.__reportData.getvinfo_ret=i.ret_code,
t.__reportData.duration_ms=0,t.__reportData.getvinfo_time=i.c_time||0,t.__vInfo.dynamicData=null,
t.__dataCount=t.__targetDataCount,t.videoDataReady(),t.reportPerf23442({
EventType:4,
EventTime:t.getCurrentTimeMs(),
Definition:t.getCurrentDefinition(),
VideoWidth:t.playerOpt&&t.playerOpt.videoWidth||0,
VideoHeight:t.playerOpt&&t.playerOpt.videoHeight||0,
PlayErrType:t.__reportData.videoerror
}),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("TxGetVInfoApi:"+i.http_status,"httpStatus: "+i.http_status+"; errorCode: "+t.__reportData.videoerror+"; vid: "+t.opt.vid+"; ckey: "+t.opt.ckey,{
mid:"mmbizwap:txvideo_api",
view:"wap_business"
});
}
});
},
videoDataReady:function(){
this.__dataCount===this.__targetDataCount&&(this.__isShowTx?this.removeLoading():this.__vInfo.dynamicData?this.createPlayer():(this.removeLoading(),
N.error("player controller: failed to create player because no dynamic data")));
},
createPlayer:function(){
var t=this,i=this.__vInfo,o=this.__reportData,r=i.dynamicData.data;
this.__reportData.duration_ms=parseInt(1e3*r.time),this.initPlayRangeInfo({
durationMs:this.__reportData.duration_ms
}),o.vtitle=this.opt.vtitle||r.title||"",this.initImmersiveReportCommonData(2),g(function(){
t.initImmersiveReportCommonData(3),t.__hasReport23439EnterStatus<3&&(-1===t.controlPlugins.indexOf(j)||2===t.__hasReport23439EnterStatus?(t.__hasReport23439EnterStatus=3,
t.reportEnter23439()):t.__hasReport23439EnterStatus=1);
});
var a=this.getReportTypeBySceneType(),n=void 0;
r.ori_url_info&&!function(){
var i=e({
h265:t.__supportH256,
url_info:r.ori_url_info
});
n=Object.keys(i).filter(function(e){
return 1*e!==pe.definitionMap[20003]||t.opt.useWcSlPlayer&&M.isWechat&&M.isAndroid&&M.gtVersion("7.0.16",1);
}).sort(function(t,e){
return e-t;
}).map(function(t){
var e=i[t];
return{
name:e.video_quality_wording||pe.resolutionNameMap[e.format_id],
formatId:e.format_id,
height:e.height,
width:e.width,
src:e.url
};
});
}();
var s=P.getQuery("play_time"),p=0;
this.__initialData?p=this.__initialData.initialTime||0:""!==s?p=1*s||0:i.status&&!i.status.isEnd&&(p=i.status.playTime||0),
console.info("[Video Info]",r),N.info("player controller: begin to create player",JSON.stringify(r)),
this.playerOpt={
__biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
bizUserName:this.opt.bizUserName,
bizNickName:this.opt.bizNickName,
profileTabType:this.opt.profileTabType,
videoTitle:o.vtitle,
videoReportType:a,
coverFit:this.opt.coverFit,
cover:this.__coverUrl,
width:this.__gWidth,
height:this.__gHeight,
videoWidth:r.width,
videoHeight:r.height,
duration:r.time,
autoplay:this.opt.autoplay,
flowNotice:this.opt.flowNotice,
flow:r.flow,
loop:this.opt.loop,
muted:this.opt.muted,
src:r.totalUrl,
formatId:r.formatid,
headImgUrl:this.opt.headImgUrl,
useWcSlPlayer:this.opt.useWcSlPlayer,
useImmersiveMode:this.opt.useImmersiveMode,
useFeFullscreen:this.opt.useFeFullscreen,
oriStatus:this.opt.oriStatus,
initialTime:p,
resolutionInfo:n,
playbackRateInfo:pe.playbackRateInfo,
playbackRateBtnInfoDefaultId:2,
showFullscreenMenu:this.opt.showFullscreenMenu,
videoMd5:this.opt.videoMd5,
extinfo:{
hit_bizuin:this.opt.hitBizuin,
hit_vid:this.opt.hitVid,
vid:this.opt.vid,
preview:this.opt.preview,
pageplayer:this
},
fileSize:r.file_size,
checkPlayAuthority:this.checkPlayAuthority,
readNum:this.__immersiveData&&this.__immersiveData.view_num&&this.__immersiveData.view_num.pv||0,
praiseNum:this.__immersiveData&&this.__immersiveData.like_num&&this.__immersiveData.like_num.pv||0,
likeNum:this.__immersiveData&&this.__immersiveData.seen_num&&this.__immersiveData.seen_num.pv||0,
isPraised:this.__immersiveData&&this.__immersiveData.like_num&&this.__immersiveData.like_num.liked||0,
isLiked:this.__immersiveData&&this.__immersiveData.seen_num&&this.__immersiveData.seen_num.seen||0
},this.qqVideoReport({
step:3
}),this.$nextTick(function(){
t.initPlugins(),t.triggerEvent("playerReady");
});
},
removeLoading:function(){
this.afterRemoveLoading();
},
afterRemoveLoading:function(){
if(!this.__isShowTx&&!this.__vInfo.dynamicData)if(this.opt.isMpVideo){
var t=1;
(72==this.__reportData.videoerror||73==this.__reportData.videoerror)&&(t=2),this.showError(this.__dynamicErrMsg,t);
}else this.showError(this.__dynamicErrMsg||"");
var e=this.getVideoData();
this.triggerEvent("videoReady",{
formatId:e&&e.formatid
});
},
showError:function(t,e){
t=t||pe.defaultErrorWording,this.setError({
type:e||1,
code:this.__reportData.videoerror,
msg:t,
refresh:t===pe.defaultErrorWording?1:0
}),this.disableTopSticky();
},
hideError:function(){
this.setError({
type:0,
code:0,
msg:"",
refresh:0
});
},
checkPlayAuthority:function(t){
var e=this;
this.opt.checkNoPaid?O({
type:"GET",
dataType:"json",
timeout:3e4,
url:"/mp/videoplayer?action=check_video_paid_status&__biz="+this.opt.__biz+"&mid="+this.opt.mid+"&idx="+this.opt.idx,
success:function(i){
1==!i.can_play?window.weui.confirm("此视频来自于付费内容，在原文付费后才可播放",{
buttons:[{
type:"default",
label:"Cancel"
},{
label:"前往原文",
onClick:function(){
e.opt.openArticle();
}
}]
}):"function"==typeof t.allowPlay&&t.allowPlay();
}
}):"function"==typeof t.allowPlay&&t.allowPlay();
},
onLoaded:function(){
var t=this;
setTimeout(function(){
t.removeLoading();
},0),N.info("player controller: succ created player");
},
onTimeupdate:function(t){
if(!this.__reportedTimeupdate){
this.__reportedTimeupdate=!0,L.report({
step:6,
vid:this.opt.vid,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
type:this.getReportTypeBySceneType(),
fromid:this.opt.fromid
});
var e=this.$refs.player.getLog(),i=e.loadwait||0;
this.qqVideoReport({
step:6,
loadwait:i
});
}
if(!this.__reportedPv){
this.__reportedPv=!0;
var o=this.__monitorUid,r=this.__monitorUid2;
this.triggerEvent("clearMonitor",o),this.triggerEvent("clearMonitor",r),this.opt.isMpVideo?(this.triggerEvent("setMonitor",r,{
12:1,
13:1
}),this.triggerEvent("sendMonitor",r)):(this.triggerEvent("setMonitor",o,{
0:1,
1:1
}),this.triggerEvent("sendMonitor",o));
}
this.__reportData.last_ms=parseInt(1e3*t.currentTime),this.__reportData.video_play_time=parseInt(1e3*t.currentTime),
this.reportCurRangeInfo({
curTime:this.__reportData.last_ms
}),this.triggerEvent("timeupdate",t);
},
onBeginPlay:function(){
var t=this.__reportData;
t.client_time_when_play=Math.round(Date.now()/1e3),t.click_play_button=1,!this.$refs.player.autoplay&&this.recoverPlaybackRate(),
this.triggerEvent("beginPlay");
},
onDurationchange:function(){
this.$refs.player.autoplay&&this.recoverPlaybackRate();
},
onEnterFullscreen:function(){
this.__preventResize=!0,this.$refs.player.needFeFullscreen&&J.supportImmersiveMode&&this.$refs.player.canShareVideo&&A.currentMpInfo({
disableShowFinderLiveTopBar:1,
isDisableMenuHeader:!0,
itemShowType:"16"
});
},
onExitFullscreen:function(){
var t=this;
document.body.style.backgroundColor=null,this.__resumeResizeTimeoutId&&clearTimeout(this.__resumeResizeTimeoutId),
this.__resumeResizeTimeoutId=setTimeout(function(){
t.__resumeResizeTimeoutId=null,t.__preventResize=!1;
},500),this.$refs.player.needFeFullscreen&&J.supportImmersiveMode&&this.$refs.player.canShareVideo&&A.currentMpInfo({
disableShowFinderLiveTopBar:0,
isDisableMenuHeader:!1,
itemShowType:window.item_show_type
});
},
onFullscreenchange:function(t){
if(t.state?(this.__kanReportData.has_full_screen=1,document.body.style.backgroundColor="#000"):document.body.style.backgroundColor=null,
"immersive"===t.type||"samelayer"===t.type&&J.supportImmersiveMode||"frontend"===t.type)if(t.state){
if(("immersive"===t.type||this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange)&&this.onEnterFullscreen(),
this.setLoop(!0),this.setVideoShareInfo(),this.setVideoMenuItems(),q.hideCurrentMpInfo(),
this.setOp23444ReportExData({
FullscreenType:2
}),this.setReload23445ReportExData({
FullscreenType:2
}),"immersive"!==t.type){
var e=!this.opt.useImmersiveMode&&"samelayer"===t.type&&this.$refs.player&&this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange;
this.reportOp23444({
EventType:e?15:11,
EventTime:this.getCurrentTimeMs(),
FullscreenType:e?3:2
});
var i=this.getIntervalPlayTimeFor23443(),o=this.getIntervalStayTimeFor23443();
this.__23443ReportPageTotalPlayTime+=i,this.__23443ReportPageTotalStayTime+=o,this.reportLeave23443({
EventType:2,
EventTime:this.getCurrentTimeMs(),
PagePlayTime:i,
PageStayTime:o
});
}
"immersive"===t.type?Q.setSum(283598,0,1):"frontend"===t.type?Q.setSum(283598,1,1):Q.setSum(283598,2,1);
}else if(this.setLoop(this.opt.loop),this.recoverVideoShareInfo(),this.recoverVideoMenuItems(),
this.setOp23444ReportExData({
FullscreenType:1
}),this.setReload23445ReportExData({
FullscreenType:1
}),"immersive"!==t.type){
var e=!this.opt.useImmersiveMode&&"samelayer"===t.type&&this.$refs.player&&this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange;
this.reportOp23444({
EventType:e?16:14,
EventTime:this.getCurrentTimeMs()
});
var i=this.getIntervalPlayTimeFor23443(),o=this.getIntervalStayTimeFor23443();
this.__23443ReportImmersiveTotalPlayTime+=i,this.__23443ReportImmersiveTotalStayTime+=o,
this.reportLeave23443({
EventType:3,
EventTime:this.getCurrentTimeMs(),
ImmersivePlayTime:i,
ImmersiveStayTime:o
});
}
this.topStickyInfoStatus>0&&(t.state?this.$refs.player.resumeOperating():this.$refs.player.preventOperating()),
this.triggerEvent("fullscreenchange",t);
},
onOrientationStatusChange:function(){
if(this.fullscreenStatus&&this.$refs.player&&(this.opt.useImmersiveMode||!this.$refs.player.isWcSlPlayer||!this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange)){
var t=0===this.orientationStatus?2:3;
this.setOp23444ReportExData({
FullscreenType:t
}),this.setReload23445ReportExData({
FullscreenType:t
}),this.reportOp23444({
EventType:0===this.orientationStatus?13:12,
EventTime:this.getCurrentTimeMs()
});
}
},
onTouchVideo:function(){
this.triggerEvent("touchVideo");
},
onShareVideo:function(){
var t=this;
if(this.opt.preview)return void window.weui.alert("预览状态下无法分享视频");
window.customShareSource=3,this.fullscreenStatus||this.setVideoShareInfo();
var e=function i(e){
var o=M.isIOS?!!(1*e.hasFocus):!e.hasFocus;
o||(I.remove("onWindowFocusChanged",i),t.fullscreenStatus||setTimeout(t.recoverVideoShareInfo,1e3),
setTimeout(function(){
return delete window.customShareSource;
},1e3));
};
I.on("onWindowFocusChanged",e),this.reportOp23444({
EventType:24,
EventTime:this.getCurrentTimeMs()
});
},
onPraiseVideo:function(){
return this.opt.preview?void window.weui.alert("预览状态下无法点赞视频"):(this.playerOpt.isPraised=!this.playerOpt.isPraised,
this.playerOpt.isPraised?this.playerOpt.praiseNum++:this.playerOpt.praiseNum--,ee({
biz:this.opt.__biz,
vid:this.opt.vid,
mid:this.opt.mid,
idx:this.opt.idx,
type:this.playerOpt.isPraised?3:5,
styleType:6
}),void this.reportOp23444({
EventType:25,
EventTime:this.getCurrentTimeMs()
}));
},
onLikeVideo:function(t){
if(this.opt.preview)return void window.weui.alert("预览状态下无法在看视频");
var e=this.$store.state.cgiData,i=t&&1*t.recommend||!this.playerOpt.isLiked;
console.log("[like video]"),t&&t.comment?this.showToast("Posted"):!this.playerOpt.isLiked&&i?(this.playerOpt.likeNum++,
1*e.item_show_type===5&&(this.$store.commit("SET_RECOMMEND_STATUS",{
hasRecommended:i
}),this.$store.commit("SET_RECOMMEND_NUM",{
recommendNum:this.playerOpt.likeNum
}))):this.playerOpt.isLiked&&!i&&(this.showToast("Canceled"),this.playerOpt.likeNum--,
1*e.item_show_type===5&&(this.$store.commit("SET_RECOMMEND_STATUS",{
hasRecommended:i
}),this.$store.commit("SET_RECOMMEND_NUM",{
recommendNum:this.playerOpt.likeNum
}))),this.playerOpt.isLiked=i,ee({
biz:this.opt.__biz,
vid:this.opt.vid,
mid:this.opt.mid,
idx:this.opt.idx,
comment:t&&t.comment||"",
type:i?4:6,
styleType:t?5:7,
onSuccess:function(){
me(i,t&&t.comment||"");
},
onError:function(){
window.weui.alert(t&&t.comment&&t.comment.length>ce?"Comment cannot exceed %s characters".replace("%s",ce):"Network unavailable. Try again later.");
}
}),this.reportOp23444({
EventType:26,
EventTime:this.getCurrentTimeMs()
});
},
onOpenSourcePage:function(){
this.triggerEvent("openSourcePage"),this.reportOp23444({
EventType:20,
EventTime:this.getCurrentTimeMs()
});
},
onShowSubscribe:function(){
this.triggerEvent("showSubscribe"),this.__hasReport23444SubscribeBtnExpose||(this.__hasReport23444SubscribeBtnExpose=!0,
this.reportOp23444({
EventType:22,
EventTime:this.getCurrentTimeMs()
}));
},
onClickSubscribe:function(){
this.triggerEvent("clickSubscribe"),this.reportOp23444({
EventType:23,
EventTime:this.getCurrentTimeMs()
});
},
onFastForward:function(){
this.triggerEvent("fastForward"),this.reportOp23444({
EventType:17,
EventTime:this.getCurrentTimeMs()
});
},
onReplay:function(){
this.triggerEvent("replay");
},
onStatusChange:function(t){
var e=this.__reportData;
if("loading"!==t.status||"seeked"!==t.subStatus&&"seeking"!==t.subStatus||this.initPlayRangeInfo({
durationMs:e.duration_ms
}),"pause"===t.status?(this.computePlayTotalTimeForKyk(t),this.__kanReportData.pause_cnt+=1):"play"===t.status?this.__videoReportInfo.every_start_play_time=Math.round(1e3*t.currentTime):"end"===t.status&&(this.__videoReportInfo.every_end_play_time=Math.round(1e3*this.getCurrentTime()),
console.log("real play time"+this.__videoReportInfo.total_play_time),this.__kanReportData.play_time=this.__videoReportInfo.total_play_time,
this.__kanReportData.end_play_time=Date.parse(new Date)/1e3,this.__kanReportData.has_end=1,
C.reportKanData(this.__kanReportData)),"loading"===t.status&&"waiting"===t.subStatus){
var i=0;
"play"===t.preStatus?i=1:"loading"===t.preStatus&&"seeked"===t.preSubStatus?i=2:"loading"===t.preStatus&&"resolutionchange"===t.preSubStatus&&(i=3),
i&&this.reportPerf23442({
EventType:2,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferType:i
});
}
this.triggerEvent("statusChange",t);
},
onAfterReplay:function(){
this.triggerEvent("afterReplay");
},
onHandDragComplete:function(t){
this.reportOp23444({
EventType:8,
EventTime:this.getCurrentTimeMs(),
BarBefore:t.startDragVideoTime+"",
BarAfter:t.playTime+""
}),this.triggerEvent("handDragComplete",t);
},
onBarDragComplete:function(t){
this.triggerEvent("barDragComplete",t),this.reportOp23444({
EventType:7,
EventTime:this.getCurrentTimeMs(),
BarBefore:t.startDragVideoTime+"",
BarAfter:t.playTime+""
});
},
onEnd:function(){
var t=this.__vInfo,e=this.__reportData,i=t.dynamicData.data,o=this.getReportTypeBySceneType();
e.hasended=1,L.report({
step:7,
vid:this.opt.vid,
ext1:1e3*i.time,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
type:o,
fromid:this.opt.fromid
}),this.triggerEvent("beforeEnd",this.playerOpt.loop),this.playerOpt.loop?(this.__reportedPv=!1,
this.__reportData.replay=1,this.qqVideoReport({
step:3
})):this.triggerEvent("showEndContent"),this.triggerEvent("end",this.playerOpt.loop),
this.reportCurRangeInfo({
curTime:e.last_ms
}),this.initPlayRangeInfo({
durationMs:e.duration_ms
});
},
onError:function(t){
var e=this.__reportData,i=this.__monitorUid,o=this.__monitorUid2;
if(e.videoerror=!t||!t.errorcode||t.errorcode>5||t.errorcode<=0?46:t.errorcode+40,
this.opt.isMpVideo){
switch(this.__reportedPv||(this.__reportedPv=!0,this.triggerEvent("setMonitor",o,{
12:1
})),this.triggerEvent("setMonitor",o,{
14:1
}),1*t.errorcode){
case 1:
this.triggerEvent("setMonitor",o,{
15:1
});
break;

case 2:
this.triggerEvent("setMonitor",o,{
16:1
});
break;

case 3:
this.triggerEvent("setMonitor",o,{
17:1
});
break;

case 4:
this.triggerEvent("setMonitor",o,{
18:1
});
break;

case 5:
this.triggerEvent("setMonitor",o,{
19:1
});
break;

case 6:
this.triggerEvent("setMonitor",o,{
39:1
});
break;

default:
this.triggerEvent("setMonitor",o,{
20:1
});
}
this.triggerEvent("sendMonitor",o);
}else{
switch(this.__reportedPv||(this.__reportedPv=!0,this.triggerEvent("setMonitor",i,{
0:1
})),this.triggerEvent("setMonitor",i,{
2:1,
3:1
}),1*t.errorcode){
case 1:
this.triggerEvent("setMonitor",i,{
4:1
});
break;

case 2:
this.triggerEvent("setMonitor",i,{
5:1
});
break;

case 3:
this.triggerEvent("setMonitor",i,{
6:1
});
break;

case 4:
this.triggerEvent("setMonitor",i,{
7:1
});
break;

case 5:
this.triggerEvent("setMonitor",i,{
8:1
});
break;

default:
this.triggerEvent("setMonitor",i,{
9:1
});
}
this.triggerEvent("sendMonitor",i),this.triggerEvent("sendMonitor",o);
}
e.v_err_code=t.errorcode,this.showError(),this.qqVideoReport({
step:1999,
val:e.videoerror
}),this.initPlayRangeInfo({
durationMs:e.duration_ms
});
},
onFirstBufferingTime:function(t){
this.reportPerf23442({
EventType:1,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferTime:t.bufferingTime
});
var e=void 0;
if(e=this.__hasFirstPlayed?3:this.$refs.player.autoplay?1:2,this.reportPlay23440({
PlayType:e
}),this.reportH265Play(),this.__kanReportData.start_play_time=Date.parse(new Date)/1e3,
this.__hasFirstPlayed){
this.__kanReportData.replay_cnt+=1;
var i={
rec_expand:k.getParam("rec_expand")||"",
scene:k.getParam("scene")||"",
report_action:1,
vid:this.opt.vid,
end_play_time:0,
play_time:0,
has_end:0,
pause_cnt:0,
auto_play:this.opt.autoplay?1:0,
has_full_screen:this.fullscreenStatus?1:0
};
this.__videoReportInfo={
hasUnloadReport:!1,
hasApiReport:!1,
every_start_play_time:0,
every_end_play_time:0,
total_play_time:0
},this.__kanReportData=_extends(this.__kanReportData,i);
}else this.__hasFirstPlayed=!0;
this.triggerEvent("firstBufferingTime",t);
},
onPlayingBufferingTime:function(t){
this.reportPerf23442({
EventType:3,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferTime:t.bufferingTime
}),this.triggerEvent("playingBufferingTime",t);
},
onFlowNotice:function(t){
this.reportPerf23442({
EventType:5,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
Traffic:t.flow
}),this.triggerEvent("flowNotice",t);
},
onUserplay:function(t){
this.triggerEvent("userplay",t);
var e=6;
1===t.tapType?e=4:2===t.tapType&&(e=2),this.reportOp23444({
EventType:e,
EventTime:this.getCurrentTimeMs()
});
},
onUserpause:function(t){
this.triggerEvent("userpause",_extends({
curTime:this.getCurrentTime()
},t));
var e=this.__reportData;
e.pause_num=(e.pause_num||0)+1;
var i=5;
1===t.tapType?i=3:2===t.tapType&&(i=1),this.reportOp23444({
EventType:i,
EventTime:this.getCurrentTimeMs()
});
},
onWaiting:function(t){
this.triggerEvent("waiting",t);
},
onPlay:function(t){
this.__pauseTimestamp&&(this.reportOp23444({
EventType:18,
EventTime:this.getCurrentTimeMs(),
PauseTime:Date.now()-this.__pauseTimestamp
}),delete this.__pauseTimestamp),this.triggerEvent("play",t);
},
onPause:function(t){
this.triggerEvent("pause",t),this.__pauseTimestamp=Date.now();
},
onMidPlayClick:function(){
this.reportOp23444({
EventType:19,
EventTime:this.getCurrentTimeMs()
});
},
onAfterCheckVideoFit:function(t){
var e={
97:1
};
t.needToFit===!0&&(e[98]=1,e[100]=1,t.os.ios&&(e[103]=1),t.os.android&&(e[106]=1),
t.supportObjectFit===!0&&(e[101]=1,t.os.ios&&(e[104]=1),t.os.android&&(e[107]=1)));
var i=this.__monitorUid;
this.triggerEvent("setMonitor",i,e),this.triggerEvent("sendMonitor",i);
},
onBindError:function(t){
this.triggerEvent("bindError",t);
},
onRateChange:function(t){
this.triggerEvent("rateChange",t),"changed"===t.action&&(this.cacheData(),this.reportOp23444({
EventType:9,
EventTime:this.getCurrentTimeMs(),
SpeedBefore:t.rateBefore+"",
SpeedAfter:t.rateAfter+""
}));
},
onResolutionChange:function(t){
"changed"===t.action&&(pe.playerStatus.formatId=t.infoAfter&&t.infoAfter.formatId||null,
m(),this.reportOp23444({
EventType:10,
EventTime:this.getCurrentTimeMs(),
DefinitionBefore:pe.definitionMap[t.infoBefore.formatId]+"",
DefinitionAfter:pe.definitionMap[t.infoAfter.formatId]+""
}),this.setPerf23442ReportExData({
DefinitionBefore:pe.definitionMap[t.infoBefore.formatId],
VideoWidthBefore:t.infoBefore.width,
VideoHeightBefore:t.infoBefore.height
})),this.triggerEvent("resolutionChange",t);
},
onBrightnessChange:function(t){
this.triggerEvent("brightnessChange",t);
},
onVolumeChange:function(t){
this.triggerEvent("volumeChange",t);
},
onProfileJump:function(t){
this.triggerEvent("profileJump",t),this.reportOp23444({
EventType:21,
EventTime:this.getCurrentTimeMs()
});
},
onProcessStateChange:function(t){
this.triggerEvent("processStateChange",t);
},
onCanplay:function(t){
this.triggerEvent("canplay",t);
},
onShowControlBar:function(t){
this.triggerEvent("showControlBar",t);
},
onHideControlBar:function(t){
this.triggerEvent("hideControlBar",t);
},
onShowMenu:function(t){
this.triggerEvent("showMenu",t);
},
triggerEvent:function(t){
for(var e=[].concat(this.$refs.innerPlugins||[],this.$refs.coverPlugins||[],this.$refs.controlPlugins||[],this.__legacyPlugins),i=this.__blockPlugin[t]||this.__blockPlugin.all,o=void 0,r=void 0,a=0,n=arguments.length,s=Array(n>1?n-1:0),p=1;n>p;p++)s[p-1]=arguments[p];
if(i&&"function"==typeof i.recv&&(o=i.recv.apply(i,[t].concat(s)),"[object Object]"===Object.prototype.toString.call(o)?(a|=o.code,
r=o.data):a|=o,1&a))return r;
for(var h=0,d=e.length;d>h;++h){
try{
var l;
o=(l=e[h]).recv.apply(l,[t].concat(s));
}catch(u){
console.error("player controller plugin error:",u,t,s);
}
if("[object Object]"===Object.prototype.toString.call(o)?(a|=o.code,r=o.data):a|=o,
2&a)break;
}
if(!(this._blockInnerHandler||4&a)){
var _=this[t+"InnerHandler"];
_&&(o=_.apply(this,[t].concat(s)),"[object Object]"===Object.prototype.toString.call(o)&&(r=o.data));
}
return 8&a||this.emitEvent.apply(this,[t.replace(/[A-Z]/g,function(t){
return"-"+t.toLowerCase();
})].concat(s)),r;
},
emitEvent:function(t){
for(var e=arguments.length,i=Array(e>1?e-1:0),o=1;e>o;o++)i[o-1]=arguments[o];
t&&this.$emit.apply(this,[t].concat(i));
},
setBlockPlugin:function(t,e){
this.__blockPlugin[t]=e;
},
replaceByTxVideo:function(){
var t=this;
if(!this.opt.ckey&&!this.opt.isMpVideo){
this.__isShowTx=!0;
var e=this.$el.getAttribute("id");
e||(e="js_tx_video_container_"+Math.random(),this.$el.setAttribute("id",e));
var i=K&&K.top||60;
this.opt.useImmersiveMode&&(this.$el.style.paddingTop=i+"px",this.$el.style.paddingBottom="60px"),
I.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
}),$.createTxVideo({
win:window,
containerId:e,
vid:this.opt.vid,
width:this.opt.useImmersiveMode?window.screen.width:this.__gWidth,
height:this.opt.useImmersiveMode?window.screen.height-i-60:this.__gHeight,
autoplay:!1,
allowFullScreen:!0,
onSuccess:function(e){
t.__txPlayer=e.player,t.__dataCount=t.__targetDataCount,t.videoDataReady();
},
onError:function(){}
});
var o=this.__monitorUid,r=this.$store.state.cgiData;
return 1==r.is_login?this.triggerEvent("setMonitor",o,{
38:1
}):this.triggerEvent("setMonitor",o,{
39:1
}),this.triggerEvent("sendMonitor",o),!0;
}
return!1;
},
getPlayer:function(){
return this.$refs.player;
},
supportWcSlPlayer:function(){
return!!this.$refs.player&&this.$refs.player.supportWcSlPlayer();
},
getAdvanceCodecSupportBeforeCallback:function(t){
this.checkH265Support(t);
},
checkH265Support:function(t){
var e=this;
if(this.opt.useWcSlPlayer&&D.os.iphone)this.__supportH256=!0,"function"==typeof t&&t(),
this.reportH265Support(!0);else if(this.opt.useWcSlPlayer&&D.os.android)M.gtVersion("8.0.14",1)?I.invoke("handleVideoAction",{
action:"supportCodec",
codecId:172,
height:1920,
width:1080,
frameRate:60
},function(i){
var o=-1!==i.err_msg.indexOf(":ok");
e.__supportH256=!1,"function"==typeof t&&t(),e.reportH265Support(o);
}):(this.__supportH256=!1,"function"==typeof t&&t(),this.reportH265Support(!1));else{
var i=!1;
i=M.isIOS&&D.os.getNumVersion()>=11?!0:this.checkH5VideoCanPlayType(M.isAndroid?'video/mp4; codecs="hvc1"':'video/mp4; codecs="hevc"'),
this.__supportH256=!1,"function"==typeof t&&t(),this.reportH265Support(i);
}
},
checkH5VideoCanPlayType:function(t){
var e=document.createElement("video");
if("function"==typeof e.canPlayType){
var i=e.canPlayType(t);
if("maybe"==i.toLowerCase()||"probably"==i.toLowerCase())return!0;
}
return!1;
},
reportH265Support:function(){
var t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],e=this.__monitorUid2;
this.triggerEvent("setMonitor",e,{
36:1
}),t&&this.triggerEvent("setMonitor",e,{
37:1
}),this.triggerEvent("sendMonitor",e),console.log("support h256",t);
},
reportH265Play:function(){
var t=this.getVideoData();
if(t){
var e=this.__monitorUid2,i=54,o={
SlIOS:0,
H5IOS:2,
SlAndroid:4,
H5Android:6,
H5Others:8
},r=this.$refs.player.isWcSlPlayer?"Sl":"H5";
if(r+=M.isIOS?"IOS":M.isAndroid?"Android":"Others","number"==typeof o[r]){
var a=i+o[r],n=1*t.formatid%1e3>100;
this.triggerEvent("setMonitor",e,_defineProperty({},a,1)),n&&(this.triggerEvent("setMonitor",e,_defineProperty({},a+1,1)),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("H265PlayInfo","support h265: "+this.__supportH256+" || video data: "+JSON.stringify(t),{
mid:"mmbizwap:h265_support",
view:"wap_business"
})),this.triggerEvent("sendMonitor",e),console.log("report h256 play",r,n);
}
}
},
initPlayRangeInfo:function(t){
function e(t,e){
for(var i=[{
start:0,
end:t,
hasReport:!1
}];;){
var o=i[i.length-1];
if(o.end>=e)break;
i.push({
start:o.end,
end:o.end+t,
hasReport:!1
});
}
return i;
}
if(!(t.durationMs<=0)){
var i=this.opt.totalRange;
this.__playRangeInfo=1e3*i>=t.durationMs?e(1e3,t.durationMs):e(Math.ceil(t.durationMs/i),t.durationMs);
}
},
reportCurRangeInfo:function(t){
var e=this.__playRangeInfo;
if(e&&0!==e.length)for(var i=e.length,o=0;i>o;o++){
var r=e[o];
if(r.start<t.curTime&&r.end>=t.curTime){
r.hasReport||(r.hasReport=!0,L.report({
step:14,
vid:this.opt.vid,
hit_bizuin:this.opt.hitBizuin,
hit_vid:this.opt.hitVid,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
ori_status:this.getOriStatus(),
type:this.getReportTypeBySceneType(),
fromid:this.getFromid(),
total_range:i,
current_range:o+1,
duration:this.__reportData.duration_ms||e[i-1].end
}));
break;
}
}
},
getTraceId:function(){
return 0;
},
getOrderid:function(){
return 0;
},
getOriStatus:function(){
return this.opt.oriStatus;
},
getFromid:function(){
return this.opt.fromid;
},
qqVideoReport:function(t){
var e={
step:t.step,
loadwait:t.loadwait||0,
val:t.val||0,
vid:this.opt.vid
};
6==t.step&&(e.vt=this.__reportData.vt),B.qqvideo_common_report(e);
},
showEndContentInnerHandler:function(){
this.$refs.player.isWcSlPlayer?this.$refs.player.showCover():this.$refs.player.resetVideo();
},
danmuPluginInitedInnerHandler:function(){
this.__hasReport23439EnterStatus<3&&(1===this.__hasReport23439EnterStatus?(this.__hasReport23439EnterStatus=3,
this.reportEnter23439()):this.__hasReport23439EnterStatus=2);
},
getPlayerReportData:function(){
var t=this.__reportData,e=this.$refs.player;
e&&(t.play_time=this.getRealPlayTime(),t.full_screen=this.fullscreenStatus?1:0,t.quick_play=e.hasSeeked()?1:0,
t.drag_times=e.getSeekedTimes().join(":|:")),t.webviewid=L.getWebviewid();
},
pause:function(){
this.$refs.player&&this.$refs.player.pause4outer();
},
play:function(){
this.$refs.player&&this.$refs.player.play4outer();
},
topStickyInfoPlay:function(){
var t=this.$refs.player;
t&&(t.isEnd()?t.replay():t.play4outer());
},
getRealPlayTime:function(){
var t=0,e=this.$refs.player;
return e&&(t=Math.round(1e3*e.getPlayTotalTime())),t;
},
getIntervalPlayTimeFor23443:function(){
return this.getRealPlayTime()-this.__23443ReportPageTotalPlayTime-this.__23443ReportImmersiveTotalPlayTime;
},
getIntervalStayTimeFor23443:function(){
return Date.now()-this.__23443ReportPageEnterTime-this.__23443ReportPageTotalStayTime-this.__23443ReportImmersiveTotalStayTime;
},
getCurrentTime:function(){
var t=0,e=this.$refs.player;
return e&&(t=e.getCurTime()),t;
},
getCurrentTimeMs:function(){
return Math.round(1e3*this.getCurrentTime());
},
getVideoData:function(){
return this.__vInfo&&this.__vInfo.dynamicData&&this.__vInfo.dynamicData.data?this.__vInfo.dynamicData.data:null;
},
getReportData:function(){
return this.__reportData;
},
extendMpReportData:function(t){
_extends(this.__reportData,t);
},
getMpReportData:function(){
return this.__reportData;
},
recoverPlaybackRate:function(){
var t=this,e=this.__vInfo.status,i=e&&e.playbackRate||1;
this.$refs.player.setPlaybackRate(i),this.$refs.player.isWcSlPlayer&&setTimeout(function(){
return t.$refs.player.setPlaybackRate(i);
},250);
},
setLoop:function(t){
this.playerOpt&&(this.playerOpt.loop=t);
},
setMuted:function(t){
this.playerOpt&&(this.playerOpt.muted=t);
},
setAutoplay:function(t){
this.$refs.player&&(this.$refs.player.autoplay=t);
},
setVideoSize:function(t){
this.playerOpt&&("number"==typeof t.width&&(this.playerOpt.width=t.width),"number"==typeof t.height&&(this.playerOpt.height=t.height));
},
setVideoTopSticky:function(){
var t=this,e=this.$refs.player,i=-this.$el.getBoundingClientRect().top;
if(!e||0>i)return this.unsetVideoTopSticky();
var o=e.isPlay()||this.topStickyExpendWhenPaused,r=3*this.opt.width/4,a=this.opt.height-r,n=Math.max(0,Math.min(i,a)),s=o?this.opt.height-n:Math.max(this.opt.height-i,72);
this.wrapStyle={
position:"fixed",
zIndex:9,
top:0,
height:s+"px",
transition:this.__isPlayingWhenLastStick!==o?"height .2s ease-out":"height 0s"
},this.posterStyle={
top:"auto",
bottom:0,
minHeight:Math.min(this.opt.height,r)+"px"
},this.supportWcSlPlayer()&&!function(){
var i=1-n/t.opt.height,r=t.__isPlayingWhenLastStick!==o?"transform .25s":"transform 0s",p=o&&0>a?"transform-origin .25s linear":"transform-origin 0s";
(s>72||0===t.topStickyInfoStatus)&&(t.videoStyle={
bottom:0,
position:"absolute",
transition:p+", "+r,
transform:"scale3d("+i+", "+i+", 1.1)",
transformOrigin:"bottom"
}),s>72?t.resetVideoTopStickyInfo():0===t.topStickyInfoStatus&&(t.__topStickyAnimTimer=setTimeout(function(){
if(t.topStickyInfoStatus>200){
var i=135/t.opt.width;
t.videoStyle={
bottom:0,
position:"absolute",
transition:(0>a?p:"transform-origin .2s")+", transform .25s",
transform:"scale3d("+i+", "+i+", 1.1) translate(0, "+(t.opt.height*i-s)+"px)",
transformOrigin:"left bottom",
zIndex:999
},t.__topStickyAnimTimer=setTimeout(function(){
t.setTopStickyInfoStatus({
status:e.isEnd()?2:1
}),t.__topStickyAnimTimer=null;
},200),t.setTopStickyInfoStatus({
status:e.isEnd()?204:203
});
}
},200),e.preventOperating(),t.setTopStickyInfoStatus({
status:e.isEnd()?202:201
})),t.__isPlayingWhenLastStick=o;
}();
},
unsetVideoTopSticky:function(){
this.wrapStyle=null,this.posterStyle=null,this.supportWcSlPlayer()&&(this.videoStyle=null,
this.resetVideoTopStickyInfo());
},
resetVideoTopStickyInfo:function(){
if(this.topStickyInfoStatus>0){
var t=this.$refs.player;
t&&t.resumeOperating(),this.setTopStickyInfoStatus({
status:0
}),this.__topStickyAnimTimer&&(clearTimeout(this.__topStickyAnimTimer),this.__topStickyAnimTimer=null);
}
},
enableTopSticky:function(){
this.__videoTopStickyEnabled||(window.addEventListener("scroll",this.setVideoTopSticky),
this.__videoTopStickyEnabled=!0);
},
disableTopSticky:function(){
this.__videoTopStickyEnabled&&(window.removeEventListener("scroll",this.setVideoTopSticky),
this.__videoTopStickyEnabled=!1);
},
setVideoShareInfo:function(){
if(this.playerOpt){
var t=this.$store.state.cgiData;
if("0"===window.item_show_type){
var e=["https://mp.weixin.qq.com/s?item_show_type=16","&vid=",this.opt.vid,"&__biz=",this.opt.__biz,"&mid=",this.opt.mid,"&idx=",this.opt.idx,"&sn=",t.sn||"","#wechat_redirect"].join("");
window.customShareInfo={
vid:this.opt.vid,
link:e,
img_url:this.playerOpt.cover,
img_width:"120",
img_height:"90",
forbid_msg:this.opt.preview?"预览状态下无法#op#视频":t.isPaySubscribe?"付费图文内视频暂不支持#op#":null
},A.currentMpInfo({
vid:this.opt.vid,
duration:this.playerOpt.duration,
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||120,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||90,
videoCover:this.playerOpt.cover,
customSnapShot:M.isIOS&&this.__floatCoverBase64||"",
isMenuShowBrandInfo:0,
itemShowType:"16"
});
}else if("5"===window.item_show_type){
var e=["https://mp.weixin.qq.com/s?t=pages/video_detail_new&item_show_type=16&scene=#scene#","&vid=",this.opt.vid,"&__biz=",this.opt.__biz,"&mid=",this.opt.mid,"&idx=",this.opt.idx,"&sn=",t.sn||"","&vidsn=",t.vidsn||"","#wechat_redirect"].join("");
window.customShareInfo={
vid:this.opt.vid,
link:e,
img_url:this.playerOpt.cover,
img_width:"120",
img_height:"90",
forbid_msg:this.opt.preview?"预览状态下无法#op#视频":t.isPaySubscribe?"付费图文内视频暂不支持#op#":null
},A.currentMpInfo({
customSnapShot:M.isIOS&&this.__floatCoverBase64||"",
isMenuShowBrandInfo:0,
itemShowType:"16"
});
}
G(!1),q.setTopBar();
}
},
recoverVideoShareInfo:function(){
this.playerOpt&&("0"===window.item_show_type?(delete window.customShareInfo,A.currentMpInfo({
vid:"",
duration:0,
videoWidth:0,
videoHeight:0,
videoCover:"",
customSnapShot:"",
isMenuShowBrandInfo:1,
itemShowType:"0"
})):"5"===window.item_show_type&&A.currentMpInfo({
customSnapShot:"",
isMenuShowBrandInfo:1,
itemShowType:"5"
}),G(!0),q.setTopBar());
},
setVideoMenuItems:function(){
this.fullscreenStatus&&this.$refs.player&&this.$refs.player.needFeFullscreen&&J.supportImmersiveMode&&(this.opt.preview?I.invoke("hideMenuItems",{
menuList:["menuItem:share:appMessage"]
}):this.banOprStatus||this.$store.state.cgiData.isPaySubscribe?(I.invoke("hideMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),I.invoke("handleHaokanAction",{
action:ue,
permission:0
})):(this.banOprStatus||I.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),I.invoke("handleHaokanAction",{
action:ue,
permission:1,
recommend:this.playerOpt.isLiked?1:0
})));
},
recoverVideoMenuItems:function(){
this.opt.preview?I.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage"]
}):(I.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),I.invoke("handleHaokanAction",{
action:ue,
permission:1,
recommend:window.__article_liked__?1:0
}));
},
getFloatCoverBase64:function(t){
var e=this,i=new Image;
i.crossOrigin="anonymous",i.onload=function(){
i.onload=null,i.onerror=null;
try{
var t=i.naturalWidth||i.width,o=i.naturalHeight||i.height,r=document.createElement("canvas"),a=r.getContext("2d"),n=640,s=1280;
r.width=n,r.height=s,r.style.width=n+"px",r.style.height=s+"px";
var h=p("contain",n,s,t,o);
a.drawImage.apply(a,[i].concat(_toConsumableArray(h))),a.beginPath(),a.moveTo(n/2-50,s/2-60),
a.lineTo(n/2-50,s/2+60),a.lineTo(n/2+50,s/2),a.fillStyle="rgba(255,255,255,0.8)",
a.strokeStyle="rgba(255,255,255,0.8)",a.shadowBlur=100,a.shadowColor="rgba(0,0,0,0.5)",
a.fill(),a.closePath(),a.stroke(),e.__floatCoverBase64=r.toDataURL("image/jpeg",0),
e.__floatCoverBase64=e.__floatCoverBase64.replace("data:image/jpeg;base64,",""),
e.opt.useImmersiveMode&&e.setVideoShareInfo();
}catch(d){
e.__floatCoverBase64="",console.error(d);
}
},i.onerror=function(){
e.__floatCoverBase64="",i.onload=null,i.onerror=null;
},i.src=t;
},
showToast:function(t){
var e=this;
this.__toastTimeoutId&&clearTimeout(this.__toastTimeoutId),this.toastTips=t,this.__toastTimeoutId=setTimeout(function(){
e.__toastTimeoutId=null,e.toastTips="";
},1e3);
},
reportPv23447:function(){
if(!this.opt.useImmersiveMode){
var t=this.$store.state.cgiData;
O({
type:"POST",
timeout:2e3,
url:"/mp/appmsgreport?action=immersive",
data:{
__biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
vid:this.opt.vid,
scene:t.scene,
sub_scene:t.subscene,
devicetype:t.devicetype,
version:t.clientversion,
enterid:t.enterid,
sessionid:t.sessionid,
item_show_type:window.item_show_type,
channel_session_id:t.channel_session_id
}
});
}
},
computePlayTotalTimeForKyk:function(t){
this.__videoReportInfo.every_end_play_time=Math.round(1e3*t.currentTime),this.__videoReportInfo.total_play_time+=this.__videoReportInfo.every_end_play_time-this.__videoReportInfo.every_start_play_time,
console.log("real play time**********"+this.__videoReportInfo.total_play_time);
},
getCurrentDefinition:function(){
return pe.playerStatus.formatId?pe.definitionMap[pe.playerStatus.formatId]:this.__vInfo.dynamicData?pe.definitionMap[this.__vInfo.dynamicData.data.formatid]:0;
}
})
});
return o(),_(),{
global:pe,
mpVideoPlayer:ve,
getFormatTime:F._getFormatTime,
getAllPlayersOfPage:F._getAllPlayersOfPage,
getHashByVid:h,
getCoverByVid:d,
getQQVideoStaticInfo:s
};
});define("appmsg/without_iframe/video_appmsg.html.js",[],function(){
return'<div id="page-content">\n    <!--S 全屏播放 full_screen_mv-->\n    <div id="js_mpvedio_wrapper_<#=vid#>" style="position:relative; height: <#=video_h#>px">\n        <div class="add_bg_color appmsg_video">\n            <div id="js_video_tail_panel_<#=vid#>" class="video_tail_module video_screen_half" style="display: none;">\n                <div class="video_tail_module__hd" id="js_video_tail_hd">\n                    <div class="account_info_wrp">\n                        <div class="profile_info_wrp js_go_profile">\n                            <img class="account_avatar" src="" alt="" id="js_tail_panel_account_avatar">\n                            <div class="account_name" id="js_tail_panel_account_name"></div>\n                            <div class="subscription_info subscription_success">\n                                <div class="account_subscription_tips js_subscription_success" id="js_subscription_success"\n                                    style="display: none;">已关注</div>\n                                <i class="account_link_icon js_profile_icon" id="js_profile_icon"></i>\n                            </div>\n                        </div>\n                        <div class="btn_account_subscription js_btn_account_subscription" id="js_btn_account_subscription" style="display: none;">\n                            Follow</div>\n                    </div>\n                    <div class="opr_wrp">\n                        <span class="opr_item_wrp js_replay" id="js_replay">\n                            <i class="opr_item refresh_icon"></i>\n                            <span class="opr_item_text">Replay</span>\n                        </span>\n                        <span class="opr_item_wrp share_item_wrp js_share_button" id="js_tail_share_button"\n                            style="display: none;">\n                            <i class="opr_item share_icon"></i>\n                            <span class="opr_item_text">Share</span>\n                        </span>\n                        <!--点赞后 加className selected-->\n                        <span class="opr_item_wrp like_item_wrp" id="js_tail_like_button" style="display: none;">\n                            <i class="opr_item like_icon"></i>\n                            <span class="opr_item_text">Like</span>\n                        </span>\n                        <!-- <span class="opr_item_wrp recommend_item_wrp" id="js_tail_channel_button"\n                            style="display: none;">\n                            <i class="opr_item video-logo_icon"></i>\n                            <span class="opr_item_text">随便看看</span>\n                        </span> -->\n                    </div>\n                </div>\n\n                <!-- 有拓展内容 -->\n                <div class="have_expand" id="js_expand_area">\n                </div>\n\n                <!-- 广告内容 -->\n                <div class="ad_area" id="js_tail_video_ad_area">\n                </div>\n            </div>\n        </div>\n        <div id="js_vue_player_<#=index#>"></div>\n    </div>\n    <!--E 视频播放器-->\n    <!-- S 视频社交-->\n    <div id="bottom_bar" class="interact_video" style="display:none;height: 35px;">\n        <div class="inter_opr">\n            <a id="video_detail_btn" href="javascript:;" target="_blank" class="access_original">\n                Video Details            </a>\n        </div>\n    </div>\n</div>';
});;define('page/appmsg_new/mod/album_read.css', [], function(require, exports, module) {
	return ".wx_icon_pay_tag{color:#fff;background:#fa9d3b;border-radius:2px;font-size:10px;line-height:1;padding:3px 4px}.wx_icon_pay_tag_paid{color:#fa9d3b;background:rgba(250,157,59,0.2)}@media(prefers-color-scheme:dark){.wx_icon_pay_tag{background:#c87d2f}.wx_icon_pay_tag_paid{color:rgba(250,157,59,0.6);background:rgba(250,157,59,0.2)}}.album_read_card{overflow:hidden;margin-top:16px;font-size:14px;color:rgba(0,0,0,0.9);line-height:1.4}.album_read_card .weui-flex__item{min-width:0}.album_read_card .weui-btn__word-wrp{font-size:14px;color:rgba(0,0,0,0.5)}.album_read_hd{padding:20px 24px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.album_read_source{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;color:rgba(0,0,0,0.5)}.album_read_source a:active{opacity:.5}.album_read_directory_access{color:#576b95;margin-left:24px}.album_read_directory_access:active{opacity:.5}.album_read_directory_access:before{content:\"\";display:inline-block;vertical-align:middle;font-size:10px;width:2em;height:2em;margin-top:-0.2em;-webkit-mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23D8D8D8' d='M0 0h20v20H0z' opacity='0'\/%3E    %3Cpath fill='%23576B95' d='M14.8 13c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 14v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 10v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2V6a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 6v-.8c0-.11.09-.2.2-.2h9.6z'\/%3E  %3C\/g%3E%3C\/svg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23D8D8D8' d='M0 0h20v20H0z' opacity='0'\/%3E    %3Cpath fill='%23576B95' d='M14.8 13c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 14v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 10v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2V6a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 6v-.8c0-.11.09-.2.2-.2h9.6z'\/%3E  %3C\/g%3E%3C\/svg%3E\") no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor}.album_read_nav_item{position:relative;text-align:center;padding:0 24px 20px}.album_read_nav_item:before{content:\"\";position:absolute;top:4px;bottom:20px;left:0;width:1px;background:-webkit-linear-gradient(top,rgba(0,0,0,0.03),rgba(0,0,0,0.05) 50%,rgba(0,0,0,0.03) 100%)}.album_read_nav_item.album_read_nav_prev{text-align:left}.album_read_nav_item.album_read_nav_next{text-align:right}.album_read_nav_item:first-child:before{display:none}.album_read_nav_item:first-child:last-child{padding-top:12px;padding-bottom:32px}.album_read_nav_item:first-child:last-child:before{top:14px;bottom:32px}.album_read_nav_item:first-child:last-child .album_read_nav_btn:before,.album_read_nav_item:first-child:last-child .album_read_nav_btn:after{display:none}.album_read_nav_item:first-child:last-child .album_read_nav_inner{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;max-width:100%}.album_read_nav_item:first-child:last-child .album_read_nav_inner:before,.album_read_nav_item:first-child:last-child .album_read_nav_inner:after{content:\"\";-webkit-flex-shrink:0;flex-shrink:0;display:inline-block;vertical-align:middle;font-size:10px;margin-top:-1px;width:1em;height:2em;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor;-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.album_read_nav_item:first-child:last-child.album_read_nav_prev .album_read_nav_inner:before{transform:matrix(-1,0,0,-1,0,0);-ms-transform:matrix(-1,0,0,-1,0,0);-webkit-transform:matrix(-1,0,0,-1,0,0);margin-right:4px}.album_read_nav_item:first-child:last-child.album_read_nav_prev .album_read_nav_inner:after{display:none}.album_read_nav_item:first-child:last-child.album_read_nav_next .album_read_nav_inner:before{display:none}.album_read_nav_item:first-child:last-child.album_read_nav_next .album_read_nav_inner:after{margin-left:4px}.album_read_nav_item:first-child:last-child .album_read_nav_title{margin-top:0;display:-webkit-box;display:-webkit-flex;display:flex;min-width:0}.album_read_nav_item:first-child:last-child .album_read_nav_title:before{content:\"\\00B7\";display:block;margin-left:4px;margin-right:4px}.album_read_nav_item:first-child:last-child .album_read_nav_title_inner{display:block;white-space:nowrap}.album_read_nav_item:first-child:last-child .album_read_nav_btn{-webkit-flex-shrink:0;flex-shrink:0}.album_read_nav_btn{display:block;color:rgba(0,0,0,0.9);font-weight:500}.album_read_nav_btn:before,.album_read_nav_btn:after{content:\"\";display:inline-block;vertical-align:middle;font-size:10px;margin-top:-0.2em;width:1em;height:2em;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor;-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.album_read_nav_prev .album_read_nav_btn:before{transform:matrix(-1,0,0,-1,0,0);-ms-transform:matrix(-1,0,0,-1,0,0);-webkit-transform:matrix(-1,0,0,-1,0,0);margin-right:4px}.album_read_nav_prev .album_read_nav_btn:after{display:none}.album_read_nav_next .album_read_nav_btn:before{display:none}.album_read_nav_next .album_read_nav_btn:after{margin-left:4px}.album_read_nav_title{display:block;margin-top:6px;line-height:1.4;font-weight:500}.album_read_nav_title_inner{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.album_read_directory .weui-half-screen-dialog{padding:0}.album_read_directory .weui-half-screen-dialog__hd{padding:0 24px;padding:0 calc(24px + constant(safe-area-inset-right)) 0 calc(24px + constant(safe-area-inset-left));padding:0 calc(24px + env(safe-area-inset-right)) 0 calc(24px + env(safe-area-inset-left))}.album_read_directory .weui-btn__word-wrp{font-size:14px}.album_read_title{color:#576b95}.album_read_directory_item{display:-webkit-box;display:-webkit-flex;display:flex;color:rgba(0,0,0,0.9);line-height:1.4;font-size:17px;padding:24px 26px 24px 42px;padding:24px calc(26px + constant(safe-area-inset-right)) 24px calc(42px + constant(safe-area-inset-left));padding:24px calc(26px + env(safe-area-inset-right)) 24px calc(42px + env(safe-area-inset-left));position:relative}.album_read_directory_item:before{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid rgba(0,0,0,0.1);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);left:42px;left:calc(42px + constant(safe-area-inset-left));left:calc(42px + env(safe-area-inset-left));right:26px;right:calc(26px + constant(safe-area-inset-right));right:calc(26px + env(safe-area-inset-right))}.album_read_directory_item .wx_icon_pay_tag{margin-left:4px;margin-top:-0.2em;display:inline-block;vertical-align:middle}.album_read_directory_current{font-weight:500}.album_read_directory_current:after{content:\"\";background:var(--weui-BRAND);position:absolute;font-size:6px;width:1em;height:1em;border-radius:100%;left:20px;left:calc(20px + constant(safe-area-inset-left));left:calc(20px + env(safe-area-inset-left));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.album_read_directory_disabled{color:rgba(0,0,0,0.28)}.album_read_directory_item_index{margin-right:4px}@media(prefers-color-scheme:dark){.album_read_card{color:rgba(255,255,255,0.8)}.album_read_card .weui-btn__word-wrp{color:rgba(255,255,255,0.5)}.album_read_bd:before{border-top-color:rgba(255,255,255,0.05)}.album_read_directory_access{color:#7d90a9}.album_read_title{color:#7d90a9}.album_read_source{color:rgba(255,255,255,0.5)}.album_read_nav_item:before{background:-webkit-linear-gradient(top,rgba(255,255,255,0.03),rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.03) 100%)}.album_read_nav_btn{color:rgba(255,255,255,0.8)}.album_read_directory_item{color:rgba(255,255,255,0.8)}.album_read_directory_item:before{border-bottom-color:rgba(255,255,255,0.05)}.album_read_directory_disabled{color:rgba(255,255,255,0.24)}}";
});define("appmsg/more_read_tpl.html.js",[],function(){
return'<p class="read-more__desc">You can also read </p>\n<div class="read-more__article__area">\n  <# list.forEach(function (item) { #>\n    <div class="read-more__article__item">\n      <a href="javascript:;" class="more_read_link"><#=item.title#></a>\n      <# if (item.fans_read_cnt > 0) { #>\n        <p class="read-more__article__extra">Read by <#=item.fans_read_cnt#> friend(s)</p>\n      <# } #>\n    </div>\n  <# }); #>\n</div>';
});define("appmsg/retry_ajax.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(require,exports,module,alert){
"use strict";
function Retry_ajax(e){
checkAjaxDo(e),e&&(e.success=function(a){
dealWithSucceed(a,e);
},e.error=function(){
dealWithFailed(e);
}),ajax(e);
}
function checkAjaxDo(e){
var a=isContainExceptLike(e,failedQueue),i=isContainAjax(e,failedQueue);
-1===i&&a>-1&&failedQueue.splice(a,1);
}
function isContainExceptLike(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url||-1!=e.url.indexOf("&like=")||-1!=t.url.indexOf("&like=")){
if(!(e.url.indexOf("&like=")>-1&&t.url.indexOf("&like=")>-1))continue;
if(removeLikeParam(e.url)!==removeLikeParam(t.url))continue;
}else if(!t.url||t.url!==e.url)continue;
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqualExceptLike(u,n))continue;
}
i=r;
break;
}
return i;
}
function isContainAjax(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url&&t.url&&e.url==t.url){
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqual(u,n))continue;
}
i=r;
break;
}
}
return i;
}
function removeLikeParam(e){
var a=e.indexOf("&like="),i=e.substring(0,a)+e.substring(a+7);
return i;
}
function isEqualExceptLike(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if("like"!==u&&e[u]!==a[u])return!1;
}
return!0;
}
function isEqual(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if(e[u]!==a[u])return!1;
}
return!0;
}
function dealWithSucceed(res,obj){
try{
var data=eval("("+res+")");
}catch(e){
var data=!1;
}
if(data&&data.base_resp&&0===data.base_resp.ret){
var findIndex=isContainExceptLike(obj,failedQueue);
findIndex>-1&&failedQueue.splice(findIndex,1);
}else dealWithFailed(obj);
}
function dealWithFailed(e){
var a=isContainExceptLike(e,failedQueue);
if(-1===a){
if(e.failedTimes=1,failedQueue.length>=MAX_QUEUE_LEN)return;
failedQueue.push(e);
}else{
var i=isContainAjax(e,failedQueue);
if(i>-1){
if(failedQueue[a].failedTimes++,e.failedTimes=failedQueue[a].failedTimes,e.failedTimes>MAX_FAILED_TIMES)return void failedQueue.splice(i,1);
}else failedQueue.splice(i,1),e.failedTimes=1,failedQueue.push(e);
}
Retry_ajax(e);
}
var ajax=require("biz_wap/utils/ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),failedQueue=[],MAX_FAILED_TIMES=2,MAX_QUEUE_LEN=20;
return Retry_ajax;
});define("complain/tips.js",["biz_common/utils/string/html.js","biz_common/dom/event.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var i=t("biz_common/dom/event.js"),o={
tipsTimeoutId:null,
tipsDom:document.getElementById("tips")
},s={
showErrTips:function(t,i){
var s=i||o.tipsDom;
return t===!1?void(s.style.display="none"):(this.resetTips(),s.innerHTML=t.htmlEncode(),
s.style.display="block",clearTimeout(o.tipsTimeoutId),void(o.tipsTimeoutId=setTimeout(function(){
s.style.display="none";
},4e3)));
},
resetTips:function(t){
setTimeout(function(){
var i=t||o.tipsDom;
i&&(i.style.top=document.body.scrollTop+"px");
},0);
}
};
return i.on(window,"scroll",function(){
s.resetTips();
}),s;
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var o="number"!=typeof t.retry?1:t.retry,n=t.win||window,r=n.document,a=r.createElement("script"),d=t.type||"JSONP",i=r.head||r.getElementsByTagName("head")[0]||r.documentElement,l=t.callbackName,u="uninitialized",c="undefined"==typeof t.successCode?200:t.successCode,s="undefined"==typeof t.timeoutCode?500:t.timeoutCode,f="undefined"==typeof t.stateErrorCode?400:t.stateErrorCode,m="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,p=!1,y=null;
"JSONP"!=d&&"JS"!=d&&(d="JSONP");
var C="";
C="JSONP"==d?t.url+"&t="+Math.random():t.url;
var h=function(e){
a&&!p&&(p=!0,y&&(clearTimeout(y),y=null),a.onload=a.onreadystatechange=a.onerror=null,
i&&a.parentNode&&i.removeChild(a),a=null,l&&-1==l.indexOf(".")&&(window[l]=null),
"JS"==d&&e==c&&"loaded"==u&&"function"==typeof t.callback?t.callback():e!=c&&"loaded"!=u&&"function"==typeof t.onerror&&t.onerror(e));
};
if(l&&"function"==typeof t.callback&&"JSONP"==d){
var w=l;
-1==l.indexOf(".")&&(l=window[l]?l+e.counter++:l,window[l]=function(){
u="loaded",t.callback.apply(null,arguments);
}),C=C.replace("="+w,"="+l);
}
a.onload=a.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&("JS"==d&&(u="loaded"),
h("loaded"==u?c:f));
},a.onerror=function(){
return o>0?(t.retry=o-1,y&&(clearTimeout(y),y=null),void e(t)):void h(m);
},t.timeout&&(y=setTimeout(function(){
h(s);
},parseInt(t.timeout,10))),u="loading",a.charset="utf-8",setTimeout(function(){
a.src=C;
try{
i.insertBefore(a,i.lastChild);
}catch(e){}
},0);
}
return e;
});define("biz_wap/utils/ajax_load_js.js",["biz_wap/utils/ajax.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function n(e){
var n=d(e.url,e.version),o=function(){},i=function(){};
if("function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(i=e.onError),
c(e.win,n))return void o({
code:1,
queueIndex:0
});
if(e.useCache){
var a=u(e.url,e.version);
if(a&&t({
win:e.win,
funcStr:a,
useCache:!1,
url:e.url,
version:e.version
}),c(e.win,n))return void o({
code:2,
queueIndex:0
});
}
if(S.callbackQueue.push({
options:e,
onSuccess:o,
onError:i
}),"undefined"==typeof S.jsLoadState[n]&&(S.jsLoadState[n]=-1),-1==S.jsLoadState[n]){
var s=e.url;
s+=-1==s.indexOf("?")?"?"+S.customerParam+"="+e.version:"&"+S.customerParam+"="+e.version,
r({
originUrl:e.url,
version:e.version,
url:s,
key:n
});
}
}
function r(e){
S.jsLoadState[e.key]=1,w({
url:e.url,
notJoinUrl:!0,
timeout:1e4,
type:"POST",
dataType:"text",
noXRequestedWidthHeader:!0,
success:function(n){
if(1==S.jsLoadState[e.key]){
S.jsLoadState[e.key]=-1;
var r=!0;
r=n?t({
win:null,
funcStr:n,
useCache:!0,
url:e.originUrl,
version:e.version
}):!1,o(r?{
code:3,
type:"suc",
funcStr:n
}:{
code:51,
type:"err"
});
}
},
error:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:52,
type:"err"
}));
},
complete:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:53,
type:"err"
}));
}
});
}
function t(e){
var n=e.win||window,r=!0;
try{
n.eval(e.funcStr),r=!0;
}catch(t){
r=!1;
}
return r?(s({
url:e.url,
version:e.version,
win:n
}),e.useCache&&a(e.url,e.version,e.funcStr),!0):(l({
url:e.url,
version:e.version,
win:n
}),i(e.url),!1);
}
function o(e){
for(var n=0,r=S.callbackQueue.length;r>n;n++){
var o=S.callbackQueue[n],u=o.options,i=u.win,a=d(u.url,u.version);
"suc"==e.type?(e.funcStr&&!c(i,a)&&t({
win:i,
funcStr:e.funcStr,
useCache:!1,
url:u.url,
version:u.version
}),o.onSuccess({
code:e.code,
queueIndex:n
})):o.onError({
code:e.code,
queueIndex:n
});
}
S.callbackQueue=[];
}
function u(e,n){
var r=f(e),t=y.get(r);
if(!t)return null;
var o;
try{
o=JSON.parse(t);
}catch(u){}
if(o){
var a=+new Date,c=1*o.time;
return a-c>S.lsTimeout||o.version!=n||!o.func?(i(e),null):o.func;
}
}
function i(e){
var n=f(e);
y.remove(n);
}
function a(e,n,r){
var t={
version:n,
func:r,
time:+new Date
},o=f(e);
try{
y.set(o,JSON.stringify(t));
}catch(u){}
}
function c(e,n){
return e=e||window,e[S.winCacheKey]&&e[S.winCacheKey][n]&&e[S.winCacheKey][n].state===!0?!0:!1;
}
function s(e){
var n=d(e.url,e.version),r=e.win||window;
r[S.winCacheKey]||(r[S.winCacheKey]={}),r[S.winCacheKey][n]||(r[S.winCacheKey][n]={}),
r[S.winCacheKey][n].state=!0;
}
function l(e){
var n=d(e.url,e.version),r=e.win||window;
if(r[S.winCacheKey]&&r[S.winCacheKey][n])try{
delete r[S.winCacheKey][n];
}catch(t){}
}
function f(e){
return encodeURIComponent(e);
}
function d(e,n){
return encodeURIComponent(e)+"_"+n||"";
}
function v(e){
l(e),i(e.url);
}
var w=e("biz_wap/utils/ajax.js"),y=e("biz_wap/utils/localstorage.js"),S={
jsLoadState:{},
winCacheKey:"__loadExternalJsStates__",
lsTimeout:1728e5,
customerParam:"wxv",
callbackQueue:[]
};
return{
ClearCache:v,
Load:n
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);
}
return e;
};
define("appmsg/reward_entry.js",["biz_wap/ui/weui.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","appmsg/appmsgext.js","appmsg/open_url_with_webview.js","common/utils.js","biz_wap/utils/device.js","appmsg/loading.js","common/comm_report.js","appmsg/pay_read/pay_read_utils.js","biz_wap/utils/jsmonitor_report.js","appmsg/rec_report_key.js","appmsg/like_profile.js","appmsg/related_article.js"],function(e,t,n,a){
"use strict";
function r(e){
e&&(e.style.display="block");
}
function i(e){
e&&(e.style.display="none");
}
function o(e){
v.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
pass_ticket:window.pass_ticket,
scene:R.scene,
title:R.title,
ct:ct,
devicetype:R.devicetype,
version:R.version,
is_need_reward:R.is_need_reward,
reward_uin_count:R.is_need_reward?3*u:0,
send_time:R.send_time||"",
item_show_type:window.item_show_type||"",
rtId:R.appmsgextRtId,
rtKey:R.appmsgextRtKey,
is_pay_subscribe:window.isPaySubscribe,
pay_subscribe_uin_count:window.isPaySubscribe?3*j.getCountPerLine():0,
onSuccess:function(t){
t&&(e||(A.rewardLink&&m.off(A.rewardLink,"click",U),A.authorAvatarLink&&m.off(A.authorAvatarLink,"click",X),
W=[],s({
reward_total:t.reward_total_count,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
timestamp:t.timestamp,
reward_author_head:t.reward_author_head,
rewardsn:t.rewardsn,
can_whisper:t.can_whisper
})),t.appmsgact&&t.appmsgact.reward_before&&(z.renderLikeProfile(["reward"]),S&&S.render&&S.render("reward")),
console.log("reloadRewardData:",t,e),j.init(t.pay_subscribe_info,{
rewardTotal:t.reward_total_count,
rewardTotalCut:t.is_reward_total_count_cut
},!0));
},
onError:function(){}
});
}
function d(e,t,n){
if("link"===n){
var r="#wechat_redirect";
e=e.replace(r,"&__tc=1"+r);
}
var i=function(){
Y.src=t+"&qrcode_timestamp="+1*new Date+"#wechat_redirect";
},o=null;
return function(t){
if(t.preventDefault(),"link"===n&&R.is_teenager)return weui.alert("青少年模式下不可赞赏"),
void T.setSum(232209,0,1);
if("0"==R.user_can_reward)return void a("你已成为该公众号的黑名单用户，暂时无法赞赏。");
if(B(L.kReward),R.isWindowsWechat){
var r=function(){
var e="js_author_reward_qrcode",t="reward_pop_show",n=document.getElementById(e);
if(n.classList.contains(t))return{
v:void 0
};
i(),o=setInterval(i,12e4),n.classList[A.rewardLink.getBoundingClientRect().top<222?"add":"remove"]("reward_pop_bottom"),
n.classList.add(t);
var a=function r(a){
if(n.classList.contains(t)){
for(var i=a.target;null!==i&&i.id!==e;)i=i.parentNode;
(null===i||i.id!==e)&&(n.classList.remove(t),clearInterval(o),o=null,m.off(window,"click",r));
}
};
setTimeout(function(){
m.on(window,"click",a);
},1);
}();
if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v;
}else"avatar"===n&&window.__addIdKeyReport?window.__addIdKeyReport(R.likeHeadId,R.likeHeadKey):window.__addIdKeyReport&&window.__addIdKeyReport(R.likeBtnId,R.likeBtnKey),
f.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
});
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((b.getInnerHeight()-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var a="#wechat_redirect",s="";
s="https://mp.weixin.qq.com/mp/author?action=show&__biz="+biz+"&appmsgid="+mid+"&timestamp="+e.timestamp+"&author_id="+R.author_id+"&idx="+idx+"&scene="+R.authorPageScene+"&rscene="+R.authorPageRscene+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+e.isFans,
e.rewardsn&&(s+="&rewardsn="+e.rewardsn),s+=a,-1==navigator.userAgent.indexOf("Android")||R.author_id||(s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1&rewardsn="+e.rewardsn+a);
var p=A.rewardLink,v=A.authorAvatarLink;
if(!Q&&b.listenStateChange({
cb:function(e){
if("onResume"==e.state_change||"onResume"==e.state)if(p){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=M)return;
localStorage.setItem("lastOnresumeTime",t),g.isAndroid&&!R.author_id&&f.invoke("setNavigationBarColor",{
actionCode:"1"
}),o();
}else o(!0);
}
}),Q=!0,p){
var x="/mp/authorreward?action=getqrcode&author_id="+R.author_id+"&rewardsn="+e.rewardsn+"&timestamp="+e.timestamp+"&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&size=160";
if(U=d(s,x,"link"),X=d(s,x,"avatar"),m.on(p,"click",U),R.author_id&&1==e.can_reward&&v&&m.on(v,"click",X),
1==e.can_reward&&R.author_id&&A.reward){
r(document.getElementById("js_reward_author")),r(A.authorAvatarLink),A.rewardAuthorHead&&A.rewardAuthorHead.setAttribute("src",e.reward_author_head),
A.reward.classList.add("reward_area_primary");
var k=A.rewardLinkText;
k&&(k.innerText="Like the Author",Math.random()<.05?k.innerText="Kudos to the Author":Math.random()>.05&&Math.random()<.1&&(k.innerText="Love the Author")),
A.rewardTotalText&&(A.rewardTotalText.innerText=" like(s)"),R.isWindowsWechat&&A.reward.classList.add("reward_area_win"),
!b.isNativePage()&&e.can_whisper?G():$();
}
}
H=e.reward_head_imgs;
var I=c();
A.reward&&(R.author_id||g.isAndroid)&&1==e.can_reward?(r(A.reward),m.on(window,"load",function(){
l&&(m.off(window,"scroll",l),m.on(window,"scroll",l));
})):i(A.reward);
var j=document.getElementById("js_reward_inner");
!window.isPaySubscribe&&j&&I>0&&r(j);
var T=[].concat(H),E=document.getElementById("js_reward_total");
if(P=16*u,W=[].concat(H),E)if(E.innerText=e.reward_total,R.isWindowsWechat){
var L=E.parentNode;
L.dataset.hasEvent||!function(){
var t=document.getElementById("js_reward_pagination"),n=t.getElementsByClassName("js_reward_pagination_curpage")[0],a=Math.ceil(e.reward_total/P),o=1,d=!0,s=document.getElementById("js_reward_list"),c=function(t,n){
for(var r=(t-1)*P,i=d?3*u:0,o=document.createDocumentFragment(),c=r+i,l=t===a?e.reward_total:t*P;l>c;c++)w(o,n?window.defaultAvatarUrl:W[c]);
return!d&&(s.innerHTML=""),s.appendChild(o),d=!1,n?function(){
for(var e=s.getElementsByClassName("reward_user_avatar"),t=i,n=e.length;n>t;t++)e[t].firstElementChild.src=W[r+t];
}:!1;
};
n.innerHTML=o,t.getElementsByClassName("js_reward_pagination_totalpage")[0].innerHTML=a;
var l="/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&count="+P,p=null,_=function(t){
var n=W.length;
e.reward_total>n&&t*P>n?(p=null,p=c(t,!0),h({
url:l+"&offset="+(t-1)*P+"#wechat_redirect",
type:"GET",
success:function(e){
try{
e=JSON.parse(e),e.reward_heads=JSON.parse(e.reward_heads).reward_heads;
}catch(t){
e={};
}
e.base_resp&&0===e.base_resp.ret&&(e.reward_heads.forEach(function(e){
var t=T.indexOf(e);
t>-1?T.splice(t,1):W.push(e);
}),"function"==typeof p&&p());
}
})):c(t);
};
I<e.reward_total&&!function(){
A.reward.classList.add("reward_avatar_overflow");
for(var w=s.children[0];1!==w.nodeType;)w=reward.nextElementSibling;
var c=getComputedStyle(w),l=w.offsetHeight+parseInt(c.marginBottom)+parseInt(c.marginTop);
O=function(t){
s.style.height="fold"===t?3*l+"px":a>o?l*Math.ceil(P/u)+"px":l*Math.ceil(e.reward_total%P/u)+"px";
},O("fold"),m.on(L,"click",function(){
A.reward.classList.contains("reward_avatar_unfold")?(A.reward.classList.remove("reward_avatar_unfold"),
a>1&&i(t),O("fold")):(1===o&&d&&_(o),A.reward.classList.add("reward_avatar_unfold"),
a>1&&r(t),O("unfold"));
}),a>1&&m.on(t,"click",function(e){
var t=e.target;
if(t.classList.contains("js_reward_pagination_prev")){
if(o--,n.innerHTML=o,_(o),1===o&&(t.disabled=!0),o===a-1){
for(;t&&!t.classList.contains("js_reward_pagination_next");)t=t.nextElementSibling;
t&&(t.disabled=!1),O("unfold");
}
}else if(t.classList.contains("js_reward_pagination_next")&&(o++,n.innerHTML=o,_(o),
o===a&&(t.disabled=!0,O("unfold")),2===o)){
for(;t&&!t.classList.contains("js_reward_pagination_prev");)t=t.previousElementSibling;
t&&(t.disabled=!1);
}
});
}(),L.dataset.hasEvent=1;
}();
}else E.setAttribute("data-href",_),E.getAttribute("data-hasevent")||(m.on(E,"click",function(e){
var t=E.getAttribute("data-href");
y(t,{
sample:1,
reject:function(){
location.href=t;
}
}),e.preventDefault();
}),E.setAttribute("data-hasevent",1));
}
function w(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var a=new Image;
return a.onload=function(){
window.logs&&window.logs.reward_heads_total++,a.onload=a.onerror=null;
},a.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
a.onload=a.onerror=null;
},a.src=t,n.appendChild(a),e.appendChild(n),n;
}
function c(e){
var t=W.length?W:H;
if(t.length){
var n=document.getElementById("js_reward_list"),a=0,r=document.createDocumentFragment();
if(n){
var i=A.reward.classList.contains("reward_avatar_unfold");
if("function"==typeof O&&O(i?"unfold":"fold"),!e){
for(var o=0,d=t.length;d>o&&(a++,w(r,t[o]),i||a!==3*u)&&a!==(P||16*u);++o);
a>u&&(n.className+=" tl"),n.innerHTML="",n.appendChild(r);
}
}
return a;
}
}
function l(){
if(A.reward){
var e=window.pageYOffset||document.documentElement.scrollTop;
if(e+b.getInnerHeight()>A.reward.offsetTop){
var t="__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&item_show_type="+item_show_type;
window.cgiData&&window.cgiData.vid&&(t+="&vid="+cgiData.vid),h({
type:"GET",
url:"/bizmall/reward?act=report&"+t,
async:!0
}),m.off(window,"scroll",l),l=null;
}
}
}
function p(e){
"undefined"!=typeof e.scene&&(R.scene=e.scene),"undefined"!=typeof e.is_need_reward&&(R.is_need_reward=e.is_need_reward),
"undefined"!=typeof e.title&&(R.title=e.title),"undefined"!=typeof e.author_id&&(R.author_id=e.author_id),
"undefined"!=typeof e.user_can_reward&&(R.user_can_reward=e.user_can_reward),"undefined"!=typeof e.appmsgextRtId&&(R.appmsgextRtId=e.appmsgextRtId),
"undefined"!=typeof e.appmsgextRtKey&&(R.appmsgextRtKey=e.appmsgextRtKey),"undefined"!=typeof e.likeHeadId&&(R.likeHeadId=e.likeHeadId),
"undefined"!=typeof e.likeHeadKey&&(R.likeHeadKey=e.likeHeadKey),"undefined"!=typeof e.likeBtnId&&(R.likeBtnId=e.likeBtnId),
"undefined"!=typeof e.likeBtnKey&&(R.likeBtnKey=e.likeBtnKey),"undefined"!=typeof e.authorPageScene&&(R.authorPageScene=e.authorPageScene),
"undefined"!=typeof e.authorPageRscene&&(R.authorPageRscene=e.authorPageRscene),
"undefined"!=typeof e.devicetype&&(R.devicetype=e.devicetype),"undefined"!=typeof e.version&&(R.version=e.version),
"undefined"!=typeof e.send_time&&(R.send_time=e.send_time);
}
e("biz_wap/ui/weui.js");
var u,_,m=e("biz_common/dom/event.js"),h=e("biz_wap/utils/ajax.js"),f=e("biz_wap/jsapi/core.js"),g=e("biz_wap/utils/mmversion.js"),v=e("appmsg/appmsgext.js"),y=e("appmsg/open_url_with_webview.js"),b=e("common/utils.js"),x=e("biz_wap/utils/device.js"),k=e("appmsg/loading.js"),I=e("common/comm_report.js"),j=e("appmsg/pay_read/pay_read_utils.js"),T=e("biz_wap/utils/jsmonitor_report.js"),E=e("appmsg/rec_report_key.js"),L=E.RecActionType,B=E.reportRecAction,z=e("appmsg/like_profile.js"),S=e("appmsg/related_article.js"),R={
scene:window.source||"",
is_need_reward:!1,
is_teenager:window.is_teenager,
title:window.msg_title||"",
author_id:window.author_id||"",
user_can_reward:!0,
appmsgextRtId:"",
appmsgextRtKey:"",
likeHeadId:"110809",
likeHeadKey:"2",
likeBtnId:"110809",
likeBtnKey:"3",
authorPageScene:"142",
authorPageRscene:"128",
devicetype:window.devicetype||"",
version:window.version||"",
send_time:window.send_time||"",
isWindowsWechat:-1!==window.navigator.userAgent.indexOf("WindowsWechat"),
whisperMaxLen:40,
focusTag:!1,
doubleInputChar:["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"],
sendLock:!1
},A={
reward:document.getElementById("js_reward_area"),
rewardLink:document.getElementById("js_reward_link"),
authorAvatarLink:document.getElementById("js_reward_avatar"),
rewardAuthorHead:document.getElementById("js_reward_author_head"),
rewardLinkText:document.getElementById("js_reward_link_text"),
rewardTotalText:document.getElementById("js_reward_total_text"),
whisperWrap:document.getElementById("js_reward_whisper"),
whisperDialogShow:document.getElementById("js_show_whisper_dialog"),
whisperDialogHide:document.getElementById("js_hide_whisper_dialog"),
whisperDialogMask:document.getElementById("js_whisper_dialog_mask"),
whisperDialog:document.getElementById("js_reward_whisper_dialog"),
whisperTextarea:document.getElementById("js_whisper_text"),
whisperMsg:document.getElementById("js_whisper_msg"),
whisperCnt:document.getElementById("js_whisper_current_cnt"),
whisperSend:document.getElementById("js_whisper_send")
},H=[],M=500,O=null,P=0,W=[],D=function(e){
e&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("force horizontal screen","biz: "+("function"==typeof window.atob?window.atob(window.biz):window.biz)+" | mid: "+window.mid+" | idx: "+window.idx+" | action: "+e,{
mid:"mmbizwap:horizontal_screen",
view:"wap_business"
});
};
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var K,C=function(e){
var t=e.target;
"TEXTAREA"!==t.tagName&&"BUTTON"!==t.tagName&&(e.preventDefault(),e.stopPropagation());
},N=function(e){
var t=e.targetTouches||[];
if(t.length>0){
var n=t[0]||{};
K=n.clientY;
}
},q=function(e){
var t=!1,n=e.changedTouches,a=this.scrollTop,r=this.offsetHeight,i=this.scrollHeight;
if(n.length>0){
var o=n[0]||{},d=o.clientY;
t=d>K&&0>=a?!1:K>d&&a+r>=i?!1:!0,t||e.preventDefault();
}
},J=function(){
document.addEventListener("touchmove",C,{
passive:!1
}),A.whisperTextarea.addEventListener("touchstart",N,{
passive:!1
}),A.whisperTextarea.addEventListener("touchmove",q,!1);
},F=function(){
document.removeEventListener("touchmove",C,{
passive:!1
}),A.whisperTextarea.removeEventListener("touchstart",N,{
passive:!1
}),A.whisperTextarea.removeEventListener("touchmove",q,!1);
},U=function(){},X=function(){},Y=document.getElementById("js_author_reward_qrcode_img"),G=function(){
return r(A.whisperWrap);
},$=function(){
return i(A.whisperWrap);
},Q=!1,V=function(e){
var t=0;
try{
t=1*window.atob(window.biz);
}catch(n){}
var a={
BizUin:t,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
IsFans:1*e||0
},o=function(e){
return weui.alert(e&&e>R.whisperMaxLen?"悄悄话不可以超过字":"Network unavailable. Try again later.");
},d=function(){
if(!A.whisperSend.disabled&&!R.sendLock){
R.sendLock=!0,I.report(19048,_extends({
EventType:3
},a)),k.show("Sending");
var e=A.whisperTextarea.value.replace(/^\s+|\s+$/g,"");
h({
url:"/mp/author?action=whisper",
data:{
__biz:window.biz||window.__biz,
mid:window.mid||window.appmsgid,
idx:window.idx,
content:e,
scene:window.source,
subscene:window.subscene,
enterid:window.enterid,
sessionid:window.sessionid
},
type:"POST",
success:function(t){
try{
t=JSON.parse(t);
}catch(n){
t={};
}
R.sendLock=!1,k.hide(),t&&t.base_resp&&0===t.base_resp.ret?(s(),$(),weui.toast("Posted",1e3)):o(e.length);
},
error:function(){
R.sendLock=!1,k.hide(),o();
}
});
}
},s=function(){
!g.isIPad&&g.isWechat&&f.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!1
},function(){}),i(A.whisperDialog),A.whisperTextarea.value="",A.whisperSend.disabled=!0,
F();
};
m.on(A.whisperDialogShow,"click",function(){
var e=90===Math.abs(window.orientation);
!g.isIPad&&g.isWechat&&f.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
},function(t){
t.err_msg&&-1!==t.err_msg.indexOf("ok")&&e&&D(4);
}),I.report(19048,_extends({
EventType:2
},a)),r(A.whisperDialog),A.whisperTextarea.focus(),J();
}),m.on(A.whisperDialogHide,"mousedown",s),m.on(A.whisperDialogMask,"mousedown",s),
m.on(A.whisperTextarea,"input",function(e){
var t=e.target.value.replace(/^\s+|\s+$/g,"").length;
t>R.whisperMaxLen?(A.whisperSend.disabled=!0,A.whisperCnt.innerHTML=t,A.whisperMsg.style.visibility="visible"):(A.whisperSend.disabled=0===t,
A.whisperMsg.style.visibility="hidden"),x.os.ios&&e.data&&R.doubleInputChar.indexOf(e.data)>-1&&(R.focusTag=!0);
}),m.on(A.whisperTextarea,"click",function(e){
if(x.os.ios&&R.focusTag){
var t=e.target;
t.blur(),t.focus(),R.focusTag=!1;
}
}),m.on(A.whisperSend,"mousedown",d);
};
return{
handle:function(e,t){
u=t,p(e),1==e.can_reward&&R.author_id&&A.reward&&V(e.isFans),s(e);
},
render:function(e){
u=e,c(!0);
},
bindWhisperEvent:V,
showWhisperWrap:G
};
});define("complain/utils/utils.js",["biz_common/tmpl.js"],function(r,t,n){
"use strict";
function e(r,t){
var n=t||window.location.search,e=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),i=n.substr(n.indexOf("?")+1).match(e);
return null!=i?i[2]:"";
}
function i(r,t,n){
var e="string"==typeof t?t.split("."):t;
if(1===e.length)return void(r[t]=n);
var o=e.shift();
i(r[o],e,n);
}
function o(){
var r;
return Array.from?(r=Array).from.apply(r,arguments):[].slice.call(arguments[0]);
}
function u(r,t,n){
var e=r;
"string"==typeof r&&(e=document.querySelector(r)),e.innerHTML=a.tmpl(t,n);
}
var a=r("biz_common/tmpl.js"),s=function(){
return(65536*(1+Math.random())|0).toString(16).substring(1);
},c=function(r){
return Array.prototype.slice.call(r,0);
};
n.exports={
uuid:s,
toArray:c,
getQuery:e,
set:i,
arrayfrom:o,
renderTpl:u
};
});var _slicedToArray=function(){
function e(e,t){
var n=[],r=!0,o=!1,m=void 0;
try{
for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);
}catch(s){
o=!0,m=s;
}finally{
try{
!r&&i["return"]&&i["return"]();
}finally{
if(o)throw m;
}
}
return n;
}
return function(t,n){
if(Array.isArray(t))return t;
if(Symbol.iterator in Object(t))return e(t,n);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}(),_extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);
}
return e;
};
define("pages_new/modules/comment/comment_store.js",["pages_new/3rd/vue.js","common/keyboard.js","biz_wap/utils/mmversion.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
var t=e("pages_new/3rd/vue.js"),n=e("common/keyboard.js"),r=e("biz_wap/utils/mmversion.js"),o=e("biz_wap/utils/jsmonitor_report.js"),m="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0";
return{
name:"mp-comment",
namespaced:!0,
state:function(){
return{
isVoiceover:!1,
writeStatus:0,
myCommentData:null,
myCommentStatus:0,
commentData:null,
commentStatus:0,
commentVersion:function(){
return r.isWechat?r.isInMiniProgram?0:n.canUseKeyboard?2:(r.isIOS||r.isAndroid)&&r.gtVersion("7.0.8")?2:2:0;
}(),
offset:0,
replyFlag:0,
warningToast:"",
reportData:{
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
}
};
},
getters:{
tempKey:function(e,t,n){
return n.cgiData.tempkey||"";
},
commentId:function(e,t,n){
return n.cgiData.comment_id||"";
},
commentEnabled:function(e,t,n){
return n.extRes.comment_enabled||0;
},
commentCount:function(e,t,n){
return n.extRes.comment_count;
},
nickName:function(e,t,n){
return n.extRes.nick_name||"";
},
headImg:function(e,t,n){
return n.extRes.logo_url||m;
},
isFans:function(e,t,n){
return n.extRes.is_fans||0;
},
isFansDays:function(e,t,n){
return n.extRes.is_fans_days||0;
},
onlyFansCanComment:function(e,t,n){
return n.extRes.only_fans_can_comment||0;
},
onlyFansDaysCanComment:function(e,t,n){
return n.extRes.only_fans_days_can_comment||0;
},
canC2cReply:function(e,t,n){
return!!n.extRes.test_flag&&0!==(256&n.extRes.test_flag);
}
},
mutations:{
setIsVoiceover:function(e,t){
e.isVoiceover=t.value;
},
setCommentVersion:function(e,t){
e.commentVersion=t.value;
},
setWriteStatus:function(e,t){
e.writeStatus=t.status;
},
setMyCommentData:function(e,t){
e.myCommentData=t.data;
},
setMyCommentStatus:function(e,t){
e.myCommentStatus=t.status;
},
setCommentData:function(e,t){
e.commentData=t.data;
},
setCommentLike:function(e,t){
var n=t.type,r=void 0===n?"mine":n,o=t.commentIdx,m=t.replyIdx,a=t.likeStatus,i="mine"===r?e.myCommentData.my_comment:e.commentData.elected_comment;
if("number"==typeof o&&"undefined"==typeof m){
var s=i[o];
s&&s.like_status!==a&&(s.like_status=a,s.like_num+=a?1:-1);
}else if("number"==typeof o&&"number"==typeof m){
var s=i[o],u=s.reply_new.reply_list[m];
u&&u.reply_like_status!==a&&(u.reply_like_status=a,u.reply_like_num+=a?1:-1,s.reply_new=_extends({},s.reply_new));
}
},
setAnimationStatus:function(e,t){
var n=t.type,r=void 0===n?"mine":n,o=t.commentIdx,m=t.replyIdx,a="mine"===r?e.myCommentData.my_comment:e.commentData.elected_comment;
if("number"==typeof o&&"undefined"==typeof m){
var i=a[o];
i&&(i.needAnimation=!1);
}else if("number"==typeof o&&"number"==typeof m){
var i=a[o],s=i.reply_new.reply_list[m];
s&&(s.needAnimation=!1);
}
},
addComment:function(e,n){
var r=n.type,o=void 0===r?"mine":r,m=n.commentItem,a=n.commentIdx,i=n.replyItem,s=n.replyIdx,u="mine"===o?e.myCommentData.my_comment:e.commentData.elected_comment;
if("undefined"!=typeof m)u.unshift(m);else if("number"==typeof a&&"undefined"!=typeof i){
var c=u[a];
c&&(c.reply_new?("number"==typeof s?c.reply_new.reply_list.splice(s+1,0,i):c.reply_new.reply_list.unshift(i),
c.reply_new.reply_total_cnt++,c.reply_new=_extends({},c.reply_new)):t.set(c,"reply_new",{
reply_list:[i],
reply_total_cnt:1
}));
}
},
removeComment:function(e,t){
var n=t.type,r=void 0===n?"mine":n,o=t.commentIdx,m=t.replyIdx,a="mine"===r?e.myCommentData.my_comment:e.commentData.elected_comment;
if("number"==typeof o&&"undefined"==typeof m)a.splice(o,1);else if("number"==typeof o&&"number"==typeof m){
var i=a[o];
i&&(i.reply_new.reply_list.splice(m,1),i.reply_new.reply_total_cnt--,i.reply_new=_extends({},i.reply_new));
}
},
updateCommentReplyInfo:function(e,t){
var n=t.commentIdx,r=t.key,o=t.value;
if("number"==typeof n){
var m=e.commentData.elected_comment[n];
m&&m.reply_new&&r in m.reply_new&&(m.reply_new[r]=o,m.reply_new=_extends({},m.reply_new));
}
},
setCommentStatus:function(e,t){
e.commentStatus=t.status;
},
setOffset:function(e,t){
e.offset=t.value;
},
setReplyFlag:function(e,t){
e.replyFlag=t.flag;
},
setReportData:function(e,t){
e.reportData=t.data;
},
setWarningToast:function(e,t){
e.warningToast=t.content;
}
},
actions:{
myReport:function(e,t){
var n=e.state,r=_slicedToArray(t,2),m=r[0],a=r[1],i=void 0===a?"":a;
if("undefined"!=typeof m)if(n.reportData.idkey)o.setSum(n.reportData.idkey,m,1);else{
var s=new Image,u=Math.random();
s.src="/mp/jsreport?key="+m+"&content="+i+"&r="+u;
}
}
}
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("pages_new/modules/utils/url.js",[],function(){
"use strict";
var e=function(e){
var n=[],t={};
if(!e)try{
e=window.top.location,n=e.search.substring(1).split("&");
}catch(o){
e=window.location,n=e.search.substring(1).split("&");
}
"string"==typeof e&&(e=new URL(e),n=e.search.substring(1).split("&"));
for(var r=0;r<n.length;r++){
var i=n[r].split("="),s=decodeURIComponent(i.shift());
"undefined"==typeof t[s]&&(t[s]=decodeURIComponent(i.join("=")));
}
return t;
},n=function(e,n,t){
return"string"!=typeof e?"":(n&&"object"===("undefined"==typeof n?"undefined":_typeof(n))&&Object.keys(n).length&&(e+="?"+Object.keys(n).map(function(e){
return e+"="+encodeURIComponent(n[e]);
}).join("&")),t&&"string"==typeof t&&(e+="#"+t),e);
};
return{
getParams:e,
genUrl:n
};
});