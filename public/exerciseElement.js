(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['exerciseElement'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class =\"excercise-video\"  data-name="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":49}}}) : helper)))
    + " data-type="
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":60},"end":{"line":1,"column":68}}}) : helper)))
    + ">\r\n    <div class=\"video\">\r\n        <iframe src="
    + alias4(((helper = (helper = lookupProperty(helpers,"videoURL") || (depth0 != null ? lookupProperty(depth0,"videoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":32}}}) : helper)))
    + "></iframe> \r\n    <div class=\"name\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":16}}}) : helper)))
    + " </div>\r\n    <div class=\"type\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":16}}}) : helper)))
    + "\r\n    </div>      \r\n        <div class=\"exercise-info-container\">\r\n        <span class=\"exercise-name\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":45}}}) : helper)))
    + "</span> <span class="
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":10,"column":65},"end":{"line":10,"column":73}}}) : helper)))
    + ">("
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":10,"column":75},"end":{"line":10,"column":83}}}) : helper)))
    + ")</span>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();