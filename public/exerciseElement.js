(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['exerciseElement'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class =\"exercise-video\"  data-name="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":48}}}) : helper)))
    + " data-type="
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":67}}}) : helper)))
    + ">\r\n    <div class=\"video\">\r\n        <iframe src="
    + alias4(((helper = (helper = lookupProperty(helpers,"videoURL") || (depth0 != null ? lookupProperty(depth0,"videoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":32}}}) : helper)))
    + " title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n    <div class=\"name\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":16}}}) : helper)))
    + " \r\n    </div>\r\n    <button id=\"like-button\"></button>\r\n</div>";
},"useData":true});
})();