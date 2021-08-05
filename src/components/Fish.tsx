import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import useStore from "../store";
import DisplayName from "./DisplayName";

interface DetailProps {
  scientificName: string;
  diet: string;
  maxSize: string;
}

const Detail: React.FC<DetailProps> = ({ scientificName, diet, maxSize }) => {
  return (
    <View>
      <FlatList
        numColumns={3}
        keyExtractor={item => item.title}
        data={[
          {
            title: 'Scientific Name',
            icon: require('../resource/icons/ScientificNameIcon.png'),
            value: scientificName,
          },
          {
            title: 'Diet',
            icon: require('../resource/icons/DietIcon.png'),
            value: diet,
          },
          {
            title: 'Max Size',
            icon: require('../resource/icons/MaxSizeIcon.png'),
            value: maxSize
          }
        ]}

        renderItem={({ item }) =>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>{item.title}</Text>
            <View
              style={{
                borderBottomColor: "#fff",
                borderBottomWidth: 1,
                marginBottom: 20,
                marginTop: 5,
                width: 3 * 10,
              }}
            />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.icon} style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 10 }}></Image>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          </View>
        }
      />
    </View>
 )
}

const FishView: React.FC = () => {
  const { fishes, fishInView, setFish } = useStore();

  const nextFish = () => {
    const currentIndex = fishes.indexOf(fishInView);
    const nextIndex = (currentIndex + 1) % fishes.length;
    setFish(fishes[nextIndex].name);
  }

  const prevFish = () => {
    const currentIndex = fishes.indexOf(fishInView);
    const prevIndex = (currentIndex + (fishes.length - 1)) % fishes.length;
    setFish(fishes[prevIndex].name);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.fishImage}
        source={fishInView.imageSrc}
      />

      <DisplayName
        name={fishInView.name}
        marginTop={-10}
        firstNameFontSize={70}
        secondNameFontSize={80}
      />

      <Detail
        scientificName={fishInView.scientificName}
        diet={fishInView.diet}
        maxSize={fishInView.maxSize}
      />

      <View style={styles.factsBox}>
        <Text style={styles.detailTitle}>Fun facts</Text>
        <View
          style={{
            borderBottomColor: "#fff",
            borderBottomWidth: 1,
            width: 3 * 10,
            marginBottom: 5,
          }}
        />

        <FlatList
          keyExtractor={(_item, index) => index.toString()}
          data={fishInView.funFacts}
          renderItem={({ item }) => (
            <Text style={styles.detailValue}>&middot; {item}</Text>
          )}
        />
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          {/* Conservation Status */}
          <View style={{ width: Dimensions.get('window').width / 2 }}>
            <Text style={styles.detailTitle}>Conservation Status</Text>
            <View
              style={{
                borderBottomColor: "#fff",
                borderBottomWidth: 1,
                width: 3 * 10,
                marginBottom: 5,
              }}
            />

            <Text>
              { fishInView.conservationStatus }
            </Text>

          </View>

          {/* Geographical Location */}
          <View style={{ width: Dimensions.get('window').width / 2 }}>
            <Text style={styles.detailTitle}>Geographical Location</Text>
            <View
              style={{
                borderBottomColor: "#fff",
                borderBottomWidth: 1,
                width: 3 * 10,
                marginBottom: 5,
              }}
            />

            <Image
              style={{
                width: '77%',
                height: 300,
                resizeMode: 'contain',
              }}
              source={require('../resource/maps/AngelfishMap.png')}
            />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: Dimensions.get('window').width / 5}}>
                <Text>
                  Location
                </Text>
              </View>

              <View style={{ width: Dimensions.get('window').width / 4}}>
                <Text>
                  Sea
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <Pressable
            onPress={() => prevFish()}
            style={styles.actionButton}
          >
            <Image
              style={styles.buttonImage}
              source={require('../resource/icons/prev.png')}
            />
          </Pressable>

          <Pressable
            onPress={() => nextFish()}
            style={styles.actionButton}
          >
            <Image
              style={styles.buttonImage}
              source={require('../resource/icons/next.png')}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 60,
  },

  fishImage: {
    width: '100%',
    height: Dimensions.get('window').height / 4.5,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  name: {
    marginTop: -20,
    fontSize: 70,
    color: 'white',
    fontWeight: '700',
  },

  detail: {
    width: Dimensions.get('window').width / 3.4,
    marginTop: 20,
    marginRight: 70,
  },

  detailTitle: {
    color: 'white',
    fontSize: 30,
  },

  detailValue: {
    color: 'white',
    fontSize: 25,
  },

  factsBox: {
    marginVertical: 50,
    backgroundColor: '#006e9f',
    width: Dimensions.get('window').width - (60 * 2),
    padding: 20,
    height: '20%',
    borderRadius: 30,
  },

  actionButtons: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  actionButton: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 100,
  },

  buttonImage: {
    height: 20,
    width: 20,
  }
});

export default FishView;