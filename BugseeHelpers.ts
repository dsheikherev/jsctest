import { Platform } from 'react-native';
import Bugsee from 'react-native-bugsee';

export function getBugseeApplicationToken(): string {
  if (Platform.OS === 'ios') {
    return 'a7d7fc00-9955-4459-8fca-0bd3d6dbd7b2';
  }

  if (Platform.OS === 'android') {
    return '2398f3f0-e81a-45d7-9e8e-6b42d98ed1af';
  }

  return '';
}

export function createBugseeLaunchOptions(): any {
  const options =
    Platform.OS === 'ios' ? new Bugsee.IOSLaunchOptions() : new Bugsee.AndroidLaunchOptions();

  // 500KB limit
  options.maxNetworkBodySize = 1024 * 500;
  options.setCustomOption('debug', true);

  if (Platform.OS === 'android') {
    options.setCustomOption('endpoint', 'https://apidev.bugsee.com/');
  } else {
    options.setCustomOption('endpoint', 'http://apidev.bugsee.com/v2');
  }

  return options;
}

export function setupBugseeHandlers(): void {
  //   Bugsee.setLogFilter(async logEvent => {
  //     // eslint-disable-next-line no-underscore-dangle
  //     (console as any).log?.__original?.(
  //       'RECEIVED MESSAGE TO HANDLE: ' + logEvent.text,
  //     );

  //     logEvent.text = 'EDITED: ' + logEvent.text;
  //     return logEvent;
  //   });

  Bugsee.setNetworkFilter(async (netEvent) => {
    netEvent.url += (netEvent.url.indexOf('?') > -1 ? '&' : '?') + 'method=' + netEvent.method;

    return netEvent;
  });

  Bugsee.setLifecycleEventHandler(async (lifecycleEvent) => {
    console.log('LFCCL: ' + lifecycleEvent);
  });

  Bugsee.setAttachmentsHandler(async (report) => {
    if (report.type === 'bug') {
      return [
        {
          name: 'Sample attachment',
          data: 'This is a dummy content for attachment',
          filename: 'dummy.txt',
        },
      ];
    }
    return [];
  });

  Bugsee.setNewFeedbackMessageCallback(async (event) => {
    event.messages?.forEach((message) => {
      console.log('FEEDBACK MESSAGE: ' + message);
    });
  });
}
