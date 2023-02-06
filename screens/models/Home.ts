import Bugsee from 'react-native-bugsee';
import { ListItemWithAction } from '../../Types';

export const homeItems: ListItemWithAction<any>[] = [
  {
    key: '-0',
    title: 'General tests',
  },
  {
    key: '1',
    title: 'Console',
    action: (navigation) => navigation.navigate('Console', {}),
  },
  {
    key: '2',
    title: 'Network',
    action: (navigation) => navigation.navigate('Network', {}),
  },
  {
    key: '3',
    title: 'Exceptions',
    action: (navigation) => navigation.navigate('Exceptions', {}),
  },
  {
    key: '4',
    title: 'Feedback',
    action: (navigation) => navigation.navigate('Feedback', {}),
  },
  {
    key: '5',
    title: 'Attributes',
    action: (navigation) => navigation.navigate('Attributes', {}),
  },
  {
    key: '6',
    title: 'Events and Traces',
    action: (navigation) => navigation.navigate('EventsTraces', {}),
  },
  {
    key: '7',
    title: 'Email',
    action: (navigation) => navigation.navigate('Email', {}),
  },
  {
    key: '8',
    title: 'Secure views',
    action: (navigation) => navigation.navigate('SecureViews', {}),
  },
  {
    key: '-1',
    title: 'Video capture',
  },
  {
    key: '9',
    title: 'Pause',
    action: () => Bugsee.pause(),
  },
  {
    key: '10',
    title: 'Resume',
    action: () => Bugsee.resume(),
  },
  {
    key: '-2',
    title: 'Reporting',
  },
  {
    key: '11',
    title: 'Send report',
    action: () => Bugsee.upload('Test'),
  },
  {
    key: '12',
    title: 'Send report without video',
    action: () => Bugsee.upload('Test', undefined, undefined, undefined, false),
  },
  {
    key: '13',
    title: 'Show report dialog',
    action: () => Bugsee.showReportDialog(),
  },
];
