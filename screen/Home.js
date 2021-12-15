import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Text,SafeAreaView,StatusBar,Alert } from 'react-native';
import {styles} from '../style/style.js'


const HomeScreen = ({ navigation }) => {

const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getParliament = async () => {
     try {
      const response = await fetch('https://raw.githubusercontent.com/iamrajendra/services/master/seats.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getParliament();
  }, []);

handleClick = (item) => {
        navigation.navigate('State details', { data: item })
}

  return (
            <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (

        <FlatList
          data={data}
          keyExtractor={({ item }, index) => item}
          renderItem={({ item }) => (
            <Text
            style = {styles.item}
 onPress={() => handleClick(item)
}
            >{item.state}, {item.seats}

            </Text>
          )}
        />
      )}
    </SafeAreaView>
  );


};


export {HomeScreen};

