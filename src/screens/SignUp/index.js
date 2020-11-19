import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RequestsApi from '../../services/api/RequestsApi';

const SingUp = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
