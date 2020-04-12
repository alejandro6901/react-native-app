import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

/* BEGIN IMPORTING THEME CONTEXT */
import CustomTheme from "../../styles/ExportThemes";
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function SelectThemes() {

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Text style={style.title}>Selecciona un Tema:</Text>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: CustomTheme.THEME_SUCCESS.button.backgroundColor}}
            containerStyle={style.btnContainer}
            title="Success"
            onPress={() => setTheme(CustomTheme.THEME_SUCCESS)}
          />
        </View>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: CustomTheme.THEME_PRIMARY.button.backgroundColor}}
            containerStyle={style.btnContainer}
            title="Primary"
            onPress={() => setTheme(CustomTheme.THEME_PRIMARY)}
          />
        </View>
    </ThemeContext.Provider>
  );
}

const style = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20
  },
  btnContainer: {
    width: "70%"
  }
});
