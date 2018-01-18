//~~tv:3101.external.20150115
//~~tc: E-Commerce Update to use blank string instead of undefined for string values

//tealium universal tag - utag.sender.3101.external ut4.0.201508191815, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    //utag.o[loader].sender[id] = u;
    try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
    // Start Tealium loader
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { b.hFlag = 0; b.onreadystatechange = function () { if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) { b.hFlag = 1; o.cb(); } }; b.onload = function () { if (!b.hFlag) { b.hFlag = 1; o.cb(); } }; } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    u.ev = {'view' : 1, 'link':1};
    u.initialized=false;
    u.event_lookup={"pageview":"1","registration":"2","order":"3","purchase":"3","shopaction9":"3","cart":"4","shopaction5":"4","productview":"5","prodview":"5","conversionevent":"14","conversion":"14","element":"15"};
    u.concat_attr=function(a,e,c,d,f,g) {
      g="";
      for(f=1;f<=c;f++) {
        if(typeof d!="undefined" && u.data[e+a+f+""] instanceof Array) {
          g+=((typeof u.data[e+a+f+""][d]!="undefined")?u.data[e+a+f+""][d]:"")+"-_-"
        }else{
          g+=((typeof u.data[e+a+f+""]!="undefined")?u.data[e+a+f+""]:"")+"-_-"
        }
      }
      return g
    };
      u.map={"page_name":"PageviewTag_pi,ManualLinkClickTag_pi,ManualImpressionTag_pi","page_category":"PageviewTag_cg","search_keyword":"PageviewTag_se","search_results":"PageviewTag_sr","customer_id":"RegistrationTag_cd","customer_city":"RegistrationTag_ct","customer_state":"RegistrationTag_sa","customer_postal_code":"RegistrationTag_zp","customer_email":"RegistrationTag_em","customer_country":"RegistrationTag_cy","element_id":"ElementTag_eid","element_category":"ElementTag_ecat","event_id":"ConversionEventTag_cid","event_action":"ConversionEventTag_cat","event_category":"ConversionEventTag_ccid","event_points":"ConversionEventTag_cpt","SAP_id":"ShopAction5Tag_s_a1","Availability":"ShopAction5Tag_s_a2","href":"ManualLinkClickTag_hr","linkname":"ManualLinkClickTag_nm","product_id":"ProductviewTag_pr,ShopAction5Tag_pr","product_name":"ProductviewTag_pm,ShopAction5Tag_pm","product_category":"ProductviewTag_cg,ShopAction5Tag_cg","event_type:addToCart":"ShopAction5","event_type:registration":"Registration","event_type:quickview":"Productview","real_estate":"ManualImpressionTag_cm_re","new_order_subtotal":"ShopAction9Tag_tr","cm_product_quantity":"ShopAction5Tag_qt","cm_product_price":"ShopAction5Tag_bp","clientid":"ClientID","order_payment_type":"OrderTag_o_a1","order_discount":"OrderTag_o_a2","product_upc":"OrderTag_o_a3","order_id":"OrderTag_o_a4","customer_type":"OrderTag_o_a5","shipping_method":"OrderTag_o_a6","order_shipping":"OrderTag_o_a7","site_promotion":"ManualLinkClickTag_sp","re_estate":"ManualLinkClickTag_nm"};
  u.extend=[function(a,b){
if(u.a=="view" && typeof b.page_name=="undefined" && typeof b.color_swatch!="undefined"){
  return false;
}
}];

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        // Advanced: modify u.data.tid in an Extension to fire multiple events: u.data.tid{"5":true,"15":true};

        var c, d, e, f, g;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "a" : a,
          "base_url" : "//libs.coremetrics.com/eluminate.js" || "//libs.coremetrics.com/eluminate.js",
          "ClientID" : "", 
          "TestClientID" : "60033410",
          "DataCollectionMethod" : false,
          "DataCollectionDomain" : "www75.oakley.com",
          "CookieDomain" : "us.oakley.com",
          "test_domains" : ",hyb-pre-prod-www.oakley.com,",
          "tid" : {},
          "test" : false,
          "pv_a" : "",
          "pv" : "",
          "s_a" : "",
          "sx" : "",
          "o_a" : "",
          "or" : "",
          "rg" : "",
          "pr_a" : "",
          "c_a" : "",
          "cx" : "",
          "e_a" : "",
          // E-Commerce Vars
          "order_id" : "",
          "order_subtotal" : "",
          "order_shipping" : "",
          "order_currency" : "",
          "customer_id" : "",
          "customer_city" : "",
          "customer_state" : "",
          "customer_zip" : "",
          "customer_country" : "",
          "product_id" : [],
          "product_name" : [],
          "product_category" : [],
          "product_quantity" : [],
          "product_unit_price" : []
        };

        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (e[f] === "tid") {
                g = u.event_lookup[(""+b[d]).toLowerCase().replace("_","")]+"";
                if (g !== "") {
                  u.data.tid[g] = true;
                } else {
                  u.data.tid[b[d]] = true;
                }
              } else {
                u.data[e[f]] = b[d];
              }
            }
          } else {
            c = d.split(":");
            if (c.length === 2 && b[c[0]] === c[1]) {
              g = "" + u.event_lookup[u.map[d].toLowerCase().replace("_", "")];
              if (g !== "") {u.data.tid[g] = true}
            }
          }
        }
        // End Mapping

        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
        u.data.order_shipping = u.data.order_shipping || b._cship || "";       
        u.data.order_currency = u.data.order_currency || b._ccurrency || "";
        u.data.customer_id = u.data.customer_id || b._ccustid || "";
        u.data.customer_city = u.data.customer_city || b._ccity || "";
        u.data.customer_state = u.data.customer_state || b._cstate || "";
        u.data.customer_zip = u.data.customer_zip || b._czip || "";
        u.data.customer_country = u.data.customer_country || b._ccountry || "";
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        // Start Loader Callback
        // coremetrics_callback
        u.loader_cb = function() {

          if (!u.initialized) {
            u.initialized = true;
            if (u.data.test_domains.indexOf(","+location.hostname+',')>-1) {
              u.data.test = true;
            }
    
            if (u.data.test) {
              u.data.ClientID = u.data.TestClientID;
              u.data.DataCollectionMethod = u.data.TestDataCollectionMethod || false; 
              u.data.DataCollectionDomain = u.data.TestDataCollectionDomain || "testdata.coremetrics.com"; 
            }
    
            cmSetClientID(u.data.ClientID, u.data.DataCollectionMethod, u.data.DataCollectionDomain, u.data.CookieDomain);
          }
    
          if (u.data.a === "view") {
            e="PageviewTag_";
            u.data.pv_a = u.concat_attr("pv_a",e,50);
            u.data.pv = u.concat_attr("pv",e,15);
            if (u.data["ManualPageviewTag_ul"]) {
              f = "ManualPageviewTag_";
              cmCreateManualPageviewTag(u.data[e+"pi"], u.data[e+"cg"], u.data[f+"ul"], u.data[f+"rf"], u.data.pv_a, u.data[e+"se"], u.data[e+"sr"], u.data.pv);
            }else{
              cmCreatePageviewTag(u.data[e+"pi"], u.data[e+"cg"], u.data[e+"se"], u.data[e+"sr"], u.data.pv_a, u.data.pv);
            }
          } else if (u.data.a == "link") {
	    if (u.data["ManualLinkClickTag_hr"]) {
	      e = "ManualLinkClickTag_";
	      cmCreateManualLinkClickTag(u.data[e + "hr"], u.data[e + "nm"], u.data[e + "pi"]);
	      u.data[e + "hr"] = "";
	      return;
		} else if (u.data.manual_sp_link || u.data.manual_re_link) {
		  var lk_imp, imp_type;
		  u.data.manual_sp_link ? (lk_imp = u.data.manual_sp_link, imp_type = "cm_sp=") : (lk_imp = u.data.manual_re_link, imp_type = "cm_re=");
		  cmStartTagSet();
		  var l = new _cm("tid", "8");
		  if (typeof (encodeURI) === "function") {
		    c = encodeURI("href").replace(/%25/g, "%");
		  }
		  CU(l, l.ci);
		  l.st = cm_ClientTS;
		  l.ti = new Date().getTime();
		  l.hr = u.data.manual_impression_href + "?" + imp_type + lk_imp;
		  l.write(1);
		  // End tag set - this sends the request
		  cmSendTagSet();
		}
	  }
          if (u.data["ManualImpressionTag_pi"] && (u.data["ManualImpressionTag_cm_sp"] || u.data["ManualImpressionTag_cm_re"])) {
            e = "ManualImpressionTag_";
            // Initialize a new tag set
            cmStartTagSet();
            if (typeof u.data[e+"cm_re"] === "string") {
              u.data[e+"cm_re"] = u.data[e+"cm_re"].split(',');
            }
            if (typeof u.data[e+"cm_sp"] === "string") {
              u.data[e+"cm_sp"] = u.data[e+"cm_sp"].split(',');
            }
            if (u.data[e + "cm_re"] instanceof Array && u.data[e + "cm_re"].length > 0) {
              for (f = 0; f < u.data[e + "cm_re"].length; f++) {
                var cm = new _cm("tid", "9");
                cm.cm_re = u.data[e + "cm_re"][f];
                cm.pi = u.data[e+"pi"] || c1(cm.ci);
                cm.st = cm_ClientTS;
                cm.write(1);
              }
            }

            if (u.data[e + "cm_sp"] instanceof Array && u.data[e + "cm_sp"].length > 0) {
              for (f = 0; f < u.data[e + "cm_sp"].length; f++) {
                var cm = new _cm("tid", "9");
                cm.cm_sp = u.data[e + "cm_sp"][f];
                cm.pi = u.data[e+"pi"] || c1(cm.ci);
                cm.st = cm_ClientTS;
                cm.write(1);
              }
            }

            // End tag set - this sends the request
            cmSendTagSet();
            u.data[e+"pi"] = "";
          }

          /* Legacy code for only one impression */
          /*
          if (u.data["ManualImpressionTag_pi"] && (u.data["ManualImpressionTag_cm_sp"] || u.data["ManualImpressionTag_cm_re"])) {
            e="ManualImpressionTag_";
            cmCreateManualImpressionTag(u.data[e+"pi"], u.data[e+"cm_sp"], u.data[e+"cm_re"]);
            u.data[e+"pi"]="";
          }
          */

          if (u.data.order_id || u.data["ShopAction9Tag_on"]) {
            b._cevent="purchase";
          }
    
          if (b._cevent === "purchase") {
            if (u.data.order_currency)cmSetupOther({"cm_currencyCode":u.data.order_currency});
            e = "ShopAction9Tag_";
            u.data[e+"on"] = u.data[e+"on"] || u.data.order_id;
            u.data[e+"tr"] = u.data[e+"tr"] || u.data.order_subtotal;
            u.data[e+"cd"] = u.data[e+"cd"] || u.data.customer_id || utag.data["cp.utag_main_ses_id"];
            u.data[e+"pr"] = u.data[e+"pr"] || u.data.product_id;
            u.data[e+"pm"] = u.data[e+"pm"] || u.data.product_name;
            u.data[e+"qt"] = u.data[e+"qt"] || u.data.product_quantity;
            u.data[e+"bp"] = u.data[e+"bp"] || u.data.product_unit_price;
            u.data[e+"cg"] = u.data[e+"cg"] || u.data.product_category;
            
            for(f = 0;f < u.data[e+"pr"].length; f++) {
              u.data.s_a = u.concat_attr("s_a",e,50,f);
              u.data.sx = u.concat_attr("sx",e,15,f);
              cmCreateShopAction9Tag(u.data[e+"pr"][f], u.data[e+"pm"][f], u.data[e+"qt"][f], u.data[e+"bp"][f], u.data[e+"cd"], u.data[e+"on"], u.data[e+"tr"], u.data[e+"cg"][f], u.data.s_a, u.data.sx);
            }
            cmDisplayShops();
          }
    
          if (u.data.tid["3"] || b._cevent === "purchase") {
            e = "OrderTag_";
            u.data[e+"on"] = u.data["ShopAction9Tag_on"] || u.data[e+"on"];
            u.data[e+"tr"] = u.data["ShopAction9Tag_tr"] || u.data[e+"tr"];
            u.data[e+"cd"] = u.data["ShopAction9Tag_cd"] || u.data[e+"cd"];
            u.data[e+"sg"] = u.data[e+"sg"] || u.data.order_shipping;
            u.data[e+"ct"] = u.data[e+"ct"] || u.data.customer_city;
            u.data[e+"sa"] = u.data[e+"sa"] || u.data.customer_state;
            u.data[e+"zp"] = u.data[e+"zp"] || u.data.customer_zip;
            u.data.o_a = u.concat_attr("o_a",e,50);
            u.data.or = u.concat_attr("or",e,15);
            cmCreateOrderTag(u.data[e+"on"], u.data[e+"tr"], u.data[e+"sg"] , u.data[e+"cd"], u.data[e+"ct"], u.data[e+"sa"], u.data[e+"zp"], u.data.o_a, u.data.or);
          }
    
          if (u.data.tid["2"] || b._cevent === "register" || (u.data["RegistrationTag_em"] && b._cevent === "purchase")) {
            e = "RegistrationTag_";
            u.data[e+"cd"] = u.data["ShopAction9Tag_cd"] || u.data[e+"cd"] || u.data.customer_id || utag.data["cp.utag_main_ses_id"];
            u.data[e+"ct"] = u.data[e+"ct"] || u.data.customer_city;
            u.data[e+"sa"] = u.data[e+"sa"] || u.data.customer_state;
            u.data[e+"zp"] = u.data[e+"zp"] || u.data.customer_zip;
            u.data[e+"cy"] = u.data[e+"cy"] || u.data.customer_country;
            u.data.rg = u.concat_attr("rg",e,50);
            cmCreateRegistrationTag(u.data[e+"cd"], u.data[e+"em"], u.data[e+"ct"], u.data[e+"sa"], u.data[e+"zp"], u.data[e+"cy"], u.data.rg);
          }
    
          if ((u.data.tid["4"] && b._cevent != "purchase") || b._cevent === "cartview") {
            if (u.data.order_currency)cmSetupOther({"cm_currencyCode":u.data.order_currency});
            e = "ShopAction5Tag_";
            u.data[e+"pr"] = u.data[e+"pr"] || u.data.product_id;
            u.data[e+"pm"] = u.data[e+"pm"] || u.data.product_name;
            u.data[e+"qt"] = u.data[e+"qt"] || u.data.product_quantity;
            u.data[e+"bp"] = u.data[e+"bp"] || u.data.product_unit_price;
            u.data[e+"cg"] = u.data[e+"cg"] || u.data.product_category;
            for(f = 0;f < u.data[e+"pr"].length; f++) {
              u.data.s_a = u.concat_attr("s_a",e,50,f);
              u.data.sx = u.concat_attr("sx",e,15,f);
              cmCreateShopAction5Tag(u.data[e+"pr"][f], u.data[e+"pm"][f], u.data[e+"qt"][f], u.data[e+"bp"][f], u.data[e+"cg"][f], u.data.s_a, u.data.sx);
            }
            cmDisplayShops();
          }
    
          if ((u.data.tid["5"] && b._cevent != "purchase") || b._cevent === "prodview") {
            e = "ProductviewTag_";
            u.data[e+"pr"] = u.data[e+"pr"] || u.data.product_id;
            u.data[e+"pm"] = u.data[e+"pm"] || u.data.product_name;
            u.data[e+"cg"] = u.data[e+"cg"] || u.data.product_category;
            u.data.pr_a = u.concat_attr("pr_a",e,50);
            if (u.data[e+"pr"] instanceof Array && u.data[e+"pr"].length>1) {
              for(f = 0;f<u.data[e+"pr"].length;f++) {
                u.data.pr_a = u.concat_attr("pr_a",e,50,f);
                cmCreateProductviewTag(u.data[e+"pr"][f], u.data[e+"pm"][f], u.data[e+"cg"][f], u.data.pr_a);
              }
            }else{
              cmCreateProductviewTag(u.data[e+"pr"]+'', u.data[e+"pm"]+'', u.data[e+"cg"]+'', u.data.pr_a, u.data[e+"cm_vc"]);
            }
          }
    
          if (u.data.tid["14"] || u.data["ConversionEventTag_cid"] || b._cevent === "conversion") {
            e = "ConversionEventTag_";
            u.data[e+"cid"] = u.data[e+"cid"] || "conversion";
            u.data[e+"cat"] = u.data[e+"cat"] || "2";
            u.data.c_a = u.concat_attr("c_a",e,50);
            u.data.cx = u.concat_attr("cx",e,5);
            cmCreateConversionEventTag(u.data[e+"cid"], u.data[e+"cat"], u.data[e+"ccid"], u.data[e+"cpt"], u.data.c_a, u.data.cx);
            u.data[e+"cid"] = "";
          }
    
          if (u.data.tid["15"] || u.data["ElementTag_eid"]) {
            e = "ElementTag_";
            u.data.e_a = u.concat_attr("e_a",e,50);
            cmCreateElementTag(u.data[e+"eid"], u.data[e+"ecat"], u.data.e_a);
            u.data[e+"eid"] = "";
          }
        }

        // End Loader Callback

        if (document.getElementById("tealium_cormetrics147")) {
          u.loader_cb();
        }else{
          u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'tealium_cormetrics147' });
        }
        

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }('147', 'oakley.hybrisprod'));
} catch (error) {
  //utag.DB(error);
}
//end tealium universal tag
