define("cps/tpl/list_tpl.html.js",[],function(){
return'<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_list cps_inner_empty js_product_err_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    <# } else { #>\n        <!--正常-->\n        <section class="js_list_container js_product_container<# if(pid_type == \'book\' || pid_type != \'movie\'){ #> cps_inner_book<# } #>">\n            <div role="button" class="appmsg_card_context minishop_card cps_card minishop_card_small js_product_loop_content wx_tap_card">\n                <div class="minishop_card_hd">\n                  <span aria-label="商品，" class="minishop_card_thumb js_cover" style="background-image: url(<#=img_url#>)"></span>\n                  <# if(is_ad == 1){ #>\n                  <span class="cps_card_tag js_cps_adTag">Ad</span>\n                  <# } #>\n                </div>\n                <div class="minishop_card_bd weui-flex__item">\n                    <div class="minishop_main_context <# if(typeof price === \'undefined\' || pid_type === \'book\' || pid_type === \'movie\'){ #>has_desc<# } #>">\n                        <h2 class="minishop_card_title"><#=title#></h2>\n                        <# if(typeof price === \'undefined\' || pid_type === \'book\' || pid_type === \'movie\'){ #>\n                        <p><#=desc#></p>\n                        <# } #>\n                        <div class="minishop_card_profile weui-flex">\n                            <span class="minishop_card_profile_avatar" style="background-image: url(<#=source_logo_url#>);"></span>\n                            <strong class="minishop_card_profile_nickname"><#=source_name#></strong>\n                        </div>\n                    </div>\n    \n                    <div class="minishop_extra_context weui-flex">\n                      <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>\n                        <em class="minishop_card_price"><#=price#></em>\n                      <# }else{ #>\n                        &nbsp;\n                      <# } #>\n                      <button class="weui-btn weui-btn_mini weui-btn_orange" type="button"><# if(is_ad == 1){ #>Purchase<# }else{ #>Details<# } #></button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_list cps_inner_placeholder">\n        <div class="cps_inner_wrp" data-templateid="" data-pid="{{pid1}}" data-order="" data-packid="" data-wxaappid="{{wxa_appid1}}" data-wxapath="{{url_path1}}">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span width="100%" class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                    </div>\n                    <div class="cps_inner_info_ft"></div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n    \n';
});define("cps/tpl/card_tpl.html.js",[],function(){
return'<!--卡片类型-->\n<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_card cps_inner_empty js_product_err_container js_banner_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    \n    <# } else {#>\n        <!--正常-->\n        <section class="js_product_container js_banner_container">\n            <div class="js_product_loop_content">\n                <div role="button" class="appmsg_card_context minishop_card minishop_card_large cps_card">\n                    <div class="minishop_card_hd">\n                        <span width="100%" aria-label="商品，"  class="js_cover minishop_card_thumb" style="background-image: url(<#=img_url#>);"></span>\n                        <# if(is_ad == 1){ #>\n                        <span class="cps_card_tag js_cps_adTag">广告</span>\n                        <# } #>\n                    </div>\n                    <div class="minishop_card_bd weui-flex__item">\n                        <div class="minishop_main_context">\n                            <h2 class="minishop_card_title <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>line2<# } #>"><#=title#></h2> <!--通用模版带金额，title 可以显示2行-->\n                            <div class="minishop_card_profile weui-flex">\n                                <span class="minishop_card_profile_avatar" style="background-image: url(<#=source_logo_url#>);"></span>\n                                <strong class="minishop_card_profile_nickname"><#=source_name#></strong>\n                            </div>\n                        </div>\n                        <div class="minishop_extra_context weui-flex">\n                            <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>\n                              <em class="minishop_card_price"><#=price#></em>\n                            <# }else{ #>\n                              &nbsp;\n                            <# } #>\n                            <button type="button" class="weui-btn weui-btn_mini weui-btn_orange"><# if(is_ad == 1){ #>购买<# } else { #>详情<# } #></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    \n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_card cps_inner_placeholder">\n        <div class="cps_inner_wrp">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                    </div>\n                    <div class="cps_inner_info_ft"></div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n';
});define("cps/tpl/banner_tpl.html.js",[],function(){
return'<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_banner cps_inner_empty js_product_err_container js_banner_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    \n    <# } else {#>\n        <!--正常-->\n        <section class="cps_inner cps_inner_banner js_product_container js_banner_container">\n            <div class="cps_inner_wrp js_product_loop_content">\n                <div class="cps_inner_content" role="button">\n                    <figure class="cps_inner_image_container">\n                        <span width="100%" class="js_cover cps_inner_image" style="background: url(<#=img_url#>) no-repeat center; background-size: cover;"></span>\n                    </figure>\n                    <# if(is_ad == 1){ #>\n                    <span class="cps_inner_info_adTag js_cps_adTag">Ad</span>\n                    <# } #>\n                    <div class="cps_inner_info_container">\n                        <h2 class="cps_inner_info_title"><#=title#></h2>\n                        <div class="cps_inner_info">\n                            <div class="cps_inner_info_hd">\n                                <p class="cps_inner_info_desc c"><#=desc#></p>\n                                <div class="cps_inner_info_from">\n                                    <span class="cps_inner_ic_from" style="background: url(<#=source_logo_url#>) no-repeat center;\n                                    background-size: contain;"></span><#=source_name#>\n                                </div>\n                            </div>\n                            <div class="cps_inner_info_ft">\n                                <span class="cps_inner_btn_cps_info <# if(is_ad == 1){ #>buy<# } #>"><!--<i class="cps_inner_ic_miniapp"></i><# if(is_ad == 1){ #>购买<# } else { #>详情<# } #>--></span>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </section>\n    \n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_banner cps_inner_placeholder">\n        <div class="cps_inner_wrp">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span width="100%" class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                        <p class="cps_inner_info_desc d"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n';
});define("biz_common/tmpl.js",[],function(){
"use strict";
function e(e,n){
("undefined"==typeof n||null===n)&&(n=!0);
var t="";
return t=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
t=n?t.replace(/\t==(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','").replace(/\t=(.*?)#>/g,"', String(typeof $1 !== 'undefined' ? $1 : '').replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):t.replace(/\t=(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','"),
t=t.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
}
var n=function(n,t,p){
var r=e(n,p),i=function(){};
try{
i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}catch(u){
n=n.replace(/\'/g,"&#39;").replace(/'/g,"&#39;"),r=e(n,p),i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}
return i(t);
},t=function(e,t,p){
var r=document.getElementById(e);
return r?n(r.innerHTML,t,p):"";
};
return{
render:t,
tmpl:n
};
});define("appmsg/set_font_size.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function t(){
var e=document.createElement("div");
e.style.fontSize="16px",document.body.appendChild(e);
var t=parseFloat(e.style.fontSize),o=parseFloat(window.getComputedStyle(e,null).getPropertyValue("font-size"));
document.body.removeChild(e);
var n=o/t;
return n;
}
function o(e,t){
t.push(e);
var o=document.createTreeWalker(e,1);
do{
var n=o.currentNode;
t.push(n);
}while(o.nextNode());
return t;
}
function n(e,n){
if(null!==e&&n){
window.__fontScale__||(window.__fontScale__=parseFloat(window.location.href.match(/fontScale=(\d+)/)[1])/100||t());
var i=[],a=document.createTreeWalker(e,1,{
acceptNode:function(e){
return"function"==typeof e.className.indexOf&&-1!==e.className.indexOf(c)?(w=o(e,w),
NodeFilter.FILTER_REJECT):-1!==w.indexOf(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;
}
});
do{
var l=a.currentNode,r=l.getAttribute("mp-original-font-size");
r||(r=m?parseFloat(getComputedStyle(l).fontSize):parseFloat(getComputedStyle(l).fontSize)/window.__fontScale__,
l.setAttribute("mp-original-font-size",r));
var s=l.getAttribute("mp-original-line-height");
s||(s=m?parseFloat(getComputedStyle(l).lineHeight):parseFloat(getComputedStyle(l).lineHeight)/window.__fontScale__,
l.setAttribute("mp-original-line-height",s)),i.push([l,r,s]);
}while(a.nextNode());
var _=!0,d=!1,f=void 0;
try{
for(var u,p=i[Symbol.iterator]();!(_=(u=p.next()).done);_=!0){
var S=u.value;
S[0].style.fontSize=parseFloat(S[1])*n+"px",S[0].style.lineHeight=parseFloat(S[2])*n+"px";
}
}catch(h){
d=!0,f=h;
}finally{
try{
!_&&p.return&&p.return();
}finally{
if(d)throw f;
}
}
}
}
function i(e){
u||"function"!=typeof e||window.top.__fontScaleChangeCbList__.push(e);
}
function a(){
window.top.__fontScaleChangeCbList__=[];
}
function l(e){
if(d.os.android){
n(e,t(),!0);
var o=new MutationObserver(function(e){
var o=t(),i=!0,a=!1,l=void 0;
try{
for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){
var _=r.value;
-1===w.indexOf(_.target)&&n(_.target,o);
}
}catch(d){
a=!0,l=d;
}finally{
try{
!i&&s.return&&s.return();
}finally{
if(a)throw l;
}
}
});
return o.observe(e,{
childList:!0,
subtree:!0
}),i(function(t){
var o=S[t.fontSize]||1;
n(e,1/o,!0),!u&&(window.top.__fontScaleBackForAndroid__=1/o),f.set("__font_scale_back_for_android__",1/o);
}),o;
}
return null;
}
function r(e,o){
if(window.__fontScale__||(window.__fontScale__=t()),m){
var i=Math.min(o,window.__fontScale__);
n(e,i);
}else if(s.isAndroid){
var i=Math.min(o/window.__fontScale__,1);
n(e,i);
}else s.isIOS&&(e.style["-webkit-text-size-adjust"]=100*Math.min(o,window.__fontScale__)+"%");
}
var s=e("biz_wap/utils/mmversion.js"),_=e("biz_wap/jsapi/core.js"),d=e("biz_wap/utils/device.js"),f=e("biz_wap/utils/localstorage.js"),c="js_no_set_font_size",w=[],u=!1;
try{
u=!window.top.document;
}catch(p){
u=!0;
}
var m=d.os.ipad&&d.os.getNumVersion()>=13&&d.os.getNumVersion()<14,S={
1:.8,
2:1,
3:1.1,
4:1.12,
5:1.125,
6:1.4,
7:1.55,
8:1.65
};
u||window.top.__fontScaleChangeCbList__||(window.top.__fontScaleChangeCbList__=[]),
window.top===window&&(_.on("menu:setfont",function(e){
if(s.isIOS&&window.location.href.match(/fontScale=\d+/))if(parseFloat(e.fontScale)<=0&&(e.fontScale=100),
m)n(document.getElementsByTagName("html").item(0),e.fontScale/100),window.ipados13_font_scale=e.fontScale,
window.__fontScale__=e.fontScale/100;else{
document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%";
var t=document.getElementsByTagName("iframe");
t.length&&Array.from(t).forEach(function(t){
var o=t.contentDocument;
if(o){
var n=o.getElementsByTagName("html").item(0);
n&&(n.style["-webkit-text-size-adjust"]=e.fontScale+"%");
}
});
}else if(s.isAndroid)_.invoke("setFontSizeCallback",{
fontSize:e.fontSize
});else if(s.isWindows){
var o,i=e.fontGear||2,a=["wx_wap_desktop_fontsize_1","wx_wap_desktop_fontsize_2","wx_wap_desktop_fontsize_3","wx_wap_desktop_fontsize_4","wx_wap_desktop_fontsize_5","wx_wap_desktop_fontsize_6"];
(o=document.body.classList).remove.apply(o,a),document.body.classList.add("wx_wap_desktop_fontsize_"+i);
}
window.__fontScaleChangeCbList__.forEach(function(t){
return t(e);
});
}),s.isIOS&&window.location.href.match(/fontScale=\d+/)&&m&&setTimeout(function(){
if(!window.ipados13_font_scale){
var e=window.location.href.match(/fontScale=(\d+)/);
window.ipados13_font_scale=parseFloat(e[1]),n(document.getElementsByTagName("html").item(0),window.ipados13_font_scale/100);
}
},500));
var h={
install:function(e){
e.directive("maxFontScale",{
componentUpdated:function(e,t){
var o=t.value;
_.on("menu:setfont",function(t){
window.__fontScale__=parseFloat(t.fontScale)/100||S[t.fontSize]||1,r(e,o);
}),r(e,o);
}
});
}
};
return{
isIPadOS13:m,
setFontSize:n,
onFontScaleChange:i,
keepNormalFontSizeForAndroid:l,
removeScaleChangeCbList:a,
getScaleByDom:t,
fontSizePlugin:h
};
});define("common/tap_highlight.js",["biz_common/dom/event.js","biz_common/dom/class.js"],function(o){
"use strict";
function t(o){
var t=n.hasClass(o,"wx_tap_link")?120:250;
n.addClass(o,e),setTimeout(function(){
n.removeClass(o,e);
},t);
}
var i=o("biz_common/dom/event.js"),n=o("biz_common/dom/class.js"),s="js_wx_tap_highlight",e="wx_tap_highlight_active";
return i.on(document.body,"click",function(o){
if(o&&o.target)for(var i=o.target;i&&i!==document.body;){
if(n.hasClass(i,s))return void t(i);
i=i.parentNode;
}
}),{
highlightEle:t
};
});define("appmsg/sec_load_fail_report.js",["common/comm_report.js"],function(o){
"use strict";
var i=o("common/comm_report.js");
if(window.localStorage&&window.localStorage.getItem){
var e=4500,w="loadSec-"+window.biz+"-"+window.mid+"-"+window.idx,t=window.localStorage.getItem(w);
t&&window.write_sceen_time-parseInt(t,10)>e&&(i.report(20801,{
Bizuin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
Url:window.msg_source_url||"",
Title:window.msg_title||""
}),window.localStorage.removeItem(w));
}
});define("biz_wap/ui/weui.js",["biz_wap/ui/weui_css.js"],function(e){
"use strict";
function i(){
var e=["actionSheet","alert","confirm","dialog","validate","checkIfBlur","gallery","loading","picker","datePicker","searchBar","slider","tab","toast","topTips","uploader"];
window.weui={};
for(var i=0;i<e.length;i++)!function(i){
window.weui[e[i]]=function(){
a.push({
name:e[i],
args:arguments
}),console.info(e[i]+" will be executed after weui.js loaded.");
};
}(i);
}
function n(){
var e=document.createElement("script");
e.onload=function(){
for(var e=0;e<a.length;e++)window.weui[a[e].name].apply(window,a[e].args);
},e.onerror=function(){
throw new Error("weui.js loaded fail.");
},e.src=o,document.body.appendChild(e);
}
e("biz_wap/ui/weui_css.js");
var o="https://res.wx.qq.com/t/wx_fed/cdn_libs/res/weui/1.2.8/weui.min.js",a=[];
i(),n();
});var _slicedToArray=function(){
function t(t,e){
var n=[],r=!0,o=!1,i=void 0;
try{
for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);
}catch(d){
o=!0,i=d;
}finally{
try{
!r&&u["return"]&&u["return"]();
}finally{
if(o)throw i;
}
}
return n;
}
return function(e,n){
if(Array.isArray(e))return e;
if(Symbol.iterator in Object(e))return t(e,n);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
define("appmsg/search_image.js",[],function(){
"use strict";
function t(){
var t=window.location.href.split("?")[1];
if(t){
for(var e=t.split("&"),n=0;n<e.length;n++){
var r=e[n].split("="),o=_slicedToArray(r,2),i=o[0],a=o[1];
if("imageIndex"===i)return parseInt(a,10);
}
return"";
}
return"";
}
function e(){
var t=0;
return"undefined"!=typeof window.pageXOffset?t=window.pageXOffset:"undefined"!=typeof document.compatMode&&"BackCompat"!==document.compatMode?t=document.documentElement.scrollTop:"undefined"!=typeof document.body&&(t=document.body.scrollTop),
t;
}
function n(t){
return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+e():0;
}
function r(){
for(var t=[],e=document.getElementsByTagName("img"),n=0,r=e.length;r>n;n++){
var o=e.item(n),i=o.getAttribute("data-src");
i&&t.push(o);
}
return t;
}
function o(){
if(""!==i){
var t=r();
if(!(i>t.length)){
var e=n(t[i]);
window.scroll(0,e);
}
}
}
var i=t();
""!==i&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),"loading"!==document.readyState?o():window.addEventListener("DOMContentLoaded",function(){
o();
});
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/index.js",["appmsg/search_image.js","biz_wap/ui/weui.js","appmsg/sec_load_fail_report.js","common/tap_highlight.js","appmsg/set_font_size.js","biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/review_image.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","a/mpAdAsync.js","biz_wap/utils/wapsdk.js","common/utils.js","complain/localstorage.js","appmsg/popup_report.js","appmsg/pay_report_utils.js","appmsg/loading.js","appmsg/like_profile.js","appmsg/finance_communicate.js","appmsg/topbar.js","biz_wap/utils/jsmonitor_report.js","pages/mod/bottom_modal.js","appmsg/pay_read/pay_confirm_tpl.html.js","appmsg/pay_read/buy_wecoin_btn_tpl.html.js","pages_new/appmsg/page_bottom.js","appmsg/related_article.js","appmsg/getForbidConfig.js","appmsg/set_article_read.js","appmsg/wxwork_hidden.js","common/color/background_color.js","common/color/light.js","common/color/dark.js","appmsg/tags_utils.js","pages_new/3rd/vue.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","appmsg/emotion/weemoji.js","appmsg/subscribe/subscribe.js","complain/utils/userpainter.js","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/product.js","appmsg/page_pos.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","redpackage/redpacketcover.js","appmsg/search/search.js","appmsg/poi/poi.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","question_answer/appmsg.js","appmsg/channel/channels.js","appmsg/profile/mp_insert_profile.js","appmsg/live.js","appmsg/minishop/minishop.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/appmsg_copy_report.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function t(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),i=0;i<o.length;i++){
var n=o[i].split("=");
if(n[0].toUpperCase()===e.toUpperCase())return n[1];
}
return"";
}
function o(){
function o(e){
if(e&&0!=e.length){
for(var t={
batch_no:I.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var i=e[o],n=o+1;
for(var a in i)i.hasOwnProperty(a)&&(t[a+""+n]=i[a]);
}
u({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function M(){
st&&clearTimeout(st),st=setTimeout(function(){
try{
st=null;
for(var e=0;e<X.length;e++){
var t=X[e],i=_.attr(t,"data-showed");
if("no"==i){
var n=t.getElementsByClassName("js_product_loop_content");
if(n.length>0){
n=n[0];
var a=n.getBoundingClientRect(),r=a.height||a.bottom-a.top;
if(r>0&&a.top<E.getInnerHeight()&&a.bottom>0){
t.setAttribute("data-showed","yes");
var s=n.getAttribute("data-pid");
s&&o([{
wxa_appid:n.getAttribute("data-wxaappid"),
pid:s,
type:3,
absolute_order:e+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(d){}
},100);
}
function K(e){
try{
for(var n=window.pageYOffset||document.documentElement.scrollTop,p=0;p<X.length;p+=ot){
var l=X[p];
if(!(l.offsetTop>n+E.getInnerHeight()+100)){
var m=_.attr(l,"data-cpsstatus");
if("hide"==m){
l.setAttribute("data-cpsstatus","loading");
for(var w=""+p,g=1,f=p+1;f<X.length&&p+ot>f;f++)w=w+"%2c"+f,g++;
var h=Math.ceil(1e7*Math.random());
if(""!==t("mockcps"))var y="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+w+"&sn="+window.sn+"&mockcps="+t("mockcps");else var y="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+w+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+h;
if(window.is_teenager)return void O.setSum(286024,0,1);
if(window.is_care_mode)return void O.setSum(286024,1,1);
!function(e,t,n){
u({
url:t,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",n);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<n&&window.__addIdKeyReport("64469","18",n-e.product_list.length);
for(var t=0;t<e.product_list.length;t++){
e.product_list[t].data.cps_isready=!0,e.product_list[t].data.pid_type=e.product_list[t].data.pid_type||e.product_list[t].attr.pid_type;
var p=X[e.product_list[t].index],l=e.product_list[t].template_id;
"list"==l?p.innerHTML=a.tmpl(d,e.product_list[t].data):"banner"==l?p.innerHTML=a.tmpl(r,e.product_list[t].data):"card"==l&&(p.innerHTML=a.tmpl(s,e.product_list[t].data)),
e.product_list[t].weapp_username&&(e.product_list[t].attr.weapp_username=e.product_list[t].weapp_username),
e.product_list[t].weapp_version&&(e.product_list[t].attr.weapp_version=e.product_list[t].weapp_version),
p.setAttribute("data-cpsstatus","complete");
for(var m=p.getElementsByClassName("js_product_loop_content"),w=0;w<m.length;w++)for(var u in e.product_list[t].attr)m[w].setAttribute("data-"+u,e.product_list[t].attr[u]);
for(var g=p.getElementsByTagName("img"),w=0;w<g.length;w++)g[w].src=_.attr(g[w],"data-src");
!function(e,t){
b.on(e,"tap",".js_product_loop_content",function(n){
try{
!function(){
var a=n.delegatedTarget,r=a.getAttribute("data-wxaappid"),s=a.getAttribute("data-wxapath"),d=a.getAttribute("data-pid"),p=a.getAttribute("data-appid"),l=a.getAttribute("data-cpspackage"),m=Math.floor((new Date).getTime()/1e3)+5184e3,w=a.getAttribute("data-weapp_username"),u=a.getAttribute("data-weapp_version"),_=e.querySelector(".minishop_card_title").innerHTML;
a&&i.highlightEle(a),c.jumpUrl({
cps_weapp_username:w,
cps_weapp_version:u,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(l)+"; expires="+m+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:p,
appid:r,
path:s,
scene:1091,
sceneNote:[encodeURIComponent(location.href),user_name,msg_title,encodeURIComponent(d),_,s].join(":"),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&d&&o([{
wxa_appid:r,
pid:d,
type:4,
absolute_order:t+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
}]);
}
});
}();
}catch(n){}
return!1;
});
}(p,e.product_list[t].index);
}
M();
}catch(f){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(w,y,g);
}
}
}
}catch(e){
console.log(e);
}
}
function U(e){
try{
rt&&clearTimeout(rt),rt=setTimeout(function(){
K(e);
},300);
}catch(e){}
}
function F(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function G(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
e.timing&&!function(){
var t=e.timing;
w("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&w("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}(),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&O.setSum(24729,94,1);
var t=Math.random();
.001>t&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&O.setSum(24729,95,1),
window.__wxjs_is_wkwebview&&O.setSum(28307,67,1);
}
try{
var X=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",X.length);
for(var Y=0;Y<X.length;Y++){
X[Y].setAttribute("data-cpsstatus","hide"),X[Y].setAttribute("data-showed","no");
var $={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},it=_.attr(X[Y],"data-templateid");
window.is_teenager||("list"==it?X[Y].innerHTML=a.tmpl(d,$,!1):"banner"==it?X[Y].innerHTML=a.tmpl(r,$,!1):"card"==it&&(X[Y].innerHTML=a.tmpl(s,$,!1)));
}
}catch(at){
console.log(at);
}
setTimeout(function(){
var e=document.getElementsByClassName("wx-edui-video_source_link");
e=Array.prototype.slice.call(e),e.forEach(function(e){
e&&e.addEventListener("click",function(){
var t=e.dataset.hitUsername;
v.invoke("profile",{
username:t
});
});
});
},500);
try{
Q.init(document.getElementById("js_tags"));
}catch(at){
console.log(at);
}
var rt=void 0,st=null;
M(),b.on(window,"scroll",M),K(),b.on(window,"scroll",U),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
window.msg_title&&(window.msg_title=window.msg_title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
hd_head_img||k.jsmonitor({
id:115849,
key:26,
value:1
}),h.isAndroid?!function(){
var e={
userName:window.user_name,
bizNickName:window.nickname,
bizNickNameBackup:window.title,
cover:"",
title:window.msg_title,
headImg:window.hd_head_img,
digest:window.msg_desc,
reportData:{
BizUin:window.biz,
AppMsgID:1*window.mid,
ItemIndex:1*window.idx,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SessionId:window.sessionid,
ItemShowType:1*window.item_show_type
}
};
z.init(e);
var t=window.cdn_url_1_1||window.cdn_url_235_1||"",o=new Image;
t&&(o.src=t,o.onload=function(){
o.width<2048&&o.height<2048&&(e.cover=t,z.init(e)),window.topbarInited=!0;
},o.onerror=function(){
window.topbarInited=!0;
});
}():z.init({
userName:window.user_name,
bizNickName:window.nickname,
bizNickNameBackup:window.title,
title:window.msg_title,
headImg:window.hd_head_img,
cover:window.cdn_url_1_1||window.cdn_url_235_1||window.msg_cdn_url,
digest:window.msg_desc,
reportData:{
BizUin:window.biz,
AppMsgID:1*window.mid,
ItemIndex:1*window.idx,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SessionId:window.sessionid,
ItemShowType:1*window.item_show_type
}
}),b.on(window,"scroll",function(){
J||(!h.isAndroid||window.topbarInited)&&(H(0),J=!0);
}),v.invoke("createWebViewForFastLoad",{
scene:1
},function(e){
console.log(e);
}));
var dt=document.getElementsByTagName("body");
if(!dt||!dt[0])return!1;
dt=dt[0],function(){
function e(){
if(i.length)for(var e=document.documentElement.scrollTop||document.body.scrollTop,t=0;t<i.length;t++)if(1!=i[t].getAttribute("hasload")){
var o=i[t].getBoundingClientRect();
(o.top<d+e&&o.top>e||o.top+o.height>e&&o.top+o.height<d+e)&&i[t].getAttribute("href").length>0&&(i[t].setAttribute("hasload",1),
v.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:i[t].getAttribute("data-itemshowtype"),
url:i[t].getAttribute("href")
}]
},function(e){
console.log(e);
}),i.splice(t,1),t--);
}
}
function t(){
for(var e=0;e<r.length;e++){
var t=r[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(r.splice(e,1),e--,T.report([1,T.getRedirectType(t.parentNode.getAttribute("href")),"",window.img_popup?1:0,window.source,T.getUrlData(t.parentNode.getAttribute("href"))]));
}
for(var e=0;e<s.length;e++){
var t=s[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(s.splice(e,1),e--,T.report([1,1,"",window.img_popup?1:0,window.source,t.getAttribute("data-miniprogram-appid")]));
}
}
function o(){
e(),t();
}
for(var i=[],n=document.getElementById("js_content").getElementsByTagName("a"),a=0;a<n.length;a++)null!==n[a].getAttribute("data-itemshowtype")&&i.push(n[a]);
var r=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("h5_image_link"),function(e){
e.parentNode.getAttribute("href")&&e.parentNode.getAttribute("href").length>0&&r.push(e);
});
var s=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("weapp_image_link"),function(e){
s.push(e);
});
var d=window.innerHeight||document.documentElement.clientHeight;
b.on(window,"scroll",o),o();
}(),function(){
v.on("onScreenShot",function(){
O.setSum(114217,15,1);
}),w("[Appmsg] pay process 1 isPaySubscribe="+window.isPaySubscribe),window.isPaySubscribe&&!function(){
v.on("onScreenShot",function(){
B.reportPayAppmsg(6);
});
var e=h.isWindows||h.isMac&&!h.isIOS,t=document.getElementById("js_content"),o=function(e){
"IMG"===e.target.tagName&&e.preventDefault();
};
e&&(t.addEventListener("dragstart",o),h.isWechat||t.addEventListener("contextmenu",o)),
w("[Appmsg] pay process 2 isPaid="+window.isPaid),window.isPaid||!function(){
var t="isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,o=document.getElementById("js_pay_panel"),i=o.getElementsByClassName("js_pay_btn")[0],n=document.getElementById("js_pay_panel_bottom"),r=n.getElementsByClassName("js_pay_btn")[0],s=window.getComputedStyle(n),d=40+parseInt(s.paddingTop,10)+parseInt(s.paddingBottom,10);
i.style.width=i.getBoundingClientRect().width+"px",r.style.width=r.getBoundingClientRect().width+"px";
var p=h.isGooglePlay;
if(h.isAndroid&&"1"===window.localStorage.getItem(t)&&B.report110809(30),e)for(var c=document.getElementsByClassName("js_pay_qrcode"),l="/mp/paysubqrcode?action=get_article_qrcode&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"#wechat_redirect",_=0,g=c.length;g>_;_++)c[_].src=l;
h.isInMiniProgram&&(m.addClass(i,"btn_disabled"),m.addClass(n.getElementsByClassName("js_pay_btn")[0],"btn_disabled")),
h.isIOS&&window.payShowIAPPrice&&!window.can_use_wecoin&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),B.reportOverseaPay("",0,1,0,"",2,"");
},3e3),t=Date.now();
v.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(i){
if("number"==typeof e){
clearTimeout(e);
var a=Date.now()-t;
if(console.log("getIAPProductInfo",i,a+"ms"),-1!==i.err_msg.indexOf(":ok")){
var r=function(){
if(B.report110809(38),window.payProductId!==i.productId)return B.report110809(44),
{
v:void 0
};
var e={
USD:"$",
HKD:"HK$",
CAD:"C$",
AUD:"A$",
TWD:"NT$",
JPY:"JPY￥",
EUR:"€",
SGD:"S$",
GBP:"£",
NZD:"NZ$",
MYR:"RM",
KZT:"〒",
KRW:"₩",
THB:"฿",
PHP:"₱",
TRY:"₺",
MXN:"Mex$",
CNY:"￥"
},t=[o.getElementsByClassName("js_pay_fee")[0],n.getElementsByClassName("js_pay_fee")[0]];
t.forEach(function(t){
var o=e[i.currencyCode]?e[i.currencyCode]:i.currencySymbol;
t.innerHTML=o+i.price.toFixed(2),t.parentNode.dataset.ready=1;
}),window.iapPriceInfo&&window.iapPriceInfo.currency_code!==i.currencyCode&&u({
url:"/mp/useriapinfo?action=update",
type:"POST",
dataType:"json",
async:!0,
data:{
country_code:i.countryCode,
currency_code:i.currencyCode,
currency_symbol:i.currencySymbol,
price:i.price,
price_format_string:i.priceFormatString,
iap_product_id:i.productId
}
}),window.oriProductFee?("CNY"!==i.currencyCode&&B.report110809(40),B.reportOverseaPay(i.currencyCode,100*i.price.toFixed(2),1,a,i.countryCode,0,i.err_msg+(i.err_desc?"__"+i.err_desc:""))):(window.IAPProductInfo=i,
window.IAPProductInfo.invokeTime=a);
}();
if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v;
}else B.report110809(39),B.reportOverseaPay("",0,1,0,"",1,i.err_msg+(i.err_desc?"__"+i.err_desc:""));
}
});
}(),window.jump2pay&&b.on(window,"load",function(){
window.scrollTo(0,o.getBoundingClientRect().top-E.getInnerHeight()/3);
});
var f=function(){
var e=i.getBoundingClientRect().top;
if(e+d>window.innerHeight){
if(1*window.previewPercent===0)return;
n.className="pay pay__notice pay__notice_show";
}else n.className="pay pay__notice",window.is_finished_preview=1;
};
f(),b.on(window,"scroll",f);
var y=function(e){
1===e?P.show():2===e&&Array.prototype.forEach.call(document.getElementsByClassName("js_button_loading"),function(e){
e.style.display="",e.nextElementSibling.style.display="none";
});
},A=function(e){
1===e?P.hide():2===e&&Array.prototype.forEach.call(document.getElementsByClassName("js_button_loading"),function(e){
e.style.display="none",e.nextElementSibling.style.display="";
});
},j=2,I=!1,x=0,k=0,T=null,S=null,R=null,z=null,W=null,M=null,K=null,H=null,V=function(){
B.reportPayAppmsg(1),C.renderLikeProfile(["pay"]),L&&L.render&&L.render("pay"),v.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:item_show_type
},function(e){
I=!1,B.report110809(e.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(t,"1"),
window.__second_open__?window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect":window.location.reload();
}),window.localStorage.setItem("paySuc","1");
},J=null,U=null;
w("[Appmsg] pay process 3 can_use_wecoin="+window.can_use_wecoin),window.can_use_wecoin&&!function(){
var e=document.createElement("div");
e.innerHTML=a.tmpl(N,{
price:wecoin_amount
});
var t=document.createElement("div"),o=document.createElement("div");
o.className="weui-half-screen-dialog__btn-area",M=document.createElement("a"),M.innerText="Pay",
M.className="weui-btn weui-btn_primary";
var i=document.createElement("div");
i.className="weui-half-screen-dialog__attachment-area",i.innerHTML='<a href="javascript:;">常见问题</a>',
K=document.createElement("div"),K.id="js_wecoin_term",K.className="pay__wecoin-term weui-cells_checkbox",
K.style.display="none",K.innerHTML='<label for="js_wecoin_term_check"><input id="js_wecoin_term_check" type="checkbox" class="weui-check" /><i class="weui-icon-checked"></i>同意<a href="javascript:;">《微信豆充值协议》</a></label>',
o.appendChild(M),t.appendChild(K),t.appendChild(o),t.appendChild(i),b.on(i,"tap",function(e){
e&&e.preventDefault(),B.reportPayAppmsg(17),v.invoke("openUrlWithExtraWebview",{
url:"https://kf.qq.com/touch/product/WXDB_app.html",
openType:1
});
}),b.on(K,"click",function(e){
"A"===e.target.tagName&&v.invoke("openUrlWithExtraWebview",{
url:window.paySubscribeInfo.agreement_url.htmlDecode(),
openType:1
});
});
var n=function(){
P.show();
var e=Math.round(new Date/1e3);
v.invoke("consumeWCCoin",{
buff:H
},function(t){
console.log("consumeWCCoin res",t),I=!1,t&&t.err_msg&&t.err_msg.indexOf("ok")>-1?!function(){
B.reportPay(e,1,H);
var t=function o(){
u({
url:"/mp/paysub?action=query_pay_status&product_type=1&product_id="+window.productPayPackage.product_id,
type:"GET",
dataType:"json",
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret&&1*e.pay_status===1?(window.weui.toast("已购买",750),
V()):setTimeout(o,200);
}
});
};
t();
}():t&&t.err_msg&&t.err_msg.indexOf("fail")>-1&&(B.reportPay(e,3,H,t.err_msg,t.err_code,t.err_domain),
window.weui.alert("Payment failed. Try again later."));
});
};
w("[Appmsg] pay process 4 on payBtn tap"),b.on(M,"tap",function(){
M.getAttribute("disabled")||(w("[Appmsg] pay process 5 wecoinAmountRemain="+k+" wecoin_amount="+wecoin_amount),
wecoin_amount>k?(J.hide(),setTimeout(function(){
B.reportPayAppmsg(19),w("[Appmsg] pay process 6.1 buyWCCoin");
var e=function(e){
P.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1&&(T.innerText=e.balance,k=e.balance,
R.innerText=window.wecoin_amount-k,k<window.wecoin_amount?J.show():n());
},t={
businessId:2,
scene:4,
panelShowType:"present"
};
h.isAndroid&&h.gtVersion("8.0.18",!0)&&(t.mode=2,t.agreementVersion=window.paySubscribeInfo.agreement_version,
t.customCount=window.wecoin_amount-k,t.productId=window.paySubscribeInfo.recharge_product_id),
v.invoke("buyWCCoin",t,function(t){
console.log(t),t&&t.err_msg&&(t.err_msg.indexOf("ok")>-1?h.isIOS&&h.ltVersion("8.0.17")||h.isAndroid&&h.ltVersion("8.0.17")?window.payEduTips.firstWecoinRecharge?U.show():(P.show(),
v.invoke("getWCCoinBalance",{},e)):v.invoke("showWCCoinFirstBuyCoinTips",{
alwaysDarkMode:!1
},function(){
P.show(),v.invoke("getWCCoinBalance",{},e);
}):t.err_msg.indexOf("cancel")>-1?J.show():window.weui.alert("充值失败，请稍后重试"));
});
},250)):(J.hide(),n()));
}),J=new q(e,{
title:"",
extClass:"pay__bottom-modal",
hasBtn:!0,
btnSlot:a.tmpl(D,{}),
autoHeight:!0,
footerEl:t,
cb:function(){},
onHide:function(){
I=!1;
},
btnClickCb:function(){
J.hide();
var e=function(e){
P.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1&&(T.innerText=e.balance,k=e.balance,
k<window.wecoin_amount?(R.innerText=window.wecoin_amount-k,z.innerText="售价 "+(window.wecoin_amount-k)/10+"元"):(S.innerText="购买全文",
R.innerText=window.wecoin_amount,z.style.display="none",K.style.display="none",M.innerText="Pay"),
J.show());
};
setTimeout(function(){
B.reportPayAppmsg(14),v.invoke("buyWCCoin",{
businessId:2,
scene:3,
panelShowType:"present"
},function(t){
console.log(t),t&&t.err_msg&&(t.err_msg.indexOf("ok")>-1?h.isIOS&&h.ltVersion("8.0.17")||h.isAndroid&&h.ltVersion("8.0.17")?window.payEduTips.firstWecoinRecharge?U.show():(P.show(),
v.invoke("getWCCoinBalance",{},e)):v.invoke("showWCCoinFirstBuyCoinTips",{
alwaysDarkMode:!1
},function(){
P.show(),v.invoke("getWCCoinBalance",{},e);
}):t.err_msg.indexOf("cancel")>-1&&J.show());
});
},250);
}
}),T=document.getElementById("js_wecoin_remain"),S=document.getElementById("js_wecoin_title"),
R=document.getElementById("js_wecoin_price"),z=document.getElementById("js_wecoin_tips"),
W=document.getElementById("js_wecoin_term_check"),W&&W.addEventListener("change",function(e){
e.target.checked?M.removeAttribute("disabled"):M.setAttribute("disabled","disabled");
});
}();
var F=function G(o,i){
if(w("[Appmsg] pay process payFunc call 1"),w("[Appmsg] pay process payFunc call 2 isCheck="+i),
!i){
if(!e&&I)return;
if(B.report110809ForDevice(32),B.reportPayAppmsg(9),h.isInMiniProgram)return void B.reportPayAppmsg(18);
if(p)return B.reportPayAppmsg(18),void window.weui.alert("暂不支持Google Play支付，前往微信官网下载最新版微信，即可正常付费");
if((h.is_wxwork||!h.isWechat)&&!e)return B.reportPayAppmsg(18),void window.weui.alert("Make the payment in Weixin.");
I=!0,x=new Date;
}
var n=o.currentTarget;
if(!e&&1*n.dataset.ready===0)return i||(B.report110809ForDevice(64),P.show()),new Date-x>6e4?(B.report110809ForDevice(66),
P.hide(),window.weui.alert("Payment timeout. Try again later."),void(I=!1)):setTimeout(G,100,{
currentTarget:n
},!0);
if(i&&B.report110809ForDevice(66),1===window.is_transfer_msg)return B.reportPayAppmsg(18),
window.weui.confirm("此内容来自于迁移前的帐号，不支持付费",{
buttons:[{
type:"default",
label:"OK"
}]
}),void(I=!1);
if(window.is_teenager)return B.reportPayAppmsg(18),window.weui.alert("青少年模式下不可付费"),
O.setSum(232209,0,1),void(I=!1);
if(window.is_temp_url)B.reportPayAppmsg(18),window.weui.alert("A temporary link is free. Please share it with caution to avoid content leakage.",function(){
I=!1,location.replace(""+location.origin+location.pathname+location.search+"&temp_is_paid=1"+location.hash);
});else if(e){
var a=function(){
B.reportPayAppmsg(18);
var e="js_pay_qrcode_wrap",t=n.parentNode.getElementsByClassName("js_pay_fee_display")[0];
if("block"===t.style.display)return{
v:void 0
};
n.classList.contains("js_article_bottom")&&t.classList[n.getBoundingClientRect().top<300?"add":"remove"]("pay__notice-qrcode_bottom");
var o=function i(o){
if("none"!==t.style.display){
for(var a=o.target;!(null===a||a.classList&&a.classList.contains(e)||a===n);)a=a.parentNode;
a!==n&&(null!==a&&a.classList.contains(e)||(t.style.display="none",b.off(window,"click",i)));
}
};
b.on(window,"click",o),t.style.display="block";
}();
if("object"===("undefined"==typeof a?"undefined":_typeof(a)))return a.v;
}else{
if(h.isIOS&&h.ltVersion("8.0.8")||h.isAndroid&&h.ltVersion("8.0.8")&&window.can_use_wecoin)return B.reportPayAppmsg(18),
void location.replace("https://support.weixin.qq.com/update/");
if(h.isIOS&&h.ltVersion("7.0.10")||h.isAndroid&&h.ltVersion("7.0.10")&&!window.can_use_wecoin)return B.reportPayAppmsg(18),
void location.replace("https://support.weixin.qq.com/update/");
h.isAndroid&&"1"===window.localStorage.getItem(t)&&B.report110809(31),B.report110809ForDevice(34),
w("[Appmsg] pay process payFunc call 3"),window.can_use_wecoin?!function(){
var e=document.createElement("div");
e.innerHTML='<div class="pay__wecoin-edu-profile">\n                  <div class="pay__wecoin-edu-title">可在「我>个人信息>微信豆」页面，查看微信豆消费明细。</div>\n                  <div class="pay__wecoin-edu-pic">\n                    <div class="pay__wecoin-edu-avatar"><img src="'+window.payEduTips.userImgUrl+'"></div>\n                    <div class="pay__wecoin-edu-nic">'+window.payEduTips.userNickname+"</div>\n                  </div>\n                </div>";
var t=document.createElement("a");
t.innerText="OK",t.className="weui-btn weui-btn_default";
var o=function(){
U.hide(),P.show(),v.invoke("getWCCoinBalance",{},function(e){
P.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1?(T.innerText=e.balance,k=e.balance,
J.show()):I=!1;
}),window.payEduTips.firstWecoinRecharge=0;
};
b.on(t,"tap",o),U=new q(e,{
hasHeader:!1,
top:window.innerHeight-467+"px",
footerEl:t,
extClass:"pay__edu-modal",
onHide:function(){
o();
}
}),y(j),u({
url:"/mp/paysub?action=create_wecoin_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret)B.report110809(13),B.report110809ForDevice(36),
H=e.encode_resp_buff,v.invoke("getWCCoinBalance",{},function(e){
A(j),console.log("getWCCoinBalance callback",e),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1?e.balance>=window.wecoin_amount?(T.innerText=e.balance,
k=e.balance,S.innerText="购买全文",R.innerText=window.wecoin_amount,z.style.display="none",
K.style.display="none",M.innerText="Pay",J.show(),B.reportPayAppmsg(16)):(B.reportPayAppmsg(15),
console.log({
businessId:2,
scene:4,
panelShowType:"present",
mode:2,
customCount:window.wecoin_amount-e.balance,
productId:window.payGlobal.recharge_product_id,
agreementVersion:window.payGlobal.agreement_version
}),T.innerText=e.balance,k=e.balance,S.innerText="微信豆不足，购买全文还需支付",R.innerText=window.wecoin_amount-e.balance,
h.isAndroid&&h.gtVersion("8.0.18",!0)?(z.innerText="售价 "+(window.wecoin_amount-e.balance)/10+"元",
z.style.display="",K.style.display="",W.checked=!!window.paySubscribeInfo.agreement_status,
window.paySubscribeInfo.agreement_status||M.setAttribute("disabled","disabled")):M.innerText="去充值",
J.show()):(I=!1,window.weui.alert("System error. Try again later."));
});else switch(I=!1,B.reportPayAppmsg(18),e&&e.base_resp&&e.base_resp.ret){
case 202600:
window.weui.alert("Article has been deleted.");
break;

case 202601:
window.weui.alert('The article is no longer marked as "Original". Unable to purchase.');
break;

case 202602:
window.weui.alert("You have already purchased this article. No additional payment required.",V);
break;

case 202604:
window.weui.alert(e.appmsg_ban_reason_desc?"此内容因"+e.appmsg_ban_reason_desc+"已被封禁，不支持付费":"此内容因违规已被封禁，不支持付费");
break;

case 202607:
window.weui.alert("暂不支持Google Play支付，前往微信官网下载最新版微信，即可正常付费");
break;

case 202608:
location.replace("https://support.weixin.qq.com/update/");
break;

case 202609:
window.weui.alert("你已成为该公众号的黑名单用户，暂时无法付费");
break;

case 202612:
window.weui.alert("此帐号付费功能已被封禁，不支持付费");
break;

case 202617:
window.weui.alert("青少年模式下不可付费"),O.setSum(232209,0,1);
break;

default:
B.report110809(14),window.weui.alert("Order creation failed. Try again later.");
}
},
error:function(){
I=!1,window.weui.alert("System error. Try again later.");
},
complete:function(){
P.hide();
}
});
}():(P.show("Generating order..."),u({
url:"/mp/paysub?action=create_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret)!function(){
B.report110809(13),B.report110809ForDevice(36);
var t=Math.round(new Date/1e3);
if(h.isIOS){
var o=e.iap_info;
v.invoke("requestVirtualPayment",{
appID:o.appid,
priceLevel:o.price_level,
busiType:23,
busiId:o.busi_id,
productDesc:o.desc,
sign:o.sign,
extInfo:o.ext_info
},function(o){
console.log("requestVirtualPayment res: ",o),o.err_msg.indexOf("ok")>-1?(B.report110809(15),
B.reportPay(t,1,e.order_id),V()):o.err_msg.indexOf("cancel")>-1?(I=!1,B.report110809(28),
B.reportPay(t,2,e.order_id),console.log("pay cancel")):o.err_msg.indexOf("fail")>-1?(I=!1,
B.report110809(16),B.reportPay(t,3,e.order_id,o.err_msg,o.err_code,o.err_domain),
window.weui.alert(o.err_msg.slice(o.err_msg.indexOf("fail")+4))):(I=!1,window.weui.alert(o.err_msg));
}),window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),B.reportOverseaPay("",0,2,0,"",2,"");
},3e3),t=Date.now();
v.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(o){
if("number"==typeof e){
clearTimeout(e);
var i=Date.now()-t;
if(console.log("getIAPProductInfo",o,i+"ms"),-1!==o.err_msg.indexOf(":ok")){
if(B.report110809(41),window.payProductId!==o.productId)return void B.report110809(44);
window.IAPProductInfo?window.IAPProductInfo.currencyCode!==o.currencyCode&&B.report110809(43):window.oriProductFee&&"CNY"!==o.currencyCode&&B.report110809(43),
B.reportOverseaPay(o.currencyCode,100*o.price.toFixed(2),2,i,o.countryCode,0,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}else B.report110809(42),B.reportOverseaPay("",0,2,0,"",1,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}
});
}();
}else{
var i=e.midas_info;
window.h5sdk.directPay({
sandbox:!!i.sandbox,
ontimeout:function(){
I=!1,window.weui.alert("Payment timeout. Try again later.");
},
methods:{
onPayEnd:function(o,i){
console.log("directPay res: ",o,i),1===o?(B.report110809(17),B.reportPay(t,1,e.order_id,i,o),
V()):-1===o&&/:cancel$/.test(i)?(I=!1,B.report110809(29),B.reportPay(t,2,e.order_id,i,o),
console.log("pay cancel")):(I=!1,B.report110809(18),B.reportPay(t,3,e.order_id,i,o),
window.weui.alert("Payment failed. Try again later."));
}
}
},{
pf:i.pf,
appid:i.appid,
type:"goods",
openid:i.openid,
extend:{
hideOfferName:1
},
goodstokenurl:i.url_params,
usewxappid:"1",
wx_h5pay:0,
direct_pay_channel:"wechat"
});
}
}();else switch(I=!1,e&&e.base_resp&&e.base_resp.ret){
case 202600:
window.weui.alert("Article has been deleted.");
break;

case 202601:
window.weui.alert('The article is no longer marked as "Original". Unable to purchase.');
break;

case 202602:
window.weui.alert("You have already purchased this article. No additional payment required.",V);
break;

case 202604:
window.weui.alert(e.appmsg_ban_reason_desc?"此内容因"+e.appmsg_ban_reason_desc+"已被封禁，不支持付费":"此内容因违规已被封禁，不支持付费");
break;

case 202607:
window.weui.alert("暂不支持Google Play支付，前往微信官网下载最新版微信，即可正常付费");
break;

case 202608:
location.replace("https://support.weixin.qq.com/update/");
break;

case 202609:
window.weui.alert("你已成为该公众号的黑名单用户，暂时无法付费");
break;

case 202612:
window.weui.alert("此帐号付费功能已被封禁，不支持付费");
break;

case 202617:
window.weui.alert("青少年模式下不可付费"),O.setSum(232209,0,1);
break;

default:
B.report110809(14),window.weui.alert("Order creation failed. Try again later.");
}
},
error:function(){
I=!1,window.weui.alert("System error. Try again later.");
},
complete:function(){
P.hide();
}
}));
}
};
b.tap(i,F),b.tap(n.getElementsByClassName("js_pay_btn")[0],F);
}();
}();
}();
var pt=e("complain/utils/userpainter.js");
!function(){
try{
if(anchor_tree_msg){
var e=Date.now(),t=document.getElementById("js_content"),o=anchor_tree_msg?JSON.parse(anchor_tree_msg).anchor_tree:[];
pt.init(t,o),k.saveSpeeds({
sample:1,
uin:uin,
pid:"https:"==nt?462:417,
speeds:{
sid:38,
time:Date.now()-e
}
}),k.send();
}
}catch(i){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.onError(i,{
anchor_tree_msg:anchor_tree_msg
});
}
}();
var ct=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&ct.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch(at){
var lt="",mt=new Image;
mt.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+lt+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__&&!h.is_wxwork){
var wt=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,wt+"rd2werd=1#wechat_redirect"));
}
var ut=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var _t=!h.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var gt=_t?null:new p({
is_https_res:is_https_res
}),ft=A(1e3*parseInt(window.modify_time)),ht=ft.format("YYYY/MM/DD"),yt=document.getElementById("js_modify_time");
if(yt&&(yt.innerHTML=ht),window.isSg||"mp.weixin.qq.com"==location.host){
var bt=e("biz_common/log/jserr.js");
bt({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var vt=-1!=navigator.userAgent.indexOf("TBS/"),At=function(e,t){
F(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
vt&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var a=i.lossy&i.lossless&i.alpha;
t(!!a);
}
});
},jt=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,i=!1,n=0,a=t.length;a>n;n++){
var r=t[n].getAttribute("data-src");
r&&r.canHevc()&&(o=!0),r&&r.isGif()&&(i=!0);
}
var s=h.gtVersion("6.5.13",!0)&&i,d=h.gtVersion("6.8.0",!0)&&o,p=!1;
try{
{
top.window.document;
}
}catch(c){
p=!0;
}
(et||navigator.userAgent.indexOf("Br_trunk")>-1)&&h.isIOS&&(s||d)&&!p?(console.info("[HEVC代理] 当前版本可以启用HEVC代理"),
v.invoke("imageProxyInit",{},function(t){
t.err_msg.indexOf(":ok")>-1?(tt=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},It=function(e){
At("lossy",e),At("lossless",e),At("alpha",e),At("animation",e);
};
if(window.webp=!1,jt(function(){
It(function(t){
function o(e){
return parseInt(e,10)||0;
}
function i(e){
(e.width<40||e.height<40)&&(o(e.style.width)<40||o(e.style.height)<40)||e.classList.add("img_loading");
}
function n(e,t,n){
(n.width<40||n.height<40)&&(o(n.style.width)<40||o(n.style.height)<40)||(n.classList.remove("img_loading"),
n.classList.contains("img_loadederror")||(n.classList.add("img_loadederror"),n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51),n.bindRetry||(n.bindRetry=!0,b.on(n,"click",function(){
return window.__addIdKeyReport("28307",66),a(n),i(n),e=e.https2http(),t.__retryload++,
t.src=ut.addParam(e,"retryload",t.__retryload,!0),!1;
}))));
}
function a(e){
e.classList.remove("img_loading"),e.classList.remove("img_loadederror");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var r=document.getElementById("js_cover");
r&&!function(){
var e=r.getAttribute("data-src");
e&&(e.isCDN()&&(e=e.imgChange640(),t&&(e=ut.addParam(e,"tp","webp",!0)),e=ut.addParam(e,"wxfrom","5",!0),
is_https_res||Z?e=e.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(e=e.https2http())),
setTimeout(function(){
r.onload=function(){
g(r,"height","auto","important"),g(r,"visibility","visible","important");
},r.setAttribute("src",e);
},0),window.logs.img.read[e]=!0,window.logs.img.load[e]=!0,r.removeAttribute("data-src"));
}();
var s=e("biz_wap/ui/lazyload_img.js"),d=2;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),c=0,l=p.length;l>c;c++){
{
var u=p[c].getAttribute("data-src");
p[c].getAttribute("src");
}
u&&u.isGif()&&p[c].classList.add("__bg_gif");
}
for(var _=document.getElementsByClassName("__bg_gif"),c=0,l=_.length;l>c;++c)_[c].setAttribute("data-order",c);
var f=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(!/^https?\:\/\/mmbiz\.qpic\.cn/.test(o))return;
var i=t.parentNode,n=!1;
m.hasClass(i,"js_jump_icon")&&(n=!0);
for(var a=!1;i.tagName&&"body"!=i.tagName.toLowerCase();){
if("a"==i.tagName.toLowerCase()){
var r=i.getAttribute("href")||"";
null!=r.match(/^http/)&&(a=!0);
break;
}
i=i.parentNode;
}
if(n&&!a){
var s=t.parentNode,d=s.parentNode;
if(d){
for(var p=document.createDocumentFragment();s.firstChild;)p.appendChild(s.firstChild);
d.insertBefore(p,s),d.removeChild(s);
}
}else if(!n&&a){
var c=document.createElement("span"),l=getComputedStyle(t);
"static"!=l.positon&&(c.style.position=l.positon),c.style.left=l.left,c.style.top=l.top,
c.style.right=l.right,c.style.bottom=l.bottom,c.style.margin=l.margin,m.addClass(c,"js_jump_icon"),
m.addClass(c,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(c,t),
c.appendChild(t),window.__addIdKeyReport("111535",0);
}
}catch(w){}
},y=function B(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var i=0;i<t.length;i++)"a"!=t[i].tagName.toLowerCase()&&B(t[i]);
}catch(n){}
};
try{
for(var A=document.getElementsByTagName("a"),j=0;j<A.length;j++){
var I=A.item(j),x=I.getAttribute("href")||"";
null!=x.match(/^http/)&&y(I);
}
}catch(E){}
var T=!1;
window.isCartoonCopyright||window.is_care_mode||new s({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
accessibilityCallback:function(e){
v.invoke("getUserConfig",{},function(t){
t.isAccessibilityMode&&(window.localStorage.setItem(V,"1"),e());
});
},
lazyloadHeightWhenWifi:function(){
var e=void 0,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var i,n=window.navigator.userAgent,a=/TBS\/([\d\.]+)/i,r=n.match(a);
r&&r[1]&&(i=parseInt(r[1]));
var s=/XWEB\/([\d\.]+)/i,d=n.match(s),p=void 0;
d&&d[1]&&(p=parseInt(d[1]));
var c=1e3,l=window.user_uin||0,m=0!==l&&Math.floor(l/100)%1e3<c,u=(i>=43305&&44206!=i||p>=16)&&o.isGif(),_=0!==l&&Math.floor(l/100)%1e3<=500,g=p>=564&&o.canHevc()&&h.gtVersion("6.8.0",!0)&&_;
m&&(u||g)?(o=ut.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=ut.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=ut.addParam(o,"wxfrom","5",!0),is_https_res||Z?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var a=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
a.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(f){}
var y=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(y,"http://m.qpic.cn"),/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i.test(o)&&!window.webp&&(o=ut.addParam(o,"t","",!0)),
o=ut.addParam(o,"wx_lazy","1",!0);
var b=h.gtVersion("6.5.13",!0)&&!h.eqVersion("7.0.9")&&o.isGif(),v=h.gtVersion("6.8.0",!0)&&o.canHevc()&&!(h.eqVersion("7.0.9")&&o.isGif());
return tt&&(b||v)&&(window.__addIdKeyReport("28307",106),o=ut.addParam(o,"tp","wxpic",!0),
o=tt+"hevc?url="+encodeURIComponent(o)+"&type="+o.getOriginImgType()),"anonymous"==e.crossOrigin&&(o=ut.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,w("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t,o){
var i=t?t.__retryload||0:0;
if(i>=d&&n(e,t,o),e&&!(i>d)){
if(!e.isCDN()){
if(!tt)return;
if(-1==e.indexOf(tt))return;
}
var a=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+a),1>=i&&window.__addIdKeyReport("28307",75+1*i+a),
e.isWxpic()?(window.__addIdKeyReport("28307",93),window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError:hevc",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=i&&window.__addIdKeyReport("28307",96+1*i)):e.isWebp()?(window.__addIdKeyReport("28307",86),
window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError:webp",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=i&&window.__addIdKeyReport("28307",89+1*i)):window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),tt&&e.indexOf(tt)>-1&&window.__addIdKeyReport("28307",108),d>i){
if(i++,t.__retryload=i,1==i&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==i&&e.indexOf("https://")>-1?(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)):2==i&&e.indexOf("mmbiz.qpic.cn")>-1&&(e=e.replace("mmbiz.qpic.cn","mmbiz.qlogo.cn"),
e.indexOf(!1)&&(e=e.http2https())),tt&&e.indexOf(tt)>-1){
var r=e.split("hevc?url=")[1];
r=r.split("&type")[0],r=decodeURIComponent(r),r=r.replace("tp=wxpic",""),e=r.https2http();
}
t.start_load_time=+new Date,t.src=ut.addParam(e,"retryload",i,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
w("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var s=0,p=t.lazyLoadOnerror.length;p>s;s++)"function"==typeof t.lazyLoadOnerror[s]&&t.lazyLoadOnerror[s].call(t);
}catch(c){}
var l=10;
/tp\=webp/.test(e)&&(l=11);
var m=new Image;
m.src="http://mp.weixin.qq.com/mp/jsreport?key="+l+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
if(!window.__second_open__&&!T){
var o=window.performance||window.msPerformance||window.webkitPerformance;
if(!o||!o.timing)return;
var i=window.location.protocol;
k.saveSpeeds({
uin:uin,
pid:"https:"==i?462:417,
speeds:{
sid:35,
time:Date.now()-window.performance.timing.navigationStart
}
}),k.send(),T=!0;
}
a(t),gt&&gt.bindEvent(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var n=t?t.__retryload||0:0;
if(!(n>d)){
w("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+n),
t.setAttribute("data-fail",0),f(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var r=0,s=t.lazyLoadOnload.length;s>r;r++)"function"==typeof t.lazyLoadOnload[r]&&t.lazyLoadOnload[r].call(t);
}catch(p){}
var c=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+c),1>=n&&window.__addIdKeyReport("28307",73+1*n+c),
e.isWxpic()?(window.__addIdKeyReport("28307",92),1>=n&&window.__addIdKeyReport("28307",94+1*n)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
1>=n&&window.__addIdKeyReport("28307",87+1*n)),tt&&e.indexOf(tt)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==n&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==n&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var l=Math.random(),m=+new Date-t.start_load_time;
m&&0==e.indexOf("https://")&&.5>l?(window.__addIdKeyReport("27822",121,m),window.__addIdKeyReport("27822",122)):m&&5e-4>l&&(window.__addIdKeyReport("27822",124,m),
window.__addIdKeyReport("27822",125)),""===t.style.filter||"none"===t.style.filter||/translate(Z|3d)\(/.test(t.style.transform)||(t.style.transform+=" translateZ(0)",
t.style.webkitTransform+=" translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),gt){
var xt=document.getElementById("js_cover");
gt.add({
container:document.getElementById("js_content"),
imgs:xt?[xt]:[]
});
}
e("appmsg/async.js"),W(),!window.isSg;
var kt=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(e){
var i="57";
"28"==window.source&&(i="96"),"31"===window.source&&(i="103"),"30"===window.source&&(i="102"),
"29"==window.source&&(i="39"),"15"==window.source&&(i="121"),o.push({
dom:e,
username:user_name,
profileReportInfo:window.profileReportInfo||"",
scene:i
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"161"
});
var n=document.getElementById("js_share_headimg");
n&&o.push({
dom:n,
username:source_username,
scene:"172"
});
var a=document.getElementById("js_share_author");
a&&o.push({
dom:a,
username:source_username,
scene:"172"
});
for(var r=0,s=o.length;s>r;r++)!function(e){
b.on(e.dom,"click",function(t){
if("copyright_info"==e.dom.id&&source_encode_biz){
kt.card_click_report({
scene:"0"
});
var o="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=o:v.invoke("profile",{
username:source_username,
scene:e.scene+""
});
}else{
if(w("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
j.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var i=String(profileReportInfo).split("_");
3==i.length&&u({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+i[1]+"&tid="+i[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
1==isprofileblock?v.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect");
}):v.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),w("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
});
}
t.preventDefault();
}),h.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[r]);
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t())for(var e=0;e<window.originalVideoAdFrames.length;e++)window.originalVideoAdFrames[e].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");else window.originalVideoAdCurrentFrame&&window.originalVideoAdCurrentFrame.contentWindow.postMessage({
action:"playAd"
},"*");
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
!function(){
var e=document.getElementById("js_author_name");
e&&!function(){
var t="";
b.on(e,"click",function(){
return m.hasClass(e,"rich_media_meta_link")?window.is_temp_url?(window.weui.alert("Unable to do this in preview"),
!1):e.getAttribute("data-rewardsn")?1!=e.getAttribute("data-canreward")?!1:(t="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+e.getAttribute("data-rewardsn")+"&timestamp="+e.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+window.isFans+"#wechat_redirect",
h.isInMiniProgram?!1:void(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(h.isIOS||h.isAndroid||h.isWp)?(window.__addIdKeyReport("110809","1"),
v.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
})):location.href=t)):!1:!1;
});
}();
}();
}catch(at){}
var Et=e("appmsg/outer_link.js");
new Et({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect")&&0!=e.indexOf("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/showredpacket"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),e("appmsg/product.js");
var Tt=e("appmsg/page_pos.js");
Tt.init({
hasSpAd:!0,
disableScroll:window.isPaySubscribe&&!window.isPaid&&window.jump2pay
}),function(){
try{
var e=function(){
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return{
v:void 0
};
var t=function(e){
var t=e.getAttribute("class");
if(t){
for(var o=t.split(/\s+/),i=[],n=0,a=o.length;a>n;++n){
var r=o[n];
if(r&&-1!=window.whiteList.indexOf(r))i.push(r);else for(var s=0,d=window.whiteListReg.length;d>s;s++)if(window.whiteListReg[s].test(r)){
i.push(r);
break;
}
}
e.setAttribute("class",i.join(" "));
}
};
Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){
if(e&&e.tagName){
var o=e.tagName.toLowerCase();
"iframe"!==o?t(e):"video_ad_iframe"===e.getAttribute("class")&&e.setAttribute("class","");
}
});
}();
if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return e.v;
}catch(t){
console.error(t);
}
}(),function(){
window.originalVideoAdFrames=[],window.originalVideoAdCurrentFrame=null,window.originalVideoAdFramesUnsetList=[],
window.addEventListener("message",function(e){
var t="",o=document.getElementsByTagName("iframe");
if(e.data&&"originalVideoAdNeedData"==e.data.action&&e.data.vid)if(window.originalVideoAdFramesAdData){
window.originalVideoAdFramesAdData&&window.originalVideoAdFramesAdData[e.data.vid]&&(t=window.originalVideoAdFramesAdData[e.data.vid]);
for(var i=0;i<o.length;i++)o[i].dataset&&o[i].dataset.mpvid==e.data.vid&&o[i].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:e.data.vid,
adData:t
},"*");
}else console.log(e.data.vid," has no ad data yet"),window.originalVideoAdFramesUnsetList.push(e.data.vid);
});
}(),window.fromWeixinCached||e("appmsg/iframe.js"),x.getAdData(window.reportVid),
e("appmsg/qqmusic.js");
var Bt=e("appmsg/voice.js"),Pt=[];
if(voiceList&&voiceList.voice_in_appmsg&&voiceList.voice_in_appmsg.length>0&&(Pt=voiceList.voice_in_appmsg),
Bt.init(Pt),e("redpackage/redpacketcover.js"),e("appmsg/search/search.js"),e("appmsg/poi/poi.js"),
window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
1===window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),document.getElementsByTagName("mp-qa").length){
var Ct=e("question_answer/appmsg.js");
Ct.renderQaCard&&Ct.renderQaCard({
mid:window.mid,
idx:window.idx,
isLogin:!!window.is_login,
userUin:window.user_uin,
biz:window.biz,
itemShowType:window.item_show_type,
sessionId:window.sessionid,
enterId:window.enterid,
scene:window.source,
subScene:window.subscene
});
}
if(document.getElementsByTagName("mpvideosnap")&&document.getElementsByTagName("mpvideosnap").length&&e("appmsg/channel/channels.js"),
document.getElementsByTagName("mpprofile")&&document.getElementsByTagName("mpprofile").length&&e("appmsg/profile/mp_insert_profile.js"),
document.getElementsByTagName("mplive").length){
var St=e("appmsg/live.js");
St.init({
biz:window.biz,
mid:window.mid,
idx:window.idx,
scene:window.source,
svrTime:window.svr_time
});
}
if(document.getElementsByTagName("mp-wxaproduct").length){
var Rt=e("appmsg/minishop/minishop.js"),zt=window.__appmsgCgiData.minishopCardData?JSON.parse(decodeURIComponent(window.__appmsgCgiData.minishopCardData)):"";
Rt.init({
biz:window.biz,
mid:window.mid,
idx:window.idx,
source:1*window.source,
subscene:1*window.subscene,
enterid:1*window.enterid,
minishopCards:zt
});
}
e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var Ot=e("appmsg/appmsg_copy_report.js");
new Ot({
biz:window.biz,
isPaySubscribe:window.isPaySubscribe,
container:document.getElementById("js_content"),
logid:18504,
baseData:["",window.biz,window.mid,window.idx,window.location.href,window.msg_title]
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
b.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?v.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),f(),y(),e("appmsg/report_and_source.js"),function(){
if(_t)!function(){
document.title=window.msg_title.htmlDecode(),m.addClass(dt,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var n=document.getElementById("js_profile_qrcode"),a=document.getElementById("js_profile_arrow_wrp"),r=document.getElementById("profileBt");
if(n&&r&&a){
var s=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return n.style.display="block",a.style.left=r.offsetWidth/2-8+"px",!1;
};
b.on(r,"click",s),b.on(n,"click",s),b.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=r&&t!=n&&(n.style.display="none");
});
}
}();else{
var e=document.getElementById("js_report_article3");
!!e&&(e.style.display="");
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(kt.card_pv_report(),Math.random()<.01)try{
var n="https://js.aq.qq.com/js/aq_common.js",a=document.createElement("script");
a.src=n;
var r=document.getElementsByTagName("head")[0];
r.appendChild(a);
}catch(s){}
var d=document.getElementById("js_close_temp");
b.on(d,"click",function(){
d.parentNode.parentNode.removeChild(d.parentNode),m.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(l.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=!1,i=function(){
return 90===Math.abs(window.orientation)?1:2;
};
1!==i()||o||(B.report110809(63),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("horizontal screen report","biz: "+("function"==typeof window.atob?window.atob(window.biz):window.biz)+" | mid: "+window.mid+" | idx: "+window.idx+" | url: "+location.href,{
mid:"mmbizwap:horizontal_screen",
view:"wap_business"
}),o=!0),e.push({
ori:i(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var n=(new Date).getHours();
b.on(window,t,function(){
var t=e.length-2,a=i();
S=+new Date,t>=0&&!function(){
{
var o=e[t];
o.ori;
}
e[e.length-1].istouchmove||(n>=11&&17>=n&&window.__report(63),setTimeout(function(){
window.scrollTo(0,o.scroll);
},100));
}(),e.push({
ori:a,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
}),1!==a||o||(B.report110809(63),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("horizontal screen report","biz: "+("function"==typeof window.atob?window.atob(window.biz):window.biz)+" | mid: "+window.mid+" | idx: "+window.idx+" | url: "+location.href,{
mid:"mmbizwap:horizontal_screen",
view:"wap_business"
}),o=!0);
}),b.on(window,"scroll",function(){
var t=e.length-1,o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n=+new Date;
if(-1!=S){
if(console.log("[横屏滚动检测]",n-S),500>n-S)return void(S=-1);
}else S=-1;
e[t].ori==i()&&(e[t].scroll=o,e[t].istouchmove=!0);
});
}
}(),w("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",G,!1):window.attachEvent&&window.attachEvent("onload",G),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
O.setSum(28307,18,1),h.isIOS&&O.setSum(28307,19,1),h.isAndroid&&O.setSum(28307,20,1);
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
O.setLogs({
id:28307,
key:49,
value:1,
lc:1,
log0:"[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href)
});
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var a=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
a&&a.length)for(var n=0;n<a.length;++n)filterContenteditable(a[n]);
}catch(r){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
var a=new Image;
a.onload=function(){
var o=a.naturalWidth||a.width,i=a.naturalHeight||a.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},a.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var qt=Math.random();
if(2e-4>qt)try{
for(var Nt=document.getElementsByTagName("img"),Dt=window.screen.height,Wt=window.screen.width,Lt=0,Mt=window.devicePixelRatio,Lt="",Y=0,Kt=Nt.length;Kt>Y;Y++){
var Ht=Nt[Y].getAttribute("data-src");
if(Ht){
var Vt=Nt[Y].getBoundingClientRect();
Lt+=Wt+"|"+Dt+"|"+Vt.left.toFixed(2)+"|"+(Wt-Vt.right).toFixed(2)+"|"+Vt.width.toFixed(2)+"|"+Mt.toFixed(2)+"|"+Ht+";";
}
}
u({
url:"/mp/wapreport?action=img_display_report",
data:{
key:Lt
},
type:"POST",
dataType:"json",
async:!0
});
}catch(at){}
setTimeout(function(){
R&&R.postPageHeightMessage&&R.postPageHeightMessage("updatePageHeight");
},2e3),h.isIOS&&location.href.match(/fontScale=\d+/)&&n.isIPadOS13&&setTimeout(function(){
if(!window.ipados13_font_scale){
var e=location.href.match(/fontScale=(\d+)/);
window.ipados13_font_scale=parseFloat(e[1]),n.setFontSize(document.getElementsByTagName("html").item(0),window.ipados13_font_scale/100);
}
},500);
}
e("appmsg/search_image.js"),e("biz_wap/ui/weui.js"),e("appmsg/sec_load_fail_report.js");
var i=e("common/tap_highlight.js"),n=e("appmsg/set_font_size.js"),a=e("biz_common/tmpl.js"),r=e("cps/tpl/banner_tpl.html.js"),s=e("cps/tpl/card_tpl.html.js"),d=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var p=e("appmsg/review_image.js"),c=e("appmsg/weapp_common.js"),l=e("biz_wap/utils/device.js"),m=e("biz_common/dom/class.js"),w=e("appmsg/log.js"),u=e("biz_wap/utils/ajax.js"),_=e("biz_common/dom/attr.js"),g=_.setProperty,f=e("appmsg/max_age.js"),h=e("biz_wap/utils/mmversion.js"),y=e("appmsg/test.js"),b=e("biz_common/dom/event.js"),v=e("biz_wap/jsapi/core.js"),A=e("biz_common/moment.js"),j=e("appmsg/appmsg_report.js"),I=e("biz_common/utils/url/parse.js"),x=e("a/mpAdAsync.js"),k=e("biz_wap/utils/wapsdk.js"),E=e("common/utils.js"),T=(e("complain/localstorage.js"),
e("appmsg/popup_report.js")),B=e("appmsg/pay_report_utils.js"),P=e("appmsg/loading.js"),C=e("appmsg/like_profile.js"),S=-1,R=e("appmsg/finance_communicate.js"),z=e("appmsg/topbar.js"),O=e("biz_wap/utils/jsmonitor_report.js"),q=e("pages/mod/bottom_modal.js"),N=e("appmsg/pay_read/pay_confirm_tpl.html.js"),D=e("appmsg/pay_read/buy_wecoin_btn_tpl.html.js"),W=e("pages_new/appmsg/page_bottom.js"),L=e("appmsg/related_article.js"),M=e("appmsg/getForbidConfig.js"),K=e("appmsg/set_article_read.js"),H=K.setArticleRead,V="isMpUserAccessibility",J=!1;
e("appmsg/wxwork_hidden.js");
var U=e("common/color/background_color.js"),F=e("common/color/light.js"),G=e("common/color/dark.js"),Q=e("appmsg/tags_utils.js");
U.set({
bottom:[F["BG-0"],G["BG-0"]]
});
var X=e("pages_new/3rd/vue.js");
X.config.errorHandler=function(e,t,o){
e._info=o,window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.onError(e),
console.error("Vue errorHandler",o,e.stack);
},window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css")),
e("appmsg/finance_communicate.js");
var Y=(e("appmsg/emotion/weemoji.js"),window.user_uin||0),$=Math.floor(Y/100)%1e3,Z=0!==Y&&1001>$,et=!0,tt="",ot=5;
if(window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.info("[图文信息] 三元组:",window.biz,window.mid,window.idx),
console.info("[用户信息] 设备信息: 是否安卓",l.os.android,"是否IOS",l.os.ios,"是否秒开场景",window.__second_open__,"系统版本",l.os.version,"用户uin",window.user_uin,"是否小程序内打开",h.isInMiniProgram),
w("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}(),h.isAndroid&&h.gtVersion("7.0.15",1)&&E.initWebCompt(["wxAd"]),E.initWebCompt(["wxOpen"],function(t){
window.__is_support_wxOpen=t.err_msg.indexOf(":ok")>-1,document.getElementsByTagName("mpsubscribe")&&document.getElementsByTagName("mpsubscribe").length&&e("appmsg/subscribe/subscribe.js");
}),o(),!window.__second_open__){
var it=window.performance||window.msPerformance||window.webkitPerformance;
if(!it||!it.timing)return;
var nt=window.location.protocol;
k.saveSpeeds({
uin:uin,
pid:"https:"==nt?462:417,
speeds:{
sid:34,
time:Date.now()-window.performance.timing.navigationStart
}
}),k.send(),M({
isPaySubscribe:window.isPaySubscribe
});
}
});