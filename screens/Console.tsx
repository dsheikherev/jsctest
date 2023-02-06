import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';
import Bugsee from 'react-native-bugsee';

const ConsoleScreen = ({}: CompositeScreenProps<any, any>) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[genericStyles.container, backgroundStyle]}
      >
        <View style={backgroundStyle}>
          <Button title="Log info" onPress={() => console.info('Message')} />
          <Button title="Log warning" onPress={() => console.warn('Message')} />
          <Button title="Log error" onPress={() => console.error('Message')} />
          <Button title="Log debug" onPress={() => console.debug('Message')} />
          <Button title="Log default" onPress={() => console.log('Message')} />

          <Button title="Log directly" onPress={() => Bugsee.log('Direct log')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsoleScreen;
