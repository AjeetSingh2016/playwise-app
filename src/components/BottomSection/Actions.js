import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Actions = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={[styles.section, styles.firstSection]}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/FFFFFF/filled-like.png"}}
          style={styles.icon}
        />
        <Text style={styles.firstText}>500 Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.section, styles.remainingSections]}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/speech-bubble.png" }}
          style={styles.icon}
        />
        <Text style={styles.text}>Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.section, styles.remainingSections]}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" }}
          style={styles.icon}
        />
        <Text style={styles.text}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.section, styles.remainingSections]}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/share--v1.png" }}
          style={styles.icon}
        />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "justify-content",
    // backgroundColor: "lightgray",
    width: "100%",
    height: "15%",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
    // paddingHorizontal: 10,
  },
  firstSection: {
    // flex: 3, // 30% of the width
    backgroundColor: "#EE9322",
    width: "30%",
    borderStyle: "solid",
    borderTopWidth: 1.5,
    borderColor: "#EE9322",
    paddingLeft: 5,
  },
  remainingSections: {
    // flex: 1, // Each occupies 70% / 3 = 23.33% of the width
    width: "23.33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: "#EE9322",
    paddingLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  text: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: "bold",
    color: "black",
  },
  firstText:{
    fontSize: responsiveFontSize(1.4),
    fontWeight: "bold",
    color: "white",
  }
});

export default Actions;
