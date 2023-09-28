import React from "react";
import { View, Text, StyleSheet, StatusBar  } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.first}></View>

      <View style={styles.second}>
      <Text style={{fontSize: responsiveFontSize(3)}}>PLAYWISE</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    backgroundColor: "whitesmoke",
    width: "100%",
    height: 50,
    // marginBottom: 5, 
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "orange",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  first:{
    width: "50%",
    height: "100%",
    backgroundColor: "orange",
  },
  second:{
    width: "50%",
     justifyContent: "center",
     alignItems: "center",
  },
});

export default Header;
