import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { STACK_REGISTER } from '../../navigations/Stacks/RoutesNames';

export default function CreateAccount(props) {
	const { navigation } = props;
	const [ theme ] = useContext(ThemeContext);
	return (
		<Text style={styles.textRegister}>
			¿Aún no tienes una cuenta?{' '}
			<Text
				style={[ styles.btnRegister, { color: theme.text.color } ]}
				onPress={() => {
					navigation.navigate(STACK_REGISTER);
				}}
			>
				Registrate
			</Text>
		</Text>
	);
}

const styles = StyleSheet.create({
	textRegister: {
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10
	},
	btnRegister: {
		fontWeight: 'bold'
	}
});
