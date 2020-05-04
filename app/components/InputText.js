import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

export default function InputText(props) {
  const [ theme ] = useContext(ThemeContext);
  const { label, text, isActive, keyboardType, onChange, secureTextEntry, isError, errorMessage, who } = props;

  let checkError = false;
  let errorMsg = '';
  if (isError && errorMessage !== undefined) {
    if (who in errorMessage) {
      if (errorMessage[who] != '') {
        checkError = true;
        errorMsg = errorMessage[who];
      }
    }
  }

  return (
    <View style={theme.input.backgroundColor}>
      <TextInput
        error={checkError}
        label={label}
        text={text}
        isActive={isActive}
        keyboardType={keyboardType}
        onChange={onChange}
        secureTextEntry={secureTextEntry}
        style={[ styles.inputForm, { backgroundColor: theme.input.backgroundColor } ]}
        theme={{ colors: { primary: theme.input.color } }}
      />
      <HelperText type="error" visible={checkError}>
        <Text>{errorMsg}</Text>
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    height: 60,
    marginTop: 10,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0
  }
});
