import React from 'react';
import { Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';

export default function SnackBar(props) {
  const { visible, message } = props;

  return (
    <View>
      <Snackbar visible={visible} onDismiss={false} duration={3000}>
        <Text>{message}</Text>
      </Snackbar>
    </View>
  );
}
