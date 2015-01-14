"use strict";

define([
    "jquery",  
    "common", 
    "class", 
    "jquery.tmpl", 
    "jquery.draggable"], function( $, common, Class ) {
    
    var Slides =  new Class;
    // create new class
        Slides.extend({
          initialize: function( attr, cTemplate, sTemplate ) {
            this.slides = attr.slides;
            // check that our presentaion has at least one slide to show
            if( !this.slides.length ) 
               throw new Error("It should be passed at least one slide discription");
             this.option = $.extend( {}, common.DEFAULTS.option , attr.option  );
             this.wrap   = $( "<div class=\"slide-wrap\"><div></div><\/div>" ).children();  
             this.$Slides;
             this.$Container;
             this.$items;
               // get templates or selectors to get
               this.cTemplate    = cTemplate;
               this.sTemplate    = sTemplate;
               // define some props for slides control 
                this.$currentSlide = 0;
                this.$playing = false;
                this.to = $( this.option.to );
            // create slides review; It is possible to do using
            // logic in templates. However, I think this is a bad idea 
            // to put a lot of logic in templates
            this.option.slides = (function( slides ) {
              var array = [];
                $.each( slides , function( index, value ) {
                 array.push({
                  title  : common._case("up", value.title).cut( null, 0, 25 )[0] + common.DELIM.ellipsis,
                  shorts : common.cut( value.text.body, 0, 51 )[0] + common.DELIM.ellipsis
                });
               });
               return array;
             }( this.slides ));
           } ,
          createContainer : function() { 
              // create main container for the current slideshow 
              // #1 compile template
              $.template( "static-main", common.expect( 
                  this.cTemplate , "array" ) && this.cTemplate[0] || $("#containerTmpl").html() );
              // #2 render and append to... by default to body
              this.$Container = $.tmpl( "static-main", this.option ).appendTo( this.option.to );
              // #3 add some useful utils 
              this.$Container.find(".drag").tinyDraggable( null, this.$Container.find(".slides-nav-left") );
              this.$items = this.$Container.find(".slides-nav-outer > div");
            return this;
           } ,
          renderSlides : function() {
           // start to render slides 
            $.template( "slides-each", common.expect( 
                  this.sTemplate , "array" ) && this.sTemplate[0] || $("#slidesTmpl").html() );
            // render
            this.$Slides = $.tmpl( "slides-each", this.slides, this.option );
            // wrap our slides 
            this.wrap
             .append( this.$Slides )
             .parent()
             .css({
                width  : this.option.width,
                height : this.option.height
             })
              .appendTo( this.$Container );
            return this;
           } ,
         jumpTo : function( event, guid ) {
            var $index = this.$currentSlide = event ? +$( event.delegateTarget ).attr("data-slide") : guid;
            this.to.trigger("slides")
            this.$items
             .removeClass("curren-slide")
             .slice( $index, $index + 1 )
             .addClass("curren-slide");
            this.wrap
             [this.option.animation ? "animate" : "css"]({top: -$index * this.option.height});
            return false; 
          },
          control : function() {
           var $this = this
             , $btn = this.$Container.find(".slide-show-play") 
             , timerId;
             return {
               next : function() {
                 if( !$this.balance( 1 ) ) return;
                 $this.jumpTo( null, ($this.$currentSlide += 1));
                },
               prev : function() {
                 if( !$this.balance( -1 ) ) return;
                 $this.jumpTo( null, ($this.$currentSlide -= 1));   
                },
               play : function() {
                if( $this.$playing ) {
                 $btn.css( "background-image", common.DEFAULTS.bg.play );
                 clearInterval( timerId );
                 $this.$playing = false;
                 $this.to.trigger("pause");
                } else {
                  $btn.css( "background-image", common.DEFAULTS.bg.pause );
                  $this.$playing = true;
                  $this.to.trigger("play");
                  timerId = setInterval($.proxy(function(){
                   if(!$this.balance( 1 )) return clearInterval( timerId ) || this.play();
                   this.next();
                  }, 
                    this ), 
                     $this.option.delay
                  );
                }
              }
            }
          },
          balance : function( x ) {
            var $vector = common.sum( x , this.$currentSlide );
            return $vector < this.slides.length && $vector >= 0;  
          },
         addControllers : function() {
           this.$Container.find(".slides-item").bind("click", $.proxy(this.jumpTo, this));
           // add controls 
           var Controls = this.control();
           $.each([
               "next" ,
               "prev" , 
               "play"
           ], $.proxy(function( index, value ) {
              this.$Container
                .on("click", ".slide-show-" + value, $.proxy(Controls[value], Controls));
           }, this));
           // set current slide
            this.jumpTo( null, 0 );
           return this;
          }
        });
    
 return function( attr, remote ) {
   if( common.expect( remote , "object" ) ) {
      var opt      = $.extend( common.DEFAULTS.setting, remote );
      var deferred = new $.Deferred();
       $.when(
          $.ajax({url: opt.cTemplateUrl}) ,
          $.ajax({url: opt.sTemplateUrl})
        )
         .done(function( containerTemplate, slidesTemplate ) {
           var res = (new Slides( attr, containerTemplate, slidesTemplate ))
            .createContainer()
            .renderSlides()
            .addControllers();
           deferred.resolve( res );
        })
         .fail(function(event){
           deferred.reject(event.statusText);
       });
      return deferred;
     }
     // or load from html
      return (new Slides( attr )).createContainer().renderSlides()
      .addControllers();
    }
});