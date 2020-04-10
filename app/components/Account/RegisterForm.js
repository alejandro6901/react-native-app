import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Input from "../InputForm";

export default function RegisterForm() {
  const register = () => {
    console.log("Regitered");
  };

  return (
    <View style={styles.formContainer}>
      <Input
        name="Correo electrónico"
        icon="email"
        onChange={() => console.log("email")}
      />
      <Input
        name="Contraseña"
        icon="eye-outline"
        password={true}
        onChange={() => console.log("pass")}
        secureTextEntry={true}
      />
      <Input
        name="Repetir contraseña"
        icon="eye"
        password={true}
        onChange={() => console.log("confirm pass")}
        secureTextEntry={true}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  }
});
