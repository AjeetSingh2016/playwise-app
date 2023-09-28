import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Linking } from "react-native";

const Bio = () => {
  const openURL = () => {
    const url = "https://www.youtube.com/live/uFyA6WMSH68?si=s4F91uFETEDWe9Kf";
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: responsiveFontSize(1.8) }}>
        Hi, guys my new video is out on my youtube channel. Please view, like,
        share and comment
      </Text>
      <TouchableOpacity onPress={() => openURL("https://www.example.com")}>
        <Text style={styles.link}>https://www.youtube.com/live/uFyA6WMSH68?si=s4F91uFETEDWe9Kf</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bio;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    // backgroundColor: "pink",
    padding: 5,
  },
  link: {
    fontSize: responsiveFontSize(1.6),
    color: '#EE9322',
    textDecorationLine: 'underline',
  },
});
