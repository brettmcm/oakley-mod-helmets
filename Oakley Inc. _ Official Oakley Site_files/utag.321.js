//~~tv:19063.am160.20160510
//~~tc: Add VALUE_event## tab in toolbox
//~~tc: Fixed issue of non-mobile calls having undefined u.data.a
//~~tc: Add Mobile App support


var s = new AppMeasurement();
s.account="oakleypreprod";

/************************** CONFIG SECTION **************************/
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkInternalFilters="javascript:,oakley.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
s.usePlugins=false;
s.currencyCode="USD"; // override default with E-Commerce Extension
s.visitorNamespace = "Oakley";
s.trackingServer="oakley.sc.omtrdc.net";
s.trackingServerSecure="oakley.sc.omtrdc.net";

s.debugTracking=utag.cfg.utagdb;

if ("5CFB3942551026A60A4C98A4@AdobeOrg") {
// NOTE: Modified API to put Visitor in window scope so it is only declared if cloudid value specificed (removes hoisting)
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.5.4
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(m,t){if(!m)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.5.4";var l=window,i=l.Visitor;i.version=a.version;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._c="Visitor";a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;a.pa={Ka:[]};var o=l.document,h=i.Ma;h||(h=null);var z=i.Na;z||(z=void 0);var j=i.ja;j||(j=!0);var k=i.La;k||(k=!1);a.S=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.r=function(a){var c=
"0123456789",b="",e="",f,g=8,n=10,h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*n),b+=c.substring(f,f+1),0==a&&9==f?n=3:(1==a||2==a)&&10!=n&&2>f?n=10:2<a&&(n=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.ma=function(){var a;!a&&l.location&&(a=l.location.hostname);
if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+o.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(o.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.A=function(a,c){try{"function"==typeof a?a.apply(l,c):a[1].apply(a[0],c)}catch(b){}};a.ra=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==z&&(a.g[d]=[]),a.g[d].push(c))};a.m=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.A(b.shift(),
c)}};a.j=h;a.oa=function(d,c,b){var e=0,f=0,g;if(c&&o){for(g=0;!e&&2>g;){try{e=(e=o.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(n){e=0}g++}if(!e)try{o.body&&(e=o.body)}catch(j){e=0}if(e)for(g=0;!f&&2>g;){try{f=o.createElement(0<g?"SCRIPT":"script")}catch(i){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),a.pa.Ka.push(c),b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};
a.ka=function(d){a.j!=h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.T=k;a.U=k;a.isAllowed=function(){if(!a.T&&(a.T=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.U=j;return a.U};a.a=h;a.d=h;var B=i.$a;B||(B="MC");var r=i.fb;r||(r="MCMID");var C=i.ab;C||(C="MCCIDH");var D=i.eb;D||(D="MCSYNCS");var F=i.bb;F||(F="MCIDTS");var x=i.cb;x||(x="MCOPTOUT");var A=i.Ya;A||(A="A");var p=i.Va;p||(p="MCAID");var y=i.Za;y||(y="AAM");var w=i.Xa;w||(w="MCAAMLH");var q=i.Wa;q||(q="MCAAMB");var s=
i.gb;s||(s="NONE");a.C=0;a.R=function(){if(!a.C){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.C=a.S(d)}return a.C};a.V=k;a.f=function(){if(!a.V){a.V=j;var d=a.R(),c=k,b=a.cookieRead(a.cookieName),e,f,g,n,i=new Date;a.a==h&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],
g=b[d+1],1<e.length?(n=parseInt(e[1],10),e=0<e[1].indexOf("s")):(n=0,e=k),c&&(f==C&&(g=""),0<n&&(n=i.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<n&&(a.a["expire"+f]=n+(e?"s":""),i.getTime()>=1E3*n||e&&!a.cookieRead(a.sessionCookieName))))a.d||(a.d={}),a.d[f]=j}if(!a.b(p)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(p,g))}};a.ta=function(){var d=a.R(),c,b;for(c in a.a)!Object.prototype[c]&&
a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=h&&(c||!a.d||!a.d[d])?a.a[d]:h};a.c=function(d,c,b){a.a==h&&(a.a={});a.a[d]=c;b||a.ta()};a.na=function(d,c){var b=a.b(d,c);return b?b.split("*"):h};a.sa=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Sa=function(d,c){var b=a.na(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.Ua=function(d,c,b){var e=
h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.sa(d,e,b)};a.k=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.a==h&&(a.a={});a.a["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.d||(a.d={}),a.d[d]=j):a.d&&(a.d[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.Q=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=
s)),!a||a!=s&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.ka(d);a.h!=h&&(a.h[d]=k);if(d==B){var b=a.b(r);if(!b){b="object"==typeof c&&c.mid?c.mid:a.Q(c);if(!b){if(a.v){a.getAnalyticsVisitorID(h,k,j);return}b=a.r()}a.c(r,b)}if(!b||b==s)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(y,c),a.v&&c.mid&&a.i(A,{id:c.id}));a.m(r,[b])}if(d==y&&"object"==typeof c){b=604800;c.id_sync_ttl!=z&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.b(w);e||((e=c.d_region)||
(e=c.dcs_region),e&&(a.k(w,b),a.c(w,e)));e||(e="");a.m(w,[e]);e=a.b(q);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.k(q,b),a.c(q,e);e||(e="");a.m(q,[e]);!c.error_msg&&a.t&&a.c(C,a.t)}if(d==A){b=a.b(p);b||((b=a.Q(c))?a.k(q,-1):b=s,a.c(p,b));if(!b||b==s)b="";a.m(p,[b])}a.idSyncDisableSyncs?u.ba=j:(u.ba=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,u.Ia(b));c===Object(c)&&(b=s,c.d_optout&&c.d_optout instanceof Array&&(b=c.d_optout.join(",")),e=parseInt(c.d_ottl,10),isNaN(e)&&(e=7200),a.k(x,e,!0),a.c(x,
b),a.m(x,[b]))};a.h=h;a.n=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.f(),f=a.b(d),!f&&(d==r||d==x?g=B:d==w||d==q?g=y:d==p&&(g=A),g))){if(c&&(a.h==h||!a.h[g]))a.h==h&&(a.h={}),a.h[g]=j,a.oa(g,c,function(){if(!a.b(d)){var b="";d==r?b=a.r():g==y&&(b={error_msg:"timeout"});a.i(g,b)}});a.ra(d,b);c||a.i(g,{id:s});return""}if((d==r||d==p)&&f==s)f="",e=j;b&&e&&a.A(b,[f]);return f};a._setMarketingCloudFields=function(d){a.f();a.i(B,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};
a.v=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.v=j);var b=a.s("_setMarketingCloudFields");return a.n(r,b,d,c)}return""};a.qa=function(){a.getAudienceManagerBlob()};i.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.q={};a.P=k;a.t="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=
z&&(e.authState=b.authState);a.q[c]=e}else a.q[c]={id:b};var d=a.getCustomerIDs(),e=a.b(C),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.t=a.S(f);a.t!=e&&(a.P=j,a.qa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.q)Object.prototype[c]||(b=a.q[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=z?b.authState:i.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.i(A,d)};a.setAnalyticsVisitorID=
function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?d_visid_ver="+a.version+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":
"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""));return a.n(b?r:p,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(y,d)};a.s=function(d){var c=a.audienceManagerServer,b="",e=a.b(r),f=a.b(q,j),g=a.b(p),g=g&&g!=s?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||
(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.v?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+a._in+"%5D."+
d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.s(),a.n(w,b,d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,
j)}));if(b)return b=a.s(),a.P&&a.k(q,-1),a.n(q,b,d,c)}return""};a.o="";a.u={};a.D="";a.F={};a.getSupplementalDataID=function(d,c){!a.o&&!c&&(a.o=a.r(1));var b=a.o;a.D&&!a.F[d]?(b=a.D,a.F[d]=j):b&&(a.u[d]&&(a.D=a.o,a.F=a.u,a.o=b=!c?a.r(1):"",a.u={}),b&&(a.u[d]=j));return b};i.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.s("_setMarketingCloudFields");return a.n(x,b,d,c)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=i.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.A(d,
[b==i.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==i.OptOut.GLOBAL||0<=b.indexOf(c):h):k};var v={l:!!l.postMessage,ha:1,O:864E5};a.Oa=v;a.X={postMessage:function(a,c,b){var e=1;c&&(v.l?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},K:function(a,c){var b;try{if(v.l)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?
"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var G={Y:function(){if(o.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(o.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==
typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},za:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.Ta=G;var u={ia:3E4,N:649,fa:k,id:h,I:h,aa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},e:h,url:h,Aa:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);this.e||(this.e="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?
"https://fast.":"https://");d=d+this.e+".demdex.net/dest5.html"+c;this.I=this.aa(d);this.id="destination_publishing_iframe_"+this.e+"_"+a.idSyncContainerID;return d},va:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);"string"===typeof a.B&&a.B.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.I=this.aa(a.B),this.url=a.B+d)},ba:h,H:k,M:k,w:h,hb:h,Ga:h,ib:h,L:k,z:[],Ea:[],Fa:[],ca:v.l?15:100,J:[],Ca:[],$:j,da:k,
Z:function(){function a(){e=document.createElement("iframe");e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ga=j;c();document.body.appendChild(e)}function c(){G.Y(e,"load",function(){e.className="aamIframeLoaded";b.w=j;b.p()})}this.M=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.w=j,this.p()):a();this.Ba=e},p:function(d){var c=this;d===Object(d)&&this.J.push(d);if((this.da||!v.l||
this.w)&&this.J.length)this.Ha(this.J.shift()),this.p();!a.idSyncDisableSyncs&&this.w&&this.z.length&&!this.L&&(this.fa||(this.fa=j,setTimeout(function(){c.ca=v.l?15:150},this.ia)),this.L=j,this.ea())},Ha:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),G.za(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],this.$?this.G(h.join("|")):g.fireURLSync&&this.wa(g,h.join("|"));this.Ca.push(a)},
wa:function(d,c){a.f();var b=a.b(D),e=k,f=k,g=Math.ceil((new Date).getTime()/v.O);if(b){if(b=b.split("*"),f=this.Ja(b,d.id,g),e=f.xa,f=f.ya,!e||!f)this.G(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.Da(b),a.c(D,b.join("*"))}else this.G(c),a.c(D,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},Ja:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{xa:e,ya:f}},Da:function(a){if(a.join("*").length>
this.N)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.N;)a.shift()},G:function(d){var c=encodeURIComponent;this.z.push((a.Qa?c("---destpub-debug---"):c("---destpub---"))+d)},ea:function(){var d=this,c;this.z.length?(c=this.z.shift(),a.X.postMessage(c,this.url,this.Ba.contentWindow),this.Ea.push(c),setTimeout(function(){d.ea()},this.ca)):this.L=k},K:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,
"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.$="true"===c[1]?j:k,this.da=j,this.p()),this.Fa.push(a))},Ia:function(d){this.url===h&&(this.e="string"===typeof a.W&&a.W.length?a.W:d.subdomain||"",this.url=this.Aa());d.ibs instanceof Array&&d.ibs.length&&(this.H=j);if(!a.idSyncDisable3rdPartySyncing&&(this.H||a.la)&&this.e&&"nosubdomainreturned"!==this.e&&!this.M)(i.ga||"complete"===o.readyState||"loaded"===o.readyState)&&this.Z();"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):
this.p(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},ua:function(d,c){return a.Ra||!d||c-d>v.ha}};a.Pa=u;0>m.indexOf("@")&&(m+="@AdobeOrg");a.marketingCloudOrgID=m;a.cookieName="AMCV_"+m;a.sessionCookieName="AMCVS_"+m;a.cookieDomain=a.ma();a.cookieDomain==l.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";if(t&&"object"==typeof t){for(var E in t)!Object.prototype[E]&&
(a[E]=t[E]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();E=a.b(F);var H=Math.ceil((new Date).getTime()/v.O);!a.idSyncDisableSyncs&&u.ua(E,H)&&(a.k(q,-1),a.c(F,H));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){u.va();G.Y(window,"load",function(){var d=u;i.ga=j;!a.idSyncDisable3rdPartySyncing&&(d.H||a.la)&&d.e&&"nosubdomainreturned"!==d.e&&d.url&&!d.M&&d.Z()});try{a.X.K(function(a){u.K(a.data)},u.I)}catch(I){}}}
Visitor.getInstance=function(m,t){var a,l=window.s_c_il,i;0>m.indexOf("@")&&(m+="@AdobeOrg");if(l)for(i=0;i<l.length;i++)if((a=l[i])&&"Visitor"==a._c&&a.marketingCloudOrgID==m)return a;return new Visitor(m,t)};

/*
(function(){function m(){t.ga=a}var t=window.Visitor,a=t.ja;a||(a=!0);window.addEventListener?window.addEventListener("load",m):window.attachEvent&&window.attachEvent("onload",m)})();
*/

  // End Visitor API

  window.visitor = new Visitor("5CFB3942551026A60A4C98A4@AdobeOrg");
  window.visitor.trackingServer = s.trackingServer;
  window.visitor.trackingServerSecure = s.trackingServerSecure;

  s.visitor = Visitor.getInstance("5CFB3942551026A60A4C98A4@AdobeOrg");
}

// Start AppMeasurement
/*
============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.6
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.6";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Db;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.sb=function(a){try{console.log(a)}catch(b){}};a.Ba=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.kb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.G=[];a.da=function(c,b,d){if(a.va)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ea)for(a.ea=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ea=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.G.push({m:c,a:b,t:e}),a.ea||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.pa();0<a.G.length;){d=a.G.shift();if(b&&!d.t&&d.t>c){a.G.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.va=1;a[d.m].apply(a,d.a);a.va=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.da("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.K,(m=a.lightTrackVars)&&(m=","+m+","+a.ia.join(",")+",");else{d=a.e;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Cb,f=a[e].Bb));m&&(m=","+m+","+a.B.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.o(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.Ba(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.mb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.K,(n=a.lightTrackVars)&&(n=","+n+","+a.ia.join(",")+",");else{b=a.e;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Cb,r=a[e].Bb));n&&(n=","+n+","+a.B.join(",")+",");r&&(r=","+r+",",
n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.o("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Ba(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.c&&(c+=a.c)}return c};a.v=function(a){var b=a.tagName;if("undefined"!=""+a.Gb||"undefined"!=""+a.wb&&"HTML"!=(""+a.wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.xa=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.H=function(c){var b=a.v(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.xa(c),e)?{id:e.substring(0,100),type:g}:0};a.Eb=function(c){for(var b=a.v(c),d=a.H(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.v(c),d=a.H(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.vb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ja=1;d||(a.ja=0,d=a.clickObject);if(d){c=a.v(d);for(b=a.H(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.v(d),b=a.H(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ja=1;!e&&d&&(e=a.xa(d));e&&
!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Aa(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),
g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.c="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.c="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+
"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.nb=function(){var c=a.ja,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),
b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.c=a.o("c",m)+(a.c?a.c:"");if(c||a.c){c&&!a.c&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.c+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.c+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,1),d=1);c||(d=1);if(d){e=
"";m=2;!c&&a.c&&(e=a.escape(f.join(","))+"="+a.escape(a.c),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ob=function(){if(!a.Ab){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&
(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Fb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=
f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Ab=1}};a.L={};a.loadModule=function(c,b){var d=a.L[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.L[c]=a[c]=d;d.Qa=function(){return d.Ua};d.Va=function(b){if(d.Ua=b)a[c+"_onLoad"]=b,a.da(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Qa,set:d.Va}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=
b,a.da(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.L)if(!Object.prototype[b]&&(d=a.L[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.M=function(c,b){var d,
f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.qa:a.e,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Ja=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.qa:a.e,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ib=function(a){var b,d,f,e,g,m=0,k,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,
7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?m=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(m=",p,ei,"),m&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=m.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?k=n+"&"+q:q=""}d=253-(k.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.Pa=function(c){var b=
a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.Z=!1;a.D=!1;a.Xa=function(){a.D=!0;a.i()};a.X=!1;a.Q=!1;a.Ta=function(c){a.marketingCloudVisitorID=c;a.Q=!0;a.i()};a.aa=!1;a.R=!1;a.Ya=function(c){a.visitorOptedOut=c;a.R=!0;a.i()};a.U=!1;a.N=!1;a.La=function(c){a.analyticsVisitorID=
c;a.N=!0;a.i()};a.W=!1;a.P=!1;a.Na=function(c){a.audienceManagerLocationHint=c;a.P=!0;a.i()};a.V=!1;a.O=!1;a.Ma=function(c){a.audienceManagerBlob=c;a.O=!0;a.i()};a.Oa=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Y=!1;a.C=!1;a.pa=function(){a.C=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.Z||a.D||(a.Pa(a.Xa)?a.D=!0:a.Z=!0);if(a.Z&&!a.D)return!1;b&&b.isAllowed()&&(a.X||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||
(a.X=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Ta]),a.marketingCloudVisitorID&&(a.Q=!0)),a.aa||a.visitorOptedOut||!b.isOptedOut||(a.aa=!0,a.visitorOptedOut=b.isOptedOut([a,a.Ya]),a.visitorOptedOut!=q&&(a.R=!0)),a.U||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.U=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.La]),a.analyticsVisitorID&&(a.N=!0)),a.W||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.W=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,
a.Na]),a.audienceManagerLocationHint&&(a.P=!0)),a.V||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.V=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ma]),a.audienceManagerBlob&&(a.O=!0)),a.X&&!a.Q&&!a.marketingCloudVisitorID||a.U&&!a.N&&!a.analyticsVisitorID||a.W&&!a.P&&!a.audienceManagerLocationHint||a.V&&!a.O&&!a.audienceManagerBlob||a.aa&&!a.R)&&(c=!1);a.Y||a.C||(a.Oa(a.pa)?a.C=!0:a.Y=!0);a.Y&&!a.C&&(c=!1);return c};a.k=q;a.p=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};
f.bb=c;f.ab=b;f.Za=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.p&&(a.p=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.Wa(),a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.ab.apply(c.bb,c.Za)};a.Wa=function(){a.p&&(clearInterval(a.p),a.p=0)};a.Ra=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ja(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;
var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+
f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.jb&&(a.authState=a.visitor.jb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Ra(c)||(b&&a.M(b),c&&(d={},a.Ja(d,0),a.M(c)),a.qb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.lb()),a.vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&
(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ka||(a.referrer=r.document.referrer),a.Ka=1,a.referrer=a.ib(a.referrer),a.l("_g")),a.nb()&&!a.abort&&(a.ob(),g+=a.mb(),a.ub(e,g),a.l("_t"),a.referrer=""))),c&&a.M(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.c=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.r=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.e.length;c++)if(b=a.e[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.ub=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+
"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.zb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.gb(d);a.fa()};a.gb=function(c){a.g||a.pb();a.g.push(c);a.ha=a.u();a.Ha()};a.pb=function(){a.g=a.rb();a.g||(a.g=[])};a.rb=function(){var c,b;if(a.ma()){try{(b=k.localStorage.getItem(a.ka()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ma=function(){var c=!0;a.trackOffline&&a.offlineFilename&&
k.localStorage&&k.JSON||(c=!1);return c};a.ya=function(){var c=0;a.g&&(c=a.g.length);a.A&&c++;return c};a.fa=function(){if(!a.A)if(a.za=q,a.la)a.ha>a.J&&a.Fa(a.g),a.oa(500);else{var c=a.$a();if(0<c)a.oa(c);else if(c=a.wa())a.A=1,a.tb(c),a.xb(c)}};a.oa=function(c){a.za||(c||(c=0),a.za=setTimeout(a.fa,c))};a.$a=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.u()-a.Ea;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.wa=function(){if(0<a.g.length)return a.g.shift()};
a.tb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.sb(b)}};a.Sa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.T=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.T=!0,a.S=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.S=function(a){return k.$.parseJSON(a)},a.T=!0):a.S=function(){return null};a.xb=function(c){var b,d,f;a.Sa()&&2047<c.length&&("undefined"!=
typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.T?b.ra=!0:b=0));!b&&a.Ia&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=
0);b||(b=new Image,b.alt="");b.ua=function(){try{a.na&&(clearTimeout(a.na),a.na=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.yb=function(){b.ua();a.fb();a.ba();a.A=0;a.fa();if(b.ra){b.ra=!1;try{var c=a.S(b.responseText);a.AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.hb=function(){b.ua();(a.trackOffline||a.la)&&a.A&&a.g.unshift(a.eb);a.A=0;a.ha>a.J&&a.Fa(a.g);a.ba();a.oa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.yb():
b.hb())};a.Ea=a.u();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ca)try{f.removeChild(a.Ca)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ca=a.cb}b.abort&&(a.na=setTimeout(b.abort,5E3));a.eb=c;a.cb=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.F||a.r)a.forcedLinkTrackingTimeout||
(a.forcedLinkTrackingTimeout=250),a.ca=setTimeout(a.ba,a.forcedLinkTrackingTimeout)};a.fb=function(){if(a.ma()&&!(a.Da>a.J))try{k.localStorage.removeItem(a.ka()),a.Da=a.u()}catch(c){}};a.Fa=function(c){if(a.ma()){a.Ha();try{k.localStorage.setItem(a.ka(),k.JSON.stringify(c)),a.J=a.u()}catch(b){}}};a.Ha=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.wa()}};a.forceOffline=function(){a.la=!0};a.forceOnline=function(){a.la=!1};a.ka=
function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.u=function(){return(new Date).getTime()};a.Aa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.zb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.M(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],
f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&
b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.B="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.e=a.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ia="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.K=a.ia.slice(0);a.qa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.e.push("prop"+n),a.K.push("prop"+n)),a.e.push("eVar"+n),a.K.push("eVar"+n),6>n&&a.e.push("hier"+n),4>n&&a.e.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.e=a.e.concat(n);a.B=a.B.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ea=0;a.ha=0;a.J=0;a.Da=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ia=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Ia=!0}}catch(z){}a.ba=function(){a.ca&&(k.clearTimeout(a.ca),a.ca=q);a.j&&a.F&&a.j.dispatchEvent(a.F);a.r&&("function"==typeof a.r?a.r():a.j&&a.j.href&&(a.d.location=
a.j.href));a.j=a.F=a.r=0};a.Ga=function(){a.b=a.d.body;a.b?(a.q=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ta)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.q,!1);else{a.b.removeEventListener("click",a.q,!0);a.ta=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.I&&a.I==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.I=a.clickObject;a.ga&&(clearTimeout(a.ga),a.ga=0);a.ga=setTimeout(function(){a.I==m&&(a.I=0)},1E4);f=a.ya();a.track();if(f<a.ya()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Aa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.F=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.q):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ta=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.q,!0)),a.b.addEventListener("click",a.q,!1))):setTimeout(a.Ga,30)};a.Ga();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();

// End AppMeasurement

// Integrate Module

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

// End Integrate Module

// ActivityMap Module

function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):a.src&&"IMAGE"==c&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
// End ActivityMap Module 


//tealium universal tag - utag.sender.19063.am160 v4.0.201606142201, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1,'link':1,'video':1};
  u.o=s;
  u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i};
  u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};
  u.map={"new_pagename":"pageName","new_page_category":"channel","customer_state":"state","customer_postal_code":"zip","_corder":"eVar15,purchaseID","_csku":"PRODUCTS_id","event_type:PDP":"prodView,event2","event_type:Checkout":"scCheckout,event3","event_type:int_keyword_success":"event6","event_type:int_keyword_not_success":"event7","event_type:Product_State":"event9","event_type:addToCart":"scAdd,scOpen,scView","event_type:AddToCart":"scView,scOpen","event_type:plp_filter_counter":"event11","event_type:plp_dropdown_counter":"event12","event_type:filter_Gender":"event13","event_type:product_type":"event14","event_type:add_to_mini_cart":"event10,scView,scAdd,scOpen","site_currency":"currency","site_country":"prop1","dom.url":"prop7,eVar7","page_type":"eVar11,prop11","site_region":"prop12","site_language":"prop13","search_keyword":"prop26,eVar26","search_results":"prop27,eVar27","cm_sp":"eVar28,prop28","re_estate":"prop29,eVar29","order_payment_type":"eVar32","shipping_method":"eVar33","customer_type":"prop34,eVar34","cart_type":"eVar35","product_state":"eVar36","topnavpath":"eVar37","storelocator_start":"prop38","storelocator_end":"prop39","order_shipping":"eVar41","order_discount":"eVar42","new_re_estate":"eVar43,prop43","order_tax":"eVar44","fis_location":"prop44","product_line_discount":"eVar45","fis_search_radius":"prop45","product_line_total":"eVar46","fis_search_results":"prop46","promo_name":"eVar47","fis_selected_distance":"prop47","promo_code":"eVar48","fis_selected_store":"prop48","error_Messages_Code":"prop49","product_unit_price":"eVar59","filter_string":"prop60","order_applied_promo":"eVar61","product_applied_promo":"eVar62","employee_id":"eVar75","store_id":"eVar76","pdp_filter":"prop74,eVar74","filter_string_detail":"prop75","qp.region":"eVar79","qp.lang":"eVar80","qp.vendorId":"eVar81","product_state_pdp":"eVar82","voucher_code":"eVar83","voucher_name":"eVar84","voucher_value":"eVar85","ip_address":"eVar87","context_data":"contextData","sc_account":"s_account","sc_add_to_cart_incrementor":"PRODUCTS_event29","context_event_type":"c.event_type","ut.version":"c.deployment_ver,eVar6,prop6","adobe_plp_filter":"c.filter","video_seg":"c.video_seg","video_current_time":"c.playback_time","product_unit_price_mini_cart":"PRODUCTS_event14","video_title":"c.video"};
  u.extend=[function(a,b){
var getMonetateCampaignNames = function() {
    return $.map(window._monetateMETA, function(obj) {
        return new RegExp("_" + obj.id + "$").test(obj.key) ? obj.key : obj.key + "_" + obj.id;
    }).join(",");
};
var getMonetateCampaignVariants = function() {
    return $.map(window._monetateMETA, function(obj) {
        return obj.split;
    }).join(",");
};

// assume monetate campaign always loads before tealium
// populate contextData if monetate campaign exists
if (window._monetateMETA && window._monetateMETA.length) {
    // pass monetateMETA to utag_data
    utag_data["context_data"] = utag.data["context_data"] = b["context_data"] = {
        "monetate_campaign_name": getMonetateCampaignNames(),
        "monetate_campaign_variant": getMonetateCampaignVariants()
    };
}

u = u || {o:{}}; u.o = u.o || {};
u.o.addCustomContextData = function(key, value){
  b.context_data = b.context_data || {};
  !!value && (b.context_data[key] = value);
  return b.context_data;
}
},
function(a,b,c,d,e,f,g){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'www.oakley.com':'oakleypreprod'},{'at.oakley.com':'oakleyprod-at'},{'be.oakley.com':'oakleyprod-be'},{'www.oakley.com.br':'oakleyprod-br'},{'oakley.com.cn':'oakleyprod-cn'},{'dk.oakley.com':'oakleyprod-dk'},{'fr.oakley.com':'oakleyprod-fr'},{'de.oakley.com':'oakleyprod-de'},{'ie.oakley.com':'oakleyprod-ie'},{'it.oakley.com':'oakleyprod-it'},{'lu.oakley.com':'oakleyprod-lu'},{'nl.oakley.com':'oakleyprod-nl'},{'no.oakley.com':'oakleyprod-no'},{'pl.oakley.com':'oakleyprod-pl'},{'pt.oakley.com':'oakleyprod-pt'},{'es.oakley.com':'oakleyprod-es'},{'se.oakley.com':'oakleyprod-se'},{'ch.oakley.com':'oakleyprod-ch'},{'uk.oakley.com':'oakleyprod-uk'},{'jp.oakley.com':'oakleyprod-jp'},{'au.oakley.com':'oakleyprod-au'},{'ca.oakley.com':'oakleyprod-ca'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['sc_account']=c[e][f];m=true};};if(m)break};if(!m)b['sc_account']='';},
function(a,b){
(function(s){

////insert plugins in this section/////
  
  /************************** PLUGINS SECTION *************************/
  /*
* Plugin: getValOnce_v1.11
*/
  s.getValOnce=new Function("v","c","e","t",""
			    +"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
			    +"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
			    +"==0?0:a);}return v==k?'':v");
  
  /*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
  s.getNewRepeat=new Function("d","cn",""
			      +"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
			      +"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
			      +"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
			      +"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
			      +"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
  
  /*
* Utility Function: split v1.5 (JS 1.0 compatible)
*/
  s.split=new Function("l","d",""
		       +"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
		       +"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
  
  /*
* Plugin: getTimeParting 
*/
  
  s.p_fo=new Function("n",""
		      +"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
		      +"new Object;return 1;}else {return 0;}");
  
  s.getTimeParting=new Function("t","z","y","l",""
				+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
				+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
				+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
				+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
				+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
				+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
				+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
				+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
				+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
				+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
				+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
				+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
				+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
				+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
				+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
				+"eturn A}}else{return Z+', '+W}}}");
  
  s.handlePPVevents=new Function("",""
				 +"if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeigh"
				 +"t,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,"
				 +"s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s."
				 +"d.documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documen"
				 +"tElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||"
				 +"(s.wd.document.documentElement.scrollTop||s.wd.document.body.scroll"
				 +"Top),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_pp"
				 +"v'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):"
				 +"escape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>"
				 +"2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)"
				 +"?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s.c_w('s_pp"
				 +"v',cn);");
  
  
  /*
* Plugin: getPreviousValue v1.0 - return previous value of designated
*   variable (requires split utility)
*/
  s.getPreviousValue=new Function("v","c","el",""
				  +"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
				  +"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
				  +"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
				  +":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
				  +"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
  
  
  /*
* Plugin: getPercentPageViewed v1.74
*/
  s.getPercentPageViewed=new Function("n",""
				      +"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
				      +"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
				      +"rientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||documen"
				      +"t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){"
				      +"var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a"
				      +"[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a"
				      +"[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9"
				      +"]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w("
				      +"K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind"
				      +"ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|"
				      +"|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi"
				      +"dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W"
				      +".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e"
				      +"=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s"
				      +"&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho"
				      +"],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|"
				      +"|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi"
				      +"xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r"
				      +"ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s"
				      +".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v"
				      +"!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP"
				      +"od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')"
				      +"&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if"
				      +"(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+"
				      +"V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':"
				      +"o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)"
				      +"};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);"
				      +"else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument"
				      +"s.length||n=='-'?a[1]:a");
  
/////end plugin insert/////

})(u.o);
},
function(a,b){
(function(s){
  
  ////insert doPlugins in this section/////
  
  s.usePlugins=true;
  function s_doPlugins(s) {
    if (s.account == "oakleyprod-internal"){
      s.trackInlineStats=false;
    }
    
    if(typeof Visitor != "undefined") {
      s.eVar1 = (typeof visitor != "undefined") ? visitor.getMarketingCloudVisitorID() : "";
      s.prop17 = "VisitorAPI Present";
    } else {
      s.prop17 = "VisitorAPI Missing";
    }
    
    /*External Campaign*/
    s.campaign = s.Util.getQueryParam("cm_mmc");
    if (s.campaign) s.campaign=s.getValOnce(s.campaign,'s_campaign',0,'m');
    if(s.campaign){
      window.cmpnTemp = s.campaign;
    }
    else if(window.cmpnTemp){
      s.campaign = window.cmpnTemp;
    }
    
    /*Internal Campaign*/
    s.eVar28 = s.Util.getQueryParam("icmp");
    if (s.eVar28) s.eVar28=s.getValOnce(s.eVar28,'s_Var28',0,'m'); 
    s.prop28="D=v28"; // set internal campaign
    if(s.eVar28){
      window.e28Temp = s.eVar28;
	}
    else if(window.e28Temp){
      s.eVar28 = window.e28Temp;
    }
    
     /*Internal Campaign 2*/
    if( !(/oakleypreprod|oakleypreprodhyb/i).test(b.sc_account) ){ //suppress for US and JP
      s.eVar18 = s.Util.getQueryParam("nav");
      if (s.eVar18) s.eVar18=s.getValOnce(s.eVar18,'s_Var18',0,'m'); 
      s.prop18="D=v18"; // set internal campaign
      if(s.eVar18){
	window.e18Temp = s.eVar18;
      }
      else if(window.e18Temp){
	s.eVar18 = window.e18Temp;
      }
    }
    
    
    /*Get New vs. Repeat Visits*/
    s.eVar20=s.getNewRepeat(547,'s_nr2');//Visitor is new if they haven't visited in 547 days
    s.prop20="D=v20";
    
    
    /* Get Previous Page Name & Percentage viewed*/
    if(!window.gpvOnce){
      window.gpvOnce = s.getPreviousValue(s.pageName,'gpv_p25',''); //Previous page name
    }
    s.prop25 = window.gpvOnce;
    
    //prop21: max % viewed of prev page
    if(!window.gppvOnce){
      var gppvArray = s.getPercentPageViewed(true);
      window.gppvOrientation = gppvArray[9]+'|'+gppvArray[5]+'|'+gppvArray[3];
      window.gppvOnce = gppvArray[2]+'|'+gppvArray[1];
    }
    s.contextData['ppv_str'] = gppvOrientation;
    s.contextData['ppv_ti'] = window.gppvOnce; 
    
    if(!s.prop25||s.prop25=='no value')
      s.contextData['ppv_ti']=''; //clear max % viewed if no prev page view
    //s.eVar25="D=c25";  //set previous page name
    //s.eVar21="D=c21";  //set max % of viewed of prev page
    
    /*Time Parting*/
    if(!s.year){
      s.scDate = new Date();
      s.year=s.scDate.getFullYear();
    }
    s.prop22 = s.getTimeParting('h','-8',s.year) // Set hour 
      +"|"+ s.getTimeParting('d','-8',s.year) // Set day
      +"|"+ s.getTimeParting('w','-8',s.year); //Set weekend vs. weekday
    s.eVar22 = "D=c22"
    
  }
  s.doPlugins=s_doPlugins;
  
  /////end doPlugin insert/////
  
})(u.o);
},
function(a,b,c,d){ try{ if(b['page_name']=='Error:Site Maintenance '||b['page_name']=='Error:404 '||b['page_name']=='Error:PageNotFound'||b['page_name']=='Error:500 '){c=[b['site_region'],b['page_name']];b['new_pagename']=c.join(':')} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['site_region']=utag.data.site_region || "";}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['site_country']=='undefined'||typeof b['site_country']!='undefined'&&b['site_country']==''){b['site_country']='US'} } catch(e){ utag.DB(e) }  },
function(a,b,c,d){ try{ if((typeof b['page_name']!='undefined'&&typeof b['page_name']!='undefined'&&b['page_name']!=''&&typeof b['site_country']!='undefined'&&typeof b['site_country']!='undefined'&&b['site_country']!='')){c=[b['site_country'],b['page_name']];b['new_pagename']=c.join(':')} } catch(e){ utag.DB(e) }  },
function(a,b,c,d){ try{ if((typeof b['site_country']!='undefined'&&typeof b['site_country']!='undefined'&&b['site_country']!=''&&typeof b['page_category']!='undefined'&&typeof b['page_category']!='undefined'&&b['page_category']!='')){c=[b['site_country'],b['page_category']];b['new_page_category']=c.join(':')} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['page_type'].toString().toLowerCase().indexOf('product'.toLowerCase())>-1&&typeof b['page_type']!='undefined'&&typeof b['page_type']!='undefined'&&b['page_type']!='')){b['event_type']='PDP'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_name'].toString().indexOf('/CART/')>-1){b['event_type']='AddToCart'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_name'].toString().toLowerCase()=='Checkout'.toLowerCase()){b['event_type']='Checkout'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['page_name']=='undefined'||typeof b['page_name']!='undefined'&&b['page_name']==''){try{b['page_name']=utag_data['page_name']}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d){ try{ if((typeof b['page_name']!='undefined'&&typeof b['re_estate']!='undefined'&&b['re_estate']!=''&&typeof b['re_estate']!='undefined'&&typeof b['page_name']!='undefined'&&b['page_name']!='')){c=[b['re_estate'],b['page_name']];b['new_re_estate']=c.join(':')} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['page_type'].toString().toLowerCase()=='product'.toLowerCase())){b['product_state']=b['product_state']} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='instock'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event22");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='lowstock'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event23");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='backorder'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event24");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='outofstock'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event25");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='preorder'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event26");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='comingsoon'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event27");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['product_state'].toString().toLowerCase()=='retiredproduct'.toLowerCase()&&/^product:/i.test(b['page_name']))){try{b['sc_events']=u.addEvent("event28");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['qp.sort']!='undefined'&&typeof b['qp.sort']!='undefined'&&b['qp.sort']!='')){b['event_type']='plp_dropdown_counter'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['product_state']!='undefined'&&typeof b['product_state']!='undefined'&&b['product_state']!=''&&b['page_type'].toString().toLowerCase()=='product'.toLowerCase())){b['product_state_pdp']=b['product_state']} } catch(e){ utag.DB(e) }  },
function(a,b){
// High-level Filter
try {
  var temp = [];
  if (typeof b.filter_Gender != 'undefined' && b.filter_Gender != '') { temp.push(b.filter_Gender);	}
  if (typeof b.filter_ProductType != 'undefined' && b.filter_ProductType != '') { temp.push(b.filter_ProductType);	}
  if (typeof b.filter_RecommendedUse != 'undefined' && b.filter_RecommendedUse != '') { temp.push(b.filter_RecommendedUse);	}
  if (typeof b.filter_Technology != 'undefined' && b.filter_Technology != '') { temp.push(b.filter_Technology);	}
  b.filter_string = temp.join(':');
} catch(e) {
  console.log(e);
}

// Detail Filter
try {
  var temp = [];
  if (typeof b.filter_Gender != 'undefined' && b.filter_Gender != '') { temp.push(b.filter_Gender);	}
  if (typeof b.filter_ProductType != 'undefined' && b.filter_ProductType != '') { temp.push(b.filter_ProductType);	}
  if (typeof b.filter_RecommendedUse != 'undefined' && b.filter_RecommendedUse != '') { temp.push(b.filter_RecommendedUse);	}
  if (typeof b.filter_Technology != 'undefined' && b.filter_Technology != '') { temp.push(b.filter_Technology);	}
  if (typeof b.filter_FrameShape != 'undefined' && b.filter_FrameShape != '') { temp.push(b.filter_FrameShape);	}
  if (typeof b.filter_FrameColor != 'undefined' && b.filter_FrameColor != '') { temp.push(b.filter_FrameColor);	}
  if (typeof b.filter_LensColor != 'undefined' && b.filter_LensColor != '') { temp.push(b.filter_LensColor); }
  if (typeof b.filter_EyeSize != 'undefined' && b.filter_EyeSize != '') { temp.push(b.filter_EyeSize); }
  if (typeof b.filter_FaceShape != 'undefined' && b.filter_FaceShape != '') { temp.push(b.filter_FaceShape); }
  if (typeof b.filter_FrameMaterial != 'undefined' && b.filter_FrameMaterial != '') { temp.push(b.filter_FrameMaterial); }
  if (typeof b.filter_Exclusive != 'undefined' && b.filter_Exclusive != '') { temp.push(b.filter_Exclusive); }
  b.filter_string_detail = temp.join(':');
} catch(e) {
  console.log(e);
}
},
function(a,b){ try{ if((typeof b['page_name']!='undefined'&&b['page_name'].toString().toLowerCase()!='Search Results'.toLowerCase())||(typeof b['qp.text']=='undefined'&&b['page_name']!='Search Results')){b['search_results']=''} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['cart_type']=='mini'&&typeof b['product_id']=='undefined')){try{b['sc_events']=u.addEvent("event19")}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['cart_type']=='mini'&&typeof b['product_id']!='undefined'&&typeof b['product_id']!='undefined'&&b['product_id']!='')){try{b['sc_events']=u.addEvent("event20");u.addEvent("scRemove");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cart_type']=='standard'){try{b['sc_events']=u.addEvent("event21");u.addEvent("scRemove");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['store_id']!='undefined'&&typeof b['store_id']!='undefined'&&b['store_id']!='')){try{b['sc_events']=u.addEvent("event30");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['employee_id']!='undefined'&&typeof b['employee_id']!='undefined'&&b['employee_id']!='')){try{b['sc_events']=u.addEvent("event31");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['storelocator_start']!='undefined'&&typeof b['storelocator_start']!='undefined'&&b['storelocator_start']!=''&&typeof b['storelocator_end']!='undefined'&&typeof b['storelocator_end']!='undefined'&&b['storelocator_end']!='')){try{b['sc_events']=u.addEvent("event32");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['event_type']=='FindinStore'){try{b['sc_events']=u.addEvent("event33");}catch(e){};try{b['fis_search_results']=b['fis_search_results'].toString()}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['fis_search_results']=='0'){try{b['sc_events']=u.addEvent("event35");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['pdp_filter']!='undefined'&&typeof b['pdp_filter']!='undefined'&&b['pdp_filter']!='')){try{b['sc_events']=u.addEvent("event40");}catch(e){};try{b['pdp_filter']=b.pdp_filter+":"+utag.data._csku}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['re_estate']!='undefined'&&b['re_estate'].toString().toLowerCase().indexOf('related:'.toLowerCase())>-1)){try{b['sc_events']=u.addEvent("event41");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['event_type'].toString().indexOf('addToCart')>-1&&b['ut.event'].toString().toLowerCase()=='link'.toLowerCase())){b['sc_add_to_cart_incrementor']='1';try{b['_cprice']=[]}catch(e){};try{b['_cquan']=[]}catch(e){};b['context_event_type']='addToCart,add_to_mini_cart';try{b['product_unit_price']=b.product_unit_price.map(function(a){return a.replace(/[^0-9\.]*/g, '')})}catch(e){};b['event_type']='add_to_mini_cart';try{b['product_quantity']=[jQuery('[name="qty"] option:selected').val()]}catch(e){};try{b['product_unit_price_mini_cart']=b.product_unit_price.map(function(a,i) { try{var subtotal = a * b.product_quantity[i]; return isNaN(subtotal) ? a : subtotal; } catch(e) { return a;} })}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['adobe_plp_filter']=Object.keys(utag.data) 	.filter(function(a){ 		return a.match(/^filter_/i) 	}) 	.map(function(a){ 		return a.replace(/^filter_/i,'')+':'+utag.data[a].replace(/\W/ig,'_') 	}) 	.sort() 	.join('|')}catch(e){};b['plp_filter_applied']='true'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['event_type']=Object.keys(b.site_events)+""}catch(e){};try{b['video_seg']=(function(){try{if ((/video_play/i).test(b.event_type)) return "0"}catch(e){}})()||b.video_seg}catch(e){};try{b['video_seg']=(function(){try{if ((/milestone_25/i).test(b.event_type)) return "1"}catch(e){}})()||b.video_seg}catch(e){};try{b['video_seg']=(function(){try{if ((/milestone_50/i).test(b.event_type)) return "2"}catch(e){}})()||b.video_seg}catch(e){};try{b['video_seg']=(function(){try{if ((/milestone_75/i).test(b.event_type)) return "3"}catch(e){}})()||b.video_seg}catch(e){};try{b['video_seg']=(function(){try{if ((/video_ended/i).test(b.event_type)) return"4"}catch(e){}})()||b.video_seg}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['context_event_type']=='undefined'||(typeof b['context_event_type']!='undefined'&&typeof b['context_event_type']!='undefined'&&b['context_event_type']=='')){try{b['context_event_type']=Object.keys(b.site_events)+""}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['event_type'];if(typeof d=='undefined')return;c=[{'add_to_mini_cart':'add to mini cart'},{'^video_|^milestone_':'video playback'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){g=new RegExp(f,'i');if(g.test(d)){b['link_name']=c[e][f];m=true};};if(m)break};if(!m)b['link_name']='';},
function(a,b){ try{ if(1){try{b['link_name']=b.page_name+":"+b.link_name}catch(e){}} } catch(e){ utag.DB(e) }  }];

  u.send=function(a,b,c,d,e,f,g,h,ev){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      utag.DB("send:321");
      u.data={a:{}};
      u.a=a;
      b.sc_events=b.sc_events||{};

      u.addEvent = function (v, n) {
        var t = [];
        if (v instanceof Array) {
          t = v.slice(0);
        } else if (typeof n !== "undefined") {
          t.push(v + "=" + n);
        } else {
          t.push(v);
        }
        for (var i = 0; i < t.length; i++) {
          b.sc_events[t[i]] = 1;
          u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
        }
        return b.sc_events;
      };

      u.addProduct = function (v) {
        u.data.sc_addProd = "";
        if (v instanceof Array) {
          u.data.sc_addProd = v.join(',');
        } else {
          u.data.sc_addProd = v;
        }
      };

      if (u.a === "link") {
        u.ltflag = true;
        if (typeof b.linkTrackVars === "undefined") { u.ltv = []; }
        if (typeof b.linkTrackEvents === "undefined") { u.lte = []; }
      }

      u.data.tagdevicetype = "standard";       // Dynamically override using extensions

      for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

      // Mobile lifecycle var
      if (u.data.tagdevicetype === "mobile") {
        if (b.timestamp || b.timestamp_unix) {
          u.o.timestamp = b.timestamp || b.timestamp_unix;
        }
        u.data.a = {
          "AppID" : b.app_id || "",
          "CarrierName" : b.carrier || "",
          "DeviceName" : b.device || "",
          "HourOfDay" : b.lifecycle_hourofday_local || "",
          "DayOfWeek" : b.lifecycle_dayofweek_local || "",
          "OSVersion" : b.os_version || b.platform_version || "",
          "Resolution" : b.device_resolution || ""
        }
        if (b.lifecycle_type) {
          u.data.a.disable_wake_track = false;
          u.data.a.disable_sleep_track = false;
          u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
          u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
          u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
          u.data.a.Launches = b.lifecycle_launchcount || "";
          u.data.a.InstallDate =  b.lifecycle_firstlaunchdate_MMDDYYYY || "";
          u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
          u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
        }
        if (b.lifecycle_isfirstlaunch) {
          u.data.a.InstallEvent = "InstallEvent";
        }
        if (b.lifecycle_diddetectcrash) {										
          u.data.a.CrashEvent = "CrashEvent";
        }
        if (b.lifecycle_type === "launch") {
          u.data.a.LaunchEvent = "LaunchEvent";
        }
        if (b.lifecycle_isfirslaunchupdate) {
          u.data.a.UpgradeEvent = "UpgradeEvent";
        }
      }

      for (e in utag.loader.GV(u.map)) {
        if (u.data.tagdevicetype === "mobile") {
          if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
            f = u.map[e].split(",");
            for (g = 0; g < f.length; g++) {
              if (f[g].indexOf("contextData.a.") === 0){
                u.data.a[f[g].substring(14)] = b[e];
              }
            }
          }
        } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
          f = u.map[e].split(",");
          for (g = 0; g < f.length; g++) {
            if(f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")){
              u.data[f[g].substring(9)]=b[e];
            }
          }
        }
      }

      //Check for disabled lifecycles

      if(u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
        if (b.lifecycle_type === "wake") {
          return false;
        }
      }
      if(u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
        if (b.lifecycle_type === "sleep") {
          return false;
        }
      }

      u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
      u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
      u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
      u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
      if(typeof u.data.id!="undefined"&&u.data.id!=""){
        c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for( g=0;g<f.length;g++){
          var pv = f[g].substring(9);
          if(f[g].indexOf("PRODUCTS_evar")==0 || f[g].indexOf("PRODUCTS_eVar")==0){
            if (b[e] instanceof Array) {
              b.sc_prodevars = b.sc_prodevars || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodvars = {};
                if(typeof b.sc_prodevars[i]!="undefined" && b.sc_prodevars[i]!=""){
                  b.sc_prodevars[i][pv]=b[e][i];
                }else{
                  prodvars[pv]=b[e][i];
                  b.sc_prodevars.push(prodvars);
                }
              }
            }else{
              d[pv] = (b[e]+"").split(",");
            }
          }else if(f[g].indexOf("PRODUCTS_event")==0){
            if(b[e] instanceof Array){
              b.sc_prodevents=b.sc_prodevents || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodevents = {};
                if(typeof b.sc_prodevents[i]!="undefined" && b.sc_prodevents[i]!=""){
                  b.sc_prodevents[i][pv]=b[e][i];
                }else{
                  prodevents[pv]=b[e][i];
                  b.sc_prodevents.push(prodevents);
                }
              }
              u.addEvent(pv);
            }else if (b[e] !== ""){
              ev[pv]=b[e];
              u.addEvent(pv);
            }
          }
        }}}
        e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
        h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
        b.sc_prodevents=b.sc_prodevents||[];
        b.sc_prodevars=b.sc_prodevars || [];
        for(d=0;d<u.data.id.length;d++){
          var h2=h;
          var h3=e;
          if(typeof b.sc_prodevents!="undefined"){
            for (f in b.sc_prodevents[d]) {
              if(typeof b.sc_prodevents[d][f]!="undefined"){
                var l =b.sc_prodevents[d][f];
                if(typeof l!="undefined" && l!="" && isNaN(l)==false){
                  if (h2){
                    h2 += "|" + f + '=' + l;
                  }else{
                    h2 = f + '=' + l;
                  }
                }
              }
            }
          }
          if(typeof b.sc_prodevars!="undefined"){
            for (f in b.sc_prodevars[d]) {
              if(typeof b.sc_prodevars[d][f]!="undefined"){
                var l =b.sc_prodevars[d][f];
                if(typeof l!="undefined" && l!=""){
                  if (h3){
                    h3 += "|" + f + '=' + l;
                  }else{
                    h3 = f + '=' + l;
                  }
                }
              }
            }
          }
          c.push((u.data.category[d]?u.data.category[d]:"")+";"+u.data.id[d]+";"+(u.data.quantity[d]?u.data.quantity[d]:"")+";"+(u.data.price[d]?((u.data.quantity[d]?parseInt(u.data.quantity[d]):1)*parseFloat(u.data.price[d])).toFixed(2):"")+";"+h2+";"+h3);
        }
        if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
          c.push(u.data.sc_addProd);
        }
        u.o.products=c.join(",");
      } else {
        u.o.products = "";
      }

      // Mapping would be b.event_name ==> "prod:event3,click:event4"
      // Data layer variable b.event_name will contain "prod,click" and trigger both event3,event4
      // To serialize, this would be "prod:12345,click"
      var evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
      for(c in utag.loader.GV(b)){
        if(b[c] !== ""){
          f=(""+b[c]).split(","); 
          for(g=0;g<f.length;g++){
            h=f[g].split(":");
            d=[];
            if(typeof u.map[c+":"+h[0]]!="undefined"){
              d=u.map[c+":"+h[0]].split(",");
            }else if(typeof u.map[c]!="undefined"){
              d=u.map[c].split(",");
            }
            for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])){
              u.addEvent(d[e]+(h.length>1?":"+h[1]:""));
            }}
          }
        }
      }

      //Placing mobile data in contextData
      for (var m in u.data.a) {
      	u.o.contextData["a."+m] = u.data.a[m];
        u.pushlt(u.ltv, "contextData.a." + m);
      }

      for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){
        // map to VALUE_event51 for events = "event51=60"
        if(d[e].indexOf("VALUE_")==0){
          u.addEvent( d[e].substring(6), b[c] );
        }else if(d[e]=="doneAction"){
          b.doneAction=b[c];
          if(b.doneAction!="navigate"){
            b.doneAction=eval(b[c]);
          }
        }else if(d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0){
          d[e]=d[e].replace("contextData.", "c.");
          if (d[e][2] !== "a" && d[e][3] !== ".") {   // Exclude mobile vars
            u.o.contextData[d[e].substring(2)] = b[c];			
            u.pushlt(u.ltv,"contextData."+d[e].substring(2))		
          }
        } else {
          if(c=="sc_events" || c=="sc_prodevents" || c=="sc_prodevars"){
            utag.DB("Error:321: Mapping reserved object name " + c)
          }else{
            u.o[d[e]]=b[c];
          }
          // if linkTrackVars is mapped then turn off auto-generation of linkTrackVars
          if(d[e]=="s_account"){
            u.o.account=b[c];
          }else if(d[e]=="linkTrackVars"){
            u.ltflag=false;
          }else{
             u.pushlt(u.ltv,d[e]);
          }
        }
      }}}
      d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};
      if(d.length>0){
        u.o.events=d.join(",");
        u.pushlt(u.lte,u.o.events);
      } else {
        u.o.events = "";
      }

      if(b._ccurrency){
        u.o.currencyCode=b._ccurrency;
      }

      if(b._corder){
        u.pushlt(u.lte,"purchase");
        u.pushlt(u.ltv,"purchaseID");
        u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);
        u.o.events=((u.o.events)?u.o.events:"purchase");
        if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};
      }

      if(u.a=="view"){
        var img = u.o.t();
        /* still track on user agents Adobe cannot detect */
        if(typeof img!="undefined" && img!=""){
          u.img=new Image();u.img.src=img.substring(img.indexOf("src=")+5,img.indexOf("width=")-2);
        }
      }else if(u.a=="link"){
        if(typeof u.ltv!="undefined" && u.ltflag){
          if(u.o.events){u.ltv.push("events")};
          if(u.o.products){u.ltv.push("products")};
          b.linkTrackVars=u.ltv.join(',')
        }
        if(typeof u.lte!="undefined" && u.ltflag)b.linkTrackEvents=u.lte.join(',');
        u.o.linkTrackVars = (b.linkTrackVars)?b.linkTrackVars:"None";
        u.o.linkTrackEvents = (b.linkTrackEvents)?b.linkTrackEvents:"None";

        if(!u.o.linkType)u.o.linkType='o';
        if(b.link_name)b.link_text=b.link_name;
        b.link_text=(b.link_text)?b.link_text:"no link_name";
        if(b.link_type=='exit link'){u.o.linkType='e'}
        else if(b.link_type=='download link')u.o.linkType='d';

        u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));
      }

      /* clear variables */
      if("no"=="yes"){
        u.o.clearVars();
        u.o.contextData = {};
      }

      utag.DB("send:321:COMPLETE");
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('321','oakley.hybrisprod');
}catch(e){
  console.log(e);
};
//end tealium universal tag
