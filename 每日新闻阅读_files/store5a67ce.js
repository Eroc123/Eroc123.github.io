define("appmsg/share_biz.js",[],function(){
"use strict";
var e=[2390745668,3099420829,3872121626,3203738065,3072206507,3566970574,3002803029,3099387730,3559965496,3525314097,2390323860,3084276724,3289028514,3003793452,3003972371,2398512110,3071748654,3233018348,3095049467,3076061592,3273032305,3264278949,3086344434,3014829842,3294546013,2058310401,2397841479,2397640820,3282179238,3072107639,3521076442,3554888231,2397274880,2394106525,3077726226,2103095721,3593723769,2395186785,2393698643,3944000110,2397445840,2394144447,3082139483,3070806332,3016714421,3006879186,3213574124,3221398587,3078448935,3591999034,3551390431];
return{
shareBizTest:e
};
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"Title contains exaggerating or misleading content",
20012:"Title contains vulgar content"
},
1:{
90041:"",
20012:""
},
2:{
90041:"Article contains exaggerating or misleading content",
20012:"Article contains vulgar content"
}
},n={
0:{
90041:"Title contains exaggerating, controversial or vulgar content, which may be misleading or triggering.",
20012:"Title contains vulgar or malicious content, which may be triggering or have a negative impact."
},
1:{
90041:"Summary contains misleading or controversial content, which may be triggering or cause confusion for Weixin users.",
20012:"Summary contains vulgar or malicious content, which may be triggering or have a negative impact."
},
2:{
90041:"Article contains misleading or controversial content, which may be triggering or cause confusion for Weixin users.",
20012:"Article contains vulgar or malicious content, which may be triggering or have a negative impact."
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:n
};
});define("appmsg/kan_report.js",["biz_wap/utils/ajax.js","pages/utils.js"],function(e){
"use strict";
function a(e){
e.rec_expand=r.getParam("rec_expand")||"",e.scene=r.getParam("scene")||"",e.rec_expand&&1*e.scene===94&&t({
url:s,
type:"POST",
data:e,
async:!1,
timeout:2e3
});
}
var t=e("biz_wap/utils/ajax.js"),r=e("pages/utils.js"),s="/mp/videoreport?action=report_for_kyk";
return{
reportKanData:a
};
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("complain/utils/const.js",[],function(A,i,g){
"use strict";
g.exports={
WRAP_TAG:"span",
IMG_TAG:"IMG",
HIGHLIGHT_ID:"highlight-id",
IMG_ID:"img-id",
CAMEL_HIGHLIGHT_ID:"highlightId",
CAMEL_IMG_ID:"imgId",
NODE_TYPE:{
text:1,
img:2
},
placeHolder:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
};
});define("complain/utils/dom.js",["complain/utils/utils.js","complain/utils/const.js"],function(e,t,r){
"use strict";
function n(e){
for(var t=arguments.length<=1||void 0===arguments[1]?"className":arguments[1],r=arguments.length<=2||void 0===arguments[2]?y:arguments[2],n=0;n<r.length;n++)if(e[t]&&"string"==typeof e[t]&&e[t].indexOf(r[n])>-1)return!0;
return!1;
}
function a(e){
var t=e.$blockNode,r=e.$node;
if(null===t)return null;
var n=[],a=[],i=0;
for(n.push(t);n.length>0;){
var o=n.pop();
if(3===o.nodeType&&o.nodeValue!==r.nodeValue)a.push(o),i+=o.textContent.length;else if(1===o.nodeType){
if(i+=1,o===r)break;
}else if(o.nodeValue===r.nodeValue){
i+=o.textContent.length;
break;
}
for(var d=o.childNodes,s=d.length-1;s>=0;s--)n.push(d[s]);
}
return i;
}
function i(e){
var t=j(e),r=+t.dataset.index,n=0,a={
$blockNode:t,
$node:e,
paraIndex:r,
offset:n
},i=f();
return{
start:a,
end:a,
id:i
};
}
function o(e){
return e.tagName===m||3===e.nodeType?e:e.childNodes[0];
}
function d(e,t,r,n){
e.style.setProperty?(n=n||null,e.style.setProperty(t,r,n)):"undefined"!=typeof e.style.cssText&&(n=n?"!"+n:"",
e.style.cssText+=";"+t+":"+r+n+";");
}
function s(e){
if(!e)return!1;
var t=e.nodeType,r=e.tagName;
return 3===t?!1:r===m?!0:!1;
}
function u(e){
return e.reduce(function(t,r,n){
if(0===n)return r.type===x.text?t.text.push(r.data):r.type===x.img&&t.pic.push(r.data),
t;
if(r.type===x.text){
if(e[n-1].type===x.text){
var a=t.text.pop();
a+=r.data,t.text.push(a);
}else t.text.push(r.data);
return t;
}
return r.type===x.img&&t.pic.push(r.data),t;
},{
audio:[],
pic:[],
video:[],
text:[]
});
}
function p(e,t){
T[t]=e;
}
function l(e,t){
var r=i(e),n=Y([{
$node:e,
type:x.img,
idx:r.start.paraIndex
}],t),a=J(r),o=u(n);
return{
meta:{
anchorTree:n,
anchorMeta:a,
anchorBrief:o
},
range:r
};
}
function c(e,t){
var r=e.childNodes,n=t,a=null,i=0;
for(i=0;i<r.length;i++)if(a=r[i],3===a.nodeType){
var o=a.length;
if(o>n)break;
n-=o;
}
return{
$node:a,
cursor:n
};
}
var _=e("complain/utils/utils.js"),f=_.uuid,g=e("complain/utils/const.js"),h=g.WRAP_TAG,m=g.IMG_TAG,x=g.NODE_TYPE,v=["P","DIV","SECTION","LI","H1","H2","H3","H4","H5","H6","TABLE","PRE","BLOCKQUOTE"],y=["js_product_container","js_blockquote_wrap"],b=["IFRAME","VIDEO","MPVOICE","MPGONGYI","QQMUSIC","MPSHOP","MP-WEAPP","MP-MINIPROGRAM","MPPRODUCT","MPCPS"],w=["js_mpvideo"],N=["js_product_container"],T={},E=function(e){
var t=arguments.length<=1||void 0===arguments[1]?v:arguments[1];
if(!e||1!==e.nodeType)return!1;
for(var r=0;r<e.children.length;r++)if(-1!==t.indexOf(e.children[r].tagName))return!0;
return!1;
},R=function(e){
var t=e.parentNode;
return e.parentNode.removeChild(e),t.children&&t.children.length?!1:!0;
},O=function(e,t){
var r=t.getNestedStructure,a=void 0===r?!0:r,i=t.removeIgoreEle,o=void 0===i?!1:i,d=function s(e,t){
var r=e.children;
if(!r)return[];
if(!r.length)return r;
for(var a=void 0,i=[],d=0;d<r.length;d++)a=r[d],n(a,"id",w)||n(a,"className",N)?o&&(a.parentNode.removeChild(a),
d-=1):E(a,b)?o&&(R(a),d-=1):E(a,v)&&!n(a)?(i=i.concat(s(a,t)),t&&(a.getAttribute("data-index")||i.push(a))):a.getAttribute("data-index")||i.push(a);
return i;
}(e,a);
return[].slice.call(d);
};
O.paragraphStartIdx=1e6;
var k=function(e,t,r,n){
try{
e.splitText(t);
}catch(a){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"getSplitTextNode textnode",
startOffset:t,
endOffset:r
}
});
}
var i=e.nextSibling;
try{
i.splitText(r-t);
}catch(o){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"getSplitTextNode nextSibling",
startOffset:t,
endOffset:r
}
});
}
return[{
$node:i,
type:x.text,
idx:n
}];
},j=function Z(e){
return-1!==v.indexOf(e.tagName)&&"undefined"!=typeof e.dataset.index?e:Z(e.parentNode);
},P=function et(e){
return e?-1!==v.indexOf(e.tagName)?e:et(e.parentNode):e;
},$=function(e){
var t=e.start,r=e.end,n=e.$container,a=t.$node,i=t.offset,o=r.$node,d=r.offset,s=[],u=[],p=!1,l=!1,c=0;
for(s.push(n);s.length>0;){
var _=s.pop(),f=_.nodeType,g=_.tagName;
if(_.dataset&&_.dataset.index&&(c=+_.dataset.index),p&&!l&&(3===f&&u.push({
$node:_,
type:x.text,
idx:c
}),g===m&&u.push({
$node:_,
type:x.img,
idx:c
})),_===a){
if(3===f){
try{
_.splitText(i);
}catch(h){
WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"getNodes startNode",
startOffset:i,
endOffset:d
}
});
}
var v=_.nextSibling;
u.push({
$node:v,
type:x.text,
idx:c
});
}else u.push(g===m?{
$node:_,
type:x.img,
idx:c
}:{
$node:_,
type:x.text,
idx:c
});
p=!0;
}
if(_===o||l){
if(l||(l=!0),_===o&&u.pop(),3===f){
try{
_.splitText(d);
}catch(h){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"getSplitTextNode endNode",
startOffset:i,
endOffset:d
}
});
}
u.push({
$node:_,
type:x.text,
idx:c
});
break;
}
if(g===m){
u.push({
$node:_,
type:x.img,
idx:c
});
break;
}
for(var y=_.childNodes,b=y.length-1;b>=0;b--)s.push(y[b]);
}
for(var w=_.childNodes,b=w.length-1;b>=0;b--)s.push(w[b]);
}
return u;
},B=function(e){
var t=e.start,r=e.end,n=t.$node,a=t.offset,i=r.$node,o=r.offset;
return n===i&&n instanceof Text?k(n,a,o,t.paraIndex):$(e);
},q=function(e){
return e&&(e.nodeValue||e.innerText);
},S=function(e,t,r){
var n=r===e?t:e;
if(!q(e)||!q(t))return n;
var a=(e.nodeValue||e.innerText)+(t.nodeValue||t.innerText);
return r.nodeValue=a,r.parentNode.removeChild(n),r;
},I=function(e,t){
var r=[],n=0,a=0,i=void 0;
for(r.push(e);r.length>0&&(i=r.pop(),!(3===i.nodeType&&(a=t-n,n+=i.textContent.length,
n>=t)));)for(var o=i.childNodes,d=o.length-1;d>=0;d--)r.push(o[d]);
return{
$parentNode:e,
$node:i,
offset:a
};
},C=function(e){
var t=e.$node,r=e.$parentNode,n=Number(r.dataset.index),i=a(r,t);
return{
parentIndex:n,
fromParentoffset:i
};
},A=function(){
var e=window.getSelection();
if(null===e.anchorNode)return null;
var t=e.getRangeAt(0);
if(!t||!e.toString())return null;
var r=t.startContainer,n=t.endContainer,a=t.commonAncestorContainer,i=t.startOffset,o=t.endOffset,d=j(r),s=j(n),u=d&&d.dataset.index,p=s&&s.dataset.index,l={
$blockNode:d,
$node:r,
offset:i,
paraIndex:Number(u)
},c={
$blockNode:s,
$node:n,
offset:o,
paraIndex:Number(p)
},_="string"==typeof a?a.parentNode:a,g=f();
return{
start:l,
end:c,
$container:_,
id:g
};
},M=function(e,t){
if(!e)return null;
if(3===e.nodeType){
var r=document.createElement(h);
return r.setAttribute("data-splitid",t),r.appendChild(e.cloneNode(!1)),e.parentNode&&e.parentNode.replaceChild(r,e),
r;
}
return e;
},J=function(e){
var t=e.start,r=e.end,n=e.id,i=a(t),o=t.$node===r.$node?r.offset-t.offset+i:a(r),d={
id:n,
start:{
para_offset:i,
para_index:t.paraIndex
},
end:{
para_offset:o,
para_index:r.paraIndex
}
};
return d;
},W=function(e){
return function(t){
var r=t.para_offset,n=t.para_index,a=e[n],i=[],o=0,d=0,s=void 0;
for(i.push(a);i.length>0&&(s=i.pop(),!(3===s.nodeType&&(d=r-o,o+=s.textContent.length,
o>=r)))&&!(1===s.nodeType&&(d=r-o,o+=1,o>=r));)for(var u=s.childNodes,p=u.length-1;p>=0;p--)i.push(u[p]);
return{
$blockNode:a,
$node:s,
offset:d,
paraIndex:n
};
};
},X=function(e,t,r){
var n=W(t);
return{
start:n(e.start),
end:n(e.end),
id:e.id,
$container:r
};
},z=function(e){
window.getSelection().removeAllRanges();
var t=window.getSelection(),r=document.createRange(),n=o(T.start),a=o(T.end);
r.setStart(n,e.start.offset),r.setEnd(a,e.end.offset),t.addRange(r);
},V=function(e,t){
var r=[],n=0;
for(r.push(e);r.length>0;){
var a=r.pop();
if(a===t)break;
n++;
for(var i=a.children,o=0;o<i.length;o++)r.push(i[o]);
}
return n;
},H=function(e,t){
var r=[],n=0,a=null;
for(r.push(e);r.length>0;){
var i=r.pop();
if(n===t){
a=i;
break;
}
n++;
for(var o=i.children,d=0;d<o.length;d++)r.push(o[d]);
}
return a;
},G=function(e,t){
return e&&"string"==typeof e&&-1!==e.indexOf(t)?!0:!1;
},D=function(e){
var t="rich_pages,blockquote_info,blockquote_biz,blockquote_other,blockquote_article,js_jump_icon,h5_image_link,js_banner_container,js_list_container,js_cover,js_tx_video_container,js_product_err_container,js_product_loop_content,js_product_container,img_loading,list-paddingleft-1,list-paddingleft-2,list-paddingleft-3,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double,__bg_gif,weapp_text_link,weapp_image_link,js_img_loading,wx_video_context,db,wx_video_thumb_primary,wx_video_play_btn,wx_video_mask,qqmusic_area,tc,tips_global,unsupport_tips,qqmusic_wrp,appmsg_card_context,appmsg_card_active,wx_tap_card,js_wx_tap_highlight,wx_tap_link,qqmusic_bd,play_area,icon_qqmusic_switch,pic_qqmusic_default,qqmusic_thumb,access_area,qqmusic_songname,qqmusic_singername,qqmusic_source,js_audio_frame,share_audio_context,flex_context,pages_reset,share_audio_switch,icon_share_audio_switch,share_audio_info,flex_bd,share_audio_title,share_audio_tips,share_audio_progress_wrp,share_audio_progress,share_audio_progress_inner,share_audio_progress_buffer,share_audio_progress_loading,share_audio_progress_loading_inner,share_audio_progress_handle,share_audio_desc,share_audio_length_current,share_audio_length_total,video_iframe,vote_iframe,js_editor_vote_card,res_iframe,card_iframe,js_editor_card,weapp_display_element,js_weapp_display_element,weapp_card,app_context,weapp_card_bd,weapp_card_profile,radius_avatar,weapp_card_avatar,weapp_card_nickname,weapp_card_info,weapp_card_title,weapp_card_thumb_wrp,weapp_card_ft,weapp_card_logo,js_pay_btn,pay,pay__mask,wx_video_loading,js_redpacketcover,js_uneditable,js_uneditablemouseover,js_editor_qqmusic,js_editor_audio,ct_geography_loc_tip,js_poi_entry".split(","),r="qa__",n=[new RegExp("^weui"),new RegExp("^appmsg"),new RegExp("^audio"),new RegExp("^music"),new RegExp("^cps_inner"),new RegExp("^bizsvr_"),new RegExp("^code-snippet"),new RegExp("^"+r),new RegExp("^wx-edui-"),new RegExp("^wx_"),new RegExp("^wx-")];
if(!e)return null;
for(var a=e.split(/\s+/),i=[],o=0,d=a.length;d>o;++o){
var s=a[o];
if(s&&-1!==t.indexOf(s))i.push(s);else for(var u=0,p=n.length;p>u;u++)if(n[u].test(s)){
i.push(s);
break;
}
}
var l=i.join(".");
return l&&"."+l;
},L=function tt(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?document.body:arguments[2];
if(!e||e===r)return t;
var n=e.getAttribute("id"),a=e.getAttribute("class"),i=e.tagName.toLowerCase(),o=null;
if(n&&!G(a,"articlepart-selector-area_choice-button_wrap"))return t?"#"+n+">"+t:"#"+n;
var d=D(a);
return o=d?d:G(a,"js_choice-img")?".js_choice-img":G(a,"articlepart-selector-area_choice")&&e.dataset.splitid?"":i,
tt(e.parentNode,[o,t].filter(function(e){
return!!e;
}).join(">"),r);
},Q=function(e,t){
var r=L(e,"",t),n=[];
try{
n=t.querySelectorAll(r);
}catch(a){
console.log("get node selector wrap err",a);
}
for(var i=n.length,o=null,d=0;i>d;d++)if(e===n[d]){
o=d;
break;
}
null===o&&"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","selector:node not find",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
selector:r
}
});
var s=(r||"").replace(">.js_choice-img>",">")+("|"+i+" "+(o||0));
return s;
},U=function(e){
return e.map(function(e){
var t=e.$node,r=e.type,n=e.idx,a=0,i=null,o="",d=j(t);
if(r===x.text){
var s=V(d,t.parentNode);
t&&t.data&&(a=s,i=t.data,o=t.previousSibling&&t.previousSibling.data);
}else if(r===x.img){
var u=d.getElementsByTagName("img");
i=t.src,a=Array.prototype.slice.call(u).slice(0).indexOf(t);
}
return{
data:i,
index:a,
idx:n,
type:r,
meta:o
};
}).filter(function(e){
return e.index>-1&&!!e.data;
});
},Y=function(e,t){
var r=t||document.getElementById("js_content");
return e.map(function(e){
var t=e.$node,n=e.type,a=e.idx,i=null,o=null,d="";
return n===x.text?t&&t.data&&(i=Q(t.parentNode,r),o=t.data,d=t.previousSibling&&t.previousSibling.data):n===x.img&&(i=Q(t,r),
o=t.src),{
data:o,
idx:a,
type:n,
meta:d,
selector:i
};
}).filter(function(e){
return!!e.selector&&!!e.data;
});
},F=function(e,t){
return(t||document).querySelector(e);
},K=function(e,t){
return(t||document).querySelectorAll(e);
};
r.exports={
getDomMeta:C,
getContent:u,
getParaList:O,
getBlockNode:j,
getSelectedNodes:B,
connectSiblingText:S,
getTextNodeByOffset:I,
getBlockOffset:a,
getSelection:A,
transferTextToElement:M,
serialize:J,
deSerialize:X,
resetRange:z,
serializeToC:U,
setProperty:d,
hasImgNode:s,
nodeToSelection:i,
saveNode:p,
serializeNode:l,
getNodeByIndex:H,
findChildIndex:c,
serializeToC2:Y,
blockEleTagName:v,
getPureBlockNode:P,
qs:F,
qsAll:K,
hasClass:G
};
});define("appmsg/subscribe/subscribe_btn_tpl.html.js",[],function(){
return'<#if(supportWxOpen){#>\n<wx-open-subscribe template="<#=templateIdList#>" scene="<#=scene#>" username="<#=username#>" scale="<#=scale#>" appmsgindex="<#=appmsgIndex#>"> \n  <template slot="style">\n    <style>\n    .reset_btn{\n      -webkit-appearance: none;\n      -webkit-tap-highlight-color:rgba(0,0,0,0);\n      outline: 0;\n      background-color: transparent;\n      border: 0;\n      font-family:inherit;\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .subsc_btn {\n      font-size:inherit;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      padding: 0;\n      margin: 0;\n      color: #576b95;\n    }\n    .icon_subsc {\n      display: -ms-flexbox;\n      display: flex;\n      width: 20px;\n      height: 20px;\n      -ms-flex-align: center;\n      align-items: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      margin-right: 4px;\n      box-sizing: border-box;\n      border-radius: 100%;\n      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);\n    }\n    .icon_subsc:before {\n      content: "";\n      display: inline-block;\n      vertical-align: middle;\n      width: 14px;\n      height: 14px;\n      -webkit-mask: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E  %3Cpath fill=\'%23576B95\' d=\'M7 1.167a1.167 1.167 0 0 1 1.15 1.36 3.501 3.501 0 0 1 2.35 3.306v2.334c0 .857.315 1.714.945 2.571a.583.583 0 0 1-.47.929H7.582v.116a.583.583 0 0 1-1.166 0v-.116H3.025a.583.583 0 0 1-.47-.929c.63-.857.944-1.714.944-2.571V5.833c0-1.53.982-2.83 2.35-3.306A1.167 1.167 0 0 1 7 1.167zm0 1a.167.167 0 0 0-.167.166l.003.03.139.831-.797.277a2.501 2.501 0 0 0-1.672 2.185l-.006.177v2.334c0 .833-.23 1.653-.678 2.45l-.029.049h6.413l-.028-.048c-.403-.719-.63-1.454-.671-2.202l-.007-.25V5.834a2.5 2.5 0 0 0-1.515-2.298l-.163-.064-.797-.277.14-.832A.167.167 0 0 0 7 2.166z\'/%3E%3C/svg%3E") no-repeat 50% 50%;\n      mask: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E  %3Cpath fill=\'%23576B95\' d=\'M7 1.167a1.167 1.167 0 0 1 1.15 1.36 3.501 3.501 0 0 1 2.35 3.306v2.334c0 .857.315 1.714.945 2.571a.583.583 0 0 1-.47.929H7.582v.116a.583.583 0 0 1-1.166 0v-.116H3.025a.583.583 0 0 1-.47-.929c.63-.857.944-1.714.944-2.571V5.833c0-1.53.982-2.83 2.35-3.306A1.167 1.167 0 0 1 7 1.167zm0 1a.167.167 0 0 0-.167.166l.003.03.139.831-.797.277a2.501 2.501 0 0 0-1.672 2.185l-.006.177v2.334c0 .833-.23 1.653-.678 2.45l-.029.049h6.413l-.028-.048c-.403-.719-.63-1.454-.671-2.202l-.007-.25V5.834a2.5 2.5 0 0 0-1.515-2.298l-.163-.064-.797-.277.14-.832A.167.167 0 0 0 7 2.166z\'/%3E%3C/svg%3E") no-repeat 50% 50%;\n      -webkit-mask-size: cover;\n      mask-size: cover;\n      background-color: currentColor;\n    }\n    @media (prefers-color-scheme: dark) {\n      .subsc_btn {\n        color: #7d90a9;\n      }\n      .icon_subsc {\n        box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.1);\n      }\n    }\n    </style>\n  </template>\n  <template>\n    <div class="subsc_context">\n      <button class="subsc_btn reset_btn" type="button"><i class="icon_subsc"></i>订阅通知</button>\n    </div>\n  </template>\n</wx-open-subscribe>\n<#}else{#>\n  <div class="subsc_context js_subsc_btn">\n    <button class="subsc_btn reset_btn" type="button"><i class="icon_subsc"></i>订阅通知</button>\n  </div>\n<#}#>\n\n\n';
});define("album/utils/report.js",["common/comm_report.js"],function(e){
"use strict";
var i=e("common/comm_report.js"),o=window.WX_BJ_REPORT||{},n=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
ItemShowType:1*window.item_show_type||0,
SessionId:window.sessionid+"",
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid,
Audioid:e.audioid||"",
Title:e.title||"",
TagSource:1*e.tagSrc||0
};
i.report(19647,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19647",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},r=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
IfSubscription:1*e.isSubscribed===1?2:1,
NewTagId:e.tagId+"",
ShowTag:e.showTag+"",
InsideTag:e.insideTag+"",
Cate1:e.c1+"",
Cate2:e.c2+"",
StayTime:e.stayTime?1*e.stayTime:0,
NetworkType:1*e.networkType
};
i.report(19648,n,{
async:e.async||!0,
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19648",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},d=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
Pos:1*e.pos,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid,
IfSubscription:1*e.isSubscribed===1?2:1,
NewTagId:e.tagId+"",
ShowTag:e.showTag+"",
InsideTag:e.insideTag+"",
Cate1:e.c1+"",
Cate2:e.c2+"",
ArticleSource:1
};
i.report(19649,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19649",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
}),1*e.eventType===1&&!function(){
var n={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
AppMsgUrl:e.url,
Title:e.title,
IsReaded:1*e.isRead,
Scene:1*window.source,
SubScene:1*window.subscene
};
i.report(20805,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 20805",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
}();
},t=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
bizuin:window.biz,
url:e.url+"",
ActionType:1*e.actionType,
Scene:1*window.source,
Network:window.__networkType+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
ExpType:window.exptype||"",
EnterId:window.enterid||"",
SessionId:window.sessionid||"",
ExpSessionIdStr:window.expsessionid||""
};
i.report(10380,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 10380",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},s=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
BizUin:window.biz,
Action:1*e.action,
AppMsgLikeType:window.appmsg_like_type,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
ExpType:window.exptype||"",
SessionId:window.sessionid||"",
ExpSessionIdStr:window.expsessionid||""
};
i.report(14299,n,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 14299",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:n,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
};
return{
cardReport:n,
albumActionReport:r,
articleActionReport:d,
shareReport:t,
likeReport:s
};
});define("appmsg/rec_report_key.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),n=[],i=void 0;
!function(){
i[i.kRead=1]="kRead",i[i.kLike=2]="kLike",i[i.kSeen=3]="kSeen",i[i.kShare=4]="kShare",
i[i.kFavorite=5]="kFavorite",i[i.kComment=6]="kComment",i[i.kReward=7]="kReward",
i[i.kSubscibe=8]="kSubscibe",i[i.kRead20Percent=9]="kRead20Percent",i[i.kReadOver=10]="kReadOver";
}(i||(i={}));
var o=function(e){
var i=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
if("169"===window.source){
var o=n.indexOf(e);
-1===o&&1===i?n.push(e):o>-1&&0===i&&n.splice(o,1),console.log("[reportRecommend] params: "+JSON.stringify(n)),
r.invoke("handleMPPageAction",{
action:"reportRecommend",
reportData:JSON.stringify({
action:n
})
},function(e){
console.log("[reportRecommend] res: "+JSON.stringify(e));
});
}
},t=function(){
n.splice(0,n.length);
};
return{
RecActionType:i,
reportRecAction:o,
resetActionMap:t
};
});define("pages/scrollY.js",["pages/utils.js"],function(e){
"use strict";
var n=e("pages/utils.js"),t=window.requestAnimationFrame,o=0;
["webkit","moz","ms","o"].some(function(e){
return t?!0:(t=t||window[e+"RequestAnimationFrame"],!1);
}),t||(t=function(e){
var n=(new Date).getTime(),t=Math.max(0,16-(n-o));
return o=n+t,window.setTimeout(function(){
return e(n+t);
},t);
});
var r={
easeOutSine:function(e){
return Math.sin(e*(Math.PI/2));
},
easeInOutSine:function(e){
return-.5*(Math.cos(Math.PI*e)-1);
},
easeInOutQuint:function(e){
return e/=.5,1>e?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2);
},
easeInOutCubic:function(e){
return.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1;
}
},i=function(e,n){
var t=arguments.length<=2||void 0===arguments[2]?document.body:arguments[2];
"function"==typeof e&&e(),t===document.body?(document.documentElement.scrollTop=n,
document.body.scrollTop=n):t.scrollTop=n;
},u=function(){
var e=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0];
return e===document.body?n.getScrollTop():e.scrollTop;
},a={},s=function m(){
var e=1*new Date+"_"+1e4*Math.random().toFixed(4);
return a[e]?m():e;
},c=function(e){
delete a[e];
},d=function(e){
var n=e.el,o=void 0===n?document.body:n,d=e.y,m=e.distance,f=e.speed,l=e.duration,v=e.easing,p=void 0===v?"easeOutSine":v,g=e.begin,h=e.end,b=e.beforeScroll;
"function"==typeof g&&g(),Object.keys(a).forEach(function(e){
a[e].el===o&&c(e);
});
var y=u(o),w=0;
if(void 0!==d)m=d-y;else{
if(void 0===m)return void console.error("need param `y` or `distance`.");
d=m+y;
}
if(0!==m){
void 0===f&&(f=void 0!==l?m/l:2e3);
var M=l||Math.max(.1,Math.min(Math.abs((y-d)/f),.8)),T=s();
a[T]={
el:o
};
var O=function I(){
if(a[T]){
w+=1/60;
var e=w/M,n=r[p](e);
1>e?(t(I),i(b,y+(d-y)*n,o)):(c(T),i(b,d,o),"function"==typeof h&&h());
}
};
O();
}
};
return{
start:d,
stop:c
};
});define("appmsg/related_article_feedback.js",["biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","common/utils.js","common/tap_highlight.js"],function(e){
"use strict";
function t(e,t){
for(;!e.parentNode.className.match(t);)e=e.parentNode;
return e.parentNode||"";
}
function i(e){
this.container=e.container,this.biz=e.biz,this.mid=e.mid,this.idx=e.idx,this.vid=e.vid,
this.isVideo=e.isVideo,this.dislikeCb=e.dislikeCb,o["top"===e.position?"addClass":"removeClass"](this.container.querySelector(".js_dialog_wrp"),"feedback_dialog_pos_top"),
this.bindEvent();
}
function a(e){
var a=e.container;
n.on(a,"touchstart",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"touchend",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"click",".js_feedback_btn",function(a){
a.stopPropagation();
var s=a.delegatedTarget,o=t(s,"js_related_item"),n=268;
l.highlightEle(s),c=new i({
container:o,
biz:e.biz,
mid:e.mid,
idx:e.idx,
isVideo:e.isVideo,
vid:e.vid,
position:d.getInnerHeight()-o.getBoundingClientRect().bottom<n?"top":"bottom",
dislikeCb:e.dislikeCb
}),c.show();
},!0);
}
var s=e("biz_wap/utils/ajax.js"),o=e("biz_common/dom/class.js"),n=e("biz_common/dom/event.js"),r=e("biz_common/utils/url/parse.js"),d=e("common/utils.js"),l=e("common/tap_highlight.js"),c=null;
return i.prototype.bindEvent=function(){
var e=this,i=this.container,a=this.biz,d=this.mid,l=this.idx,c=i.getAttribute("data-url"),u=new Set,m=new Set,h=i.querySelector(".js_submit");
this.tabClickEventHandler=function(e){
e.stopPropagation(),e.preventDefault();
var t=e.delegatedTarget,i=t.getAttribute("data-value");
o.hasClass(t,"js_reason")&&(i*=1),o.hasClass(t,"feedback_tag_selected")?(o.removeClass(t,"feedback_tag_selected"),
o.hasClass(t,"js_reason")?u.delete(i):m.delete(i),t&&t.setAttribute("aria-checked","false")):(o.addClass(t,"feedback_tag_selected"),
o.hasClass(t,"js_reason")?u.add(i):m.add(i),t&&t.setAttribute("aria-checked","true")),
0===u.size&&0===m.size?o.addClass(h,"weui-btn_disabled"):o.removeClass(h,"weui-btn_disabled");
},this.submitDataHandler=function(n){
n.stopPropagation(),n.preventDefault();
var h=n.target;
if(!o.hasClass(h,"weui-btn_disabled")){
var _={
tacitly:Array.from(u),
keyword:Array.from(m)
},b={
biz_from:a,
mid_from:d,
idx_from:l,
recommended_biz:r.getQuery("__biz",c),
mid:r.getQuery("mid",c),
idx:r.getQuery("idx",c),
reason:JSON.stringify(_)
},f="/mp/relatedarticle?action=dislike";
e.isVideo&&(b.vid_from=e.vid,b.vid=i.getAttribute("data-vid"),f="/mp/video_similar?action=dislike"),
s({
type:"POST",
url:f,
dataType:"json",
data:b,
success:function(i){
if(console.log(i),i&&i.base_resp&&0===i.base_resp.ret){
e.hide(h);
var a=t(h,"js_related_item");
e.dislikeCb(a);
}else window.weui.alert("System error. Try again later.");
}
});
}
},this.maskHandler=function(t){
t.stopPropagation(),t.preventDefault(),e.hide(t.target);
},this.maskTouchMoveHandler=function(e){
e.stopPropagation(),e.preventDefault();
},this.stopPropagationHandler=function(e){
e.stopPropagation();
},n.on(i,"click",".js_tag_item",this.tabClickEventHandler,!0),n.on(h,"click",this.submitDataHandler,!0),
n.on(i,"click",".js_mask",this.maskHandler,!0),n.on(i,"touchmove",".js_mask",this.maskTouchMoveHandler,!0),
n.on(i,"touchmove",".js_dialog_wrp",this.maskTouchMoveHandler,!0),n.on(i,"click",".js_dialog_wrp",this.maskTouchMoveHandler,!1),
n.on(i,"touchstart",".js_feedback_dialog",this.stopPropagationHandler,!0),n.on(i,"touchend",".js_feedback_dialog",this.stopPropagationHandler,!0);
},i.prototype.show=function(){
var e=this.container.querySelector(".js_feedback_dialog");
e&&(e.style.display="",o.addClass(e,"feedback_dialog_show"),e.setAttribute("aria-hidden","false"),
e.focus());
},i.prototype.hide=function(){
var e=this.container,t=e.querySelector(".js_submit"),i=e.querySelector(".js_feedback_dialog"),a=e.querySelector(".js_feedback_btn");
n.off(e,"click",this.tabClickEventHandler,!0),n.off(t,"click",this.submitDataHandler,!0),
n.off(e,"click",this.maskHandler,!0),n.off(e,"touchmove",this.maskTouchMoveHandler,!0),
n.off(e,"click",this.maskTouchMoveHandler,!1),o.removeClass(i,"feedback_dialog_show"),
i.setAttribute("aria-hidden","true"),a.focus();
},{
init:a
};
});define("biz_wap/utils/openUrl.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function r(e){
var r=document.createElement("a");
return r.href=e,{
source:e,
protocol:r.protocol.replace(":",""),
host:r.hostname,
port:r.port,
query:r.search,
params:function(){
for(var e,t={},i=r.search.replace(/^\?/,"").split("&"),a=i.length,o=0;a>o;o++)i[o]&&(e=i[o].split("="),
t[e[0]]=e[1]);
return t;
}(),
file:(r.pathname.match(/([^\/?#]+)$/i)||[,""])[1],
hash:r.hash.replace("#",""),
path:r.pathname.replace(/^([^\/])/,"/$1"),
relative:(r.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],
segments:r.pathname.replace(/^\//,"").split("/")
};
}
function t(e,t){
var o;
t=t||1,0==e.indexOf("/")&&(o=r(location.href),e=o.protocol+"://"+o.host+e,console.log("openUrlWithExtraWebview with relative path:",e)),
e=e.replace(/(#[^#]*)+/,function(e,r){
return r;
}),-1!==navigator.userAgent.indexOf("MicroMessenger")&&(a.isIOS||a.isAndroid||a.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:t
},function(r){
-1==r.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}
var i=e("biz_wap/jsapi/core.js"),a=e("biz_wap/utils/mmversion.js");
return{
openUrlWithExtraWebview:t
};
});define("appmsg/related_article_item.html.js",[],function(){
return'<# list.forEach(function(item, idx) { #>\n  <div class="weui-media-box weui-media-box_appmsg js_related_item js_wx_tap_highlight wx_tap_cell"\n    data-index="<#=begin+idx#>"\n    data-url="<#=item.url#>"\n    data-time="<#=item.send_time#>"\n    data-recalltype="<#=item.recall_type#>"\n    data-isreaded="<#=item.is_readed#>"\n    data-bizuin="<#=item.bizuin#>"\n    data-mid="<#=item.mid#>"\n    data-idx="<#=item.idx#>"\n    data-item_show_type="<#=item.item_show_type#>"\n    data-exptype="<#=item.exptype#>"\n    data-ext_info="<#=item.ext_info#>"\n  >\n    <div class="weui-media-box__bd">\n      <div class="ellipsis_relate_title mask_ellipsis_wrp mask_ellipsis_auto_height\n        <# if (item.is_pay_subscribe) { #>\n          <# if (item.is_paid) { #>\n          relate_article_pay\n          <# } else { #>\n          <# } #>\n        <# } else { #>\n          relate_article_default\n        <# } #>\n        "\n        role="link"\n        aria-labelledby="relate_article_title_<#=item.mid#>_<#=item.idx#> js_a11y_comma relate_article_nickname_<#=item.mid#>_<#=item.idx#> js_a11y_comma relate_article_num_<#=item.mid#>_<#=item.idx#>" \n      >\n        <div aria-hidden="true" class="mask_ellipsis_text">\n          <#=item.title#>\n          <# if (item.is_pay_subscribe) { #>\n            <# if (item.is_paid) { #>\n              <span class="pay__tag">Paid</span>\n            <# } else { #>\n              <span class="unpay__tag">Pay</span>\n            <# } #>\n          <# } #>\n        </div>\n        <div aria-hidden="true" class="mask_ellipsis">\n          <div class="mask_ellipsis_text" id="relate_article_title_<#=item.mid#>_<#=item.idx#>">\n            <#=item.title#>\n            <# if (item.is_pay_subscribe) { #>\n              <# if (item.is_paid) { #>\n                <span class="pay__tag">Paid</span>\n              <# } else { #>\n                <span class="unpay__tag">Pay</span>\n              <# } #>\n            <# } #>\n          </div>\n          <div class="mask_ellipsis_placeholder"></div>\n          <div class="mask_ellipsis_extra">\n            <# if (item.is_pay_subscribe) { #>\n              <# if (item.is_paid) { #>\n                <span class="pay__tag">Paid</span>\n              <# } else { #>\n                <span class="unpay__tag">Pay</span>\n              <# } #>\n            <# } #>\n          </div>\n        </div>\n      </div>\n      <div class="weui-media-box__info weui-flex">\n        <div class="weui-media-box__info__inner weui-flex weui-flex__item">\n          <div aria-hidden="true" id="relate_article_nickname_<#=item.mid#>_<#=item.idx#>" class="js_profile relate_profile_nickname weui-media-box__info__meta" data-username="<#=item.username#>">\n            <#=item.nickname#>\n          </div>\n          <div class="weui-media-box__info__meta" aria-hidden="true" id="relate_article_num_<#=item.mid#>_<#=item.idx#>">\n            <# if (item.old_like_num >= 10) { #>\n              Likes <#=item.like_num_wording#>            <# } else if (item.is_pay_subscribe && item.pay_cnt) { #>\n              付费 <#=item.pay_cnt_wording#>            <# } else if (item.read_num) { #>\n              Reads <#=item.read_num_wording#>            <# } #>\n          </div>\n        </div>\n        <div class="relate_article_opr">\n          <button type="button" class="reset_btn dislike_btn js_feedback_btn weui-wa-hotarea">不喜欢</button>\n        </div>\n        <!-- 去掉display:none;改用样式默认隐藏，加classnamme:feedback_dialog_show显示 -->\n        <div class="feedback_dialog_wrp js_feedback_dialog" role="dialog" aria-modal="true" tabindex="0" aria-hidden="true">\n          <div class="weui-mask js_mask" role="button" aria-label="Close"></div>\n          <!-- 底部时弹窗向上，加.feedback_dialog_pos_top -->\n          <div class="feedback_dialog js_dialog_wrp">\n            <div class="feedback_dialog_hd weui-flex">\n              <div class="weui-flex__item feedback_dialog_title">不看的原因</div>\n              <button type="button" class="weui-btn weui-btn_primary weui-btn_mini weui-btn_disabled js_submit">OK</button>\n            </div>\n            <div class="feedback_dialog_bd">\n              <ul class="feedback_tag_list">\n                <!-- 选中时tag加.feedback_tag_selected -->\n                <# reason.forEach(function(r) { #>\n                  <li role="checkbox" aria-checked="false" class="feedback_tag_item js_reason js_tag_item" data-value="<#=r.value#>"><#=r.name#></li>\n                <# }); #>\n                <# item.keyword.forEach(function(k,i) { #>\n                  <# if (i<2) { #>\n                    <li role="checkbox" aria-checked="false" class="feedback_tag_item js_keyword js_tag_item" data-value="<#=k#>">对<#=k#>不感兴趣</li>\n                  <# } #>\n                <# }); #>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="weui-media-box__ft" style="background-image:url(<#=item.cover#>)"></div>\n  </div>\n<# }); #>\n';
});define("appmsg/related_article_tpl.html.js",[],function(){
return'<div class="relate_mod_transition function_mod js_related_area" style="opacity: 1; overflow: hidden; height: 0; margin: 0;">\n  <div class="function_mod_index js_related_main">\n      <div class="function_hd js_related_title">\n        <# if (type === \'share\') { #> <!-- 分享 -->\n          People who shared this content also liked        <# } else if (type === \'favorite\') { #> <!-- 收藏 -->\n          People who favorited this content also liked        <# } else if (type === \'praise\' || type === \'like\') { #> <!-- 点赞/在看 -->\n          People who liked this content also liked        <# } else { #> <!-- 其它 -->\n          People who liked this content also liked        <# } #>\n      </div>\n      <div class="function_bd">\n          <div class="relate_article_list relate_article_placeholder js_related_placeholder">\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n          </div>\n          <div class="relate_article_index_list relate_article_list js_related_list" style="height: auto;"></div>\n      </div>\n  </div>\n</div>\n';
});function _defineProperty(e,n,_){
return n in e?Object.defineProperty(e,n,{
value:_,
enumerable:!0,
configurable:!0,
writable:!0
}):e[n]=_,e;
}
define("pages_new/appmsg/store.js",["pages_new/3rd/vue.js","pages_new/3rd/vuex.js","pages_new/modules/utils/url.js","pages_new/modules/comment/comment_store.js"],function(e){
"use strict";
function n(){
return window;
}
var _,t=e("pages_new/3rd/vue.js"),r=e("pages_new/3rd/vuex.js"),s=e("pages_new/modules/utils/url.js");
t.use(r);
var o={
SET_EXT_RES:"SET_EXT_RES",
SET_AD_RES:"SET_AD_RES",
SET_CGI_DATA:"SET_CGI_DATA",
SET_URL_PARAMS:"SET_URL_PARAMS"
},a=e("pages_new/modules/comment/comment_store.js"),u=new r.Store({
modules:_defineProperty({},a.name,a),
state:{
extRes:{},
adRes:{},
cgiData:{},
urlParams:{}
},
mutations:(_={},_defineProperty(_,o.SET_EXT_RES,function(e,n){
e.extRes=n;
}),_defineProperty(_,o.SET_AD_RES,function(e,n){
e.adRes=n;
}),_defineProperty(_,o.SET_CGI_DATA,function(e,n){
e.cgiData=n;
}),_defineProperty(_,o.SET_URL_PARAMS,function(e,n){
e.urlParams=n;
}),_)
});
return u.commit(o.SET_CGI_DATA,n()),u.commit(o.SET_URL_PARAMS,s.getParams()),u;
});