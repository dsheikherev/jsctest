import React, { useEffect, useState } from 'react';
import { View, ScrollView, useColorScheme, Text, TextInput } from 'react-native';
import Bugsee from 'react-native-bugsee';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';

const EmailScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);
  const [email, setEmail] = useState<any>('');

  useEffect(() => {
    Bugsee.setEmail(email);
  }, [email]);

  return (
    <ScrollView style={[genericStyles.container, backgroundStyle]}>
      <View style={genericStyles.paddedContainer}>
        <Text>Email:</Text>
        <TextInput style={genericStyles.textInput} onChangeText={setEmail} value={email} />
      </View>
    </ScrollView>
  );
};

export default EmailScreen;
