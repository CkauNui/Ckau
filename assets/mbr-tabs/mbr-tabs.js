var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var f=a[d];f in b||(b[f]={});b=b[f]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.from",function(a){return a?a:function(a,b,d){b=null!=b?b:function(a){return a};var f=[],c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if("function"==typeof c){a=c.call(a);for(var e=0;!(c=a.next()).done;)f.push(b.call(d,c.value,e++))}else for(c=a.length,e=0;e<c;e++)f.push(b.call(d,a[e],e));return f}},"es6","es3");
$jscomp.checkStringArgs=function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,b){var c=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var f=c.length,g=a.length;b=Math.max(0,Math.min(b|0,c.length));for(var e=0;e<g&&b<f;)if(c[b++]!=a[e++])return!1;return e>=g}},"es6","es3");function outerFind(a,c){var b=Array.from(a.querySelectorAll(c));a.matches(c)&&b.splice(0,0,a);console.log(b);return b}
function updateId(a){0!==a.querySelectorAll(".nav-tabs").length&&outerFind(a,'section[id^="tabs"], section.tabs, section[id^="extTabs"], section [class*="-tabs"]').forEach(function(c,b){if("SECTION"===c.tagName){var d=c.getAttribute("id");b=c.querySelectorAll(".nav-tabs > .nav-item");c.querySelectorAll(".tab-pane").forEach(function(a,b){a.setAttribute("id",d+"_tab"+b);0===b?(a.classList.contains("active")||a.classList.add("active"),a.classList.contains("show")||a.classList.add("show")):(a.classList.remove("active"),
a.classList.remove("show"))});b.forEach(function(b,c){b=b.querySelector("a");b.setAttribute("href","#"+d+"_tab"+c);a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5")&&b.setAttribute("data-bs-toggle","tab");0===c?(b.classList.contains("active")||b.classList.add("active"),b.classList.contains("show")||b.classList.add("show")):(b.classList.remove("active"),b.classList.remove("show"),b.removeAttribute("active"))})}})}var $,isJQuery="function"==typeof jQuery;
isJQuery&&($=jQuery);var isBuilder=document.querySelector("html").classList.contains("is-builder");if(isBuilder&&isJQuery)$(document).on("add.cards",function(a){updateId(a.target)});else"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,updateId(document.body));
