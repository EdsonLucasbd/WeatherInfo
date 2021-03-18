import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Keyboard, 
  FlatList,
  TouchableOpacity} from 'react-native';

import api, { key } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions';
import BackButton from '../../components/BackButton';
import SearchBox from '../../components/SearchBox';
import Forecast from '../../components/Forecast';

const Search = () => {
  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [isCityClick, setIsCityClick] = useState(false);

  async function handleSearch(){
    const response = await api.get(`weather?key=${key}&city_name=${input}`);

    if(response.data.by === 'default'){
      setError('Hum... Não achei sua cidade.');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data);
    setInput('');
    Keyboard.dismiss();

  }

  function handleChangeText(text){
    setInput(text);
  }

  if(city){
    return(
      <SafeAreaView style={styles.container}>
        <BackButton />

        <SearchBox changeText={handleChangeText} input={input} search={handleSearch}/>

        <TouchableOpacity onPress={() => setIsCityClick(true)}>
          <LinearGradient
            style={styles.header}
            colors={['#1ed6ff', '#97c1ff']}
          >
          
          <Text style={styles.date}>{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city}</Text>
          <View>
            <Text style={styles.temp}>{city.results.temp}°</Text>
          </View>

          <Conditions weather={city}/>

          </LinearGradient>
        </TouchableOpacity>

      {isCityClick && (
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={city.results.forecast}
        keyExtractor={ item => item.date }
        renderItem={ ({item}) => <Forecast data={item}/> }
      />
      )}

      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <SearchBox changeText={handleChangeText} input={input} search={handleSearch}/>

      { error && <Text style={{marginTop: 25, fontSize: 18}}>{error}</Text> }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: '10%',
    backgroundColor: '#e8f0ff'
  },
  header:{
    marginTop: '5%',
    width: '90%',
    paddingTop: '5%',
    paddingBottom: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  date:{
    color: '#fff',
    fontSize: 16
  },
  city:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp:{
    color: '#fff',
    fontSize: 90,
    fontWeight: 'bold'
  },
  list:{
    marginTop: 10,
    marginLeft: 10,
  }
});

export default Search;