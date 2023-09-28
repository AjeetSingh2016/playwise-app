import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const LastPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.emphasizedText}>Heading</Text> this is a text placeholder and will replaced 250 Comments
      </Text>
      <Text style={styles.text}>
        <Text style={styles.emphasizedText}>Username</Text> this is the comment by this user!!
      </Text>
    </View>
  );
};

export default LastPlaceholder;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    padding: 5,
    justifyContent: "center",
  },
  Subcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    fontSize: responsiveFontSize(1.8),
    // color: "lightgrey",
  },
  emphasizedText: {
    fontWeight: "bold",
  },
});
