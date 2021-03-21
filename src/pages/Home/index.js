import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView, 
  ActivityIndicator, 
  StyleSheet, 
  FlatList, 
  View, 
  Alert, 
  Text } from 'react-native';
import * as Location from 'expo-location';
import * as Network from 'expo-network';

import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import api, { key } from '../../services/api';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' });
  const [background, setBackground] = useState(['#1ed6ff','#97c1ff']);

  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      let connection = await Network.getNetworkStateAsync();

      if (connection.isConnected !== true || connection.isInternetReachable !== true){
        Alert.alert('Que pena...', 'Você não tem acesso à internet para usar o app.');
        return;
      }
      
      if (status !== 'granted'){
        Alert.alert('Ops!', 'Precisamos de sua permissão para obeter a localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
      setWeather(response.data);

      if(response.data.results.currently === 'noite'){
        setBackground(['#0c3741','#0f2f61']);
      }

      switch(response.data.results.condition_slug){
        case 'clear_day':
          setIcon({ name: 'sunny', color: '#ffb300' });
          break;
        case 'rain':
          setIcon({ name: 'rainy', color: '#fff' });
          break;
        case 'storm':
          setIcon({ name: 'thunderstorm', color: '#fff' });
          break;
      }

      setLoading(false);

    })();
  }, []);

  if(loading){
    return(
      <View style={styles.loadingContainer}>
        <Text style={{ fontSize: 25, fontStyle: 'italic', color: '#fff'}}>Carregando dados...</Text>
        <ActivityIndicator size='large' color='#0f2f61' />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />

      <Header icon={icon} background={background} weather={weather}/>

      <Conditions weather={weather}/>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={weather.results.forecast}
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
  loadingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ed6ff',
    paddingTop: '5%',
  },
  list:{
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Home;