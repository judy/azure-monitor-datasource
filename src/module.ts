import Datasource from './datasource';
import { AzureMonitorQueryCtrl } from './query_ctrl';
import { AzureMonitorAnnotationsQueryCtrl } from './annotations_query_ctrl';
import { AzureMonitorConfigCtrl } from './config_ctrl';

class AzureMonitorQueryOptionsCtrl {
  static templateUrl = 'partials/query.options.html';
}

export {
  Datasource,
  AzureMonitorQueryCtrl as QueryCtrl,
  AzureMonitorConfigCtrl as ConfigCtrl,
  AzureMonitorQueryOptionsCtrl as QueryOptionsCtrl,
  AzureMonitorAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
