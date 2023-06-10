import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useContext } from 'react';

import stylesRegister3 from '../../styles/StylesRegister3';

import UserCard from '../../components/UserCard';

import UserCardContext from '../../context/UserCardContext';

const Register3 = ({navigation}) => {
  const {userCardInfo, setUserCardInfo} = useContext(UserCardContext);

  return (
    <ImageBackground source={require('../../assets/images/bkg.png')}>
    <SafeAreaView style={stylesRegister3.MainContainer}>
      <View style={stylesRegister3.body}>
        <View style={stylesRegister3.logoCont}>
            <Image source={require('../../assets/images/logo.png')} style={stylesRegister3.logo}/>
            <Text style={stylesRegister3.title}>App Title</Text>
        </View>

        <UserCard navigation={navigation}/>

        <View style={stylesRegister3.formCont}>
          <View>
            <Text style={stylesRegister3.label}>Phone Number:</Text>            
            <TextInput 
              placeholder='Ex: +49 01514 1231234' 
              style={stylesRegister3.inputfield}
              onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, phone: text })}
            />
          </View>

          <View>
            <Text style={stylesRegister3.label}>Business Location:</Text>            
            <TextInput 
              placeholder='Ex: 123456 City, Streetname 12, Country' 
              style={stylesRegister3.inputfield}
              onChangeText={(text) =>  setUserCardInfo({ ...userCardInfo, adress: text })}
            />
          </View>

          <TouchableOpacity style={stylesRegister3.locationBtn}>
            <Image source={require('../../assets/images/icons/pin.png')} style={stylesRegister3.btnIcon}/>
            <Text style={stylesRegister3.BtnText}>LIVE LOCATION</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesRegister3.button} onPress={() => navigation.navigate('Home')}>
                <Text style={stylesRegister3.BtnText}>DONE</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default Register3