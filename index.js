/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Bugsee from 'react-native-bugsee';
import {
  createBugseeLaunchOptions,
  getBugseeApplicationToken,
  setupBugseeHandlers,
} from './BugseeHelpers';

// Bugsee.setAppVersion('1.0.0');
Bugsee.launch(getBugseeApplicationToken(), createBugseeLaunchOptions()).then(() => {
  setTimeout(() => {
    setupBugseeHandlers();
  }, 500);
});
Bugsee.appearance.IOSReportAppearance.backgroundColor = '#33ee33ff';
Bugsee.appearance.AndroidReportAppearance.backgroundColor = '#33ee33ff';

AppRegistry.registerComponent(appName, () => App);
