(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<article>\n  <header>\n    <time datetime=\""
    + escapeExpression(((helper = (helper = helpers.published || (depth0 != null ? depth0.published : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"published","hash":{},"data":data}) : helper)))
    + "\">\n      "
    + escapeExpression(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "\n    </time>\n    <h3>\n      "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n    </h3>\n  </header>\n  <div class='content'>\n    "
    + escapeExpression(((helper = (helper = helpers.strippedContent || (depth0 != null ? depth0.strippedContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strippedContent","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</article>";
},"useData":true});
})();