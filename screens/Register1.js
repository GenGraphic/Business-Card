import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useContext } from 'react';
import stylesRegister1 from '../styles/StylesRegister1';

import UserCard from '../components/UserCard';

import UserCardContext from '../context/UserCardContext';

const Register1 = ({navigation}) => {
  const {userCardInfo, setUserCardInfo} = useContext(UserCardContext);

  return (
    <ImageBackground source={require('../assets/images/bkg.png')}>
    <SafeAreaView style={stylesRegister1.MainContainer}>
      <View style={stylesRegister1.body}>
        <View style={stylesRegister1.logoCont}>
            <Image source={require('../assets/images/logo.png')} style={stylesRegister1.logo}/>
            <Text style={stylesRegister1.title}>App Title</Text>
        </View>

        <UserCard navigation={navigation}/>

        <View style={stylesRegister1.formCont}>
          <View>
            <Text style={stylesRegister1.label}>Business Adress:</Text>            
            <TextInput 
              placeholder='Ex: Gen Graphic' 
              style={stylesRegister1.inputfield}
              onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, businessName: text })}
            />
          </View>

          <View>
            <Text style={stylesRegister1.label}>Owner name:</Text>
            <TextInput 
              placeholder='Ex: Jhon Smith' 
              style={stylesRegister1.inputfield}
              onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, name: text })}
            />
          </View>            
          
            <TouchableOpacity style={stylesRegister1.button} onPress={() => navigation.navigate('Register2')}>
                <Text style={stylesRegister1.BtnText}>NEXT</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default Register1