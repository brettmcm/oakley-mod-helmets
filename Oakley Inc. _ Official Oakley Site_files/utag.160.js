//~~tv:7110.20140310
//~~tc: Adding support for cross domain auto linking and setting the site speed sample rate.

window.GoogleAnalyticsObject = "";
if(window.GoogleAnalyticsObject==""){window.GoogleAnalyticsObject="ga"};
window[window.GoogleAnalyticsObject] = window[window.GoogleAnalyticsObject]||function(){(window[window.GoogleAnalyticsObject].q=window[window.GoogleAnalyticsObject].q||[]).push(arguments);};

//tealium universal tag - utag.sender.7110 ut4.0.201507282248, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1,'link':1};
  u.o=window[window.GoogleAnalyticsObject];
  u.cookieDomain="" || utag.loader.lh();
  u.created=false;
  u.name="";
  u.account="UA-37421744-11";
  u.anonymizeIp=("false"==="true"?true:false);
  u.allowLinker=false;
  u.enhancedLinkAttribution = "false";
  // Perform operation for all trackers (params used differently for "set")
  u.all=function(e, o, v){
    for(var i=0;i<u.account.length;i++){
      var t=(u.name[i]?u.name[i]+".":"");
      if(e=="set" || e=="require"){
        u.o(t+e,o,v)
      }else{
        u.o(t+e,o);
      }
    }
  }
  // TODO: Provide UI config option to call create before the Extensions run (if not using dynamic accounts)

  u.map={"ga_account":"account","_csubtotal":"revenue","link_event":"eventCategory","click_type":"eventAction","prodId_swatch":"metric2","prodName_swatch":"metric1","productID_count":"metric3"};
  u.extend=[];

  u.send=function(a,b){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      u.o=window[window.GoogleAnalyticsObject];
      b.ga_events=b.ga_events||[];
      u.addEvent=function(v){
        if(typeof v.eventCategory=="undefined" || typeof v.eventAction=="undefined"){
          utag.DB("GA event Category or Action is not set");
          return;
        }
        if(v.eventValue && isNaN(parseInt(v.eventValue))){
          utag.DB("GA event Value is not a number");
          v.eventValue = null;
        }else{
          v.eventValue = parseInt(v.eventValue) || null;
        }
        b.ga_events.push(v);
      }
      u.a=a;
      
      var c,d,e,f,g;
      for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
        u[e[f]]=b[d];
      }}}

      if(typeof u.account=="string"){ u.account=u.account.replace(/\s/g,"").split(",") };
      if(typeof u.name=="string"){ u.name=u.name.replace(/\s/g,"").split(",") };

      if(u.created==false){
        u.created=true;
        for(f=0;f<u.account.length;f++){
          c=new Object();
          if(u.siteSpeedSampleRate){c.siteSpeedSampleRate=parseInt(u.siteSpeedSampleRate)};
          c.cookieDomain=u.cookieDomain;
          if(u.cookieExpires || u.cookieExpires==="0"){c.cookieExpires=parseInt(u.cookieExpires)};
          if(u.legacyCookieDomain){c.legacyCookieDomain=u.legacyCookieDomain};
          c.allowLinker=u.allowLinker;
          if(typeof u.name[f]!="undefined" && u.name[f]!=""){c.name=u.name[f]};
          u.o("create", u.account[f], c);
        }
      }

      if (u.allowLinker === true && u.crossDomainTrack !== undefined && typeof u.crossDomainTrack === "string") {
        u.all("require", "linker");
        u.crossDomainTrack = u.crossDomainTrack.split(",");
        u.all("linker:autoLink", u.crossDomainTrack);
      };

      if(u.anonymizeIp){u.all("set", 'anonymizeIp', true)};
      if(u.uid){u.all("set", "&uid", u.uid)};
      if(u.page){u.all("set", "page", u.page)};
      if(u.title){u.all("set", "title", u.title)};
      if(u.nonInteraction){u.all("set", "nonInteraction", true)};
      if(u.campaignName){u.all("set", "campaignName", u.campaignName)};
      if(u.campaignSource){u.all("set", "campaignSource", u.campaignSource)};
      if(u.campaignMedium){u.all("set", "campaignMedium", u.campaignMedium)};
      if(u.campaignContent){u.all("set", "campaignContent", u.campaignContent)};
      if(u.campaignKeyword){u.all("set", "campaignKeyword", u.campaignKeyword)};

      for(d in utag.loader.GV(u)){
        if(d.indexOf("metric")==0 || d.indexOf("dimension")==0 || d.indexOf("contentGroup")==0){
          u.all("set", d, u[d]); 
        }
      }

      if(u.a=="view"){
        g={};
        g.hitType="pageview";
        // Enhanced Link Attribution
        if (u.enhancedLinkAttribution == "true") {
          u.all("require", "linkid", "linkid.js");
        }
        // Send page view request
        u.all("send",g);
        u.id=(u.id?u.id:b._corder);
        if(u.id && !(u.id instanceof Array)){
          u.all("require", "ecommerce", "ecommerce.js");
          g={};
          g.id=u.id;
          g.affiliation=(u.affiliation?u.affiliation:b._cstore);
          g.revenue=(u.revenue?u.revenue:b._ctotal);
          g.shipping=(u.shipping?u.shipping:b._cship);
          g.tax=(u.tax?u.tax:b._ctax);
          u.all('ecommerce:addTransaction', g);
          
          for(f=0;f<b._cprod.length;f++){
            g={};
            g.id=u.id;
            g.sku=b._cprod[f];
            g.name=(b._cprodname[f]?b._cprodname[f]:b._cprod[f]);
            g.category=(b._ccat[f]?b._ccat[f]:"");
            g.price=(b._cprice[f]?b._cprice[f]:"1.00");
            g.quantity=(b._cquan[f]?b._cquan[f]:"1");
            u.all('ecommerce:addItem', g);
          }
          u.all('ecommerce:send');
        }else if(u.id instanceof Array && u.id.length>0){
          u.all("require", "ecommerce", "ecommerce.js");
          // an array of order ids will fire multiple transacations
          var lastindex = 0;
          for(f=0;f<u.id.length;f++){
  
            if(f==u.id.length-1 || (u.id[f]!=u.id[f+1])){
              g={};
              g.id=u.id[f];
              g.affiliation=(u.affiliation && typeof u.affiliation[f]!="undefined"?u.affiliation[f]:b._cstore);
              g.revenue=(u.revenue && typeof u.revenue[f]!="undefined"?u.revenue[f]:b._ctotal);
              g.shipping=(u.shipping && typeof u.shipping[f]!="undefined"?u.shipping[f]:b._cship);
              g.tax=(u.tax && typeof u.tax[f]!="undefined"?u.tax[f]:b._ctax);
              u.all('ecommerce:addTransaction', g);
  
              for(e=lastindex;e<f+1;e++){
                g={};
                g.id=u.id[f];
                g.sku=b._cprod[e];
                g.name=(b._cprodname[e]?b._cprodname[e]:b._cprod[e]);
                g.category=(b._ccat[e]?b._ccat[e]:"");
                g.price=(b._cprice[e]?b._cprice[e]:"1.00");
                g.quantity=(b._cquan[e]?b._cquan[e]:"1");
                u.all('ecommerce:addItem', g);
                
              }
              lastindex = f+1;
            }
          }
          u.all('ecommerce:send');
        }
      }
      
      if(u.eventCategory && u.eventAction){
        g={};
        g.hitType="event";
        g.eventCategory=u.eventCategory;
        g.eventAction=u.eventAction;
        if(u.eventLabel){g.eventLabel=u.eventLabel};
        if(typeof u.eventValue!="undefined" && u.eventValue!==""){g.eventValue=u.eventValue;}
        u.all("send",g);
        // clear variables after each event
        u.eventCategory=u.eventAction=u.eventLabel=u.eventValue="";
      }

      for(e=0;e<b.ga_events.length;e++){
        g={};
        g.hitType="event";
        g.eventCategory=b.ga_events[e].eventCategory;
        g.eventAction=b.ga_events[e].eventAction;
        g.eventLabel=b.ga_events[e].eventLabel;
        g.eventValue=b.ga_events[e].eventValue;
        u.all("send",g);
      }

      if(u.socialNetwork && u.socialAction && u.socialTarget){
        g={};
        g.hitType="social";
        g.socialNetwork=u.socialNetwork;
        g.socialAction=u.socialAction;
        g.socialTarget=u.socialTarget;
        u.all("send",g);
        u.socialNetwork = u.socialAction = u.socialTarget = "";
      }

      if(u.timingCategory && u.timingVar && u.timingValue){
        g={};
        g.hitType="timing";
        g.timingCategory = u.timingCategory;
        g.timingVar = u.timingVar;
        g.timingValue = u.timingValue;
        g.timingLabel = u.timingLabel || "";
        u.all("send",g);
      }

      // Map account ID to ga-disable to disable tracking for that account
      if(u["ga-disable"]){window["ga-disable-"+u["ga-disable"]] = true};

      (function() {
	  var id='tealium-tag-7110';
	  if (document.getElementById(id)) {return;}
          u.o.l=1*new Date();
          var e = document.createElement('script'); e.async = true; 
          e.id = id;
          e.src = '//www.google-analytics.com/analytics.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
      })();
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('160','oakley.hybrisprod');
}catch(e){}
//end tealium universal tag
