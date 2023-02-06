import React from 'react';
import { Button, SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import Bugsee from 'react-native-bugsee';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';

const ATTR_NAME = 'TestAttribute';
const ATTR_VALUE = 'TestValue';

const setAttribute = () => {
  Bugsee.setAttribute(ATTR_NAME, ATTR_VALUE);
};
const getAttribute = async () => {
  const attributeValue = await Bugsee.getAttribute(ATTR_NAME);
  console.log(`Retreived attribute value: ${attributeValue}`);
};
const removeAttribute = () => {
  Bugsee.clearAttribute(ATTR_NAME);
};
const removeAllAttributes = () => {
  Bugsee.clearAllAttributes();
};

const AttributesScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <SafeAreaView style={[genericStyles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[genericStyles.container, backgroundStyle]}
      >
        <View style={backgroundStyle}>
          <Button title="Set attribute" onPress={setAttribute} />
          <Button title="Get attribute" onPress={getAttribute} />
          <Button title="Remove attribute" onPress={removeAttribute} />
          <Button title="Remove all attributes" onPress={removeAllAttributes} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttributesScreen;
