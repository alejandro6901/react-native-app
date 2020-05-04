import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
export default function InfoUser(props) {
  const { userInfo, userInfo: { displayName, photoURL, email } } = props;

  const changeAvatar = () => {
    console.log('change avatar');
  };
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        source={{
          uri: photoURL ? photoURL : 'https://api.adorable.io/avatars/103/abott@adorable.png'
        }}
      />
      <View style={styles.displayName}>
        <Text> Email: {email}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  displayName: {
    fontWeight: 'bold'
  }
});
