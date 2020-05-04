import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountStack from './Stacks/AccountStacks';
import RestaurantStack from './Stacks/RestaurantStacks';
import SearchStack from './Stacks/SearchStacks';
import SettingStack from './Stacks/SettingStacks';
import TopRestaurantsStack from './Stacks/TopRestaurantsStacks';

import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import I18n from '../utils/i18n';

/* BEGIN IMPORTING ROUTES NAMES */
import {
  TAB_ACCOUNT,
  TAB_RESTAURANTS,
  TAB_TOP_RESTAURANTS,
  TAB_SEARCH,
  TAB_SETTINGS
} from '../navigations/Stacks/RoutesNames';
/* END IMPORTING ROUTES NAMES */

export default function Navigation() {
  const [ theme ] = useContext(ThemeContext);
  const [ lang ] = useContext(LanguageContext);

  const Tab = createBottomTabNavigator();

  return (
    /* BEGIN CREATE BOTTOM TABS*/
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={TAB_ACCOUNT}
        tabBarOptions={{
          activeTintColor: theme.tab.color
        }}
      >
        <Tab.Screen
          name={TAB_RESTAURANTS}
          component={RestaurantStack}
          options={{
            title: I18n.t('navigationTabs.restaurants', { locale: lang }),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name={TAB_TOP_RESTAURANTS}
          component={TopRestaurantsStack}
          options={{
            title: I18n.t('navigationTabs.topRestaurants', { locale: lang }),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-circle-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name={TAB_SEARCH}
          component={SearchStack}
          options={{
            title: I18n.t('navigationTabs.search', { locale: lang }),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cloud-search-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name={TAB_ACCOUNT}
          component={AccountStack}
          options={{
            title: I18n.t('navigationTabs.account', { locale: lang }),
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
          }}
        />
        <Tab.Screen
          name={TAB_SETTINGS}
          component={SettingStack}
          options={{
            title: I18n.t('navigationTabs.settings', { locale: lang }),
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="settings" color={color} size={size} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    /* END CREATE BOTTOM TABS*/
  );
}
