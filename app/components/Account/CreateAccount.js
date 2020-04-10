import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CreateAccount(props) {
  const { navigation } = props;
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => {
          navigation.navigate("Register");
        }}>
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
});
