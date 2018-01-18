(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

jQuery(document).ready(function($){

$("img.lazy").lazyload({
    threshold : 200
});

// ScrollMagic Controls
// -------------------------------------------------------------------------


    // Helmet Page Controller
    var vh = $(window).height();
    var vw = $(window).width();
    var helmetCtrl = new ScrollMagic.Controller({ globalSceneOptions: { reverse:false } });


    
    if( $('body').hasClass('isDesktop') ){

      // Set Cascade In class
      var cascadeCtrl = new ScrollMagic.Controller({ globalSceneOptions: { reverse:false } });
      $('.cascade-in').each(function (index, elem) {
          var splitText = new SplitText(elem, {type:'lines'});
          var cRate = $(elem).data('cascade-rate');
          var staggerRate = cRate/10;
          TweenMax.set(splitText.lines, { opacity:0 });
          var cascadeInTween = TweenMax.staggerTo(splitText.lines, cRate, { opacity:1 }, staggerRate, allDone );
          new ScrollMagic.Scene({
                  triggerElement: elem,
                  triggerHook: 'onEnter',
                  offset: vh*0.25
              })
              .setTween(cascadeInTween)
              .addTo(cascadeCtrl);
          function allDone(){
              splitText.revert();
          }
      });


      // Set Fade In class
      var fadeCtrl = new ScrollMagic.Controller({ globalSceneOptions: { reverse:false } });
      $('.fade-in').each(function (index, elem) {
          var fRate = $(elem).data('fade-rate');
          TweenMax.set(elem, { opacity:0 });
          var fadeInTween = TweenMax.to(elem, fRate, { opacity:1 } );
          new ScrollMagic.Scene({
                  triggerElement: elem,
                  triggerHook: 'onEnter',
                  offset: vh*0.25
              })
              .setTween(fadeInTween)
              .addTo(fadeCtrl);
      });

      // Set Parallax class
      var parallaxCtrl = new ScrollMagic.Controller({ globalSceneOptions: { duration: vh*3, reverse:true } });
      var pRateMaster = $(window).width() * 0.13;
      function setParallax(pBase) {
          $('.parallax').each(function (index, elem) {
              var pRate = $(elem).data('parallax-rate');
              var pDistance = pBase * pRate;
              var pTween = TweenMax.fromTo(elem, 3, { y:pDistance }, { y:eval(pDistance*-1) } );
              window['pScene' + index] = new ScrollMagic.Scene({
                  duration: $(window).height,
                  triggerElement: elem,
                  triggerHook: 'onEnter', })
                  .setTween(pTween)
                  .addTo(parallaxCtrl);
          });
      }
      setParallax(pRateMaster);

          // Adjust Parallax Rate On Resize
              $(window).resize(function() {
                  $('.parallax').each(function (index) { eval('pScene' + index + '.destroy(true);'); });
                  pRateMaster = $(window).width() * 0.13;
                  setParallax(pRateMaster);
              });
    }

    if( $('body').hasClass('isDesktop') ){
      var helmetShiftAmount = vh/2;
    } else {
      var helmetShiftAmount = vh/4;
    }

    var heroCtrl = new ScrollMagic.Controller({ globalSceneOptions: { duration: vh*3, reverse:true } });
    var heroHelmet = $('#hero-flex'),
        shiftHelmet = new TimelineMax().to(heroHelmet, 2, {y:helmetShiftAmount}),
        helmetScene = new ScrollMagic.Scene()
          .setTween(shiftHelmet)
          .addTo(heroCtrl);


// Modular Brim System
// -------------------------------------------------------------------------

    // Brim Intro
    var brimList = $('#brim-flickity').flickity({
        prevNextButtons: false,
        pageDots: true,
        imagesLoaded: true,
        watchCSS: true
    });

    // Init Prev & Next Selectors
    Flickity.createMethods.push('_createPrevNextCells');
    Flickity.prototype._createPrevNextCells = function() {
      this.on( 'cellSelect', this.setPrevNextCells );
    };
    Flickity.prototype.setPrevNextCells = function() {
      // remove classes
      if ( this.previousCell ) {
        classie.remove( this.previousCell.element, 'is-previous' );
      }
      if ( this.nextCell ) {
        classie.remove( this.nextCell.element, 'is-next' );
      }
      // set cells
      this.previousCell = this.cells[ this.selectedIndex - 1 ];
      this.nextCell = this.cells[ this.selectedIndex + 1 ];
      // add classes
      if ( this.previousCell ) {
        classie.add( this.previousCell.element, 'is-previous' );
      }
      if ( this.nextCell ) {
        classie.add( this.nextCell.element, 'is-next' );
      }
    };


    // Goggle Switcher
    var goggleList = $('#goggle-switcher').find('.goggles');
    var lBrim = $('#goggle-switcher').find('#l-brim');
    var sBrim = $('#goggle-switcher').find('#s-brim');
    var goggleSet = goggleList.flickity({
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true
    });
    var flkty = goggleSet.data('flickity');

        // Arrow Controls
        $('#goggle-switcher').find('#arrow-left').on( 'click', function() {
          goggleSet.flickity('previous');
        });

        $('#goggle-switcher').find('#arrow-right').on( 'click', function() {
          goggleSet.flickity('next');
        });

        // Block Controls
        $('#goggle-switcher').find('#block-prev').on( 'click', function() {
          goggleSet.flickity('previous');
        });

        $('#goggle-switcher').find('#block-next').on( 'click', function() {
          goggleSet.flickity('next');
        });


    // Brim Switcher
    var attachSBrim = new TimelineMax({paused:true});
    attachSBrim.set(sBrim, {opacity:0, scale:1.1, top:'-3%'})
               .to(lBrim, 0.3, {scale:1.1, top:'-3%', ease:Power4.easeOut})
               .set(lBrim, {opacity:0})
               .set(sBrim, {opacity:1})
               .add( 
                  function(){
                    $('#s-label').addClass('attached');
                    $('#l-label').removeClass('attached');
                  }
                )
               .to(sBrim, 0.4, {scale:1, top:'0%', ease:Power4.easeIn});

    var attachLBrim = new TimelineMax({paused:true});
    attachLBrim.set(lBrim, {opacity:0, scale:1.1, top:'-3%'})
               .to(sBrim, 0.3, {scale:1.1, top:'-3%', ease:Power4.easeOut})
               .set(sBrim, {opacity:0})
               .set(lBrim, {opacity:1})
               .add( 
                  function(){
                    $('#l-label').addClass('attached');
                    $('#s-label').removeClass('attached');
                  }
                )
               .to(lBrim, 0.4, {scale:1, top:'0%', ease:Power4.easeIn});

    var selectedBrim = 'l';
    var previousBrim, selectedGoggle;
    goggleSet.on( 'cellSelect', function() {
      previousBrim = selectedBrim;
      selectedBrim = $('#goggle-switcher').find('.goggle').eq(flkty.selectedIndex).data('brim-size');
      selectedGoggle = $('#goggle-switcher').find('.goggle').eq(flkty.selectedIndex).data('goggle-name');
      $('#mbs-info').find('h4').html(selectedGoggle);


      if ( selectedBrim == 'l' && previousBrim == 's') {
        attachLBrim.pause(0);
        attachLBrim.play();
      } else if ( selectedBrim == 's' && previousBrim == 'l') {
        attachSBrim.pause(0);
        attachSBrim.play();
      }

    });


// Airflow
// -------------------------------------------------------------------------


  $('#airflow').find('#tabnav').find('.tab').click(function() {
    $(this).addClass('selected');
    $('#airflow').find('#tabnav').find('.tab').not(this).removeClass('selected');
    var targetGFX = $(this).attr('name');
    $('#airflow').find('#gfx').find('#' + targetGFX).addClass('selected');
    $('#airflow').find('#gfx').find('.airflow-gfx').not('#' + targetGFX).removeClass('selected');
    $('#airflow').find('#hotspots').find('#' + targetGFX).addClass('selected');
    $('#airflow').find('#hotspots').find('.hotspot').not('#' + targetGFX).removeClass('selected');
    $('#airflow').find('#gfx-content').find('#' + targetGFX).addClass('selected');
    $('#airflow').find('#gfx-content').find('div').not('#' + targetGFX).removeClass('selected');
  });

  $('#hotspots').find('.hotspot').each(function (index, elem) {
        var gfx = $(elem).attr('id'),
            tween = new TimelineMax({paused:true}),
            container = $(this).parent(),
            thisPath = container.find('.line').find('#' + gfx + 'Line'),
            thisContent = container.parent().find('#gfx-content').find('#' + gfx);

            TweenMax.set(thisPath, {drawSVG:"0%", immediateRender:false})
            tween.to(thisPath, 0.2, {drawSVG:"100%", immediateRender:false})
                 .add( function(){ 
                    $(thisContent).addClass('hotspotted');
                 } );

            $(this).mouseenter(function() {
                container.parent().find('#helmet').addClass('selected');
                tween.play();
            });

            $(this).mouseleave(function() {
                container.parent().find('#helmet').removeClass('selected');
                container.parent().find('#gfx-content').find('div').removeClass('hotspotted');
                tween.reverse();
            });

  });


// Impact Points
// -------------------------------------------------------------------------

  var impactMeter = $('#impact-points').find('#meter'),
      meterTitle = impactMeter.find('#title'),
      meter = impactMeter.find('#grade'),
      meterLabel = impactMeter.find('.meter-label'),
      heatShapesCrown = $('svg#impact-crown > g'),
      heatShapesTemple = $('svg#impact-temple > g');

  var meterGrow = new TimelineMax()
      .to(meterTitle, 1, {opacity:1})
      .to(meter, 1, {width:'100%', ease:Power3.easeInOut}, '-=0.5')
      .staggerTo(meterLabel, 1, {opacity:1}, 0.8, '-=1');

  var revealHeat = new TimelineMax()
      .staggerFromTo(heatShapesCrown, 1.5, {opacity:0}, {opacity:0.5}, 0.3)
      .staggerFromTo(heatShapesTemple, 1.5, {opacity:0}, {opacity:0.5}, 0.3, '-=2');

  var scene = new ScrollMagic.Scene({
          triggerElement: '#meter',
          triggerHook: 'onEnter',
          offset:vh*0.25
      })
      .setTween(meterGrow)
      .addTo(helmetCtrl);

  var heatmap = new ScrollMagic.Scene({
          triggerElement: '#impact-points',
          triggerHook: 'onEnter',
          offset:vh*0.25
      })
      .setTween(revealHeat)
      .addTo(helmetCtrl);


// EPS Shell
// -------------------------------------------------------------------------

  var epsShell = $('#inner-shell').find('#gfx').find('#eps-shell'),
      shellReveal = new TimelineMax().to(epsShell, 2, {opacity:1}),
      epsScene = new ScrollMagic.Scene({
          triggerElement: '#inner-shell'
      })
      .setTween(shellReveal)
      .addTo(helmetCtrl);


// MIPS Video
// -------------------------------------------------------------------------

  if( $('body').hasClass('isDesktop') ){
    $("#mips-video")[0].removeAttribute('controls');
    var videoCtrl = new ScrollMagic.Controller();
    var mipsScenePlay = new ScrollMagic.Scene({
          triggerElement: "#mips-video",
          triggerHook: 'onEnter',
          duration: vh*1.5
        })
        .on('enter', function () {
            $("#mips-video")[0].play();
        })
        .on('leave', function () {
            $("#mips-video")[0].pause();
        })
        .addTo(videoCtrl);
  }


// Fidlock Animation
// -------------------------------------------------------------------------


    var fidlockContainer = $('#fidlock-ani'),
        imageBase = fidlockContainer.find('img')[0],
        frameTotal = fidlockContainer.data('frame-total'),
        speed = fidlockContainer.data('speed'),
        imagePath = imageBase.src,
        imageFirst = /[^\/]*$/,
        imageDirectory = imagePath.replace(imageFirst, ''),
        currentFrame = 0,
        imageArray = [];

    

    var createImage = function(src, title) {
      var img   = new Image();
      img.src   = src;
      return img; 
    };

    for (var i = 1; i <= frameTotal; i++) {
      imageArray.push(createImage(imageDirectory + i + '.png', i ));
    }

    // function start() {
    //     var curImg = 0,
    //         aniOn = setInterval(function(){
    //         $(fidlockContainer).find('img').replaceWith(imageArray[curImg]);
    //         if (++curImg === frameTotal) {
    //             clearInterval(aniOn);
    //         }
    //     }, speed);
    // }



    var curImg = 0;
    function startFidlock() {
        var aniFidlock = requestAnimationFrame(startFidlock);
        $(fidlockContainer).find('img').replaceWith(imageArray[curImg]);
        if (++curImg === frameTotal) {
            cancelAnimationFrame(aniFidlock);
            return;
        }
    }

    var fidlockCtrl = new ScrollMagic.Controller({globalSceneOptions: {reverse:false}});
    var fidlockScene = new ScrollMagic.Scene({
          triggerElement: '#fidlock-ani'
        })
        .on('enter', function () {
            startFidlock();
        })
        .addTo(fidlockCtrl);


});