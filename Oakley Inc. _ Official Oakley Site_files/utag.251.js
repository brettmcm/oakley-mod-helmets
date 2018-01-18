//~~tv:19022.20150119
//~~tc: E-Commerce Update, stop array access of undefined E-Commerce variables

//tealium universal tag - Steelhouse - utag.sender.19022 ut4.0.201507282248, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1};
  u.qsp_delim="&";
  u.kvp_delim="=";
  u.aid="10248";
  u.type="product";
  u.vars=",aid,order_id,order_amt,shcv,shcq,shcp,shpn,shpc,shpp,shpb,shpi,shps,tdr,plh,cb,type,";
  u.shpn=""; u.shpi=""; u.shcv="";
  u.base_url="//px.steelhousemedia.com/st?";
  u.map={"_csubtotal":"order_amt,amt","product_unit_price":"shoup","product_id":"shopid","product_quantity":"shoq","steelhouse_product_brand":"shpb","site_currency":"shocur","order_id":"order_id,oid"};
  u.extend=[];

  u.send=function(a,b,c,d,e,f,g){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      
      c=[];g=[];
      for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
	      if(u.vars.indexOf(','+e[f]+',')>-1){
	        u[e[f]]=b[d];
	      }else{
	        g.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))
	      }
      }}}
      var _cprod = b._cprod ? b._cprod.slice(0) : [];
      var _cquan = b._cquan ? b._cquan.slice(0) : [];
      var _cprice = b._cprice ? b._cprice.slice(0) : [];
      var _cprodname = b._cprodname ? b._cprodname.slice(0) : [];
      var _ccat = b._ccat ? b._ccat.slice(0) : [];
      var _cbrand = b._cbrand ? b._cbrand.slice(0) : [];
      var _csku = b._csku ? b._csku.slice(0) : [];

      c.push('aid='+u.aid);
      if(!u.order_id){u.order_id=b._corder;}
      if(!u.order_amt){u.order_amt=b._ctotal;}
      if(!u.tdr){u.tdr=b["dom.referrer"];}
      if(!u.plh){u.plh=b["dom.url"];}
      if(!u.cb){u.cb=b["cp.utag_main__st"];}

      if(typeof u.order_id!='undefined' && u.order_id){
	      u.base_url+="conv=1&shver=3.0.0&";
	      if(!u.shocur){u.shocur=b._ccurrency;}
        if(!u.shopid){u.shopid=_cprod.join(",");}
        if(!u.shoq){u.shoq=_cquan.join(",");}
        if(!u.shoup){u.shoup=_cprice.join(",");}
        c.push("order_id="+u.order_id);
        c.push("order_amt="+u.order_amt);
        c.push("shocur="+u.shocur);
        c.push("shopid="+u.shopid);
        c.push("shoq="+u.shoq);
        c.push("shoup="+u.shoup);
        c.push("cb="+u.cb);
      }else if(u.type=="product" || u.shpn){
	// default product name set if shpn is not mapped (only set to first product)
        if(u.shpn==""){u.shpn=((_cprodname[0])?_cprodname[0]:"");}
        if(!u.shpc){u.shpc=((_ccat[0])?_ccat[0]:'');}
        if(!u.shpp){u.shpp=((_cprice[0])?_cprice[0]:'');}
        if(!u.shpb){u.shpb=((_cbrand[0])?_cbrand[0]:'');}
        if(!u.shps){u.shps=((_csku[0])?_csku[0]:'');}
        c.push("cb="+u.cb);
        c.push("shcv=&shcq=&shcp=");
        c.push("shpn="+u.shpn);
        c.push("shpc="+u.shpc);
        c.push("shpp="+u.shpp);
        c.push("shpb="+u.shpb);
        c.push("shpi="+((u.shpi)?u.shpi:''));
        c.push("shps="+u.shps);
        c.push("tdr="+u.tdr);
        c.push("plh="+u.plh);
      }else if(u.type=="cart" || u.shcv){
        if(!u.shcv){u.shcv=b._csubtotal;}
        if(u.shcv=="0.00"){u.shcv="";}
        if(!u.shcq){u.shcq=_cquan.join(",");}
        if(!u.shcp){u.shcp=_cprod.join(",");}
        c.push("cb="+u.cb);
        c.push("shcv="+u.shcv);
        c.push("shcq="+u.shcq);
        c.push("shcp="+u.shcp);
      	c.push("shpn=&shpc=&shpp=&shpb=&shpi=&shps=");
        c.push("tdr="+u.tdr);
        c.push("plh="+u.plh);
      }else{
        c.push("cb="+u.cb);
        c.push("tdr="+u.tdr);
        c.push("plh="+u.plh);
      }

      if(g.length>0){c.push(g.join('&'));}
      u.head=document.getElementsByTagName("body")[0];u.scr=document.createElement("script");u.scr.src=u.base_url+c.join(u.qsp_delim);u.head.appendChild(u.scr);
    }
  };
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('251','oakley.hybrisprod');
}catch(e){}
//end tealium universal tag
