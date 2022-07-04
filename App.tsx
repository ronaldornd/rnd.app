import React from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Widget from './src/widget-components/Widget';

import { theme } from './src/theme';
import { Page } from './src/app-components/Page';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const fontsLoaded = useFonts({
    'Courgette_Regular': require('./assets/Courgette-Regular.ttf')
  });
  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }
  return (
    <View style={{
      width: "100%",
      height: '100%',
      backgroundColor: theme.colors.background
    }}>

      <StatusBar
        style="light"
        backgroundColor={theme.colors.surface_secondary}
        translucent

      />
      <Page />


    </View>
  );
}


