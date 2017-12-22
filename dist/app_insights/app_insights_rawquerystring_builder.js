///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var AppInsightsRawQuerystringBuilder;
    return {
        setters:[],
        execute: function() {
            AppInsightsRawQuerystringBuilder = (function () {
                function AppInsightsRawQuerystringBuilder(rawQueryString) {
                    this.rawQueryString = rawQueryString;
                }
                AppInsightsRawQuerystringBuilder.prototype.generate = function () {
                    var querystring = "query=" + this.rawQueryString;
                    return querystring;
                };
                return AppInsightsRawQuerystringBuilder;
            })();
            exports_1("default", AppInsightsRawQuerystringBuilder);
        }
    }
});
//# sourceMappingURL=app_insights_rawquerystring_builder.js.map