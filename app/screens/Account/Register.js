import React, { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageLogo from '../../components/ImageLogo';
import CustomViewContainer from '../../components/CustomViewContainer';
import RegisterForm from '../../components/Account/RegisterForm';
import Toast from 'react-native-easy-toast';

export default function Register() {
  const toastRef = useRef();

	return (
		<KeyboardAwareScrollView>
			<ImageLogo />
			<CustomViewContainer>
				<RegisterForm toastRef={toastRef}/>
			</CustomViewContainer>
			<Toast ref={toastRef} useNativeDriver={true} position="center" opacity={0.5} />
		</KeyboardAwareScrollView>
	);
}
