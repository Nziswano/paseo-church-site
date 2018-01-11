import $ from 'jquery';
import Vue from 'vue';
import PaseoContactUs from "paseo_contact_us";
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


let siteUrl = "http://localhost:5000/register";
let captchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const app = new Vue({
  el: "#contact-form",
  render: (h) => h(PaseoContactUs, {
    props: {
      capcha: captchaKey,
      url: siteUrl,
    }
  })
})

import './lib/foundation-explicit-pieces';

$(document).foundation();

