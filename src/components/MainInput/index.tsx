/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { PropsWithChildren } from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, ReturnKeyTypeOptions, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';

type Props = PropsWithChildren<{
  placeholder?: string | undefined,
	keyboardType: KeyboardTypeOptions | undefined,
	returnKeyType: ReturnKeyTypeOptions | undefined,
	error?: string | undefined,
	maxLength ?: number | undefined,
	onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
}>;

const MainInput = (props: Props): JSX.Element => {
	return (
		<View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
			<TextInput
				style={styles.input}
				keyboardType={props.keyboardType}
				placeholder={props.placeholder}
				returnKeyType={props.returnKeyType}
				maxLength={props.maxLength}
				onChange={props.onChange}/>
			<Text style={{color: 'red'}}>{props.error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  input: {
		width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
		borderColor: 'gray',
		borderRadius: 5,
  },
});

export default MainInput;