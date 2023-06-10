import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useContext } from 'react';

import stylesRegister2 from '../../styles/StylesRegister2';

import UserCard from '../../components/UserCard';

import UserCardContext from '../../context/UserCardContext';

const Register2 = ({navigation}) => {
  const {userCardInfo, setUserCardInfo} = useContext(UserCardContext);

  return (
    <ImageBackground source={require('../../assets/images/bkg.png')}>
    <SafeAreaView style={stylesRegister2.MainContainer}>
      <View style={stylesRegister2.body}>
        <View style={stylesRegister2.logoCont}>
            <Image source={require('../../assets/images/logo.png')} style={stylesRegister2.logo}/>
            <Text style={stylesRegister2.title}>App Title</Text>
        </View>

        <UserCard navigation={navigation}/>

        <View style={stylesRegister2.formCont}>
            <View>
              <Text style={stylesRegister2.label}>Business Slogan:</Text>            
              <TextInput 
                placeholder='Ex: Web at high standards.' 
                style={stylesRegister2.inputfield}
                onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, slogan: text })}
              />
            </View>

            <View>
              <Text style={stylesRegister2.label}>Business field:</Text>
              <TextInput 
                placeholder='Ex: Web/Mobile Development' 
                style={stylesRegister2.inputfield}
                onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, businessField: text })}
              />
            </View>      

            <View>
              <Text style={stylesRegister2.label}>Business Website:</Text>
              <TextInput 
                placeholder='Ex: www.gengraphic.de' 
                style={stylesRegister2.inputfield}
                onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, website: text })}
              />
            </View>       

            <TouchableOpacity style={stylesRegister2.button} onPress={() => navigation.navigate('Register3')}>
                <Text style={stylesRegister2.BtnText}>NEXT</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default Register2