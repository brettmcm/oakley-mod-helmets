jQuery(document).ready(function($){

    $('.loop-seq').each(function(){

        var seqContainer = $(this),
            imageBase = seqContainer.find('img')[0],
            frameTotal = seqContainer.data('frame-total'),
            speed = seqContainer.data('speed'),
            imagePath = imageBase.src,
            imageFirst = /[^\/]*$/,
            imageDirectory = imagePath.replace(imageFirst, ''),
            currentFrame = 0,
            imageArray = [];

        var createImage = function(src, title) {
          var img   = new Image();
          img.src   = src;
          img.alt   = title;
          img.title = title;
          return img; 
        };

        for (var i = 1; i <= frameTotal; i++) {
          imageArray.push(createImage(imageDirectory + i + '.png', i ));
        }

        function start() {
            var curImg = 0;
            setInterval(function(){
                $(seqContainer).find('img').replaceWith(imageArray[curImg]);
                curImg = (curImg === (frameTotal-1)) ? 0 : ++curImg;
            }, speed);
        }
        start();


        // requestAnimationFrame method - 
        //     lag on load/switching tabs
        //     but could be better performance
        //
        // var curImg = 0;
        // function start() {
        //     var loop = requestAnimationFrame(start);
        //     $(seqContainer).find('img').replaceWith(imageArray[curImg]);
        //     if (++curImg === frameTotal) {
        //         curImg = 0;
        //     }
        // }
        // start();

    });

});