/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = (): JSX.Element => {
	return (
		<View style={styles.centered}>
			<Text>Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default HomeScreen;