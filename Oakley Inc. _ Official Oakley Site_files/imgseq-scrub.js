jQuery(document).ready(function($){

    $('.scrub-seq').each(function(){

        var seqContainer = $(this),
            imageBase = seqContainer.find('.img-seq')[0],
            controller = $('.scrub-seq-controller'),
            track = controller.find('.track'),
            handle = controller.find('.handle'),
            iconL = controller.parent().find('.iconL'),
            iconR = controller.parent().find('.iconR'),
            iconL_alpha = 1,
            iconR_alpha = 0,
            frameTotal = seqContainer.data('frame-total'),
            imagePath = imageBase.src,
            imageFirst = /[^\/]*$/,
            imageRoot = imagePath.replace(imageFirst, ''),
            currentFrame = 0,
            scrubCompletion = 0,
            imageArray = [];

        var i = 1;
        for (i = 1; i != frameTotal+1; i++){
          imageArray.push(imageRoot + i + '.png');
        }
        $(imageArray).each(function(){
            $('<img>')[0].src = this;
        });

        $( handle ).draggable({ containment: "parent" });
        $( handle ).bind("drag", scrubSeq);
        
        function scrubSeq() {
            var handlePos = handle.position(),
                trackWidth = controller.width() - handle.width();
            scrubCompletion = handlePos.left/trackWidth;
            var frameNumber  = parseInt(scrubCompletion*frameTotal);
            $(imageBase).attr('src',imageArray[frameNumber]);
            iconL_alpha = (1-scrubCompletion) * 1 + 0.2;
            iconR_alpha = scrubCompletion * 1 + 0.2;
            $(iconL).css('opacity',iconL_alpha);
            $(iconR).css('opacity',iconR_alpha);
        }

        function resetScrub() {
            $('.scrub-seq').each(function(){
                $(handle).css('left','0');
                $(imageBase).attr('src',imageArray[0]);
            });
        }

        $(window).resize(function() {
            resetScrub();
        });

    });
});