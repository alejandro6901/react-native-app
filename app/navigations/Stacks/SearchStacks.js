import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../screens/Search';

/* BEGIN IMPORTING ROUTES NAMES */
import { STACK_SEARCH } from '../../navigations/Stacks/RoutesNames';
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from '../../utils/i18n';
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from '../../context/LanguageContext';
/* END IMPORTING THEME CONTEXT */

const Stack = createStackNavigator();

export default function SearchStacks() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK_SEARCH}
        component={SearchScreen}
        options={{
          title: I18n.t('searchStack.search', { locale: lang })
        }}
      />
    </Stack.Navigator>
  );
}
