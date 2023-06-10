import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const MyColorPicker = ({ onColorChange }) => {
  const [currentColor, setCurrentColor] = useState('#FFF'); // Set initial color to white

  const handleColorChange = (color) => {
    setCurrentColor(color);
    onColorChange(color); // Call the onColorChange callback
  };

  return (
    <View>
      <ColorPicker
        color={currentColor}
        onColorChange={handleColorChange}
        thumbSize={40}
        sliderSize={40}
        noSnap={true}
        row={false}
      />
    </View>
  );
};

export default MyColorPicker;
