import { QueryCtrl } from 'app/plugins/sdk';
export declare class AzureMonitorQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    defaultDropdownValue: string;
    defaults: {
        queryType: string;
        azureMonitor: {
            resourceGroup: string;
            metricDefinition: string;
            resourceName: string;
            metricName: string;
            timeGrain: string;
            timeGrainUnit: string;
            dimensionFilter: string;
        };
        appInsights: {
            metricName: string;
            rawQuery: boolean;
            rawQueryString: string;
            groupBy: string;
            timeGrainType: string;
            xaxis: string;
            yaxis: string;
            spliton: string;
        };
    };
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any);
    replace(variable: string): any;
    getResourceGroups(query: any): any;
    getMetricDefinitions(query: any): any;
    getResourceNames(query: any): any;
    getMetricNames(query: any): any;
    onResourceGroupChange(): void;
    onMetricDefinitionChange(): void;
    onResourceNameChange(): void;
    onMetricNameChange(): any;
    getAutoInterval(): any;
    getAppInsightsAutoInterval(): any;
    getAppInsightsMetricNames(): any;
    getAppInsightsColumns(): any;
    onAppInsightsColumnChange(): void;
    onAppInsightsMetricNameChange(): any;
    getAppInsightsGroupBySegments(query: any): any;
    resetAppInsightsGroupBy(): void;
    updateTimeGrainType(): void;
    toggleEditorMode(): void;
}
