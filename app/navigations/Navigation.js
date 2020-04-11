import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountStack from './Stacks/AccountStack';
import RestaurantStack from './Stacks/RestaurantStack';
import SearchStack from './Stacks/SearchStack';
import SettingStack from './Stacks/SettingStack';
import TopRestaurantsStack from './Stacks/TopRestaurantsStack';
import I18n from '../utils/i18n';
import CustomTheme from '../styles/CustomTheme';
import { ThemeContext } from '../context/ThemeContext';

export default function Navigation() {
	const Tab = createBottomTabNavigator();
	const [theme, setTheme] = useState(CustomTheme.success);
	return (
		<ThemeContext.Provider value={[ theme, setTheme ]}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="Accounts"
					tabBarOptions={{
						activeTintColor: theme.color
					}}	>
					<Tab.Screen
						name={I18n.t('navigationTabs.restaurants')}
						component={RestaurantStack}
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
							)
						}}
					/>
					<Tab.Screen
						name={I18n.t('navigationTabs.topRestaurants')}
						component={TopRestaurantsStack}
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="star-circle-outline" color={color} size={size} />
							)
						}}
					/>
					<Tab.Screen
						name={I18n.t('navigationTabs.search')}
						component={SearchStack}
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="cloud-search-outline" color={color} size={size} />
							)
						}}
					/>
					<Tab.Screen
						name={I18n.t('navigationTabs.account')}
						component={AccountStack}
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="account" color={color} size={size} />
							)
						}}
					/>
					<Tab.Screen
						name="Settings"
						component={SettingStack}
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="settings" color={color} size={size} />
							)
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeContext.Provider>
	);
}
