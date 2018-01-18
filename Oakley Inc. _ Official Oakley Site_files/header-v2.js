


$(function(){

  var globalHeaderDropdown = {
        /**
        * Cache elements
        */
        elements: {
            $header: $('#global-header-dropdown'),
            // $dropdownLinks: $('.category-link[data-dropdown-id]'),
            // $expandLinks: $('.subcategory a'),
            $menuButton: $('.menu-button'),
            $navContainer: $('.nav-container'),
            $buttonContainer: $('.button-container'),
            $searchButton: $('.search-button'),
            $searchSendButton: $('.search-send-button'),
            $searchInput: $('input.typeahead.tt-input'),
            $mobileSearchBar: $('.mobile-search-bar'),
            $closeMobileSearchButton: $('.mobile-search-bar button')
        },
        /**
        * A place to store module vars
        */
        vars: {
            isMobile: window.matchMedia('all and (max-width: 900px)')
        },
        /**
        * Initialize this module
        */
        init: function() {
            this.bind();
            this.initNavMenu();
        },
        /**
        * Bind module events
        */
        bind: function() {
            $(document).on('click', $.proxy(this.handleOutsideClick, this));

            // this.elements.$header.on('click', this.elements.$dropdownLinks.selector, $.proxy(this.toggleDropdown, this));
            // this.elements.$header.on('click', this.elements.$expandLinks.selector, $.proxy(this.toggleExpand, this));
            this.elements.$header.on('click', this.elements.$menuButton.selector, $.proxy(this.toggleNavMenu, this));
            this.elements.$header.on('click', this.elements.$searchButton.selector, $.proxy(this.openMobileSearch, this));

            this.elements.$header.on('click', this.elements.$searchSendButton.selector, $.proxy(this.sendSearchQuery, this));
            this.elements.$header.on('submit', this.elements.$searchInput.selector, $.proxy(this.sendSearchQuery, this));

            this.elements.$header.on('click', this.elements.$closeMobileSearchButton.selector, $.proxy(this.closeMobileSearch, this));
            this.vars.isMobile.addListener($.proxy(this.breakpointChange, this));
        },
        /**
        * Takes a jQuery wrapped $dropdown element and intializes the slick slider carousel
        */
        initSlider: function($dropdown) {
            // This is a mobile device, do not init slider
            if (this.vars.isMobile.matches) {
                return false;
            }

            $dropdown.find('.js-slider').slick({
                slide: '.slide',
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: false,
                dots: true,
                appendArrows: $dropdown.find('.dropdown-container'),
                prevArrow: '<div class="slick-prev fa fa-long-arrow-left"></div>',
                nextArrow: '<div class="slick-next fa fa-long-arrow-right"></div>',
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    }
                ]
            });
        },
        /**
        * Computes and sets the width of the nav menu, this is necessary for the mobile horizontal scroll
        */
        initNavMenu: function() {
            var width = 10;
            this.elements.$navContainer.find('.category').each(function() {
                var item = $(this);
                width += item.width();
            });
            this.elements.$navContainer.find('.nav-links').width(width);
        },
        /**
        * Detect clicks outside of the dropdown and close dropdown
        */
        handleOutsideClick: function(e) {
            if (!$(e.target).closest('#global-header-dropdown').length) {
                this.hideExpanded();
                this.hideDropdowns();
            }
        },
        /**
        * Opens a clicked dropdown, if that dropdown is already open, then the default is not prevented
        * expectation is that the second click will follow a link
        */
        toggleDropdown: function(e) {
            var $clickedLink = $(e.currentTarget);
            var $dropdown = $('.dropdown[data-dropdown-id="' + $clickedLink.attr('data-dropdown-id') + '"]');
            if (!$dropdown.hasClass('show')) {
                e.preventDefault();
                this.hideExpanded();
                this.hideDropdowns();
                $clickedLink.parent('.category').addClass('active');
                $dropdown.addClass('show');
                this.initSlider($dropdown);
            }
        },
        /**
        * Hides an open dropdown, will also uninitialize slick if the dropdown contained a carousel
        */
        hideDropdowns: function() {
            $('.category.active').removeClass('active');
            var $activeDropdown = $('.dropdown.show');
            var $slider = $activeDropdown.find('.js-slider');
            $activeDropdown.removeClass('show');
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        },
        /**
        * Expand categories on mobile
        */
        toggleExpand: function(e) {
            var $clickedLink = $(e.currentTarget);
            var $subcategory = $clickedLink.parents('.subcategory-list');

            // Don't do anything if this is a single link, or it is tablet / desktop
            if (!this.vars.isMobile.matches || $subcategory.hasClass('single-link')) {
                return;
            }

            e.preventDefault();
            if ($subcategory.hasClass('show')) {
                $subcategory.removeClass('show');
            } else {
                this.hideExpanded();
                $subcategory.addClass('show');
            }
        },
        /**
        * Hide any expanded categories
        */
        hideExpanded: function() {
            $('.subcategory-list.show').removeClass('show');
        },
        /**
        * Toggle the mobile nav menu
        */
        toggleNavMenu: function(e) {
            e.preventDefault();
            if (this.elements.$navContainer.hasClass('show')) {
                this.hideDropdowns();
                this.elements.$buttonContainer.removeClass('hide-menu').addClass('show-menu');
                this.elements.$navContainer.removeClass('show');
            } else {
                this.elements.$buttonContainer.removeClass('show-menu').addClass('hide-menu');
                this.elements.$navContainer.addClass('show').removeClass('animate');
            }
        },
        /**
        * Open the mobile search input
        */
        openMobileSearch: function(e) {
            this.elements.$mobileSearchBar.addClass('show').find('input').focus();
            e.preventDefault();
        },
        /**
        * Send search query to Hybris
        */
        sendSearchQuery: function(e) {
            // this.elements.$mobileSearchBar.addClass('show').find('input').focus();
            e.preventDefault();
            console.log($('input.typeahead.tt-input').val());
            window.open('/search?text=' + $('input.typeahead.tt-input').val(), 'self');

            return;
        },
        /**
        * Close the mobile search input
        */
        closeMobileSearch: function(e) {
            this.elements.$mobileSearchBar.removeClass('show');
            if (e) {
                e.preventDefault();
            }
        },
        /**
        * Event triggered when the window width breaks the threshold between
        * mobile and tablet
        */
        breakpointChange: function(changed) {
            this.hideExpanded();
            this.hideDropdowns();
            if (!changed.matches) {
                this.closeMobileSearch();
            }
        }
    };

    globalHeaderDropdown.init();

  // $(".cart-button, .cart-title").click(function(){
  //   $("body").toggleClass("showingCart");
  //  });


     var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({ value: str });
        }
      });

      cb(matches);
    };
  };

  var products = ['Radar', 'Flakjacket', 'Racingjacket', 'Frogskin', 'Monster Dog',
  'Monster Pup', 'Fuel Cell', 'Radarlock Path', 'Radarlock Pitch', 'Radarlock Range',
  'Jawbreaker', 'Jawbone', 'Gascan', 'M2', 'M Frame', 'Holbrook', 'Oil Rig',
  'Crankshaft', 'Straight Jacket', 'Jupiter Squared', 'Prizm', 'Turbine', 'Crosshair',
  'Crankshaft', 'Breadbox', 'Fives Squared', 'Tincan', 'Half Jacket', 'Half Jacket 2.0',
  'Flak Jacket 2.0', 'Radar EV', 'Sliver', 'Frogskins LX', 'Enduro', 'Two Face', 'Plaintiff',
  'Plaintiff Squared', 'Valve', 'Chainlink', 'Halflink', 'Taper', 'Bottle Rocket'];

  // var athletes = ['Ian Poulter', 'Hideki Matsuyama', 'Beatriz Recari', 'Ryann Otoole',
  // 'Rafa Cabrera-Bello', 'Zach Johnson', 'Derek Ernst', 'Ricky Barnes', 'Vincenzo Nibali',
  // 'Joaquim Rodriquez', 'Seth Morrison', 'Tanner Hall', 'Sean Pettit', 'Richard Permin',
  // 'Simon Dumont', 'Sammy Carlson', 'Joss Christiansen', 'Kaya Turski', 'Alex Schlopy',
  // 'Grete Eliassen', 'Henrik Harlaut', 'Andreas Fransson', 'JP Auclair', 'Maggie Voisin',
  // 'Jossie Wells', 'Alex Beauliu-Marchard', 'Sean Jordan', 'Aksel Lund Svindal', 'Lindsay Vonn',
  // 'Mikaela Shiffrin', 'Gabriel Medina', 'Sabastian Zietz', 'Adam Melling', 'Julina Wilson',
  // 'Jordy Smith', 'Kolohe Andino', 'Jadson Andre', 'Andriano De Sauza', 'Bruce Irons',
  // 'Nikki Van Dijk', 'Eric Geiselman', 'Conner Coffin', 'Tom Whitaker', 'Billy Stirmand',
  // 'Perth Standlick', 'Caio Ibelli', 'Distin Barca ', 'Granger Larsen', 'Sage Erickson',
  // 'Matt Kemp', 'Miguel Cabrera', 'Ichiro Suzuki', 'Jose Bautista', ];



  // --- When using Oakley.com autocomplete -- //
   // var products = new Bloodhound({
   //    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
   //    queryTokenizer: Bloodhound.tokenizers.whitespace,
   //    prefetch: 'http://www.oakley.com/en/search/autocomplete?term=sun',
   //    remote: 'http://www.oakley.com/en/search/autocomplete?term=%QUERY'
   //  });
  // products.initialize();
  // $('#the-basics .typeahead').typeahead(null, {
  //   name: 'products',
  //   displayKey: 'value',
  //   source: products.ttAdapter(),
  //   hint: true,
  //   highlight: true,
  //   minLength: 1
  // },
  // {
  //   name: 'products',
  //   displayKey: 'value',
  //   source: substringMatcher(products)
  // });
  // --- When using Oakley.com autocomplete -- //



  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'products',
    displayKey: 'value',
    source: substringMatcher(products),
    templates: {
      header: '<p class="h6 title products">Products</p>'
    }
  }
  // ,
  // {
  //   name: 'athletes',
  //   displayKey: 'value',
  //   source: substringMatcher(athletes),
  //   templates: {
  //     header: '<p class="h6 title athletes">Athletes</p>'
  //   }
  // }
  );

  // var request = $.ajax({
  //   // url: "http://www.oakley.com/cart/data",
  //   url: "http://unicorn.local/data.json",
  //   method: "GET",
  //   dataType: "json"
  // });

  // request.done(function( msg ) {
  //   console.log(msg);
  //   // console.log(msg.firstName);
  //   console.log(msg.totalItems.totalItems);
  //   var totalItems = msg.totalItems.totalItems;
  //   // if(totalItems != nil){

  //   // }
  // });

  // request.fail(function( jqXHR, textStatus ) {
  //   console.log("Failed Request: " + textStatus);
  // });


  // http://www.oakley.com/cart/data




  $("#regions").change(function(e){
    $(".flag").removeClass();
    $(this).parent().parent().find("img").addClass("flag flag-lg flag-" + $(this).find("option:selected").val());
    if($(this).find("option:selected").val() != "us"){
       window.open('http://' + $(this).find("option:selected").val() + '.oakley.com/', "_self");
    }else{
       window.open('http://www.oakley.com', "_self");
    }

  });

  $("#languages").change(function(e){
    // console.log($(this).find("option:selected").val());

    // var url = document.URL,
    // shortUrl=url.substring(url.indexOf("/")+2,url.indexOf("/")+4);

    // console.log(shortUrl);

    window.open('/' + $(this).find("option:selected").val(), "_self");

  });



});