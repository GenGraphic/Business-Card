import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';

import menuStyles from './styles/StylesMenu';

const Menu = ({scanner, wallet, home, myCards, settings, navigation}) => {
  return (
    <View style={menuStyles.body}>
      <TouchableOpacity style={menuStyles.optionMenu} onPress={() => navigation.navigate('Scanner')}>
        <Image source={require('../assets/images/icons/qr-code.png')} style={[menuStyles.menuIcon, {tintColor: scanner}]}/>
        <Text style={[menuStyles.menuText, {color: scanner}]}>Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menuStyles.optionMenu} onPress={() => navigation.navigate('Wallet')}>
        <Image source={require('../assets/images/icons/business-card.png')} style={[menuStyles.menuIcon, {tintColor: wallet}]}/>
        <Text style={[menuStyles.menuText, {color: wallet}]}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menuStyles.optionMenu} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/images/icons/home.png')} style={[menuStyles.menuIcon, {tintColor: home}]}/>
        <Text style={[menuStyles.menuText, {color: home}]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menuStyles.optionMenu} onPress={() => navigation.navigate('MyCards')}>
        <Image source={require('../assets/images/icons/avatar.png')} style={[menuStyles.menuIcon, {tintColor: myCards}]} />
        <Text style={[menuStyles.menuText, {color: myCards}]}>My cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menuStyles.optionMenu} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../assets/images/icons/settings.png')} style={[menuStyles.menuIcon, {tintColor: settings}]}/>
        <Text style={[menuStyles.menuText, {color: settings}]}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu
