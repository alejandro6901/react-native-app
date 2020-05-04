import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageLogo from '../../components/ImageLogo';
import CustomViewContainer from '../../components/CustomViewContainer';
import RegisterForm from '../../components/Account/RegisterForm';

export default function Register(props) {
  const { navigation } = props;
  return (
    <KeyboardAwareScrollView>
      <ImageLogo />
      <CustomViewContainer>
        <RegisterForm navigation={navigation} />
      </CustomViewContainer>
    </KeyboardAwareScrollView>
  );
}
