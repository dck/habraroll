var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: "*.ru",
    contentScriptFile: self.data.url("content-script.js")
});