import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export default function CustomDivider() {
  return <Divider style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
