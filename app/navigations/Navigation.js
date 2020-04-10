import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountStack from '../navigations/Stacks/AccountStack';
import RestaurantStack from '../navigations/Stacks/RestaurantStack';
import SearchStack from './Stacks/SearchStack';
import TopRestaurantsStack from './Stacks/TopRestaurantsStack';

export default function Navigation() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Restaurantes"
					component={RestaurantStack}
					options={{
						tabBarIcon: ({ tintColor }) => (
							<MaterialCommunityIcons name="silverware-fork-knife" color={tintColor} size={22} />
						)
					}}
				/>
				<Tab.Screen
					name="Top 5"
					component={TopRestaurantsStack}
					options={{
						tabBarIcon: ({ tintColor }) => (
							<MaterialCommunityIcons name="star-circle-outline" color={tintColor} size={22} />
						)
					}}
				/>
				<Tab.Screen
					name="Buscar"
					component={SearchStack}
					options={{
						tabBarIcon: ({ tintColor }) => (
							<MaterialCommunityIcons name="cloud-search-outline" color={tintColor} size={22} />
						)
					}}
				/>
				<Tab.Screen
					name="Mi Cuenta"
					component={AccountStack}
					options={{
						tabBarIcon: ({ tintColor }) => (
							<MaterialCommunityIcons name="account" color={tintColor} size={22} />
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
