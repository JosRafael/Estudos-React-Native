import React from "react";
import { StyleSheet, Text, View  } from "react-native";

export default function Picker() {
    return (
      <View style={styles.container}>
        <Picker 
        style={{width: '100%'}}
        >

        </Picker>
        <StatusBar style="auto" />
      </View>
    );
  }