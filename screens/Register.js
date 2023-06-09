import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useContext } from 'react';
import stylesRegister from '../styles/StylesRegister';

import UserCard from '../components/UserCard';

import UserCardContext from '../context/UserCardContext';

const Register = ({navigation}) => {
  const {userCardInfo, setUserCardInfo} = useContext(UserCardContext);
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../assets/images/bkg.png')} resizeMode='cover'>
      <SafeAreaView style={stylesRegister.MainContainer}>
        <View style={stylesRegister.body}>
          <View style={stylesRegister.logoCont}>
              <Image source={require('../assets/images/logo.png')} style={stylesRegister.logo}/>
              <Text style={stylesRegister.title}>App Title</Text>
          </View>

          <UserCard navigation={navigation}/>

          <View style={stylesRegister.formCont}>
              <Text style={stylesRegister.formTitle}>Register</Text>
              
              <TextInput 
                placeholder='Email Adress..' 
                style={stylesRegister.inputfield}
                onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, email: text })}
              />
              <TextInput 
                placeholder='Password...' 
                style={stylesRegister.inputfield}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <Text style={{marginTop: 20}}>Allready a member?<Text style={stylesRegister.links} onPress={() => navigation.navigate('Login')}> Log in</Text></Text>

              <TouchableOpacity style={stylesRegister.button} onPress={() => navigation.navigate('Register1')}>
                  <Text style={stylesRegister.BtnText}>REGISTER</Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Register