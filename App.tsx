import React from 'react-native';
import { View, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';
import AppLoading from 'expo-app-loading';

import { dark } from './src/theme';
import { Basic } from './src/app-components/Basic';
import { Head } from './src/app-components/Head';
import { Formation } from './src/app-components/Formation';
import { Skills } from './src/app-components/Skills';
import Widget from './src/widget-components/Widget';




export default function App() {
  const Tab = createMaterialTopTabNavigator();
  let [fontsLoaded, error] = useFonts({
    Courgette_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: dark.colors.background }}>
        <View

          style={{
            width: "100%",
            height: '100%',
            backgroundColor: dark.colors.back
          }}>

          <StatusBar
            style="light"
            backgroundColor={dark.colors.surface_secondary}
            translucent

          />
          <Head />
          <NavigationContainer theme={dark}>
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: { fontSize: responsiveFontSize(1.8), color: dark.colors.primary, fontFamily: dark.fonts.regular },
                tabBarInactiveTintColor: dark.colors.stroke,
                tabBarStyle: { backgroundColor: dark.colors.back },
              }}>
              <Tab.Screen name="Básico" component={Basic} />
              <Tab.Screen name="Formação" component={Formation} />
              <Tab.Screen name="Skills" component={Skills} />
            </Tab.Navigator>
          </NavigationContainer>


        </View>
      </SafeAreaView>
    </>
  );
}


