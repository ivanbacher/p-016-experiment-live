"bundle";System.register("main.js",["aurelia-framework","aurelia-logging-console","bootstrap","bootstrap/dist/css/bootstrap.min.css!"],function(a,b){"use strict";function c(a){a.use.standardConfiguration(),a.start().then(function(){return a.setRoot("views/app")})}var d,e;return a("configure",c),{setters:[function(a){d=a.LogManager},function(a){e=a.ConsoleAppender},function(a){},function(a){}],execute:function(){d.addAppender(new e),d.setLevel(d.logLevel.debug)}}}),function(){var a=System.amdDefine;a("views/app.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><require from="../../styles/app.css"></require><div class="container"><div class="row mt-5"><div class="col-12"><h1 class="display-4 text-center">Hi,</h1></div></div><div class="row mt-5"><div class="col-12"><p class="display-4 text-center">This experiment is now over.</p></div></div><div class="row mt-5"><div class="col-12"><p class="display-4 text-center">Follow me on <a href="https://twitter.com/ivan_bacher"><i class="fa fa-twitter"></i></a> for the latest updates.</p></div></div><div class="row mt-5"><div class="col-12"><p class="display-4 text-center">Or take a look at some of my <a href="https://www.researchgate.net/profile/Ivan_Bacher">pulications</a> if your interested in source code visualisation.</p></div></div></div></template>'})}(),System.register("views/app.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("App",d=function a(){c(this,a)}),a("App",d)}}});