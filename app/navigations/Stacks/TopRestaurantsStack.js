import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurantsScreen from "../../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top Restaurants" component={TopRestaurantsScreen} />
    </Stack.Navigator>
  );
}
