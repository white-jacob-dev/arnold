import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Arnold<Text style={styles.period}>.</Text></Text>
      <Text style={styles.subheader}>The simple gym tracker</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '-20%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 72,
    fontFamily: 'Josefin Sans', 
    fontWeight: '800',
  },
  period: {
    marginLeft: '-5%',
    color: 'red',
    fontSize: 150,
    fontFamily: 'Josefin Sans', 
    fontWeight: 'bold',
  },
  subheader: {
    marginTop: '-5%',
    color: 'black',
    fontSize: 30,
    fontFamily: 'Ludo',
    fontWeight: '200'
  }

});
