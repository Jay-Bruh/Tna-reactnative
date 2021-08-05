/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Suspense, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FishView from './components/Fish';
import {IMLocalized, init} from './IMLocalized';
import SwitchSelector from 'react-native-suitch-selector';
import GBR from './components/GBR';
import LocalizedStrings from 'react-native-localization';
import useStore from './store';
import { useTranslation } from 'react-i18next';

const options = [
  {label: 'English', value:'en'},
  {label: 'Arabic', value:'ar'}
];

const Footer: React.FC = () => {
  return (
    <View style={globalStyles.footer}>
      <Text style={{
        color: "#fff",
        textAlign: "center",
        fontSize: 18
      }}>
        &copy;
        
      </Text>
    </View>
  )
}


const Header: React.FC = () => {
  const { gbr, goToGBR } = useStore();

  return (
    <View style={[globalStyles.header, globalStyles.container]}>
      <Pressable
        disabled={gbr}
        onPress={() => goToGBR()}
      >
        <Image
          style={{
            width: 64,
            height: 70,
          }}
          source={require('./resource/icons/HomeIcon.png')}
        />
      </Pressable>
    </View>
  )
}

const App: React.FC = () => {
  const { gbr } = useStore();
  const {t, i18n} = useTranslation();

  return (
    <View style={{ flex: 1 }}>
    <SwitchSelector
      options={options}
      hasPadding
      initial={0}
      onPress={(language) => {
        i18n.changeLanguage(language);
      }}></SwitchSelector>
      <ImageBackground
        style={globalStyles.backgroundImage}
        source={require('./resource/images/bg1080.jpeg')}
      >
      <Text style={{fontSize: 26, textAlign: 'center'}}>
        {t('Welcome')}
      </Text>
        <Header />
        {
          gbr ?
          <GBR /> :
          <Suspense fallback={null}>
            <FishView/>
          </Suspense>
        }
        <Footer />
      </ImageBackground>
    </View>
  );
};

export const globalStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 60,
  },

  homeTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#fff"
  },

  header: {
    flexDirection: "row",
    flexShrink: 1,
    marginBottom: 10,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },

  footer: {
    width: "100%",
    backgroundColor: "#006e9f",
    textAlign: "center",
    paddingVertical: 20,
  },
});

export default App;
