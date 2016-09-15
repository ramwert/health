(function(window, undefined) {
var dictionary = {
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
"f71f4a36-4d19-4c1e-8827-c8f4cf8fb326": "notification_tray",
"bc9f9737-dad3-49d9-80b2-5347aadc8166": "aliter",
"66fffbbf-1dd7-4cbc-a3f0-183c8a26d8db": "add_view",
"2f05f91e-1c9a-4002-8754-e56cc98526ba": "sleep",
"cb26283f-2ca1-4cc1-ba89-6c71db5f7287": "month_view",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
"bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);