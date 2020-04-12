import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

/* BEGIN IMPORTING CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING CONTEXT */

export default function SelectLanguages() {

  const [theme] = useContext(ThemeContext);
  const [lang, setLang] = useContext(LanguageContext)
  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      <Text style={style.title}>Selecciona un Idioma:</Text>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: theme.button.backgroundColor}}
            containerStyle={style.btnContainer}
            title="English"
            onPress={() => setLang("en")}
          />
        </View>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: theme.button.backgroundColor}}
            containerStyle={style.btnContainer}
            title="Español"
            onPress={() => setLang("es")}
          />
        </View>
    </LanguageContext.Provider>
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
