/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bugsee, { ErrorBoundaryFallbackRenderEvent } from 'react-native-bugsee';
import HomeScreen from './screens/Home';
import ConsoleScreen from './screens/Console';
import NetworkScreen from './screens/Network';
import FeedbackScreen from './screens/Feedback';
import ExceptionsScreen from './screens/Exceptions';
import AttributesScreen from './screens/Attributes';
import EventsTracesScreen from './screens/EventsTraces';
import EmailScreen from './screens/Email';
import SecureViewsScreen from './screens/SecureViews';
import { genericStyles } from './LayoutConfig';
import { View, Text, ScrollView } from 'react-native';

const isDebug = typeof __DEV__ !== 'undefined' && !!__DEV__;
const Stack = createStackNavigator();

const errorFallbackLayout = (e: ErrorBoundaryFallbackRenderEvent) => (
  <ScrollView style={genericStyles.container}>
    <View style={genericStyles.paddedContainer}>
      <Text>Layout error encountered</Text>
    </View>
    <View style={genericStyles.paddedContainer}>
      <Text>{e.error.toString()}</Text>
    </View>
    <View style={genericStyles.paddedContainer} />
    <View style={genericStyles.paddedContainer}>
      <Text>Components stack follows</Text>
    </View>
    <View style={genericStyles.paddedContainer}>
      <Text>{e.componentStack}</Text>
    </View>
  </ScrollView>
);

const App = () => {
  const [symVersion, setSymVersion] = useState<string | null | undefined>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSymVersion(Bugsee.getAppVersion() + '-' + Bugsee.getAppBuild());
  });

  return (
    <NavigationContainer>
      <View style={genericStyles.container}>
        <Bugsee.ErrorBoundary fallback={errorFallbackLayout}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Main' }} />
            <Stack.Screen
              name="Console"
              component={ConsoleScreen}
              options={{ title: 'Console tests' }}
            />
            <Stack.Screen
              name="Network"
              component={NetworkScreen}
              options={{ title: 'Network tests' }}
            />
            <Stack.Screen
              name="Feedback"
              component={FeedbackScreen}
              options={{ title: 'Feedback tests' }}
            />
            <Stack.Screen
              name="Exceptions"
              component={ExceptionsScreen}
              options={{ title: 'Exceptions tests' }}
            />
            <Stack.Screen
              name="Attributes"
              component={AttributesScreen}
              options={{ title: 'Attributes tests' }}
            />
            <Stack.Screen
              name="EventsTraces"
              component={EventsTracesScreen}
              options={{ title: 'Events and Traces tests' }}
            />
            <Stack.Screen name="Email" component={EmailScreen} options={{ title: 'Email tests' }} />
            <Stack.Screen
              name="SecureViews"
              component={SecureViewsScreen}
              options={{ title: 'Secure views tests' }}
            />
          </Stack.Navigator>
        </Bugsee.ErrorBoundary>
      </View>
      <View style={genericStyles.paddedContainer}>
        <View>
          <Text>Hermes: {String(!!(global as any).HermesInternal)}</Text>
        </View>
        <View>
          <Text>
            SymVersion: {symVersion}; {isDebug ? 'Debug' : 'Release'}
          </Text>
        </View>
      </View>
    </NavigationContainer>
  );
};

export default App;
