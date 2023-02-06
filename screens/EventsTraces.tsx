import React from 'react';
import { Button, SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import Bugsee from 'react-native-bugsee';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';

const EVENT_NAME = 'TestEvent';
const TRACE_NAME = 'TestTrace';

const addEvent = () => {
  Bugsee.event(EVENT_NAME, {
    someEventParam: Math.random(),
  });
};
const addTrace = async () => {
  Bugsee.trace(TRACE_NAME, Math.round(Math.random() * 100));
};

const EventsTracesScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[genericStyles.container, backgroundStyle]}
      >
        <View style={backgroundStyle}>
          <Button title="Add event" onPress={addEvent} />
          <Button title="Add trace" onPress={addTrace} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsTracesScreen;
