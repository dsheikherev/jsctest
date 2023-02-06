import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { useColorScheme, FlatList, SafeAreaView } from 'react-native';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';
import { homeItems } from './models/Home';
import { renderListItem } from './shared/Lists';

const HomeScreen = ({ navigation }: CompositeScreenProps<any, any>) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <FlatList
        style={[genericStyles.container, backgroundStyle]}
        data={homeItems}
        renderItem={({ item }) => renderListItem(item, navigation, backgroundStyle)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
