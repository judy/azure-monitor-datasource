///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import moment from 'moment';
import TimeGrainConverter from '../time_grain_converter';

export default class AppInsightsRawQuerystringBuilder {
  constructor(public rawQueryString) {}

  generate() {
    let querystring = `query=${this.rawQueryString}`;

    return querystring;
  }
}
