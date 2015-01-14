/*
	jQuery tinyDraggable v1.0.2
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-tinyDraggable
    More info: http://pixabay.com/blog/posts/p-52/
	License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.fn.tinyDraggable = function(options, asWell){
        var settings = $.extend({ handle: 0, exclude: 0 }, options);
        return this.each(function(){
            var dx, dy, el = $(this), handle = settings.handle ? $(settings.handle, el) : el;
            handle.on({
                mousedown: function(e){
                    if (settings.exclude && ~$.inArray(e.target, $(settings.exclude, el))) return;
                    e.preventDefault();
                    var os = el.offset(); dx = e.pageX-os.left, dy = e.pageY-os.top;
                    if(asWell) {
                    var upLayerMove = $( asWell ), upLayerMove_el = upLayerMove.offset()
                        dxAs = e.pageX - upLayerMove_el.left, 
                        dyAs = e.pageY - upLayerMove_el.top;
                    }
                    $(document).on('mousemove.drag', function(e){
                       // el.offset({top: e.pageY-dy, left: e.pageX-dx});
                        if(asWell) upLayerMove.offset({top: e.pageY-dyAs, left: e.pageX-dxAs});
                    });
                },
                mouseup: function(e){ $(document).off('mousemove.drag'); }
            });
        });
    }
}(jQuery));
