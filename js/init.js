"use strict";

require.config({
    shim : {
     "jquery.tmpl"      : ["jquery"] ,
     "jquery.draggable" : ["jquery"]
    },
    paths : {
      "jquery"           : "../vendor/jquery/jquery.min"       ,
      "jquery.tmpl"      : "../vendor/render/jquery.tmpl.min"  ,
      "jquery.draggable" : "../vendor/jquery/jquery.draggable" ,
      "attribute"        : "data-1"                            ,
      "attr"             : "data-2"
    }
});

require(["slides", "attribute", "attr"], function( Slides, attributes, attrs ) {
  
    // run  
    Slides( attributes, {} ).done(function( res ){
     // success
     // you can set props to any object of presentaion 
     $( res.option.to ).on("play", function(e) {
        console.log( "Slideshow #1 is started" );
     })
      .on("pause" , function(e) {
        console.log( "Slideshow #1 is paused" ); 
     })
      .on("slides", function(e) {
       //if( res.$currentSlide === res.slides.length - 1 )
       //res.jumpTo( null, 0 );
      })
    })
     .fail(function( err ) {
     // failed 
     console.log( "Error", err );
    });
    
    // create one more slideshow without remote templates
    var $slide = Slides( attrs );
    
       $slide.to.on("play", function(e) {
            console.log( "Slideshow #2 is started" );
        })
          .on("pause" , function(e) {
            console.log( "Slideshow #2 is paused" ); 
        })
});