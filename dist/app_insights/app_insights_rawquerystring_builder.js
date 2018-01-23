///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var AppInsightsRawQuerystringBuilder;
    return {
        setters:[],
        execute: function() {
            AppInsightsRawQuerystringBuilder = (function () {
                function AppInsightsRawQuerystringBuilder(rawQueryString, options) {
                    this.rawQueryString = rawQueryString;
                    this.options = options;
                }
                AppInsightsRawQuerystringBuilder.prototype.generate = function () {
                    var queryString = this.rawQueryString;
                    var timeFilter = this.getTimeFilter(this.options);
                    queryString = queryString.replace('$__interval', this.options.interval);
                    queryString = queryString.replace('$timeFilter', timeFilter);
                    queryString = encodeURI(queryString);
                    var uriString = "query=" + queryString;
                    return uriString;
                };
                AppInsightsRawQuerystringBuilder.prototype.getTimeFilter = function (options) {
                    var from = options.range.from;
                    var until = options.range.to;
                    if (options.rangeRaw.to === 'now') {
                        return "timestamp >= datetime(" + from.toISOString() + ")";
                    }
                    return "timestamp >= datetime(" + from.toISOString() + ") and timestamp <= datetime(" + until.toISOString() + ")";
                };
                return AppInsightsRawQuerystringBuilder;
            })();
            exports_1("default", AppInsightsRawQuerystringBuilder);
        }
    }
});
//# sourceMappingURL=app_insights_rawquerystring_builder.js.map