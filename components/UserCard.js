import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useContext} from 'react';

import UserCardContext from '../context/UserCardContext';

import userCardStyles from './styles/StylesUserCard';

const UserCard = ({navigation}) => {
    const {userCardInfo} = useContext(UserCardContext)

  return (
    <View style={userCardStyles.cardCont}>
      <View style={userCardStyles.cardWrapper}>
          <LinearGradient 
              style={userCardStyles.card}
              colors={[userCardInfo.colors[0], userCardInfo.colors[1]]} 
              start={{x:0, y:1}}
              end={{x:1, y:0}}
          >
              <View style={userCardStyles.cardHeader}>
                  <Image source={require('../assets/images/logo.png')} style={userCardStyles.userLogo}/>
                  <Text style={userCardStyles.busineesName}>{userCardInfo.businessName}</Text>
              </View>
              <View style={userCardStyles.infoCont}>
                <Text style={userCardStyles.infoCard}>Name: {userCardInfo.name}</Text>
                <Text style={userCardStyles.infoCard}>Email: {userCardInfo.email}</Text>
                <Text style={userCardStyles.infoCard}>Phone: {userCardInfo.phone}</Text>
              </View>
              <View>
                <Text style={userCardStyles.sloganCard}>{userCardInfo.slogan}</Text>
              </View>
              <View style={userCardStyles.btnContCard}>
                  <Image source={require('../assets/images/icons/internet.png')} style={userCardStyles.btnCard} />
                  <Image source={require('../assets/images/icons/phone-call.png')} style={userCardStyles.btnCard} />
                  <Image source={require('../assets/images/icons/email.png')} style={userCardStyles.btnCard} />
                  <Image source={require('../assets/images/icons/pin-point.png')} style={userCardStyles.btnCard} />
              </View>
          </LinearGradient>
      </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({})