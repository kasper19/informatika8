(function(jQuery){
    jQuery.fn.shuffle = function(){
        var allElems = this.get();

        var getRandom = function(max){
            return Math.floor(Math.random() * max);
        }

        var shuffled = jQuery.map(allElems, function(){
            var random = getRandom(allElems.length),
            randEl = jQuery(allElems[random]).clone(true)[0];
            allElems.splice(random, 1);
            return randEl;
        });

        this.each(function(i){
            jQuery(this).replaceWith(jQuery(shuffled[i]));
        });

        return jQuery(shuffled);
    };
})(jQuery);
