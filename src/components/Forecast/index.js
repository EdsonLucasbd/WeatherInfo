import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { customCondition } from '../../utils/customCondition';

const Forecast = ({ data }) => {
  let icon = customCondition(data.condition);

  return (
    <View style={styles.container}>
      
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons name={icon.name} color={icon.color} size={25} />
      
      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}°</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  date:{
    fontSize: 14
  },
  temp:{
    alignItems: 'center'
  }
});

export default Forecast;