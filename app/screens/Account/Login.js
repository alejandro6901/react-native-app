import React from "react";
import { ScrollView, Text } from "react-native";

import ImageLogo from "../../components/ImageLogo";
import CustomViewContainer from "../../components/CustomViewContainer";
import CustomDivider from "../../components/CustomDivider";
import CreateAccount from "../../components/Account/CreateAccount";

export default function Login(props) {
  const { navigation } = props;
  return (
    <ScrollView>
      <ImageLogo />
      <CustomViewContainer>
        <Text>Form Login...</Text>
        <CreateAccount navigation={navigation}/>
      </CustomViewContainer>
      <CustomDivider />
      <CustomViewContainer>
        <Text>Login Facebook..</Text>
      </CustomViewContainer>
    </ScrollView>
  );
}
