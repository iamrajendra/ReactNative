import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Text,SafeAreaView,StatusBar,Alert } from 'react-native';
import {styles} from '../style/style'
import {getParliament} from '../service/Parliament'
import {Card} from 'react-native-shadow-cards';



const HomeScreen = ({ navigation }) => {

const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


// life cycle method
  useEffect(() => {
  setLoading(true)
    getParliament().then((response)=>{
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
          <Card style={styles.cardview}>
            <Text
            style = {styles.item}
 onPress={() => handleClick(item)
}
            >{item.state}, {item.seats}

            </Text>
                  </Card>

          )}
        />
      )}
    </SafeAreaView>
  );


};


export {HomeScreen};

