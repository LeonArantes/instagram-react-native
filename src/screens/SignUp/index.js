import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SingUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text> SignUp </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Text> Go to Instagram </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingUp;
