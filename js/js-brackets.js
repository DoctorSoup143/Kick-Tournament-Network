jQuery(function() {

    var brackets = jQuery('#brackets').find('ul.round');

    brackets.each(function(index, element) {

        var num = jQuery(element).find('li').length;
        var realIndex = index + 1;

        if(index > 0 && realIndex == 1 && index < brackets.length) { //8-final

            jQuery(element).find('li').each(function(i, liItem) {

                var topmargin = '150px';
                if(i == 0) {
                    topmargin = '70px';
                }
                if(i % 2 != 0) {
                    topmargin = '160px';
                }

                jQuery(liItem).css({"margin-top": topmargin})
            });
        } else if(index > 0 && realIndex == 2 && index < brackets.length) {

            jQuery(element).find('li').each(function(i, liItem) {

                var topmargin = '150px';
                if(i == 0) {
                    topmargin = '70px';
                }
                if(i % 2 != 0) {
                    topmargin = '160px';
                }

                jQuery(liItem).css({"margin-top": topmargin})
            });
        } else if(index > 0 && realIndex == 3) {

            jQuery(element).find('li').each(function(i, liItem) {

                if(i == 0) {
                    topmargin = '230px';
                }
                if(i % 2 != 0) {
                    topmargin = '460px';
                }

                jQuery(liItem).css({"margin-top": topmargin})
            });
        } else if(index > 0 && realIndex == 4 && realIndex != brackets.length) {

            jQuery(element).find('li').each(function(i, liItem) {

                if(i == 0) {
                    topmargin = '560px';
                }
                if(i % 2 != 0) {
                    topmargin = '1040px';
                }

                jQuery(liItem).css({"margin-top": topmargin})
            });

        } else if(index > 0 && realIndex == brackets.length) {
            jQuery(element).css({"position": "absolute", "top": "45%"});

        }

    });
});