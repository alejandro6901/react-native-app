import React, {useContext} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../screens/Settings";

/* BEGIN IMPORTING ROUTES NAMES */
import {STACK_SETTINGS} from "../../navigations/Stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from "../../utils/i18n";
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */

const Stack = createStackNavigator();

export default function SettingStacks() {
  const [lang] = useContext(LanguageContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK_SETTINGS}
        component={SettingsScreen}
        options={{
          title: I18n.t("settingStack.settings", { locale: lang })
        }}
      />
    </Stack.Navigator>
  );
}
