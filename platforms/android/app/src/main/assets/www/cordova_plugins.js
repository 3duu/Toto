cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-safariviewcontroller.SafariViewController",
    "file": "plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
    "pluginId": "cordova-plugin-safariviewcontroller",
    "clobbers": [
      "SafariViewController"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-safariviewcontroller": "1.5.4"
};
// BOTTOM OF METADATA
});