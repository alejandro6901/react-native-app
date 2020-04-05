import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Stacks(props) {
  const { name, component } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen name={name} component={component} />
    </Stack.Navigator>
  );
}