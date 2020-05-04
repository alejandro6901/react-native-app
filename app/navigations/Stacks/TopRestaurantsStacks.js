import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurantsScreen from '../../screens/TopRestaurants';

/* BEGIN IMPORTING ROUTES NAMES */
import { STACK_TOP_RESTAURANTS } from '../../navigations/Stacks/RoutesNames';
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from '../../utils/i18n';
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from '../../context/LanguageContext';
/* END IMPORTING THEME CONTEXT */

const Stack = createStackNavigator();

export default function topRestaurantsStacks() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK_TOP_RESTAURANTS}
        component={TopRestaurantsScreen}
        options={{
          title: I18n.t('topRestaurantsStack.topRestaurants', { locale: lang })
        }}
      />
    </Stack.Navigator>
  );
}
