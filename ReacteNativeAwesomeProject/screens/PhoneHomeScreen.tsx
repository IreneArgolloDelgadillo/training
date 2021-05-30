import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { Button, Alert } from 'react-native';
import call from 'react-native-phone-call';

function handlePress() {
	// Alert.alert('Simple Button pressed');
	call(args).catch(console.error);
}
export default function PhoneHomeScreen() {
  return (
		<View style={styles.container}>
			<Button
				onPress = {handlePress}
				title = "Caller"
				color = "blue"
				/>
		</View>
  );
}

const args = {
  number: '44309529', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
