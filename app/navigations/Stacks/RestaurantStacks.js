import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../screens/Restaurants/Restaurants';

/* BEGIN IMPORTING ROUTES NAMES */
import { STACK_RESTAURANTS } from '../../navigations/Stacks/RoutesNames';
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from '../../utils/i18n';
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from '../../context/LanguageContext';
/* END IMPORTING THEME CONTEXT */

const Stack = createStackNavigator();

export default function RestaurantStacks() {
	const [ lang ] = useContext(LanguageContext);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={STACK_RESTAURANTS}
				component={RestaurantsScreen}
				options={{
					title: I18n.t('restaurantsStack.restaurants', { locale: lang })
				}}
			/>
		</Stack.Navigator>
	);
}
