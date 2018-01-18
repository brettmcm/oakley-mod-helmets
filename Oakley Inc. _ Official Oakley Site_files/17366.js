var __sco = typeof __sco == "undefined" ? {} : __sco;
var __scd = typeof __scd == "undefined" ? {} : __scd;
__sco.v1 = __sco.v1 || {};
__sco.osr = __sco.osr || {};
__sco.config = __sco.config || {};
__sco.sender = __sco.sender || {};
__sco.support = __sco.support || {};
__sco.scraper = __sco.scraper || {};
__sco.storage = __sco.storage || {};
__sco.provider = __sco.provider || {};
__sco.management = __sco.management || {};
__sco.management.trigger = __sco.management.trigger || {};
__sco.mainRun = __sco.mainRun || false;
var basketLink = "";

/** Config module - sets up things such as use OSR, api URL's, triggers, status detection, etc **/
__sco.config = {
    'live': true, // Send data to live or staging
    'v1': true, // Send data to v1
    'v2': true, // Send data to v2
    'osr': true, // Enable OSR

    'fallbackallowed': true, // Enable auto fall back to traditional data capture
    'translatev1': false, // Translate the data before sending to V1

    'allcurrencies': false, // Allow pricecurr to try to use the entended search list
    'persistcustomer': true, // Persist customer details accross sessions
    'geoip': false, // Use Geo IP Location (Server side)

    /** MIGRATION SETTINGS **/
    'migrationcollect': false, // Collect customer data from the old cookie if it exists
    'daystorun': 20,          // Number of days after live (the date set below) to still look at the cookie
    'startdate': 0,           // In milliseconds, the date the script went live

    'guid': 'da2841f2-a4fb-452d-bcfa-55781809c83a', // V2 guid
    'v1guid': 'da2841f2-a4fb-452d-bcfa-55781809c83a', // V1 guid, the api key for the client

    'triggers': ['exit', 'timeout'], // Set the triggers to use, use either load or exit and timeout together

    'status1': [function () { return isStatusOne(); }], // Strings to be set in lower case, will be compared against the URL of the current page. Functions will be executed and must return either true, false or a number to use as the status
    'status2': [function () { return isStatusTwo(); }],
    'status3': ["orderconfirmation"],
    'status4': ["STATUSFOUR"],
    'exclude': ["RUN ON EVERYTHING"],

    'onchange': {
        'email': ["#email", "input[name=email]:first", "#email-address", "#register.email", "#j_username", "#forgottenPwd.email", ".email-signup:first input:first", ".input-sc:first"],
        'first': ["#first-name", "#register.firstName", "#form-new-cust"],
        'last': ["#last-name", "#register.lastName", "#register.lastName"],
        'telephone': ["#phone-number"],
        'mobile': [],
        'salutation': [],
        'optout': []
    },
    'block': {},
    'optneg': false, // Default value of opt out button

    'external': {
        "selector string here": "optional function here, must update the Object status if you do this yourself",
        "can have another if you want": "if this is anything but a function it just gets ignored"
    },

    'sessiontime': 1800, // The time for a session to be inactive before creating a new one in seconds, so 1800 is 30 minutes
    'timerruns': 2, // The number of times to send a timestamp
    'timeout': 900, // The timeout triggers period in seconds, so 900 is 15 minutes
    'mintimeout': 60, // In seconds, minimum time since last timestamp sent - for onload set to 0
    'cookieexpiry': 1095, // The number of days in the future for the cookie to expire (1095 is 3 years)

    'status4overwrite': [/* 300 If a completion then overwrite the status 4 */],
    'status4restart': [/* 100, 200 If a basket or email after a status 4 then restart the session */],

    // DO NOT CHANGE THE FOLLOWING
    'providerregex': /(http[s]*):\/\/(d22j4f[\w\W]+|d30ke5[\w\W]+|d16fk[\w\W]+|app[-staging]*\.salecycle)(\.com|\.co\.uk|\.net)/, // The regex to match the provider hostname

    'v1api': 'https://d30ke5tqu2tkyx.cloudfront.net/import/lite/impression.ashx',
    'v1completion': 'https://d30ke5tqu2tkyx.cloudfront.net/import/lite/impression.ashx',
    'v2api': 'https://d22j4fzzszoii2.cloudfront.net/impression',
    'v2onload': '',
    'providerhost': 'https://d22j4fzzszoii2.cloudfront.net/provider',
    'v1providerhost': 'https://d30ke5tqu2tkyx.cloudfront.net/import/lite/provider.aspx',
    'errorapi': 'https://d30ke5tqu2tkyx.cloudfront.net/import/capture.aspx',

    'sessionfields': ['i', 'm', 'geo'], // The standard fields within the session object which are not to be translated
    'itemfields': ['n', 'i', 'q', 'v', 'd1', 'd2', 'u', 'f1', 'f2'], // The standard fields within an item which are not to be translated

    'doc': {
        'sv': '5.6',                            // Script Version
        'v': '1.0',                              // schema version
        'd': new Date().getTime().toString(),    // utc date
        'r': 100,                                // The request type
        'u': document.location.href,                  // page URL/title
        't': 0,                                 // type integer of the request (100,200,300...)
        'o': '',                                 // order ID
        'cc': false,                              // Claim conversion flag
        's': {                                   // * session object
            'i': '',                             // session ID
            'm': ''                              // machine ID
        },
        'i': 1050,                                 // client ID
        'i1': 17366,                                // V1 client ID
        'c': {                                  // * client object
            'f': '',                            // name
            'l': '',                            // surname
            'e': '',                            // email address
            'o': '0',                           // optout
            's': '',                            // salutation
            'p': {                              // phone numbers
                'm': '',                            // mobile
                'l': ''                             // telephone
            }
        },
        'b': {                                   // * basket
            'c': '',                             // the basket currency
            'v': '',                             // basket total value
            'i': []                              // basket items
        },
        'g': [],                                  // * errors object
        'm': {}                                   // * meta data object
    },
    'timestamptemplate': {
        'v': '1.0',
        'r': 200,
        'u': document.location.href,                  // page URL/title
        'd': new Date().getTime().toString(),
        't': 0,
        'i': 1050,
        'i1': 17366,
        'm': {
            'si': screen.availHeight + '-' + screen.availWidth + '-' + screen.colorDepth + '-' + screen.height + '-' + screen.width,
            'ua': navigator.userAgent
        },
        's': {
            'i': '',
            'm': ''
        },
        'g': []
    }
};


function isStatusOne() {

    if (__sco.contains(__sco.loc, "cart") || __sco.contains(__sco.loc, "/checkout/single/summary")) {
        return true;

    } else if (__sco.contains(__sco.loc, "http://www.oakley.com/en/")) {

        if (__sco.type(__sco.miniMonitor) == "undefined") {
            __sco.miniMonitor = new __sco.monitor();
            __sco.miniMonitor.compare = function () { return _scs('div.products') != null ? _scs('div.products:first').innerHTML : ''; }
            __sco.miniMonitor.action = function() { return !__sco.mainRun ? __sco.management.main() : __sco.management.prerun(); }
            __sco.miniMonitor.startstate = _scs('div.products') != null ? _scs('div.products:first').innerHTML : '';
            __sco.miniMonitor.start();
        }

        if (_scs('div.fixed .products a.product') != null) {
            var basketType = 'mini';
            return true;
        }

    }
    return false;
}


function isStatusTwo() {

    if (!isStatusOne() && !__sco.contains(__sco.loc, "orderconfirmation")) {
        return true;
    }
    return false;
}


/** Get the data for status 1 **/
__sco.scraper.statusone = function () {

    //Pro site banner check
    if(__sco.contains(_scs('div.logindesc','',['text']),"Oakley Pro Site")){
      var emailFilter = "[[NOSEND]]"
    } else {  emailFilter = "";}

    var urlLoc = document.URL.split("/")[3];
    var filLoc = document.URL.split(".")[0].split("/")[2] == 'it-ch' ? 'it' : document.URL.split(".")[0].split("/")[2];
    filLoc = "-_-" + filLoc + "-_-";

    if (__sco.type(__sco.roomMonitor) == "undefined") {
        __sco.roomMonitor = new __sco.monitor();
        __sco.roomMonitor.compare = function () { return _scs(".input-sc:first") != null ? _scs(".input-sc:first").value : ''; }
        __sco.roomMonitor.action = function () { __sco.management.prerun(); }
        __sco.roomMonitor.startstate = _scs(".input-sc:first") != null ? _scs(".input-sc:first").value : '';
        __sco.roomMonitor.start();
    }

    if (__sco.contains(__sco.loc, "/checkout/single/summary")) {

        __scd.cc = true;

        if (__sco.type(__sco.checkMonitor) == "undefined") {
            __sco.checkMonitor = new __sco.monitor();
            __sco.checkMonitor.compare = function () { return _scs('.checkout-cart-tabular:first') != null ? _scs('.checkout-cart-tabular:first').innerHTML : ''; }
            __sco.checkMonitor.action = function () { return __sco.management.prerun(); }
            __sco.checkMonitor.startstate = _scs('.checkout-cart-tabular:first') != null ? _scs('.checkout-cart-tabular:first').innerHTML : '';
            __sco.checkMonitor.start();
        }

        if (_scs('div.checkout-cart-tabular .checkout-cart-data') != null) {

            try {
                __scd.b.v = _scs('#lower-summary-sub-total div.cost', '0 totalprice', ['text', 'pricecurr']); //Set the total value
                __scd.b.c = __sco.cursym;
            }
            catch (be2) {
                be2.description = "201 " + (be2.description || "");
                __sco.error(be2);
            }
            try {
                /* Set rows here **/
                __sco.each(_scs('div.checkout-cart-tabular .checkout-cart-data .checkout-cart-row', 's300 product rows'), function (ix, val) {
                    var src = "(http://|https://)", href = "(http://|https://)";

                    var itemImage = __sco.attr(_scs([val, '.product-image-wrapper img:first'], '7 image'), "src");
                    var itemId = __sco.contains(itemImage, '/recipe/') ? __sco.inbetween('/recipe/', '/image/', itemImage, 'ff') : __sco.inbetween('', '_', __sco.inbetween('main_', '', itemImage, 'fl'), 'ff');

                    if (_scs([val, '.item-price .item-price-strikethrough:first']) != null && _scs([val, '.item-price .red:first']) != null) {
                        var itemPrice = _scs([val, '.item-price .red:first'], 's501 discounted price', ['text', 'pricecurr']);
                    //Make sure we aren't scraping old and new prices as one together
                    } else if (_scs([val, '.item-price:first']) != null && __sco.pricecurr(__sco.text(_scs([val, '.item-price:first']))) < 10000) {
                        var itemPrice = _scs([val, '.item-price:first'], 's502 normal price', ['text', 'pricecurr']);
                    }

                    var itemQty = _scs([val, "div.quantity:first"], "4 itemqty", ["text"]);

                     //color 
                    if(__sco.contains(_scs([val, ".product-description"],'',['text']),"Color")){
                        var itemColor = "Color: " + _scs([val, ".product-description .product-description-option:last"],'',['text']);
                    } else { itemColor = '';}                    

                    if(__sco.contains(_scs([val, ".product-description"],'',['text']),"Lens")) {
                      itemColor ="Lens" +  __sco.inbetween('Lens','',_scs([val, ".product-description"],'',['text']),'fl');
                    } 

                    //REPOP LINK BUILD
                    var linkJoin = basketLink == "" || basketLink === undefined ? '[sc_qm]' : '[sc_amp]';
                    var linkAdd = linkJoin + "productCode=" + itemId + "[sc_amp]qty=" + itemQty;
                    basketLink = basketLink + linkAdd;

                    __scd.s.basketLink = basketLink;

                    // Set basket values here
                    __scd.b.i.push({
                        'n': _scs([val, "div.product-title:first"], '2 itemname', ["text"]),
                        'i': itemId,
                        'q': itemQty,
                        'v': itemPrice,
                        'f1': "http://www.oakley.com",
                        'f2' : emailFilter + filLoc,
                        'itemColor' : itemColor,
                        'u': __sco.contains(itemImage, '/recipe/') ? itemImage : "http://www.oakley.com" + __sco.clear(itemImage, src, "g")
                    });
                });
            }
            catch (be1) {
                be1.description = "101 " + (be1.description || "");
                __sco.error(be1);
            }
        }

    } else if (__sco.contains(__sco.loc, '/cart')) {

        if (__sco.type(__sco.cartMonitor) == "undefined") {
            __sco.cartMonitor = new __sco.monitor();
            __sco.cartMonitor.compare = function () { return _scs('.product-wrapper:first') != null ? _scs('.product-wrapper:first').innerHTML : ''; }
            __sco.cartMonitor.action = function () { return __sco.management.prerun(); }
            __sco.cartMonitor.startstate = _scs('.product-wrapper:first') != null ? _scs('.product-wrapper:first').innerHTML : '';
            __sco.cartMonitor.start();
        }

        if (_scs('.product-wrapper:first') != null) {
            __scd.cc = true;

            try {
                __scd.b.v = _scs(".subtotal-price:first", "Total Price", ["text", "pricecurr"]);
                __scd.b.c = __sco.cursym;
                
                __scd.s.phoneNum = "00800 62553985";
                __scd.s.address = "Oakley Icon, Verulam Point, Second Floor, Station Way, AL1 5HE, UK";

                if (filLoc == "-_-www-_-") {
                    var phoneNum = "800.431.1439";
                    var address = "1 Icon, Foothill Ranch, CA 92610"
                }

                __scd.s.urlLoc = urlLoc;
                __scd.s.filLoc = filLoc;

                //ftp moved to meld
                /*__scd.s.example = "";*/ // Example session field
            }
            catch (be2) {
                be2.description = "201 " + (be2.description || "");
                __sco.error(be2);
            }
            try {
                /* Set rows here **/
                __sco.each(_scs('.product-wrapper', '1 rows'), function (ix, val) {
                    // Set basket values here
                    var itemQty = ""; //ITEM QTY CAPTURE
                    if (_scs([val, '.option-text:first'])) {
                        itemQty = _scs([val, '.option-text:first'], "Item Qty A", ["text"]) != '' ? _scs([val, '.option-text:first'], "Item Qty A", ["text"]) : 1;
                    } else if (_scs([val, '.OCPQuantity:first'])) {
                        itemQty = _scs([val, '.OCPQuantity:first'], "Item Qty B", ["text"]);
                    }

                    var itemId = _scs([val, "a:first"], "Item ID").href.split("=")[1].split("&")[0];

                    //REPOP LINK BUILD
                    var linkJoin = basketLink == "" || basketLink === undefined ? '[sc_qm]' : '[sc_amp]';
                    var linkAdd = linkJoin + "productCode=" + itemId + "[sc_amp]qty=" + itemQty;
                    basketLink = basketLink + linkAdd;

                    var itemColor =   __sco.contains(_scs([val, ".item-desc:nth-child(0)"],'',['text']),"Color") ? _scs([val, ".item-desc:nth-child(0)"],'color',['text']) :  __sco.contains(_scs([val, ".item-desc:nth-child(1)"],'',['text']),"Color") ?  _scs([val, ".item-desc:nth-child(1)"],'color',['text']) : __sco.contains(_scs([val, ".item-desc:nth-child(1)"],'',['text']),"Lens") ? _scs([val, ".item-desc:nth-child(1)"],'',['text']) : '';
                                       
                    var itemImage = __sco.contains(__sco.attr(_scs([val, "img:first"], "Item Image"), "src"), "cloudfront") ? __sco.attr(_scs([val, 'img:first'], '7 image'), "src").replace("https", "http") : "http://www.oakley.com" + __sco.attr(_scs([val, 'img:first'], '7 image'), "src");
                    var itemShipping = _scs([val, ".item-state.available:first"], "Stock Check", ["text"]);
                    var itemPrice = _scs([val, 'div.price:first'], "Item Price").innerHTML

                    if (__sco.contains(itemPrice, '/strike>')) {
                        itemPrice = __sco.pricecurr(__sco.inbetween('/strike>', '', itemPrice, 'll'));
                    } else if (__sco.contains(itemPrice, '/span>')) {
                        itemPrice = __sco.pricecurr(__sco.inbetween('/span>', '', itemPrice, 'll'));
                    } else {
                        itemPrice = _scs([val, 'div.item-price:first'], "5 Item Price", ['text', 'pricecurr']);
                    }

                    __scd.s.basketLink = basketLink;

                    var itemLink = __sco.inbetween('.com', '', _scs([val, 'a:nth-child(1)'], "Item Id").href, 'fl');

                    __scd.b.i.push({
                        'n': _scs([val, 'a:nth-child(1)'], "Item Link", ["text"]),
                        'i': __sco.inbetween("product/", "?", _scs([val, 'a:nth-child(1)'], "Item Id").href),
                        'q': itemQty,
                        'v': itemPrice,
                        'f1': __sco.loc.split(".com")[0] + ".com" + itemLink,
                        'f2': emailFilter + __scd.s.filLoc,
                        'u': itemImage,                       
                        'itemColor': itemColor,
                        'shipping': itemShipping
                    });
                });
            }
            catch (be1) {
                be1.description = "101 " + (be1.description || "");
                __sco.error(be1);
            }
        }

    } else if (typeof basketType != 'undefined' && basketType == 'mini') {

        __scd.cc = true;

        try {
            __scd.b.v = _scs('div.fixed div.subtotal span:first', '0 totalprice', ['text', 'pricecurr']); //Set the total value
            __scd.b.c = __sco.cursym;
        }
        catch (be2) {
            be2.description = "201 " + (be2.description || "");
            __sco.error(be2);
        }
        try {
            /* Set rows here **/
            __sco.each(_scs('div.fixed .products a.product', 's200 product rows'), function (ix, val) {
                var src = "(http://|https://)", href = "(http://|https://)";

                var itemImage = __sco.attr(_scs([val, 'img:first'], '7 image'), "src");
                var itemId = __sco.attr(_scs([val, 'div.flex:first'], 's101 item id'), 'data-id_sku');
                var itemPrice = __sco.pricecurr(__sco.inbetween('/strike>', '', _scs([val, 'div.price:first span:first'], 'Item Price (mini)').innerHTML, 'll'))
                var itemQty = _scs([val, "div.quantity span:first"], "4 itemqty", ["text"]);

                //REPOP LINK BUILD
                var linkJoin = basketLink == "" || basketLink === undefined ? '[sc_qm]' : '[sc_amp]';
                var linkAdd = linkJoin + "productCode=" + itemId + "[sc_amp]qty=" + itemQty;
                basketLink = basketLink + linkAdd;

                __scd.s.basketLink = basketLink;

                // Set basket values here
                __scd.b.i.push({
                    'n': _scs([val, "div.info .name"], '2 itemname', ["text"]),
                    'i': itemId,
                    'q': itemQty,
                    'v': itemPrice,
                    'f1': "http://www.oakley.com" + __sco.clear(__sco.attr(val, "href"), href, "g"),
                    'f2': emailFilter + filLoc,
                    'u': __sco.contains(itemImage, '/recipe/') ? itemImage : "http://www.oakley.com" + __sco.clear(__sco.attr(_scs([val, 'img:first'], '7 image'), "src"), src, "g")
                });
            });
        }
        catch (be1) {
            be1.description = "101 " + (be1.description || "");
            __sco.error(be1);
        }
    }
}

/** Get the data for status 2 **/
__sco.scraper.statustwo = function () {
    try {
    }
    catch (s2) {
        s2.description = "2000 " + (s2.description || "");
        __sco.error(s2);
    }
}

/** Get the data for status 3 **/
__sco.scraper.statusthree = function () {
    try {

        if (_scs('.headline-order-number:first') != null) {
            __scd.s.ordernumber = __sco.text(_scs('.headline-order-number:first'));
        } else if (typeof bnOrderId != 'undefined') {
            __scd.s.ordernumber = bnOrderId;
        } else if (typeof utag_data == 'object' && typeof utag_data.order_id != 'undefined') {
            __scd.s.ordernumber = utag_data.order_id;
        } else if (typeof OrderDetails == 'object' && typeof OrderDetails[0] == 'object' && typeof OrderDetails[0].purchaseId != 'undefined') {
            __scd.s.ordernumber = OrderDetails[0].purchaseId;
        }
        //__scd.s.ordernumber = "ordevrnumber";
    }
    catch (s3) {
        s3.description = "3000 " + (s3.description || "");
        __sco.error(s3);
    }
}

/** Get the data for status 4 **/
__sco.scraper.statusfour = function () {
    try {
        // Get any data you want to assocaite
    }
    catch (s4) {
        s4.description = "4000 " + (s4.description || "");
        __sco.error(s4);
    }
}

/** Main function - sets up and controls the overall flow **/
__sco.management.main = function () {
    // First entry point of the script
    try {
        // Create a custom error, this can be thrown and handled differently - stops script executing
        __sco.management.NoSupport = function (message) { this.name = "NoSupport"; this.message = message || ""; }
        __sco.management.NoSupport.prototype = new Error();

        // added additional domain block for oakleyvault
        if (__sco.management.canexec() && !__sco.contains(__sco.loc, 'oakleyvault.com')) {
            if (__sco.storage.get('Automation.s') || __sco.contains(document.cookie, 'Automation.s=true')) {
                __sco.config.osr = false;
            }

            __sco.mainRun = true;
            // Set up support properties in the support module, return value indicating whether or not we can work!
            if (!__sco.support.setsupport())
                throw new __sco.management.NoSupport("No Support Available");

            // If client is set to live, update the config entries for v1
            if (__sco.config.live) {
                __sco.config.v1api = __sco.config.v1api.replace("d30ke5tqu2tkyx.cloudfront.net", "d16fk4ms6rqz1v.cloudfront.net");
                __sco.config.errorapi = __sco.config.errorapi.replace("d30ke5tqu2tkyx.cloudfront.net", "d16fk4ms6rqz1v.cloudfront.net");
                __sco.config.v1completion = __sco.config.v1completion.replace("d30ke5tqu2tkyx.cloudfront.net", "d16fk4ms6rqz1v.cloudfront.net");
                __sco.config.v1providerhost = __sco.config.v1providerhost.replace("d30ke5tqu2tkyx.cloudfront.net", "d16fk4ms6rqz1v.cloudfront.net");
            }

            /**
                Multiple Client ID's to be set here
                Put conditions inside the try to work out the client ID, then set the client ID and GUID
            **/
            /**
                try {
                    __sco.config.doc.i1 =
                    __sco.config.timestamptemplate.i1 =
                    __sco.config.v1guid =
                }
                catch(ce) {
                    ce.title = "MAIN__ClientDecision__";
                    // Client ID Error
                    if (__sco.config.v1)
                        __sco.sender.send("POST", __sco.config.errorapi, __sco.v1runtime(ce));
                }
            **/

            // Check whether or not the provider needs to be initialised, if so then initialise it
            // If provider, add callback which calls adaded to handle case when provider loads before page load
            // If not, just add contentLoaded as normal
            if (__sco.support.useprovider) {
                if (__sco.config.v2 && __sco.config.v1) {
                    __sco.management.v1listener = new __sco.provider(__sco.config.v1providerhost + "?id=" + __sco.config.v1guid.toUpperCase(), "sc_provider_v1", __sco.management.interget, ["__sc", __sco.management.setsession, false]);
                    __sco.management.listener = new __sco.provider(__sco.config.providerhost + "?id=" + __sco.config.guid.toUpperCase(), "sc_provider_iframe", __sco.management.interget, ["__sc", __sco.management.setsession, false]);
                }
                else if (__sco.config.v1)
                    __sco.management.listener = new __sco.provider(__sco.config.v1providerhost + "?id=" + __sco.config.v1guid.toUpperCase(), "sc_provider_iframe", __sco.management.interget, ["__sc", __sco.management.setsession, false]);
                else
                    __sco.management.listener = new __sco.provider(__sco.config.providerhost + "?id=" + __sco.config.guid.toUpperCase(), "sc_provider_iframe", __sco.management.interget, ["__sc", __sco.management.setsession, false]);
                // If provider and completion send IP user agent timestamp
                if (__sco.management.isstatus(__sco.config.status3)) {
                    var timestamp = __sco.clone(__sco.config.timestamptemplate), current = false;
                    if (!__sco.support.storeprovider)
                        current = __sco.tryparse(__sco.storage.get("__sc" + __sco.config.doc[__sco.config.v2 ? 'i' : 'i1'], false));
                    timestamp.t = 301; // Don't have a previous status so set to holding status
                    timestamp.i = __sco.config.doc.i;
                    timestamp.i1 = __sco.config.doc.i1;
                    if (__sco.type(current) == "object") {
                        timestamp.s.i = current.s.i;
                        timestamp.s.m = current.s.m;
                    }
                    __sco.management.timestampapi(timestamp);
                }
            }
            else {
                // If completion, get machine ID from cookie and send timestamp
                if (__sco.management.isstatus(__sco.config.status3)) {
                    var timestamp = __sco.clone(__sco.config.timestamptemplate), current = __sco.config.fallbackallowed ? false : __sco.tryparse(__sco.storage.get("__sc" + __sco.config.doc[__sco.config.v2 ? 'i' : 'i1'], false));
                    timestamp.t = 301; // Default to 301 to protect against case where data not recovered from storage
                    timestamp.i = __sco.config.doc.i;
                    timestamp.i1 = __sco.config.doc.i1;
                    if (__sco.type(current) == "object") {
                        timestamp.t = current.t;
                        timestamp.s.i = current.s.i;
                        timestamp.s.m = current.s.m;
                        timestamp.t = 300;
                    }
                    __sco.management.timestampapi(timestamp);
                }
                // Change the triggers and set to use traditional data capture methods if allowed
                if (__sco.config.fallbackallowed) {
                    __sco.support.traditional = true;
                    __sco.config.triggers = ['load'];
                    __sco.config.translatev1 = true;
                    __sco.config.v1api = __sco.config.v1api.replace("/lite/impression.ashx", "/capture.aspx");
                    __sco.config.v1completion = __sco.config.v1completion.replace("/lite/impression.ashx", "/pixelcapture.aspx");
                }
                __sco.management.contentLoaded(window, __sco.management.interget, ["__sc", __sco.management.setsession, false]);
            }
        }
    }
    catch (me) {
        if (me instanceof __sco.management.NoSupport) {
            // No support so we cannot run, report it
            __sco.management.nosupport(false);
        }
        else {
            me.title = "MAIN__";
            // Generic error, report it back
            if (__sco.config.v1)
                __sco.sender.send("POST", __sco.config.errorapi, __sco.v1runtime(me));
        }
    }
}

/** Pre-run the script to set the status **/
__sco.management.prerun = function () {
    try {
        var status = false, executed = false, empty = false;

        // If we're using Geo IP, then set the flag
        if (__sco.config.geoip)
            __scd.s.geo = true;

        // Detect the status and act appropriately
        if ((status = __sco.management.isstatus(__sco.config.status3)) > 0 || __sco.management.isstatus(__sco.config.status3)) {
            executed = true;
            // Get the order number
            __sco.scraper.statusthree();
            __sco.management.itemtypes();

            status = __sco.tonumber(status);
            if (status && status >= 300 && status < 400)
                __sco.management.setstatus(status, __sco.management.run);
            else
                __sco.management.setstatus(300, __sco.management.run);
        }
        else if ((status = __sco.management.killit()) > 0 || __sco.management.killit()) {
            executed = true;
            // Get any status 4 info
            __sco.scraper.statusfour();
            status = __sco.tonumber(status);
            if (status && status >= 400 && status < 500)
                __sco.management.setstatus(status, __sco.management.run);
            else
                __sco.management.setstatus(400, __sco.management.run);
        }
        else if ((status = __sco.management.isstatus(__sco.config.status1)) > 0 || __sco.management.isstatus(__sco.config.status1)) {
            executed = true;
            // Create a copy of the basket, so if basket is emptied we maintain the last one
            __sco.lastbasket = __sco.clone(__scd.b), customer = "";
            // Clear the old items, if re-run it would add the items otherwise
            __scd.b = __sco.clone(__sco.config.doc.b);
            __sco.scraper.statusone();

            // If the basket was empty, is still empty and the status is 100 then clear
            if (__sco.lastbasket.i.length == 0 && __scd.b.i.length == 0 && __scd.t < 200)
                empty = true;
                // If the basket was not empty, but now is then keep the old basket
            else if (__sco.lastbasket.i.length > 0 && __scd.b.i.length == 0)
                __scd.b = __sco.clone(__sco.lastbasket);
            // Set the data types for the JSON schema (prices to strings and quantities to ints)
            __sco.management.itemtypes();

            // If this is a migration then look for customer details in the old cookie
            if (__sco.config.migrationcollect && __sco.config.persistcustomer && isFinite(new Date(__sco.config.startdate).getTime()) && new Date().getTime() - new Date(__sco.config.startdate) < (__sco.config.daystorun * 60 * 60 * 24 * 1000) && (customer = __sco.storage.get("__sc"))) {
                if (__sco.type(customer) == "string") {
                    __scd.c.e = __scd.c.e == "" && customer.split(":").length > 1 ? customer.split(":")[1] : __scd.c.e;
                    __scd.c.p.l = __scd.c.p.l == "" && customer.split(":").length > 2 ? customer.split(":")[2] : __scd.c.p.l;
                    var names = customer.split(":").length > 0 && customer.split(":")[0].split("|").length > 0 ? customer.split(":")[0].split("|") : [];
                    __scd.c.f = names.length > 0 && __scd.c.f == "" ? names[0] : __scd.c.f;
                    __scd.c.l = names.length > 1 && __scd.c.l == "" ? names[1] : __scd.c.l;
                }
            }

            if (!empty) {
                status = __sco.tonumber(status);
                if (status && status >= 100 && status < 200)
                    __sco.management.setstatus(status, __sco.management.run);
                else
                    __sco.management.setstatus(100, __sco.management.run);
            }
            else {
                __sco.management.run();
            }
        }
        else if ((status = __sco.management.isstatus(__sco.config.status2)) > 0 || __sco.management.isstatus(__sco.config.status2) || (__sco.type(__scd.c.e) == "string" && __scd.c.e != "")) {
            executed = true;
            __sco.scraper.statustwo();
            status = __sco.tonumber(status);
            if (status && status >= 200 && status < 300)
                __sco.management.setstatus(status, __sco.management.run);
            else
                __sco.management.setstatus(200, __sco.management.run);
        }

        if (!executed)
            __sco.management.run();
    }
    catch (pre) {
        pre.title = "PRERUNTIME__";
        // Runtime error, report it back
        if (__sco.config.v1)
            __sco.sender.send("POST", __sco.config.errorapi, __sco.v1runtime(pre));
    }
}

/** Run the data capture and so on **/
__sco.management.run = function () {
    // Start the triggers after the JSON has been saved
    function starttriggers() {
        // If completion and not a completion refresh, send now
        if (__scd.t >= 300 && __scd.t < 400) {
            if (__sco.oldtype != "3")
                __sco.management.sendtoapi();
        }
        else {
            // If the triggers have already been set up and we are using load then this is a re-run, otherwise set the triggers up
            if (__sco.type(__sco.management.trigger.set) == "boolean" && (__sco.contains(__sco.config.triggers, "load") || __sco.support.touchscreen))
                __sco.management.callback("load");
            else
                __sco.management.trigger.setup();
        }
    }

    // If no data has been sent before and v2, then send a timestamp for initialisation
    function v2init(data) {
        if (!(data)) {
            var timestamp = __sco.clone(__sco.config.timestamptemplate);
            timestamp.t = __scd.t;
            timestamp.i = __sco.config.doc.i;
            timestamp.i1 = __sco.config.doc.i1;
            timestamp.s.i = __scd.s.i;
            timestamp.s.m = __scd.s.m;
            __sco.management.intersend("POST", __sco.config.v2api, timestamp);
        }
    }

    try {
        // If no request has been sent for this session yet then send a heartbeat to initialise it
        if (__scd.t >= 100 && __scd.t < 200 && __sco.config.v2 && !(__sco.contains(__sco.config.triggers, "load")) && !(__sco.support.touchscreen)) {
            __sco.management.interget("__sc__lastsent", v2init);
        }

        // Data scraping complete, should have updated JSON itself - save the data, even if nothing has changed the timestamp needs updating
        __sco.management.interset("__sc", __scd, starttriggers);
    }
    catch (re) {
        re.title = "RUNTIME__";
        // Runtime error, report it back
        if (__sco.config.v1)
            __sco.sender.send("POST", __sco.config.errorapi, __sco.v1runtime(re));
    }
}

/**
    Retrieves the old JSON if available or sets up new JSON according to schema
    Clear old items from the JSON
    Check if session ID still valid or renew
    If old type == completion, new type is not and session not passed expiry time send JSON if modified since last send (old)
**/
__sco.management.setsession = function (data) {
    try {
        var machine = "", session = "", type = "", timestamp = "", customer = {}, old = data, v1machine = __sco.storage.get("__scSMT");

        if (__sco.type(old) == "object" && __sco.type(old.c) == "object" && __sco.type(old.s) == "object") {
            // Get existing machine variables, create new copy of the JSON using the schema (ensures we always use latest schema)
            machine = old.s.m; session = old.s.i; timestamp = __sco.tonumber(old.d); type = old.t.toString().charAt(0);
            __scd = old;
        }
        else {
            // Set up new session
            machine = __sco.mid(); session = __sco.guid(); timestamp = new Date().getTime(); __scd = __sco.clone(__sco.config.doc); __sco.support.updatedoc(); type = __scd.t.toString().charAt(0);
        }
        // If we have a v1 machine ID in storage then get it
        if (v1machine && __sco.type(v1machine) == "string" && v1machine.split(":").length > 0 && !!__sco.tonumber(v1machine.split(":")[0]) && (v1machine = v1machine.split(":")[0])) {
            machine = v1machine != machine ? v1machine : machine;
        }

        // If session expired or current session still valid but last request was a completion and current is not then reset session ID
        if ((Math.floor((new Date().getTime() - timestamp) / 1000) > __sco.config.sessiontime) || type == "3") {
            session = __sco.guid();
            customer = __sco.clone(__scd.c);
            // Reset JSON, machine ID and session will be set at the end of this function
            __scd = __sco.clone(__sco.config.doc);
            // Remove the last sent info, new session means this has never been sent
            __sco.management.interremove("__sc__lastsent");
            // If config indicates we don't want to keep customer data over sessions then clear it
            if (__sco.config.persistcustomer)
                __scd.c = customer;

            // Update the support info
            __sco.support.updatedoc();

            // Clear the status
            __scd.t = 0;
        }
        // Set session up unless using traditional
        if (__sco.support.traditional) {
            __scd.s.i = "";
            __scd.s.m = "";
        }
        else {
            __scd.s.m = machine;
            __scd.s.i = session;
        }
        __scd.d = new Date().getTime().toString();
        __sco.__scd = __sco.clone(__scd);
        __sco.oldtype = type;

        __sco.management.prerun();
    }
    catch (sse) {
        sse.title = "SETSESSION__";
        // Runtime error, report it back
        if (__sco.config.v1)
            __sco.sender.send("POST", __sco.config.errorapi, __sco.v1runtime(sse));
    }
}

__sco.management.isstatus = function (test) {
    var s = false;
    __sco.each(test, function (ix, val) {
        if (!s)
            s = __sco.type(val) === "string" ? __sco.contains(__sco.loc, val) : __sco.type(val) === "function" ? val.call(window) : false;
    });
    return s;
}

/** Check for session end, pass function if not using URL's **/
__sco.management.killit = function (func) {
    // This has fired from an event, set the status to 400 (default) and save the changes
    if (__sco.type(func) == "event") {
        __scd.t = 400; // Don't use set status
        __sco.management.interset("__sc", __scd, function () { __sco.management.callback("load"); });
    }
    else {
        return __sco.management.isstatus(__sco.config.status4);
    }
}

/** Function to check for external checkouts on the page and reject their traffic **/
__sco.management.external = function () {
    __sco.each(__sco.config.external, function (ix, val) {
        if (_scs(ix) != null)
            __sco.on("mousedown", (__sco.type(val) !== "function" ? __sco.management.killit : val), _scs(ix));
    });
}

/** Update the types of prices, quantities and session feilds to match the schema **/
__sco.management.itemtypes = function () {
    __scd.b.v = __sco.type(__scd.b.v) !== "string" && __sco.noru(__scd.b.v) ? __scd.b.v.toString() : __scd.b.v;
    __sco.each(__scd.s, function (ix, val) {
        __scd.s[ix] = __sco.type(val) !== "string" && __sco.noru(val) ? val.toString() : val;
    });
    __sco.each(__scd.b.i, function (ix, val) {
        __scd.b.i[ix].q = __sco.type(val.q) !== "number" && __sco.noru(val.q) ? __sco.tonumber(val.q) : val.q;
        __scd.b.i[ix].v = __sco.type(val.v) !== "string" && __sco.noru(val.v) ? val.v.toString() : val.v;
        __sco.each(__scd.b.i[ix], function (iix, ival) {
            if (!__sco.contains(__sco.config.itemfields, iix))
                __scd.b.i[ix][iix] = __sco.type(ival) !== "string" && __sco.noru(ival) ? ival.toString() : ival;
        });
    });
}

/** If current status 4 then do we overwrite it, restart the session or maintain current status? If current status not 4 then overwrite anyway **/
__sco.management.setstatus = function (curr, callback, callbackargs) {
    function set(stored) {
        if (curr > 0 && __scd.t >= 400 && __scd.t != 413 && __sco.contains(__sco.config.status4restart, curr)) {
            // To restart
            // If data has changed since last send, or not been sent then send it (create a clone so we can work with the current object without overwriting what we are trying to send)
            if (__sco.management.haschanged(__sco.tryparse(stored.data)))
                __sco.management.sendtoapi();
            __scd.s.i = __sco.guid();
            // Do not keep basket data over sessions
            __scd.b = __sco.clone(__sco.config.doc.b);
            // Remove the last sent info, new session means this has never been sent
            __sco.management.interremove("__sc__lastsent");
            // If config indicates we don't want to keep customer data over sessions then clear it
            if (!__sco.config.persistcustomer)
                __scd.c = __sco.clone(__sco.config.doc.c);
            // Update the support info
            __sco.support.updatedoc();
            // Clear the status
            __scd.t = curr;
        }
        else if (curr > 0 && __scd.t >= 400 && __scd.t != 413 && __sco.contains(__sco.config.status4overwrite, curr)) {
            // To overwrite
            __scd.t = curr;
        }
        else if (curr > 0 && __scd.t < 400) {
            // Old is not status 4 so just set the new status
            __scd.t = curr;
        }
        // Maintain old
        if (__sco.noru(callback)) {
            __sco.type(callbackargs) == "array" ? callback.apply(window, callbackargs) : callback.call(window);
        }
        else
            return;
    }
    __sco.management.interget("__sc", set);
}

/** Do we need to run on this page **/
__sco.management.canexec = function () {
    function status2() {
        var s2 = false;
        __sco.each(__sco.config.onchange, function (ix, val) {
            if (!s2) {
                __sco.each(val, function (iix, ival) {
                    if (__sco.getdom(_scs(ival)) != null)
                        s2 = true;
                });
            }
        });
        return s2;
    }
    try {
        var s1 = __sco.management.isstatus(__sco.config.status1), s2 = __sco.management.isstatus(__sco.config.status2) || status2(), s3 = __sco.management.isstatus(__sco.config.status3), s4 = __sco.management.killit(), exclude = __sco.management.isstatus(__sco.config.exclude);
        if (!exclude && (s1 || s1 > 0 || s2 || s3 || s3 > 0 || s4 || s4 > 0))
            return true;
        else
            return false;
    }
    catch (ce) {
        return true;
    }
}

/** Handle setting and sending error info for when we have no support **/
__sco.management.nosupport = function (provider) {
    try {
        var error = "NO SUPPORT ";
        if (provider)
            error += " NO PROVIDER STORAGE ";
        if (__sco.config.v1) {
            if (__sco.support && __sco.type(__sco.support.cors) !== "undefined") {
                __sco.each(__sco.support, function (ix, val) {
                    if (__sco.type(val) !== "function" && __sco.type(val) !== "array")
                        error += ix + " : " + val + " ";
                });
            }
            __sco.management.intersend("POST", __sco.config.errorapi, __sco.v1runtime(error));
        }
        if (__sco.config.v2) {
            var tmp = __sco.clone(__sco.config.doc);
            tmp.g.push({
                s: 100,
                d: new Date().getTime(),
                e: [{
                    c: "100",
                    d: new Date().getTime(),
                    t: error,
                    n: error
                }]
            });
            __sco.management.intersend("POST", __sco.config.v2api, tmp);
        }
    }
    catch (nse) { }
}

/** Check if the basket, customer info or session ID has changed **/
__sco.management.haschanged = function (stored) {
    try {
        var old = __sco.__scd, lastupdated = __sco.tonumber(!!stored && __sco.tonumber(stored.d) && __sco.tonumber(stored.d) > __sco.tonumber(__scd.d) ? stored.d : __scd.d);
        // If the session (find the newest between storage and local first) has expired, restart
        if (Math.floor((new Date().getTime() - lastupdated) / 1000) > __sco.config.sessiontime) {
            // Create a new session
            __scd.s.i = __sco.guid();
            // Do not keep basket data over sessions
            __scd.b = __sco.clone(__sco.config.doc.b);
            // Remove the last sent info, new session means this has never been sent
            __sco.management.interremove("__sc__lastsent");
            // If config indicates we don't want to keep customer data over sessions then clear it
            if (!__sco.config.persistcustomer)
                __scd.c = __sco.clone(__sco.config.doc.c);
            // Update the support info
            __sco.support.updatedoc();
            // Clear the status
            __scd.t = 0;
            // Session has changed, so return true to send an "initialise"
            return true;
        }
        // If changed from storage, merge customer, update basket to whichever is newest and update __scd to stored
        if (!!stored && __sco.tonumber(stored.d) && stored.d != __scd.d && __sco.tonumber(stored.d) > __sco.tonumber(__scd.d)) {
            __scd.c = __sco.extend(stored.c, __scd.c, true);
            __scd.s = __sco.extend(stored.s, __scd.s, true);
            __scd.t = stored.t >= 300 && stored.t < 400 ? stored.t : stored.t > 0 ? stored.t : __scd.t;
            if (stored.b.i.length > 0 && SCJSON.stringify(__scd.b) != SCJSON.stringify(stored.b))
                __scd.b = __sco.clone(stored.b);
            return true;
        }
        if (old) {
            return SCJSON.stringify(old.b) != SCJSON.stringify(__scd.b) || SCJSON.stringify(old.c) != SCJSON.stringify(__scd.c) || old.s.i != __scd.s.i || SCJSON.stringify(__scd.g) != SCJSON.stringify(old.g);
        }
        else {
            return true;
        }
    }
    catch (hce) {
        return true;
    }
}

/** Set the triggers up according to the config **/
__sco.management.trigger.setup = function () {
    if (__sco.type(__sco.management.trigger.set) === "undefined") {
        if (__sco.contains(__sco.config.triggers, "timeout")) {
            __sco.management.callback("timeout");
        }

        if (__sco.contains(__sco.config.triggers, "exit")) {
            __sco.lastmove = 0;
            __sco.on("mouseout", function (e) {
                if ((e.relatedTarget || e.toElement) == this.parentNode && (__sco.lastmove == 0 || new Date().getTime() - __sco.lastmove > 1000)) {
                    __sco.lastmove = new Date().getTime();
                    __sco.management.callback("exit");
                }
            }, document);
        }

        if (__sco.contains(__sco.config.triggers, "load") || __sco.support.touchscreen) {
            __sco.management.callback("load");
        }

        // Setup onchange
        __sco.processonchange();

        // Attach onto any external checkouts
        __sco.management.external();

        // Mark the triggers as having been setup, so not to add again
        __sco.management.trigger.set = true;
    }
}

/** Callback for the triggers, work out if data has changed, does it need to store, does it need to send??? **/
__sco.management.callback = function (trigger) {

    // If the data has changed, then send to the api and update the JSON in storage
    function checkandsend(stored) {
        if (__sco.management.haschanged(stored)) {
            __sco.management.sendtoapi();
            __sco.management.interset("__sc", __scd);
        }
        else {
            __sco.management.interget("__sc__lastsent", stamp, false);
        }
    }

    // Data has not changed, so if nothing has been sent in the last min config time then send
    function stamp(data) {
        if ((!data || data < (new Date().getTime() - (__sco.config.mintimeout * 1000))) && __scd.t > 0) {
            var timestamp = __sco.clone(__sco.config.timestamptemplate);
            timestamp.t = __scd.t; timestamp.i = __sco.config.doc.i; timestamp.i1 = __sco.config.doc.i1; timestamp.s.i = __scd.s.i; timestamp.s.m = __scd.s.m;
            __sco.management.timestampapi(timestamp);
        }
    }

    // Handle timeout callbacks
    function checkcallback(last) {
        var curTime = new Date().getTime(), lastSent = last, timerexecs = 0, timer;

        // If never sent (either first visit or session renew) or time from last sent is greater than the timeout period, send and reset the interval
        if (!lastSent || lastSent < (curTime - (__sco.config.timeout * 1000))) {
            if (__sco.type(__sco.tonumber(lastSent)) == "number" && lastSent < (curTime - (__sco.config.timeout * 1000)))
                __sco.management.interget("__sc", checkandsend);
            timer = setInterval(function () {
                __sco.management.interget("__sc", checkandsend);
                timerexecs++;
                if (timerexecs > __sco.config.timerruns)
                    clearTimeout(timer);
            }, __sco.config.timeout * 1000);
        }
        else {
            // If sent before, work out time between now and last sent and set timer for the remaining time - when triggered sends followed by resetting timer
            var timeLeft = (__sco.config.timeout * 1000) - (curTime - lastSent);
            setTimeout(function () {
                __sco.management.interget("__sc", checkandsend);
                timer = setInterval(function () {
                    __sco.management.interget("__sc", checkandsend);
                    timerexecs++;
                    if (timerexecs > __sco.config.timerruns)
                        clearTimeout(timer);
                }, __sco.config.timeout * 1000);
            }, timeLeft);
        }
    }

    if (trigger == "exit" || trigger == "load") {
        __sco.management.interget("__sc", checkandsend);
    }
    else if (trigger == "timeout") {
        __sco.management.interget("__sc__lastsent", checkcallback, false);
    }
}

/** Listen for post message events, if from an SC provider then react as necessary **/
__sco.management.react = function (evnt) {
    if (__sco.management.validate(evnt)) {
        try {
            var response = __sco.tryparse(evnt.data), ticket = response.ticket;
            // If we have a ticket, we have a callback to execute
            if (__sco.type(ticket) == "number" && ticket >= 0) {
                __sco.tickets[ticket].call(window, response.data);
            }
        }
        catch (e) {
            e.title = "React_Error";
            __sco.error(e);
        }
    }
}

/** An intermediate callback function for getting from storage, abstracts away the use of the provider **/
__sco.management.interget = function (name, callback, def) {
    if (name == "__sc" || name == "__sc__lastsent")
        name += __sco.config.doc[__sco.config.v2 ? 'i' : 'i1'];
    if (__sco.support.storeprovider && __sco.support.ps) {
        def = __sco.type(def) === "undefined" ? false : def;
        var ticket = __sco.tickets.push(callback);
        __sco.management.listener.get(name, def, ticket - 1);
    }
    else {
        callback.call(window, __sco.support.traditional ? false : __sco.storage.get(name, def));
    }
}

//* An intermediate set function, abstracts use of the provider if needed **/
__sco.management.interset = function (name, toset, callback) {
    if (name == "__sc__lastsent" || name == "__sc") {
        __scd.d = new Date().getTime().toString();
        name += __sco.config.doc[__sco.config.v2 ? 'i' : 'i1'];
    }
    if (__sco.support.storeprovider && __sco.support.ps) {
        var ticket = -1;
        if (__sco.type(callback) === "function") { ticket = __sco.tickets.push(callback); }
        __sco.management.listener.set(name, toset, ticket - 1);
    }
    else
        !(__sco.support.traditional) ? __sco.type(callback) === "function" ? callback.call(window, __sco.storage.set(name, toset)) : __sco.storage.set(name, toset) : __sco.type(callback) === "function" ? callback.call(window, false) : null;
}

/** An intermediate function to abstract away sending through the provider or direct **/
__sco.management.intersend = function (method, endpoint, data, callback, headers, cachebust) {
    function retrieve(responsedata) {
        callback.call(window, responsedata);
    }

    if (!cachebust && method == "GET") {
        var rn = Math.floor(Math.random() * 0xfff).toString();
        endpoint += ((endpoint.indexOf("?") > -1 ? "&" : "?") + "cbi1=" + rn);
    }

    if (__sco.support.cors || !__sco.support.postmessage || (__sco.support.postmessage && __sco.type(__sco.management.listener) != "undefined" && !__sco.management.listener.ready))
        __sco.sender.send(method, endpoint, data, (__sco.type(callback) === "function" ? retrieve : null), headers, __sco.config.requesttimeout);
    else {
        var ticket = -1;
        if (__sco.type(callback) === "function") { ticket = __sco.tickets.push(callback); }
        // Is it a V1 request? If so use the v1 provider
        if (__sco.config.v1 && __sco.config.v2)
            __sco.management[__sco.contains(endpoint, '/lite/') || __sco.contains(endpoint, '/import/') ? 'v1listener' : 'listener'].send(method, endpoint, data, ticket - 1, headers, __sco.config.requesttimeout);
        else
            __sco.management.listener.send(method, endpoint, data, ticket - 1, headers);
    }
}

/** An intermediate function to abstract away removing from storage either through the provider or direct **/
__sco.management.interremove = function (name, callback) {
    if (name == "__sc" || name == "__sc__lastsent")
        name += __sco.config.doc[__sco.config.v2 ? 'i' : 'i1'];
    if (__sco.support.storeprovider) {
        var ticket = -1;
        if (__sco.type(callback) === "function") { ticket = __sco.tickets.push(callback); }
        __sco.management.listener.remove(name, ticket - 1);
    }
    else {
        !(__sco.support.traditional) ? __sco.type(callback) === "function" ? callback.call(window, __sco.storage.remove(name)) : __sco.storage.remove(name) : __sco.type(callback) === "function" ? callback.call(window, false) : null;
    }
}

/** A function to validate a request has come from the SaleCycle provider **/
__sco.management.validate = function (data) {
    if (__sco.type(data.origin) == "string" && (data.origin == __sco.config.v1providerhost.match(__sco.config.providerregex)[0] || data.origin == __sco.config.providerhost.match(__sco.config.providerregex)[0] || data.origin == "self"))
        return true;
    else
        return false;
}

/** Send timestamp to both API's **/
__sco.management.timestampapi = function (timedata) {
    function hassent(data) {
        var __sct, isset = __sco.type(__scd) == "object" && __sco.type(__scd.b) == "object" && __sco.type(__scd.c) == "object";
        // If we have timedata and __scd is not yet defined, create a temporary one to send
        if (__sco.type(timedata) == "object" && !isset) {
            __sct = __sco.clone(__sco.config.timestamptemplate);
            __sct.t = timedata.t;
            __sct.s.i = timedata.s.i;
            __sct.s.m = timedata.s.m;
            __sct.i = __sco.config.doc.i;
            __sct.i1 = __sco.config.doc.i1;
            __sct.o = "";
        }

        // If the basket has not been sent before then send it, otherwise use the timestamp
        if ((!data) && isset)
            __sco.management.sendtoapi();
        else {
            if (__sco.config.v1)
                __sco.management.intersend("POST", ((!isset ? __sct.t >= 300 : __scd.t >= 300) && (!isset ? __sct.t < 400 : __scd.t < 400)) ? __sco.config.v1completion : __sco.config.v1api, (__sco.contains(__sco.config.v1api, "/lite/") ? timedata : __sco.translatetov1(isset ? __scd : __sct)));
            if (__sco.config.v2)
                __sco.management.intersend("POST", __sco.config.v2api, timedata);

            // Set the time last sent
            if (isset) {
                __sco.management.interset("__sc__lastsent", new Date().getTime());
                __scd.d = new Date().getTime().toString();
                __sco.__scd.d = __sco.clone(__scd.d);
                __sco.management.interset("__sc", __scd);
            }
        }
    }
    if (__sco.type(__sco.management.listener) == "undefined" || (__sco.type(__sco.management.listener) != "undefined" && !__sco.management.listener.ready)) {
        hassent(false);
    }
    else
        // Check if the basket has been sent for this session yet
        __sco.management.interget("__sc__lastsent", hassent);
}

/** Send to both API's **/
__sco.management.sendtoapi = function () {
    if (__scd.t > 0 || __scd.g.length > 0) {
        __sco.management.interset("__sc__lastsent", new Date().getTime());
        if (__sco.config.v1)
            __sco.management.intersend("POST", (__scd.t >= 300 && __scd.t < 400 ? __sco.config.v1completion : __sco.config.v1api), (__sco.config.translatev1 ? __sco.translatetov1(__scd) : __scd));
        if (__sco.config.v2) {
            var tmpscd = __sco.clone(__scd);
            if (__sco.support.traditional) {
                tmpscd.r = 300;
            }
            __sco.management.intersend("POST", __sco.config.v2api, tmpscd);
        }
        __sco.__scd = __sco.clone(__scd);
    }
}

/**
 * A modified version of Diego Perini's contentLoaded
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
**/
__sco.management.contentLoaded = function (win, fn, args) {
    var done = false, top = true, doc = win.document, root = doc.documentElement,
    init = function (e) {
        if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
        __sco.off(e.type, init, (e.type == 'load' ? win : doc));
        if (!done && (done = true)) fn.apply(win, args || [], e.type || e);
    },
    poll = function () {
        try { root.doScroll('left'); } catch (e) { setTimeout(poll, 50); return; }
        init('poll');
    };
    if (doc.readyState == 'complete') fn.apply(win, args || []);
    else {
        if (doc.createEventObject && root.doScroll) {
            try { top = !win.frameElement; } catch (e) { }
            if (top) poll();
        }
        __sco.on('DOMContentLoaded', init, doc);
        __sco.on('readystatechange', init, doc);
        __sco.on('load', init, win);
    }
}

/** Provide a jQuery/Sizzle selector **/
_scs = function (selector, message, funcs) {

    // Selector regexp's taken from Sizzle.js - not using all of them!
    // https://raw.github.com/jquery/sizzle/master/src/sizzle.js
    // https://raw.github.com/jquery/sizzle/master/MIT-LICENSE.txt
    var whitespace = "[\\x20\\t\\r\\n\\f]",
    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    identifier = characterEncoding.replace("w", "w#"),
    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
        "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
    matchExpr = {
        "ID": new RegExp("^#(" + characterEncoding + ")"),
        "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
        "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
        "ATTR": new RegExp("^" + attributes),
        "CHILD": new RegExp("^:(first|last|children|textnodes|elemp|nth-child)(?:\\(" + whitespace + "*([\\d\\w\\*]*)" + whitespace + "*\\)|)?", "i")
    },
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
    funescape = function (_, escaped, escapedWhitespace) {
        var high = "0x" + escaped - 0x10000;
        return high !== high || escapedWhitespace ?
            escaped :
                high < 0 ?
                        String.fromCharCode(high + 0x10000) :
                        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    };

    function selectescape(txt) {
        return txt.replace(runescape, funescape);
    }

    function nodesonly(nodes, ty) {
        var tmp = new Array();
        __sco.each(__sco.toarray(nodes), function (ix, val) {
            if ((val.nodeType == 1 || val.nodeType == 9) && (__sco.type(ty) === "string" ? val.nodeName.toLowerCase() === ty : true))
                tmp.push(val);
        });
        return tmp;
    }

    function textnodes(nodes) {
        var tmp = new Array();
        __sco.each(nodes, function (ix, val) {
            if (val.nodeType == 3)
                tmp.push(val);
        });
        return tmp;
    }

    function elems(elem, classname) {
        var arr = new Array(), regex = new RegExp("(^|\\\s+)(" + classname + ")($|\\\s+)");
        __sco.each(elem, function (ix, val) {
            if (val.nodeType === 1 && val.className.match(regex) != null)
                arr.push(val);
        });
        return arr;
    }

    function elemp(e, g) {
        var a = [], c = 0, b = 0, d = (g || document).getElementsByTagName(e);
        a[0] = d[0];
        for (var f = 1; f < d.length; f++) {
            null != a[c] && (b += a[c].getElementsByTagName(e).length, b++, c++, null != d[b] && (a[c] = d[b]));
        }
        return a;
    }

    function filvals(val, filt, search) {
        var arr = new Array();
        if (val.nodeType === 1 || val.nodeType === 9) {
            if (filt) {
                var t = __sco.attr(val, search.match(matchExpr.ATTR)[1]);
                if (t != null && t.match(new RegExp("^" + search.match(matchExpr.ATTR)[5] + "$")) != null)
                    arr = arr.concat(__sco.toarray(val));
            }
            else {
                var cval = val.getElementsByTagName("*");
                __sco.each(cval, function (iix, ival) {
                    var t = __sco.attr(ival, search.match(matchExpr.ATTR)[1]);
                    if (t != null && t.match(new RegExp("^" + search.match(matchExpr.ATTR)[5] + "$")) != null)
                        arr = arr.concat(__sco.toarray(ival));
                });
            }
        }
        return arr;
    }

    function filatts(val, filt, search) {
        var arr = new Array();
        if (val.nodeType === 1 || val.nodeType === 9) {
            if (filt) {
                if (__sco.attr(val, selectescape(search.match(matchExpr.ATTR)[1])) != null)
                    arr = arr.concat(__sco.toarray(val));
            }
            else {
                var cval = val.getElementsByTagName("*");
                __sco.each(cval, function (iix, ival) {
                    if (__sco.attr(ival, selectescape(search.match(matchExpr.ATTR)[1])))
                        arr = arr.concat(__sco.toarray(ival));
                });
            }
        }
        return arr;
    }

    function select(search, context, index, filter) {
        if (context != null) {
            if (search.match(matchExpr.ID) != null) {
                split[index] = __sco.ltrim(split[index].replace(search.match(matchExpr.ID)[0], ""));
                var tmp = document.getElementById(selectescape(search.match(matchExpr.ID)[1]));
                // Catch IE bug where names are returned as ID's
                tmp = tmp == null ? null : tmp.id != selectescape(search.match(matchExpr.ID)[1]) ? null : tmp;
                return split[index] === "" ? tmp : select(split[index], tmp, index, 1);
            }
            else if (search.match(matchExpr.TAG) != null) {
                split[index] = __sco.ltrim(split[index].replace(search.match(matchExpr.TAG)[0], ""));
                var tmp = new Array();
                __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                    if (val.nodeType === 1)
                        tmp = tmp.concat(__sco.toarray(val.getElementsByTagName(selectescape(search.match(matchExpr.TAG)[0]))));
                }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = tmp.concat(__sco.toarray((!filter ? document : context).getElementsByTagName(selectescape(search.match(matchExpr.TAG)[0]))))
                   : tmp = tmp.concat(__sco.toarray(context.getElementsByTagName(selectescape(search.match(matchExpr.TAG)[0]))));
                return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
            }
            else if (search.match(matchExpr.CLASS) != null) {
                split[index] = __sco.ltrim(split[index].replace(search.match(matchExpr.CLASS)[0], ""));
                var tmp = new Array();
                if (__sco.type(document.getElementsByClassName) == "function" && document.getElementsByClassName.toString().indexOf("[native code]") > -1) { // Native get by class support
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        if (val.nodeType === 1)
                            if (filter) {
                                tmp = tmp.concat(val.className.match(new RegExp("(^|\\\s+)(" + selectescape(search.match(matchExpr.CLASS)[1]) + ")($|\\\s+)")) != null ? __sco.toarray(val) : []);
                            }
                            else {
                                tmp = tmp.concat(__sco.toarray(val.getElementsByClassName(selectescape(search.match(matchExpr.CLASS)[1]))));
                            }
                    }) : tmp = tmp.concat(__sco.toarray((__sco.type(context) != "htmlelement" && context.length == 0 ? document : context).getElementsByClassName(selectescape(search.match(matchExpr.CLASS)[1]))));
                }
                else { // Fall back to custom implementation
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        if (val.nodeType === 1) {
                            if (filter) {
                                if (val.className.match(new RegExp("(^|\\\s+)(" + selectescape(search.match(matchExpr.CLASS)[1]) + ")($|\\\s+)")) != null)
                                    tmp = tmp.concat(__sco.toarray(val));
                            }
                            else {
                                tmp = tmp.concat(__sco.toarray(elems(val.getElementsByTagName("*"), selectescape(search.match(matchExpr.CLASS)[1]))));
                            }
                        }
                    }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = tmp.concat(__sco.toarray(elems(document.getElementsByTagName("*"), selectescape(search.match(matchExpr.CLASS)[1]))))
                       : !filter ? tmp = tmp.concat(__sco.toarray(elems(context.getElementsByTagName("*"), selectescape(search.match(matchExpr.CLASS)[1]))))
                       : tmp = tmp.concat(__sco.toarray(elems(__sco.toarray(context), selectescape(search.match(matchExpr.CLASS)[1]))));
                }
                return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
            }
            else if (search.match(matchExpr.ATTR) != null) {
                split[index] = __sco.ltrim(split[index].replace(search.match(matchExpr.ATTR)[0], ""));
                var tmp = new Array();
                if (typeof search.match(matchExpr.ATTR)[5] !== "undefined") {
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        tmp = tmp.concat(filvals(val, filter, search));
                    }) : __sco.type(context) != "htmlelement" && context.length == 0 ? __sco.each([document], function (ix, val) {
                        tmp = tmp.concat(filvals(val, filter, search));
                    }) : tmp = tmp.concat(filvals(context, filter, search));
                }
                else {
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        tmp = tmp.concat(filatts(val, filter, search));
                    }) : __sco.type(context) != "htmlelement" && context.length == 0 ? __sco.each([document], function (ix, val) {
                        tmp = tmp.concat(filatts(val, filter, search));
                    }) : tmp = tmp.concat(filatts(context, filter, search));
                }
                return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
            }
            else if (search.match(matchExpr.CHILD) != null) {
                var m = search.match(matchExpr.CHILD), tmp = new Array();
                split[index] = __sco.ltrim(split[index].replace(search.match(matchExpr.CHILD)[0], ""));
                if (m[1] == "first" || m[1] == "last" || m[1] == "nth-child") {
                    switch (m[1]) {
                        case "first":
                            tmp = __sco.type(context) != "htmlelement" && context.length > 0 ? context[0] : !context.length ? context : null;
                            return split[index] === "" ? tmp == null || tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                        case "last":
                            tmp = __sco.type(context) != "htmlelement" && context.length > 0 ? context[context.length - 1] : !context.length ? context : null;
                            return split[index] === "" ? tmp == null || tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                        case "nth-child":
                            tmp = __sco.type(context) != "htmlelement" && parseFloat(m[2]).toString() !== "NaN" && context.length > m[2] ? context[m[2]] : null;
                            return split[index] === "" ? tmp == null || tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                    }
                }
                else if (m[1] == "children") {
                    if (__sco.type(m[2]) != "undefined") {
                        __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                            tmp = tmp.concat(__sco.toarray(nodesonly(val.childNodes, m[2])));
                        }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = [] : tmp = tmp.concat(__sco.toarray(nodesonly(context.childNodes, m[2])));
                    }
                    else {
                        __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                            tmp = tmp.concat(__sco.toarray(nodesonly(val.childNodes)));
                        }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = [] : tmp = tmp.concat(__sco.toarray(nodesonly(context.childNodes)));
                    }
                    return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                }
                else if (m[1] == "textnodes") {
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        tmp = tmp.concat(__sco.toarray(textnodes(val.childNodes)));
                    }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = [] : tmp = tmp.concat(__sco.toarray(textnodes(context.childNodes)));
                    return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                }
                else if (m[1] == "elemp") {
                    __sco.type(context) != "htmlelement" && context.length > 0 ? __sco.each(context, function (ix, val) {
                        tmp = tmp.concat(__sco.toarray(elemp(selectescape(m[2]), val)));
                    }) : __sco.type(context) != "htmlelement" && context.length == 0 ? tmp = [] : tmp = tmp.concat(__sco.toarray(elemp(selectescape(m[2]), context)));
                    return split[index] === "" ? tmp.length === 0 ? null : tmp : select(split[index], tmp == null || tmp.length == 0 ? null : tmp, index, 1);
                }
                else
                    return null;
            }
            else {
                return null;
            }
        }
        return null;
    }

    if (__sco.type(selector) === "string" || (__sco.type(selector) === "array" && __sco.type(selector[0]) === "htmlelement" && __sco.type(selector[1]) === "string")) {
        var split = [], last = "", results = [], errorsplit = [], errorset = false;
        if (__sco.type(selector) === "array") {
            split = __sco.clean(selector[1]).split(/\s+(?![^\[]*\])/g);
            results = selector[0];
        }
        else {
            split = __sco.clean(selector).split(/\s+(?![^\[]*\])/g);
        }
        errorsplit = __sco.clone(split);
        __sco.each(split, function (ix, val) {
            if (last != null) {
                var tmp = select(val, results, ix);
                tmp == null ? (last = tmp, results = null) : (results = tmp, last = "");
                if (tmp == null && __sco.type(message) == "string" && message.length > 0 && !errorset) {
                    __sco.error(message + " Selector:" + errorsplit.slice(0, ix + 1).join(" "));
                    errorset = true;
                }
            }
            else {
                results = null;
            }
        });
        if (__sco.type(funcs) === "array" && funcs.length > 0) {
            __sco.each(funcs, function (ix, val) {
                if (__sco.type(__sco[val]) === "function")
                    results = __sco[val].call(window, __sco.type(results) === "array" && results.length > 0 ? results[0] : results);
            });
        }
        return results;
    }
    else {
        return null;
    }
}

/*********************************************/
/**             Data retrieval              **/
/*********************************************/

/** Return the value of the requested attribute **/
__sco.attr = function (elem, att, set) {
    if (__sco.type(elem) == "htmlelement") {
        if (arguments.length < 3) {
            return elem.getAttribute(att) || null;
        }
        else {
            if (__sco.noru(set))
                return elem.setAttribute(att, set);
            else
                return elem.removeAttribute(att);
        }
    }
    return null;
}

/** Remove leading or trailing whitespace, also multiple spaces in a string change to 1 space **/
__sco.clean = function (txt) {
    return (__sco.type(txt) === "string") ? txt.replace(/^\s*|\s*$/g, '').replace(/\s{2,}|[\r\t\n]/g, " ") : null;
}

/** A wrapper function for replace, takes away danger of trying replace on non string value **/
__sco.clear = function (str, regex, flags, repl) {
    var s = __sco.type(str), r = __sco.type(regex), f = __sco.type(flags), p = __sco.type(repl);
    if (s != "string" || (s != "string" && (r != "string" || r != "regexp")))
        return null;
    return str.replace((r == "regexp" ? regex : (f == "string" ? new RegExp(regex, flags) : new RegExp(regex))), (p == "string" || p == "function" ? repl : ""));
}

/** Check array, object, string **/
__sco.contains = function (elem, search) {
    if (__sco.type(elem) === "string")
        return elem.indexOf(search) > -1;
    else if (__sco.type(elem) === "array") {
        return elem.indexOf(search) > -1;
    }
    else if (__sco.type(elem) === "object") {
        return elem.hasOwnProperty(search);
    }
    else
        return false;
}

/** The currency code of that last run of pricecurr if a symbol was found **/
__sco.cursym = "";

/** Trim whitespace from the left of a string **/
__sco.ltrim = function (str) {
    return __sco.type(str) === "string" ? str.replace(/^\s*/, "") : null;
}

/** Return the value or text from an input, select or textarea node **/
__sco.getvt = function (a, b) {
    var c = __sco.type(a) !== "htmlelement" ? "" : a.nodeName.toLowerCase(), e = null;
    if (c == "input" || c == "select" || c == "textarea") {
        var d = a.type.toLowerCase(), e;
        if (c == "select") {
            e = a.selectedIndex > -1 ? (b == false) ? a.options[a.selectedIndex].value : a.options[a.selectedIndex].text : null;
        }
        else if (c == "input") {
            if (d == "checkbox" || d == "radio") {
                e = (a.selected || a.checked == true) ? "1" : "0";
            }
            else {
                e = typeof a.value == "undefined" ? null : a.value;
            }
        }
    }
    else {
        e = null;
    }
    return __sco.clean(e);
}

/** Return the text inbetween the two strings in the specified string **/
__sco.inbetween = function (a, b, c, d) {
    function esc(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&").replace(/\s/g, "\\s");
    }

    if (__sco.type(a) === "string" && __sco.type(b) === "string" && __sco.type(c) === "string") {
        var d = d || "ff", e = '', f = 0, g = c.indexOf(a), h = c.lastIndexOf(a),
        i = a.length, j = "substring", k = c.lastIndexOf(b);
        if (g != -1 && k != -1) {
            if (a == b) {
                f = c.match(new RegExp(esc(a), 'g'));
                if (f.length > 1) {
                    e = (d == "ff") ? c[j](g + i, c.indexOf(b, g + i)) : (d == "fl" ? c[j](g + i, k) : e);
                }
            }
            else {
                e = (d == "ff") ? c[j](g + i, c.indexOf(b, g + i)) : ((d == "fl") ? c[j](g + i, k) : ((d == "lf") ? c[j](h + i, c.indexOf(b, h + i)) : ((d == "ll") ? c[j](h + i, k) : e)));
            }
        }
        return __sco.clean(e);
    }
    else {
        return null;
    }
}

/** Function to return a formatted number from a string **/
__sco.pricecurr = function (a, f) {

    function adda(z, y) {
        y = y || z.length; var x = ""; for (var i = 0; i < y; i++) { x += z[i]; } return x;
    }

    var curr = {
        "\u00a3": "GBP", "\u20ac": "EUR", "€": "EUR", "$": "USD", "A$": "AUD", "CAD$": "CAD", "CHF": "CHF", "Fr.": "CHF", "\u00a5": "JPY", "kr": "NOK", "NZ$": "NZD", "\u0440\u0443\u0431.": "RUB", "py6": "RUB", "pyu0431": "RUB", "SKr": "SEK", "Kc": "CZK"
        /* Uncomment if you need all currencies */
        /*,"AED":"AED","AFN":"AFN","Lek":"ALL","AMD":"AMD","Kz":"AOA","AR$":"ARS","\u0192":"AWG","AZN":"AZN","KM":"BAM","Bds$":"BBD","BDT":"BDT","\u043b\u0432":"BGN","BHD":"BHD","Fr":"BIF","BD$":"BMD","B$":"BND","$b":"BOB","R$":"BRL","B$":"BSD","BTN":"BTN","P":"BWP","p.":"BYR","BZ$":"BZD","FC":"CDF","CLP":"CLP","\u00a5":"RMB","COP":"COP","\u00a2":"CRC","$MN":"CUP","Esc":"CVE","CYP":"CYP","Kc":"CZK","K\u010d": "CZK","Fdj":"DJF","DKK":"DKK","Dkr":"DKK","RD$":"DOP","DZD":"DZD","EEK":"EEK","EGP":"EGP","Nfk":"ERN","ETB":"ETB","FJ$":"FJD","FKP":"FKP","GEL":"GEL","GGP":"GGP","GHS":"GHS","D":"GMD", "Fr":"GNF", "q":"GTQ","HK$":"HKD","L":"HNL","kn":"HRK","G":"HTG","Ft":"HUF","Rp":"IDR","ILS":"ILS","\u20aa":"ILS","IMP":"IMP","Rs":"INR","\u20b9":"INR","IQD":"IQD","IRR":"IRR","\u00cdkr":"ISK", "JEP":"JEP","J$":"JMD","JOD":"JOD","Sh":"KES","KGS":"KGS","KHR":"KHR","Fr":"KMF","\u20a9":"KPW","KRW":"KRW","KWD":"KWD","CI$":"KYD","KZT":"KZT","\u20ad":"LAK","LBP":"LBP","Rp":"LKR","L$":"LRD","L":"LSL","Lt":"LTL","Ls":"LVL","LYD":"LYD","MAD":"MAD","L":"MDL","MGA":"MGA","\u0434\u0435\u043d":"MKD","K":"MMK","\u20ae":"MNT","P":"MOP","UM":"MRO","Rp":"MUR","MVR":"MVR","MK":"MWK","MEX$":"MXN","RM":"MYR","MT":"MZN","N$":"NAD","\u20a6":"NGN","C$":"NIO","Rp":"NPR","OMR":"OMR","B/.":"PAB","S/.":"PEN","K":"PGK","Php":"PHP","\u20b1":"PHP","Rp":"PKR","z\u0142":"PLN","Gs":"PYG","QAR":"QAR","RMB":"RMB","lei":"RON","Fr":"RWF","SAR":"SAR","SI$":"SBD","Rp":"SCR","SDG":"SDG","SEK":"SEK","SG$":"SGD","S$":"SGD","SHP":"SHP","Le":"SLL","S":"SOS","SPL":"SPL","SRD":"SRD","Db":"STD","\u20a1":"SVC","SYP":"SYP","L":"SZL","\u0e3f":"THB","\u0e1a\u0e32\u0e17":"THB","SM":"TJS","m":"TMM","TND":"TND","T$":"TOP","TL":"TRY","TT$":"TTD","TV$":"TVD","$T":"TVD","NT$":"TWD", "Sh":"TZS","UAH":"UAH","Sh":"UGX","$U":"UYU","UZS":"UZS","Bs":"VEF","\u20ab":"VND","Vt":"VUV","T":"WST","EC$":"XCD","YER":"YER","R":"ZAR","Zk":"ZMK","Z$":"ZWD","CUC$":"CUC"*/
    },
    curr1 = {
        "AED": "AED", "AFN": "AFN", "Lek": "ALL", "AMD": "AMD", "Kz": "AOA", "AR$": "ARS", "\u0192": "AWG", "AZN": "AZN", "KM": "BAM", "Bds$": "BBD", "BDT": "BDT", "\u043b\u0432": "BGN", "BHD": "BHD", "Fr": "BIF", "BD$": "BMD", "B$": "BND", "$b": "BOB", "R$": "BRL", "B$": "BSD", "BTN": "BTN", "P": "BWP", "p.": "BYR", "BZ$": "BZD", "FC": "CDF", "CLP": "CLP", "\u00a5": "RMB", "COP": "COP", "\u00a2": "CRC", "$MN": "CUP", "Esc": "CVE", "CYP": "CYP", "Kc": "CZK", "K\u010d": "CZK", "Fdj": "DJF", "DKK": "DKK", "Dkr": "DKK", "RD$": "DOP", "DZD": "DZD", "EEK": "EEK", "EGP": "EGP", "Nfk": "ERN", "ETB": "ETB", "FJ$": "FJD", "FKP": "FKP", "GEL": "GEL", "GGP": "GGP", "GHS": "GHS", "D": "GMD", "Fr": "GNF", "q": "GTQ", "HK$": "HKD", "L": "HNL", "kn": "HRK", "G": "HTG", "Ft": "HUF", "Rp": "IDR", "ILS": "ILS", "\u20aa": "ILS", "IMP": "IMP", "Rs": "INR", "\u20b9": "INR", "IQD": "IQD", "IRR": "IRR", "\u00cdkr": "ISK", "JEP": "JEP", "J$": "JMD", "JOD": "JOD", "Sh": "KES", "KGS": "KGS", "KHR": "KHR", "Fr": "KMF", "\u20a9": "KPW", "KRW": "KRW", "KWD": "KWD", "CI$": "KYD", "KZT": "KZT", "\u20ad": "LAK", "LBP": "LBP", "Rp": "LKR", "L$": "LRD", "L": "LSL", "Lt": "LTL", "Ls": "LVL", "LYD": "LYD", "MAD": "MAD", "L": "MDL", "MGA": "MGA", "\u0434\u0435\u043d": "MKD", "K": "MMK", "\u20ae": "MNT", "P": "MOP", "UM": "MRO", "Rp": "MUR", "MVR": "MVR", "MK": "MWK", "MEX$": "MXN", "RM": "MYR", "MT": "MZN", "N$": "NAD", "\u20a6": "NGN", "C$": "NIO", "Rp": "NPR", "OMR": "OMR", "B/.": "PAB", "S/.": "PEN", "K": "PGK", "Php": "PHP", "\u20b1": "PHP", "Rp": "PKR", "z\u0142": "PLN", "Gs": "PYG", "QAR": "QAR", "RMB": "RMB", "lei": "RON", "Fr": "RWF", "SAR": "SAR", "SI$": "SBD", "Rp": "SCR", "SDG": "SDG", "SEK": "SEK", "SG$": "SGD", "S$": "SGD", "SHP": "SHP", "Le": "SLL", "S": "SOS", "SPL": "SPL", "SRD": "SRD", "Db": "STD", "\u20a1": "SVC", "SYP": "SYP", "L": "SZL", "\u0e3f": "THB", "\u0e1a\u0e32\u0e17": "THB", "SM": "TJS", "m": "TMM", "TND": "TND", "T$": "TOP", "TL": "TRY", "TT$": "TTD", "TV$": "TVD", "$T": "TVD", "NT$": "TWD", "Sh": "TZS", "UAH": "UAH", "Sh": "UGX", "$U": "UYU", "UZS": "UZS", "Bs": "VEF", "\u20ab": "VND", "Vt": "VUV", "T": "WST", "EC$": "XCD", "YER": "YER", "R": "ZAR", "Zk": "ZMK", "Z$": "ZWD", "CUC$": "CUC"
    },
    curr2 = { "EGP": "1", "KWD": "1", "OMR": "1", "JOD": "1" },
    cS = "",
    cC = "";

    (function () {
        var x = [], y = [];
        if (__sco.config.allcurrencies) {
            __sco.each(curr1, function (ix, val) {
                curr[ix] = val;
            });
        }
        for (var key in curr) { x.push(curr[key]); y.push(key); }
        cC = x.join("|"),
        cS = y.join("|");
    }());

    var f = f == false ? false : true, g;
    if (__sco.type(a) === "string" && a.replace(/[^\d]/g, "") != "") {
        var c = a.replace(/[^\d\,\.]/g, "").match(/[\d]+/g),
        b1 = a.match(new RegExp("(" + cC + ")"), "i"),
        b2 = a.match(new RegExp("(" + cS.replace(/\$/g, "\\$") + ")"), "i");
        if (b1 != null) {
            __sco.cursym = b1[0];
        }
        else if (b2 != null) {
            __sco.cursym = curr[b2[0]] || '';
        }
        // Special handling of currencies with 1/1000 subunit
        if (!!curr2[__sco.cursym] == true) {
            g = 4;
        }
        else {
            g = 3;
        }
        var d = (c.length == 1) ? c[0] : (c[c.length - 1].length < g) ? adda(c, c.length - 1) + "." + c[c.length - 1] : adda(c);
        return (d != "") ? d : ((f == true) ? __sco.error("301 price not found") : "0.00");
    }
    else if (a == "" && f == true) {
        __sco.error("301 price not found");
    }
    else { return "0.00"; }
}

/** Return the text from a node or empty string **/
__sco.text = function (elem) {
    return (__sco.type(elem) === "htmlelement") ? __sco.clean((elem.textContent || elem.innerText || elem.data)) : null;
}

/****************************************/
/**             Utilities              **/
/****************************************/

/** If index Of does not exist on array's, add a custom implementation **/
if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i /*opt*/) {
        if (i === undefined) i = 0;
        if (i < 0) i += this.length;
        if (i < 0) i = 0;
        for (var n = this.length; i < n; i++)
            if (i in this && this[i] === find)
                return i;
        return -1;
    };
}

/** Empty the given element of its children **/
__sco.empty = function (elem) {
    if (__sco.isArray(elem)) { __sco.iterateExecute(elem, __sco.empty); return; }
    if (!__sco.isDomNode(elem)) { return false; };

    while (elem.hasChildNodes()) {
        elem.removeChild(elem.lastChild);
    }
}
/** Is provided element iterable */
__sco.isArray = function (elem) {
    var toString = Object.prototype.toString.call(elem);
    return (toString == '[object Array]' || toString == '[object HTMLCollection]');
}

/** Is provided object a DOM node **/
__sco.isDomNode = function (elem) {
    if (elem == null || typeof (elem) != 'object') { return false; }
    return true;
}

/** Iterate over an array and execute given func for each element **/
__sco.iterateExecute = function (elem, func, args) {
    if (typeof (args) == 'undefined') { args = []; }

    if (__sco.isArray(elem)) {
        for (var i = 0; i <= elem.length - 1; i++) {
            func.apply(this, [elem[i]].concat(args));
        }
        return true;
    }
}
/** Add a class to a given element **/
__sco.addClass = function (elem, className) {
    if (__sco.isArray(elem)) { __sco.iterateExecute(elem, __sco.addClass, [className]); return; }
    if (!__sco.isDomNode(elem)) { return false; };

    var classes = elem.getAttribute('class');
    if (classes == null) { classes = ""; }

    if (classes.indexOf(className) == -1) {
        elem.className = classes.length == 0 ? className : " " + className;
    }
}
/** Return a new copy **/
__sco.clone = function (extend) {
    if (__sco.type(extend) === "htmlelement")
        return extend.cloneNode();
    if (__sco.type(extend) === "date")
        return new Date(extend.getTime());
    if (__sco.type(extend) !== "object" && __sco.type(extend) !== "array")
        return extend;
    try {
        var retVal = new extend.constructor();
        __sco.each(extend, function (ix, val) {
            if (!retVal.hasOwnProperty(ix))
                retVal[ix] = __sco.clone(extend[ix]);
        });
    }
    catch (e) { retVal = extend; }
    finally {
        return retVal;
    }
}

/** Remove duplicate items **/
__sco.dedupe = function (arr) {
    var unique = new Array();
    if (__sco.type(arr) == "object" || __sco.type(arr) == "array" || __sco.type(arr) == "nodelist") {
        __sco.each(arr, function (ix, val) {
            if (!unique.hasOwnProperty(val))
                unique.push(val);
        });
    }
    return unique;
}

/** Loop through each item and execute the given function for each iteration - value of this in the function will be the current item **/
__sco.each = function (arr, func) {
    if (__sco.noru(arr)) {
        if (__sco.type(arr) === "object") {
            for (var i in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, i))
                    func.call(arr[i], i, arr[i]);
            }
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                if (Object.prototype.hasOwnProperty.call(arr, i))
                    func.call(arr[i], i, arr[i]);
            }
        }
    }
    return arr;
}

/** Provide a function to check for errors and then insert into the JSON **/
__sco.error = function (err) {
    var date = new Date().getTime(), stack = "", desc = "", message = "";
    if (__sco.type(err) === "error") {
        stack = err.stack || "", desc = err.description || "", message = err.message || "";
    }
    else {
        message = __sco.type(err) !== "string" ? SCJSON.stringify(err) : err;
    }
    if (err != "") {
        if (__scd.g.length == 0)
            __scd.g.push({
                s: 100,
                d: new Date().getTime(),
                e: new Array()
            });
        __scd.g[0].e.push({
            c: "100",
            d: date,
            t: desc,
            n: message + " : " + stack
        });
    }
    return null;
}

/** Copy the first object, then update any common properties to that of the first and add any that are not present in the first that are in the second **/
__sco.extend = function (from, to, overwrite) {
    var res = __sco.clone(from), obj = __sco.clone(to);
    __sco.each(res, function (ix, val) {
        if (Object.prototype.hasOwnProperty.call(res, ix) && __sco.type(obj[ix]) !== "undefined") {
            if (!!overwrite && __sco.type(res[ix]) == "string" && __sco.type(obj[ix]) == "string")
                res[ix] = res[ix] == "" && obj[ix] != "" ? obj[ix] : res[ix];
            else
                res[ix] = obj[ix];
        }
    });
    __sco.each(obj, function (ix, val) {
        if (!Object.prototype.hasOwnProperty.call(res, ix))
            res[ix] = obj[ix];
    });
    return res;
}

/** Provide an error handling/setting mechanism **/
__sco.getdom = function (elem, message) {
    var message = message || "";
    if (__sco.noru(elem)) {
        if (typeof (elem.length) != "undefined") {
            return (elem.length > 0) ? elem : __sco.error(message);
        }
        else {
            return elem;
        }
    }
    else {
        return __sco.error(message);
    }
}

/** Return a JS GUID **/
__sco.guid = function () {
    function r(a) { return a ? Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) : Math.floor(Math.random() * 1000000000000000).toString(16).substr(0, 12); };
    return ((new Date().getTime()).toString(36) + '-' + r(!!1) + '-' + r(!!1) + '-' + r(!!1) + '-' + r(!1)).toString().toUpperCase();
}

/** Return a hashed version of the string provided **/
__sco.hash = function (a) {
    var hash = 0, chr;
    if (__sco.type(a) !== "string") return null;
    for (i = 0; i < a.length; i++) {
        chr = a.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash = hash & hash;
    }
    return hash.toString();
}

/** The URL of the current page in lower case **/
__sco.loc = document.location.href.toLowerCase();

/** Return a SC compatible machine ID **/
__sco.mid = function () {
    return new Date().getTime().toString() + Math.floor((1 + Math.random()) * 0x1000000).toString().substr(0, 6);
}

//** Provide a customisable event mechanism, action is a function which is called when there has been a change, compare is a function which returns what you want to check (text in an element for example) **/
__sco.monitor = function () {
    function h() {
        try {
            if (!run) {
                if (__sco.type(that.startstate) !== "undefined")
                    old = that.startstate;
                else {
                    old = that.compare.call(window);
                }
                run = true;
                count++;
                timer = s(h, that.interval);
            }
            else {
                l(timer);
                if (old != that.compare.call(window)) {
                    that.action.call(window);
                    old = that.compare.call(window);
                }
                count++;
                if (count < that.max)
                    timer = s(h, that.interval);
            }
        }
        catch (e) {
            __sco.error("207 timer error");
        }
    }
    try {
        var count = 0, s = setTimeout, l = clearTimeout, old = null, run = false, timer, that = this;
        this.startstate = undefined;
        this.max = 300;
        this.stop = function () { l(timer); }
        this.start = function () { (l(timer), count = 0, s(h, that.interval)); }
        this.interval = 2000;
        this.compare = function () { return null; }
        this.action = function () { }
    }
    catch (e) { __sco.error("206 timer error"); }
}

/** Return whether or not the value is null or undefined **/
__sco.noru = function (elem) {
    return elem != null && typeof elem !== "undefined";
}

/** Attach the specified function to the event **/
__sco.on = function (evnt, func, elem) {
    // handle array of elements
    if (__sco.isArray(elem)) {
        for (var i = 0; i <= elem.length - 1; i++) {
            __sco.on(evnt, func, elem[i]);
        }
        return;
    }
    var ev = window.addEventListener, el = arguments.length > 2 && __sco.noru(elem) ? elem : window;
    ev ? el.addEventListener(evnt, func) : el.attachEvent("on" + evnt, func);
}

/** Remove the specified function from the event **/
__sco.off = function (evnt, func, elem) {
    if (__sco.isArray(elem)) {
        for (var i = 0; i <= elem.length - 1; i++) {
            __sco.off(evnt, func, elem[i]);
        }
        return;
    }
    var ev = window.removeEventListener, el = arguments.length > 2 && __sco.noru(elem) ? elem : window;
    ev ? el.removeEventListener(evnt, func) : el.detachEvent("on" + evnt, func);
}

/** Remove node from the DOM **/
__sco.remove = function (elem) {
    if (__sco.isArray(elem)) { __sco.iterateExecute(elem, __sco.remove); return; }
    if (!__sco.isDomNode(elem)) { return false; };

    elem.parentNode.removeChild(elem);
}

/** Remove class from given element **/
__sco.removeClass = function (elem, className) {
    if (__sco.isArray(elem)) { __sco.iterateExecute(elem, __sco.removeClass, [className]); return; }
    if (!__sco.isDomNode(elem)) { return false; };

    elem.className = elem.className.replace(className, '');
}

/** Return the argument in array form **/
__sco.toarray = function (a) {
    var arr = new Array();
    if (__sco.type(a) == "array")
        return a;
    if (__sco.type(a) == "nodelist" && a.length == 0)
        return arr;
    __sco.each(a, function (ix, val) {
        arr.push(val);
    });
    if (arr.length == 0)
        arr.push((__sco.type(a) === "function" ? a.valueOf() : a));
    return arr;
}

/** Return a number or false if it cannot be cast into a number **/
__sco.tonumber = function (num) {
    var t = __sco.type(num);
    if (t == "string" && num == "") { return false; }
    if ((t == "string" || t == "number") && isFinite(Number(num)))
        return Number(num);
    else
        return false;
}

/** Try to parse the passed object using JSON.parse, else return object **/
__sco.tryparse = function (val) {
    // Function to try parsing the current version
    function parse(value) {
        try {
            return SCJSON.parse(value);
        }
        catch (pe1) {
            // If it fails, increment the index - if we still have values to try then run on the next, else return null
            index++;
            return index < vals.length ? parse(vals[index]) : null;
        }
    }
    // Create array of things to try
    var vals = [val, "\"" + val + "\"", "{" + val + "}", "[" + val + "]"], index = 0;

    // Safeguard against a non stringified value getting in, if it's undefined we can't parse that so don't try
    if (__sco.type(val) !== "string")
        return val;
    else
        return parse(val);
}

/** Return the type as a string **/
__sco.type = function (a) {
    // JS 1.8.5 < does not handle null and undefined classes, so protect against this
    if (!__sco.noru(a))
        return String(a);
    var classes = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Text]": "htmlelement",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object",
        "[object Error]": "error",
        "[object Arguments]": "arguments",
        "[object NodeList]": "nodelist",
        "[object HTMLCollection]": "nodelist",
        "[object HTMLDocument]": "htmldoc"
    };
    // Cover for IE8 < not returning class of these
    var ietoString = "";
    try {
        ietoString = a.toString();
    }
    catch (err) { }
    if (ietoString === "[object]") {
        if (typeof a.nodeType === "number" && a.nodeType === 9)
            return "htmldoc";
        else if (typeof a.nodeType === "number" && (typeof a.length === "undefined" || (typeof a.nodeName === "string" && (a.nodeName.toLowerCase() === "select" || a.nodeName.toLowerCase() === "form" || a.nodeName.toLowerCase() === "#text"))))
            return "htmlelement";
        else if (typeof a.item !== "undefined" && typeof a.length === "number")
            return "nodelist";
    }
    if (typeof a === "object" && (typeof a.callee !== "undefined" || typeof a.caller !== "undefined") && typeof a.length === "number")
        return "arguments";
    if (typeof a.nodeType === "number" && (a.nodeType === 1 || a.nodeType === 3))
        return "htmlelement";
    if (typeof a === "object" && typeof a.type === "string" && (typeof a.cancelBubble === "boolean" || typeof a.bubbles === "boolean"))
        return "event";
    return classes[Object.prototype.toString.call(a)] || (Object.prototype.toString.call(a).match(/HTML[\w]*Element/) != null ? "htmlelement" : Object.prototype.toString.call(a).match(/HTML[\w]*Collection/) != null ? "nodelist" : "object");
}

/***************************************/
/**             OnChange              **/
/***************************************/

/** Is the passed value valid for the field type **/
__sco.isvalid = function (a, b) {
    if (__sco.type(a) === "string") {
        if (!!__sco.config.block[b] == true) {
            for (var i = 0; i < __sco.config.block[b].length; i++) {
                if (__sco.config.block[b][i] == a) {
                    return false;
                    break;
                }
            }
        }
        switch (b) {
            case "email":
                return a.indexOf("@") > -1 ? true : false;
                break;
            case "telephone":
                var a = a.replace(/[^0-9]/gi, ""), c = a.split(new RegExp(a[0])).length - 1;
                return (a.length > 5 && c != a.length) ? true : false;
                break;
            case "mobile":
                var a = a.replace(/[^0-9]/gi, ""), c = a.split(new RegExp(a[0])).length - 1;
                return (a.length > 5 && c != a.length) ? true : false;
                break;
            default:
                return true;
                break;
        }
    }
    else {
        return false;
    }
}

/** OnChange **/
__sco.onchange = function (a, b) {
    if (__sco.type(_scs(a)) === "htmlelement") {
        var a = _scs(a),
        e = __sco.attr(a, "disabled"),
        v = __sco.getvt(a);
        if (e) { __sco.attr(a, "disabled", null); }
        if (v !== "") { __sco.updatecustomer(v, b); }
        __sco.on("change", function () {
            try {
                var v = __sco.getvt(a);
                if (v != "") {
                    __sco.updatecustomer(v, b);
                    __sco.management.setstatus(200, __sco.management.sendtoapi);
                }
            }
            catch (e) {
                e.title = "ONCHANGE";
                __sco.error(e);
            }
        }, a);
        if (e) { __sco.attr(a, "disabled", "true"); }
    }
}

/** Attach onchange onto all of the values in the onchange object **/
__sco.processonchange = function () {
    for (var a in __sco.config.onchange) {
        for (var b in __sco.config.onchange[a]) {
            if (__sco.config.onchange[a].hasOwnProperty(b)) {
                __sco.onchange(__sco.config.onchange[a][b], a);
            }
        }
    }
}

/** Update values in the customer object **/
__sco.updatecustomer = function (b, c) {
    if (b != "" && __sco.isvalid(b, c)) {
        if (c == "first" || c == "last") {
            b = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
        }
        var o = __scd.c;
        if (c == "optout" && __sco.config.optneg) { b = ((b ? 1 : 0) - 1) * -1; }
        (c == "telephone" || c == "mobile") ? o.p[(c == "telephone" ? "l" : "m")] = b : o[c.charAt(0)] = b;
        __sco.management.interset("__sc", __scd);
    }
}

/** Support module, gets support info and returns value indicating whether or not we have a route which we can work **/
__sco.support.setsupport = function () {

    /** Search function to find the first match in an array **/
    function search(arr, base) {
        var retval = "Unknown";
        __sco.each(arr, function (ix, val) {
            if (base.match(new RegExp(val)) != null && retval == "Unknown")
                retval = base.match(new RegExp(val))[0];
        });
        return retval;
    }

    // Defaults
    __sco.support.os = "Unknown";
    __sco.support.browser = "Unknown";
    __sco.support.version = "Unknown";

    // Array of browsers
    __sco.support.browsers = ['OPR', 'Chrome', 'CriOS', 'Firefox', 'MSIE', 'Safari', 'Opera', 'KDE', 'Trident'];

    // Array of OS systems
    __sco.support.ossystems = ['Windows', 'iPhone', 'iPad', 'Android', 'Mac', 'Linux', 'Symbian', 'Blackberry', 'CrOS'];

    // Do we have CORS
    __sco.support.cors = (typeof XMLHttpRequest === "function" || typeof XMLHttpRequest === "object") && 'withCredentials' in new XMLHttpRequest();

    // postMessage is supported
    __sco.support.postmessage = 'postMessage' in window;

    // Can we set cookies
    __sco.support.cookies = __sco.storage.cookies();

    // Get the useragent string
    __sco.support.useragent = navigator.userAgent;

    // Get the document protocol
    __sco.support.protocol = document.location.protocol;

    // Do we need to use postMessage
    __sco.support.useprovider = __sco.support.postmessage;

    // Are we using the provider for storage
    __sco.support.storeprovider = __sco.support.postmessage;

    // Do we have storage in the provider, defualt to not
    __sco.support.ps = false;

    // Returns whether or not we are dealing with early IE
    __sco.support.earlyie = navigator.userAgent.match(/msie(\s+)[5-7]/i) != null;

    // Can we, or are we falling back to traditional capture
    __sco.support.traditional = false;

    // Collect the screen information
    __sco.support.screeninfo = screen.availHeight + '-' + screen.availWidth + '-' + screen.colorDepth + '-' + screen.height + '-' + screen.width;

    // Returns whether or not the browser is mobile/tablet or desktop
    __sco.support.mobile = navigator.userAgent.match(/android|blackberry|symbian|iphone|ipad|mobi|tablet|opera\s+mini/i) != null;

    // Returns whether or not this is a touch screen device
    __sco.support.touchscreen = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints > 0 ? true : false;

    // localStorage is supported, catch browsers throwing errors when you touch it
    try {
        __sco.support.localstorage = typeof localStorage !== "undefined" && __sco.type(localStorage) === "object" && __sco.type(localStorage.setItem) !== "undefined";
    }
    catch (e) {
        __sco.support.localstorage = false;
    }

    try {

        // Get the OS
        __sco.support.os = search(__sco.support.ossystems, navigator.userAgent);

        // Get the browser type
        __sco.support.browser = search(__sco.support.browsers, navigator.userAgent);

        // Get the browser version
        __sco.support.version = (function () {
            var uav = navigator.userAgent.match(/version\/(\d+)/i), ua = navigator.userAgent.match(new RegExp(__sco.support.browser + "\\s*\\d+|" + __sco.support.browser + "\\/\\s*\\d+", "i")), newie = navigator.userAgent.match(/\bTrident\/\d+.*\s+rv:(\d+)/);
            return newie != null ? newie[1] : uav != null ? uav[1] : ua ? ua[0].replace(/[\D]/g, "") : "Unknown";
        }());

        if (__sco.support.browser == "OPR")
            __sco.support.browser = "Opera";
        if (__sco.support.browser == "Trident")
            __sco.support.browser = "MSIE";
    }
    catch (e) {
        // Just in the event something goes wrong on any of these
    }

    // Return a value indicating whether or not we have a route with which we can work. Presume that if the have postmessage we have some sort of storage within
    return __sco.support.postmessage || ((__sco.config.v2onload != "" || !__sco.config.v2) && __sco.config.fallbackallowed);
}

/** Update the JSON doc with the support meta data **/
__sco.support.updatedoc = function () {
    with (__sco.support) {
        __scd.m.b = browser;
        __scd.m.xsr = cors;
        __scd.m.pm = postmessage;
        __scd.m.c = cookies;
        __scd.m.l = localstorage;
        __scd.m.o = os;
        __scd.m.p = protocol;
        __scd.m.v = version;
        __scd.m.ua = useragent;
        __scd.m.m = mobile;
        __scd.m.t = touchscreen;
        __scd.m.si = screeninfo;
        __scd.m.ps = ps;
    }
}

/** Set the iframe up for receiving data, and listener on the parent for post backs **/
__sco.provider = function (host, id, callback, callbackargs) {

    function callprovider(func, args, ticket) {
        _scs("#" + that.id).contentWindow.postMessage(SCJSON.stringify({ 'func': func, 'args': args, 'guid': [__sco.config.guid, __sco.config.v1guid], 'ticket': ticket }), that.host.match(__sco.config.providerregex)[0]);
    }

    /** Provide a function for setting data on the iframe **/
    this.set = function (name, data, ticket) {
        var tmp = [name, data];
        callprovider('set', tmp, ticket);
    }

    /** Provide a function for getting data back from the iframe **/
    this.get = function (name, failed, ticket) {
        var tmp = [name, failed];
        callprovider('get', tmp, ticket);
    }

    /** Provide a function to remove data from the iframe if necessary **/
    this.remove = function (name, ticket) {
        var tmp = [name];
        callprovider('remove', tmp, ticket);
    }

    /** Provide a function to send data from the iframe to the given endpoint **/
    this.send = function (method, endpoint, data, ticket, headers, timeout) {
        var tmp = [method, endpoint, data, null, headers, timeout];
        callprovider('send', tmp, ticket);
    }

    /** Provide a function to destroy this provider **/
    this.destroy = function () {
        if (_scs("#sc_div_postmessage_parent") && _scs("#" + that.id))
            _scs("#sc_div_postmessage_parent").removeChild(_scs("#" + that.id));
    }

    /** Private function to listen for the frame being ready, if callback supplied it is called **/
    function action(post) {
        if (post.origin == that.host.match(__sco.config.providerregex)[0]) {
            if (post.data == "sc_ready") {
                that.ready = true;
                __sco.support.ps = true;
                __sco.off("message", action);
                if (__sco.type(__sco.management.listening) == "undefined") {
                    __sco.management.listening = true;
                    __sco.on("message", __sco.management.react);
                }
            }
            else if (post.data == "sc_not_available") {
                // Provider has loaded but has no storage capability, if we can use client cookies then do so otherwise we cannot run
                __sco.off("message", action);
                // If we have no storage in the provider, try to fallback if allowed, otherwise call no support not callback to stop script execution
                if (__sco.config.fallbackallowed) {
                    that.ready = true;
                    __sco.support.ps = false;
                    __sco.support.traditional = true;
                    __sco.config.triggers = ['load'];
                    __sco.config.translatev1 = true;
                    __sco.config.v1api = __sco.config.v1api.replace("/lite/impression.ashx", "/capture.aspx");
                    __sco.config.v1completion = __sco.config.v1completion.replace("/lite/impression.ashx", "/pixelcapture.aspx");
                }
                else {
                    // If we have no storage in the provider, call no support not callback to stop script execution
                    __sco.management.nosupport.call(window, true);
                }
            }
            // If v1 and v2 providers and both loaded then run
            if (__sco.type(callback) === "function") {
                if (__sco.config.v1 && __sco.config.v2) {
                    if (__sco.management.listener.ready && __sco.management.v1listener.ready)
                        callback.apply(window, callbackargs || []);
                }
                else
                    callback.apply(window, callbackargs || []);
            }
        }
    }

    var that = this;

    // Initialise the tickets array if it has not been created - done to handle callbacks
    __sco.tickets = __sco.type(__sco.tickets) === "array" ? __sco.tickets : new Array();

    // Create new iframe if needed on instantiation
    if (!_scs("#" + id)) {
        // Only create it the first time, any subsequent frames go inside this parent **/
        if (!_scs("#sc_div_postmessage_parent")) {
            var parent = document.createElement("div");
            parent.setAttribute("id", "sc_div_postmessage_parent");
            _scs("body")[0].appendChild(parent);
        }

        var ifr = document.createElement("iframe");
        ifr.setAttribute("src", host);
        ifr.setAttribute("target", "_self");
        ifr.setAttribute("id", id);
        ifr.style.display = "none";
        ifr.style.height = "0px";
        ifr.style.width = "0px";

        _scs("#sc_div_postmessage_parent").appendChild(ifr);

        that.id = id;
        that.host = host;
        that.ready = false;     // Indicates the provider has loaded

        __sco.on("message", action);
    }
    else {
        that.id = id;
        that.host = host;
        that.ready = true;     // This is a re-instantiation of an existing provider, so it's already ... ready
    }
}

/** Decodes a string back to it's raw form **/
__sco.storage.decode = function (a) {
    try { return unescape(a); } catch (ee) { return a; }
}

/** Returns boolean value indicating whether or not cookies are available **/
__sco.storage.cookies = function () {
    var cookiesAvailable = false;
    try {
        // Don't use set for this, if there are already max cookies set then test will cause 413
        document.cookie = "sc_test=testvalue" + ";expires=" + __sco.storage.sd(1) + ";path=/";
        if (__sco.storage.get("sc_test"))
            cookiesAvailable = true;
    }
    catch (ce) { }
    finally {
        __sco.storage.remove("sc_test");
        return cookiesAvailable;
    }
}

/** Deletes a cookie **/
__sco.storage.remove = function (a) {
    // Check if we have an exact name or split over multiple cookies
    __sco.each(document.cookie.split(";"), function (ix, val) {
        var c = __sco.clean(val), regex = "^" + a + "__(\\d+)\\s*(?=\\=)|^" + a + "(?=\\s*\\=)", m = c.match(new RegExp(regex));
        if (m != null)
            __sco.storage.set(m[0], "", -1);
    });
    return true;
}

/** Gets the specified element name **/
__sco.storage.get = function (a, b) {
    var tmp = new Array(), res = "", regex = "^" + a + "__(\\d+)\\s*(?=\\=)|^" + a + "(?=\\s*\\=)";

    function sort(s) {
        return s.sort(function (a, b) { if (__sco.tonumber(a[1]) < __sco.tonumber(b[1])) return -1; if (__sco.tonumber(b[1]) < __sco.tonumber(a[1])) return 1; return 0; });
    }

    function join(arr) {
        var r = "";
        __sco.each(arr, function (ix, val) {
            r += val[0];
        });
        return r;
    }

    try {
        __sco.each(document.cookie.split(";"), function (ix, val) {
            var c = __sco.clean(val), m = c.match(new RegExp(regex));
            if (m != null)
                tmp.push([c.substr(c.indexOf("=") + 1), m[1] || 0]);
        });
        res = join(sort(tmp));
    }
    catch (ce1) { }
    if (res != '') {
        var retval = __sco.tryparse(__sco.storage.decode(res));
        return retval != null ? retval : arguments.length > 1 ? b : false;
    }
    else {
        return arguments.length > 1 ? b : false;
    }
}

/** Writes a cookie with the specified name, value and number of days for expiry (0 means session)
  * Data will be split over multiple cookies if it exceeds the max length of 3800
**/
__sco.storage.set = function (n, v, d) {
    function wrc(tn, tv, td) {
        document.cookie = tn + "=" + tv + (td == 0 ? "" : ";expires=" + __sco.storage.sd(td)) + ";path=/";
    }
    // Catch Firefox private browsing mode error when you touch cookies
    try {
        var vv = escape(SCJSON.stringify(v)), d = arguments.length > 2 && typeof arguments[2] !== "undefined" ? d : __sco.config.cookieexpiry, max = 7168;
        if (__sco.type(d) === "number" && d > -1)
            __sco.storage.remove(n);
        // If what we are setting is not going to exceed the size limit, set it
        if ((max - document.cookie.length * 2) > vv.length) {
            if (vv.length > 1800) {
                var x = Math.ceil(vv.length / 1800);
                for (var i = 0; i < x; i++) {
                    wrc(n + "__" + i.toString(), vv.substring(0, 1800), d);
                    vv = vv.substr(1800);
                }
            }
            else {
                wrc(n, vv, d);
            }
        }
    }
    catch (ce) { }
}

/** Returns a date in UTC form d days in the future **/
__sco.storage.sd = function (d) {
    return new Date(new Date().setDate(new Date().getDate() + (!isNaN(d) ? Number(d) : 30))).toUTCString();
}

/**
* Provider sender, in theory never needs cors because it's the same domain.
* iframe post is there for cases where we might have the provider but no XMLHttpRequest
* This can handle both get and POST requests
**/
__sco.sender.send = function (method, endpoint, data, callback, headers, timeout) {

    function timeouthandler(resp) {
        var robj = {};
        robj.target = {};
        robj.type = "timeout";
        robj.target.responseText = null;
        robj.target.status = resp.status;
        robj.target.statusText = resp.statusText;
        if (__sco.type(callback) === "function")
            callback.call(window, robj);
    }

    /** Provide a function for cors GET and POST requests **/
    function xmlpost() {
        var x = new XMLHttpRequest(), finished = false;
        x.open(method, endpoint + (method == "GET" ? (__sco.type(data) == "string" ? data : JSON.stringify(data)) : ""), true);
        __sco.each(headers, function (ix, val) {
            if (__sco.type(val) == "object" && __sco.type(val.key) == "string" && __sco.type(val.value) == "string")
                x.setRequestHeader(val.key, val.value);
        });
        if (__sco.type(timeout) == "number" && timeout > 0) {
            if ("ontimeout" in x) {
                x.timeout = __sco.type(timeout) != "number" ? 0 : timeout;
                x.ontimeout = timeouthandler;
            } else {
                // fallback
                x.onabort = timeouthandler;
                setTimeout(function () {
                    x.abort();
                }, timeout + 10); // Add 10ms to allow for request setup and connection start
            }
        }
        if (__sco.type(callback) === "function") {
            if ('onload' in x)
                x.onload = callback;
            else
                x.onreadystatechange = function (e) {
                    if (!finished && x.readyState == 4) {
                        finished = true;
                        callback.call(window, e);
                    }
                }
        }
        x.send((method == "GET" || !__sco.noru(data) ? "" : __sco.type(data) !== "string" ? SCJSON.stringify(data) : data));
    }

    /** Provide an injected iframe + form function for GET and POST requests **/
    function iframepost() {
        try {
            var container = document.createElement("div");
            container.setAttribute("id", "sc_if_post");
            _scs("body")[0].appendChild(container);

            var isIE = __sco.support.earlyie;
            var i = isIE ? document.createElement("<iframe name='salecycle>") : document.createElement("iframe");
            if (!isIE) { i.name = "salecycle"; }
            i.style.display = "none";
            container.appendChild(i);
            var doc = i.document || i.contentDocument;

            var form = isIE ? doc.createElement("<form name='scPost'>") : doc.createElement("form");
            form.target = "salecycle";
            if (!isIE) { form.name = "scPost"; }
            form.setAttribute("method", method);
            form.setAttribute("action", endpoint + (method == "GET" && __sco.noru(data) ? (__sco.type(data) == "string" ? data : SCJSON.stringify(data)) : ""));

            if (method == "POST") {
                form.setAttribute("encoding", "multipart/form-data");

                if (__sco.noru(data)) {
                    if (__sco.type(data) != "string") {
                        var input = isIE ? doc.createElement("<input name=data>") : doc.createElement("input");
                        input.type = "hidden";
                        if (!isIE) { input.name = "data"; }
                        input.value = SCJSON.stringify(data);
                        form.appendChild(input);
                    }
                    else {
                        __sco.each(data.split("&"), function (ix, val) {
                            var input = isIE ? doc.createElement("<input name=" + val.split("=")[0] + ">") : doc.createElement("input");
                            input.type = "hidden";
                            if (!isIE) { input.name = val.split("=")[0]; }
                            input.value = val.split("=")[1];
                            form.appendChild(input);
                        });
                    }
                }
            }

            doc.getElementsByTagName("body")[0].appendChild(form);
            form.submit();
            setTimeout(tearDown, 5000);
        }
        catch (e) { }
    }

    function tearDown() {
        if (_scs("#sc_if_post") != null) {
            _scs("body")[0].removeChild(_scs("#sc_if_post"));
        }
    }

    /** Check if we have cors (XMLHttpRequest with credentials), if not fall back to iframe solution **/
    __sco.support.cors ? xmlpost() : iframepost();
}

/** V2 to V1 translation module **/

/** Pick any non standard fields and format them into a string **/
__sco.fields = function (obj, exclude) {
    var res = new Array();
    __sco.each(obj, function (ix, val) {
        if (exclude.indexOf(ix) < 0)
            res.push(ix + "^" + val);
    });
    return res.join("~");
}

/** For each item in the items collection, add the field and a | **/
__sco.format = function (items, field) {
    var str = "";
    __sco.each(items, function (ix, item) {
        if (typeof item[field] !== "undefined")
            str += (item[field] + "|");
        else
            str += "|";
    });
    return str;
}

/** Translate V2 structure to V1 for sending **/
__sco.translatetov1 = function (obj) {
    try {
        var thisObj = __sco.escs(__sco.clone(obj)), status = thisObj.t.toString().charAt(0);
        if (status == "3") {
            return 'c=' + thisObj.i1 + '&cc=&ca=0&e=&sfs=' + (typeof thisObj.s.ordernumber == "string" ? "ordernumber^" + thisObj.s.ordernumber : "") + '&scs=' + __sco.support.screeninfo + '&b=' + thisObj.s.i + '&ua=' + navigator.userAgent;
        }
        else {
            var ifs = new Array(), sfs = __sco.fields(thisObj.s, __sco.config.sessionfields);
            __sco.each(__scd.b.i, function (ix, val) {
                ifs.push(__sco.fields(val, __sco.config.itemfields));
            });
            return 'c=' + thisObj.i1 + '&b=' + thisObj.s.i + '&mid=' + thisObj.s.m + '&scs=' + __sco.support.screeninfo + (__sco.config.geoip ? '&geo=1' : '') + '&n=' + thisObj.c.f + '|' + thisObj.c.l + '|' + thisObj.c.s + '|&t=' + thisObj.c.p.l + '&e=' + thisObj.c.e + '&o=' + thisObj.c.o + '&w=' + thisObj.u + '&st=' + __sco.config.sessiontime + '&ua=' + navigator.userAgent + '&bs=1&ctd=&cc=' + (thisObj.cc ? '1' : '0') + '&ca=0&fc=0' + '&y=' + __scd.b.c + '&p=' + __sco.format(thisObj.b.i, "i") + '&i=' + __sco.format(thisObj.b.i, "n") + '&u=' + __sco.format(thisObj.b.i, "u") + '&v1=' + __sco.format(thisObj.b.i, "v") + '&v2=' + thisObj.b.v + '&q1=' + __sco.format(thisObj.b.i, "q") + '&q2=' + __sco.format(thisObj.b.i, "na") + '&q3=' + __sco.format(thisObj.b.i, "nc") + '&d1=' + __sco.format(thisObj.b.i, ["fd"]) + '&d2=' + __sco.format(thisObj.b.i, "td") + '&s=' + status + '&er=' + __sco.errorstov1() + '&cu1=' + __sco.format(thisObj.b.i, "f1") + '&cu2=' + __sco.format(thisObj.b.i, "f2") + '&ifs=' + (ifs.length == 0 ? new Array(__scd.b.i.length).join("|") : ifs.join("|")) + '&sfs=' + sfs;
        }
    }
    catch (e) {
        return 'c=' + __sco.config.doc.i1 + '&b=&mid=&scs=' + __sco.support.screeninfo + '&n=||&t=&e=&o=&w=&st=' + __sco.config.sessiontime + '&ua=' + navigator.userAgent + '&bs=1&ctd=&cc=&ca=0&fc=0&y=&p=&i=&u=&v1=&v2=&q1=&q2=&q3=&d1=&d2=&s=&er=' + (e.description || "") + "_" + (e.message || "") + "_" + (e.stack || "") + "_" + navigator.userAgent + '&cu1=&cu2=&ifs=&sfs=';
    }
}

/** Validate the values ready for the V1 request **/
__sco.escs = function (a) {
    if (a == null || typeof a == "undefined") {
        return "";
    }
    else if (__sco.type(a) === "date") {
        return a.toUTCString();
    }
    else if (typeof a == "object") {
        __sco.each(a, function (ix, val) {
            a[ix] = __sco.escs(val);
        });
        return a;
    }
    else if (typeof a.toString != "undefined") {
        return a.toString().replace(/&/g, '[sc_amp]').replace(/\?/g, '[sc_qm]').replace(/\+/g, '[sc_pl]').replace(/>/g, '[sc_bc]').replace(/</g, '[sc_bo]').replace(/=/g, '[sc_eq]').replace(/#/g, '[sc_h]');
    }
}

/** Translate error codes for V1 **/
__sco.errorstov1 = function () {
    var errorString = "", errors = __scd.g;
    if (errors.length > 0) {
        __sco.each(errors, function (ix, val) {
            errorString += val.e[ix].d + "_" + val.e[ix].t + "_" + val.e[ix].n + "_END";
        });
    }
    return errorString;
}

/** Translate no support errors or generic runtime errors to v1 **/
__sco.v1runtime = function (err) {
    var str = "";
    if (__sco.type(err) == "error") {
        str = (err.message || "") + "__" + (err.description || "") + "__" + (err.stack || "") + "__" + (err.title || "") + "__";
        try {
            if (__sco.support && __sco.type(__sco.support.cors) !== "undefined") {
                __sco.each(__sco.support, function (ix, val) {
                    if (__sco.type(val) !== "function" && __sco.type(val) !== "array")
                        str += (ix + ":" + val) + "__";
                });
            }
        }
        catch (ie) { }
    }
    else if (__sco.type(err) == "string")
        str = err;
    return 'c=' + __sco.config.doc.i1 + '&b=&mid=&scs=' + screen.availHeight + '-' + screen.availWidth + '-' + screen.colorDepth + '-' + screen.height + '-' + screen.width + '&n=||&t=&e=&o=&w=&st=1800&ua=' + navigator.userAgent + '&bs=1&ctd=&cc=&ca=0&fc=0&y=&p=&i=&u=&v1=&v2=&q1=&q2=&q3=&d1=&d2=&s=1&er=' + str + '&cu1=&cu2=&ifs=&sfs=';
}

"object" != typeof SCJSON && (SCJSON = {}), function () { "use strict"; function f(a) { return 10 > a ? "0" + a : a; } function quote(a) { return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) { var b = meta[a]; return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' } function str(a, b) { var c, d, e, f, h, g = gap, i = b[a]; switch ("function" == typeof rep && (i = rep.call(b, a, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (f = i.length, c = 0; f > c; c += 1) h[c] = str(c, i) || "null"; return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e } if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e)); else for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e)); return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }); var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { "\b": "\\b", "  ": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, rep; "function" != typeof SCJSON.stringify && (SCJSON.stringify = function (a, b, c) { var d; if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) indent += " "; else "string" == typeof c && (indent = c); if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify"); return str("", { "": a }) }), "function" != typeof SCJSON.parse && (SCJSON.parse = function (text, reviver) { function walk(a, b) { var c, d, e = a[b]; if (e && "object" == typeof e) for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]); return reviver.call(a, b, e); } var j; if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse"); }); }();

/** Start the script **/
__sco.management.contentLoaded(window, __sco.management.main);


///OSR START///

//OSR

__sco.sizeOf = function (obj) {
    var size = 0, key;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

if (!Array.prototype.filter) {
    Array.prototype.filter = function (fn, context) {
        var i,
        value,
        result = [],
        length = this.length;
        for (i = 0; i < length; i++) {
            if (this.hasOwnProperty(i)) {
                value = this[i];
                if (fn.call(context, value, i, this)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

try {
    // AOP.js (meld) library
    /* MIT License (c) copyright 2011-2013 original author or authors */
    (function () { function f(a, b, c) { var d, e; if (3 > arguments.length) { var l; l = a.name || "_"; d = {}; d[l] = a; p(d, l, b); return d[l] } if (v(b)) e = w(a, b, c); else if (d = typeof b, "string" === d) "function" === typeof a[b] && (e = p(a, b, c)); else if ("function" === d) e = w(a, b(a), c); else { d = []; for (l in a) "function" == typeof a[l] && b.test(l) && d.push(p(a, l, c)); e = x(d) } return e } function q(a, b) { var c, d, e; this.target = a; this.func = b; this.aspects = {}; c = this.orig = a[b]; d = this; e = this.advised = function () { function a(b) { var c = h(b); d._callSimpleAdvice("on", g, b); return c } var g, m, f, h, k; this instanceof e ? (g = y(c.prototype), h = function (a) { var b = g; try { s(b, "constructor", { value: c, enumerable: !1 }) } catch (d) { } c.apply(b, a); return b }) : (g = this, h = function (a) { return c.apply(g, a) }); f = t.call(arguments); k = "afterReturning"; m = z({ target: g, method: b, args: f }); try { d._callSimpleAdvice("before", g, f); try { m.result = d._callAroundAdvice(g, b, f, a) } catch (A) { m.result = m.exception = A, k = "afterThrowing" } f = [m.result]; d._callSimpleAdvice(k, g, f); d._callSimpleAdvice("after", g, f); if (m.exception) throw m.exception; return m.result } finally { n = r.pop() } }; s(e, "_advisor", { value: d, configurable: !0 }) } function p(a, b, c) { return (a = q.get(a, b)) && a.add(c) } function w(a, b, c) { var d, e, f; d = []; for (f = 0; e = b[f++];) (e = p(a, e, c)) && d.push(e); return x(d) } function x(a) { return { remove: function () { for (var b = a.length - 1; 0 <= b; --b) a[b].remove() } } } function k(a) { return function (b, c, d) { var e = {}; if (2 === arguments.length) return e[a] = c, f(b, e); e[a] = d; return f(b, c, e) } } function B(a, b) { var c, d, e; for (c in h) if (d = b[c]) (e = a[c]) || (a[c] = e = []), e.push({ aspect: b, advice: d }) } function z(a) { r.push(n); return n = a } f.before = k("before"); f.around = k("around"); f.on = k("on"); f.afterReturning = k("afterReturning"); f.afterThrowing = k("afterThrowing"); f.after = k("after"); f.joinpoint = function () { return n }; f.add = function () { return f.apply(null, arguments) }; q.prototype = { _callSimpleAdvice: function (a, b, c) { var d; this.aspects[a] && (d = h[a], d(this.aspects[a], function (a) { (a = a.advice) && a.apply(b, c) })) }, _callAroundAdvice: function (a, b, c, d) { function e(a, b) { return 0 > a ? d(b) : f(g[a].advice, a, b) } function f(c, d, g) { function l(a) { h++; return e(d - 1, a) } var h, k; h = 0; k = z({ target: a, method: b, args: g, proceed: function () { return l(0 < arguments.length ? t.call(arguments) : g) }, proceedApply: function (a) { return l(a || g) }, proceedCount: function () { return h } }); try { return c.call(a, k) } finally { n = r.pop() } } var g; g = this.aspects.around; return e((g ? g.length : 0) - 1, c) }, add: function (a) { var b, c; b = this; c = b.aspects; B(c, a); return { remove: function () { var d, e, f; f = 0; for (d in h) if (e = c[d]) { f += e.length; for (var g = e.length - 1; 0 <= g; --g) if (e[g].aspect === a) { e.splice(g, 1); --f; break } } f || b.remove() } } }, remove: function () { delete this.advised._advisor; this.target[this.func] = this.orig } }; q.get = function (a, b) { if (b in a) { var c; c = a[b]; if ("function" !== typeof c) throw Error("Advice can only be applied to functions: " + b); c = c._advisor; c || (c = new q(a, b), a[b] = c.advised); return c } }; var n, r, h, t, v, s, y; r = []; t = Array.prototype.slice; v = Array.isArray || function (a) { return "[object Array]" == Object.prototype.toString.call(a) }; var u; a: { try { u = "x" in Object.defineProperty({}, "x", {}); break a } catch (C) { } u = void 0 } s = u ? Object.defineProperty : function (a, b, c) { a[b] = c.value }; y = Object.create || function () { function a() { } return function (b) { a.prototype = b; b = new a; a.prototype = null; return b } }(); h = { before: function (a, b) { for (var c = a.length - 1; 0 <= c; --c) b(a[c]) }, around: !1 }; h.on = h.afterReturning = h.afterThrowing = h.after = function (a, b) { for (var c = 0, d = a.length; c < d; c++) b(a[c]) }; window.meld = f })();

    __sco.osr.clientConfigModule = function () {

        /** Example #2 - Add some extra pre-show checks, page related */
        meld.around(__sco.osr, "preShowChecks", function (methodCall) {
            if (!__sco.contains(__sco.loc.toLowerCase(),"http://be.oakley.com") && !__sco.contains(__sco.loc.toLowerCase(),"http://es.oakley.com") &&  !__sco.contains(__sco.loc.toLowerCase(),"http://fr.oakley.com") &&  !__sco.contains(__sco.loc.toLowerCase(),"http://nl.oakley.com") && !__sco.contains(__sco.loc.toLowerCase(),"http://it.oaklye.com") &&  !__sco.contains(__sco.loc.toLowerCase(),"uk.oakley.com") && __sco.contains(__sco.loc, "category") && (__sco.contains(_scs('span.selected:first', '', ['text']), "Oakley US Site"))) {
                return true;
            }
            // if we've already failed preShowChecks, just return false anyway
            result = methodCall.proceed();
            if (result == false) { return result; }

            // require that an element be present on the page
            if (!__sco.contains(__sco.loc.toLowerCase(),"uk.oakley.com") && !!(_scs('div.fsrFloatingMid') == null)) {
                return true;
            }

            return false;
        });

        meld.around(__sco.osr, "emailBasketClick", function (methodCall) {
            var inputfield = _scs('input.emb-sc');
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if (inputfield != null) {
                var value = __sco.getvt(__sco.isArray(inputfield) ? inputfield[0] : inputfield);
                if (reg.test(value)) {
                    var validEmail = _scs("#validemail");
                    validEmail.innerHTML = value;
                    //ftp file start
                    if (_scs(".emb-sc:first")) {
                        //var pageStump = __sco.loc.split("/")[__sco.loc.split("/").length - 1].substring(0, 3);
                        var pageStump = __sco.inbetween('','?', __sco.loc.split("/")[__sco.loc.split("/").length - 1],'ff');
                        var newsletterPages = {
                            "m02": "Mens Sunglasses",
                            "w02": "Womens Sunglasses",
                            "m04": "Mens Apparel",
                            "w04": "Womens Apparel",
                            "m05": "Mens Accessories",
                            "w05": "Womens Accessories",
                            "m07": "Mens Footwear",
                            "w06": "Womens Footwear",
                            "m03": "Mens Goggles",
                            "w03": "Womens Goggles",
                            "m0601": "Mens Backpack",
                            "w0601": "Womens Backpack",
                            "cw02": "Custom",
                            "cart": "Cart",
                            "c01": "Custom",
                            "c": "Custom"
                        }
                        var newsletterPageName = newsletterPages[pageStump];
                        if (newsletterPages[pageStump] == undefined) {
                            newsletterPageName = "Other Page";
                        }
                        var newsletterEmail = _scs(".emb-sc:first").value;
                        __scd.s.newsletterEmail = newsletterEmail;
                        __scd.s.newsletterPageName = newsletterPageName;
                        __scd.s.loc = __sco.loc;
                        __scd.c.e = newsletterEmail;
                        __sco.management.sendtoapi();
                    }//file end
                    __sco.on('click', document.querySelector('#flip-toggle').classList.toggle('hover'), _scs('.send-sc'));
                } else {
                    __scd.cc = false; //dont send email
                    var validationMsg = "Enter a valid email";
                    var errText = _scs("#emailvalidation");
                    errText.innerHTML = validationMsg;
                }
            }
        });
    };

    /* OSR */
    __sco.osr.config = null;
    __sco.osr.previouslyShown = false;
    __sco.osr.embSuppressed = false;
    __sco.osr.triggerType = null;
    __sco.osr.await = false;
    __sco.osr.exittime = 0;

    /* Configuration objects (main, page, instance) */
    __sco.osr.config = {};
    __sco.osr.activePageConfig = null;
    __sco.osr.activeInstanceConfig = null;
    __sco.osr.recomendationsKeyword = null;

    /* Local template cache */
    __sco.osr.template = {};

    /* Other local vars */
    __sco.osr.debug = false;
    __sco.osr.googleTrackingId = "";
    __sco.osr.errorState = false;   // has an exception been thrown? used to handle callbacks
    __sco.osr.localStorageAvailable = false;
    __sco.osr.exceedsLimit = true;
    __sco.osr.templatesPreloading = false;
    __sco.osr.logFile = [];
    __sco.osr.clientIp = null;
    __sco.osr.lastMove = {
        x: null,
        y: null,
        timestamp: null
    };

    __sco.osr.requestHeaders = [
        { "key": "Content-Type", "value": "application/json" },
        { "key": "Accept", "value": "application/json" }
    ];

    /** Initialization **/
    __sco.osr.init = function () {

        function localAvailable() {
            var available = false;
            try {
                localStorage.setItem("sc_osr_test", "testing");
                available = !!localStorage.getItem("sc_osr_test");
                localStorage.removeItem("sc_osr_test");
                return available;
            } catch (lex) {
                return available;
            }
        }

        // Do we have local storage to use
        __sco.osr.localStorageAvailable = localAvailable();

        // init client config module first
        if (typeof (__sco.osr.clientConfigModule) == 'function') { __sco.osr.clientConfigModule(); }

        __sco.osr.checkForEmbSuppression();

        __sco.osr.retrieveClientIp();

        // retrieve configurations
        __sco.osr.getConfig();
    };

    __sco.osr.osrInitComplete = function () {

        if (__sco.osr.clientIp == null) {
            if (__sco.type(__sco.osr.ipMonitor) === "undefined") {
                __sco.osr.ipMonitor = new __sco.monitor();
                __sco.osr.ipMonitor.compare = function () { return __sco.osr.clientIp; }
                __sco.osr.ipMonitor.action = __sco.osr.osrInitComplete;
                __sco.osr.ipMonitor.startState = __sco.osr.clientIp;
                __sco.osr.ipMonitor.start();
            }
        } else {
            if (__sco.type(__sco.osr.ipMonitor) !== "undefined") {
                __sco.osr.ipMonitor.stop();
                __sco.osr.ipMonitor = undefined;
            }

            // work out the valid configuration to use
            __sco.osr.getActivePageConfig(function (result) {
                if (__sco.osr.errorState) { return; }

                try {
                    if (result == null) { throw "No active page configuration found"; }

                    __sco.osr.activePageConfig = __sco.osr.getConfigByName(result);

                    if (__sco.osr.activePageConfig.limitFrequency == true) {
                        __sco.osr.checkSessionLiteboxesExceedLimit(__sco.osr.activePageConfig, function (result) {
                            if (__sco.osr.errorState) { return; }
                        });
                    }

                    if (__sco.osr.config.initParameter != null && location.search.indexOf(__sco.osr.config.initParameter) == -1) {
                        throw "Top level init parameter defined, does not match href";
                    }

                    // get active instance config
                    __sco.osr.activeInstanceConfig = __sco.osr.getActiveInstanceConfig();

                    __sco.osr.monitorTemplatesByKeyword();
                    __sco.osr.preRender();

                    // get active instance config at this point
                    __sco.osr.addEvents(__sco.osr.activeInstanceConfig);

                } catch (ex) { if (__sco.osr.debug) { throw ex; } }
            });
        }
    }

    /** Get main OSR configuration from cache **/
    __sco.osr.getConfig = function () {

        // retrieve config
        var configEndpoint = __sco.osr.getApiHost() + '/osr/' + __sco.config.guid;
        __sco.management.intersend('GET', configEndpoint, '', function (configData) {
            try {
                if (__sco.osr.errorState) { return; }

                // Get the config from the response
                var config = __sco.tryparse(configData.target.responseText);
                if (__sco.type(config) != "object") {
                    return;
                }

                // Config is good
                __sco.osr.config = config;

                // Check if the config is enabled
                if (typeof (__sco.osr.config.enabled) != "undefined" && __sco.osr.config.enabled == false) { throw "Config is disabled."; }

                // foreach config, retrieve template
                var templateIds = [];

                // pages
                for (var ix = 0; ix <= __sco.osr.config.pageConfigs.length - 1; ix++) {

                    __sco.osr.config.pageConfigs[ix] = __sco.osr.config.pageConfigs[ix];
                    var pageConfig = __sco.osr.config.pageConfigs[ix];
                    if (pageConfig.enabled == false) { continue; }

                    // instances
                    if (pageConfig.pageInstances == null) { throw "No page instances defined"; }

                    for (var ixz = 0; ixz <= pageConfig.pageInstances.length - 1; ixz++) {

                        var instanceConfig = pageConfig.pageInstances[ixz];

                        var keyword = __sco.osr.getTemplateKeyword(instanceConfig); // default or meld defined template
                        var templateId = __sco.osr.getActiveTemplateIdByKeyword(keyword, instanceConfig);

                        if (templateIds.indexOf(templateId) == -1) { templateIds.push(templateId); }
                    }
                }

                // retrieve those templates
                __sco.osr.preloadTemplates(templateIds);

                // check that all template IDs have been loaded before firing initComplete
                __sco.osr.monitorTemplatesLoaded(templateIds, function () {
                    __sco.osr.osrInitComplete();
                });
            }
            catch (ex) { if (__sco.osr.debug) { throw ex; } }
        }, __sco.osr.requestHeaders, true);
    };

    /** Preload templates into local storage & instance vars **/
    __sco.osr.preloadTemplates = function (templateIds) {

        // set flag so we know template load is in progress
        __sco.osr.templatesPreloading = true;

        __sco.each(templateIds, function (ix, val) {
            var templateKey = 'template_' + templateIds[ix];

            // retrieve template & urldecode
            __sco.management.intersend('GET', __sco.osr.getApiHost() + '/litebox/template/' + __scd.i + '/' + templateIds[ix], '', function (templateData) {
                try {
                    if (__sco.osr.errorState) { return; }

                    templateData = SCJSON.parse(templateData.target.responseText);

                    __sco.osr.template[templateKey] = {};
                    __sco.osr.template[templateKey].html = (typeof (templateData.html) != "undefined") ? decodeURIComponent(templateData.html.replace(/\+/g, " ")) : "";
                    __sco.osr.template[templateKey].stylesheet = (typeof (templateData.stylesheet) != "undefined") ? decodeURIComponent(templateData.stylesheet.replace(/\+/g, " ")) : "";
                    __sco.osr.template[templateKey].ie8stylesheet = (__sco.noru(templateData.ie8Stylesheet)) ? decodeURIComponent(templateData.ie8Stylesheet.replace(/\+/g, " ")) : "";
                    __sco.osr.template[templateKey].ie9stylesheet = (__sco.noru(templateData.ie9Stylesheet)) ? decodeURIComponent(templateData.ie9Stylesheet.replace(/\+/g, " ")) : "";
                } catch (ex) { if (__sco.osr.debug) { throw ex; } }
            }, null, true);

        });
    }

    /** Monitor state of templates expected vs loaded **/
    __sco.osr.monitorTemplatesLoaded = function (templateIds, callback) {
        var tmplCheckInt = setInterval(function () {
            var templatesReady = true;
            __sco.each(templateIds, function (ix, val) {
                if (typeof (__sco.osr.template["template_" + val]) == "undefined") {
                    templatesReady = false;
                }
            });

            if (templatesReady) {
                clearInterval(tmplCheckInt);

                if (__sco.type(callback) === "function") { callback(); }

                __sco.osr.templatesPreloading = false;
            }
        }, 500);
    }

    /** Check to ensure that keyword hasn't changed, if it has, preload necessary template **/
    __sco.osr.monitorTemplatesByKeyword = function () {

        var prevKeyword = __sco.osr.getTemplateKeyword();

        var monitorCheckInt = setInterval(function () {
            var keyword = __sco.osr.getTemplateKeyword();

            if (keyword != prevKeyword) {
                var active = __sco.osr.getActiveTemplateIdByKeyword(keyword);
                var templateKey = "template_" + active;

                // missing template found, preload
                if (typeof (__sco.osr.template[templateKey]) == "undefined") { __sco.osr.preloadTemplates([active]); }

                // render the new template into the body, removing the old one
                __sco.osr.monitorTemplatesLoaded([active], function () {
                    __sco.osr.preRender();
                });

                prevKeyword = keyword;
            }
        }, 1000);
    }

    /** Get the instance config by calculating split test result **/
    __sco.osr.getActiveInstanceConfig = function () {

        var pageConfig = __sco.osr.activePageConfig;
        var instances = pageConfig.pageInstances;
        var split = pageConfig.splitTests;
        var splitCount = __sco.sizeOf(split);

        var instanceByInstanceId = function (instanceId) {
            for (var i = 0; i <= __sco.sizeOf(instances) ; i++) {
                var cur = instances[i];
                if (cur["id"] == instanceId) { return cur; }
            }
            return null;
        };

        // how many split tests defined
        if (splitCount == 0 || pageConfig.splitsEnabled == false) {
            if (__sco.sizeOf(instances) > 1) {
                throw "No split test defined but more than 1 instance configured.";
            }
            return instances[0];
        }

        // assign each split test a number space between (last number) and last number + split percentage
        if (splitCount > 0) {
            var roll = Math.floor((Math.random() * 100) + 1); // roll a random between 1 and 100%
            var total = 0, last = 0;
            for (var key in split) {
                if (split.hasOwnProperty(key)) {
                    var val = split[key];
                    total = total + val;

                    if (roll > last && roll <= total) {
                        var instance = instanceByInstanceId(key);
                        if (instance == null) {
                            throw "Unable to retrieve instance by id " + key;
                        }
                        return instance;
                    }
                    last = val;
                }
            }
            if (total > 100) { throw "Split tests defined total more than 100%"; }
        }
    }

    /**  Retrieve data from the GeoLocation api **/
    __sco.osr.retrieveGeoLocation = function (callback) {
        __sco.management.intersend('GET', __sco.osr.getApiHost() + "/geolocation", null, function (apiResponse) {
            var geoObj = __sco.tryparse(configData.target.responseText);
            if (__sco.type(geoObj) != "object") {
                throw "Geolocation data not available";
            } else {
                callback(geoObj);
            }
        });
    }

    /** get client IP address from local storage or API endpoint **/
    __sco.osr.retrieveClientIp = function () {
        __sco.osr.interget('clientipa', function (data) {
            if (__sco.osr.errorState) { return; }
            try {
                // Data is not null and is less than one day old
                if (!!data && !!data.timestamp && data.timestamp > (new Date().getTime() - 86400000)) {
                    // Use stored IP
                    __sco.osr.clientIp = data.ip;
                } else {
                    // Get IP from server and put in storage
                    __sco.management.intersend('GET', __sco.osr.getApiHost() + "/ipaddress", "", function (apiResponse) {
                        if (__sco.osr.errorState) { return; }
                        try {
                            var ip = apiResponse.target.responseText.replace(/\"/g, "");
                            var ipObj = {
                                "timestamp": new Date().getTime(),
                                "ip": ip
                            };
                            __sco.osr.clientIp = ip;
                            __sco.osr.interset("clientipa", ipObj);
                        } catch (ex) { if (__sco.osr.debug) { throw ex; } }
                    });
                    return;
                }
            } catch (ex) { if (__sco.osr.debug) { throw ex; } }
        });
    }

    /** check for a cookie in the provider indicating EMB suppression **/
    __sco.osr.checkForEmbSuppression = function () {
        if (typeof (__sco.management.listener.cookieget) === "function") {
            __sco.management.listener.cookieget("email_click_" + __scd.i, true, function (result) {
                __sco.osr.embSuppressed = (result != null);
            });
        }
    }

    /** find a configuraiton that is enabled, IP matches, not too many shows & on a valid page **/
    __sco.osr.getActivePageConfig = function (callback) {
        if (__sco.osr.activePageConfig != null) { callback(__sco.osr.activePageConfig); }

        for (var ix in __sco.osr.config.pageConfigs) {
            if (__sco.osr.config.pageConfigs.hasOwnProperty(ix)) {
                var configObj = __sco.osr.config.pageConfigs[ix];
                var name = __sco.osr.config.pageConfigs[ix].name;

                // enabled check
                if (configObj.enabled == false) {
                    continue;
                } // sco.each continue

                // valid page check
                if (configObj.validPages != null && configObj.validPages.length > 0 && __sco.osr.validPage(configObj) == false) {
                    continue;
                }

                // acl check
                if (typeof (configObj.aclMode) != "undefined" && configObj.aclMode != null && configObj.aclMode.toLowerCase() != "disabled" &&
                    __sco.osr.validateAclMode(__sco.osr.getIpAddress(), configObj) == false) {
                    continue;
                }

                callback(name);
                return;
            }
        }
        callback(null);
    };

    /** Retrieve the current users IP address **/
    __sco.osr.getIpAddress = function () {
        return __sco.osr.clientIp || "unknown";
    };

    /** Validate that either the ACL mode is disabled, the current user is whitelisted or the current user is not blacklisted by IP **/
    __sco.osr.validateAclMode = function (ipAddress, configObj) {

        if (ipAddress == "unknown") { throw "Unable to retrieve client IP address - aborting"; }

        if (configObj.aclMode.toLowerCase() == "whitelist") {
            return (configObj.ipAddresses != null && configObj.ipAddresses.indexOf(ipAddress) > -1);
        }
        else if (configObj.aclMode.toLowerCase() == "blacklist") {
            return (configObj.ipAddresses == null || configObj.ipAddresses.indexOf(ipAddress) == -1);
        }

        return true;
    };

    /** Record that an OSR has been shown **/
    __sco.osr.recordOsrShowInStorage = function () {

        __sco.osr.interget("osrshows", function (data) {
            try {
                if (__sco.type(data) != "array") { data = []; }

                // Remove previous recordings of osrshow for pageid.
                data = data.filter(function (r) {
                    return r["pi"] !== __sco.osr.activePageConfig.id;
                });

                var newRecord = {
                    "ts": new Date().getTime(),
                    "pi": __sco.osr.activePageConfig.id,
                    "si": __scd.s.i
                };

                data.push(newRecord);
                __sco.osr.interset("osrshows", data);

            } catch (ex) { if (__sco.osr.debug) { throw ex; } }
        }, []);

        return true;
    }

    /** This is here as an extension point only (always returns default value), and should be overridden in a client module **/
    __sco.osr.getTemplateKeyword = function (instance) {

        // get instance config
        var instanceConfig = instance || __sco.osr.activeInstanceConfig;
        if (instanceConfig == null || typeof (instanceConfig.filters) == "undefined" || typeof (instanceConfig.defaultFilter) == "undefined") {
            return "default";
        }

        // return default value
        return instanceConfig.defaultFilter; // default value
    }

    /** Check that a limit on the number of OSRs shown hasn't been exceeded for a given configuration **/
    __sco.osr.checkSessionLiteboxesExceedLimit = function (configObj, callback) {

        if (__sco.noru(configObj) == false || typeof (configObj["limitFrequency"]) == "undefined" || configObj["limitFrequency"] == false) { callback(false); }

        var unit = configObj["frequencyUnit"].toLowerCase();
        var seekFrom = new Date();

        switch (unit) {
            case 'day':
                seekFrom.setDate(seekFrom.getDate() - 1); break;
            case 'week':
                seekFrom.setDate(seekFrom.getDate() - 7); break;
            case 'month':
                seekFrom.setMonth(seekFrom.getMonth() - 1); break;
            case 'year':
                seekFrom.setYear(seekFrom.getYear() - 1); break;
            case 'session':
                break;
            default:
                return false;
        }

        __sco.osr.interget("osrshows", function (showData) {
            if (__sco.osr.errorState) { return; }

            var foundAndExecuted = false;

            try {
                if (typeof (showData) != "undefined" && showData.length && showData.length > 0) {
                    __sco.each(showData, function (ix, val) {

                        if (unit.toLowerCase() == "session") {
                            if (typeof (val) == "object" && typeof (val["si"]) != "undefined") {
                                if (val["si"].length > 0 && val["si"] == __scd.s.i) {
                                    __sco.osr.exceedsLimit = true;
                                    callback(true);
                                    return;
                                }
                            }
                        } else {
                            if (val["pi"] == __sco.osr.activePageConfig.id) {
                                var lastShow = new Date(val["ts"]);

                                if (typeof (lastShow) != "undefined" && lastShow > seekFrom) {
                                    __sco.osr.exceedsLimit = true;
                                    foundAndExecuted = true;
                                    callback(true);
                                    return; // break __sco.each loop
                                } else {
                                    __sco.osr.exceedsLimit = false;
                                    foundAndExecuted = true;
                                    callback(false);
                                    return; // break __sco.each loop
                                }
                            }
                        }
                    });
                    // No matching page config
                    if (!foundAndExecuted) {
                        __sco.osr.exceedsLimit = false;
                        callback(false);
                    }
                }
                else {
                    __sco.osr.exceedsLimit = false; // First Visit
                    callback(false);
                }
            } catch (ex) { if (__sco.osr.debug) { throw ex; } }
        });
    }

    /** Retrieve a specific configuration by name **/
    __sco.osr.getConfigByName = function (name) {
        for (var i = 0; i <= __sco.osr.config.pageConfigs.length - 1; i++) {
            if (__sco.osr.config.pageConfigs[i].name == name) { return __sco.osr.config.pageConfigs[i]; }
        }
        return null;
    }

    /** Retrieve a template by given ID **/
    __sco.osr.getTemplateById = function (id) {
        return (typeof (id) != "undefined" && typeof (__sco.osr.template["template_" + id]) != "undefined") ? __sco.osr.template["template_" + id] : null;
    }

    /** Retrieve a template for the current OSR config by keyword **/
    __sco.osr.getActiveTemplateIdByKeyword = function (keyword, instance) {

        if (instance != null && typeof (instance) == "object") { instanceConfig = instance; } else { instanceConfig = __sco.osr.activeInstanceConfig; }

        if (typeof (instanceConfig) == "undefined" || typeof (instanceConfig.filters) == "undefined") { throw "Unable to get active template by keyword - filters not defined"; }

        var retVal = null;
        __sco.each(instanceConfig.filters, function (ix, val) {
            var itemObj = instanceConfig.filters[ix];
            if (itemObj.keyword.toLowerCase() == keyword.toLowerCase()) {
                retVal = itemObj.templates.osr;
            }
        });

        if (retVal == null) {
            throw "Unable to get active template - keyword not found in config: " + keyword;
        }

        return retVal;
    }

    /**********************
     *  Overridable logic *
     **********************/

    /** Do some final checks before showing OSR **/
    __sco.osr.preShowChecks = function () {

        // check show limit not exceeded
        var pageConfig = __sco.osr.activePageConfig;
        if (pageConfig.limitFrequency && __sco.osr.exceedsLimit) {
            return false;
        }

        // cookie has been set after email link click, don't show
        if (__sco.osr.surpressOsrOnEmailClick && __sco.osr.embSuppressed) {
            return false;
        }

        return (!__scd.b.i.length == 0) && (__scd.g.length == 0); // basket must not be empty
    };

    /** Are we on a valid page? **/
    __sco.osr.validPage = function (configObj) {
        if (configObj.validPages.length == 0) { return false; }

        for (var i = 0; i <= configObj.validPages.length - 1; i++) {
            var matches = null;
            if (configObj.validPages[i] instanceof RegExp) { matches = document.location.href.match(configObj.validPages[i]); }
            else { matches = document.location.href.match(new RegExp(configObj.validPages[i])); }
            if (matches != null && matches.length > 0) { return true; }

        }
        return false;
    };

    /**  Get email address - no regexp validation, see: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript **/
    __sco.osr.scrapeEmailAddress = function () {
        var emailField;
        emailField = _scs(__sco.osr.activePageConfig.selectors.emailCaptureField);
        emailField = __sco.isArray(emailField) ? emailField[0] : emailField;

        if (emailField == null || emailField.length == 0) { throw "Unable to retrieve email field, selector is " + __sco.osr.activePageConfig.selectors.emailCaptureField; }

        var emailAddress = String(emailField.value).trim();
        if (emailAddress.length == 0) {
            alert("Please enter an email address");
            return false;
        }
        return emailAddress;
    }

    /** Can we show the email capture template **/
    __sco.osr.canShowEmailCapture = function () {
        return (_scs(__sco.osr.activePageConfig.selectors.emailCaptureField) != null && _scs(__sco.osr.activePageConfig.selectors.saveButton) != null);     // email capture field and save button must exist
    }

    /** Can we show the recommendations template **/
    __sco.osr.canShowRecommendations = function () {
        return (_scs(__sco.osr.activePageConfig.selectors.productContainer) != null && _scs(__sco.osr.activePageConfig.selectors.productTemplate) != null); // recommendations template and target container must exist
    }

    /** Can we show the trends template **/
    __sco.osr.canShowTrends = function (data) {
        return (_scs(__sco.osr.activePageConfig.selectors.trendContainer) != null && _scs(__sco.osr.activePageConfig.selectors.trendTemplate) != null) && data != null && data.length > 0 && (data[0].BasketCount > 1 || data.length > 1);     // trends template and target container must exist
    }

    /***************
     *  Rendering  *
     ***************/

    /** Set up the page with the template & css **/
    __sco.osr.preRender = function () {

        // template we're preloading is determined by keyword
        var keyword = __sco.osr.getTemplateKeyword();

        var templateId = __sco.osr.getActiveTemplateIdByKeyword(keyword);
        if (templateId == null) { throw "Unable to retrieve active template by keyword: " + keyword; }

        var template = __sco.osr.getTemplateById(templateId);
        if (template == null) { throw "Unable to retrieve template id " + templateId; }

        // remove existing elements
        __sco.remove(_scs('.sc-lb'));
        __sco.remove(_scs('.osr-overlay'));

        // create new elements
        var stylesEl = document.createElement('style');
        var supportEl = document.createElement('style');

        supportEl.className = 'sc-lb';
        stylesEl.className = 'sc-lb';

        _scs('head')[0].appendChild(stylesEl);
        _scs('head')[0].appendChild(supportEl);

        var stylesheet = template.stylesheet;

        if (navigator.userAgent.match(/msie(\s+)[8-9]/i)) {
            if (template.iE8Stylesheet && template.iE8Stylesheet.length > 0 && navigator.userAgent.match(/msie(\s+)8/i))
                stylesheet = stylesheet.concat(template.iE8Stylesheet);
            else if (template.iE9Stylesheet && template.iE9Stylesheet.length > 0 && navigator.userAgent.match(/msie(\s+)9/i))
                stylesheet = stylesheet.concat(template.iE9Stylesheet);
        }

        if (__sco.osr.isEarlyIe()) { stylesEl.styleSheet.cssText = stylesheet; supportEl.styleSheet.cssText = ".sc-hidden { display: none; }"; }
        else { stylesEl.innerHTML = stylesheet; supportEl.innerHTML = ".sc-hidden { display: none; }"; }

        // append container to document in a hidden state
        var containerEl = document.createElement('div');
        containerEl.innerHTML = template.html;
        containerEl.className = 'sc-lb sc-hidden';

        _scs('body')[0].appendChild(containerEl);
    };

    /** Create overlay **/
    __sco.osr.renderOverlay = function () {

        // create style element
        var overlayStyleEl = document.createElement('style');
        overlayStyleEl.className = "sc-lb";
        overlayStyleEl.type = 'text/css';

        var cssString = "div.osr-overlay { background: rgba(0,0,0,0.7); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bf45484d', endColorstr='#bf000000',GradientType=0 ); width: 100%; height: 100%; z-index: 99999; top: 0; left: 0; position:fixed; } div.osr-overlay.sc-hidden { display: none; } div.osr-content { margin: 0 auto; position: relative; background-color: #FFFFFF; top: 10% }";
        if (__sco.osr.isEarlyIe()) { overlayStyleEl.styleSheet.cssText = cssString; }
        else { overlayStyleEl.appendChild(document.createTextNode(cssString)); }

        _scs('head')[0].appendChild(overlayStyleEl);

        // create container for osr content
        var overlayContainerEl = document.createElement('div');
        overlayContainerEl.className = 'osr-overlay sc-lb sc-hidden';

        var contentElement = document.createElement('div');
        contentElement.className = 'osr-content sc-lb';
        overlayContainerEl.appendChild(contentElement);

        // insert contentHtml into body and css into head
        _scs('head')[0].appendChild(overlayStyleEl);
        _scs('body')[0].appendChild(overlayContainerEl);
    }

    /** Render the content, primarily here as a hook for meld **/
    __sco.osr.renderContent = function (content) {
        var contentEl = _scs('div.osr-content')[0];
        __sco.empty(contentEl);

        // add content
        if (__sco.isDomNode(content) == false) { contentEl.innerHTML = content; } else { contentEl.appendChild(content); }
    }

    /** Show recommendations content area **/
    __sco.osr.showRecommendationsContent = function (recommendations) {
        var productTargetEl = _scs(__sco.osr.activePageConfig.selectors.productContainer);
        productTargetEl = __sco.isArray(productTargetEl) ? productTargetEl[0] : productTargetEl;

        var productTemplate = _scs(__sco.osr.activePageConfig.selectors.productTemplate);
        productTemplate = __sco.isArray(productTemplate) ? productTemplate[0] : productTemplate;

        // render recommendations
        if (__sco.osr.config.showRecommendations == true) {
            var recommendedProducts = [];
            __sco.each(recommendations, function (ix, item) {
                recommendedProducts.push(item.Product);
            });
            productTargetEl.appendChild(__sco.osr._tmpl(productTemplate, recommendedProducts));
        }
    }

    /** Show trends content area **/
    __sco.osr.showTrendsContent = function (trends) {
        var trendTargetEl = _scs(__sco.osr.activePageConfig.selectors.trendContainer);
        trendTargetEl = __sco.isArray(trendTargetEl) ? trendTargetEl[0] : trendTargetEl;

        var trendTemplate = _scs(__sco.osr.activePageConfig.selectors.trendTemplate);
        trendTemplate = __sco.isArray(trendTemplate) ? trendTemplate[0] : trendTemplate;

        // render trends
        if (__sco.osr.activeInstanceConfig.showBasketTrends == true) {
            var trendProducts = [];
            __sco.each(trends, function (ix, item) {
                item.Product.BasketCount = item.BasketCount;
                trendProducts.push(item.Product);
            });

            var templated = __sco.osr._tmpl(trendTemplate, trendProducts);
            trendTargetEl.innerHTML = templated;
        }
    }

    /** Unblock the UI **/
    __sco.osr.unblockUI = function () {
        __sco.addClass(_scs('div.osr-overlay'), 'sc-hidden');
    };

    /** Timeout of Osr **/
    __sco.osr.showTimeout = function (refTime) {
        var time = __sco.osr.activeInstanceConfig.autoCloseTimer * 1000;
        setTimeout(function () {
            if ((__sco.osr.lastMove.timestamp + time) < new Date().getTime()) {
                __sco.osr.timeoutClose();
            } else {
                __sco.osr.showTimeout(time - (new Date().getTime() - __sco.osr.lastMove.timestamp));
            }
        }, (time - (refTime || 0)));
    }

    /** Block the UI & provide some modal content with optional timeout **/
    __sco.osr.blockUI = function (config) {
        __sco.osr.unblockUI();

        // render
        if (__sco.osr.previouslyShown == false) { __sco.osr.renderOverlay(); }
        __sco.osr.renderContent(config.message);
        if (__sco.osr.lastMove.timestamp == null) {
            __sco.osr.lastMove.timestamp = new Date().getTime();
            __sco.osr.lastMove.x = 0;
            __sco.osr.lastMove.y = 0;
        }
        // timeout
        if (typeof (__sco.osr.activeInstanceConfig.autoCloseTimer) != 'undefined' && __sco.osr.activeInstanceConfig.autoCloseTimer > 0) {
            __sco.osr.showTimeout();
        }
        __sco.removeClass(_scs('div.osr-overlay'), 'sc-hidden');
    };

    /*******************
     *  Event Handlers *
     *******************/

    /** Add events **/
    __sco.osr.addEvents = function (instanceConfigObj) {

        var lastEvent = "", quickmove = false;
        function ieHandle(ev) {
            // Any mouseover must disable, also set event type
            if (ev.type == "mouseover") {
                __sco.osr.config.enabled = false;
                lastEvent = ev.type;
            }
            // Just register the event to stop the click handler firing off
            if (ev.type == "click") {
                if (lastEvent == "mouseover") {
                    lastEvent = ev.type;
                }
                // If last event was change or blur, this means select has closed
                if (lastEvent == "change" || lastEvent == "blur") {
                    __sco.osr.config.enabled = true;
                }
                lastEvent = ev.type;
            }
            // Mouseout following a mouseover just means moved over - re-enable
            if (ev.type == "mouseout") {
                if (lastEvent == "mouseover") {
                    __sco.osr.config.enabled = true;
                    quickmove = true;
                }
                // Click following mouseout means selected drop down - make sure it's still disabled
                if (lastEvent == "click") {
                    __sco.osr.config.enabled = false;
                }
                lastEvent = ev.type;
            }
            // Just update the event for reference, handling can be done in click handler
            if (ev.type == "blur" || ev.type == "change") {
                if (lastEvent == "mouseout" && ev.type == "blur") {
                    __sco.osr.config.enabled = true;
                }
                else {
                    lastEvent = ev.type;
                }
            }
        }

        function ieFire() {
            if (quickmove) {
                quickmove = false;
            } else {
                __sco.osr.triggerType = "exitintent";
                __sco.osr.conditionalDisplay();
            }
        }

        function attachInactivity(ev) {
            if (__sco.osr.lastMove.x != null && __sco.osr.lastMove.y != null) {
                if ((ev.clientX > __sco.osr.lastMove.x + 2 || ev.clientX < __sco.osr.lastMove.x - 2)
                    || (ev.clientY > __sco.osr.lastMove.y + 2 || ev.clientY < __sco.osr.lastMove.y - 2)) {
                    __sco.osr.lastMove.timestamp = new Date().getTime();
                }
            }
            __sco.osr.lastMove.x = ev.clientX;
            __sco.osr.lastMove.y = ev.clientY;
        }

        function exitIntentEnabled(x, y, dimensions, exitAreas) {
            var zones = ["TopLeft", "TopRight", "LeftTop", "LeftBottom", "RightTop", "RightBottom", "BottomLeft", "BottomRight"],
                inactiveZones = zones.filter(function (el) {
                    return exitAreas.indexOf(el) > -1;
                }),
                exitDisabledZone = false,
                osAware = __sco.osr.activeInstanceConfig.enableOsAwareZones || false,
                isMac = (/macintosh|ipad|iphone|ipod/i).test(navigator.userAgent),
                cross = inactiveZones.indexOf("TopRight") > -1 && inactiveZones.indexOf("TopLeft") < 0;
            if (isMac && osAware && cross) {
                inactiveZones[inactiveZones.indexOf("TopRight")] = "TopLeft";
            }
            for (var i = 0; i < inactiveZones.length; i++) {
                var zone = inactiveZones[i],
                    zc = zone.charAt(0),
                    vh = dimensions.height / 2,
                    hw = dimensions.width / 2,
                    top = vh / 100 * 5,
                    bottom = dimensions.height - (vh / 100 * 5),
                    left = hw / 100 * 5,
                    right = dimensions.width - (hw / 100 * 5);
                if (!exitDisabledZone) {
                    if (((zc === "T" && y < top) || (zc === "B" && y > bottom) || (zc === "R" && x > right) || (zc === "L" && x < left)) &&
                                ((zone.indexOf("T") > 0 && y < vh) || (zone.indexOf("B") > 0 && y > vh) || (zone.indexOf("L") > 0 && x < hw) || (zone.indexOf("R") > 0 && x > hw))) {
                        exitDisabledZone = true;
                    }
                }
            }
            return !exitDisabledZone;
        }

        // reset inactivity timeout
        __sco.each(['mousemove', 'touchstart', 'touchmove', 'touchend'], function (ix, val) {
            __sco.on(val, attachInactivity, document);
        }, document);

        // reset inactivity timeout on keyboard actions
        __sco.on('keydown', function () {
            __sco.osr.lastMove.timestamp = new Date().getTime();
        }, document);

        // inactivity
        if (instanceConfigObj.enableInactivityTimer == true) {
            setInterval(function () {
                if (__sco.osr.previouslyShown == true) { return; }
                if (__sco.osr.checkForActivity() == true) {
                    __sco.osr.triggerType = "inactivity";
                    __sco.osr.conditionalDisplay();
                }
            }, 1000);
        }

        if (instanceConfigObj.enableExitFrame == true) {
            // exit intent
            if (__sco.osr.isIeLikeBrowser()) {
                if (_scs("select")) {
                    __sco.on("blur", ieHandle, _scs("select"));
                    __sco.on("click", ieHandle, _scs("select"));
                    __sco.on("change", ieHandle, _scs("select"));
                    __sco.on("mouseout", ieHandle, _scs("select"));
                    __sco.on("mouseover", ieHandle, _scs("select"));
                }
                __sco.osr.on("mouseout", function (ev) {
                    if ((ev.relatedTarget || ev.toElement) == this.parentNode) {
                        if (__sco.osr.previouslyShown == true) {
                            return false;
                        }
                        var dimensions = __sco.osr.getViewportDimensions(),
                            exitAreas = __sco.noru(instanceConfigObj.exitIntentAreas) ? instanceConfigObj.exitIntentAreas : "RightTop RightBottom"; // exclude scrollbars by default. Get this every time in case config changed from first execution
                        if (exitIntentEnabled(__sco.osr.lastMove.x, __sco.osr.lastMove.y, dimensions, exitAreas)) {
                            setTimeout(ieFire, 20);
                        }
                    }
                }, document);
            } else {
                __sco.osr.on('mouseout', function (ev) {
                    if ((ev.relatedTarget || ev.toElement) == this.parentNode) {
                        if (__sco.osr.previouslyShown == true) {
                            return false;
                        }
                        var dimensions = __sco.osr.getViewportDimensions(),
                            exitAreas = __sco.noru(instanceConfigObj.exitIntentAreas) ? instanceConfigObj.exitIntentAreas : "RightTop RightBottom"; // exclude scrollbars by default. Get this every time in case config changed from first execution
                        x = ev.x || ev.clientX,
                        y = ev.y || ev.clientY;
                        if (y < 2 || x < 2 || y > dimensions.height - 2 || x > dimensions.width - 2) {
                            if (exitIntentEnabled(x, y, dimensions, exitAreas)) {
                                __sco.osr.triggerType = "exitintent";
                                __sco.osr.conditionalDisplay();
                            }
                        }
                    }
                }, document);
            }
        }
    }

    /** Bind events to dynamically generated content **/
    __sco.osr.rebindTemplateEvents = function () {

        // bind click sink on litebox container, close & continue buttons
        var lbContainer = _scs(__sco.osr.activePageConfig.selectors.liteboxContainer);
        if (lbContainer == null) { throw "Unable to find litebox container, selector is " + __sco.osr.activePageConfig.selectors.liteboxContainer; }

        __sco.on('click', function (ev) { __sco.osr.stopPropagation(ev); }, lbContainer);
        // bind close & continue buttons
        if (_scs('div.osr-overlay') != null) {
            if (_scs(__sco.osr.activePageConfig.selectors.closeButton) != null) {
                __sco.on('click', __sco.osr.closeClick, [_scs(__sco.osr.activePageConfig.selectors.closeButton), _scs('div.osr-overlay')]);
            } else {
                __sco.on('click', __sco.osr.closeClick, _scs('div.osr-overlay'));
            }

            if (_scs(__sco.osr.activePageConfig.selectors.continueButton)) {
                __sco.on('click', __sco.osr.continueClick, _scs(__sco.osr.activePageConfig.selectors.continueButton));
            }

            if (_scs(__sco.osr.activePageConfig.selectors.subscriptionButton)) {
                __sco.on('click', __sco.osr.subscriptionClick, _scs(__sco.osr.activePageConfig.selectors.subscriptionButton));
            }

            // "not me" button
            if (_scs(__sco.osr.activePageConfig.selectors.notMeButton)) {
                __sco.on('click', __sco.osr.notMeClick, _scs(__sco.osr.activePageConfig.selectors.notMeButton));
            }

            // email capture button
            var saveButton;
            if (__sco.osr.canShowEmailCapture() == true && __sco.osr.activeInstanceConfig.showEmailCapture == true && (saveButton = _scs(__sco.osr.activePageConfig.selectors.saveButton)) != null) {
                __sco.on('click', __sco.osr.emailBasketClick, __sco.isArray(saveButton) ? saveButton[0] : saveButton);
            }
        }
    };

    /**  Continue click **/
    __sco.osr.continueClick = function (ev) {
        __sco.osr.unblockUI();
        var linkId = __sco.osr.getLinkId(ev.target);
        var req = __sco.extend({ linkId: linkId + '_' + __sco.osr.activePageConfig.selectors.continueButton }, __sco.osr.getConfigRequest());

        var endpoint = __sco.osr.getApiHost() + '/litebox/continue/' + __scd.i + '/' + __scd.s.i;
        __sco.management.intersend('POST', endpoint, req);
        __sco.osr.stopPropagation(ev);
    }

    /** Alert to opt into emails **/
    __sco.osr.optInAlert = function (el) {
        alert("You must opt in to have your basket emailed to you.")
    }

    /** Close click **/
    __sco.osr.closeClick = function (ev) {
        __sco.osr.unblockUI();
        var linkId = __sco.osr.getLinkId(ev.target);
        var req = __sco.extend({ linkId: linkId + '_' + __sco.osr.activePageConfig.selectors.closeButton }, __sco.osr.getConfigRequest());
        var endpoint = __sco.osr.getApiHost() + '/litebox/close/' + __scd.i + '/' + __scd.s.i;
        __sco.management.intersend('POST', endpoint, req);
        __sco.osr.stopPropagation(ev);
    }

    /** Timeout Close  **/
    __sco.osr.timeoutClose = function (ev) {
        __sco.osr.unblockUI();
        if (__sco.osr.activeInstanceConfig.enableAutoCloseTimerReporting) {
            var req = __sco.extend({ timeout: true }, __sco.osr.getConfigRequest());
            var endpoint = __sco.osr.getApiHost() + '/litebox/close/' + __scd.i + '/' + __scd.s.i;
            __sco.management.intersend('POST', endpoint, req);
        }
        if (typeof ev !== "undefined") {
            __sco.osr.stopPropagation(ev);
        }
    }

    /** Email basket click **/
    __sco.osr.emailBasketClick = function (ev) {

        function opIn(elem) {
            if (elem.checked) {
                req = __sco.extend({ emailOptIn: true }, req);
                __sco.osr.optInAlert(saveButton);
                __sco.osr.stopPropagation(ev);
            }
        }

        var emailAddress;
        if ((emailAddress = __sco.osr.scrapeEmailAddress()) == false) { return; }

        var linkId = __sco.osr.getLinkId(ev.target);
        var req = __sco.extend({ 'emailAddress': emailAddress, 'keyword': __sco.osr.getTemplateKeyword(), linkId: linkId + '_' + __sco.osr.activePageConfig.selectors.saveButton }, __sco.osr.getConfigRequest());

        var saveButton = _scs(__sco.osr.activePageConfig.selectors.emailOptIn);
        __sco.isArray(saveButton) ? __sco.iterateExecute(saveButton, opIn) : saveButton && opIn(saveButton);

        if (typeof (req.emailOptIn) !== "undefined" && req.emailOptIn === true) {
            return;
        }
        __sco.osr.unblockUI();
        var endpoint = __sco.osr.getApiHost() + '/litebox/emailbasket/' + __scd.i + '/' + __scd.s.i;

        __sco.management.intersend('POST', endpoint, SCJSON.stringify(req), function () {
            if (__sco.osr.errorState) { return; }

            if (__sco.osr.activePageConfig.selectors.emailBasketConfirmationTemplate != null) {
                var m = _scs(__sco.osr.activePageConfig.selectors.emailBasketConfirmationTemplate);
                m = __sco.isArray(m) ? m[0] : m;
                __sco.osr.blockUI({
                    message: m,
                    timeout: __sco.config.emailBasketConfirmationTimeout
                });
            }
            __scd.cc = false;
            __sco.management.setstatus(499, __sco.management.sendtoapi);

            // update email address in scd
            if (__scd.c.e.trim().length == 0) { __scd.c.e = emailAddress; }

        }, __sco.osr.requestHeaders);
    }

    /** Not me click **/
    __sco.osr.notMeClick = function (ev) {
        var emailField;
        emailField = _scs(__sco.osr.activePageConfig.selectors.emailCaptureField);
        emailField = __sco.isArray(emailField) ? emailField[0] : emailField;
        if (emailField) {
            emailField.value = "";
            __scd.c.e = "";
            emailField.readOnly = false;
        }
        __sco.osr.hideNotMeButton();
    }

    /** Subscription Click **/
    __sco.osr.subscriptionClick = function (ev) {
        function getValue(selector) {
            var el = _scs(selector);
            if (el == null || (__sco.isArray(el) && el.length < 1)) {
                return "";
            }
            return __sco.isArray(el) ? el[0].value : el.value;
        }

        __sco.osr.unblockUI();
        __sco.osr.stopPropagation(ev);
        var linkId = __sco.osr.getLinkId(ev.target),
            subscriptionRequest = {
                "FirstName": getValue(__sco.osr.activePageConfig.selectors.subscriptionName),
                "LastName": getValue(__sco.osr.activePageConfig.selectors.subscriptionSurname),
                "EmailAddress": getValue(__sco.osr.activePageConfig.selectors.subscriptionEmail),
                "Salutation": getValue(__sco.osr.activePageConfig.selectors.subscriptionSalutation),
                "TelephoneNumber": getValue(__sco.osr.activePageConfig.selectors.subscriptionTelephone)
            },
            req = __sco.extend(subscriptionRequest, __sco.osr.getConfigRequest()),
            endpoint = __sco.osr.getApiHost() + "/osr/subscribe?apiKey=" + __sco.config.guid + "&sessionId=" + __scd.s.i;

        __sco.management.intersend('POST', endpoint, req);
    }

    __sco.osr.getLinkId = function (link) {
        var linkId, link = link || window.event;
        if (typeof link.dataset !== "undefined") {
            linkId = (typeof link.dataset.scLinkId !== "undefined") ? link.dataset.scLinkId : -1;
        } else {
            linkId = link.getAttribute('data-sc-link-id');
            linkId = (linkId != null && linkId != "") ? linkId : -1;
        }
        return linkId;
    }

    /****************
     * CORE METHODS * 
     ****************/

    __sco.osr.conditionalDisplay = function (toSuppress) {
        if (typeof toSuppress !== "boolean") {
            __sco.osr.checkSessionLiteboxesExceedLimit(__sco.osr.activePageConfig, __sco.osr.conditionalDisplay);
        } else {
            if (toSuppress == false) {
                __sco.osr.show();
            }
        }
    }

    /** Show the litebox, optionally provide force parameter to override previouslyShown check, used in LB preview **/
    __sco.osr.show = function (force) {

        var endpoint = __sco.osr.getApiHost() + '/osr/' + __sco.config.guid + '/' + __scd.s.i;
        var controlGroup = (typeof (__sco.osr.config.controlGroup) != "undefined" && __sco.osr.config.controlGroup != null && __sco.osr.config.controlGroup.enabled == true);

        // pre show checks
        if (typeof (force) == "undefined" || force == false) {
            if (__sco.osr.previouslyShown == true || __sco.osr.config.enabled == false || __sco.osr.errorState == true || __sco.osr.preShowChecks() != true) {
                return;
            }
        }

        // control group will show OSR to a given percentage of users, and hide it for others. will always record with backend.
        if (controlGroup == true) {
            var roll = Math.floor((Math.random() * 100) + 1);
            if (roll <= __sco.osr.config.controlGroup.percentage) {
                var cgReq = __sco.extend({ 'basketContents': __scd.b.i, 'triggerType': __sco.osr.triggerType, 'cg': true }, __sco.osr.getConfigRequest());
                __sco.management.intersend('POST', endpoint, SCJSON.stringify(cgReq), function (apiResponse) { }, __sco.osr.requestHeaders);
                __sco.osr.previouslyShown = true;
                __sco.osr.recordOsrShowInStorage();
                return;
            }
        }

        var basketRequest = __sco.extend({ 'basketContents': __scd.b.i, 'triggerType': __sco.osr.triggerType, 'cg': false }, __sco.osr.getConfigRequest());

        // autofill email address or hide depending on config
        if (typeof (__sco.osr.activeInstanceConfig.autofillEmailAddress) !== "undefined") {
            var autofillConfig = __sco.osr.activeInstanceConfig.autofillEmailAddress.toLowerCase(), emailField = _scs(__sco.osr.activePageConfig.selectors.emailCaptureField);
            if (autofillConfig && __sco.noru(__scd.c.e) && __scd.c.e.trim() !== "" && (__sco.isArray(emailField) ? emailField.length > 0 : __sco.noru(emailField))) {
                if (autofillConfig === "autofill" || autofillConfig === "hide") {
                    emailField = __sco.isArray(emailField) ? emailField[0] : emailField;
                    emailField.setAttribute("value", __scd.c.e);
                    if (autofillConfig === "hide")
                        emailField.setAttribute("style", "display: none;");
                    if (autofillConfig === "autofill")
                        emailField.readOnly = true;
                }
                if (autofillConfig !== "autofill") {
                    __sco.osr.hideNotMeButton();
                }
            }
        }

        // Replace PlaceHolders with Content.
        __sco.osr.replacePlaceholders();

        // if data is required from the server, perform some checks and then show OSR
        if (__sco.osr.activeInstanceConfig.showRecommendations == true || __sco.osr.activeInstanceConfig.showBasketTrends == true) {
            if (!__sco.osr.await) {

                __sco.osr.await = true;

                if (__sco.osr.recomendationsKeyword !== null) {
                    basketRequest = __sco.extend({ recomendationsKeyword: __sco.osr.recomendationsKeyword }, basketRequest);
                }

                __sco.management.intersend('POST', endpoint, SCJSON.stringify(basketRequest), function (apiResponse) {
                    if (__sco.osr.errorState) { return; }

                    try {
                        // Try get response object
                        var response = __sco.tryparse(apiResponse.target.responseText);
                        if (__sco.type(response) != "object") {
                            return;
                        }

                        // Make sure the response matches with what we expect
                        if (__sco.osr.activeInstanceConfig.showRecommendations == true && __sco.osr.canShowRecommendations(response.Recommendations) == false) { return; }
                        if (__sco.osr.activeInstanceConfig.showBasketTrends == true && __sco.osr.canShowTrends(response.Trends) == false) { return; }

                        // render sections
                        __sco.osr._render({
                            'recommendations': response.Recommendations != null ? response.Recommendations : [],
                            'trends': response.Trends != null ? response.Trends : []
                        });
                    } catch (ex) { if (__sco.osr.debug) { throw ex; } }
                }, __sco.osr.requestHeaders);
            }
        }
        else {
            // no recommendations or trends required, just render when call to backend has been made, no need to wait for result
            __sco.management.intersend('POST', endpoint, SCJSON.stringify(basketRequest), function (apiResponse) { }, __sco.osr.requestHeaders);
            __sco.osr._render([], []);
        }
    };

    /** Replace Basket Placeholders **/
    __sco.osr.replacePlaceholders = function () {

        //method that replaces the placeholders
        function r(c, i) {
            var p = {};
            var a = typeof (i.td) !== 'undefined' ? new Date(i.td) : NaN;
            var d = typeof (i.fd) !== 'undefined' ? new Date(i.fd) : NaN;
            p["[[item:ItemId]]"] = i.i || "", p["[[item:ItemName]]"] = i.n || "", p["[[item:ItemValue]]"] = i.v || "", p["[[item:CustomField1]]"] = i.f1 || "", p["[[item:CustomField2]]"] = i.f2 || "", p["[[item:ItemQuantity1]]"] = i.q || "", p["[[item:ItemImage]]"] = i.u || "", p["[[item:ItemCurrency]]"] = __scd.b.c, p["[[item:size]]"] = i.si || "", p["[[item:size]]"] = i.si || "", p["[[item:colour]]"] = i.co || "", p["[[item:c]]"] = i.co || "", p["[[item:brand]]"] = i.br || "", p["[[item:b]]"] = i.br || "", p["[[item:q]]"] = i.q || "", p["[[item:i]]"] = i.av || "", p["[[item:vp]]"] = i.op || "", p["[[item:NumberOfAdults]]"] = i.na || "", p["[[item:ItemQuantity2]]"] = i.na || "", p["[[item:NumberOfChildren]]"] = i.nc || "", p["[[item:ItemQuantity3]]"] = i.nc || "", p["[[item:NumberOfRooms]]"] = i.nr || "", p["[[item:NumberOfNights]]"] = i.nn || "", p["[[item:ArrivalLongDate]]"] = i.td || "", p["[[item:ArrivalLongDate]]"] = isNaN(a) ? "" : a.toLocaleTimeString(), p["[[item:ArrivalDate]]"] = isNaN(a) ? "" : a.toLocaleTimeString(), p["[[item:ArrivalDay]]"] = isNaN(a) ? "" : a.getDate(), p["[[item:ArrivalMonth]]"] = isNaN(a) ? "" : a.getMonth() + 1, p["[[item:ArrivalYear]]"] = isNaN(a) ? "" : a.getFullYear(), p["[[item:DepartureLongDate]]"] = isNaN(d) ? "" : d.toDateString(), p["[[item:DepartureDate]]"] = isNaN(d) ? "" : d.toLocaleTimeString(), p["[[item:DepartureDay]]"] = isNaN(d) ? "" : d.getDate(), p["[[item:DepartureMonth]]"] = isNaN(d) ? "" : d.getMonth(), p["[[item:DepartureYear]]"] = isNaN(d) ? "" : d.getFullYear(), p["[[item:q2]]"] = i.na || "", p["[[item:q3]]"] = i.nc || "", p["[[item:d1]]"] = i.ft || "", p["[[item:depAirport]]"] = i.ft || "", p["[[item:d2]]"] = i.tt || "", p["[[item:desAirport]]"] = i.tt || "", p["[[item:c1]]"] = i.ft2 || "", p["[[item:depAirportCode]]"] = i.ft2 || "", p["[[item:c2]]"] = i.tt2 || "", p["[[item:desAirportCode]]"] = i.tt2 || "", p["[[item:ht]]"] = i.rt || "", p["[[item:hoteltype]]"] = i.rt || "";
            for (var g in p) p.hasOwnProperty(g) && (c = c.replace(g, p[g]));
            var re = /\[\[Item\:(.*)\]\]/gi;
            var m = c.match(re);
            for (var k in m) {
                if (m.hasOwnProperty(k)) {
                    var n = re.exec(m[k]);
                    if (n !== null && n.length > 1 && i.hasOwnProperty(n[1])) {
                        c = c.replace(k, i[n[1]]);
                    }
                }
            }
            return c;
        }

        var lb = _scs(__sco.osr.activePageConfig.selectors.liteboxContainer);
        lb = __sco.isArray(lb) ? lb[0] : lb;

        //replace item inside repeater
        var re = /\[\[ProductList\:Start\]\](.*)\[\[ProductList\:End\]\]/g;
        var s = {};
        if (lb !== null) {
            var t = re.exec(lb.innerHTML);
            var h = "";
            if (t !== null) {
                for (var p in __scd.b.i) if (__scd.b.i.hasOwnProperty(p)) h += r(t[1], __scd.b.i[p]) + "\n";
            }
            //replace item outside of repeater
            lb.innerHTML = lb.innerHTML.replace(re, h);
            if (__scd.b.i.length > 0) {
                lb.innerHTML = r(lb.innerHTML, __scd.b.i[0]);
            }

            //replace all other custom placeholders
            re = (/\[\[([s])(ession|):([A-z0-9-_^\[]+)\]\]/gi);
            var m = lb.innerHTML.match(re);
            __sco.each(m, function (ix, val) {
                var n = __sco.inbetween('session:', ']]', val, 'ff');

                if (n !== null && n.length > 0 && __scd.s.hasOwnProperty(n)) {
                    lb.innerHTML = lb.innerHTML.replace(val, __scd.s[n]);
                } else {
                    lb.innerHTML = lb.innerHTML.replace(val, "");
                }
            });
        }
    }

    /** Hide "not me" button **/
    __sco.osr.hideNotMeButton = function () {
        function hide(elem) {
            elem.setAttribute("style", "display: none;");
        }
        var b = _scs(__sco.osr.activePageConfig.selectors.notMeButton);
        __sco.isArray(b) ? __sco.iterateExecute(hide, b) : null !== b && hide(b);
    };

    /** Check if mouse has moved in the configured time interval **/
    __sco.osr.checkForActivity = function () {
        if (__sco.osr.lastMove.timestamp == null) {
            __sco.osr.lastMove.timestamp = new Date().getTime();
            __sco.osr.lastMove.x = 0;
            __sco.osr.lastMove.y = 0;
        }
        if (__sco.osr.lastMove.timestamp != null && __sco.osr.lastMove.x != null && __sco.osr.lastMove.y != null
            && __sco.osr.lastMove.timestamp < new Date().getTime() - __sco.osr.activeInstanceConfig.inactivityDuration) {
            __sco.osr.lastMove.timestamp = null;
            return true;
        }
        return false;
    };

    /** Replace template variables **/
    __sco.osr._tmpl = function (template, model) {
        var re = /\$\{([^}.]*)}/g;
        var returnHtml = '', match, newTpl;
        __sco.each(model, function (ix, item) {
            newTpl = template.cloneNode(true).innerHTML;
            while (match = re.exec(template.innerHTML)) {
                newTpl = newTpl.replace(match[0], item[match[1]]);
            }
            returnHtml += newTpl;
        });
        return returnHtml;
    };

    /** Render the litebox with provided recommendations & trends **/
    __sco.osr._render = function (viewModel) {
        var container = _scs(__sco.osr.activePageConfig.selectors.liteboxContainer);

        __sco.osr.showRecommendationsContent(viewModel.recommendations);
        __sco.osr.showTrendsContent(viewModel.trends);

        __sco.osr.blockUI({ message: __sco.isArray(container) ? container[0] : container });
        __sco.osr.rebindTemplateEvents();
        __sco.osr.sendPing();
        __sco.osr.previouslyShown = true;
        __sco.osr.recordOsrShowInStorage();
    };

    /** return API environment from v2api property **/
    __sco.osr.getApiHost = function () {
        var parser = document.createElement('a');
        parser.href = __sco.config.v2api;
        var host = parser.protocol + "//" + parser.host;

        return host;
    }

    /** If we don't have local storage, need to send a fingerprint along with the request **/
    __sco.osr.getConfigRequest = function () {
        var req = {
            'pid': __sco.osr.activePageConfig.id,
            'si': __scd.m.si,
            'ua': __scd.m.ua,
            'keyword': __sco.osr.getTemplateKeyword(),
            'u': __scd.u || ""
        };

        // instance id may not be available yet
        if (typeof (__sco.osr.activeInstanceConfig) != "undefined" && __sco.osr.activeInstanceConfig != null && typeof (__sco.osr.activeInstanceConfig.id) != "undefined") {
            req['iid'] = __sco.osr.activeInstanceConfig.id;
        }

        return req;
    }

    /** Send a ping to the backend to indicate OSR has actually been rendered **/
    __sco.osr.sendPing = function () {
        var endpoint = __sco.osr.getApiHost() + '/litebox/ping/' + __scd.i + '/' + __scd.s.i;
        __sco.management.intersend('POST', endpoint, SCJSON.stringify(__sco.osr.getConfigRequest()), function (apiResponse) { }, __sco.osr.requestHeaders);
    }

    /** Camelcase from DTO **/
    __sco.osr._toCamelCase = function (obj) {
        var newObj = {};
        __sco.each(obj, function (ix, key) {
            if (obj.hasOwnProperty(key) == true) {
                var newKey = key;
                newKey = newKey.charAt(0).toLowerCase() + newKey.slice(1);

                if (typeof (obj[key]) == "object") {
                    newObj[newKey] = __sco.osr.toCamelCase(obj[key]);
                } else {
                    newObj[newKey] = obj[key];
                }
            }
        });
        return newObj;
    };

    /** Get exact viewport dimensions, so we can exclude scrollbar **/
    __sco.osr.getViewportDimensions = function () {
        el = _scs('.viewportcalc');
        if (el == null) {
            var viewportCalc = document.createElement('img');
            viewportCalc.className = 'viewportcalc';
            viewportCalc.setAttribute('src', 'https://d22j4fzzszoii2.cloudfront.net/images/pixel.gif');
            viewportCalc.setAttribute('style', 'position: fixed; bottom: 0px; right: 0px; height: 1px; width: 1px;');
            _scs('body')[0].appendChild(viewportCalc);
            el = _scs('.viewportcalc');
        }

        return {
            'width': el[0].offsetLeft + 1,
            'height': el[0].offsetTop + 1
        };
    }

    /** Obtain the initial referer for the session **/
    __sco.osr.getReferer = function () {
        var a = __sco.storage.get("_scRF");
        "string" !== typeof a && __sco.osr.setReferer(), a = __sco.storage.get("_scRF");
        return a;
    };

    __sco.osr.getRefererAffiliate = function () {
        return false;
    };
    __sco.osr.setReferer = function () {
        var a = __sco.storage.get("_scRF");
        "string" !== typeof a && (a = __sco.osr.getRefererAffiliate(), false === a && (a = re()), __sco.storage.set("_scRF", a, 0));

        function re() {
            var e = /^http[s]?:\/\/(www.|)([^/]*)\/([^?]*)/i,
                s = ['yandex', 'google', 'bing', 'msn', 'search', 'aol', 'yahoo', 'baidu', 'blekko', 'lycos', 'youdao', 'excite'];
            document.referrer.match(e);
            var m = RegExp.$2;
            if ("" === m) return "";
            for (var i in s) {
                if (s.hasOwnProperty(i) - 1 !== m.indexOf(s[i])) return s[i];
            }
            return "other";
        }
    };

    /** Send tracking to google analyitics **/
    __sco.osr.GA = function () {
        //screenview port size
        function viewport() {
            var a = window,
                b = "inner";
            "innerWidth" in window || (b = "client", a = document.documentElement || document.body);
            return {
                width: a[b + "Width"],
                height: a[b + "Height"]
            }
        }
        //javaversion (optional but usefull for breakdown)
        function je() {
            return navigator.javaEnabled && navigator.javaEnabled() ? 1 : 0
        }
        //flash version (ie7+ and non ie browsers) (optional but usefull for breakdown)
        function flv() {
            if (navigator.mimeTypes && typeof (navigator.mimeTypes["application/x-shockwave-flash"]) !== "undefined" && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                return ((navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.match(/[0-9]+.*/)[0] || 0).replace(/,/g, ' ')
            } else {
                try { f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (a) { return 0 }
                return f ? (f.GetVariable('$version').match(/[0-9]+.*/)[0] || 0).replace(/,/g, ' ') : 0
            }
        }
        //random part of cid and rand used for cache busting
        function r() {
            if (window.crypto && window.crypto.getRandomValues) {
                var a = new Uint32Array(1);
                window.crypto.getRandomValues(a);
                return a[0] & 2147483647
            }
            return Math.round(2147483647 * Math.random())
        }
        //Generate ClientId
        function gc() {
            return r() + "." + Math.round(new Date / 1E3)
        };

        var c = __sco.storage.get("_scGA"),
            d = 0 === window.location.host.indexOf("www.") ? window.location.host.substring(4).split(".").length : window.location.host.split(".").length,
            o = encodeURIComponent(document.location.origin),
            p = encodeURIComponent(document.location.pathname),
            s = encodeURIComponent(document.location.search),
            t = encodeURIComponent(document.title),
            f = document.referrer !== "" ? "&dr=" + encodeURIComponent(document.referrer) : "",
            b = "&z=" + r(),
            i = __sco.osr.googleTrackingId;// "UA-58778492-2"
        vp = viewport();
        //check if the cid cookie exists, if not create it
        "string" !== typeof c ? (c = gc(), __sco.storage.set("_scGA", "GA1." + d + "." + c, 730)) : (c = c.split("."), c = c[2] + "." + c[3]);
        var url = (("https:" == document.location.protocol ? "https://" : "http://") + "www.google-analytics.com/collect?v=1&t=pageview&dl=" + o + p + s + "&cid=" + c + "&dt=" + t + "&tid=" + i + "&sr=" + screen.width + "x" + screen.height + "&sd=" + screen.colorDepth + "-bit&vp=" + vp.width + "x" + vp.height + "&fl=" + encodeURIComponent(flv()) + "&je=" + je() + "&de=" + encodeURIComponent(document.charset || document.characterSet) || "-") + f + b;
        //send request to ga
        var __scGAS = new Image;
        __scGAS.src = url;
        __scGAS.style.display = "none";
    };

    /** Log errors, either to console, endpoint or silently depending on config **/
    __sco.osr.log = function (category, level, message) {
        var logLine = ("[{0}] [{1}] {2}"
            .replace("{0}", category)
            .replace("{1}", level)
            .replace("{2}", message));

        if (__sco.osr.config.debug == true) {
            __sco.osr.logFile.push(logLine);
        }
    }

    /** Placeholder - no endpoint yet for OSR logging **/
    __sco.osr.sendLog = function () {
        return true;
    }

    /*******************
     * UTILITY METHODS *
     *******************/

    /** An intermediate callback function for getting from storage, abstracts away the use of the provider **/
    __sco.osr.interget = function (name, callback, def) {
        try {
            var defType = __sco.type(def), ticket = -1, toCallback = __sco.type(callback) == "function";
            if (defType === "null" || defType === "undefined") {
                def = false;
            }
            if (__sco.support.ps) {
                if (toCallback) {
                    ticket = __sco.tickets.push(callback);
                }
                __sco.management.listener.get(name, def, ticket - 1);
                // If local storage is not available then don't callback and let the script exit
            } else if (__sco.osr.localStorageAvailable) {
                var result = __sco.tryparse(localStorage.getItem(name));
                if (toCallback) {
                    callback(__sco.noru(result) ? result : def);
                }
            }
        } catch (ex) { if (__sco.osr.debug) { throw ex; } }
    }

    //* An intermediate set function, abstracts use of the provider if needed **/
    __sco.osr.interset = function (name, toset, callback) {
        try {
            var ticket = -1, toCallback = __sco.type(callback) === "function";
            if (__sco.support.ps) {
                if (toCallback) {
                    ticket = __sco.tickets.push(callback);
                }
                __sco.management.listener.set(name, toset, ticket - 1);
                // If no provider storage then use local storage
            } else if (__sco.osr.localStorageAvailable) {
                var result = localStorage.setItem(name, __sco.type(toset) !== "string" ? SCJSON.stringify(toset) : toset);
                if (toCallback) {
                    callback(result);
                }
            }
            // If no local storage or provider storage then don't call back, just let script exit
        } catch (ex) { if (__sco.osr.debug) { throw ex; } }
    }

    __sco.osr.on = function (evnt, func, elem) {
        // handle array of elements
        if (__sco.isArray(elem)) {
            for (var i = 0; i <= elem.length - 1; i++) {
                __sco.on(evnt, func, elem[i]);
            }
            return;
        }
        var ev = window.addEventListener, el = arguments.length > 2 && __sco.noru(elem) ? elem : window;
        ev ? el.addEventListener(evnt, func, true) : el.attachEvent("on" + evnt, func);
    }

    /** Detect early IE versions **/
    __sco.osr.isEarlyIe = function () {
        var matches = navigator.userAgent.match(/msie(\s+)[7-9]/i);
        return matches != null && matches.length > 0;
    }

    /** Detect if this is an IE like browser **/
    __sco.osr.isIeLikeBrowser = function () {
        var lowerCaseUserAgent = __sco.support.useragent.toLowerCase();
        return __sco.support.browser === "MSIE" || __sco.contains(lowerCaseUserAgent, "trident/") === true || __sco.contains(lowerCaseUserAgent, "edge") === true;
    }

    /** Prevent default cross-browser **/
    __sco.osr.preventDefault = function (ev) {
        if (__sco.osr.isIeLikeBrowser() && typeof (ev.preventDefault) == 'undefined') { ev.returnValue = false; }
        else { ev.preventDefault(); }
    }

    /**  Stop propagation cross-browser **/
    __sco.osr.stopPropagation = function (ev) {
        if (__sco.osr.isIeLikeBrowser()) { ev.cancelBubble = true; }
        else { ev.stopPropagation(); }
    }
    /***************
     *     INIT    *
     ***************/
    // send page view to google analytics
    if (typeof (__sco.osr.googleTrackingId) === "string" && __sco.osr.googleTrackingId != "") {
        __sco.management.contentLoaded(window, __sco.osr.GA);
    }
    //__sco.management.contentLoaded(window, __sco.osr.setReferer());
    __sco.osrInt = typeof __sco.osrInt === "number" ? __sco.osrInt : null;
    if (__sco.config.osr && __sco.config.v2 && __sco.osrInt == null) {
        __sco.osrInt = setInterval(function () {
            if (typeof (__scd) != 'undefined' && typeof (__scd.c) != 'undefined' && typeof (__scd.b) != 'undefined') {
                clearInterval(__sco.osrInt);
                __sco.osr.init();
            }
        }, 500);
    }
}
catch (ex) {
    if (__sco.osr.debug == true) {
        console.log("Caught exception in debug mode", ex);
    }
    __sco.osr.errorState = true;
    // report to v2
    __sco.osr.log("exception", "fatal", ex);
    __sco.osr.sendLog();
    // report to v1
    if (__sco.config.v1)
        __sco.management.intersend("POST", __sco.config.v1errorapi, __sco.v1runtime(ex));
}