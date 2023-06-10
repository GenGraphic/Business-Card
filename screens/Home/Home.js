import { Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, TextInput, Keyboard } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import UserCard from '../../components/UserCard';
import Menu from '../../components/Menu';
import FavCard from '../../components/FavCard';

import MyCardsContext from '../../context/MyCardsContext';
import UserCardContext from '../../context/UserCardContext';

import homeStyles from '../../styles/StylesHome';

const Home = ({navigation}) => {
  const {userCardInfo, setUserCardInfo} =useContext(UserCardContext);
  const { myCards } = useContext(MyCardsContext);
  const [searchText, setSearchText] = useState('');


  

  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <KeyboardAwareScrollView>
        <Text style={homeStyles.pageTitle}>Hi Eduard, this is you Visit Card</Text>

        <View style={homeStyles.cardCont}>
          <UserCard />
          <View style={homeStyles.cardBtnCont}>
            <TouchableOpacity style={homeStyles.cardOption} onPress={() => navigation.navigate('Edit Card')}>
              <Image source={require('../../assets/images/icons/edit.png')} style={homeStyles.cardBtnIcon}/>
              <Text style={homeStyles.cardBtnText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.cardOption}>
              <Image source={require('../../assets/images/icons/share.png')} style={homeStyles.cardBtnIcon}/>
              <Text style={homeStyles.cardBtnText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.cardOption}>
              <Image source={require('../../assets/images/icons/qr-code-W.png')} style={homeStyles.cardBtnIcon}/>
              <Text style={homeStyles.cardBtnText}>QR Code</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.cardOption}>
              <Image source={require('../../assets/images/icons/new.png')} style={homeStyles.cardBtnIcon}/>
              <Text style={homeStyles.cardBtnText}>Add new</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.cardOption}>
              <Image source={require('../../assets/images/icons/trash.png')} style={homeStyles.cardBtnIcon}/>
              <Text style={homeStyles.cardBtnText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={homeStyles.favCont}>
          <Text style={homeStyles.pageTitle}>Favorite:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', gap: 10}}>
            {myCards.map((item) => {
              return(
                <FavCard 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  businessName={item.businessName}
                  phone={item.phone}
                  colors={item.colors}
                  image={item.image}
                />
              )
            })
            }
          </ScrollView>
        </View>

        <View>
          <Text style={homeStyles.pageTitle}>Discover more:</Text>
          <View style={homeStyles.searchCont}>
            <Image source={require('../../assets/images/icons/search.png')} style={homeStyles.searchIcon}/>
            <TextInput placeholder='Company name, email, phone...' style={{width: '100%'}} onChangeText={(text) => setSearchText(text)}/>
          </View>
          
          <View>
            {searchText === "" ? 
              <Image source={require('../../assets/images/search_placeholder.png')} style={homeStyles.searchPlaceholder}/>
            :
              <Text>Result</Text>
            }
          </View>
        </View>
    </KeyboardAwareScrollView>
    <Menu
      navigation={navigation} 
      scanner={'#000'}
      wallet={'#000'}
      home={'#FF5722'}
      myCards={'#000'}
      settings={'#000'}
    />
    </SafeAreaView>
  )
}

export default Home
