import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SelectThemes from '../components/Settings/SelectThemes'
import SelectLanguages from '../components/Settings/SelectLanguages'
export default function Settings() {

  return (
    <ScrollView style={style.viewBody} centerContent={true}>
      <SelectThemes />
      <SelectLanguages />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
});
