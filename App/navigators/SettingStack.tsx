import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Language from '../screens/Language'
import Settings from '../screens/Settings'
import { Screens, SettingsStackParams } from '../types/navigators'

import defaultStackOptions from './defaultStackOptions'

const SettingStack: React.FC = () => {
  const Stack = createStackNavigator<SettingsStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions, headerShown: false }}>
      <Stack.Screen name={Screens.Settings} component={Settings} />
      <Stack.Screen name={Screens.Language} component={Language} />
    </Stack.Navigator>
  )
}

export default SettingStack
