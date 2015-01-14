"use strict";

define(function(){
  return {
    "option"   : 
      {
         title   : "JavaScript"  ,
         width   :   850         ,
         height  :   500         ,
         delay   :   1000        ,
         to      :   "#slides-1" ,
         fn      :   {
           setStyle : function ( styles ) {
            var css = "style=";
              $.each( styles , function( key, value ) {
                 css += [key, value].join(":") + ";"; 
              });
             return css;
            }
         }
     } , 
        slides : [
        {
          title : "JavaScript is a dynamic computer programming language.",
          image : 
           [{
             src       : "../img/sign.png",
             style     : 
              {
                  position : "absolute"   ,
                  bottom   : "0px"        ,
                  right    : "15px"            
             }
         } , {
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
          text : 
            {
                body      : "It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is displayed. It is also used in server-side network programming with runtime environments such as Node.js, game development and the creation of desktop and mobile applications." ,
               style      : 
                { 
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
                }
              }    
        } , {
          title  : "History",
          text   : {
           "position" : "bottom",
           "body"     : "JavaScript was originally developed by Brendan Eich, while working for Netscape Communications Corporation. While competing with Microsoft for user adoption of web technologies and platforms, Netscape considered their client-server offering a distributed OS with a portable version of Sun Microsystems' Java providing an environment in which applets could be run.[citation needed] Because Java was a competitor of C++ and aimed at professional programmers, Netscape also wanted a lightweight interpreted language that would complement Java by appealing to nonprofessional programmers, like Microsoft's Visual Basic (see JavaScript and Java)." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Features",
          text   : {
           "body"     : "The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise. Imperative and structured[edit] JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements,do while loops, etc.). One partial exception is scoping: C-style block scoping is not supported. Instead, JavaScript has function scoping (although, block scoping using the let keyword was added in JavaScript 1.7). Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allows the semicolons that would normally terminate statements to be omitted." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Syntax",
          text   : {
           "body"     : "As of 2011, the latest version of the language is JavaScript 1.8.5. It is a superset of ECMAScript (ECMA-262) Edition 3. Extensions to the language, including partial ECMAScript for XML (E4X) (ECMA-357) support and experimental features considered for inclusion into future ECMAScript editions, are documented here." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Use in web pages",
          text   : {
           "body"     : "As of 2011, the latest version of the language is JavaScript 1.8.5. It is a superset of ECMAScript (ECMA-262) Edition 3. Extensions to the language, including partial ECMAScript for XML (E4X) (ECMA-357) support and experimental features considered for inclusion into future ECMAScript editions, are documented here." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Security",
          text   : {
           "body"     : "JavaScript and the DOM provide the potential for malicious authors to deliver scripts to run on a client computer via the web. Browser authors contain this risk using two restrictions. First, scripts run in a sandbox in which they can only perform web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the same origin policy: scripts from one web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Uses outside web pages",
          text   : {
           "body"     : "In addition to web browsers and servers, JavaScript interpreters are embedded in a number of tools. Each of these applications provides its own object model which provides access to the host environment. The core JavaScript language remains mostly the same in each application." ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Development tools",
          text   : {
           "body"     : "Within JavaScript, access to a debugger becomes invaluable when developing large, non-trivial programs. Because there can be implementation differences between the various browsers (particularly within the Document Object Model), it is useful to have access to a debugger for each of the browsers that a web application targets.[97] Script debuggers are available for Internet Explorer, Firefox, Safari, Google Chrome, Opera and Node.js" ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       } , {
          title  : "Criticisms",
          text   : {
           "body"     : "JavaScript is a loosely typed language (see Dynamic typing above). Loose typing places a majority responsibility for static type management on programmer discipline, very little on the compiler, and late reporting of type safety violation on the run-time. The result is a development environment where type bugs can be easily introduced due to human fallibility. The bugs may be difficult to detect or may go undetected by the run-time for several reasons:" ,
            style    : 
             {
                    "color"       : "#000"    ,
                    "font-size"   : "23px"    ,
                    "text-align"  : "justify" ,
                    "padding"     : "7px"
             }
         } , 
          image : 
           [{
            src       : "../img/js.png" ,
            style     : { 
                position : "absolute"   ,
                bottom   : "10px"       ,
                left     : "10px"       ,
                float    : "left"       ,
                width    : "50px"       ,
                height   : "50px"
            }
         }],
       }
     ]
   }
});