import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Text,SafeAreaView,StyleSheet,StatusBar,Alert } from 'react-native';


const HomeScreen = ({ navigation }) => {

const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
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
    getMovies();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 10,
  },
});

export {HomeScreen};

