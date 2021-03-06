System.register(['./datasource', './query_ctrl', './config_ctrl'], function(exports_1) {
    var datasource_1, query_ctrl_1, config_ctrl_1;
    var AzureMonitorQueryOptionsCtrl, AzureMonitorAnnotationsQueryCtrl;
    return {
        setters:[
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            },
            function (config_ctrl_1_1) {
                config_ctrl_1 = config_ctrl_1_1;
            }],
        execute: function() {
            AzureMonitorQueryOptionsCtrl = (function () {
                function AzureMonitorQueryOptionsCtrl() {
                }
                AzureMonitorQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
                return AzureMonitorQueryOptionsCtrl;
            })();
            AzureMonitorAnnotationsQueryCtrl = (function () {
                function AzureMonitorAnnotationsQueryCtrl() {
                }
                AzureMonitorAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
                return AzureMonitorAnnotationsQueryCtrl;
            })();
            exports_1("Datasource", datasource_1.default);
            exports_1("QueryCtrl", query_ctrl_1.AzureMonitorQueryCtrl);
            exports_1("ConfigCtrl", config_ctrl_1.AzureMonitorConfigCtrl);
            exports_1("QueryOptionsCtrl", AzureMonitorQueryOptionsCtrl);
            exports_1("AnnotationsQueryCtrl", AzureMonitorAnnotationsQueryCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map