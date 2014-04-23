var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: "*.habrahabr.ru",
    contentScriptFile: self.data.url("content-script.js")
});