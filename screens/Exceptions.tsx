import React from 'react';
import { SafeAreaView, useColorScheme, FlatList } from 'react-native';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';
import { exceptionTestItems } from './models/Exceptions';
import { renderListItem } from './shared/Lists';

const ExceptionsScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <FlatList
        data={exceptionTestItems}
        renderItem={({ item }) => renderListItem(item, undefined, backgroundStyle)}
      />
    </SafeAreaView>
  );
};

export default ExceptionsScreen;
