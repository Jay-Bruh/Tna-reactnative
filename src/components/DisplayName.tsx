import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DisplayNameProps {
  name: string;
  marginTop: number;
  firstNameFontSize?: number;
  secondNameFontSize?: number;
}

const DisplayName: React.FC<DisplayNameProps> = ({ name, marginTop, firstNameFontSize, secondNameFontSize }) => {
  const values = name.split(' ');

  return (
    values.length > 1 ?
    <View style={{ marginTop }}>
      <Text
        style={[
          styles.firstName,
          { fontSize: firstNameFontSize ? firstNameFontSize : 50 }
        ]}
      >{ values[0] }</Text>
      <Text
        style={[
          styles.secondName,
          { fontSize: secondNameFontSize ? secondNameFontSize : 55 }
        ]}
      >{ values[1] }</Text>

    </View> :
    <Text
      style={[
        styles.firstName,
        { fontSize: firstNameFontSize ? firstNameFontSize : 50 },
        { fontWeight: 'bold' }
      ]}
    >{ values[0] }</Text>
  )
}

const styles = StyleSheet.create({
  firstName: {
    color: 'white',
    fontSize: 50,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  secondName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 55,
    textTransform: 'uppercase',
    marginTop: -20
  }

});

export default DisplayName;