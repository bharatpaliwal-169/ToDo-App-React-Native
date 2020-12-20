import React from 'react';
import { View , Text , StyleSheet } from 'react-native';


export default function Header() {
  return (
      <View style={styles.header} >
        <Text style={styles.text}> TODO APP </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header:{
    height: 80,
    paddingTop:30,
    backgroundColor:'coral'
  },
  text:{
    textAlign: 'center',
    color: "#f1f1f1",
    fontWeight: 'bold',
    fontSize:24
  }
})
