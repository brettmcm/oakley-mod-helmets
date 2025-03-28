//~~tv:19074.20150119
//~~tc: Added Conversion Input Pixel

//tealium universal tag - utag.sender.19074 ut4.0.201507282248, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    u.ev = {"view" : 1};

      u.map={"_csubtotal":"order_amt,amt","product_unit_price":"shoup","product_id":"shopid","product_quantity":"shoq","steelhouse_product_brand":"shpb","site_currency":"shocur","order_id":"order_id,oid"};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, g;

        u.data = {
          "base_url" : "",
          "acct" : "10934",
          "additional" : "",
          "shadditional" : "",
          // E-Commerce Vars
          "order_id" : "",
          "order_subtotal" : "",
          "product_id" : [],
          "product_quantity" : [],
          "product_unit_price" : []
        };

        // Start tag-scoped extensions
        
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || b._corder;
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal;
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        var adv = [];
        for (d in utag.loader.GV(u.data)) {
          if (d.indexOf("adv.track.") > -1) {
            adv = d.split(".");
            u.data.additional += "&" + adv[2] + "=" + u.data[d];
          } else if (d.indexOf("adv.conv.") > -1) {
            adv = d.split(".");
            u.data.shadditional += "&" + adv[2] + "=" + u.data[d];
          }
        }

        (function () {
          "use strict";
          var e = null,
              b = "4.0.0",
              n = u.data.acct,
              additional = u.data.additional || "",
              t, r, i;
          try {
              t = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 2048)) : ""
          } catch (o) {
              t = document.referrer !== null ? document.referrer.toString().substring(0, 2048) : ""
          }
          try {
              r = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location
          } catch (u) {
              r = document.location
          }
          try {
              i = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 2048)) : ""
          } catch (a) {
              try {
                  i = r !== null ? encodeURIComponent(r.toString().substring(0, 2048)) : ""
              } catch (f) {
                  i = ""
              }
          }
          var l, c = document.createElement("script"),
              h = null,
              p = document.getElementsByTagName("script"),
              d = Number(p.length) - 1,
              v = document.getElementsByTagName("script")[d];
          if (typeof l === "undefined") {
              l = Math.floor(Math.random() * 1e17)
          }
          h = "dx.steelhousemedia.com/spx?" + "dxver=" + b + "&shaid=" + n + "&tdr=" + t + "&plh=" + i + "&cb=" + l + additional;
          c.type = "text/javascript";
          c.src = ("https:" === document.location.protocol ? "https://" : "http://") + h;
          v.parentNode.insertBefore(c, v)
      })()

      if (u.data.order_id) {
        (function() {
            var x = null,
                p, q, m,
                o = u.data.acct,
                l = u.data.order_id,
                i = u.data.order_subtotal,
                c = "",
                k = u.data.product_id.join(","),
                g = u.data.product_quantity.join(","),
                j = u.data.product_unit_price.join(","),
                us = "",
                shadditional = u.data.shadditional || "";
            try {
                p = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 512)) : ""
            } catch (n) {
                p = document.referrer !== null ? document.referrer.toString().substring(0, 512) : ""
            }
            try {
                q = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location
            } catch (b) {
                q = document.location
            }
            try {
                m = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 512)) : ""
            } catch (z) {
                try {
                    m = q !== null ? encodeURIComponent(q.toString().substring(0, 512)) : ""
                } catch (h) {
                    m = ""
                }
            }
            var A, y = document.createElement("script"),
                w = null,
                v = document.getElementsByTagName("script"),
                t = Number(v.length) - 1,
                r = document.getElementsByTagName("script")[t];
            if (typeof A === "undefined") {
                A = Math.floor(Math.random() * 100000000000000000)
            }
            w = "dx.steelhousemedia.com/spx?conv=1&shaid=" + o + "&tdr=" + p + "&plh=" + m + "&cb=" + A + "&shoid=" + l + "&shoamt=" + i + "&shocur=" + c + "&shopid=" + k + "&shoq=" + g + "&shoup=" + j + "&shpil=" + us + shadditional;
            y.type = "text/javascript";
            y.src = ("https:" === document.location.protocol ? "https://" : "http://") + w;
            r.parentNode.insertBefore(y, r)
        })(u.data);
      }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("249", "oakley.hybrisprod"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag


