import React from 'react';
import { SettingsScreen } from '../pages/settings/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const SettingStack = createStackNavigator();

export function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Settings" component={SettingsScreen} />
    </SettingStack.Navigator>
  );
}
