import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CreateStacks from "./Stacks";

const Tab = createBottomTabNavigator();

import RestaurantsScreen from "../screens/Restaurants";
import TopRestaurantsScreen from "../screens/TopRestaurants";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";

function RestaurantStack() {
  return (<CreateStacks name="Restaurantes" component={RestaurantsScreen} />);
}

function TopRestaurantsStacks() {
  return (<CreateStacks name="Top Restaurantes" component={TopRestaurantsScreen} />);
}

function SearchStacks() {
  return (<CreateStacks name="Buscar" component={SearchScreen} />);
}

function AccountStacks() {
  return (<CreateStacks name="Mi Cuenta" component={MyAccountScreen} />);
}

function LoginStack() {
  return( <CreateStacks name="Login" component={LoginScreen} /> );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Top 5"
          component={TopRestaurantsStacks}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SearchStacks}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cloud-search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mi Cuenta"
          component={AccountStacks}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
