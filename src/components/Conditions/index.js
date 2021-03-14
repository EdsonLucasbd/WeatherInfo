import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Conditions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather name='wind' size={23} color='#1ed6ff' />
        <Text>7 Km/h</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
        <Text>6:00 am</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff' />
        <Text>17:50 am</Text>
      </View>

      <View style={styles.condition}>
        <Feather name='droplet' size={23} color='#1ed6ff' />
        <Text>65</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 15,
    padding: 10,
    width: '95%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  condition:{
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Conditions;