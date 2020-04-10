import React from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";

export default function InputForm(props) {
  const { name, icon, password, onChange, secureTextEntry } = props;

  return (
    <Input
      placeholder={name}
      password={password}
      containerStyle={styles.inputForm}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      leftIcon={
        <Icon
          type="material-community"
          name={icon}
          iconStyle={styles.iconRight}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  iconRight: {
    color: "#c1c1c1"
  },
  inputForm: {
    marginTop: 20
  }
});
