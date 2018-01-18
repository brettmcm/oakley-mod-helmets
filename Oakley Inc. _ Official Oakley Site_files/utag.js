//tealium universal tag - utag.loader ut4.38.201606160336, Copyright 2016 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_oakley_hybrisprod=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/") === -1) {ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/oakley/hybrisprod/prod/';}}})();}catch(e){};try{
try {
  /* 
  jQuery(".tealium-utag-data[data-tealium-utag-data-real_estate_location],span.tealium-utag-data[data-tealium-utag-data-site_promotion_location]").each(function() {
        var z = this;
        if (z.outerHTML.indexOf('site_promotion') > -1) {
            n = "data-tealium-utag-data-site_promotion_";
            t = "manual_cm_sp";
        } else {
            n = "data-tealium-utag-data-real_estate_";
            t = "manual_cm_re";
        }
        var j = jQuery(this).next('a');
        if (typeof j !== "undefined" && j.length > 0 && t === "manual_cm_sp") {
            j.attr(t, jQuery(this).attr(n + "location") + "-_-" + jQuery(this).attr(n + "position") + "-_-" + jQuery(this).attr(n + "name"));
        } else {
            jQuery(this).next('.yCmsComponent').find('a').attr(t, jQuery(this).attr(n + "location") + "-_-" + jQuery(this).attr(n + "position") + "-_-" + jQuery(this).attr(n + "name"));
        }
    });
*/
    jQuery('.banner-header.tealium-utag-data[data-tealium-utag-data-real_estate_location]').each(function() {
        var z = this;
        if (z.outerHTML.indexOf('site_promotion') > -1) {
            n = "data-tealium-utag-data-site_promotion_";
            t = "manual_cm_sp";
        } else {
            n = "data-tealium-utag-data-real_estate_";
            t = "manual_cm_re";
        }

        jQuery(this).parents('.banner-container').find('a.banner-large-link').attr(t, jQuery(this).attr(n + "location") + "-_-" + jQuery(this).attr(n + "position") + "-_-" + jQuery(this).attr(n + "name"));
    });
} catch (e) {}

//One Obsession
try{
if(typeof utag_data.page_name!="undefined" && utag_data.page_name.toLowerCase()=="One Obsession".toLowerCase()){
  jQuery('a[data-tealium-utag-data-site_promotion_location]').each(function() {
        var z = this;
        if (z.outerHTML.indexOf('site_promotion') > -1) {
            n = "data-tealium-utag-data-site_promotion_";
            t = "manual_cm_sp";
        } else {
            n = "data-tealium-utag-data-real_estate_";
            t = "manual_cm_re";
        }
        jQuery(this).attr(t, jQuery(this).attr(n + "location") + "-_-" + jQuery(this).attr(n + "position") + "-_-" + jQuery(this).attr(n + "name"));
    });
}
}catch(e){}


//Prizm Real Estate Promotions
/*
    try {
        if (location.pathname.indexOf("/prizm/sun") > -1) {
            jQuery('a').each(function(a) {
                var onclick = jQuery(this).attr('onclick');
                if (typeof onclick == "string" && jQuery(this).attr('onclick').indexOf("utag.link({re_estate") > -1) {
                    jQuery(this).attr('manual_cm_re',onclick.split("re_estate:'")[1].split("',")[0])
                    jQuery(this).removeAttr('onclick')
                }
            })
        }
    } catch (e) {
    }
*/
}catch(e){};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"oakley.hybrisprod",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_oakley.hybrisprod_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(a, b, c, d, f){
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = b || utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        // temporary alias variables
        o["_t_visitor_id"]=o["cp.utag_main_v_id"];
        o["_t_session_id"]=o["cp.utag_main_ses_id"];
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o, a, b){
        // Read visitor attributes in local storage
        a = ""; 
        try{
          a = localStorage.getItem("tealium_va");
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }catch(e){
          utag.DB("localStorage not supported");
        }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings or extension criteria.
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        try{
          o["ut.account"] = utag.cfg.utid.split("/")[0];
          o["ut.profile"] = utag.cfg.utid.split("/")[1];
          o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }
      },
      RD: function(o, a, b, c, d) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        // only update cookie once per page
        if(!utag.loader.rd_flag){
          a = (new Date()).getTime();
          b = utag.loader.RC();
          c = a + parseInt(utag.cfg.session_timeout);
          d = a;
	
	  if(!b.utag_main){
	    b.utag_main={};
	  }else if(b.utag_main.ses_id&&typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a){
	    delete b.utag_main.ses_id;
	  }
	
          if(!b.utag_main.v_id){
            b.utag_main.v_id=utag.ut.vi(a);
          }

          if(!b.utag_main.ses_id){
            b.utag_main.ses_id=d+'';
            b.utag_main._ss=b.utag_main._pn=1;
            b.utag_main._sn=1+parseInt(b.utag_main._sn || 0);
          }else{
            d=b.utag_main.ses_id;
            b.utag_main._ss=0;
            b.utag_main._pn=1+parseInt(b.utag_main._pn);
            b.utag_main._sn=parseInt(b.utag_main._sn);
          }

          if(isNaN(b.utag_main._sn) || b.utag_main._sn<1){b.utag_main._sn=b.utag_main._pn=1}

          b.utag_main._st = c+'';

          utag.loader.SC("utag_main", {"v_id": b.utag_main.v_id, "_sn" : b.utag_main._sn, "_ss" : b.utag_main._ss, "_pn" : b.utag_main._pn + ";exp-session", "_st": c, "ses_id": d + ";exp-session"});
        }

        utag.loader.rd_flag=1;

        this.RDqp(o);
        this.RDmeta(o);
        this.RDcp(o,b);
        this.RDdom(o);
        this.RDva(o);
        this.RDut(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        utag.db_log=[];
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(utag.data);
        utag.loader.loadrules();
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }
        utag.cfg.noview = false;

        utag.ut.merge(b,this.df,0);
        // update values for AJAX pages
        utag.loader.RDqp(b);
        utag.loader.RDcp(b);
        utag.loader.RDdom(b);
        utag.loader.RDmeta(b);
        utag.loader.RDva(b);
        utag.loader.RDut(b,a);

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( {event : ”view”, data: {myvar : “myval” }, cfg: {uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules
            sendTag(a, b, d);
          }
        }else if(utag.cfg.load_rules_ajax){
          // right now, load rules use utag.data (replace items in utag.data with items in b)
          this.RE(a,b,"blr");
          utag.ut.merge(utag.data,b,1);
          // clear and re-run load rules
          this.LR(b);
          this.RE(a,b,"alr");
          // TBD: Run through the "bwq" Extensions again here? (For now, require "bwq" is also set to "run once"?) 
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
        // update end of session timestamp in cookie
        utag.loader.SC("utag_main", { "_st": ((new Date()).getTime() + parseInt(utag.cfg.session_timeout)) });

      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l) {
        a=document;
        if (o.type=="iframe") {
          b = a.createElement("iframe");
          o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" };
          for( l in utag.loader.GV(o.attrs) ){
            b.setAttribute( l, o.attrs[l] )
          }
          b.setAttribute("src", o.src);
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b=new Image();b.src=o.src;
          return;
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
          for( l in utag.loader.GV(o.attrs) ){
            b[l] = o.attrs[l]
          }
          b.src = o.src;
        }
        if(o.id){b.id=o.id};
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to "+l+": "+o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b)
          }
        }
      }
    }
  };
  utag.o['oakley.hybrisprod']=utag;
  utag.cfg = {
    v: "ut4.38.201606160336",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/oakley/hybrisprod/prod/",
    utid: "oakley/hybrisprod/201606160336"
  };utag.cond={100:0,101:0,102:0,103:0,104:0,105:0,10:0,110:0,114:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,20:0,26:0,27:0,29:0,2:0,30:0,31:0,32:0,33:0,34:0,36:0,37:0,38:0,39:0,3:0,40:0,45:0,48:0,49:0,4:0,57:0,58:0,59:0,5:0,69:0,70:0,71:0,72:0,73:0,74:0,76:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,89:0,8:0,97:0,9:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.prices_without_tax']=prices_without_tax}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '10':try{c[10]|=(d['dom.url'].toString().indexOf('se.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-se.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '100':try{c[100]|=(d['dom.pathname'].toString().indexOf('en/mens/category/m')>-1)}catch(e){utag.DB(e)}; break;
case '101':try{c[101]|=(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/latch'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '102':try{c[102]|=(d['dom.domain'].toString().toLowerCase().indexOf('au.oakley.com'.toLowerCase())>-1&&d['page_name'].toString().toLowerCase().indexOf('homepage'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '103':try{c[103]|=(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/en/sports'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '104':try{c[104]|=(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/en/technology/eyewear'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '105':try{c[105]|=(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/en/womens/category/w'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '11':try{c[11]|=(d['dom.url'].toString().indexOf('it.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-it.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '110':try{c[110]|=(d['dom.domain'].toString().toLowerCase().indexOf('hyb-pre-prod'.toLowerCase())<0&&d['dom.domain'].toString().toLowerCase().indexOf('oakleyamp-dev.co'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '114':try{c[114]|=(d['dom.domain'].toString().indexOf('hyb-pre-prod-uk.oakley.com')>-1)||(d['dom.domain'].toString().indexOf('uk.oakley.com')>-1)}catch(e){utag.DB(e)}; break;
case '12':try{c[12]|=(d['dom.url'].toString().indexOf('de.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-de.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '13':try{c[13]|=(d['dom.url'].toString().indexOf('es.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-es.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '14':try{c[14]|=(d['dom.url'].toString().indexOf('no.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-no.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '15':try{c[15]|=(d['dom.url'].toString().indexOf('dk.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-dk.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '16':try{c[16]|=(d['dom.url'].toString().indexOf('ch.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-ch.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '17':try{c[17]|=(d['dom.url'].toString().indexOf('fr.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-fr.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '2':try{c[2]|=(typeof d['order_id']!='undefined'&&typeof d['order_id']!='undefined'&&d['order_id']!='')}catch(e){utag.DB(e)}; break;
case '20':try{c[20]|=(d['dom.url'].toString().toLowerCase().indexOf('ca.oakley.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '26':try{c[26]|=(d['dom.url'].toString().toLowerCase().indexOf('jp.oakley.com/'.toLowerCase())<0)||(d['dom.url'].toString().toLowerCase().indexOf('japan.oakley.com/'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '27':try{c[27]|=(d['dom.url'].toString().toLowerCase().indexOf('www.oakley.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('www.oakleytypeo.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '29':try{c[29]|=(d['dom.url'].toString().toLowerCase().indexOf('www.oakley.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('ca.oakley.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('oakleytypeo.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '3':try{c[3]|=(d['page_name'].toString().toLowerCase()=='Homepage'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '30':try{c[30]|=(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '31':try{c[31]|=(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/men'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '32':try{c[32]|=(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/store-finder?q='.toLowerCase())}catch(e){utag.DB(e)}; break;
case '33':try{c[33]|=(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/women'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '34':try{c[34]|=(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/join'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/join/facebook'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/join/rollingo'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/join/productregistration'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/join/ereceipt'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://www.oakley.com/en/login'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://www.oakley.com/en/my-account/profile'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://www.oakley.com/en/preferences/customer?email=[EMAIL]'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '36':try{c[36]|=(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '37':try{c[37]|=(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/men'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '38':try{c[38]|=(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/store-finder'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '39':try{c[39]|=(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/women'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '4':try{c[4]|=(d['dom.url'].toString().indexOf('www.oakley.com/en')>-1)||(d['dom.url'].toString().indexOf('www.oakley.com')>-1)}catch(e){utag.DB(e)}; break;
case '40':try{c[40]|=(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/join'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/join/facebook'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/join/rollingo'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/join/productregistration'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/join/ereceipt'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://ca.oakley.com/en/login'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://ca.oakley.com/en/my-account/profile'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='http://ca.oakley.com/en/preferences/customer?email=[EMAIL]'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '45':try{c[45]|=(d['dom.domain'].toString().toLowerCase().indexOf('www.oakleyvault.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '48':try{c[48]|=(d['dom.url'].toString().indexOf('www.oakley.com/en/one-obsession')>-1)}catch(e){utag.DB(e)}; break;
case '49':try{c[49]|=(d['dom.url'].toString().indexOf('/cart/registered_receipt/')>-1)||(d['dom.url'].toString().indexOf('/cart/guest_receipt/')>-1)||(d['dom.url'].toString().indexOf('/checkout/orderConfirmation/')>-1)}catch(e){utag.DB(e)}; break;
case '5':try{c[5]|=(d['dom.url'].toString().indexOf('au.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('store-au.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '57':try{c[57]|=(d['dom.url'].toString().toLowerCase().indexOf('au.oakley.com/'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '58':try{c[58]|=(d['dom.domain']=='oakley.com')||(d['dom.domain']=='www.oakley.com')||(d['dom.url'].toString().indexOf('http://register.oakley.com')>-1)}catch(e){utag.DB(e)}; break;
case '59':try{c[59]|=(d['dom.pathname'].toString().indexOf('one-obsession')>-1)}catch(e){utag.DB(e)}; break;
case '69':try{c[69]|=(d['dom.domain']=='de.oakley.com')}catch(e){utag.DB(e)}; break;
case '70':try{c[70]|=(d['dom.domain']=='it.oakley.com')}catch(e){utag.DB(e)}; break;
case '71':try{c[71]|=(d['dom.domain']=='uk.oakley.com')}catch(e){utag.DB(e)}; break;
case '72':try{c[72]|=(d['dom.domain']=='fr.oakley.com')}catch(e){utag.DB(e)}; break;
case '73':try{c[73]|=(d['dom.domain']=='no.oakley.com')}catch(e){utag.DB(e)}; break;
case '74':try{c[74]|=(d['dom.domain']=='au.oakley.com')}catch(e){utag.DB(e)}; break;
case '76':try{c[76]|=(typeof d['cp.OBO']!='undefined'&&typeof d['cp.OBO']!='undefined'&&d['cp.OBO']!='')}catch(e){utag.DB(e)}; break;
case '78':try{c[78]|=(d['dom.url'].toString().indexOf('oakley.com/en/one-obsession/eric-koston')>-1)}catch(e){utag.DB(e)}; break;
case '79':try{c[79]|=(typeof d['cp.OBO_Eric_Koston']!='undefined'&&typeof d['cp.OBO_Eric_Koston']!='undefined'&&d['cp.OBO_Eric_Koston']!='')}catch(e){utag.DB(e)}; break;
case '8':try{c[8]|=(d['dom.url'].toString().indexOf('jp.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('japan.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '80':try{c[80]|=(d['dom.url'].toString().indexOf('at.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-at.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '81':try{c[81]|=(d['dom.url'].toString().indexOf('be.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-be.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '82':try{c[82]|=(d['dom.url'].toString().indexOf('ie.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-ie.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '83':try{c[83]|=(d['dom.url'].toString().indexOf('lu.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-lu.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '84':try{c[84]|=(d['dom.url'].toString().indexOf('nl.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-nl.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '85':try{c[85]|=(d['dom.url'].toString().indexOf('pl.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-pl.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '86':try{c[86]|=(d['dom.url'].toString().indexOf('pt.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-pt.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '87':try{c[87]|=(d['dom.domain'].toString().toLowerCase().indexOf('hyb-pre-prod'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('oakleyamp-dev.co'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('http://oakley-1135340342.us-west-1.elb.amazonaws.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('192.168.218.66:9080'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('192.168.218.66:9080'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('oakleyamp.co'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '89':try{c[89]|=(d['dom.domain']=='ca.oakley.com')}catch(e){utag.DB(e)}; break;
case '9':try{c[9]|=(d['dom.url'].toString().indexOf('uk.oakley.com/')>-1)||(d['dom.url'].toString().indexOf('en-uk.oakley.com/')>-1)}catch(e){utag.DB(e)}; break;
case '97':try{c[97]|=(d['dom.url'].toString().toLowerCase().indexOf('hyb-dev3-www.oakley.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){ try{ if(1){try{b['product_upc']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_upc)}catch(e){};try{b['product_brand']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_brand)}catch(e){};try{b['product_category']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_category)}catch(e){};try{b['product_discount']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_discount)}catch(e){};try{b['product_id']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_id)}catch(e){};try{b['product_line_discount']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_line_discount)}catch(e){};try{b['product_line_total']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_line_total)}catch(e){};try{b['product_name']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_name)}catch(e){};try{b['product_quantity']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_quantity)}catch(e){};try{b['product_unit_price']=(function (variable) { 	if (variable != null) { 		if (Object.prototype.toString.call(variable) === "[object Array]") { 			for(var a = 0; a < variable.length; a++) { 				var temp = variable[a].replace(";", " ").trim(); 				variable[a] = temp; 			} 		} else if (typeof variable === "string") { 			variable = variable.replace(";", " ").trim(); 		} 		 		return variable; 	} })(utag_data.product_unit_price)}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
if(b.page_name=="Homepage"){
  for(var i=0;i<b.real_estate.length;i++){
    var ind = typeof ind!='undefined'?ind:i;
    if(b.real_estate[ind].indexOf('homepageLargeBanner')>-1){
      b.real_estate.splice(ind,1)
	ind=ind
	  }
  }
  re_data = []
  data = jQuery('.banner-container.flex-active-slide').children().find('.tealium-utag-data');
  re_data.push(data.attr('data-tealium-utag-data-real_estate_location'));
  re_data.push(data.attr('data-tealium-utag-data-real_estate_position'));
  re_data.push(data.attr('data-tealium-utag-data-real_estate_name'));
  b.real_estate.push(re_data.join('-_-'));
  
  jQuery('li.banner').on('click',function(e){
    var re_data = [];
    data = jQuery('.banner-container.flex-active-slide').children().find('.tealium-utag-data');
    re_data.push(data.attr('data-tealium-utag-data-real_estate_location'));
    re_data.push(data.attr('data-tealium-utag-data-real_estate_position'));
    re_data.push(data.attr('data-tealium-utag-data-real_estate_name'));
    real_estate = re_data.join('-_-');
    utag.link({real_estate:real_estate,homepage_banner_impression:"true"});
  })
}
},
function(a,b){ try{ if((b['event_type']=='addToCart'&&/(41-665|41-666|41-667|41-668)/.test(b['product_id']))){b['event_type']='';b['event_id']=b['product_upc'];b['event_action']='1';b['event_category']='GIFT CARD';try{b['event_points']=(b.product_quantity>1?(b.product_quantity*b.product_unit_price):b.product_unit_price.slice(0));}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
if(b.page_name=="/CART"){
b.order_subtotal = jQuery('.subtotal-price').text().replace('$','');
  quan=0;
  for(i=0;i<b.product_quantity.length;i++){
    quan = parseFloat(quan) + parseFloat(b.product_quantity[i]);
    b.cart_quantity=quan.toString();
  }
  
}
},
function(a,b){
for(var i=0; i < utag_data["product_unit_price"].length; i++) {
 utag_data.product_unit_price[i] = utag_data.product_unit_price[i].replace(/,/g, '');
}

},
function(a,b){
if(b['product_id'] && typeof b['product_id'] != "object") 
  b['product_id'] = [b['product_id']];

},
function(a,b){
if (typeof b.order_discount != "undefined" && b.order_discount != "") {
	var psum = 0;
	var parr = b.product_unit_price;
	var qarr = b.product_quantity
	for( var i = 0; i < parr.length; i++) {
		psum += parseFloat(parr[i]) * parseFloat(qarr[i]);
	}
	var pfac = psum > 0 ? parseFloat(b.order_subtotal)/parseFloat(psum) : 1;
	
	for( var i = 0; i < parr.length; i++) {
		parr[i] = (parseFloat(parr[i]) * pfac).toFixed(2)
	}

}

},
function(a,b,c,d){
  b._ccity=(typeof b['customer_city']!='undefined')?b['customer_city']:'';
  b._ccountry=(typeof b['customer_country']!='undefined')?b['customer_country']:'';
  b._ccurrency=(typeof b['site_currency']!='undefined')?b['site_currency']:'';
  b._ccustid=(typeof b['customer_id']!='undefined')?b['customer_id']:'';
  b._corder=(typeof b['order_id']!='undefined')?b['order_id']:'';
  b._cpromo='';
  b._cship=(typeof b['order_shipping']!='undefined')?b['order_shipping']:'';
  b._cstate=(typeof b['customer_state']!='undefined')?b['customer_state']:'';
  b._cstore='';
  b._csubtotal=(typeof b['order_subtotal']!='undefined')?b['order_subtotal']:'';
  b._ctax=(typeof b['order_tax']!='undefined')?b['order_tax']:'';
  b._ctotal=(typeof b['order_total']!='undefined')?b['order_total']:'';
  b._ctype='';
  b._czip=(typeof b['customer_postal_code']!='undefined')?b['customer_postal_code']:'';
  b._cprod=(typeof b['product_id']!='undefined'&&b['product_id'].length>0)?b['product_id']:[];
  b._cprodname=(typeof b['product_name']!='undefined'&&b['product_name'].length>0)?b['product_name']:[];
  b._cbrand=(typeof b['product_brand']!='undefined'&&b['product_brand'].length>0)?b['product_brand']:[];
  b._ccat=(typeof b['product_category']!='undefined'&&b['product_category'].length>0)?b['product_category']:[];
  b._ccat2=[];
  b._cquan=(typeof b['product_quantity']!='undefined'&&b['product_quantity'].length>0)?b['product_quantity']:[];
  b._cprice=(typeof b['product_unit_price']!='undefined'&&b['product_unit_price'].length>0)?b['product_unit_price']:[];
  b._csku=(typeof b['product_id']!='undefined'&&b['product_id'].length>0)?b['product_id']:[];
  b._cpdisc=(typeof b['product_discount']!='undefined'&&b['product_discount'].length>0)?b['product_discount']:[];
  if(b._cprod.length==0){b._cprod=b._csku.slice()};
  if(b._cprodname.length==0){b._cprodname=b._csku.slice()};
  function tf(a){if(a=='' || isNaN(parseFloat(a))){return a}else{return (parseFloat(a)).toFixed(2)}};
  b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};
},
function(a,b){
if(b._corder && /(41-665|41-666|41-667|41-668)/.test(b.product_id)){
    b.gift_card_upc = [];
    b.gift_card_quantity = [];
    b.gift_card_price = [];
    b.gift_card_points = [];
    b.gift_card_total = 0;
    for(var i=0;i<b._cprod.length;i++){
        if(/(41-665|41-666|41-667|41-668)/.test(b._cprod[i])){
            b.gift_card_upc.push(b.product_upc[i]);
            b.gift_card_quantity.push(b.product_quantity[i]);
            b.gift_card_price.push(b.product_unit_price[i]);
	    b.gift_card_total += parseFloat(b.product_unit_price[i])
            b.gift_card_points.push((b.product_quantity[i]>1?(b.product_quantity[i]*b.product_unit_price[i]).toFixed(2):b.product_unit_price[i]));
            b._cprod.splice(i,1);
            b._cquan.splice(i,1);
            b._cprice.splice(i,1);
        }
    }
    b.event_id = b.gift_card_upc;
    b.event_action = "2";
    b.event_category = "GIFT CARD";
    b.event_points = b.gift_card_points
    b.gift_card_total = b.gift_card_total.toFixed(2);
    b.new_order_subtotal = (parseFloat(b._ctotal)-parseFloat(b.gift_card_total)).toFixed(2);;
}
},
function(a,b){ try{ if(b['dom.pathname'].toString().indexOf('/products/')>-1||b['dom.pathname'].toString().indexOf('/custom-product/')>-1||b['page_name'].toString().indexOf('Product-Detail')>-1||b['dom.pathname'].toString().indexOf('/product/')>-1){b['_cevent']='prodview'} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'at.oakley.com/':'90355601'},{'au.oakley.com/':'90220637'},{'be.oakley.com/':'90355738'},{'ca.oakley.com/':'90220630'},{'ch.oakley.com/':'90357656'},{'de.oakley.com/':'90356286'},{'dk.oakley.com/':'90355875'},{'es.oakley.com/':'90357382'},{'fr.oakley.com/':'90356149'},{'ie.oakley.com/':'90356423'},{'in.oakley.com/':'90228121'},{'it.oakley.com/':'90356560'},{'jp.oakley.com/':'90316693'},{'lu.oakley.com/':'90356697'},{'nl.oakley.com/':'90356834'},{'no.oakley.com/':'90356971'},{'pl.oakley.com/':'90357108'},{'pt.oakley.com/':'90357245'},{'se.oakley.com/':'90357519'},{'uk.oakley.com/':'90048069'},{'japan.oakley.com/':'90316693'},{'oakleyvault.com/':'90253877'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['clientid']=c[e][f];m=true};};if(m)break};if(!m)b['clientid']='90033410';},
function(a,b){ try{ if(b['dom.pathname']=='/cart/registered_confirm/'||b['dom.pathname']=='/cart/guest_confirm/'||b['page_name']=='/CART/GUEST_CONFIRM'||b['page_name']=='/CART/REGISTERED_CONFIRM'){b['_cevent']='register'} } catch(e){ utag.DB(e) }  },
function(a,b){
        z = document.getElementsByTagName("meta");
        for (i = 0; i < z.length; i++) {
          if (z[i].getAttribute("property")=="og:image" || z[i].getAttribute("property")=="og:title"){
	    b["meta." + z[i].getAttribute("property")] = z[i].content;
	  }
        }
},
function(a,b){ try{ if(b['page_name'].toString().indexOf('PRODUCT:')>-1){b['st_page_type']='product';try{b['st_prod_name']=[b["product_name"].toString().replace('&', "")]}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_name']=='/CART'){b['st_page_type']='cart';try{b['st_prod_name']=""}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'www.oakley.com/':'Oakley'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['steelhouse_product_brand']=c[e][f];m=true};};if(m)break};if(!m)b['steelhouse_product_brand']='text';},
function(a,b){ try{ if(1){b['sh_page_category']=b['dom.viewport_height']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['page_category'];if(typeof d=='undefined')return;c=[{'100002':'Mens - Apparel'},{'100003':'Womens - Apparel'},{'100004':'Mens - Apparel'},{'100005':'Mens - Apparel'},{'100007':'Mens - Apparel'},{'100008':'Mens - Apparel'},{'100009':'Mens - Apparel'},{'100011':'Mens - Apparel'},{'100012':'Womens - Apparel'},{'100013':'Womens - Apparel'},{'100015':'Mens - Accessories'},{'100016':'Mens - Accessories'},{'100017':'Mens - Accessories'},{'100018':'Mens - Accessories'},{'100019':'Mens - Accessories'},{'100020':'Mens - Accessories'},{'100023':'Mens - Footwear'},{'100024':'Mens - Footwear'},{'100026':'Mens - Footwear'},{'100027':'Mens - Footwear'},{'100029':'Mens - Bags & Backpacks'},{'100030':'Mens - Accessories'},{'100031':'Mens - Accessories'},{'100032':'Mens - Bags & Backpacks'},{'100034':'Womens - Bags & Backpacks'},{'100096':'AFA - Other'},{'100097':'Mens - Accessories'},{'100098':'Mens - Accessories'},{'100100':'Accessories'},{'100194':'Mens - Footwear'},{'100196':'Womens - Bags & Backpacks'},{'100198':'Mens - Bags & Backpacks'},{'100201':'Womens - Apparel'},{'100210':'AFA - Other'},{'100212':'Mens - Accessories'},{'1032':'Replacement Lenses'},{'1033':'Replacement Lenses'},{'1046':'Mens - Sunglasses'},{'1047':'Womens - Sunglasses'},{'1048':'Mens - Goggles'},{'1086':'Mens - Sunglasses'},{'1087':'Mens - Sunglasses'},{'1089':'Womens - Sunglasses'},{'1090':'Womens - Sunglasses'},{'1095':'Equipment'},{'1110':'Mens - Goggles'},{'1135':'Accessories'},{'1141':'Mens - Sunglasses - Accessories'},{'1143':'Mens - Sunglasses - Accessories'},{'1144':'Mens - Sunglasses - Accessories'},{'1251':'Mens - Sunglasses'},{'1260':'Mens - Sunglasses - Limited Editions'},{'1261':'Mens - Sunglasses'},{'1262':'Mens - Sunglasses - Limited Editions'},{'1263':'Mens - Sunglasses - Limited Editions'},{'1269':'Mens - Sunglasses - Limited Editions'},{'1280':'Mens - Watches'},{'1283':'Mens - Watches'},{'1290':'Mens - Sunglasses - Limited Editions'},{'1316':'Mens - Watches'},{'1317':'Mens - Watches'},{'1329':'Mens - Watches'},{'1330':'Mens - Sunglasses'},{'1339':'Mens - Sunglasses - Limited Editions'},{'1341':'Mens - Sunglasses - Signature Series'},{'1343':'Mens - Watches'},{'1344':'Mens - Sunglasses - Limited Editions'},{'1348':'Mens - Watches'},{'1351':'Mens - Sunglasses - Limited Editions'},{'1364':'Mens - Sunglasses'},{'1374':'Womens - Sunglasses - Limited Releases'},{'1380':'Mens - Watches'},{'465':'Mens - Sunglasses - Polarized'},{'467':'Mens - Sunglasses - Sports Performance'},{'470':'Mens - Sunglasses - Accessories'},{'471':'Mens - Sunglasses - Accessories'},{'472':'Mens - Sunglasses - Accessories'},{'528':'Womens - Sunglasses'},{'531':'Womens - Sunglasses'},{'540':'Womens - Sunglasses - Accessories'},{'541':'Womens - Sunglasses - Accessories'},{'584':'Womens - Goggles'},{'670':'Mens - Goggles'},{'671':'Mens - Goggles'},{'672':'Mens - Goggles'},{'677':'Mens - Watches'},{'680':'AFA - Other'},{'688':'Optics - Other'},{'689':'Mens - Goggles - Accessories'},{'691':'Mens - Goggles - Accessories'},{'729':'Womens - Goggles - Accessories'},{'734':'Mens - Goggles - Accessories'},{'893':'Mens - Sunglasses'},{'983':'Mens - Sunglasses'},{'985':'Mens - Sunglasses'},{'986':'Womens - Sunglasses'},{'99':'Cart'},{'999':'Miscellaneous'},{'Mountain Bike':'Content - Sports - Mountain Bike'},{'accessories':'AFA'},{'account':'User Accounts'},{'action sports':'Content - Sports - Action Sports'},{'afa':'Products'},{'afaother':'AFA'},{'air + style beijing':'Content - Sports - Air + Style Beijing'},{'air style china':'Content - Sports - Air + Style Beijing'},{'air-style-china':'Content - Air + Style Beijing'},{'airbrake mx microsite':'Brand Microsites'},{'apparel':'AFA'},{'apparel-accessories-men':'Accessories'},{'archives':'Old Website Links'},{'artist':'Campaigns'},{'bags and backpacks -  backpacks':'Accessories'},{'bags and backpacks -  computer bags':'Accessories'},{'bags and backpacks -  duffel bags':'Accessories'},{'bags and backpacks -  kits & cases':'Sunglass - Accessories'},{'bags and backpacks -  purses':'Accessories'},{'baseball':'Content - Sports - Baseball'},{'be_like_no_other':'Campaigns'},{'beach volleyball':'Content - Sports - Volleyball'},{'bmx racing':'Content - Sports - BMX'},{'bmx':'Content - Sports - BMX'},{'brand microsites':'Brand Microsites'},{'brandenforcement':'Content - General'},{'browser_upgrade':'Content - General'},{'c':'Products'},{'c1030':'Mens - Apparel'},{'c1031':'Womens - Apparel - Collections'},{'c1039':'Mens - Goggles'},{'c1041':'Mens - Eyewear - Prescription'},{'c1042':'Womens - Prescription - Eyewear'},{'c1046':'Mens - Sunglasses'},{'c1047':'Womens - Sunglasses'},{'c1048':'Mens - Goggles'},{'c1049':'Womens - Goggles'},{'c1086':'Mens - Sunglasses'},{'c1087':'Mens - Sunglasses'},{'c1089':'Womens - Sunglasses'},{'c1090':'Womens - Sunglasses'},{'c1092':'Mens - Footwear'},{'c1095':'Equipment'},{'c1096':'Mens - Footwear'},{'c1110':'Mens - Goggles'},{'c1113':'Mens - Goggles - Accessories'},{'c1117':'Mens - Goggles'},{'c1128':'Electronics'},{'c1129':'Electronics'},{'c1130':'Electronics'},{'c1131':'Electronics'},{'c1132':'Accessories'},{'c1133':'Accessories'},{'c1134':'Accessories'},{'c1135':'Accessories'},{'c1136':'Womens - Electronics - Accessories'},{'c1137':'Womens - Electronics - Accessories'},{'c1138':'Womens - Electronics - Accessories'},{'c1139':'Womens - Electronics - Accessories'},{'c1140':'Accessories'},{'c1141':'Mens - Sunglasses - Accessories'},{'c1142':'Mens - Sunglasses - Accessories'},{'c1143':'Mens - Sunglasses - Accessories'},{'c1145':'Womens - Sunglasses - Accessories'},{'c1151':'Old Pages'},{'c1163':'Accessories'},{'c1191':'Mens - Eyewear - Prescription'},{'c1192':'Mens - Eyewear - Prescription'},{'c1193':'Womens - Prescription - Eyewear'},{'c1198':'Womens - Watches - Accessories'},{'c1205':'Womens - Goggles'},{'c1249':'Mens - Apparel'},{'c1250':'Womens - Apparel - Collections'},{'c1251':'Mens - Sunglasses'},{'c1252':'Accessories'},{'c1260':'Mens - Sunglasses - Limited Editions'},{'c1263':'Mens - Sunglasses - Limited Editions'},{'c1272':'Mens'},{'c1273':'Womens'},{'c1279':'Mens - Footwear'},{'c1280':'Mens - Watches'},{'c1281':'Mens - Watches'},{'c1282':'Mens - Watches'},{'c1283':'Mens - Watches'},{'c1284':'Mens - Watches'},{'c1285':'Womens - Watches'},{'c1286':'Womens - Watches'},{'c1287':'Womens - Watches'},{'c297':'Home'},{'c325':'Products'},{'c326':'Eyewear'},{'c327':'Mens - Sunglasses'},{'c328':'Mens - Sunglasses - Frame Material'},{'c329':'Mens - Sunglasses - Frame Material'},{'c330':'Mens - Sunglasses - Frame Material'},{'c457':'Products'},{'c459':'Footwear'},{'c460':'Watches'},{'c461':'Accessories'},{'c462':'Goggles'},{'c463':'Eyewear'},{'c464':'Mens - Sunglasses'},{'c465':'Mens - Sunglasses'},{'c467':'Mens - Sunglasses'},{'c469':'Sunglass - Accessories'},{'c470':'Mens - Sunglasses - Accessories'},{'c471':'Mens - Sunglasses - Accessories'},{'c472':'Mens - Sunglasses - Accessories'},{'c478':'Apparel'},{'c495':'Mens - Footwear'},{'c496':'Mens - Footwear'},{'c497':'Mens - Footwear'},{'c498':'Mens - Footwear'},{'c499':'Mens - Footwear'},{'c500':'Mens - Footwear'},{'c501':'Mens - Watches'},{'c502':'Mens - Watches'},{'c505':'Mens - Bags & Backpacks'},{'c506':'Mens - Bags & Backpacks'},{'c507':'Mens - Bags & Backpacks'},{'c508':'Mens - Bags & Backpacks'},{'c518':'Mens - Eyewear - Prescription'},{'c519':'Mens - Eyewear - Prescription'},{'c520':'Eyewear'},{'c522':'Footwear'},{'c523':'Watches'},{'c524':'Accessories'},{'c525':'Goggles'},{'c526':'Womens - Sunglasses'},{'c527':'Womens - Sunglasses'},{'c528':'Womens - Sunglasses'},{'c530':'Womens - Sunglasses'},{'c531':'Womens - Sunglasses'},{'c534':'Sunglass - Accessories'},{'c537':'Womens - Sunglasses - Frame Material'},{'c538':'Womens - Sunglasses - Frame Material'},{'c539':'Womens - Sunglasses - Frame Material'},{'c540':'Womens - Sunglasses - Accessories'},{'c541':'Womens - Sunglasses - Accessories'},{'c542':'Womens - Sunglasses - Accessories'},{'c566':'Womens - Footwear'},{'c567':'Womens - Footwear'},{'c569':'Womens - Footwear'},{'c572':'Womens - Watches'},{'c576':'Womens - Watches'},{'c577':'Womens - Bags & Backpacks'},{'c578':'Womens - Bags & Backpacks'},{'c579':'Womens - Bags & Backpacks'},{'c581':'Womens - Bags & Backpacks'},{'c584':'Womens - Goggles'},{'c585':'Womens - Goggles'},{'c586':'Womens - Goggles'},{'c591':'Womens - Prescription - Eyewear'},{'c592':'Womens - Prescription - Eyewear'},{'c670':'Mens - Goggles'},{'c671':'Mens - Goggles'},{'c672':'Mens - Goggles'},{'c677':'Mens - Watches'},{'c678':'AFA - Other'},{'c679':'AFA - Other'},{'c680':'AFA - Other'},{'c681':'AFA - Other'},{'c682':'AFA - Other'},{'c683':'AFA - Other'},{'c684':'AFA - Other'},{'c688':'Optics Other'},{'c689':'Mens - Goggles - Accessories'},{'c690':'Mens - Goggles - Accessories'},{'c691':'Mens - Goggles - Accessories'},{'c695':'Mens - Sunglasses - Sports Performance'},{'c711':'Womens - Sunglasses - Sport Performance'},{'c722':'Mens - Bags & Backpacks'},{'c726':'Womens - Bags & Backpacks'},{'c727':'AFA - Other'},{'c728':'Optics Other'},{'c729':'Womens - Goggles - Accessories'},{'c730':'Womens - Goggles - Accessories'},{'c731':'Womens - Goggles - Accessories'},{'c732':'Mens - Bags & Backpacks'},{'c733':'Womens - Bags & Backpacks'},{'c734':'Mens - Goggles - Accessories'},{'c735':'Womens - Goggles'},{'c741':'Mens - Sunglasses - Sports Performance'},{'c746':'Womens - Sunglasses - Sport Performance'},{'c771':'Electronics'},{'c773':'Electronics'},{'c893':'Mens - Sunglasses'},{'c894':'Womens - Sunglasses'},{'c902':'Electronics'},{'c903':'Electronics'},{'c904':'AFA - Other'},{'c905':'Mens - Bags & Backpacks'},{'c906':'Mens - Footwear'},{'c907':'Womens - Bags & Backpacks'},{'c936':'Womens - Footwear'},{'c968':'AFA - Other'},{'c970':'Mens - Watches'},{'c973':'Mens - Apparel'},{'c978':'Womens - Apparel - Collections'},{'c983':'Mens - Sunglasses'},{'c984':'Womens - Sunglasses'},{'c985':'Mens - Sunglasses'},{'c986':'Womens - Sunglasses'},{'campaign':'Campaigns'},{'campaigns':'Campaigns'},{'canada 2010':'Content - Sports - Canada 2010'},{'cat100000':'Mens - Footwear - Military & Industrial'},{'cat100002':'Mens - Apparel'},{'cat100003':'Womens - Apparel'},{'cat100004':'Mens - Apparel'},{'cat100005':'Mens - Apparel'},{'cat100007':'Mens - Apparel'},{'cat100008':'Mens - Apparel'},{'cat100009':'Mens - Apparel'},{'cat100011':'Mens - Apparel'},{'cat100012':'Womens - Apparel'},{'cat100013':'Womens - Apparel'},{'cat100015':'Mens - Accessories'},{'cat100016':'Mens - Accessories'},{'cat100017':'Mens - Accessories'},{'cat100018':'Mens - Accessories'},{'cat100019':'Mens - Accessories'},{'cat100020':'Mens - Accessories'},{'cat100021':'Mens - Accessories'},{'cat100022':'Mens - Footwear'},{'cat100023':'Mens - Footwear'},{'cat100024':'Mens - Footwear'},{'cat100025':'Mens - Footwear'},{'cat100026':'Mens - Footwear'},{'cat100027':'Mens - Footwear'},{'cat100028':'Mens - Bags & Backpacks'},{'cat100029':'Mens - Bags & Backpacks'},{'cat100030':'Mens - Accessories'},{'cat100031':'Mens - Accessories'},{'cat100032':'Mens - Bags & Backpacks'},{'cat100033':'Mens - Accessories'},{'cat100034':'Womens - Bags & Backpacks'},{'cat100090':'Mens - Apparel'},{'cat100094':'Womens - Apparel - Collections'},{'cat100096':'AFA - Other'},{'cat100097':'Mens - Accessories'},{'cat100098':'Mens - Accessories'},{'cat100099':'Womens - Apparel'},{'cat100100':'Accessories'},{'cat100103':'Mens - Goggles'},{'cat100116':'Mens - Apparel'},{'cat100117':'Mens - Watches'},{'cat100194':'Mens - Footwear'},{'cat100196':'Womens - Bags & Backpacks'},{'cat100198':'Mens - Bags & Backpacks'},{'cat100200':'AFA - Other'},{'cat100201':'Womens - Apparel'},{'cat100202':'Mens - Apparel - Boardshorts'},{'cat100209':'Mens - Footwear'},{'cat100210':'AFA - Other'},{'cat100212':'Mens - Accessories'},{'cat100225':'Mens - Apparel'},{'cat1030':'Mens - Apparel'},{'cat1031':'Womens - Apparel - Collections'},{'cat1032':'Replacement Lenses'},{'cat1033':'Replacement Lenses'},{'cat1039':'Mens - Goggles'},{'cat1041':'Mens - Eyewear - Prescription'},{'cat1042':'Womens - Prescription - Eyewear'},{'cat1046':'Mens - Sunglasses'},{'cat1047':'Womens - Sunglasses'},{'cat1048':'Mens - Goggles'},{'cat1049':'Womens - Goggles'},{'cat1052':'Old Pages'},{'cat1055':'Old Pages'},{'cat1064':'Old Pages'},{'cat1066':'Old Pages'},{'cat1073':'Old Pages'},{'cat1080':'Old Products'},{'cat1086':'Mens - Sunglasses'},{'cat1087':'Mens - Sunglasses'},{'cat1089':'Womens - Sunglasses'},{'cat1090':'Womens - Sunglasses'},{'cat1092':'Mens - Footwear'},{'cat1095':'Equipment'},{'cat1096':'Mens - Footwear'},{'cat1110':'Mens - Goggles'},{'cat1113':'Mens - Goggles - Accessories'},{'cat1117':'Mens - Goggles'},{'cat1128':'Electronics'},{'cat1129':'Electronics'},{'cat1130':'Electronics'},{'cat1131':'Electronics'},{'cat1132':'Accessories'},{'cat1133':'Accessories'},{'cat1134':'Accessories'},{'cat1135':'Accessories'},{'cat1136':'Womens - Electronics - Accessories'},{'cat1137':'Womens - Electronics - Accessories'},{'cat1138':'Womens - Electronics - Accessories'},{'cat1139':'Womens - Electronics - Accessories'},{'cat1140':'Accessories'},{'cat1142':'Mens - Sunglasses - Accessories'},{'cat1143':'Mens - Sunglasses - Accessories'},{'cat1144':'Mens - Sunglasses - Accessories'},{'cat1145':'Womens - Sunglasses - Accessories'},{'cat1156':'Old Products'},{'cat1157':'Old Products'},{'cat1162':'Old Pages'},{'cat1163':'Accessories'},{'cat1165':'Old Pages'},{'cat1167':'Old Pages'},{'cat1170':'Old Products'},{'cat1173':'Old Products'},{'cat1178':'Old Products'},{'cat1189':'Mens - Eyewear - Prescription'},{'cat1190':'Womens - Prescription - Eyewear'},{'cat1191':'Mens - Eyewear - Prescription'},{'cat1192':'Mens - Eyewear - Prescription'},{'cat1193':'Womens - Prescription - Eyewear'},{'cat1198':'Womens - Watches - Accessories'},{'cat1201':'Womens - Watches'},{'cat1205':'Womens - Goggles'},{'cat1246':'Mens - Accessories'},{'cat1249':'Mens - Apparel'},{'cat1250':'Womens - Apparel - Collections'},{'cat1251':'Mens - Sunglasses'},{'cat1252':'Womens - Apparel - Collections'},{'cat1256':'Old Pages'},{'cat1257':'Mens - Sunglasses'},{'cat1260':'Mens - Sunglasses - Limited Editions'},{'cat1261':'Mens - Sunglasses'},{'cat1262':'Mens - Sunglasses - Limited Editions'},{'cat1263':'Mens - Sunglasses - Limited Editions'},{'cat1269':'Mens - Sunglasses - Limited Editions'},{'cat1270':'Mens - Sunglasses - Limited Editions'},{'cat1271':'Mens - Sunglasses - Limited Editions'},{'cat1272':'Mens'},{'cat1273':'Womens'},{'cat1278':'Womens - Goggles'},{'cat1279':'Mens - Footwear'},{'cat1280':'Mens - Watches'},{'cat1281':'Mens - Watches'},{'cat1282':'Mens - Watches'},{'cat1283':'Mens - Watches'},{'cat1284':'Mens - Watches'},{'cat1285':'Womens - Watches'},{'cat1286':'Womens - Watches'},{'cat1287':'Womens - Watches'},{'cat1290':'Mens - Sunglasses - Limited Editions'},{'cat1292':'Mens - Sunglasses - Limited Editions'},{'cat1297':'AFA - Other'},{'cat1298':'Mens - Watches'},{'cat1315':'Mens - Sunglasses - Active Lifestyle'},{'cat1316':'Mens - Watches'},{'cat1317':'Mens - Watches'},{'cat1320':'Mens - Sunglasses - Limited Editions'},{'cat1322':'Mens - Sunglasses - Limited Editions'},{'cat1325':'Mens - Sunglasses - Limited Editions'},{'cat1328':'Mens - Sunglasses - Limited Editions'},{'cat1329':'Mens - Watches'},{'cat1330':'Mens - Sunglasses'},{'cat1332':'Mens - Sunglasses - Limited Editions'},{'cat1335':'Mens - Sunglasses - Limited Editions'},{'cat1336':'Mens - Sunglasses - Limited Editions'},{'cat1337':'Mens - Sunglasses - Limited Editions'},{'cat1339':'Mens - Sunglasses - Limited Editions'},{'cat1340':'Mens - Sunglasses - Limited Editions'},{'cat1341':'Mens - Sunglasses - Signature Series'},{'cat1342':'Mens - Sunglasses - Limited Editions'},{'cat1343':'Mens - Watches'},{'cat1344':'Mens - Sunglasses - Limited Editions'},{'cat1345':'Mens - Watches'},{'cat1347':'Mens - Sunglasses - Limited Editions'},{'cat1348':'Mens - Watches'},{'cat1349':'Mens - Goggles - Accessories'},{'cat1351':'Mens - Sunglasses - Limited Editions'},{'cat1362':'Mens - Sunglasses'},{'cat1364':'Mens - Sunglasses'},{'cat1374':'Womens - Sunglasses - Limited Releases'},{'cat1380':'Mens - Watches'},{'cat1381':'AFA - Other'},{'cat1385':'Mens - Watches'},{'cat1386':'Mens - Watches'},{'cat327':'Mens - Sunglasses'},{'cat328':'Mens - Sunglasses - Frame Material'},{'cat329':'Mens - Sunglasses - Frame Material'},{'cat330':'Mens - Sunglasses - Frame Material'},{'cat457':'Products'},{'cat459':'Footwear'},{'cat460':'Watches'},{'cat461':'Accessories'},{'cat462':'Goggles'},{'cat463':'Eyewear'},{'cat464':'Mens - Sunglasses'},{'cat465':'Mens - Sunglasses'},{'cat467':'Mens - Sunglasses'},{'cat469':'Mens - Sunglasses - Eyewear Cases'},{'cat470':'Mens - Sunglasses - Accessories'},{'cat471':'Replacement Lenses'},{'cat472':'Mens - Sunglasses - Accessories'},{'cat478':'Apparel'},{'cat484':'Old Pages'},{'cat495':'Mens - Footwear'},{'cat496':'Mens - Footwear'},{'cat497':'Mens - Footwear'},{'cat498':'Mens - Footwear'},{'cat499':'Mens - Footwear'},{'cat500':'Mens - Footwear'},{'cat501':'Mens - Watches'},{'cat502':'Mens - Watches'},{'cat505':'Mens - Bags & Backpacks'},{'cat506':'Mens - Bags & Backpacks'},{'cat507':'Mens - Bags & Backpacks'},{'cat508':'Mens - Bags & Backpacks'},{'cat514':'Mens - Eyewear - Prescription'},{'cat518':'Mens - Eyewear - Prescription'},{'cat519':'Mens - Eyewear - Prescription'},{'cat520':'Eyewear'},{'cat522':'Footwear'},{'cat523':'Watches'},{'cat524':'Accessories'},{'cat525':'Goggles'},{'cat526':'Womens - Sunglasses'},{'cat527':'Womens - Sunglasses'},{'cat528':'Womens - Sunglasses'},{'cat530':'Womens - Sunglasses'},{'cat531':'Womens - Sunglasses'},{'cat534':'Womens - Sunglasses'},{'cat537':'Womens - Sunglasses - Frame Material'},{'cat538':'Womens - Sunglasses - Frame Material'},{'cat539':'Womens - Sunglasses - Frame Material'},{'cat540':'Womens - Sunglasses - Accessories'},{'cat541':'Replacement Lenses'},{'cat542':'Womens - Sunglasses - Accessories'},{'cat547':'Old Pages'},{'cat550':'Mens - Shorts'},{'cat554':'Old Pages'},{'cat565':'Accessories'},{'cat566':'Womens - Footwear'},{'cat567':'Womens - Footwear'},{'cat569':'Womens - Footwear'},{'cat572':'Womens - Watches'},{'cat573':'Old Pages'},{'cat576':'Womens - Watches'},{'cat577':'Womens - Bags & Backpacks'},{'cat578':'Womens - Bags & Backpacks'},{'cat579':'Womens - Bags & Backpacks'},{'cat581':'Womens - Bags & Backpacks'},{'cat584':'Womens - Goggles'},{'cat585':'Womens - Goggles'},{'cat586':'Womens - Goggles'},{'cat591':'Womens - Prescription - Eyewear'},{'cat592':'Womens - Prescription - Eyewear'},{'cat670':'Mens - Goggles'},{'cat671':'Mens - Goggles'},{'cat672':'Mens - Goggles'},{'cat677':'Mens - Watches'},{'cat678':'AFA - Other'},{'cat679':'AFA - Other'},{'cat680':'AFA - Other'},{'cat681':'AFA - Other'},{'cat682':'AFA - Other'},{'cat683':'AFA - Other'},{'cat684':'AFA - Other'},{'cat688':'Optics Other'},{'cat689':'Mens - Goggles - Accessories'},{'cat690':'Mens - Goggles - Accessories'},{'cat691':'Mens - Goggles - Accessories'},{'cat695':'Mens - Sunglasses - Sports Performance'},{'cat711':'Womens - Sunglasses - Sport Performance'},{'cat722':'Mens - Bags & Backpacks'},{'cat725':'Old Pages'},{'cat726':'Womens - Bags & Backpacks'},{'cat727':'AFA - Other'},{'cat728':'Optics Other'},{'cat729':'Womens - Goggles - Accessories'},{'cat730':'Womens - Goggles - Accessories'},{'cat731':'Womens - Goggles - Accessories'},{'cat732':'Mens - Bags & Backpacks'},{'cat733':'Womens - Bags & Backpacks'},{'cat734':'Mens - Goggles - Accessories'},{'cat735':'Womens - Goggles - Accessories'},{'cat741':'Mens - Sunglasses - Sports Performance'},{'cat746':'Womens - Sunglasses - Sport Performance'},{'cat771':'Electronics'},{'cat773':'Electronics'},{'cat825':'Old Products'},{'cat828':'Old Pages'},{'cat833':'Old Pages'},{'cat846':'Old Pages'},{'cat847':'Old Pages'},{'cat848':'Old Pages'},{'cat849':'Old Pages'},{'cat850':'Old Pages'},{'cat851':'Old Pages'},{'cat852':'Old Pages'},{'cat853':'Old Pages'},{'cat854':'Old Pages'},{'cat855':'Old Pages'},{'cat891':'Old Pages'},{'cat893':'Mens - Sunglasses'},{'cat894':'Womens - Sunglasses'},{'cat902':'Electronics'},{'cat903':'Electronics'},{'cat904':'AFA - Other'},{'cat905':'Mens - Bags & Backpacks'},{'cat906':'Mens - Footwear'},{'cat907':'Womens - Bags & Backpacks'},{'cat917':'Old Pages'},{'cat936':'Womens - Footwear'},{'cat938':'Old Pages'},{'cat940':'Old Products'},{'cat942':'Old Pages'},{'cat952':'Old Products'},{'cat968':'AFA - Other'},{'cat970':'Mens - Watches'},{'cat973':'Mens - Accessories'},{'cat978':'Womens - Apparel - Collections'},{'cat983':'Mens - Sunglasses'},{'cat984':'Womens - Sunglasses'},{'cat985':'Mens - Sunglasses'},{'cat986':'Womens - Sunglasses'},{'china 2008':'Content - Sports - China 2008'},{'col100001':'Mens - Collections'},{'col100003':'Mens - Collections'},{'col100004':'Mens - Collections'},{'col100005':'Mens - Collections'},{'col100006':'Mens - Collections'},{'col100007':'Mens - Collections'},{'col100008':'Womens - Collections'},{'col100009':'Content - Surf'},{'col100011':'Womens - Collections'},{'col100012':'Womens - Collections'},{'col100013':'Mens - Collections'},{'col100014':'Content - Golf'},{'col100015':'Mens - Collections'},{'col100016':'Mens - Collections'},{'col100017':'Content - Mountain Bike'},{'col100018':'Content - Motor Sports'},{'col100019':'Mens - Collections'},{'col100021':'Womens - Collections'},{'col100022':'Womens - Collections'},{'col100023':'Womens - Collections'},{'col100024':'Snow Collection'},{'col100025':'Content - Mountain Bike'},{'col100026':'Old Pages'},{'col100029':'Mens - Collections'},{'col100030':'Mens - Collections'},{'col100031':'Womens - Collections'},{'col100032':'Mens - Collections'},{'col100037':'Mens - Collections'},{'col100039':'Footwear'},{'col100040':'Womens - Collections'},{'col100041':'Mens - Collections'},{'col100042':'Womens - Collections'},{'col100043':'Mens - Collections'},{'col100044':'Womens - Collections'},{'col100049':'Mens - Collections'},{'col100050':'Mens - Collections'},{'col100051':'Content - General'},{'col100052':'Mens - Collections'},{'col100053':'Womens - Collections'},{'col100054':'Mens - Collections'},{'col100055':'Womens - Collections'},{'col100057':'Lifestyle Collection'},{'col100058':'Lifestyle Collection'},{'col100059':'Mens - Accessories'},{'col100061':'Mens - Collections'},{'col100062':'Mens - Collections'},{'col100064':'Mens - Apparel - Collections'},{'col100066':'Mens - Collections'},{'col100067':'Womens - Collections'},{'col100068':'Mens - Collections'},{'col100069':'Womens - Collections'},{'col100072':'Mens - Collections'},{'col100073':'Womens - Collections'},{'col100074':'Mens - Collections'},{'col100075':'Womens - Collections'},{'col100076':'Womens - Collections'},{'col100077':'Mens - Collections'},{'col100078':'Mens - Collections'},{'col100080':'Mens - Collections'},{'col100081':'Gretchen Bleiler Collection'},{'col100082':'Mens - Collections'},{'col100083':'Mens - Collections'},{'col100087':'Womens - Collections'},{'col100088':'Mens - Collections'},{'col100097':'Mens - Apparel - Jackets and Vests'},{'col100098':'Womens - Apparel - Collections'},{'col100099':'Womens - Collections'},{'col100100':'Mens - Collections'},{'col100102':'Womens - Collections'},{'col100105':'Content - General'},{'col100106':'Mens - Collections'},{'col100107':'Womens - Collections'},{'col100108':'Womens - Collections'},{'col100109':'Mens - Collections'},{'col100112':'Mens - Collections'},{'col100113':'Mens - Collections'},{'col100114':'Womens - Collections'},{'col272943':'Mens - Eyewear - Prescription'},{'col272981':'Mens'},{'col274466':'Mens - Sunglasses'},{'col275760':'Mens - Sunglasses'},{'col278434':'Mens'},{'col279169':'Old Pages'},{'col344922':'Content - Videos'},{'col375999':'Mens - Sunglasses'},{'col383843':'Mens'},{'col388398':'Mens - Sunglasses'},{'col428725':'Content - Videos'},{'col431128':'Content - Golf'},{'col431131':'Old Pages'},{'col503683':'Old Pages'},{'col623867':'Old Pages'},{'col650003':'Mens - Apparel'},{'col650004':'Mens - Goggles'},{'col650005':'Mens - Bags & Backpacks'},{'col650008':'Womens - Apparel - Collections'},{'col650009':'Womens - Goggles'},{'col650010':'Womens - Bags & Backpacks'},{'col650295':'Mens - Apparel'},{'col650296':'Mens - Goggles'},{'col650299':'Mens - Bags & Backpacks'},{'col650300':'Womens - Apparel - Collections'},{'col650301':'Womens - Goggles'},{'col650302':'Womens - Bags & Backpacks'},{'col655244':'Mens - Sunglasses'},{'col655256':'Womens - Sunglasses'},{'col655271':'Mens - Sunglasses'},{'col655283':'Womens - Sunglasses'},{'col662865':'Mens'},{'col665595':'Mens - Sunglasses'},{'col666188':'Mens - Sunglasses'},{'col666213':'Mens - Sunglasses'},{'col666214':'Mens - Sunglasses'},{'col666215':'Mens - Sunglasses'},{'col666216':'Mens - Sunglasses'},{'col666217':'Mens - Sunglasses'},{'col666218':'Mens - Sunglasses'},{'col666219':'Mens - Sunglasses'},{'col666220':'Mens - Sunglasses'},{'col666221':'Mens - Sunglasses'},{'col666222':'Mens - Sunglasses'},{'col666223':'Mens - Sunglasses'},{'col666224':'Mens - Sunglasses'},{'col666225':'Mens - Sunglasses'},{'col666226':'Mens - Sunglasses'},{'col666227':'Mens - Sunglasses'},{'col666228':'Mens - Sunglasses'},{'col666230':'Mens - Sunglasses'},{'col666231':'Mens - Sunglasses'},{'col666232':'Mens - Sunglasses'},{'col666233':'Mens - Sunglasses'},{'col666234':'Mens - Sunglasses'},{'col666235':'Mens - Sunglasses'},{'col666236':'Mens - Sunglasses'},{'col666237':'Mens - Sunglasses'},{'col666238':'Mens - Sunglasses'},{'col666239':'Mens - Sunglasses'},{'col666240':'Mens - Sunglasses'},{'col666241':'Mens - Sunglasses'},{'col666242':'Mens - Sunglasses'},{'col666319':'Womens - Sunglasses'},{'col666322':'Womens - Sunglasses'},{'col666331':'Womens - Sunglasses'},{'col667107':'Mens - Sunglasses'},{'col667133':'Mens - Sunglasses'},{'col667845':'Mens - Sunglasses'},{'col669796':'Mens - Collections'},{'col671392':'Womens - Collections'},{'col675637':'Mens - Sunglasses'},{'col676034':'Mens - Sunglasses'},{'col676113':'Mens - Sunglasses'},{'col676133':'Mens - Sunglasses'},{'col678439':'Content - General'},{'col680349':'Mens - Sunglasses'},{'col681463':'Mens - Sunglasses'},{'col682632':'Mens - Collections'},{'col682634':'Old Pages'},{'col682638':'Old Pages'},{'col682971':'Womens - Collections'},{'col691998':'Old Pages'},{'col693993':'Mens - Goggles - Limited Editions'},{'col695650':'Content - Golf'},{'col700302':'Content - General'},{'col700306':'Mens - Sunglasses - Limited Editions'},{'col701457':'Mens - Sunglasses - Limited Editions'},{'col708627':'Mens'},{'col708628':'Womens'},{'col710724':'Mens'},{'col712801':'Content - General'},{'col718695':'Mens'},{'col719034':'Mens - Sunglasses'},{'col719035':'Womens - Sunglasses'},{'col719116':'Womens - Apparel - Collections'},{'col719117':'Womens - Apparel - Collections'},{'col719118':'Womens'},{'col719119':'Womens - Apparel - Collections'},{'col719120':'Womens - Apparel - Collections'},{'col719121':'Mens - Apparel - Collections'},{'col719123':'Mens - Apparel - Collections'},{'col719124':'Mens - Apparel - Collections'},{'col719125':'Mens - Apparel - Collections'},{'col719126':'Mens - Apparel - Collections'},{'col719276':'Mens - Sunglasses - Limited Editions'},{'col719337':'Mens - Apparel - Collections'},{'col722101':'Mens - Apparel - Collections'},{'col724638':'Mens'},{'col724639':'Gretchen Bleiler Collection'},{'col725796':'Mens - Goggles - Limited Editions'},{'col726190':'Womens - Sunglasses - Limited Releases'},{'col727322':'Mens - Goggles - Limited Editions'},{'col727377':'Mens'},{'col727521':'Mens'},{'col728652':'Womens'},{'col729876':'Mens'},{'col729877':'Womens'},{'col737834':'Content - General'},{'col744360':'Mens - Sunglasses - Limited Editions'},{'col745792':'Mens - Sunglasses - Limited Editions'},{'col745823':'Mens - Sunglasses - Limited Editions'},{'col745854':'Mens - Sunglasses - Limited Editions'},{'col745888':'Mens - Sunglasses - Limited Editions'},{'col745906':'Mens - Sunglasses - Limited Editions'},{'collections':'Products'},{'community - album - photo':'Community'},{'community - album':'Community'},{'community - albums - pages':'Community'},{'community - albums - photo':'Community'},{'community - albums':'Community'},{'community - archives':'Community'},{'community - article':'Community'},{'community - events - rolling-o':'Community'},{'community - events - rolling-o-eu':'Community'},{'community - events':'Community'},{'community - hotlist':'Community'},{'community - news':'Community'},{'community - o lab europe':'Community'},{'community - o lab north america':'Community'},{'community - olab':'Community'},{'community - posts':'Community'},{'community - rolling o lab north america':'Community'},{'community - video':'Community'},{'community - videos - category - athletes - page':'Community'},{'community - videos - category - commercials - page':'Community'},{'community - videos - category - mountain-bike - page':'Community'},{'community - videos - category - products - page':'Community'},{'community - videos - category - skate - page':'Community'},{'community - videos - category - ski - page':'Community'},{'community - videos - category - snowboard - page':'Community'},{'community - videos - category - surf - page':'Community'},{'community - videos - category - wake - page':'Community'},{'community - videos - category - women - page':'Community'},{'community - videos - category':'Community'},{'community - videos - page':'Community'},{'community - videos':'Community'},{'community':'Community'},{'cricket':'Content - Sports - Cricket'},{'custom-':'Custom - Sunglasses'},{'custom--backpacks':'Custom - Backpacks'},{'custom':'Custom - Sunglasses'},{'custom-apparel accesories':'Cusrom - Apparel - Accessories'},{'custom-apparel accessories':'Cusrom - Apparel - Accessories'},{'custom-apparel':'Apparel'},{'custom-backpacks':'Accessories'},{'custom-goggles':'Goggles'},{'custom-sunglass/goggle accessories':'Custom - Sunglass - Accessories'},{'custom-sunglassaccessories':'Sunglass - Accessories'},{'custom-sunglasses':'Eyewear'},{'custom-watches':'Watches'},{'customerservice':'Customer Service'},{'cycling':'Content - Sports - Cycling'},{'dealer':'Support Pages/Dealer Locator'},{'dealer_results':'Support Pages/Dealer Locator'},{'discounts':'Enter Oakley Vault'},{'electronics - lifestyle - sunglasses':'Electronics'},{'electronics - sport':'Electronics'},{'electronics':'Optics'},{'elite':'Campaigns'},{'elite_assault_boot':'Elite Collection'},{'elite_csix':'Elite Collection'},{'elite_pitboss':'Elite Collection'},{'elite_time_bomb_ii':'Elite Collection'},{'equipment':'Optics'},{'error':'Error'},{'errors':'Error'},{'eurotrip':'Campaigns'},{'eyewear':'Optics'},{'fishing':'Content - Sports - Cycling'},{'fmx':'Content - Sports - FMX'},{'footwear - Golf':'Footwear'},{'footwear - military / duty':'Footwear'},{'footwear - motorsports':'Footwear'},{'footwear - outdoor performance':'Footwear'},{'footwear - sandals':'Footwear'},{'footwear':'AFA'},{'freestyle.ch':'Content - Sports - Freestylech'},{'fuel tv':'Content - Sports - FuelTV'},{'generalcontent':'General Content'},{'genericcollections':'Collections'},{'gglgm07':'Campaigns'},{'goggles - dirt':'Goggles'},{'goggles - snow':'Goggles'},{'goggles':'Optics'},{'golf microsite':'Brand Microsites'},{'golf':'Content - Sports - Golf'},{'hdo3d':'Innovation'},{'hockey':'Content - Sports - Hockey'},{'holiday-gift-guide':'Campaigns'},{'inapparel':'Innovation'},{'indesign':'Innovation'},{'indycar series':'Content - Sports - Indycar'},{'inelectronics':'Innovation'},{'infootwear':'Innovation'},{'inhistory':'Innovation'},{'innovation':'Innovation'},{'inwatches':'Innovation'},{'iphone':'Content - General'},{'ironman world championship - kona':'Content - Sports - Ironmanknoa'},{'karting':'Content - Sports - Karting'},{'l272943':'Mens - Eyewear - Prescription'},{'l272981':'Mens'},{'l274466':'Mens - Sunglasses'},{'l275760':'Mens - Sunglasses'},{'l278434':'Mens'},{'l344922':'Content - Videos'},{'l375999':'Mens - Sunglasses'},{'l383843':'Mens'},{'l388398':'Mens - Sunglasses'},{'l428725':'Content - Videos'},{'l650003':'Mens - Apparel'},{'l650004':'Mens - Goggles'},{'l650005':'Mens - Bags & Backpacks'},{'l650008':'Womens - Apparel - Collections'},{'l650009':'Womens - Goggles'},{'l650010':'Womens - Bags & Backpacks'},{'l650295':'Mens - Apparel'},{'l650296':'Mens - Goggles'},{'l650299':'Mens - Bags & Backpacks'},{'l650300':'Womens - Apparel - Collections'},{'l650301':'Womens - Goggles'},{'l650302':'Womens - Bags & Backpacks'},{'l655244':'Mens - Sunglasses'},{'l655256':'Womens - Sunglasses'},{'l655271':'Mens - Sunglasses'},{'l655283':'Womens - Sunglasses'},{'l662865':'Mens'},{'l665595':'Mens - Sunglasses'},{'l666188':'Mens - Sunglasses'},{'l666213':'Mens - Sunglasses'},{'l666214':'Mens - Sunglasses'},{'l666215':'Mens - Sunglasses'},{'l666216':'Mens - Sunglasses'},{'l666217':'Mens - Sunglasses'},{'l666218':'Mens - Sunglasses'},{'l666219':'Mens - Sunglasses'},{'l666220':'Mens - Sunglasses'},{'l666221':'Mens - Sunglasses'},{'l666222':'Mens - Sunglasses'},{'l666223':'Mens - Sunglasses'},{'l666224':'Mens - Sunglasses'},{'l666225':'Mens - Sunglasses'},{'l666226':'Mens - Sunglasses'},{'l666227':'Mens - Sunglasses'},{'l666228':'Mens - Sunglasses'},{'l666230':'Mens - Sunglasses'},{'l666231':'Mens - Sunglasses'},{'l666232':'Mens - Sunglasses'},{'l666233':'Mens - Sunglasses'},{'l666234':'Mens - Sunglasses'},{'l666235':'Mens - Sunglasses'},{'l666236':'Mens - Sunglasses'},{'l666237':'Mens - Sunglasses'},{'l666238':'Mens - Sunglasses'},{'l666239':'Mens - Sunglasses'},{'l666240':'Mens - Sunglasses'},{'l666241':'Mens - Sunglasses'},{'l666242':'Mens - Sunglasses'},{'l666319':'Womens - Sunglasses'},{'l666322':'Womens - Sunglasses'},{'l666331':'Womens - Sunglasses'},{'l667107':'Mens - Sunglasses'},{'l667133':'Mens - Sunglasses'},{'l667845':'Mens - Sunglasses'},{'l675637':'Mens - Sunglasses'},{'l676034':'Mens - Sunglasses'},{'l676113':'Mens - Sunglasses'},{'l676133':'Mens - Sunglasses'},{'l680349':'Mens - Sunglasses'},{'l681463':'Mens - Sunglasses'},{'l693993':'Mens - Goggles - Limited Editions'},{'l700306':'Mens - Sunglasses - Limited Editions'},{'l701457':'Mens - Sunglasses - Limited Editions'},{'l708627':'Mens'},{'l708628':'Womens'},{'l710724':'Mens'},{'l718695':'Mens'},{'l719034':'Mens - Sunglasses'},{'l719035':'Womens - Sunglasses'},{'l719116':'Womens - Apparel - Collections'},{'l719117':'Womens - Apparel - Collections'},{'l719118':'Womens'},{'l719119':'Womens - Apparel - Collections'},{'l719120':'Womens - Apparel - Collections'},{'l719121':'Mens - Apparel - Collections'},{'l719123':'Mens - Apparel - Collections'},{'l719124':'Mens - Apparel - Collections'},{'l719125':'Mens - Apparel - Collections'},{'l719126':'Mens - Apparel - Collections'},{'l719276':'Mens - Sunglasses - Limited Editions'},{'l719337':'Mens - Apparel - Collections'},{'l722101':'Mens - Apparel - Collections'},{'l724638':'Mens'},{'l724639':'Gretchen Bleiler Collection'},{'l725796':'Mens - Goggles - Limited Editions'},{'l726190':'Womens - Sunglasses - Limited Releases'},{'l727322':'Mens - Goggles - Limited Editions'},{'l727377':'Mens'},{'l727521':'Mens'},{'l728652':'Womens'},{'l729876':'Mens'},{'l729877':'Womens'},{'l732398':'Campaigns'},{'landing-marketing':'Products'},{'learn to ride':'Content - Sports - LEARNTORIDE'},{'lookbook-women':'Womens - Homepage - Store'},{'men_store_home':'Products'},{'mens apparel - boardshorts':'Mens - Apparel - Boardshorts'},{'mens apparel - collections':'Mens - Apparel'},{'menscollections':'Collections'},{'missing page':'Page Not Found'},{'motogp':'Content - Sports - MotoGP'},{'motor sports':'Content - Sports - Motor Sports'},{'mx':'Content - Sports - MX'},{'mxgoggle':'Mens - Goggles'},{'nascar':'Content - Sports - NASCAR'},{'nhra':'Content - Sports - NHRA'},{'numbered':'Campaigns'},{'off road racing':'Content - Sports - Off Road Racing'},{'ohyeah':'Campaigns'},{'old':'Old Website Links'},{'oldpages':'Old Website Links'},{'oldproducts':'Old Website Links'},{'opticalsuperiority':'Innovation'},{'optics':'Products'},{'opticsother':'Optics'},{'orderstatus':'Order Status'},{'orokrpro':'Campaigns'},{'osframe':'Innovation'},{'oshdo':'Innovation'},{'oshdodefined':'Innovation'},{'oshdoproven':'Innovation'},{'oshdotestimonials':'Innovation'},{'oshydro':'Innovation'},{'osimpact':'Innovation'},{'oslenstints':'Innovation'},{'osphotochromic':'Innovation'},{'ospolarized':'Innovation'},{'osrx':'Innovation'},{'osuv':'Innovation'},{'peace-chaos':'Campaigns'},{'performance sports':'Content - Sports - Performance Sports'},{'performance_defined':'Campaigns'},{'performancesport':'Content - Performance Sports'},{'products microsite':'Brand Microsites'},{'products':'Products'},{'profile':'Content - General'},{'rally racing':'Content - Sports - Rally Racing'},{'redshift':'Campaigns'},{'reinvent':'Campaigns'},{'replacementlenses':'Optics'},{'rxframes':'Optics'},{'rxlenses':'Optics'},{'sailing':'Content - Sports - Sailing'},{'search':'Product Search'},{'skate':'Content - Sports - Skate'},{'ski':'Content - Sports - Ski'},{'snowboard':'Content - Sports - Snowboard'},{'snowmobiling':'Content - Sports - Snowmobiling'},{'snowyakkers':'Campaigns'},{'sport - tdf - albums - pages':'Content - TDF'},{'sports - action sports  - teams':'Content - Sports - Action Sports'},{'sports - action sports - album - pages':'Content - Action Sports'},{'sports - action sports - album - photo':'Content - Action Sports'},{'sports - action sports - album':'Content - Action Sports'},{'sports - action sports - albums - photos':'Content - Action Sports'},{'sports - action sports - albums':'Content - Sports - Action Sports'},{'sports - action sports - archives':'Content - Sports - Action Sports'},{'sports - action sports - article':'Content - Sports - Action Sports'},{'sports - action sports - athlete':'Content - Action Sports'},{'sports - action sports - athletes - album - photos':'Content - Action Sports'},{'sports - action sports - athletes - albums':'Content - Action Sports'},{'sports - action sports - athletes - archives':'Content - Action Sports'},{'sports - action sports - athletes - posts':'Content - Action Sports'},{'sports - action sports - events':'Content - Sports - Action Sports'},{'sports - action sports - pages':'Content - Sports - Action Sports'},{'sports - action sports - posts':'Content - Sports - Action Sports'},{'sports - action sports - teams - athletes':'Content - Action Sports'},{'sports - action sports - video':'Content - Action Sports'},{'sports - action sports - videos':'Content - Sports - Action Sports'},{'sports - action sports':'Content - Sports'},{'sports - actionsports - albums - pages':'Content - Action Sports'},{'sports - actionsports - pages':'Content - Action Sports'},{'sports - actionsports':'Content - Sports - Action Sports'},{'sports - air + style beijing  - teams':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - album - pages':'Content - Air + Style Beijing'},{'sports - air + style beijing - album - photo':'Content - Air + Style Beijing'},{'sports - air + style beijing - album':'Content - Air + Style Beijing'},{'sports - air + style beijing - albums - photos':'Content - Air + Style Beijing'},{'sports - air + style beijing - albums':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - archives':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - article':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - athlete':'Content - Air + Style Beijing'},{'sports - air + style beijing - athletes - album - photos':'Content - Air + Style Beijing'},{'sports - air + style beijing - athletes - albums':'Content - Air + Style Beijing'},{'sports - air + style beijing - athletes - archives':'Content - Air + Style Beijing'},{'sports - air + style beijing - athletes - posts':'Content - Air + Style Beijing'},{'sports - air + style beijing - events':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - pages':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - posts':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing - teams - athletes':'Content - Air + Style Beijing'},{'sports - air + style beijing - video':'Content - Air + Style Beijing'},{'sports - air + style beijing - videos':'Content - Sports - Air + Style Beijing'},{'sports - air + style beijing':'Content - Sports'},{'sports - air-style-china - pages':'Content - Air + Style Beijing'},{'sports - air-style-china':'Content - Sports - Air + Style Beijing'},{'sports - baseball  - teams':'Content - Sports - Baseball'},{'sports - baseball - album - pages':'Content - Baseball'},{'sports - baseball - album - photo':'Content - Baseball'},{'sports - baseball - album':'Content - Baseball'},{'sports - baseball - albums - pages':'Content - Baseball'},{'sports - baseball - albums - photos':'Content - Baseball'},{'sports - baseball - albums':'Content - Sports - Baseball'},{'sports - baseball - archives':'Content - Sports - Baseball'},{'sports - baseball - article':'Content - Sports - Baseball'},{'sports - baseball - athlete':'Content - Baseball'},{'sports - baseball - athletes - album - photos':'Content - Baseball'},{'sports - baseball - athletes - albums':'Content - Baseball'},{'sports - baseball - athletes - archives':'Content - Baseball'},{'sports - baseball - athletes - posts':'Content - Baseball'},{'sports - baseball - events':'Content - Sports - Baseball'},{'sports - baseball - pages':'Content - Sports - Baseball'},{'sports - baseball - posts':'Content - Sports - Baseball'},{'sports - baseball - teams - athletes':'Content - Baseball'},{'sports - baseball - videos':'Content - Sports - Baseball'},{'sports - baseball':'Content - Sports'},{'sports - beach volleyball  - teams':'Content - Sports - Volleyball'},{'sports - beach volleyball - album - pages':'Content - Volleyball'},{'sports - beach volleyball - album - photo':'Content - Volleyball'},{'sports - beach volleyball - album':'Content - Volleyball'},{'sports - beach volleyball - albums - pages':'Content - Volleyball'},{'sports - beach volleyball - albums - photos':'Content - Volleyball'},{'sports - beach volleyball - albums':'Content - Sports - Volleyball'},{'sports - beach volleyball - archives':'Content - Sports - Volleyball'},{'sports - beach volleyball - article':'Content - Sports - Volleyball'},{'sports - beach volleyball - athlete':'Content - Volleyball'},{'sports - beach volleyball - athletes - album - photos':'Content - Volleyball'},{'sports - beach volleyball - athletes - albums':'Content - Volleyball'},{'sports - beach volleyball - athletes - archives':'Content - Volleyball'},{'sports - beach volleyball - athletes - posts':'Content - Volleyball'},{'sports - beach volleyball - events':'Content - Sports - Volleyball'},{'sports - beach volleyball - pages':'Content - Sports - Volleyball'},{'sports - beach volleyball - posts':'Content - Sports - Volleyball'},{'sports - beach volleyball - teams - athletes':'Content - Volleyball'},{'sports - beach volleyball - video':'Content - Volleyball'},{'sports - beach volleyball - videos':'Content - Sports - Volleyball'},{'sports - beach volleyball':'Content - Sports'},{'sports - beach-volleyball - athletes - posts':'Content - Volleyball'},{'sports - beach-volleyball - pages':'Content - Volleyball'},{'sports - bmx  - teams':'Content - Sports - BMX'},{'sports - bmx - album - pages':'Content - BMX'},{'sports - bmx - album - photo':'Content - BMX'},{'sports - bmx - album':'Content - BMX'},{'sports - bmx - albums - photos':'Content - BMX'},{'sports - bmx - albums':'Content - Sports - BMX'},{'sports - bmx - archives':'Content - Sports - BMX'},{'sports - bmx - article':'Content - Sports - BMX'},{'sports - bmx - athlete':'Content - BMX'},{'sports - bmx - athletes - album - photos':'Content - BMX'},{'sports - bmx - athletes - albums':'Content - BMX'},{'sports - bmx - athletes - archives':'Content - BMX'},{'sports - bmx - athletes - posts':'Content - BMX'},{'sports - bmx - events':'Content - Sports - BMX'},{'sports - bmx - pages':'Content - Sports - BMX'},{'sports - bmx - posts':'Content - Sports - BMX'},{'sports - bmx - teams - athletes':'Content - BMX'},{'sports - bmx - videos':'Content - Sports - BMX'},{'sports - bmx racing  - teams':'Content - Sports - BMX'},{'sports - bmx racing - album - pages':'Content - BMX'},{'sports - bmx racing - album - photo':'Content - BMX'},{'sports - bmx racing - album':'Content - BMX'},{'sports - bmx racing - albums - photos':'Content - BMX'},{'sports - bmx racing - albums':'Content - Sports - BMX'},{'sports - bmx racing - archives':'Content - Sports - BMX'},{'sports - bmx racing - article':'Content - Sports - BMX'},{'sports - bmx racing - athlete':'Content - BMX'},{'sports - bmx racing - athletes - album - photos':'Content - BMX'},{'sports - bmx racing - athletes - albums':'Content - BMX'},{'sports - bmx racing - athletes - archives':'Content - BMX'},{'sports - bmx racing - athletes - posts':'Content - BMX'},{'sports - bmx racing - events':'Content - Sports - BMX'},{'sports - bmx racing - pages':'Content - Sports - BMX'},{'sports - bmx racing - posts':'Content - Sports - BMX'},{'sports - bmx racing - teams - athletes':'Content - BMX'},{'sports - bmx racing - videos':'Content - Sports - BMX'},{'sports - bmx racing':'Content - Sports'},{'sports - bmx':'Content - Sports'},{'sports - bmxracing':'Content - BMX'},{'sports - canada 2010  - teams':'Content - Sports - Canada 2010'},{'sports - canada 2010 - album - pages':'Content - Canada 2010'},{'sports - canada 2010 - album - photo':'Content - Canada 2010'},{'sports - canada 2010 - album':'Content - Canada 2010'},{'sports - canada 2010 - albums - photos':'Content - Canada 2010'},{'sports - canada 2010 - albums':'Content - Sports - Canada 2010'},{'sports - canada 2010 - archives':'Content - Sports - Canada 2010'},{'sports - canada 2010 - article':'Content - Sports - Canada 2010'},{'sports - canada 2010 - athlete':'Content - Canada 2010'},{'sports - canada 2010 - athletes - album - photos':'Content - Canada 2010'},{'sports - canada 2010 - athletes - albums':'Content - Canada 2010'},{'sports - canada 2010 - athletes - archives':'Content - Canada 2010'},{'sports - canada 2010 - athletes - posts':'Content - Canada 2010'},{'sports - canada 2010 - events':'Content - Sports - Canada 2010'},{'sports - canada 2010 - pages':'Content - Sports - Canada 2010'},{'sports - canada 2010 - posts':'Content - Sports - Canada 2010'},{'sports - canada 2010 - teams - athletes':'Content - Canada 2010'},{'sports - canada 2010 - videos':'Content - Sports - Canada-2010'},{'sports - canada 2010':'Content - Sports'},{'sports - china 2008  - teams':'Content - Sports - China 2008'},{'sports - china 2008 - album - pages':'Content - China 2008'},{'sports - china 2008 - album - photo':'Content - China 2008'},{'sports - china 2008 - album':'Content - China 2008'},{'sports - china 2008 - albums - photos':'Content - China 2008'},{'sports - china 2008 - albums':'Content - Sports - China 2008'},{'sports - china 2008 - archives':'Content - Sports - China 2008'},{'sports - china 2008 - article':'Content - Sports - China 2008'},{'sports - china 2008 - athlete':'Content - China 2008'},{'sports - china 2008 - athletes - album - photos':'Content - China 2008'},{'sports - china 2008 - athletes - albums':'Content - China 2008'},{'sports - china 2008 - athletes - archives':'Content - China 2008'},{'sports - china 2008 - athletes - posts':'Content - China 2008'},{'sports - china 2008 - events':'Content - Sports - China 2008'},{'sports - china 2008 - pages':'Content - Sports - China 2008'},{'sports - china 2008 - posts':'Content - Sports - China 2008'},{'sports - china 2008 - teams - athletes':'Content - China 2008'},{'sports - china 2008 - videos':'Content - Sports - China 2008'},{'sports - china 2008':'Content - Sports'},{'sports - cricket  - teams':'Content - Sports - Cricket'},{'sports - cricket - album - pages':'Content - Cricket'},{'sports - cricket - album - photo':'Content - Cricket'},{'sports - cricket - album':'Content - Cricket'},{'sports - cricket - albums - photos':'Content - Cricket'},{'sports - cricket - albums':'Content - Sports - Cricket'},{'sports - cricket - archives':'Content - Sports - Cricket'},{'sports - cricket - article':'Content - Sports - Cricket'},{'sports - cricket - athlete':'Content - Cricket'},{'sports - cricket - athletes - album - photos':'Content - Cricket'},{'sports - cricket - athletes - albums':'Content - Cricket'},{'sports - cricket - athletes - archives':'Content - Cricket'},{'sports - cricket - athletes - posts':'Content - Cricket'},{'sports - cricket - events':'Content - Sports - Cricket'},{'sports - cricket - pages':'Content - Sports - Cricket'},{'sports - cricket - posts':'Content - Sports - Cricket'},{'sports - cricket - teams - athletes':'Content - Cricket'},{'sports - cricket - videos':'Content - Sports - Cricket'},{'sports - cricket':'Content - Sports'},{'sports - cycling  - teams':'Content - Sports - Cycling'},{'sports - cycling - album - pages':'Content - Cycling'},{'sports - cycling - album - photo':'Content - Cycling'},{'sports - cycling - album':'Content - Cycling'},{'sports - cycling - albums - photos':'Content - Cycling'},{'sports - cycling - albums':'Content - Sports - Cycling'},{'sports - cycling - archives':'Content - Sports - Cycling'},{'sports - cycling - article':'Content - Sports - Cycling'},{'sports - cycling - athlete':'Content - Cycling'},{'sports - cycling - athletes - album - photos':'Content - Cycling'},{'sports - cycling - athletes - albums':'Content - Cycling'},{'sports - cycling - athletes - archives':'Content - Cycling'},{'sports - cycling - athletes - posts':'Content - Cycling'},{'sports - cycling - events':'Content - Sports - Cycling'},{'sports - cycling - pages':'Content - Sports - Cycling'},{'sports - cycling - posts':'Content - Sports - Cycling'},{'sports - cycling - teams - athletes':'Content - Cycling'},{'sports - cycling - videos':'Content - Sports - Cycling'},{'sports - cycling':'Content - Sports'},{'sports - events':'Content - Sports'},{'sports - fishing  - teams':'Content - Sports - Cycling'},{'sports - fishing - album - pages':'Content - Fishing'},{'sports - fishing - album - photo':'Content - Fishing'},{'sports - fishing - album':'Content - Fishing'},{'sports - fishing - albums - photos':'Content - Fishing'},{'sports - fishing - albums':'Content - Sports - Cycling'},{'sports - fishing - archives':'Content - Sports - Cycling'},{'sports - fishing - article':'Content - Sports - Cycling'},{'sports - fishing - athlete':'Content - Fishing'},{'sports - fishing - athletes - album - photos':'Content - Fishing'},{'sports - fishing - athletes - albums':'Content - Fishing'},{'sports - fishing - athletes - archives':'Content - Fishing'},{'sports - fishing - athletes - posts':'Content - Fishing'},{'sports - fishing - events':'Content - Sports - Cycling'},{'sports - fishing - pages':'Content - Sports - Cycling'},{'sports - fishing - posts':'Content - Sports - Cycling'},{'sports - fishing - teams - athletes':'Content - Fishing'},{'sports - fishing - videos':'Content - Sports - Cycling'},{'sports - fishing':'Content - Sports'},{'sports - fmx  - teams':'Content - Sports - FMX'},{'sports - fmx - album - pages':'Content - FMX'},{'sports - fmx - album - photo':'Content - FMX'},{'sports - fmx - album':'Content - FMX'},{'sports - fmx - albums - pages':'Content - FMX'},{'sports - fmx - albums - photos':'Content - FMX'},{'sports - fmx - albums':'Content - Sports - FMX'},{'sports - fmx - archives':'Content - Sports - FMX'},{'sports - fmx - article':'Content - Sports - FMX'},{'sports - fmx - athlete':'Content - FMX'},{'sports - fmx - athletes - album - photos':'Content - FMX'},{'sports - fmx - athletes - albums':'Content - FMX'},{'sports - fmx - athletes - archives':'Content - FMX'},{'sports - fmx - athletes - posts':'Content - FMX'},{'sports - fmx - events':'Content - Sports - FMX'},{'sports - fmx - pages':'Content - Sports - FMX'},{'sports - fmx - posts':'Content - Sports - FMX'},{'sports - fmx - teams - athletes':'Content - FMX'},{'sports - fmx - videos':'Content - Sports - FMX'},{'sports - fmx':'Content - Sports'},{'sports - freestyle.ch - album - photo':'Content - Freestylech'},{'sports - freestyle.ch - album':'Content - Freestylech'},{'sports - freestyle.ch - article':'Content - Freestylech'},{'sports - freestyle.ch - athlete':'Content - Freestylech'},{'sports - freestyle.ch - events':'Content - Freestylech'},{'sports - freestyle.ch - video':'Content - Freestylech'},{'sports - freestyle.ch - videos':'Content - Freestylech'},{'sports - freestylech  - teams':'Content - Sports - Freestylech'},{'sports - freestylech - album - pages':'Content - Freestylech'},{'sports - freestylech - album - photo':'Content - Freestylech'},{'sports - freestylech - album':'Content - Freestylech'},{'sports - freestylech - albums - photos':'Content - Freestylech'},{'sports - freestylech - albums':'Content - Sports - Freestylech'},{'sports - freestylech - archives':'Content - Sports - Freestylech'},{'sports - freestylech - article':'Content - Sports - Freestylech'},{'sports - freestylech - athlete':'Content - Freestylech'},{'sports - freestylech - athletes - album - photos':'Content - Freestylech'},{'sports - freestylech - athletes - albums':'Content - Freestylech'},{'sports - freestylech - athletes - archives':'Content - Freestylech'},{'sports - freestylech - athletes - posts':'Content - Freestylech'},{'sports - freestylech - events':'Content - Sports - Freestylech'},{'sports - freestylech - pages':'Content - Sports - Freestylech'},{'sports - freestylech - posts':'Content - Sports - Freestylech'},{'sports - freestylech - teams - athletes':'Content - Freestylech'},{'sports - freestylech - videos':'Content - Sports - Freestylech'},{'sports - freestylech':'Content - Sports'},{'sports - fuel tv - album - photo':'Content - FuelTV'},{'sports - fuel tv - album':'Content - FuelTV'},{'sports - fuel tv - article':'Content - FuelTV'},{'sports - fuel tv - athlete':'Content - FuelTV'},{'sports - fuel tv - video':'Content - FuelTV'},{'sports - fuel tv - videos':'Content - FuelTV'},{'sports - fueltv  - teams':'Content - Sports - FuelTV'},{'sports - fueltv - album - pages':'Content - FuelTV'},{'sports - fueltv - album - photo':'Content - FuelTV'},{'sports - fueltv - album':'Content - FuelTV'},{'sports - fueltv - albums - photos':'Content - FuelTV'},{'sports - fueltv - albums':'Content - Sports - FuelTV'},{'sports - fueltv - archives':'Content - Sports - FuelTV'},{'sports - fueltv - article':'Content - Sports - FuelTV'},{'sports - fueltv - athlete':'Content - FuelTV'},{'sports - fueltv - athletes - album - photos':'Content - FuelTV'},{'sports - fueltv - athletes - albums':'Content - FuelTV'},{'sports - fueltv - athletes - archives':'Content - FuelTV'},{'sports - fueltv - athletes - posts':'Content - FuelTV'},{'sports - fueltv - events':'Content - Sports - FuelTV'},{'sports - fueltv - pages':'Content - Sports - FuelTV'},{'sports - fueltv - posts':'Content - Sports - FuelTV'},{'sports - fueltv - teams - athletes':'Content - FuelTV'},{'sports - fueltv - videos':'Content - Sports - FuelTV'},{'sports - fueltv':'Content - Sports'},{'sports - golf  - teams':'Content - Sports - Golf'},{'sports - golf - album - pages':'Content - Golf'},{'sports - golf - album - photo':'Content - Golf'},{'sports - golf - album':'Content - Golf'},{'sports - golf - albums - photos':'Content - Golf'},{'sports - golf - albums':'Content - Sports - Golf'},{'sports - golf - archives':'Content - Sports - Golf'},{'sports - golf - article':'Content - Sports - Golf'},{'sports - golf - athlete':'Content - Golf'},{'sports - golf - athletes - album - photos':'Content - Golf'},{'sports - golf - athletes - albums':'Content - Golf'},{'sports - golf - athletes - archives':'Content - Golf'},{'sports - golf - athletes - posts':'Content - Golf'},{'sports - golf - events':'Content - Sports - Golf'},{'sports - golf - pages':'Content - Sports - Golf'},{'sports - golf - posts':'Content - Sports - Golf'},{'sports - golf - teams - athletes':'Content - Golf'},{'sports - golf - videos':'Content - Sports - Golf'},{'sports - golf':'Content - Sports'},{'sports - hockey  - teams':'Content - Sports - Hockey'},{'sports - hockey - album - pages':'Content - Hockey'},{'sports - hockey - album - photo':'Content - Hockey'},{'sports - hockey - album':'Content - Hockey'},{'sports - hockey - albums - photos':'Content - Hockey'},{'sports - hockey - albums':'Content - Sports - Hockey'},{'sports - hockey - archives':'Content - Sports - Hockey'},{'sports - hockey - article':'Content - Sports - Hockey'},{'sports - hockey - athlete':'Content - Hockey'},{'sports - hockey - athletes - album - photos':'Content - Hockey'},{'sports - hockey - athletes - albums':'Content - Hockey'},{'sports - hockey - athletes - archives':'Content - Hockey'},{'sports - hockey - athletes - posts':'Content - Hockey'},{'sports - hockey - events':'Content - Sports - Hockey'},{'sports - hockey - pages':'Content - Sports - Hockey'},{'sports - hockey - posts':'Content - Sports - Hockey'},{'sports - hockey - teams - athletes':'Content - Hockey'},{'sports - hockey - video':'Content - Hockey'},{'sports - hockey - videos':'Content - Sports - Hockey'},{'sports - hockey':'Content - Sports'},{'sports - indycar  - teams':'Content - Sports - Indycar'},{'sports - indycar - album - pages':'Content - Indycar'},{'sports - indycar - album - photo':'Content - Indycar'},{'sports - indycar - album':'Content - Indycar'},{'sports - indycar - albums - photos':'Content - Indycar'},{'sports - indycar - albums':'Content - Sports - Indycar'},{'sports - indycar - archives':'Content - Sports - Indycar'},{'sports - indycar - article':'Content - Sports - Indycar'},{'sports - indycar - athlete':'Content - Indycar'},{'sports - indycar - athletes - album - photos':'Content - Indycar'},{'sports - indycar - athletes - albums':'Content - Indycar'},{'sports - indycar - athletes - archives':'Content - Indycar'},{'sports - indycar - athletes - posts':'Content - Indycar'},{'sports - indycar - events':'Content - Sports - Indycar'},{'sports - indycar - pages':'Content - Sports - Indycar'},{'sports - indycar - posts':'Content - Sports - Indycar'},{'sports - indycar - teams - athletes':'Content - Indycar'},{'sports - indycar - videos':'Content - Sports - Indycar'},{'sports - indycar series - album - photo':'Content - Indycar'},{'sports - indycar series - album':'Content - Indycar'},{'sports - indycar series - article':'Content - Indycar'},{'sports - indycar series - athlete':'Content - Indycar'},{'sports - indycar series - events':'Content - Indycar'},{'sports - indycar series - video':'Content - Indycar'},{'sports - indycar series - videos':'Content - Indycar'},{'sports - indycar':'Content - Sports'},{'sports - ironman world championship - kona - album - photo':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - album':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - article':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - athlete':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - events':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - video':'Content - Ironmanknoa'},{'sports - ironman world championship - kona - videos':'Content - Ironmanknoa'},{'sports - ironmanknoa  - teams':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - album - pages':'Content - Ironmanknoa'},{'sports - ironmanknoa - album - photo':'Content - Ironmanknoa'},{'sports - ironmanknoa - album':'Content - Ironmanknoa'},{'sports - ironmanknoa - albums - photos':'Content - Ironmanknoa'},{'sports - ironmanknoa - albums':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - archives':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - article':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - athlete':'Content - Ironmanknoa'},{'sports - ironmanknoa - athletes - album - photos':'Content - Ironmanknoa'},{'sports - ironmanknoa - athletes - albums':'Content - Ironmanknoa'},{'sports - ironmanknoa - athletes - archives':'Content - Ironmanknoa'},{'sports - ironmanknoa - athletes - posts':'Content - Ironmanknoa'},{'sports - ironmanknoa - events':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - pages':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - posts':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa - teams - athletes':'Content - Ironmanknoa'},{'sports - ironmanknoa - videos':'Content - Sports - Ironmanknoa'},{'sports - ironmanknoa':'Content - Sports'},{'sports - ironmankona':'Content - Ironmanknoa'},{'sports - karting  - teams':'Content - Sports - Karting'},{'sports - karting - album - pages':'Content - Karting'},{'sports - karting - album - photo':'Content - Karting'},{'sports - karting - album':'Content - Karting'},{'sports - karting - albums - photos':'Content - Karting'},{'sports - karting - albums':'Content - Sports - Karting'},{'sports - karting - archives':'Content - Sports - Karting'},{'sports - karting - article':'Content - Sports - Karting'},{'sports - karting - athlete':'Content - Karting'},{'sports - karting - athletes - album - photos':'Content - Karting'},{'sports - karting - athletes - albums':'Content - Karting'},{'sports - karting - athletes - archives':'Content - Karting'},{'sports - karting - athletes - posts':'Content - Karting'},{'sports - karting - events':'Content - Sports - Karting'},{'sports - karting - pages':'Content - Sports - Karting'},{'sports - karting - posts':'Content - Sports - Karting'},{'sports - karting - teams - athletes':'Content - Karting'},{'sports - karting - videos':'Content - Sports - Karting'},{'sports - karting':'Content - Sports'},{'sports - learn to ride - album - photo':'Content - LEARNTORIDE'},{'sports - learn to ride - album':'Content - LEARNTORIDE'},{'sports - learn to ride - article':'Content - LEARNTORIDE'},{'sports - learn to ride - athlete':'Content - LEARNTORIDE'},{'sports - learn to ride - events':'Content - LEARNTORIDE'},{'sports - learntoride  - teams':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - album - pages':'Content - LEARNTORIDE'},{'sports - learntoride - album - photo':'Content - LEARNTORIDE'},{'sports - learntoride - album':'Content - LEARNTORIDE'},{'sports - learntoride - albums - photos':'Content - LEARNTORIDE'},{'sports - learntoride - albums':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - archives':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - article':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - athlete':'Content - LEARNTORIDE'},{'sports - learntoride - athletes - album - photos':'Content - LEARNTORIDE'},{'sports - learntoride - athletes - albums':'Content - LEARNTORIDE'},{'sports - learntoride - athletes - archives':'Content - LEARNTORIDE'},{'sports - learntoride - athletes - posts':'Content - LEARNTORIDE'},{'sports - learntoride - events':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - pages':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - posts':'Content - Sports - LEARNTORIDE'},{'sports - learntoride - teams - athletes':'Content - LEARNTORIDE'},{'sports - learntoride - videos':'Content - Sports - LEARNTORIDE'},{'sports - learntoride':'Content - Sports'},{'sports - motogp  - teams':'Content - Sports - MotoGP'},{'sports - motogp - album - pages':'Content - MotoGP'},{'sports - motogp - album - photo':'Content - MotoGP'},{'sports - motogp - album':'Content - MotoGP'},{'sports - motogp - albums - pages':'Content - MotoGP'},{'sports - motogp - albums - photos':'Content - MotoGP'},{'sports - motogp - albums':'Content - Sports - MotoGP'},{'sports - motogp - archives':'Content - Sports - MotoGP'},{'sports - motogp - article':'Content - Sports - MotoGP'},{'sports - motogp - athlete':'Content - MotoGP'},{'sports - motogp - athletes - album - photos':'Content - MotoGP'},{'sports - motogp - athletes - albums':'Content - MotoGP'},{'sports - motogp - athletes - archives':'Content - MotoGP'},{'sports - motogp - athletes - posts':'Content - MotoGP'},{'sports - motogp - events':'Content - Sports - MotoGP'},{'sports - motogp - pages':'Content - Sports - MotoGP'},{'sports - motogp - posts':'Content - Sports - MotoGP'},{'sports - motogp - teams - athletes':'Content - MotoGP'},{'sports - motogp - videos':'Content - Sports - MotoGP'},{'sports - motogp':'Content - Sports'},{'sports - motor sports  - teams':'Content - Sports - Motor Sports'},{'sports - motor sports - album - pages':'Content - Motor Sports'},{'sports - motor sports - album - photo':'Content - Motor Sports'},{'sports - motor sports - album':'Content - Motor Sports'},{'sports - motor sports - albums - photos':'Content - Motor Sports'},{'sports - motor sports - albums':'Content - Sports - Motor Sports'},{'sports - motor sports - archives':'Content - Sports - Motor Sports'},{'sports - motor sports - article':'Content - Sports - Motor Sports'},{'sports - motor sports - athlete':'Content - Motor Sports'},{'sports - motor sports - athletes - album - photos':'Content - Motor Sports'},{'sports - motor sports - athletes - albums':'Content - Motor Sports'},{'sports - motor sports - athletes - archives':'Content - Motor Sports'},{'sports - motor sports - athletes - posts':'Content - Motor Sports'},{'sports - motor sports - events':'Content - Sports - Motor Sports'},{'sports - motor sports - pages':'Content - Sports - Motor Sports'},{'sports - motor sports - posts':'Content - Sports - Motor Sports'},{'sports - motor sports - teams - athletes':'Content - Motor Sports'},{'sports - motor sports - videos':'Content - Sports - Motor Sports'},{'sports - motor sports':'Content - Sports'},{'sports - motor-sports - albums - pages':'Content - Motor Sports'},{'sports - motor-sports - pages':'Content - Motor Sports'},{'sports - mountain bike  - teams':'Content - Sports - Mountain Bike'},{'sports - mountain bike - album - pages':'Content - Mountain Bike'},{'sports - mountain bike - album - photo':'Content - Mountain Bike'},{'sports - mountain bike - album':'Content - Mountain Bike'},{'sports - mountain bike - albums - photos':'Content - Mountain Bike'},{'sports - mountain bike - albums':'Content - Sports - Mountain Bike'},{'sports - mountain bike - archives':'Content - Sports - Mountain Bike'},{'sports - mountain bike - article':'Content - Sports - Mountain Bike'},{'sports - mountain bike - athlete':'Content - Mountain Bike'},{'sports - mountain bike - athletes - album - photos':'Content - Mountain Bike'},{'sports - mountain bike - athletes - albums':'Content - Mountain Bike'},{'sports - mountain bike - athletes - archives':'Content - Mountain Bike'},{'sports - mountain bike - athletes - posts':'Content - Mountain Bike'},{'sports - mountain bike - events':'Content - Sports - Mountain Bike'},{'sports - mountain bike - pages':'Content - Sports - Mountain Bike'},{'sports - mountain bike - posts':'Content - Sports - Mountain Bike'},{'sports - mountain bike - teams - athletes':'Content - Mountain Bike'},{'sports - mountain bike - videos':'Content - Sports - Mountain Bike'},{'sports - mountain bike':'Content - Sports'},{'sports - mtb - albums - pages':'Content - Mountain Bike'},{'sports - mtb - pages':'Content - Mountain Bike'},{'sports - mx  - teams':'Content - Sports - MX'},{'sports - mx - album - pages':'Content - MX'},{'sports - mx - album - photo':'Content - MX'},{'sports - mx - album':'Content - MX'},{'sports - mx - albums - pages':'Content - FMX'},{'sports - mx - albums - photos':'Content - MX'},{'sports - mx - albums':'Content - Sports - MX'},{'sports - mx - archives':'Content - Sports - MX'},{'sports - mx - article':'Content - Sports - MX'},{'sports - mx - athlete':'Content - MX'},{'sports - mx - athletes - album - photos':'Content - MX'},{'sports - mx - athletes - albums':'Content - MX'},{'sports - mx - athletes - archives':'Content - MX'},{'sports - mx - athletes - posts':'Content - MX'},{'sports - mx - events':'Content - Sports - MX'},{'sports - mx - pages':'Content - Sports - MX'},{'sports - mx - posts':'Content - Sports - MX'},{'sports - mx - teams - athletes':'Content - MX'},{'sports - mx - videos':'Content - Sports - MX'},{'sports - mx':'Content - Sports'},{'sports - nascar  - teams':'Content - Sports - NASCAR'},{'sports - nascar - album - pages':'Content - NASCAR'},{'sports - nascar - album - photo':'Content - NASCAR'},{'sports - nascar - album':'Content - NASCAR'},{'sports - nascar - albums - pages':'Content - NASCAR'},{'sports - nascar - albums - photos':'Content - NASCAR'},{'sports - nascar - albums':'Content - Sports - NASCAR'},{'sports - nascar - archives':'Content - Sports - NASCAR'},{'sports - nascar - article':'Content - Sports - NASCAR'},{'sports - nascar - athlete':'Content - NASCAR'},{'sports - nascar - athletes - album - photos':'Content - NASCAR'},{'sports - nascar - athletes - albums':'Content - NASCAR'},{'sports - nascar - athletes - archives':'Content - NASCAR'},{'sports - nascar - athletes - posts':'Content - NASCAR'},{'sports - nascar - events':'Content - Sports - NASCAR'},{'sports - nascar - pages':'Content - Sports - NASCAR'},{'sports - nascar - posts':'Content - Sports - NASCAR'},{'sports - nascar - teams - athletes':'Content - NASCAR'},{'sports - nascar - videos':'Content - Sports - NASCAR'},{'sports - nascar':'Content - Sports'},{'sports - nhra  - teams':'Content - Sports - NHRA'},{'sports - nhra - album - pages':'Content - NHRA'},{'sports - nhra - album - photo':'Content - NHRA'},{'sports - nhra - album':'Content - NHRA'},{'sports - nhra - albums - photos':'Content - NHRA'},{'sports - nhra - albums':'Content - Sports - NHRA'},{'sports - nhra - archives':'Content - Sports - NHRA'},{'sports - nhra - article':'Content - Sports - NHRA'},{'sports - nhra - athlete':'Content - NHRA'},{'sports - nhra - athletes - album - photos':'Content - NHRA'},{'sports - nhra - athletes - albums':'Content - NHRA'},{'sports - nhra - athletes - archives':'Content - NHRA'},{'sports - nhra - athletes - posts':'Content - NHRA'},{'sports - nhra - events':'Content - Sports - NHRA'},{'sports - nhra - pages':'Content - Sports - NHRA'},{'sports - nhra - posts':'Content - Sports - NHRA'},{'sports - nhra - teams - athletes':'Content - NHRA'},{'sports - nhra - videos':'Content - Sports - NHRA'},{'sports - nhra':'Content - Sports'},{'sports - oakley week on tdh - album - photo':'Content - TDH'},{'sports - oakley week on tdh - album':'Content - TDH'},{'sports - oakley week on tdh - article':'Content - TDH'},{'sports - oakley week on tdh - athlete':'Content - TDH'},{'sports - off road racing  - teams':'Content - Sports - Off Road Racing'},{'sports - off road racing - album - pages':'Content - Off Road Racing'},{'sports - off road racing - album - photo':'Content - Off Road Racing'},{'sports - off road racing - album':'Content - Off Road Racing'},{'sports - off road racing - albums - photos':'Content - Off Road Racing'},{'sports - off road racing - albums':'Content - Sports - Off Road Racing'},{'sports - off road racing - archives':'Content - Sports - Off Road Racing'},{'sports - off road racing - article':'Content - Sports - Off Road Racing'},{'sports - off road racing - athlete':'Content - Off Road Racing'},{'sports - off road racing - athletes - album - photos':'Content - Off Road Racing'},{'sports - off road racing - athletes - albums':'Content - Off Road Racing'},{'sports - off road racing - athletes - archives':'Content - Off Road Racing'},{'sports - off road racing - athletes - posts':'Content - Off Road Racing'},{'sports - off road racing - events':'Content - Sports - Off Road Racing'},{'sports - off road racing - pages':'Content - Sports - Off Road Racing'},{'sports - off road racing - posts':'Content - Sports - Off Road Racing'},{'sports - off road racing - teams - athletes':'Content - Off Road Racing'},{'sports - off road racing - videos':'Content - Sports - Off Road Racing'},{'sports - off road racing':'Content - Sports'},{'sports - off-road-racing - pages':'Content - Off Road Racing'},{'sports - performance sports  - teams':'Content - Sports - Performance Sports'},{'sports - performance sports - album - pages':'Content - Performance Sports'},{'sports - performance sports - album - photo':'Content - Performance Sports'},{'sports - performance sports - album':'Content - Performance Sports'},{'sports - performance sports - albums - photos':'Content - Performance Sports'},{'sports - performance sports - albums':'Content - Sports - Performance Sports'},{'sports - performance sports - archives':'Content - Sports - Performance Sports'},{'sports - performance sports - article':'Content - Sports - Performance Sports'},{'sports - performance sports - athlete':'Content - Performance Sports'},{'sports - performance sports - athletes - album - photos':'Content - Performance Sports'},{'sports - performance sports - athletes - albums':'Content - Performance Sports'},{'sports - performance sports - athletes - archives':'Content - Performance Sports'},{'sports - performance sports - athletes - posts':'Content - Performance Sports'},{'sports - performance sports - events':'Content - Sports - Performance Sports'},{'sports - performance sports - pages':'Content - Sports - Performance Sports'},{'sports - performance sports - posts':'Content - Sports - Performance Sports'},{'sports - performance sports - teams - athletes':'Content - Performance Sports'},{'sports - performance sports - video':'Content - Performance Sports'},{'sports - performance sports - videos':'Content - Sports - Performance Sports'},{'sports - performance sports':'Content - Sports'},{'sports - performancesport - albums - pages':'Content - Performance Sports'},{'sports - performancesport - pages':'Content - Performance Sports'},{'sports - performancesport':'Content - Sports - Performance Sports'},{'sports - performancesports - albums - pages':'Content - Performance Sports'},{'sports - rally racing  - teams':'Content - Sports - Rally Racing'},{'sports - rally racing - album - pages':'Content - Rally Racing'},{'sports - rally racing - album - photo':'Content - Rally Racing'},{'sports - rally racing - album':'Content - Rally Racing'},{'sports - rally racing - albums - photos':'Content - Rally Racing'},{'sports - rally racing - albums':'Content - Sports - Rally Racing'},{'sports - rally racing - archives':'Content - Sports - Rally Racing'},{'sports - rally racing - article':'Content - Sports - Rally Racing'},{'sports - rally racing - athlete':'Content - Rally Racing'},{'sports - rally racing - athletes - album - photos':'Content - Rally Racing'},{'sports - rally racing - athletes - albums':'Content - Rally Racing'},{'sports - rally racing - athletes - archives':'Content - Rally Racing'},{'sports - rally racing - athletes - posts':'Content - Rally Racing'},{'sports - rally racing - events':'Content - Sports - Rally Racing'},{'sports - rally racing - pages':'Content - Sports - Rally Racing'},{'sports - rally racing - posts':'Content - Sports - Rally Racing'},{'sports - rally racing - teams - athletes':'Content - Rally Racing'},{'sports - rally racing - video':'Content - Rally Racing'},{'sports - rally racing - videos':'Content - Sports - Rally Racing'},{'sports - rally racing':'Content - Sports'},{'sports - rally-racing - pages':'Content - Rally Racing'},{'sports - sailing  - teams':'Content - Sports - Sailing'},{'sports - sailing - album - pages':'Content - Sailing'},{'sports - sailing - album - photo':'Content - Sailing'},{'sports - sailing - album':'Content - Sailing'},{'sports - sailing - albums - photos':'Content - Sailing'},{'sports - sailing - albums':'Content - Sports - Sailing'},{'sports - sailing - archives':'Content - Sports - Sailing'},{'sports - sailing - article':'Content - Sports - Sailing'},{'sports - sailing - athlete':'Content - Sailing'},{'sports - sailing - athletes - album - photos':'Content - Sailing'},{'sports - sailing - athletes - albums':'Content - Sailing'},{'sports - sailing - athletes - archives':'Content - Sailing'},{'sports - sailing - athletes - posts':'Content - Sailing'},{'sports - sailing - events':'Content - Sports - Sailing'},{'sports - sailing - pages':'Content - Sports - Sailing'},{'sports - sailing - posts':'Content - Sports - Sailing'},{'sports - sailing - teams - athletes':'Content - Sailing'},{'sports - sailing - videos':'Content - Sports - Sailing'},{'sports - sailing':'Content - Sports'},{'sports - seth-morrision-the-ordinary-skier - pages':'Content - The Ordinary Skier'},{'sports - seth-morrision-the-ordinary-skier':'Content - The Ordinary Skier'},{'sports - skate  - teams':'Content - Sports - Skate'},{'sports - skate - album - pages':'Content - Skate'},{'sports - skate - album - photo':'Content - Skate'},{'sports - skate - album':'Content - Skate'},{'sports - skate - albums - pages':'Content - Skate'},{'sports - skate - albums - photos':'Content - Skate'},{'sports - skate - albums':'Content - Sports - Skate'},{'sports - skate - archives':'Content - Sports - Skate'},{'sports - skate - article':'Content - Sports - Skate'},{'sports - skate - athlete':'Content - Skate'},{'sports - skate - athletes - album - photos':'Content - Skate'},{'sports - skate - athletes - albums':'Content - Skate'},{'sports - skate - athletes - archives':'Content - Skate'},{'sports - skate - athletes - posts':'Content - Skate'},{'sports - skate - events':'Content - Sports - Skate'},{'sports - skate - pages':'Content - Sports - Skate'},{'sports - skate - posts':'Content - Sports - Skate'},{'sports - skate - teams - athletes':'Content - Skate'},{'sports - skate - videos':'Content - Sports - Skate'},{'sports - skate':'Content - Sports'},{'sports - ski  - teams':'Content - Sports - Ski'},{'sports - ski - album - pages':'Content - Ski'},{'sports - ski - album - photo':'Content - Ski'},{'sports - ski - album':'Content - Ski'},{'sports - ski - albums - pages':'Content - Ski'},{'sports - ski - albums - photos':'Content - Ski'},{'sports - ski - albums':'Content - Sports - Ski'},{'sports - ski - archives':'Content - Sports - Ski'},{'sports - ski - article':'Content - Sports - Ski'},{'sports - ski - athlete':'Content - Ski'},{'sports - ski - athletes - album - photos':'Content - Ski'},{'sports - ski - athletes - albums':'Content - Ski'},{'sports - ski - athletes - archives':'Content - Ski'},{'sports - ski - athletes - posts':'Content - Ski'},{'sports - ski - events':'Content - Sports - Ski'},{'sports - ski - pages':'Content - Sports - Ski'},{'sports - ski - posts':'Content - Sports - Ski'},{'sports - ski - teams - athletes':'Content - Ski'},{'sports - ski - videos':'Content - Sports - Ski'},{'sports - ski':'Content - Sports'},{'sports - snowboard  - teams':'Content - Sports - Snowboard'},{'sports - snowboard - album - pages':'Content - Snowboard'},{'sports - snowboard - album - photo':'Content - Snowboard'},{'sports - snowboard - album':'Content - Snowboard'},{'sports - snowboard - albums - pages':'Content - Snowboard'},{'sports - snowboard - albums - photos':'Content - Snowboard'},{'sports - snowboard - albums':'Content - Sports - Snowboard'},{'sports - snowboard - archives':'Content - Sports - Snowboard'},{'sports - snowboard - article':'Content - Sports - Snowboard'},{'sports - snowboard - athlete':'Content - Snowboard'},{'sports - snowboard - athletes - album - photos':'Content - Snowboard'},{'sports - snowboard - athletes - albums':'Content - Snowboard'},{'sports - snowboard - athletes - archives':'Content - Snowboard'},{'sports - snowboard - athletes - posts':'Content - Snowboard'},{'sports - snowboard - events':'Content - Sports - Snowboard'},{'sports - snowboard - pages':'Content - Sports - Snowboard'},{'sports - snowboard - posts':'Content - Sports - Snowboard'},{'sports - snowboard - teams - athletes':'Content - Snowboard'},{'sports - snowboard - videos':'Content - Sports - Snowboard'},{'sports - snowboard':'Content - Sports'},{'sports - snowmobile - pages':'Content - Snowmobiling'},{'sports - snowmobiling  - teams':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - album - pages':'Content - Snowmobiling'},{'sports - snowmobiling - album - photo':'Content - Snowmobiling'},{'sports - snowmobiling - album':'Content - Snowmobiling'},{'sports - snowmobiling - albums - photos':'Content - Snowmobiling'},{'sports - snowmobiling - albums':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - archives':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - article':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - athlete':'Content - Snowmobiling'},{'sports - snowmobiling - athletes - album - photos':'Content - Snowmobiling'},{'sports - snowmobiling - athletes - albums':'Content - Snowmobiling'},{'sports - snowmobiling - athletes - archives':'Content - Snowmobiling'},{'sports - snowmobiling - athletes - posts':'Content - Snowmobiling'},{'sports - snowmobiling - events':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - pages':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - posts':'Content - Sports - Snowmobiling'},{'sports - snowmobiling - teams - athletes':'Content - Snowmobiling'},{'sports - snowmobiling - videos':'Content - Sports - Snowmobiling'},{'sports - snowmobiling':'Content - Sports'},{'sports - sports car - album - photo':'Content - Sportscar - Album'},{'sports - sports car - album':'Content - Sportscar - Album'},{'sports - sports car - article':'Content - Sportscar - Album'},{'sports - sports car - athlete':'Content - Sportscar - Album'},{'sports - sports car - events':'Content - Sportscar - Album'},{'sports - sports car - video':'Content - Sports - Sportscar'},{'sports - sports car - videos':'Content - Sports - Sportscar'},{'sports - sportscar  - teams':'Content - Sports - Sportscar'},{'sports - sportscar - album - pages':'Content - Sportscar - Album'},{'sports - sportscar - album - photo':'Content - Sportscar - Album'},{'sports - sportscar - album':'Content - Sportscar - Album'},{'sports - sportscar - albums - photos':'Content - Sportscar - Album'},{'sports - sportscar - albums':'Content - Sports - Sportscar'},{'sports - sportscar - archives':'Content - Sports - Sportscar'},{'sports - sportscar - article':'Content - Sports - Sportscar'},{'sports - sportscar - athlete':'Content - Sportscar - Album'},{'sports - sportscar - athletes - album - photos':'Content - Sportscar - Album'},{'sports - sportscar - athletes - albums':'Content - Sportscar - Album'},{'sports - sportscar - athletes - archives':'Content - Sportscar - Album'},{'sports - sportscar - athletes - posts':'Content - Sportscar - Album'},{'sports - sportscar - events':'Content - Sports - Sportscar'},{'sports - sportscar - pages':'Content - Sports - Sportscar'},{'sports - sportscar - posts':'Content - Sports - Sportscar'},{'sports - sportscar - teams - athletes':'Content - Sportscar - Album'},{'sports - sportscar - videos':'Content - Sports - Sportscar'},{'sports - sportscar':'Content - Sports'},{'sports - surf  - teams':'Content - Sports - Surf'},{'sports - surf - album - pages':'Content - Surf'},{'sports - surf - album - photo':'Content - Surf'},{'sports - surf - album':'Content - Surf'},{'sports - surf - albums - pages':'Content - Surf'},{'sports - surf - albums - photos':'Content - Surf'},{'sports - surf - albums':'Content - Sports - Surf'},{'sports - surf - archives':'Content - Sports - Surf'},{'sports - surf - article':'Content - Sports - Surf'},{'sports - surf - athlete':'Content - Surf'},{'sports - surf - athletes - album - photos':'Content - Surf'},{'sports - surf - athletes - albums':'Content - Surf'},{'sports - surf - athletes - archives':'Content - Surf'},{'sports - surf - athletes - posts':'Content - Surf'},{'sports - surf - events':'Content - Sports - Surf'},{'sports - surf - pages':'Content - Sports - Surf'},{'sports - surf - posts':'Content - Sports - Surf'},{'sports - surf - teams - athletes':'Content - Surf'},{'sports - surf - videos':'Content - Sports - Surf'},{'sports - surf':'Content - Sports'},{'sports - tac  - teams':'Content - Sports - TAC'},{'sports - tac - album - pages':'Content - TAC'},{'sports - tac - album - photo':'Content - TAC'},{'sports - tac - album':'Content - TAC'},{'sports - tac - albums - photos':'Content - TAC'},{'sports - tac - albums':'Content - Sports - TAC'},{'sports - tac - archives':'Content - Sports - TAC'},{'sports - tac - article':'Content - Sports - TAC'},{'sports - tac - athlete':'Content - TAC'},{'sports - tac - athletes - album - photos':'Content - TAC'},{'sports - tac - athletes - albums':'Content - TAC'},{'sports - tac - athletes - archives':'Content - TAC'},{'sports - tac - athletes - posts':'Content - TAC'},{'sports - tac - events':'Content - Sports - TAC'},{'sports - tac - pages':'Content - Sports - TAC'},{'sports - tac - posts':'Content - Sports - TAC'},{'sports - tac - teams - athletes':'Content - TAC'},{'sports - tac - videos':'Content - Sports - TAC'},{'sports - tac':'Content - Sports'},{'sports - tdf  - teams':'Content - Sports - TDF'},{'sports - tdf - album - pages':'Content - TDF'},{'sports - tdf - album - photo':'Content - TDF'},{'sports - tdf - album':'Content - TDF'},{'sports - tdf - albums - photos':'Content - TDF'},{'sports - tdf - albums':'Content - Sports - TDF'},{'sports - tdf - archives':'Content - Sports - TDF'},{'sports - tdf - article':'Content - Sports - TDF'},{'sports - tdf - athlete':'Content - TDF'},{'sports - tdf - athletes - album - photos':'Content - TDF'},{'sports - tdf - athletes - albums':'Content - TDF'},{'sports - tdf - athletes - archives':'Content - TDF'},{'sports - tdf - athletes - posts':'Content - TDF'},{'sports - tdf - events':'Content - Sports - TDF'},{'sports - tdf - pages':'Content - Sports - TDF'},{'sports - tdf - posts':'Content - Sports - TDF'},{'sports - tdf - teams - athletes':'Content - TDF'},{'sports - tdf - videos':'Content - Sports - TDF'},{'sports - tdf':'Content - Sports'},{'sports - tdh  - teams':'Content - Sports - TDH'},{'sports - tdh - album - pages':'Content - TDH'},{'sports - tdh - album - photo':'Content - TDH'},{'sports - tdh - album':'Content - TDH'},{'sports - tdh - albums - photos':'Content - TDH'},{'sports - tdh - albums':'Content - Sports - TDH'},{'sports - tdh - archives':'Content - Sports - TDH'},{'sports - tdh - article':'Content - Sports - TDH'},{'sports - tdh - athlete':'Content - TDH'},{'sports - tdh - athletes - album - photos':'Content - TDH'},{'sports - tdh - athletes - albums':'Content - TDH'},{'sports - tdh - athletes - archives':'Content - TDH'},{'sports - tdh - athletes - posts':'Content - TDH'},{'sports - tdh - events':'Content - Sports - TDH'},{'sports - tdh - pages':'Content - Sports - TDH'},{'sports - tdh - posts':'Content - Sports - TDH'},{'sports - tdh - teams - athletes':'Content - TDH'},{'sports - tdh - videos':'Content - Sports - TDH'},{'sports - tdh':'Content - Sports'},{'sports - tennis  - teams':'Content - Sports - Tennis'},{'sports - tennis - album - pages':'Content - Tennis'},{'sports - tennis - album - photo':'Content - Tennis'},{'sports - tennis - album':'Content - Tennis'},{'sports - tennis - albums - pages':'Content - Tennis'},{'sports - tennis - albums - photos':'Content - Tennis'},{'sports - tennis - albums':'Content - Sports - Tennis'},{'sports - tennis - archives':'Content - Sports - Tennis'},{'sports - tennis - article':'Content - Sports - Tennis'},{'sports - tennis - athlete':'Content - Tennis'},{'sports - tennis - athletes - album - photos':'Content - Tennis'},{'sports - tennis - athletes - albums':'Content - Tennis'},{'sports - tennis - athletes - archives':'Content - Tennis'},{'sports - tennis - athletes - posts':'Content - Tennis'},{'sports - tennis - events':'Content - Sports - Tennis'},{'sports - tennis - pages':'Content - Sports - Tennis'},{'sports - tennis - posts':'Content - Sports - Tennis'},{'sports - tennis - teams - athletes':'Content - Tennis'},{'sports - tennis - videos':'Content - Sports - Tennis'},{'sports - tennis':'Content - Sports'},{'sports - the ordinary skier  - teams':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - album - pages':'Content - The Ordinary Skier'},{'sports - the ordinary skier - album - photo':'Content - The Ordinary Skier'},{'sports - the ordinary skier - album':'Content - The Ordinary Skier'},{'sports - the ordinary skier - albums - photos':'Content - The Ordinary Skier'},{'sports - the ordinary skier - albums':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - archives':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - article':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - athlete':'Content - The Ordinary Skier'},{'sports - the ordinary skier - athletes - album - photos':'Content - The Ordinary Skier'},{'sports - the ordinary skier - athletes - albums':'Content - The Ordinary Skier'},{'sports - the ordinary skier - athletes - archives':'Content - The Ordinary Skier'},{'sports - the ordinary skier - athletes - posts':'Content - The Ordinary Skier'},{'sports - the ordinary skier - events':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - pages':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - posts':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier - teams - athletes':'Content - The Ordinary Skier'},{'sports - the ordinary skier - video':'Content - The Ordinary Skier'},{'sports - the ordinary skier - videos':'Content - Sports - The Ordinary Skier'},{'sports - the ordinary skier':'Content - Sports'},{'sports - tour de france - album - photo':'Content - TDF'},{'sports - tour de france - album':'Content - TDF'},{'sports - tour de france - article':'Content - TDF'},{'sports - tour de france - athlete':'Content - TDF'},{'sports - tour de france - events':'Content - TDF'},{'sports - tour de france - video':'Content - TDF'},{'sports - tour de france - videos':'Content - TDF'},{'sports - track & field - album - photo':'Content - Track and Field'},{'sports - track & field - album':'Content - Track and Field'},{'sports - track & field - article':'Content - Track and Field'},{'sports - track & field - athlete':'Content - Track and Field'},{'sports - track & field - events':'Content - Track and Field'},{'sports - track & field - videos':'Content - Track and Field'},{'sports - track and field  - teams':'Content - Sports - Track and Field'},{'sports - track and field - album - pages':'Content - Track and Field'},{'sports - track and field - album - photo':'Content - Track and Field'},{'sports - track and field - album':'Content - Track and Field'},{'sports - track and field - albums - photos':'Content - Track and Field'},{'sports - track and field - albums':'Content - Sports - Track and Field'},{'sports - track and field - archives':'Content - Sports - Track and Field'},{'sports - track and field - article':'Content - Sports - Track and Field'},{'sports - track and field - athlete':'Content - Track and Field'},{'sports - track and field - athletes - album - photos':'Content - Track and Field'},{'sports - track and field - athletes - albums':'Content - Track and Field'},{'sports - track and field - athletes - archives':'Content - Track and Field'},{'sports - track and field - athletes - posts':'Content - Track and Field'},{'sports - track and field - events':'Content - Sports - Track and Field'},{'sports - track and field - pages':'Content - Sports - Track and Field'},{'sports - track and field - posts':'Content - Sports - Track and Field'},{'sports - track and field - teams - athletes':'Content - Track and Field'},{'sports - track and field - videos':'Content - Sports - Track and Field'},{'sports - track and field':'Content - Sports'},{'sports - track-and-field - pages':'Content - Track and Field'},{'sports - tracking eero  - teams':'Content - Sports - Tracking Eero'},{'sports - tracking eero - album - pages':'Content - Tracking Eero'},{'sports - tracking eero - album - photo':'Content - Tracking Eero'},{'sports - tracking eero - album':'Content - Tracking Eero'},{'sports - tracking eero - albums - photos':'Content - Tracking Eero'},{'sports - tracking eero - albums':'Content - Sports - Tracking Eero'},{'sports - tracking eero - archives':'Content - Sports - Tracking Eero'},{'sports - tracking eero - article':'Content - Sports - Tracking Eero'},{'sports - tracking eero - athlete':'Content - Tracking Eero'},{'sports - tracking eero - athletes - album - photos':'Content - Tracking Eero'},{'sports - tracking eero - athletes - albums':'Content - Tracking Eero'},{'sports - tracking eero - athletes - archives':'Content - Tracking Eero'},{'sports - tracking eero - athletes - posts':'Content - Tracking Eero'},{'sports - tracking eero - events':'Content - Sports - Tracking Eero'},{'sports - tracking eero - pages':'Content - Sports - Tracking Eero'},{'sports - tracking eero - posts':'Content - Sports - Tracking Eero'},{'sports - tracking eero - teams - athletes':'Content - Tracking Eero'},{'sports - tracking eero - video':'Content - Tracking Eero'},{'sports - tracking eero - videos':'Content - Sports - Tracking Eero'},{'sports - tracking eero':'Content - Sports'},{'sports - tracking-eero - albums - pages':'Content - Tracking Eero'},{'sports - tracking-eero - pages':'Content - Tracking Eero'},{'sports - triathlon  - teams':'Content - Sports - Triathlon'},{'sports - triathlon - album - pages':'Content - Triathlon'},{'sports - triathlon - album - photo':'Content - Triathlon'},{'sports - triathlon - album':'Content - Triathlon'},{'sports - triathlon - albums - pages':'Content - Triathlon'},{'sports - triathlon - albums - photos':'Content - Triathlon'},{'sports - triathlon - albums':'Content - Sports - Triathlon'},{'sports - triathlon - archives':'Content - Sports - Triathlon'},{'sports - triathlon - article':'Content - Sports - Triathlon'},{'sports - triathlon - athlete':'Content - Triathlon'},{'sports - triathlon - athletes - album - photos':'Content - Triathlon'},{'sports - triathlon - athletes - albums':'Content - Triathlon'},{'sports - triathlon - athletes - archives':'Content - Triathlon'},{'sports - triathlon - athletes - posts':'Content - Triathlon'},{'sports - triathlon - events':'Content - Sports - Triathlon'},{'sports - triathlon - pages':'Content - Sports - Triathlon'},{'sports - triathlon - posts':'Content - Sports - Triathlon'},{'sports - triathlon - teams - athletes':'Content - Triathlon'},{'sports - triathlon - videos':'Content - Sports - Triathlon'},{'sports - triathlon':'Content - Sports'},{'sports - wakeboard  - teams':'Content - Sports - Wakeboard'},{'sports - wakeboard - album - pages':'Content - Wakeboard'},{'sports - wakeboard - album - photo':'Content - Wakeboard'},{'sports - wakeboard - album':'Content - Wakeboard'},{'sports - wakeboard - albums - pages':'Content - Wakeboard'},{'sports - wakeboard - albums - photos':'Content - Wakeboard'},{'sports - wakeboard - albums':'Content - Sports - Wakeboard'},{'sports - wakeboard - archives':'Content - Sports - Wakeboard'},{'sports - wakeboard - article':'Content - Sports - Wakeboard'},{'sports - wakeboard - athlete':'Content - Wakeboard'},{'sports - wakeboard - athletes - album - photos':'Content - Wakeboard'},{'sports - wakeboard - athletes - albums':'Content - Wakeboard'},{'sports - wakeboard - athletes - archives':'Content - Wakeboard'},{'sports - wakeboard - athletes - posts':'Content - Wakeboard'},{'sports - wakeboard - events':'Content - Sports - Wakeboard'},{'sports - wakeboard - pages':'Content - Sports - Wakeboard'},{'sports - wakeboard - posts':'Content - Sports - Wakeboard'},{'sports - wakeboard - teams - athletes':'Content - Wakeboard'},{'sports - wakeboard - videos':'Content - Sports - Wakeboard'},{'sports - wakeboard':'Content - Sports'},{'sports - women  - teams':'Content - Sports - Women'},{'sports - women - album - pages':'Content - Women'},{'sports - women - album - photo':'Content - Women'},{'sports - women - album':'Content - Women'},{'sports - women - albums - pages':'Content - Women'},{'sports - women - albums - photos':'Content - Women'},{'sports - women - albums':'Content - Sports - Women'},{'sports - women - archives':'Content - Sports - Women'},{'sports - women - article':'Content - Sports - Women'},{'sports - women - athlete':'Content - Women'},{'sports - women - athletes - album - photos':'Content - Women'},{'sports - women - athletes - albums':'Content - Women'},{'sports - women - athletes - archives':'Content - Women'},{'sports - women - athletes - posts':'Content - Women'},{'sports - women - events':'Content - Sports - Women'},{'sports - women - pages':'Content - Sports - Women'},{'sports - women - posts':'Content - Sports - Women'},{'sports - women - teams - athletes':'Content - Women'},{'sports - women - video':'Content - Women'},{'sports - women - videos':'Content - Sports - Women'},{'sports - women':'Content - Sports'},{'sports car':'Content - Sports - Sportscar'},{'sports':'Sports'},{'sunglassaccessories':'Optics'},{'sunglasses - active - sunglasses':'Eyewear'},{'sunglasses - industrial grade':'Eyewear'},{'sunglasses - lifestyle - sunglasses':'Eyewear'},{'sunglasses - signature series - sunglasses':'Eyewear'},{'sunglasses - sport':'Eyewear'},{'surf microsite':'Brand Microsites'},{'surf':'Content - Sports - Surf'},{'tac':'Content - Sports - TAC'},{'tdh':'Content - Sports - TDH'},{'tennis':'Content - Sports - Tennis'},{'the ordinary skier':'Content - Sports - The Ordinary Skier'},{'tour de france':'Content - Sports - TDF'},{'track & field':'Content - Sports - Track and Field'},{'tracking eero':'Content - Sports - Tracking Eero'},{'triathlon':'Content - Sports - Triathlon'},{'uniquely':'Products'},{'visionaries':'Campaigns'},{'wakeboard':'Content - Sports - Wakeboard'},{'watches':'AFA'},{'women':'Content - Sports - Women'},{'women_store_home':'Products'},{'womens apparel - collections':'Womens - Apparel'},{'womens apparel':'Apparel'},{'womenscollections':'Collections'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['steelhouse_page_category']=c[e][f];m=true};};if(m)break};if(!m)b['steelhouse_page_category']='';},
function(a,b){ try{ if(1){try{b['steelhouse_page_category']=b.steelhouse_page_category.replace(" -",",")}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'at.oakley.com/':'UA-37421744-10'},{'au.oakley.com/':'UA-37421744-16'},{'be.oakley.com/':'UA-37421744-10'},{'ca.oakley.com/':'UA-37421744-14'},{'ch.oakley.com/':'UA-37421744-10'},{'de.oakley.com/':'UA-37421744-10'},{'dk.oakley.com/':'UA-37421744-10'},{'es.oakley.com/':'UA-37421744-10'},{'fr.oakley.com/':'UA-37421744-10'},{'ie.oakley.com/':'UA-37421744-10'},{'in.oakley.com/':'UA-37421744-13'},{'it.oakley.com/':'UA-37421744-10'},{'jp.oakley.com/':'UA-37421744-15'},{'lu.oakley.com/':'UA-37421744-10'},{'nl.oakley.com/':'UA-37421744-10'},{'no.oakley.com/':'UA-37421744-10'},{'pl.oakley.com/':'UA-37421744-10'},{'pt.oakley.com/':'UA-37421744-10'},{'se.oakley.com/':'UA-37421744-10'},{'uk.oakley.com/':'UA-37421744-10'},{'www.oakley.com/':'UA-37421744-11'},{'oakleydev1-store-us.oakleydev.com/':'UA-37421744-12'},{'qa5-store-us.oakleydev.com/':'UA-37421744-12'},{'hyb-qa-www.oakley.com/':'UA-37421744-12'},{'japan.oakley.com/':'UA-37421744-15'},{'www.oakleyvault.com':'UA-37421744-28'},{'hyb-pre-prod-www.oakley.com':'UA-37421744-29'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['ga_account']=c[e][f];m=true};};if(m)break};if(!m)b['ga_account']='UA-37421744-11';},
function(a,b){ try{ if(typeof b['color_swatch']!='undefined'){b['prodId_swatch']=b['product_id'];try{b['prodName_swatch']=b.product_name+" "+b.color_swatch.toLowerCase();}catch(e){};b['st_prod_name']=b['product_name'];b['product_id']=b['product_id'];b['click_type']='color_swatch';b['link_event']='link'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('/cart/registered_receipt/')>-1||b['dom.url'].toString().indexOf('/cart/guest_receipt/')>-1){try{b['product_id']=b.sh_product_id.toString()}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_name'].toString().indexOf('PRODUCT:')>-1){b['productID_count']=b['product_id']} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['prodId_swatch']!='undefined'&&b['prodId_swatch']!=''){b['productID_count']=b['prodId_swatch']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'at.oakley.com/':'1056797'},{'au.oakley.com/':'1057486'},{'be.oakley.com/':'1056797'},{'ch.oakley.com/':'1056797'},{'de.oakley.com/':'1056797'},{'dk.oakley.com/':'1056797'},{'es.oakley.com/':'1056797'},{'fr.oakley.com/':'1056797'},{'ie.oakley.com/':'1056797'},{'it.oakley.com/':'1056797'},{'jp.oakley.com/':'1300665'},{'lu.oakley.com/':'1056797'},{'nl.oakley.com/':'1056797'},{'no.oakley.com/':'1056797'},{'pl.oakley.com/':'1056797'},{'pt.oakley.com/':'1056797'},{'se.oakley.com/':'1056797'},{'uk.oakley.com/':'1056797'},{'www.oakley.com/':'1041374'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['exacttarget_mid']=c[e][f];m=true};};if(m)break};if(!m)b['exacttarget_mid']='1041374';},
function(a,b){ try{ if(1){try{b['Webgain_CustomEventID_CH']=b['Webgain_CustomEventID_CH'] || []}catch(e){};try{b['Webgain_CustomEventID_DE']=b['Webgain_CustomEventID_DE'] || []}catch(e){};try{b['Webgain_CustomEventID_DK']=b['Webgain_CustomEventID_DK'] || []}catch(e){};try{b['Webgain_CustomEventID_ES']=b['Webgain_CustomEventID_ES'] || []}catch(e){};try{b['Webgain_CustomEventID_FR']=b['Webgain_CustomEventID_FR'] || []}catch(e){};try{b['Webgain_CustomEventID_IT']=b['Webgain_CustomEventID_IT'] || []}catch(e){};try{b['Webgain_CustomEventID_NO']=b['Webgain_CustomEventID_NO'] || []}catch(e){};try{b['Webgain_CustomEventID_SE']=b['Webgain_CustomEventID_SE'] || []}catch(e){};try{b['Webgain_CustomEventID_UK']=b['Webgain_CustomEventID_UK'] || []}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14397'}];if (typeof b['Webgain_CustomEventID_UK'] === 'undefined') {b['Webgain_CustomEventID_UK'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_UK'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_UK'][h]='14337';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14403'}];if (typeof b['Webgain_CustomEventID_SE'] === 'undefined') {b['Webgain_CustomEventID_SE'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_SE'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_SE'][h]='14345';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14413'}];if (typeof b['Webgain_CustomEventID_IT'] === 'undefined') {b['Webgain_CustomEventID_IT'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_IT'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_IT'][h]='14353';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14405'}];if (typeof b['Webgain_CustomEventID_DE'] === 'undefined') {b['Webgain_CustomEventID_DE'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_DE'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_DE'][h]='14347';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14415'}];if (typeof b['Webgain_CustomEventID_ES'] === 'undefined') {b['Webgain_CustomEventID_ES'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_ES'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_ES'][h]='14399';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14411'}];if (typeof b['Webgain_CustomEventID_FR'] === 'undefined') {b['Webgain_CustomEventID_FR'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_FR'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_FR'][h]='14351';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14409'}];if (typeof b['Webgain_CustomEventID_NO'] === 'undefined') {b['Webgain_CustomEventID_NO'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_NO'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_NO'][h]='14355';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14407'}];if (typeof b['Webgain_CustomEventID_DK'] === 'undefined') {b['Webgain_CustomEventID_DK'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_DK'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_DK'][h]='14349';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'14401'}];if (typeof b['Webgain_CustomEventID_CH'] === 'undefined') {b['Webgain_CustomEventID_CH'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_CH'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_CH'][h]='14357';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'15385'}];if (typeof b['Webgain_CustomEventID_NL'] === 'undefined') {b['Webgain_CustomEventID_NL'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_NL'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_NL'][h]='15337';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'15796'}];if (typeof b['Webgain_CustomEventID_AT'] === 'undefined') {b['Webgain_CustomEventID_AT'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_AT'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_AT'][h]='15794';};},
function(a,b,c,d,e,f,g){d=b['product_category'];if(typeof d=='undefined')return;c=[{'custom':'15837'}];if (typeof b['Webgain_CustomEventID_BE'] === 'undefined') {b['Webgain_CustomEventID_BE'] = [];} for(var h=0;h<d.length;h++){var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d[h].toString().indexOf(f)>-1){b['Webgain_CustomEventID_BE'][h]=c[e][f];m=true};};if(m)break};if(!m)b['Webgain_CustomEventID_BE'][h]='15835';};},
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'de.oakley.com/':'10481'},{'fr.oakley.com/':'10480'},{'it.oakley.com/':'10482'},{'no.oakley.com/':'10483'},{'uk.oakley.com/':'10479'},{'au.oakley.com/':'10498'},{'www.oakley.com/':'10248'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['Steelhouse_AccountID']=c[e][f];m=true};};if(m)break};if(!m)b['Steelhouse_AccountID']='10479';},
function(a,b){ try{ if(/one-obsession$/i.test(b['dom.url'])){document.cookie="OBO="+'true'+";path=/;domain="+utag.cfg.domain+";expires=";b['cp.OBO']='true';}} catch(e){ utag.DB(e) } },
function(a,b){ try{ if(/eric-koston$/i.test(b['dom.url'])){document.cookie="OBO_Eric_Koston="+'true'+";path=/;domain="+utag.cfg.domain+";expires=";b['cp.OBO_Eric_Koston']='true';}} catch(e){ utag.DB(e) } },
function(a,b){ try{ if((typeof b['event_type']!='undefined'&&b['event_type'].toString().toLowerCase()=='Viewing_All'.toLowerCase())){try{b['view_all_counter']=b['cp.cp_va'] ? (parseInt(b['cp.cp_va'])+1)+"" : "1"}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['view_all_counter']!='undefined'){document.cookie="cp_va="+b['view_all_counter']+";path=/;domain="+utag.cfg.domain+";expires=";b['cp.cp_va']=b['view_all_counter'];}} catch(e){ utag.DB(e) } }];
  utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"237","blr":0,"end":0},{"alr":1,"bwq":0,"id":"70","blr":0,"end":0},{"alr":1,"bwq":0,"id":"65","blr":0,"end":0},{"alr":1,"bwq":0,"id":"27","blr":0,"end":0},{"alr":1,"bwq":0,"id":"62","blr":0,"end":0},{"alr":1,"bwq":0,"id":"122","blr":0,"end":0},{"alr":1,"bwq":0,"id":"180","blr":0,"end":0},{"alr":1,"bwq":0,"id":"1","blr":0,"end":0},{"alr":1,"bwq":0,"id":"66","blr":0,"end":0},{"alr":1,"bwq":0,"id":"2","blr":0,"end":0},{"alr":1,"bwq":0,"id":"4","blr":0,"end":0},{"alr":1,"bwq":0,"id":"8","blr":0,"end":0},{"alr":1,"bwq":0,"id":"16","blr":0,"end":0},{"alr":1,"bwq":0,"id":"17","blr":0,"end":0},{"alr":1,"bwq":0,"id":"18","blr":0,"end":0},{"alr":1,"bwq":0,"id":"20","blr":0,"end":0},{"alr":1,"bwq":0,"id":"25","blr":0,"end":0},{"alr":1,"bwq":0,"id":"24","blr":0,"end":0},{"alr":1,"bwq":0,"id":"28","blr":0,"end":0},{"alr":1,"bwq":0,"id":"29","blr":0,"end":0},{"alr":1,"bwq":0,"id":"30","blr":0,"end":0},{"alr":1,"bwq":0,"id":"31","blr":0,"end":0},{"alr":1,"bwq":0,"id":"32","blr":0,"end":0},{"alr":1,"bwq":0,"id":"37","blr":0,"end":0},{"alr":1,"bwq":0,"id":"34","blr":0,"end":0},{"alr":1,"bwq":0,"id":"59","blr":0,"end":0},{"alr":1,"bwq":0,"id":"43","blr":0,"end":0},{"alr":1,"bwq":0,"id":"44","blr":0,"end":0},{"alr":1,"bwq":0,"id":"61","blr":0,"end":0},{"alr":1,"bwq":0,"id":"46","blr":0,"end":0},{"alr":1,"bwq":0,"id":"47","blr":0,"end":0},{"alr":1,"bwq":0,"id":"48","blr":0,"end":0},{"alr":1,"bwq":0,"id":"49","blr":0,"end":0},{"alr":1,"bwq":0,"id":"50","blr":0,"end":0},{"alr":1,"bwq":0,"id":"51","blr":0,"end":0},{"alr":1,"bwq":0,"id":"206","blr":0,"end":0},{"alr":1,"bwq":0,"id":"210","blr":0,"end":0},{"alr":1,"bwq":0,"id":"211","blr":0,"end":0},{"alr":1,"bwq":0,"id":"52","blr":0,"end":0},{"alr":1,"bwq":0,"id":"106","blr":0,"end":0},{"alr":1,"bwq":0,"id":"107","blr":0,"end":0},{"alr":1,"bwq":0,"id":"159","blr":0,"end":0},{"alr":1,"bwq":0,"id":"160","blr":0,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"147":{load:1,send:1,v:201510271636,wait:1,tid:3101},"160":{load:1,send:1,v:201510271636,wait:1,tid:7110},"196":{load:(utag.cond[2] && utag.cond[4]),send:1,v:201510271636,wait:1,tid:3004},"183":{load:(utag.cond[2] && utag.cond[26]),send:1,v:201510271636,wait:1,tid:7117},"250":{load:(utag.cond[5] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:7117},"194":{load:(utag.cond[2] && utag.cond[27]),send:1,v:201510271636,wait:1,tid:7117},"184":{load:(utag.cond[26] && utag.cond[57]),send:1,v:201510271636,wait:1,tid:7115},"265":{load:utag.cond[5],send:1,v:201510271636,wait:1,tid:7115},"228":{load:(utag.cond[2] && utag.cond[45]),send:1,v:201510271636,wait:1,tid:7117},"185":{load:(utag.cond[2] && utag.cond[29]),send:1,v:201510271636,wait:1,tid:13055},"252":{load:(utag.cond[5] && utag.cond[2]),send:1,v:201510271636,wait:1,tid:3081},"171":{load:utag.cond[8],send:1,v:201510271636,wait:1,tid:20010},"231":{load:(utag.cond[2] && utag.cond[45]),send:1,v:201510271636,wait:1,tid:20011},"162":{load:1,send:1,v:201510271636,wait:1,tid:5002},"251":{load:utag.cond[58],send:1,v:201510271636,wait:1,tid:19022},"159":{load:(utag.cond[2] && utag.cond[4]),send:1,v:201510271636,wait:1,tid:19022},"249":{load:utag.cond[58],send:1,v:201510271636,wait:1,tid:19074},"259":{load:utag.cond[69],send:1,v:201510271636,wait:1,tid:19074},"258":{load:utag.cond[72],send:1,v:201510271636,wait:1,tid:19074},"260":{load:utag.cond[70],send:1,v:201510271636,wait:1,tid:19074},"271":{load:utag.cond[71],send:1,v:201510271636,wait:1,tid:19074},"272":{load:utag.cond[73],send:1,v:201510271636,wait:1,tid:19074},"273":{load:utag.cond[74],send:1,v:201510271636,wait:1,tid:19074},"315":{load:utag.cond[89],send:1,v:201510271636,wait:1,tid:19074},"358":{load:utag.cond[4],send:1,v:201606160336,wait:1,tid:6026},"317":{load:(utag.cond[5] && utag.cond[2]),send:1,v:201510271636,wait:1,tid:6011},"318":{load:utag.cond[5],send:1,v:201510271636,wait:1,tid:6020},"168":{load:(utag.cond[2] && utag.cond[4]),send:1,v:201510271636,wait:1,tid:20010},"154":{load:(utag.cond[2] && utag.cond[4]),send:1,v:201510271636,wait:1,tid:11008},"157":{load:utag.cond[2],send:1,v:201510271636,wait:1,tid:3077},"156":{load:1,send:1,v:201510271636,wait:1,tid:3077},"193":{load:1,send:1,v:201510271636,wait:1,tid:19050},"158":{load:(utag.cond[3] && utag.cond[4]),send:1,v:201510271636,wait:1,tid:4001},"186":{load:(utag.cond[2] && utag.cond[29]),send:1,v:201510271636,wait:1,tid:4001},"248":{load:(utag.cond[48] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"151":{load:(utag.cond[2] && utag.cond[58] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"277":{load:(utag.cond[17] && utag.cond[59]),send:1,v:201510271636,wait:1,tid:4001},"278":{load:(utag.cond[2] && utag.cond[17] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"279":{load:(utag.cond[11] && utag.cond[59]),send:1,v:201510271636,wait:1,tid:4001},"280":{load:(utag.cond[2] && utag.cond[11] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"281":{load:(utag.cond[12] && utag.cond[59]),send:1,v:201510271636,wait:1,tid:4001},"282":{load:(utag.cond[2] && utag.cond[12] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"283":{load:(utag.cond[59] && utag.cond[9]),send:1,v:201510271636,wait:1,tid:4001},"284":{load:(utag.cond[2] && utag.cond[76] && utag.cond[9]),send:1,v:201510271636,wait:1,tid:4001},"274":{load:(utag.cond[20] && utag.cond[59]),send:1,v:201510271636,wait:1,tid:4001},"275":{load:(utag.cond[20] && utag.cond[2] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"285":{load:(utag.cond[5] && utag.cond[59]),send:1,v:201510271636,wait:1,tid:4001},"286":{load:(utag.cond[5] && utag.cond[2] && utag.cond[76]),send:1,v:201510271636,wait:1,tid:4001},"269":{load:(utag.cond[78] && utag.cond[79]),send:1,v:201510271636,wait:1,tid:4001},"270":{load:(utag.cond[2] && utag.cond[58] && utag.cond[79]),send:1,v:201510271636,wait:1,tid:4001},"208":{load:(utag.cond[4] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"204":{load:utag.cond[34],send:1,v:201510271636,wait:1,tid:4001},"205":{load:utag.cond[31],send:1,v:201510271636,wait:1,tid:4001},"206":{load:utag.cond[32],send:1,v:201510271636,wait:1,tid:4001},"207":{load:utag.cond[30],send:1,v:201510271636,wait:1,tid:4001},"209":{load:utag.cond[33],send:1,v:201510271636,wait:1,tid:4001},"210":{load:utag.cond[40],send:1,v:201510271636,wait:1,tid:4001},"211":{load:utag.cond[37],send:1,v:201510271636,wait:1,tid:4001},"212":{load:utag.cond[38],send:1,v:201510271636,wait:1,tid:4001},"213":{load:utag.cond[36],send:1,v:201510271636,wait:1,tid:4001},"214":{load:(utag.cond[20] && utag.cond[2]),send:1,v:201510271636,wait:1,tid:4001},"215":{load:utag.cond[39],send:1,v:201510271636,wait:1,tid:4001},"256":{load:utag.cond[8],send:1,v:201510271636,wait:1,tid:20067},"257":{load:utag.cond[8],send:1,v:201510271636,wait:1,tid:7125},"172":{load:(utag.cond[2] && utag.cond[9]),send:1,v:201602261930,wait:1,tid:23002},"173":{load:(utag.cond[2] && utag.cond[10]),send:1,v:201602261930,wait:1,tid:23002},"174":{load:(utag.cond[2] && utag.cond[11]),send:1,v:201602261930,wait:1,tid:23002},"175":{load:(utag.cond[2] && utag.cond[12]),send:1,v:201602261930,wait:1,tid:23002},"176":{load:(utag.cond[2] && utag.cond[13]),send:1,v:201602261930,wait:1,tid:23002},"177":{load:(utag.cond[2] && utag.cond[17]),send:1,v:201602261930,wait:1,tid:23002},"178":{load:(utag.cond[2] && utag.cond[14]),send:1,v:201602261930,wait:1,tid:23002},"179":{load:(utag.cond[2] && utag.cond[15]),send:1,v:201602261930,wait:1,tid:23002},"180":{load:(utag.cond[2] && utag.cond[16]),send:1,v:201602261930,wait:1,tid:23002},"364":{load:(utag.cond[2] && utag.cond[84]),send:1,v:201602261930,wait:1,tid:23002},"369":{load:(utag.cond[81] && utag.cond[2]),send:1,v:201602261959,wait:1,tid:23002},"368":{load:(utag.cond[80] && utag.cond[2]),send:1,v:201602261959,wait:1,tid:23002},"290":{load:utag.cond[5],send:1,v:201510271636,wait:1,tid:1066},"268":{load:utag.cond[9],send:1,v:201510271636,wait:1,tid:20010},"293":{load:(utag.cond[80] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"294":{load:(utag.cond[81] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"295":{load:(utag.cond[15] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"296":{load:(utag.cond[17] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"297":{load:(utag.cond[12] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"298":{load:(utag.cond[82] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"299":{load:(utag.cond[11] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"300":{load:(utag.cond[83] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"301":{load:(utag.cond[84] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"302":{load:(utag.cond[14] && utag.cond[49]),send:1,v:201510271636,wait:1,tid:4001},"303":{load:(utag.cond[49] && utag.cond[85]),send:1,v:201510271636,wait:1,tid:4001},"305":{load:(utag.cond[49] && utag.cond[13]),send:1,v:201510271636,wait:1,tid:4001},"304":{load:(utag.cond[49] && utag.cond[86]),send:1,v:201510271636,wait:1,tid:4001},"306":{load:(utag.cond[49] && utag.cond[10]),send:1,v:201510271636,wait:1,tid:4001},"307":{load:(utag.cond[49] && utag.cond[16]),send:1,v:201510271636,wait:1,tid:4001},"308":{load:(utag.cond[49] && utag.cond[9]),send:1,v:201510271636,wait:1,tid:4001},"321":{load:utag.cond[110],send:1,v:201606142201,wait:1,tid:19063},"325":{load:utag.cond[87],send:1,v:201606142201,wait:1,tid:19063},"338":{load:utag.cond[97],send:1,v:201606131409,wait:1,tid:19063},"343":{load:(utag.cond[5] && utag.cond[2]),send:1,v:201510271636,wait:1,tid:4001},"344":{load:utag.cond[101],send:1,v:201510271636,wait:1,tid:4001},"345":{load:(utag.cond[102] && utag.cond[5]),send:1,v:201510271636,wait:1,tid:4001},"346":{load:(utag.cond[100] && utag.cond[5]),send:1,v:201510271636,wait:1,tid:4001},"347":{load:(utag.cond[103] && utag.cond[5]),send:1,v:201510271636,wait:1,tid:4001},"348":{load:(utag.cond[104] && utag.cond[5]),send:1,v:201510271636,wait:1,tid:4001},"349":{load:(utag.cond[105] && utag.cond[5]),send:1,v:201510271636,wait:1,tid:4001},"372":{load:utag.cond[114],send:1,v:201604152328,wait:1,tid:22019}};
utag.loader.cfgsort=["147","160","196","183","250","194","184","265","228","185","252","171","231","162","251","159","249","259","258","260","271","272","273","315","358","317","318","168","154","157","156","193","158","186","248","151","277","278","279","280","281","282","283","284","274","275","285","286","269","270","208","204","205","206","207","209","210","211","212","213","214","215","256","257","172","173","174","175","176","177","178","179","180","364","369","368","290","268","293","294","295","296","297","298","299","300","301","302","303","305","304","306","307","308","321","325","338","343","344","345","346","347","348","349","372"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{
try{   

    if(utag_data.page_name=="/CART"){
        jQuery("#recommended_cart").delegate("li.tealium-utag-view a.prod","load",function(){
            site_promotion = new Array();
             jQuery("li.tealium-utag-view a.prod")
                .each(function()
                {
                 if(jQuery("a.prod").attr('outerHTML').indexOf('site_promotion')>-1){
                   n="data-tealium-utag-custom-link-site_promotion_";
                   t="manual_cm_sp";
                 } else {
                   n="data-tealium-utag-custom-link-real_estate_";
                   t="manual_cm_re";
                 }
                  v=jQuery(this).attr(n+"location")+"-_-"+jQuery(this).attr(n+"position")+"-_-"+jQuery(this).attr(n+"name");
                  jQuery(this).attr(t,v);
                  site_promotion.push(v);
                });
               utag_data.site_promotion=site_promotion.toString();
            });
        }
  

}
catch(e){}
}catch(e){utag.DB(e)};
try{
if(utag.data.pageid=="Women’s Shopping Guide" && utag.data.page_name=="Women’s Shopping Guide"){
  jQuery("div.women-guided-shopping-banner ul li a").one("click",function(e){
    e.preventDefault();
    var y = this.href;
    setTimeout(function() {
        location.href = y;
    }, 1000);
}); 
}
}catch(e){utag.DB(e)};
try{ if(1){if(typeof utag.runonce=='undefined')utag.runonce={};utag.jdh=function(h,i,j,k){h=utag.jdhc.length;if(h==0)window.clearInterval(utag.jdhi);else{for(i=0;i<h;i++){j=utag.jdhc[i];k=jQuery(j.i).is(":visible")?1:0;if(k!=j.s){if(j.e==(j.s=k))jQuery(j.i).trigger(j.e?"afterShow":"afterHide")}}}};utag.jdhi=window.setInterval(utag.jdh, 250);utag.jdhc=[];
if(typeof utag.runonce[64]=='undefined'){utag.runonce[64]=1;jQuery(document.body).on('mousedown','#registerForm input.button', function(e){utag.link({ "customer_email":jQuery('[id="register.email"]').val(),"event_type":'registration' })});}}  }catch(e){utag.DB(e)};
try{
(function(win,doc){
 
var scriptElement, scrSrc;
 
if (typeof (win.ClickTaleCreateDOMElement) != "function")
{
                win.ClickTaleCreateDOMElement = function(tagName)
                {
                                if (doc.createElementNS)
                                {
                                                return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
                                }
                                return doc.createElement(tagName);
                }
}
 
win.WRInitTime=(new Date()).getTime();
 
scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";
 
scrSrc = doc.location.protocol=='https:'? 'https://cdnssl.clicktale.net/':   'http://cdn.clicktale.net/';
 
scrSrc += 'www04/ptc/5f28c698-ddd7-4281-9878-41199ef35e55.js';
 
scriptElement.src = scrSrc;
 
doc.getElementsByTagName('body')[0].appendChild(scriptElement);
})(window,document);

}catch(e){utag.DB(e)};
try{
jQuery('ul.products-nav a, .main-menu > li > a').click(function(e){
    var el = jQuery(this);
    var parent = el.parent();
    var span = parent.find('span');
    var location = span.attr('data-tealium-utag-data-site_promotion_location');
    var position = span.attr('data-tealium-utag-data-site_promotion_position');
    var name = span.attr('data-tealium-utag-data-site_promotion_name');
    utag.link({
        navbar_location: location,
        navbar_position: position,
        navbar_name: name
    });
});

}catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[128]=='undefined'){utag.runonce[128]=1;jQuery(document.body).on('click','.view-all', function(e){utag.link({ "event_type":'Viewing_All' })})}}  }catch(e){utag.DB(e)};
try{
/*
Patrick McWilliams - 5/11/16
This version is used for single videos and for videos that have their own seperate divs at render. 
Make sure to edit the logic based on site specific needs
*/

(function(){
	var _trackAnalytics = {event:window.utag.link.bind(window.utag)};
	var data = {	// Add global video data here
		//key: value,
	}; 	
	var players = { 
		objects: ['player'],
		events: {}
	};
	players.objects.forEach(function(e,i){
		var getTime;
		var playerFirstStart = false;
		var playerName = e;
		var currentPlayer = YT.get(e);
		players.events[playerName] = {
			milestones: {},
			stateChange: function(event){

				var currentPlayer = event.target;
				data.video_muted = currentPlayer.isMuted()+'';
				data.video_volume = currentPlayer.getVolume()+'';
				data.video_quality = currentPlayer.getPlaybackQuality()+'';
				data.video_url = currentPlayer.getVideoUrl()+'';
			        data.video_title = currentPlayer.getVideoData().title+'';
				data.video_current_time = currentPlayer.getCurrentTime()+'';
				data.video_total_time = currentPlayer.getDuration()+'';
				data.video_played_percentage = ((currentPlayer.getCurrentTime()/currentPlayer.getDuration()) * 100) + '';
				switch(event.data){
					case YT.PlayerState.PLAYING: 			// PLAY EVENT
						if(!players.events[currentPlayer.l].milestones['0']){	// start timer when play starts, and destroy when video ends
							players.events[currentPlayer.l].milestones['0'] = true;
							getTime = setInterval(function(){
								if(currentPlayer.getPlayerState() == 1){
									players.events[playerName].playerPosition(currentPlayer)+'';
								}
							},1000);
						        data.site_events = {video_play: 'true'};
						        _trackAnalytics.event(data);
						}

					break;

					case YT.PlayerState.PAUSED: 			// PAUSED EVENT
						
						data.site_events = {video_paused: 'true'};
						//_trackAnalytics.event(data);

					break;

					case YT.PlayerState.ENDED: 				// ENDED EVENT
						if(!players.events[currentPlayer.l].milestones['100']){
						  players.events[currentPlayer.l].milestones['100'] = true;
						  clearInterval(getTime);	// destroy timer
						  data.site_events = {video_ended: 'true'};
						  _trackAnalytics.event(data);
						}


					break;

					case YT.PlayerState.BUFFERING: 			// BUFFERING EVENT
						
						data.site_events = {video_buffering: 'true'};
						//_trackAnalytics.event(data);

					break;

					default:
					// none
				}
				
			},
			playerPosition: function(currentPlayer){
				delete data.video_played_percentage;
				data.video_muted = currentPlayer.isMuted()+'';
				data.video_volume = currentPlayer.getVolume()+'';
				data.video_quality = currentPlayer.getPlaybackQuality()+'';
				data.video_url = currentPlayer.getVideoUrl()+'';
			        data.video_title = currentPlayer.getVideoData().title+'';
				data.video_current_time = currentPlayer.getCurrentTime()+'';
				data.video_total_time = currentPlayer.getDuration()+'';
				var pbPercentage = ((currentPlayer.getCurrentTime()/currentPlayer.getDuration()) * 100)+'';

				if(pbPercentage > 25 && !players.events[currentPlayer.l].milestones['25']){				// MILESTONE 25% EVENT
					
					players.events[currentPlayer.l].milestones['25'] = true;
					data.site_events = {milestone_25: 'true'};
					_trackAnalytics.event(data);

				}
				else if(pbPercentage > 50 && !players.events[currentPlayer.l].milestones['50']){			// MILESTONE 50% EVENT
					
					players.events[currentPlayer.l].milestones['50'] = true;
					data.site_events = {milestone_50: 'true'};
					_trackAnalytics.event(data);	

				}
				else if(pbPercentage > 75 && !players.events[currentPlayer.l].milestones['75']){			// MILESTONE 75% EVENT
					
					players.events[currentPlayer.l].milestones['75'] = true;
					data.site_events = {milestone_75: 'true'};
					_trackAnalytics.event(data);

				}	
			}
		};
		window['players_events_'+playerName+'_stateChange'] = players.events[playerName].stateChange;
		currentPlayer.addEventListener('onStateChange', 'players_events_'+playerName+'_stateChange');
	})
})();

}catch(e){utag.DB(e)};}})

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}

