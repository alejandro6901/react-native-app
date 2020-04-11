import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../screens/Settings";

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}
