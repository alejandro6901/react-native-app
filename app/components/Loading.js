import React, { useContext } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import { ThemeContext } from '../context/ThemeContext';

export default function Loading(props) {
	const { isVisible, text } = props;
	const [ theme ] = useContext(ThemeContext);
	return (
		<Overlay
			isVisible={isVisible}
			windowBackgroundColor={theme.overlayWindow.backgroundColor}
			overlayBackgroundColor={theme.overlayBackground.backgroundColor}
			overlayStyle={[
				style.overlay,
				{ backgroundColor: theme.overlay.backgroundColor, borderColor: theme.overlay.borderColor }
			]}
		>
			<View style={style.view}>
				<ActivityIndicator size="large" color={theme.loading.color} />
				{text && <Text style={[ style.text, { color: theme.text.color } ]}>{text}</Text>}
			</View>
		</Overlay>
	);
}

const style = StyleSheet.create({
	overlay: {
		height: 100,
		width: 200,
		borderWidth: 2,
		borderRadius: 10
	},
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		textTransform: 'uppercase',
		marginTop: 10
	}
});
