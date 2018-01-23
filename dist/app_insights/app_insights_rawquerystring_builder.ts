///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import moment from 'moment';
import TimeGrainConverter from '../time_grain_converter';

export default class AppInsightsRawQuerystringBuilder {
  constructor(public rawQueryString, public options) {}

  generate() {
    var queryString = this.rawQueryString;
    var timeFilter = this.getTimeFilter(this.options);
    queryString = queryString.replace('$__interval', this.options.interval)
    queryString = queryString.replace('$timeFilter', timeFilter);
    let uriString = `query=${queryString}`;

    return uriString;
  }

  getTimeFilter(options) {
    var from = options.range.from;
    var until = options.range.to;

    if (options.rangeRaw.to === 'now') {
      return `timestamp >= datetime(${from.toISOString()})`;
    }

    return `timestamp >= datetime(${from.toISOString()}) AND timestamp <= datetime(${until.toISOString()})`;
  }
}
