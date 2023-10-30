/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Packages
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../common/types';

// Components
import MainInput from '../../components/MainInput';
import MainButton from '../../components/MainButton';
import { validateCodeEmail } from '../../api/authApi';

const OtpScreen = (): JSX.Element => {

	const [otp, setOtp] = useState('');
	const route: any = useRoute();

	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


	useEffect(() => {
		console.log();
	}, [])

	const sendCode = async () => {
		try {
			await validateCodeEmail(route.params.email , otp);
			navigation.navigate('Home');
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
			<Image source={require('../../assets/logo.png')}/>
			<MainInput 
				placeholder='Código otp'
				keyboardType='numeric'
				returnKeyType='done'
				maxLength={6}
				onChange={(e)=>setOtp(e.nativeEvent.text)}/>
			<MainButton 
				title='Sign In'
				onPress={sendCode}/>
		</View>
	);
}

export default OtpScreen;