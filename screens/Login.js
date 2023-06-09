import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';

import stylesSignIn from '../styles/StyleSignIn'

const Login = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/images/bkg.png')} resizeMode='cover'>
      <SafeAreaView style={stylesSignIn.MainContainer}>
        <View style={stylesSignIn.body}>
          <View style={stylesSignIn.logoCont}>
              <Text style={stylesSignIn.title}>App Title</Text>
              <Image source={require('../assets/images/logo.png')} style={stylesSignIn.logo}/>
          </View>

          <View style={stylesSignIn.formCont}>
              <Text style={stylesSignIn.formTitle}>Log in</Text>
              
              <TextInput placeholder='Email Adress..' style={stylesSignIn.inputfield}/>
              <TextInput placeholder='Password...' style={stylesSignIn.inputfield}/>

              <Text style={{marginTop: 20}}>No account yet?<Text style={stylesSignIn.links} onPress={() => navigation.navigate('Register')}> Register</Text></Text>

              <TouchableOpacity style={stylesSignIn.button}>
                  <Text style={stylesSignIn.BtnText}>SIGN IN</Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Login