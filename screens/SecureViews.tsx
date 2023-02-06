import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import {
  Text,
  View,
  Button,
  useColorScheme,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Bugsee from 'react-native-bugsee';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';
import { secureRectItems } from './models/SecureViews';
import { renderListItem } from './shared/Lists';

const SecureViewsScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);
  const [text, onChangeText] = useState('Non-secure text');
  const [secureText, onChangeSecureText] = useState('Secure text');
  const setSecureComponent = (component: any) => {
    Bugsee.toggleProtected(component, true);
  };
  const nonSecureTextInput = useRef(null);
  const [isSecure, setSecure] = useState(false);
  const toggleSecure = () => {
    setSecure(!isSecure);
  };

  useEffect(() => {
    Bugsee.toggleProtected(nonSecureTextInput.current, isSecure);
  }, [isSecure]);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <View style={genericStyles.paddedContainer}>
        <View style={genericStyles.flexRow}>
          <TextInput
            style={[genericStyles.textInput, backgroundStyle]}
            onChangeText={onChangeText}
            value={text}
            ref={nonSecureTextInput}
          />
          <View style={styles.toggleContainer}>
            <Button title="Toggle" onPress={toggleSecure} />
          </View>
        </View>
        <Text style={genericStyles.subText}>State: {isSecure ? 'Secure' : 'Non-secure'}</Text>
      </View>
      <View style={[genericStyles.paddedContainer, { height: 70 }]}>
        <TextInput
          style={[genericStyles.textInput, backgroundStyle]}
          onChangeText={onChangeSecureText}
          value={secureText}
          ref={setSecureComponent}
        />
      </View>
      <View style={genericStyles.container}>
        <FlatList
          style={[genericStyles.container, backgroundStyle]}
          data={secureRectItems}
          renderItem={({ item }) => renderListItem(item, undefined, backgroundStyle)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  toggleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
};

export default SecureViewsScreen;
