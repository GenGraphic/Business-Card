import { Text, Image, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import stylesFavCont from './styles/StylesFavCont';

const FavCard = ({name, businessName, phone, colors, image, id}) => {
  return (
    <LinearGradient colors={[colors[0], colors[1]]} style={stylesFavCont.body}>
      <Image source={require('../assets/images/logo.png')} style={stylesFavCont.favImg}/>

      <View style={stylesFavCont.textCont}>
         <Text style={stylesFavCont.businessName}>{businessName}</Text>
        <Text style={stylesFavCont.name}>{name}</Text>
      </View>
     
      <TouchableOpacity style={stylesFavCont.callBtn}>
        <Image source={require('../assets/images/icons/phone.png')} style={stylesFavCont.callIcon}/>
        <Text style={stylesFavCont.textBtn}>CALL</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default FavCard