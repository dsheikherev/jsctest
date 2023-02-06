import React from 'react';
import { Button, ScrollView, useColorScheme } from 'react-native';
import Bugsee from 'react-native-bugsee';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';

const FeedbackScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <ScrollView style={[genericStyles.container, backgroundStyle]}>
      <Button title="Show Feedback" onPress={() => Bugsee.showFeedbackUI()} />
    </ScrollView>
  );
};

export default FeedbackScreen;
