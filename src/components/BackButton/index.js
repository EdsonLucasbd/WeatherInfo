import React from 'react';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const BackButton = () => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
      <Feather
        name='chevron-left'
        size={32}
        color='#000'
      />
      <Text style={{ fontSize: 22 }}>Voltar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton:{
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  }
});

export default BackButton;