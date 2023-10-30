/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Packages
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Components
import MainButton from '../../components/MainButton';
import MainInput from '../../components/MainInput';
import { RootStackParamList } from '../../common/types';

// Api
import { sendCodeEmail } from '../../api/authApi';

const LoginScreen = (): JSX.Element => {

	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	const sendEmail = async () => {
		try {
			if(!error){
				await sendCodeEmail(email);
				navigation.navigate('Otp', {email: email});
			}
		} catch (error) {
			console.log(error);
		}
	}

	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


	useEffect(() => {
		if(!reg.test(email)){
			setError('Error. This is not an email')
		}else {
			setError('')
		}
	},[email])

	return (
		<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
			<Image source={require('../../assets/logo.png')}/>
			<MainInput 
				placeholder='email'
				keyboardType='email-address'
				returnKeyType='done'
				error={error}
				onChange={(e)=>setEmail(e.nativeEvent.text)}/>
			<MainButton 
				title='Next' 
				onPress={sendEmail}/>
		</View>
	);
}



export default LoginScreen;
