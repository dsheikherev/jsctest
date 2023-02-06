import Bugsee from 'react-native-bugsee';
import { ListItemWithAction } from '../../Types';

type AggregateError = typeof Error & {
  errors: Error[];
  new (errors: Error[]): typeof AggregateError;
};
declare const AggregateError: AggregateError;

class SomeCustomError extends Error {
  constructor(public userData?: Record<string, unknown>) {
    super();
  }
}

const makeTypeError: () => never = () => {
  let a = null;
  let b = (a as any).x;
  console.log(b);
  throw new TypeError();
};

const makeSyntaxError: () => never = () => {
  // eslint-disable-next-line no-eval
  eval('le x = 1;');
  throw new SyntaxError();
};

const makeAggregateError = () => {
  if (typeof AggregateError !== 'undefined') {
    let error1: Error;
    let error2: Error;

    try {
      makeSyntaxError();
    } catch (e) {
      error1 = e as Error;
    }

    try {
      makeTypeError();
    } catch (e) {
      error2 = e as Error;
    }

    const aggregateError = new AggregateError([error1, error2]);

    Bugsee.logException(aggregateError);
  }
};

const throwInner = () => {
  // let a = 0;
  // let b = 0;
  // return a / b;
  throw new Error(
    'Test error\nwith multiline\nmessage to make it more\ndifficult to process\nmessage'
  );
};

const throwCustom: () => never = () => {
  throw new SomeCustomError({
    someKey: 'someValue',
  });
};

const throwSync = () => {
  throwInner();
};

const testSyncException = () => {
  throwSync();
};

const testSyncHandledException = () => {
  try {
    throwSync();
  } catch (e) {
    Bugsee.logException(e);
  }
};

const testSyncExceptionInSeparateStack = () => {
  setTimeout(testSyncException, 10);
};

const testSyncHandledExceptionInSeparateStack = () => {
  setTimeout(testSyncHandledException, 10);
};

const throwAsyncInner = async () => {
  throw new Error(
    'Test error\nwith multiline\nmessage to make it more\ndifficult to process\nmessage'
  );
};

const throwAsync = async () => {
  await throwAsyncInner();
};

const testAsyncException = async () => {
  await throwAsync();
};

const testAsyncExceptionInSeparateStack = () => {
  setTimeout(testAsyncException, 10);
};

const testFakeHandledException = () => {
  Bugsee.logException('This is a fake error!');
};

const testFakeHandledExceptionInSeparateStack = () => {
  setTimeout(testFakeHandledException, 10);
};

const testHandledExceptionWithoutVideo = () => {
  try {
    throwSync();
  } catch (e) {
    Bugsee.logException(e, false);
  }
};

const testNativeCrash = () => {
  Bugsee.testNativeCrash();
};

const testNativeCrashInSeparateStack = () => {
  setTimeout(testNativeCrash, 10);
};

const testUnhandledRejection = () => {
  new Promise(() => {
    return throwInner();
  }).then((result) => {
    console.log(result);
  });
};

const testCustomError = () => {
  throwCustom();
};

const testHandledCustomError = () => {
  try {
    throwCustom();
  } catch (e) {
    Bugsee.logException(e);
  }
};

function testErrorWithCauseInner() {
  try {
    throwInner();
  } catch (err) {
    throw new (Error as any)('Inner method thrown!', { cause: err });
  }
}

const testErrorWithCause = () => {
  try {
    testErrorWithCauseInner();
  } catch (e) {
    Bugsee.logException(e);
  }
};

export const exceptionTestItems: ListItemWithAction<any>[] = [
  {
    key: '1',
    title: 'Unhandled async exception',
    action: testAsyncException,
  },
  {
    key: '2',
    title: 'Unhandled async exception in separate stack',
    action: testAsyncExceptionInSeparateStack,
  },
  {
    key: '3',
    title: 'Unhandled sync exception',
    action: testSyncException,
  },
  {
    key: '4',
    title: 'Unhandled sync exception in separate stack',
    action: testSyncExceptionInSeparateStack,
  },
  {
    key: '5',
    title: 'Handled sync exception',
    action: testSyncHandledException,
  },
  {
    key: '6',
    title: 'Handled sync exception in separate stack',
    action: testSyncHandledExceptionInSeparateStack,
  },
  {
    key: '7',
    title: 'Handled AggregateError',
    action: makeAggregateError,
  },
  {
    key: '8',
    title: 'Handled fake exception',
    action: testFakeHandledException,
  },
  {
    key: '9',
    title: 'Handled exception without video',
    action: testHandledExceptionWithoutVideo,
  },
  {
    key: '10',
    title: 'Handled fake exception in separate stack',
    action: testFakeHandledExceptionInSeparateStack,
  },
  {
    key: '11',
    title: 'Handled fake exception with minimal stack',
    action: () =>
      new Promise((resolve) => {
        Bugsee.logException({});
        resolve();
      }),
  },
  {
    key: '12',
    title: 'Native crash',
    action: testNativeCrash,
  },
  {
    key: '13',
    title: 'Native crash in separate stack',
    action: testNativeCrashInSeparateStack,
  },
  {
    key: '14',
    title: 'Unhahndled rejection',
    action: testUnhandledRejection,
  },
  {
    key: '15',
    title: 'Custom error',
    action: testCustomError,
  },
  {
    key: '16',
    title: 'Custom handled error',
    action: testHandledCustomError,
  },
  {
    key: '17',
    title: 'Error with cause',
    action: testErrorWithCause,
  },
];
