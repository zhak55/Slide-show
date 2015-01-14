"use strict";

define([], function () {
   return {
      DELIM : {
        ellipsis : "..."   
      },
      DEFAULTS : {
          option : {
            width     : 750    ,
            height    : 500    ,
            delay     : 500    ,
            to        : "body" ,
            animation : true
        } ,
       setting : {
          cTemplateUrl : "partials/containerTmpl.htm" ,
          sTemplateUrl : "partials/slidesTmpl.htm"
        } ,
       bg : {
        play  : "url(../img/play.png)" ,
        pause : "url(../img/pause.png)"
       }
      },
      // formatting text
      cut : function( target, from, to ) {
        if(!target) target = this[0];
        this[0] = typeof target === "string" ?
         target.slice( from , to ) 
         : null;
        return this;
      },
      _case : function( type, target ) {
       if(!target) target = this[0];
       this[0] = target[(type === "up" ? "toUpper" : "toLower") + "Case"]();
       return this;
      },
      gType  : function( target ) {
        return this.cut( Object.prototype.toString.call( target ) , 8, -1 )._case("down")[0];   
      },
      expect : function( target, expected ) {
        return this.gType( target ) === expected;  
      },
      sum    : function(a, b) {
       return a + b;   
      }
   };
});