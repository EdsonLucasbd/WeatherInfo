import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
      <Feather 
        name='menu'
        size={36}
        color='#373737'
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3
    }
  }

});

export default Menu;