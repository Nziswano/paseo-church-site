import $ from 'jquery';
import whatInput from 'what-input';
import * as Webfont from "webfontloader";
window.$ = $;

Webfont.load({
  google: {
    families: [
      "Merriweather Sans",
      "Nunito",
      "Roboto",
      "Josefin Sans"
  ],
  },
});


// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';



/* 
<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans|Nunito|Roboto" rel="stylesheet">
*/



$(document).foundation();

