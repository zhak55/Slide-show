"use strict";

define(["common"], function( common ) {
  return function() {
    var _class = function() {
      this.initialize.apply( this, arguments );  
    };
    // short access to prototype
    _class.fn = _class.prototype;
    // access to class
    _class.fn.parent = _class;
    // add init fn
    _class.fn.initialize = function(){};
      
    _class.extend = function( obj ) {
     if( !common.expect( obj, "object" ) ) throw new Error("Must be an object");
      var key;
       for( key in obj ) _class.fn[key] = obj[key];
       return this;
     }
    return _class;
   };
});
