import React from 'react';
import { View, Button, ScrollView, useColorScheme } from 'react-native';
import { genericStyles, getBackgroundStyle } from '../LayoutConfig';
// import Bugsee from 'react-native-bugsee';

const makeRequest = async () => {
  const response = await fetch('https://google.com');
  if (response?.ok) {
    const responseText = await response.text();
    const responseLength = responseText?.length || 0;

    console.log('Response length: ' + responseLength);
  }
};

const makeWebSocketRequest = () => {
  const messagesToSend = [
    'This is test message for WebSocket',
    'This is another test message for WebSocket',
    'And this is the third test message for WebSocket',
  ];

  const ws = new WebSocket('wss://ws.postman-echo.com/raw');
  ws.onopen = () => {
    ws.send(messagesToSend.shift()!);
  };
  ws.onmessage = (e) => {
    console.log(`Received message from WebSocket: "${e.data}"`);
    if (messagesToSend.length === 0) {
      ws.close(2000, 'Communication is over');
    } else {
      ws.send(messagesToSend.shift()!);
    }
  };
  ws.onerror = (e) => {
    console.log('WebSocket error', e.message);
  };
  ws.onclose = () => {
    console.log('WebSocket closed');
  };
};

const NetworkScreen = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = getBackgroundStyle(isDarkMode);

  return (
    <ScrollView style={[genericStyles.container, backgroundStyle]}>
      <View>
        <Button title="Simple HTTPS request" onPress={makeRequest} />
        <Button title="WebSocket request" onPress={makeWebSocketRequest} />
      </View>
    </ScrollView>
  );
};

export default NetworkScreen;
