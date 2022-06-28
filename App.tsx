import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Widget from './src/widget-components/Widget';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import React from 'react';
import { Page } from './src/app-components/Page';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      width: "100%",
      height: '100%',
      backgroundColor: theme.colors.background
    }}>

      <StatusBar
        style="auto"
        backgroundColor={theme.colors.surface_secondary}

      />
      <Page />
      <Widget />

    </View>
  );
}


