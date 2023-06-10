import { Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useState} from 'react';

import styleEditCard from '../../styles/StyleEditCard';

import UserCard from '../../components/UserCard';
import MyColorPicker from '../../components/MyColorPicker';


import MyCardsContext from '../../context/MyCardsContext';

const CardEdit = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState(); //this get the value and save it for use
  const [colorsList, setColorsList] = useState([]); //this is the list that will be send to Context later

  //this handle the colors on change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  }

  //this, on click, push the current collor to the colors list
  const addColorToList = () => {
    if(colorsList.length >= 2){
      alert("We are sory, but with free version you can only get two colors. Cosider upgrading to a payed plan to get full acces.")
    } else {
      setColorsList([...colorsList, selectedColor])
    }
  }

  const removeColorToList = (color) => {
    const updatedColorsList = colorsList.filter((c) => c !== color);
    setColorsList(updatedColorsList);
  }


  return (
    <ScrollView style={styleEditCard.body}>
      <View style={styleEditCard.cardWraper}>
        <UserCard />
      </View>

      <View style={styleEditCard.form}>
        <View>
          <MyColorPicker 
            onColorChange={handleColorChange}
          />
          <View style={{paddingTop: 10, alignItems: 'center', gap: 10}}>
            <TouchableOpacity style={styleEditCard.addColorBtn} onPress={addColorToList}>
              <Text style={styleEditCard.textButton}>ADD</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <Text style={styleEditCard.label}>Selected Colors:</Text>
              {colorsList.map((color) => {
                return (
                  <TouchableOpacity style={[styleEditCard.colorBtn, {backgroundColor: color}]} onPress={() => removeColorToList(color)}>
                    <Text key={color}>{color}</Text>
                  </TouchableOpacity>
                
                )
              })

              }
            </View>
          </View>
          
        </View>

        <View>
          <Text style={styleEditCard.label}>Company name:</Text>
          <TextInput placeholder='Ex.: Gen Graphic' style={styleEditCard.inputFields}/>
        </View>

        <View>
          <Text style={styleEditCard.label}>Owner name:</Text>
          <TextInput placeholder='Ex.: John Smith' style={styleEditCard.inputFields}/>
        </View>

        <View>
          <Text style={styleEditCard.label}>E-mail Adress:</Text>
          <TextInput placeholder='Ex.: gengraphicservices@gmail.com' style={styleEditCard.inputFields}/>
        </View>

        <View>
          <Text style={styleEditCard.label}>Phone nummber:</Text>
          <TextInput placeholder='+49 01518 3003348' style={styleEditCard.inputFields}/>
        </View>

        <View>
          <Text style={styleEditCard.label}>Business Location:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput placeholder='123456 City, Streetname 14' style={styleEditCard.locationInput}/>
            <TouchableOpacity style={styleEditCard.locationBtn}>
              <Image source={require('../../assets/images/icons/pin.png')} style={styleEditCard.btnIcon}/>
              <Text style={styleEditCard.textButton}>LIVE LOCATION</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styleEditCard.label}>Logo:</Text>
          <TouchableOpacity style={styleEditCard.imageBtn}>
            <Image source={require('../../assets/images/icons/add-image.png')} style={styleEditCard.btnIcon}/>
            <Text style={styleEditCard.textButton}>CHANGE LOGO</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styleEditCard.saveBtn}>
            <Image source={require('../../assets/images/icons/save.png')} style={styleEditCard.btnIcon}/>
            <Text style={styleEditCard.textButton}>SAVE</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
    
  )
}

export default CardEdit