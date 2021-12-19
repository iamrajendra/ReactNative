import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Text,SafeAreaView,StatusBar,Alert } from 'react-native';
import {styles} from '../style/style'
import {getParliament} from '../service/Parliament'


const HomeScreen = ({ navigation }) => {

const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


// life cycle method
  useEffect(() => {
  setLoading(true)
    getParliament().then((response)=>{
//    console.log("Result ",response);
setLoading(false)
    setData(response);

    })

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

