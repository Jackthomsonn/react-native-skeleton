import 'react-native-gesture-handler';

import { HomeStackScreen } from './src/navigation/HomeStackNavigation'
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import { AuthStackScreen } from './src/navigation/AuthStackNavigation';
import { SettingStackScreen } from './src/navigation/SettingStackNavigation';
import { SplashScreen } from './src/pages/splash/Splash';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setLoggedInState] = useState(false);
  const [isLoading, setIsLoadingState] = useState(true);

  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "<apiKey>",
      authDomain: "<authDomain>",
      databaseURL: "<databaseURL>",
      projectId: "<projectId>",
      storageBucket: "<storageBucket>",
      messagingSenderId: "<messagingSenderId>",
      appId: "<appId>"
    });
  }

  firebase.auth().onAuthStateChanged(async (user) => {
    await AsyncStorage.setItem('@UserData', JSON.stringify(user));

    setLoggedInState(user !== null);
    setIsLoadingState(false);
  });

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }} screenOptions={{ tabBarVisible: isLoggedIn }}>
        {isLoading ? (
          <Tab.Screen name="Splash" component={SplashScreen} />
        ) : isLoggedIn ? (
          <React.Fragment>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={size} />
              ),
            }} />
            <Tab.Screen name="Settings" component={SettingStackScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-settings" color={color} size={size} />
              ),
            }} />
          </React.Fragment>
        ) : (<Tab.Screen name="Login" component={AuthStackScreen} />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
