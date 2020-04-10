import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "../../screens/Restaurants/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  );
}
