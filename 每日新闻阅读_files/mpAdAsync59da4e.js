function _defineProperty(e,n,t){
return n in e?Object.defineProperty(e,n,{
value:t,
enumerable:!0,
configurable:!0,
writable:!0
}):e[n]=t,e;
}
define("pages_new/appmsg/page_bottom.js",["pages_new/appmsg/page_bottom.html.js","pages_new/modules/comment/comment.js","pages_new/appmsg/store.js","pages_new/3rd/vue.js"],function(e){
"use strict";
var n=e("pages_new/appmsg/page_bottom.html.js"),t=e("pages_new/modules/comment/comment.js"),s=e("pages_new/appmsg/store.js"),a=e("pages_new/3rd/vue.js");
return function(){
function e(){
p||(p=new a({
store:s,
el:"#page_bottom_area",
template:n,
components:_defineProperty({},t.name,t)
}));
}
var p=null;
e();
};
});define("appmsg/pay_read/buy_wecoin_btn_tpl.html.js",[],function(){
return'<div class="pay__wecoin-entry">\n  <i class="pay__icon-wecoin"></i>\n  <span class="price" id="js_wecoin_remain"></span>\n</div>\n';
});define("appmsg/pay_read/pay_confirm_tpl.html.js",[],function(){
return'<div class="pay__wecoin">\n  <div id="js_wecoin_title" class="pay__wecoin-title" style="font-weight: normal;">购买全文</div>\n  <div class="pay__wecoin-content pay__wecoin-content-price">\n    <i class="pay__icon-wecoin"></i>\n    <span id="js_wecoin_price" class="price"><#=price#></span>\n  </div>\n  <div id="js_wecoin_tips" class="pay__wecoin-tips" style="display:none"></div>\n</div>\n';
});function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
},_createClass=function(){
function t(t,e){
for(var o=0;o<e.length;o++){
var n=e[o];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,o,n){
return o&&t(e.prototype,o),n&&t(e,n),e;
};
}();
define("pages/mod/bottom_modal.js",["biz_wap/ui/weui_css.js","widget/wx-widget/wx_bottom_modal.css","pages/mod/bottom_modal.html.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_wap/utils/device.js","common/navShadow.js","common/userGoBack.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function e(t,e,o,n){
o=n?o+"px":o,t.style[e]=o;
}
function o(t){
return Math.ceil(t.scrollTop+t.offsetHeight)>=t.scrollHeight;
}
function n(t){
if(!(t&&t instanceof HTMLElement))return!1;
var e=window.getComputedStyle(t);
return 0!==e.width&&0!==e.height&&0!==e.opacity&&"none"!==e.display&&"hidden"!==e.visibility&&null!==t.offsetParent;
}
t("biz_wap/ui/weui_css.js"),t("widget/wx-widget/wx_bottom_modal.css");
var i=t("pages/mod/bottom_modal.html.js"),s=t("biz_common/tmpl.js"),a=t("biz_common/dom/class.js"),r=t("biz_common/dom/event.js"),l=t("biz_wap/utils/device.js"),c=t("common/navShadow.js"),h=t("common/userGoBack.js"),u=t("biz_wap/jsapi/core.js"),d=100,p="weui-btn_disabled",m="page_no_scroll",f=screen.height/4*3+"px",g={
top:l.os.pc?"20%":screen.height/4-(screen.height-window.innerHeight)+"px",
btnText:"Submit",
hasHeader:!0,
clickMask2Hide:!0,
animationType:"bottom",
scroll2Hide:!0
},v=function(){
function t(o){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
_classCallCheck(this,t),n=_extends({},g,n);
var a=document.createElement("div");
a.innerHTML=s.tmpl(i,{
hasBtn:n.hasBtn,
btnText:n.btnText,
extClass:n.extClass||"",
hasMask:!n.removeMask,
isTopic:!!n.isTopic,
hasHeader:n.hasHeader,
hasFooter:!!n.footerEl,
btnSlot:n.btnSlot,
autoHeight:n.autoHeight,
maxHeight:f
});
var r=a.firstChild;
this.scrollLock=!1,this.curScrollTop=0,this.touches={
startX:0,
startY:0,
curX:0,
curY:0,
isScreenLeft:!1,
direction:"",
times:0
},this.opt=n,this.rootEle=r,this.contentEle=o,this.contentAreaWrp=r.getElementsByClassName("js_bottom_modal_bd")[0],
this.contentAreaWrp.appendChild(o),this.contentArea=r.getElementsByClassName("js_bottom_modal_content")[0],
this.loading=this.rootEle.getElementsByClassName("js_modal_loading")[0],this.pullLoading=this.rootEle.getElementsByClassName("js_pull_loading")[0],
this.endLine=this.rootEle.getElementsByClassName("js_modal_end_line")[0],this.enableGesture=!1,
this.triggerEl=null,this.isAutoFocus=!0,n.removeMask||(this.maskEle=r.getElementsByClassName("js_bottom_modal_mask")[0],
this.maskNotClick=r.getElementsByClassName("js_bottom_modal_mask_not_click")[0],
n.transparentMask&&e(this.maskEle,"opacity",0)),n.hasHeader&&(this.headAreaWrp=r.getElementsByClassName("js_bottom_modal_hd")[0],
this.submitBtn=this.headAreaWrp.getElementsByClassName("js_submit_bottom_modal")[0],
this.closeBtn=this.headAreaWrp.getElementsByClassName("js_close_bottom_modal")[0],
this.setTitle(n.title)),n.footerEl&&(this.footAreaWrp=r.querySelector(".js_bottom_modal_ft"),
this.footAreaWrp.appendChild(n.footerEl)),"right"===n.animationType&&this.rootEle.classList.add("wx_bottom_modal_right"),
document.body.appendChild(r),n.cb&&n.cb(),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var t=this;
this.maskEle&&(this.opt.clickMask2Hide&&r.tap(this.maskEle,function(){
t.hide();
}),r.on(this.contentArea,"transitionend",function(o){
o.target!==t.contentArea||"transform"!==o.propertyName&&"-ms-transform"!==o.propertyName||(""!==t.contentArea.style.transform?t.contentArea.style.removeProperty("transform"):t.getShowStatus()?"function"==typeof t.opt.onShowAfterAnimation&&t.opt.onShowAfterAnimation():(e(t.maskNotClick,"visibility","hidden"),
!t.opt.autoHeight&&e(t.contentArea,"top",t.opt.top)));
}),r.tap(this.maskNotClick,function(){
return setTimeout(function(){
t.hide(),e(t.maskNotClick,"visibility","hidden"),!t.opt.autoHeight&&e(t.contentArea,"top",t.opt.top);
},300);
}),r.on(this.maskEle,"touchmove",function(t){
t.preventDefault();
})),this.headAreaWrp&&(r.on(this.headAreaWrp,"touchstart",function(e){
return t.onTouchStart(e);
}),r.on(this.headAreaWrp,"touchmove",function(e){
e.preventDefault();
var o=e.changedTouches[0];
t.getTouchDirection(o)&&t.moveByDirection(o);
}),r.on(this.headAreaWrp,"touchend",function(e){
return t.onTouchEnd(e);
})),this.footAreaWrp&&(r.on(this.footAreaWrp,"touchstart",function(e){
return t.onTouchStart(e);
}),r.on(this.footAreaWrp,"touchmove",function(e){
e.preventDefault();
var o=e.changedTouches[0];
t.getTouchDirection(o)&&t.moveByDirection(o);
}),r.on(this.footAreaWrp,"touchend",function(e){
return t.onTouchEnd(e);
})),this.closeBtn&&r.on(this.closeBtn,"click",function(){
t.hide();
}),this.submitBtn&&r.on(this.submitBtn,"click",function(){
a.hasClass(t.submitBtn,p)||t.opt.btnClickCb&&t.opt.btnClickCb();
}),r.on(this.contentAreaWrp,"scroll",function(){
t.checkReachBoundary(),t.contentAreaWrp.scrollTop>0?a.addClass(t.contentArea,"weui-half-screen-dialog_headline"):a.removeClass(t.contentArea,"weui-half-screen-dialog_headline");
}),this.headAreaWrp&&r.tap(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0],function(){
t.opt.titleClickCb&&t.opt.titleClickCb();
}),r.on(this.contentAreaWrp,"touchstart",function(e){
return t.onTouchStart(e);
}),r.on(this.contentAreaWrp,"touchmove",function(e){
var n=e.changedTouches[0];
if(t.getTouchDirection(n)){
var i=t.touches.direction;
if("Y"===i){
var s=t.contentAreaWrp,a=n.pageY,r=a-t.touches.startY,l=s.scrollTop<=0&&r>0,c=o(s)&&0>r;
l||c?l&&!t.opt.onPullDownLoad&&(t.move(a),e.preventDefault()):t.resetMovement(),
t.touches.curY=a;
}else e.preventDefault(),t.moveByDirection(n);
}
}),r.on(this.contentAreaWrp,"touchend",function(e){
return t.onTouchEnd(e);
}),r.on(window,"unload",function(){
t.opt.removeMask||c.hide();
});
}
},{
key:"checkReachBoundary",
value:function(){
var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],o=arguments.length<=1||void 0===arguments[1]?!0:arguments[1];
this.scrollLock&&0!==this.contentAreaWrp.scrollTop||(this.scrollLock=!0,setTimeout(function(){
t.scrollLock=!1;
},50),e&&!this.pullingDownLock&&this.contentAreaWrp.scrollTop<=0&&(this.opt.onPullDownLoad&&this.opt.onPullDownLoad(),
this.pullingDownLock=!0),setTimeout(function(){
o&&!t.pullingUpLock&&t.contentAreaWrp.scrollTop+t.contentAreaWrp.offsetHeight+d>t.contentEle.offsetHeight&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0);
},100),this.opt.onScroll&&this.opt.onScroll(this.contentAreaWrp.scrollTop>this.curScrollTop?"up":"down"),
this.curScrollTop=this.contentAreaWrp.scrollTop);
}
},{
key:"onTouchStart",
value:function(t){
var e=t.touches[0];
this.touches={
startX:e.pageX,
startY:e.pageY,
curX:e.pageX,
curY:e.pageY,
isScreenLeft:this.enableGesture&&e.pageX<=30,
direction:"",
times:0
},this.contentArea.style.transition="none";
}
},{
key:"onTouchEnd",
value:function(t){
var e=this.touches.direction,o="X"===e?100:this.contentArea.offsetHeight/4,n=t.changedTouches[0]["page"+e]-this.touches["start"+e],i=this.contentArea.dataset;
this.contentArea.style.removeProperty("transition"),i.distance&&(n>o?this.hide():this.contentArea.style.transform="translateY(0)",
delete i.distance);
}
},{
key:"getTouchDirection",
value:function(t){
if(this.touches.direction)return!0;
if(!this.touches.isScreenLeft)return this.touches.direction="Y",!0;
this.touches.times++;
var e=Math.abs(t.pageX-this.touches.startX),o=Math.abs(t.pageY-this.touches.startY);
return this.touches.times>=3?(this.touches.direction=e>=o?"X":"Y",!0):e>=5&&e>=o?(this.touches.direction="X",
!0):o>=5?(this.touches.direction="Y",!0):!1;
}
},{
key:"moveByDirection",
value:function(t){
var e=this.touches.direction,o=t["page"+e];
o-this.touches["start"+e]>0?this.move(o):this.resetMovement(),this.touches["cur"+e]=o;
}
},{
key:"move",
value:function(t){
if(this.opt.sideslip2Hide&&"X"===this.touches.direction||this.opt.scroll2Hide&&"Y"===this.touches.direction){
var e=this.contentArea.dataset;
e.distance=1*(e.distance||0)+t-this.touches["cur"+this.touches.direction],this.contentArea.style.transform="translateY("+e.distance+"px)";
}
}
},{
key:"resetMovement",
value:function(){
delete this.contentArea.dataset.distance,this.contentArea.style.removeProperty("transform");
}
},{
key:"show",
value:function(t,o,n){
var i=this,s=arguments.length<=3||void 0===arguments[3]?!0:arguments[3];
if(a.addClass(document.body,m),this.triggerEl=n||window.event&&window.event.target,
this.isAutoFocus=s,!this.getShowStatus()){
t||this.opt.autoHeight||(e(this.contentArea,"top",this.opt.top),console.log(this.contentArea.offsetHeight)),
e(this.contentArea,"visibility","visible"),a.addClass(this.rootEle,"wx_bottom_modal_show");
var d=document.getElementById("img-content");
d&&d.setAttribute("aria-hidden","true"),this.setAriaHidden(!1),this.contentArea.focus(),
this.maskEle&&this.opt.clickMask2Hide&&e(this.maskNotClick,"visibility","visible"),
this.opt.removeMask||c.show({
alpha:this.opt.transparentMask?0:.6,
callback:function(t){
t&&"function"==typeof i.opt.onShowNavShadow&&i.opt.onShowNavShadow();
},
onClick:function(){
i.hide();
}
}),this.opt.sideslip2Hide&&(l.os.ios?u.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!0
},function(t){
/:ok$/.test(t.err_msg)&&(i.enableGesture=!0);
}):h.disable({
onGoBack:function(){
i.hide();
},
onDisable:function(){
i.enableGesture=!0;
},
onEnable:function(){
i.enableGesture=!1;
}
})),t&&(a.addClass(this.rootEle,"wx_bottom_modal_form"),e(this.contentArea,"top","25px")),
setTimeout(function(){
t||"right"===i.opt.animationType&&(e(i.contentArea,"-ms-transform","translateX(0)"),
e(i.contentArea,"transform","translateX(0)"));
}),t&&(setTimeout(function(){
"bottom"===i.opt.animationType?e(i.contentArea,"top","100%"):e(i.contentArea,"top",i.opt.top),
console.log(i.contentArea.offsetHeight),a.removeClass(i.rootEle,"wx_bottom_modal_form"),
setTimeout(function(){
e(i.contentArea,"top",i.opt.top),"right"===i.opt.animationType&&(e(i.contentArea,"-ms-transform","translateX(0)"),
e(i.contentArea,"transform","translateX(0)"));
});
},50),l.os.ios?o.focus():(this.tmpInputEle||(this.tmpInputEle=o.cloneNode(!0)),this.tmpInputEle.style.opacity=0,
this.tmpInputEle.style.position="fixed",this.tmpInputEle.style.top=0,this.tmpInputEle.style.zIndex="-1",
document.body.appendChild(this.tmpInputEle),setTimeout(function(){
o.focus(),i.opt.makeInputEleBigger&&i.opt.makeInputEleBigger(),document.body.removeChild(i.tmpInputEle);
},300),this.tmpInputEle.focus()),l.os.ios&&!this.hasBindInputEvent&&this.opt.makeFakeInputEle&&this.opt.removeInputEle&&(this.hasBindInputEvent=!0,
r.on(o,"focus",function(){
setTimeout(function(){
o.style.opacity=1,i.opt.removeInputEle();
},50);
}),r.on(o,"blur",function(){
i.opt.makeFakeInputEle(),o.style.opacity=0;
}))),this.opt.onShow&&this.opt.onShow();
}
}
},{
key:"hide",
value:function(t){
var o=this;
if(a.removeClass(document.body,m),t&&e(this.maskNotClick,"visibility","hidden"),
this.getShowStatus()){
this.contentArea.style.removeProperty("-ms-transform"),this.contentArea.style.removeProperty("transform"),
a.removeClass(this.rootEle,"wx_bottom_modal_show");
var i=document.getElementById("img-content");
i&&i.setAttribute("aria-hidden","false"),this.setAriaHidden(!0),this.isAutoFocus&&n(this.triggerEl)&&(this.triggerEl.setAttribute("tabindex","0"),
this.triggerEl.focus()),this.opt.removeMask||c.hide(),this.opt.sideslip2Hide&&(l.os.ios?u.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!1
},function(t){
/:ok$/.test(t.err_msg)&&(o.enableGesture=!1);
}):h.enable({
onEnable:function(){
o.enableGesture=!1;
}
})),this.opt.onHide&&this.opt.onHide();
}
}
},{
key:"disableBtn",
value:function(){
this.submitBtn&&a.addClass(this.submitBtn,p);
}
},{
key:"enableBtn",
value:function(){
this.submitBtn&&a.removeClass(this.submitBtn,p);
}
},{
key:"finishPullUpLoad",
value:function(){
this.pullingUpLock=!1;
}
},{
key:"finishPullDownLoad",
value:function(){
this.pullingDownLock=!1;
}
},{
key:"setTitle",
value:function(t){
this.headAreaWrp&&("string"==typeof t?this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t:"object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.innerHTML&&(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t.innerHTML));
}
},{
key:"scrollTo",
value:function(){
var t;
(t=this.contentAreaWrp).scrollTo.apply(t,arguments);
}
},{
key:"getRootEle",
value:function(){
return this.rootEle;
}
},{
key:"getBdEle",
value:function(){
return this.contentAreaWrp;
}
},{
key:"getScrollEle",
value:function(){
return this.contentAreaWrp;
}
},{
key:"setCloseBtnStyle",
value:function(t){
if(this.closeBtn){
var e=this.closeBtn.getElementsByTagName("i")[0],o="weui-icon-close-thin",n="weui-icon-back-arrow-thin";
"back"===t?(a.removeClass(e,o),a.addClass(e,n)):(a.removeClass(e,n),a.addClass(e,o));
}
}
},{
key:"getShowStatus",
value:function(){
return a.hasClass(this.rootEle,"wx_bottom_modal_show");
}
},{
key:"showLoading",
value:function(){
e(this.loading,"display","block");
}
},{
key:"hideLoading",
value:function(){
e(this.loading,"display","none");
}
},{
key:"showPullUpLoading",
value:function(){
this.contentAreaWrp.appendChild(this.pullLoading),e(this.pullLoading,"display","block");
}
},{
key:"hidePullUpLoading",
value:function(){
e(this.pullLoading,"display","none");
}
},{
key:"showPullDownLoading",
value:function(){
this.contentAreaWrp.insertBefore(this.pullLoading,this.contentAreaWrp.firstChild),
e(this.pullLoading,"display","block");
}
},{
key:"hidePullDownLoading",
value:function(){
e(this.pullLoading,"display","none");
}
},{
key:"showEndLine",
value:function(){
this.contentAreaWrp.appendChild(this.endLine),e(this.endLine,"display","block");
}
},{
key:"setAriaHidden",
value:function(t){
this.contentArea.setAttribute("aria-hidden",t.toString());
}
},{
key:"disablePullDownLoad",
value:function(){
this.opt.onPullDownLoad=null;
}
}]),t;
}();
return v;
});define("biz_wap/utils/jsmonitor_report.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax.js","biz_wap/utils/log.js"],function(o){
"use strict";
function n(o,t){
r=window.setTimeout(function(){
o(),n(o,t);
},t);
}
var t=o("biz_common/utils/monitor.js"),i=o("biz_wap/utils/ajax.js"),e=o("biz_wap/utils/log.js"),r=null,s={};
return window.__jsmonitorReport?window.__jsmonitorReport:(window.__monitor_unload_has_done__=!1,
s.setSum=function(o,n,i){
return t.setSum(o,n,i),s;
},s.setAvg=function(o,n,i){
return t.setAvg(o,n,i),s;
},s.setLogs=function(o){
return t.setLogs(o),s;
},s.send=function(o){
return o!==!1&&(o=!0),t.send(o,i),s;
},n(function(){
s.send();
},1e3),window.addEventListener("unload",function(){
e("[leaveReport in jsmonitor_report 4]"),console.log("[leaveReport in jsmonitor_report 4]"),
window.__monitor_report_has_done__||(e("[leaveReport in jsmonitor_report 5]"),console.log("[leaveReport in jsmonitor_report 5]"),
window.__ajaxtest="2",r&&(window.clearTimeout(r),r=null),s.send(!1),window.__monitor_unload_has_done__=!0);
},!1),window.__jsmonitorReport=s,s);
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);
}
return e;
};
define("appmsg/topbar.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/comm_report.js","pages/utils.js","biz_common/dom/event.js","common/utils.js","biz_wap/utils/setMpInfo.js"],function(e){
"use strict";
function t(e){
e="undefined"!=typeof e?e:!1;
var t={
userName:I.userName,
brandName:I.bizNickName,
title:I.title,
brandIcon:I.headImg,
topBarStyle:N?1:0,
topBarShowed:e,
isMenuShowBrandInfo:1,
cover:I.cover,
digest:I.digest.htmlDecode()
};
if(""!==I.itemShowType&&null!==I.itemShowType&&void 0!==I.itemShowType&&_extends(t,{
itemShowType:I.itemShowType
}),""!==I.showSourceInfo&&_extends(t,{
showSourceInfo:I.showSourceInfo
}),"0"===I.itemShowType)_extends(t,{
isPaySubscribe:window.isPaySubscribe,
forbidForward:window.isPaySubscribe?1:0
});else if("5"===window.item_show_type)_extends(t,{
vid:I.vid,
duration:I.videoDuration,
videoWidth:I.videoWidth,
videoHeight:I.videoHeight,
disableShowFinderLiveTopBar:-1!==location.href.indexOf("item_show_type=16")?1:0
});else if("17"===window.item_show_type)_extends(t,{
shortContentMainBody:I.shortMsgContent.htmlDecode(),
shortContentJumpLinkUrl:I.shortMsgLink,
shortContentImgList:I.shortMsgImgs
});else{
var o=I.voiceid||0,i=I.duration||0;
_extends(t,{
audioUrl:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid="+o,
audioLen:i
});
}
b.currentMpInfo(t);
}
function o(){
N&&p.invoke("currentMpInfoShow",{
userName:I.userName,
brandName:I.bizNickName
});
}
function i(){
N&&p.invoke("currentMpInfoHide");
}
function n(){
N&&(t(),v.getScrollTop()>I.showTitleHeight&&o());
}
function r(){
N&&(v.getScrollTop()>I.showTitleHeight?o():i());
}
function s(e){
var t=parseInt(Date.now()/1e3,10);
I.reportData.EnterId=I.reportData.EnterId&&10===I.reportData.EnterId.toString().length?I.reportData.EnterId:t;
var o=1*(v.getScrollTop()+v.getInnerHeight()),i=_extends({},I.reportData,{
Event:e,
CurrScreen:3===e?Math.ceil(v.getScrollTop()/v.getInnerHeight()):0,
ExitHeight:3===e?Math.ceil(o):0
});
g.report(17335,i);
}
function a(){
p.on("topbar:click",function(){
s(3);
});
}
function c(){
var e=v.getScrollTop();
e>=I.showTitleHeight&&!S?(S=!0,N?(p.invoke("currentMpInfoShow",{
userName:I.userName,
brandName:I.bizNickName
}),_||(s(1),_=!0)):document.title=I.bizNickName):e<I.showTitleHeight&&S&&(S=!1,N?p.invoke("currentMpInfoHide"):document.title="");
}
function d(e){
k=e;
}
function m(){
f.bindVisibilityChangeEvt(function(e){
e&&v.getScrollTop()>=I.showTitleHeight&&k&&(t(),o());
});
}
function u(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
e.bizNickName||(e.bizNickName=N?"Unnamed Official Account":e.bizNickNameBackup);
for(var t in e)e[t]&&(I[t]=e[t]);
I.bizNickName=I.bizNickName.htmlDecode(),I.title=I.title.htmlDecode(),I.headImg=I.headImg.replace(/\/0$/,"/132");
}
function h(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
u(e),t(),a(),m(),f.on(window,"load",function(){
document.title="",c();
}),f.on(window,"scroll",T),window.addEventListener("pageshow",function(e){
e.persisted&&n();
});
}
var p=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/mmversion.js"),g=e("common/comm_report.js"),w=e("pages/utils.js"),f=e("biz_common/dom/event.js"),v=e("common/utils.js"),b=e("biz_wap/utils/setMpInfo.js"),I={
showTitleHeight:40,
userName:"",
bizNickName:"",
bizNickNameBackup:"",
title:"",
headImg:"",
voiceid:"",
duration:"",
vid:"",
videoDuration:0,
videoWidth:0,
videoHeight:0,
itemShowType:window.item_show_type,
showSourceInfo:"",
reportData:{},
cover:"",
digest:"",
shortMsgContent:"",
shortMsgLink:"",
shortMsgImgs:[]
},N=!1,S=!1,_=!1;
N="5"===I.itemShowType?l.isIOS&&l.gtVersion("7.0.12",!0)||l.isAndroid&&l.gtVersion("7.0.12",!0):l.isIOS&&l.gtVersion("7.0.10",!0)||l.isAndroid&&l.gtVersion("7.0.12",!0);
var T=w.throttle(c,50),k=!0;
return{
setCurrentMpInfo:t,
showCurrentMpInfo:o,
hideCurrentMpInfo:i,
setTopBarWhenVisible:d,
resetTopBar:n,
setTopBar:r,
update:u,
init:h
};
});define("appmsg/finance_communicate.js",[],function(){
"use strict";
function e(e){
console.info("postPageHeightMessage");
var t=getComputedStyle(n);
window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"http://finance.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"http://gu.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"https://gu.qq.com"),window.parent.postMessage({
name:e,
data:parseFloat(t.height)
},"https://wzq.tenpay.com");
}
function t(e){
console.log("[IFRAME RECEIVE MESSAGE]: ",e);
var t;
if(e.origin?t=e.origin:e.originalEvent&&(t=e.originalEvent.origin),/^http(s)?\:\/\/finance\.qq\.com$/.test(t)&&/^http(s)?\:\/\/gu\.qq\.com$/.test(t)&&/^http(s)?\:\/\/wzq\.tenpay\.com$/.test(t)&&e.source){
e.data,document.getElementsByTagName("body")[0],document.getElementById("activity-name"),
document.getElementById("meta_content"),document.getElementById("page-content");
}
}
if(window.parent===window)return!1;
document.getElementsByTagName("html")[0].style.width="1px",document.getElementsByTagName("html")[0].style.minWidth="100%";
var n=(document.getElementById("js_content"),document.getElementById("img-content"),
document.getElementById("page-content")),a=document.getElementsByClassName("rich_media_area_extra")[0];
return a.style.display="none",e("pageHeight"),window.addEventListener("message",t,!1),
{
postPageHeightMessage:e
};
});var _extends=Object.assign||function(o){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o[n]=i[n]);
}
return o;
};
define("appmsg/like_profile.js",["biz_common/template-2.0.1-cmd.js","appmsg/like_profile_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","pages/utils.js","common/comm_report.js","biz_wap/utils/mmversion.js"],function(o){
"use strict";
function e(){
console.log(h),_.isWindows?location.href=h:a.invoke("profile",{
username:f,
scene:"209"
},function(){});
}
function i(o){
var i={
bottomOpr:m("js_bottom_opr_right"),
container:m("js_like_profile_container")
};
s({
url:"/mp/getbizbanner?__biz="+window.biz+"&is_from_recommand="+(k?1:0),
type:"GET",
dataType:"json",
success:function(s){
if(!s.base_resp||0===s.base_resp.ret){
var c=s.friend_subscribe_count,b=s.is_subscribed,z=s.orignal_num,x=s.is_ban;
if(!(b||x||m("js_focus"))){
k&&p.report(23219,_extends({},g,{
Actiontype:5,
type:7
})),l=!b,i.container.innerHTML=n.compile(t)({
friendSubscribeCount:c,
isSubscribed:b,
orignalNum:z,
isShowFocusBottom:l,
roundHeadImg:u,
nickname:w
}),o.forEach(function(o){
p.report(23219,_extends({},g,{
Actiontype:1,
type:j[o]
}));
}),m("js_like_profile_bar").classList.remove("wx_follow_hide");
var B=d("js_function_mod_inner")[0].offsetHeight;
d("js_function_mod")[0].style.height=B+"px",i.focusBottom=m("js_focus"),i.alreadyFocusBottom=m("js_already_focus"),
l?(i.focusBottom.style.display="",i.alreadyFocusBottom.style.display="none"):(i.focusBottom.style.display="none",
i.alreadyFocusBottom.style.display=""),r.on(i.focusBottom,"click",function(e){
e.stopPropagation(),o.forEach(function(o){
p.report(23219,_extends({},g,{
Actiontype:2,
type:j[o]
}));
}),_.isWindows?location.href=h:a.invoke("quicklyAddBrandContact",{
username:f,
scene:y,
scenenote:location.href
},function(o){
/ok/.test(o.err_msg)&&(i.focusBottom.style.display="none",i.alreadyFocusBottom.style.display="");
});
}),r.on(i.alreadyFocusBottom,"click",function(i){
o.forEach(function(o){
p.report(23219,_extends({},g,{
Actiontype:4,
type:j[o]
}));
}),i.stopPropagation(),e();
}),r.on(m("js_like_profile_bar"),"click",function(){
o.forEach(function(o){
p.report(23219,_extends({},g,{
Actiontype:3,
type:j[o]
}));
}),e();
});
}
}
}
});
}
var n=o("biz_common/template-2.0.1-cmd.js"),t=o("appmsg/like_profile_tpl.html.js"),s=o("biz_wap/utils/ajax.js"),r=o("biz_common/dom/event.js"),a=o("biz_wap/jsapi/core.js"),c=o("pages/utils.js"),m=c.getId,d=c.getByClass,p=o("common/comm_report.js"),_=o("biz_wap/utils/mmversion.js"),l=!0,u=window.round_head_img||window.cgiData.round_head_img||"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0",w=window.nickname||window.cgiData.nick_name,f=window.user_name||window.cgiData.user_name,b=window.appuin||window.cgiData.biz,y=209,j={
share:1,
collect:2,
zaikan:3,
like:4,
reward:5,
pay:6
},g={
Msgid_from:1*(window.msgid||window.appmsgid),
Itemidx_from:1*window.idx,
Bizuin:window.biz,
Itemshowtype:1*window.item_show_type,
Sessioid:window.sessionid,
Enterid:1*window.enterid,
Scene:1*window.source,
Subscene:1*window.subscene
},h="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+b+"&scene=112#wechat_redirect",k=function(o){
return 1===window.show_related_article||o.indexOf(window.source)>-1||o.indexOf(window.subscene)>-1;
}(["157","169"]);
return{
renderLikeProfile:i
};
});define("appmsg/loading.js",["tpl/appmsg/loading.html.js"],function(e){
"use strict";
var n=e("tpl/appmsg/loading.html.js"),t=document.createElement("div");
t.innerHTML=n,t=t.children[0];
var a=t.querySelector(".js_loading_content");
return document.querySelector("body").appendChild(t),t.addEventListener("touchstart",function(e){
e.preventDefault();
},!1),{
show:function(){
var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];
a.innerHTML=e,t.style.display="";
},
hide:function(){
t.style.display="none";
}
};
});define("appmsg/pay_report_utils.js",["biz_wap/jsapi/core.js","common/comm_report.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js"],function(e){
"use strict";
function n(e){
var n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+e+"_"+n+"&r="+Math.random();
}
function i(e){
var n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
r.isIOS?(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+e+"_"+n+"&r="+Math.random():r.isAndroid&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=110809_"+(1*e+1)+"_"+n+"&r="+Math.random());
}
var o=e("biz_wap/jsapi/core.js"),t=e("common/comm_report.js"),r=e("biz_wap/utils/mmversion.js"),w=e("biz_wap/utils/device.js"),d={
netType:null
},s=function(e){
o.invoke("getNetworkType",{},function(n){
switch(n.err_msg){
case"network_type:edge":
case"network_type:wwan":
switch(n.detailtype){
case"2g":
d.netType=2;
break;

case"3g":
d.netType=3;
break;

case"4g":
d.netType=4;
break;

default:
d.netType=0;
}
break;

case"network_type:wifi":
d.netType=1;
break;

case"network_type:fail":
d.netType=-1;
break;

default:
d.netType=0;
}
"function"==typeof e&&e();
});
},a=function(e,n,i){
var o=arguments.length<=3||void 0===arguments[3]?"":arguments[3],r=arguments.length<=4||void 0===arguments[4]?"":arguments[4],w=arguments.length<=5||void 0===arguments[5]?"":arguments[5],d=void 0;
d=window.can_use_wecoin?window.wecoin_amount?10*window.wecoin_amount:"":window.paySubscribeInfo?window.paySubscribeInfo.fee:"",
t.report(18485,{
bizuin:window.biz,
msgid:1*window.mid,
itemidx:1*window.idx,
price:1*d,
Preview:1*window.previewPercent,
worthycnt:1*window.paySubscribeInfo.like_cnt,
paidcnt:1*window.paySubscribeInfo.pay_cnt,
is_finished:1*window.is_finished_preview,
PayTime:1*e,
PayResult:1*n,
ErrMsg:o+"",
ErrCodeInt:1*r,
ErrDomain:w+"",
Order_Id:i+"",
EnterId:1*window.enterid
});
},c=function g(e){
if(window.isPaySubscribe)if(null===d.netType)s(function(){
return g(e);
});else{
var n=Math.round(new Date/1e3);
t.report(18488,{
NetType:d.netType,
Bizuin:window.biz,
MsgId:1*window.mid,
itemIdx:1*window.idx,
Url:window.msg_link+"",
Title:window.msg_title+"",
EventTime:n,
EventType:e,
Scene:1*window.source,
Subscene:1*window.subscene,
IsFans:1*window.isFans,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
});
}
},p=function I(e,n){
if(null===d.netType)s(function(){
return I(e,n);
});else{
var i=Math.round(new Date/1e3),o={
NetType:d.netType,
Bizuin:window.biz,
MsgId:1*window.mid,
itemIdx:1*window.idx,
Url:window.msg_link+"",
Title:window.msg_title+"",
EventTime:i,
EventType:e,
Scene:1*window.source,
Subscene:1*window.subscene,
IsFans:1*window.isFans,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
};
void 0!==n&&(o.ActionType=n),t.report(18488,o);
}
},u=function b(e,n){
if(null===d.netType)s(function(){
return b(e,n);
});else{
var i=Math.round(new Date/1e3),o={
NetType:d.netType,
EventTime:i,
EventType:e,
SessionId:window.sessionid+"",
EnterId:1*window.enterid
};
void 0!==n&&(o.ActionType=n),t.report(18488,o);
}
},m=function(e,n,i,o,r,d,s){
t.report(19158,{
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
OriPrice:window.paySubscribeInfo?1*window.paySubscribeInfo.fee:0,
IAPCurrency:e,
IAPPrice:n,
GetIAPType:i,
GetIAPTime:o,
ProductId:window.payProductId,
EnterId:1*window.enterid,
CountryCode:r,
SystemVer:w.os.version,
GetIAPResult:d,
GetIAPErrMsg:s
});
},y=function(e){
t.report(22287,{
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
Url:window.msg_link+"",
Title:window.msg_title+"",
SessionId:window.sessionid+"",
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
EventTime:Math.round(new Date/1e3),
EventType:e
});
},l={
report110809:n,
reportPay:a,
reportPayAppmsg:c,
reportPayWall:p,
reportProfile:u,
report110809ForDevice:i,
reportOverseaPay:m,
reportSend:y
};
return l;
});define("appmsg/popup_report.js",["biz_wap/utils/ajax.js","biz_common/base64.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
var i=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];
r({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:17988,
buffer:a.concat(e).join(",")
},
async:i,
timeout:2e3
});
}
function t(e){
var i=2,t=u.getQuery("__biz",e)||"",n=u.getQuery("mid",e)||"",r=u.getQuery("idx",e)||"";
return t.length&&n.length&&r.length?i=3:-1!==e.indexOf("mp.weixin.qq.com")&&(i=4),
i;
}
function n(e){
var i="",t=u.getQuery("__biz",e)||"",n=u.getQuery("mid",e)||"",r=u.getQuery("idx",e)||"";
return i=-1===e.indexOf("mp.weixin.qq.com")?e:t.length&&n.length&&r.length?t+"_"+n+"_"+r:e;
}
var r=e("biz_wap/utils/ajax.js"),o=e("biz_common/base64.js"),u=e("biz_common/utils/url/parse.js"),a=["",""+o.decode(window.biz),""+window.mid,""+window.idx,""+window.enterid];
return{
report:i,
getRedirectType:t,
getUrlData:n
};
});define("complain/localstorage.js",[],function(){
"use strict";
var t={};
return t=window.localStorage?{
set:function(t,e){
null!==this.get(t)&&this.remove(t),localStorage.setItem(t,e);
},
get:function(t){
var e=localStorage.getItem(t);
return void 0===e?null:e;
},
remove:function(t){
localStorage.removeItem(t);
},
clear:function(){
localStorage.clear();
},
each:function(t){
for(var e,o=localStorage.length,l=0,t=t||function(){};o>l&&(e=localStorage.key(l),
t.call(this,e,this.get(e))!==!1);l++)localStorage.length<o&&(o--,l--);
}
}:{
set:function(){},
get:function(){}
};
});define("common/utils.js",["biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","biz_wap/utils/wapsdk.js","biz_wap/utils/storage.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/log.js","biz_wap/utils/jsmonitor_report.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(){
return"1"===i.getQuery("isNativePage")||"2"===i.getQuery("isNativePage");
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?50:arguments[1],n=void 0;
return function(){
for(var i=arguments.length,o=Array(i),r=0;i>r;r++)o[r]=arguments[r];
var s=this,a=function(){
n=null,e.apply(s,o);
};
n||(n=setTimeout(a,t));
};
}
var i=e("biz_common/utils/url/parse.js"),o=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/wapsdk.js"),s=e("biz_wap/utils/storage.js"),a=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/mmversion.js"),u=e("biz_wap/jsapi/log.js"),g=e("biz_wap/utils/jsmonitor_report.js"),p=e("biz_common/dom/event.js");
try{
"undefined"==typeof parent.window.hasListenMpPageAction&&(parent.window.hasListenMpPageAction=!1),
"undefined"==typeof parent.window.hasListenStateChange&&(parent.window.hasListenStateChange=!1);
}catch(l){}
var d=[],f=[],w=new s("history4secondopen"),m="from",h=!1,_={
status:"loading"
},v=[],y={
isNativePage:t,
isNewNativePage:function(){
return"2"===i.getQuery("isNativePage");
},
isOldNativePage:function(){
return"1"===i.getQuery("isNativePage");
},
__useWcSlPlayer:!1,
isWcSlPage:function(){
return y.__useWcSlPlayer;
},
getPlayerType:function(){
return y.isWcSlPage()?3:t()?2:1;
},
getParam:function(e){
if(!e)return null;
var t=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return t?t[2]:null;
},
insertAfter:function(e,t){
var n=t.parentNode;
n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling);
},
getInnerHeight:function(){
var e=window.getInnerHeight&&window.getInnerHeight();
return e||window.innerHeight||document.documentElement.clientHeight;
},
getInnerWidth:function(){
return window.innerWidth||document.documentElement.clientWidth;
},
getScrollTop:function(){
return document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
},
getDocumentHeight:function(){
return document.body.scrollHeight;
},
getElementActualTop:function(e){
var t=e.getBoundingClientRect(),n=t.top-this.getScrollTop();
return n;
},
getElementTop:function(e){
return e.getBoundingClientRect().top;
},
getElementHeight:function(e){
return e.getBoundingClientRect().height;
},
isScrollEnd:function(e){
return this.getScrollTop()+this.getInnerHeight()+e>=this.getDocumentHeight();
},
listenStateChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.push(e.cb);
try{
if(parent.window.hasListenStateChange)return;
}catch(t){}
o.on("activity:state_change",function(e){
f.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenStateChange=!0;
}catch(t){}
},
listenMpPageAction:function(e){
d.push(e);
try{
if(parent.window.hasListenMpPageAction)return;
}catch(t){}
o.on("onMPPageAction",function(e){
d.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenMpPageAction=!0;
}catch(t){}
},
getIosMainVersion:function(){
var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return e&&e[1]&&parseInt(e[1].split("_")[0],10);
},
report120081:function(e,t){
r.jsmonitor({
id:120081,
key:e,
value:t
});
},
loadNewPageKeepingHistoryStackIfSecOpen:function(e){
window.__second_open__&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&w.set(m,location.href,Date.now()+1e4),
location.href=e.replace(/#.*$/,"")+"#wechat_redirect";
},
initNewPageHistoryStackFromSecOpen:function(){
var e=w.get(m);
if(e&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&(w.remove(m),
history&&history.replaceState&&history.pushState)){
var t=location.href;
try{
history.replaceState({
__mock_secopen_history_stack_reload__:1
},"",e),history.pushState({
__mock_secopen_history_stack_reload__:1
},"",t);
}catch(n){
console.error("[initNewPageHistoryStackFromSecOpen]",n);
}
}
h||(h=!0,window.addEventListener("popstate",function(e){
e.state&&1===e.state.__mock_secopen_history_stack_reload__&&location.reload();
}));
},
initWebCompt:function(e,t){
var n=function(){
for(;v.length;){
var e=v.shift();
e(_);
}
};
if(a.os.iphone&&c.isWechat&&a.os.getNumVersion()>=10.3&&(c.gtVersion("7.0.14",1)&&a.os.getNumVersion()<15||c.gtVersion("8.0.7"))||a.os.android&&c.isWechat&&c.gtVersion("7.0.15",1)&&a.os.getNumVersion()>=5)document.addEventListener("WeixinOpenTagsReady",function(){
_={
status:"ready"
},n();
}),document.addEventListener("WeixinOpenTagsError",function(e){
_={
status:"error",
error:e&&e.detail&&e.detail.errMsg
},n();
}),o.invoke("handleMPPageAction",{
action:"wxConfig",
appid:"wxmpfakeid",
webComptList:e
},function(i){
console.log("wx config web compt result",e,i),u.info("wx config web compt result",e,JSON.stringify(i)),
i&&i.err_msg&&-1===i.err_msg.indexOf(":ok")&&(_={
status:"error",
error:i.err_msg
},n()),"function"==typeof t&&t(i);
});else{
var i={
err_msg:"handleMPPageAction:fail_webcompt unsupported"
};
console.log("wx config web compt result",e,i),u.info("wx config web compt result",e,JSON.stringify(i)),
_={
status:"error",
error:i.err_msg
},n(),"function"==typeof t&&t(i);
}
},
initWebComptForWcSlVideoSharePage:function(){
var e=function(e){
-1!==e.err_msg.indexOf(":ok")?y.initNewPageHistoryStackFromSecOpen():(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: res not ok"),g.setSum(221515,a.os.iphone?7:8,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:CfgError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e)));
};
if(c.isAndroid){
var t=c.getInner();
t>"27001037"&&"27001060">t||t>="27001100"?y.initWebCompt(["wxOpen","wxAd"],e):c.gtVersion("7.0.15",1)?(y.initWebCompt(["wxAd"]),
window.__failConfigWxOpen=!0,u.info("failed to config wxopen: android version check failed (gt 7.0.15)")):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: android version check failed"));
}else c.gtVersion("7.0.15",1)&&-1===[4,30].indexOf(1*window.ascene)?y.initWebCompt(["wxOpen","wxAd"],e):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: ios version check failed"));
},
getWebComptStatus:function(e){
return"function"!=typeof e?_:("loading"===_.status?v.push(e):e(_),!0);
},
supportImmersiveMode:c.isWechat&&!c.isInMiniProgram&&(c.isIOS&&c.gtVersion("8.0.9",1)||c.isAndroid&&c.gtVersion("8.0.9",1)),
debounce:n,
bindDebounceScrollEvent:function(e){
var t=arguments.length<=1||void 0===arguments[1]?window:arguments[1],i=arguments.length<=2||void 0===arguments[2]?50:arguments[2],o=n(e,i);
p.on(t,"scroll",o);
},
once:function(e){
return function(){
if(e){
for(var t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];
var o=e.apply(this,n);
return e=null,o;
}
};
}
};
return y;
});define("biz_wap/utils/wapsdk.js",["biz_common/utils/wxgspeedsdk.js","biz_wap/utils/jsmonitor_report.js"],function(s){
"use strict";
function e(s){
var e=.001;
"number"==typeof s.sample&&(e=s.sample);
var i=Math.random();
e>i&&n.saveSpeeds(s);
}
function i(s){
var e=s.sample||.001,i=Math.random();
e>i&&n.setBasicTime(s);
}
function t(){
n.send();
}
function a(s){
var s=s||[];
if(!s.length){
var e=s;
s=[],s.push(e);
}
for(var i=0;i<s.length;i++){
var e=s[i],t=e.id,a=e.key,n=e.value||1;
void 0!==t&&void 0!==a&&o.setSum(t,a,n);
}
}
var n=s("biz_common/utils/wxgspeedsdk.js"),o=s("biz_wap/utils/jsmonitor_report.js");
return{
saveSpeeds:e,
setBasicTime:i,
send:t,
jsmonitor:a
};
});define("a/mpAdAsync.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","a/a.js","a/a_utils.js","biz_common/utils/url/parse.js","a/a_config.js","pages/version4video.js","common/utils.js","biz_common/utils/wxgspeedsdk.js","appmsg/without_iframe/iframe_communicate.js"],function(e){
"use strict";
function i(e,i){
var t=window.withoutIframe?document.getElementsByClassName("video_iframe"):document.getElementsByTagName("iframe");
if(window.originalVideoAdFramesAdData=window.originalVideoAdFramesAdData||{},window.originalVideoAdFramesUnsetList)for(var a=0;a<window.originalVideoAdFramesUnsetList.length;a++)for(var s=0;s<t.length;s++)if(t[s].dataset&&t[s].dataset.mpvid===window.originalVideoAdFramesUnsetList[a]){
window.originalVideoAdFramesAdData[t[s].dataset.mpvid]||(window.originalVideoAdFramesAdData[t[s].dataset.mpvid]={}),
i=window.originalVideoAdFramesAdData[t[s].dataset.mpvid],window.withoutIframe?l.triggerListener({
vid:window.originalVideoAdFramesUnsetList[a],
data:i,
type:"receiveOriginalVideoData"
}):t[s].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:window.originalVideoAdFramesUnsetList[a],
adData:i
},"*");
break;
}
e[0]&&window.postMessage({
action:"receiveOriginalVideoData",
vid:e[0],
adData:i||{}
},"*");
}
function t(e){
if(window.withoutIframe)l.triggerListener({
type:_.APPMSGAD_READY_ACTION,
data:e
}),m.listenMessage(window,function(i,t){
t.action===_.GET_APPMSGAD_READY_STATUS_ACTION&&l.triggerListener({
type:_.APPMSGAD_READY_ACTION,
data:e,
vid:t.value&&t.value.vid
});
});else{
var i=document.getElementsByTagName("iframe");
m.broadcastFrame(i,_.APPMSGAD_READY_ACTION,e),m.listenMessage(window,function(i,t){
t.action===_.GET_APPMSGAD_READY_STATUS_ACTION&&m.postMessage(i.source,_.APPMSGAD_READY_ACTION,e);
});
}
}
function a(e){
o("[Appmsg] error get async ad data or false no ad, biz="+window.biz+", mid="+window.mid),
i(e),t();
}
function s(e){
var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=arguments[2],u=[],f=r.checkNeedAds();
f.is_need_ad=s.forceGetAd?1:f.is_need_ad;
var v=window.isPaySubscribe?0:f.is_need_ad,A=window.isPaySubscribe?1:0,y=w.getQuery("mock"),D=w.getQuery("rtx"),j="/mockserver/mockservercgi-bin/offerTestCase/mmbizwap/mp/getappmsgad",h="/mp/getappmsgad",b="5"===window.item_show_type,k=b&&!p.isNativePage()&&!w.getQuery("get_ad_after_video"),V=c.isUseAd()&&!k,x=window.pos_type_list?JSON.stringify(window.pos_type_list.split("|").map(function(e){
return Number(e);
})):"",I=Date.now(),P="string"==typeof s.version?s.devicetype:window.clientversion.htmlDecode();
window.__second_open__&&(P=window.clientversion.htmlDecode()),e=e||[];
for(var S=0;S<e.length;S++)0===e[S].indexOf(_.ORIGIN_VIDEO_VID_PREFIX)&&u.push(e[S]);
(y&&"-1"!==y||D)&&(console.info("[广告走mock系统] mockId",y,"rtx",D),h=j),console.info("[广告发送请求] 是否拉取广告",v),
console.info("[强制广告] 是否强制去掉广告",A),A?a(u):n({
url:h+"?f=json&mockid="+y+"&rtx="+D,
data:{
r:Math.random(),
appmsg_type:window.appmsg_type||"",
mid:window.mid,
sn:window.sn,
idx:window.idx,
scene:s.scene||w.getQuery("scene"),
title:s.title||encodeURIComponent(window.msg_title.htmlDecode()),
ct:s.ct||window.ct,
abtest_cookie:s.abtest_cookie||window.abtest_cookie||"",
devicetype:"string"==typeof s.devicetype?s.devicetype:window.devicetype.htmlDecode(),
version:P,
is_need_ad:v,
both_ad:f.both_ad,
send_time:s.send_time||window.send_time||"",
msg_daily_idx:s.msg_daily_idx||window.msg_daily_idx,
pass_ticket:window.pass_ticket,
is_temp_url:window.is_temp_url||0,
item_show_type:window.item_show_type,
tmp_version:1,
pos_type_list:x,
vid_list:JSON.stringify(V?e:[]),
exportkey:w.getQuery("exportkey"),
waid:w.getQuery("waid"),
is_care_mode:window.is_care_mode,
is_teenager_mode:window.is_teenager
},
type:"POST",
dataType:"json",
rtId:27613,
rtKey:50,
rtDesc:d,
async:!0,
success:function(e){
o("[Appmsg] success get async ad data"),console.info("[广告响应请求]",e),window.can_see_complaint=e.can_see_complaint,
r.afterGetAdData(f,e),m.setBackgroundClass();
var a=e;
if(a.advertisement_info&&0!==a.advertisement_info.length)try{
if(o("[Appmsg] success get async ad data, async data is: "+JSON.stringify(a)),window.originalVideoAdFramesAdData={},
a.advertisement_info)for(var s=0;s<a.advertisement_info.length;s++){
a.advertisement_info[s].cdg_appid=a.appid;
var n=a.advertisement_info[s].vid;
n&&"string"==typeof n&&1===a.advertisement_info[s].is_mp_video&&(window.originalVideoAdFramesAdData[n]=m.saveCopy(a.advertisement_info[s]),
p.report120081("0"));
}
i(u,window.originalVideoAdFramesAdData[u[0]]);
}catch(d){
console.error(d);
}else o("[Appmsg] success get async ad data, async data is empty"),i(u);
l&&l(),t(e),Math.random()<.005&&(g.saveSpeeds({
uin:window.user_uin,
pid:2587,
speeds:[{
sid:21,
time:Date.now()-I
}]
}),g.send());
},
error:function(){
a(u);
}
});
}
var o=e("appmsg/log.js"),n=e("biz_wap/utils/ajax.js"),d=e("rt/appmsg/getappmsgext.rt.js"),r=e("a/a.js"),m=e("a/a_utils.js"),w=e("biz_common/utils/url/parse.js"),_=e("a/a_config.js"),c=e("pages/version4video.js"),p=e("common/utils.js"),g=e("biz_common/utils/wxgspeedsdk.js"),l=e("appmsg/without_iframe/iframe_communicate.js");
return{
getAdData:s
};
});