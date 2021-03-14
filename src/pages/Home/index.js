import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Header from '../../components/Header';

import Menu from '../../components/Menu';

const tempList = [
  {"date":"13/03","weekday":"Sáb","max":27,"min":25,"description":"Alguns chuviscos","condition":"rain"},{"date":"14/03","weekday":"Dom","max":27,"min":26,"description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"15/03","weekday":"Seg","max":26,"min":25,"description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"16/03","weekday":"Ter","max":27,"min":26,"description":"Tempestades isoladas","condition":"storm"},{"date":"17/03","weekday":"Qua","max":27,"min":25,"description":"Tempestades","condition":"storm"},{"date":"18/03","weekday":"Qui","max":27,"min":25,"description":"Tempestades","condition":"storm"},{"date":"19/03","weekday":"Sex","max":27,"min":25,"description":"Tempestades","condition":"storm"},{"date":"20/03","weekday":"Sáb","max":27,"min":25,"description":"Tempestades","condition":"storm"},{"date":"21/03","weekday":"Dom","max":27,"min":26,"description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"22/03","weekday":"Seg","max":26,"min":25,"description":"Tempestades isoladas","condition":"storm"}
]

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />

      <Header />

      <Conditions/>

      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={tempList}
        keyExtractor={ item => item.date }
        renderItem={ ({item}) => <Forecast data={item}/> }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list:{
    marginTop: 10,
    marginLeft: 10,
  }
});

export default Home;