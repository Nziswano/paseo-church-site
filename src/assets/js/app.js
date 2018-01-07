import $ from 'jquery';
import whatInput from 'what-input';
import * as Webfont from "webfontloader";
window.$ = $;

Webfont.load({
  google: {
    families: [
      "Archivo Black",
      "Merriweather Sans",
      "Nunito",
      "Roboto",
      "Josefin Sans"
  ],
  },
});

import './lib/foundation-explicit-pieces';

$(document).foundation();

