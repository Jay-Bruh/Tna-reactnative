import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View
} from 'react-native';
import { globalStyles } from '../App';
import useStore from '../store';
import DisplayName from './DisplayName';

const GBR: React.FC = () => {
  const { fishes, setFish } = useStore();

  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.homeTitle}>GREAT BARRIER REEF</Text>
        <View
          style={{
            borderBottomColor: "#fff",
            borderBottomWidth: 1.5,
            width: 3 * 30,
          }}
        />
      </View>

      <FlatList
        data={fishes}
        keyExtractor={item => item.name}
        numColumns={2}

        renderItem={({ item }) =>
          <Pressable
            style={{
              // backgroundColor: '#aaa',
              width: Dimensions.get('screen').width / 2,
              height: Dimensions.get('screen').height / 4,
              paddingHorizontal: 60,
            }}

            onPress={() => setFish(item.name)}
          >
            <Image
              source={item.imageSrc}
              style={{
                width: Dimensions.get('window').width / 2.5,
                height: '70%',
                marginTop: 30,
                resizeMode: "contain",
                // backgroundColor: "#aea",
              }}
            />
            <DisplayName
              marginTop={-10}
              name={item.name}
            />
          </Pressable>
        }
      />
    </>
  )
}

export default GBR;