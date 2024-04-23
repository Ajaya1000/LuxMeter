import React from 'react';
import {Text, View} from 'react-native';

export const Home = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24}}>Hi Home</Text>
    </View>
  );
};
