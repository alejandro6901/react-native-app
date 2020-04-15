import React from 'react';
import { ScrollView, Text } from 'react-native';

import ImageLogo from '../../components/ImageLogo';
import CustomViewContainer from '../../components/CustomViewContainer';
import CustomDivider from '../../components/CustomDivider';
import CreateAccount from '../../components/Account/CreateAccount';
import LoginForm from '../../components/Account/LoginForm';


export default function Login(props) {
	const { navigation } = props;
	return (
		<ScrollView>
			<ImageLogo />
			<CustomViewContainer>
				<LoginForm navigation={navigation}  />
				<CreateAccount navigation={navigation} />
			</CustomViewContainer>
			<CustomDivider />
			<CustomViewContainer>
				<Text>Login Facebook..</Text>
			</CustomViewContainer>
		</ScrollView>
	);
}
