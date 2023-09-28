import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Banner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/03/22/06/57/game-background-4956017_960_720.jpg",
        }}
        style={styles.image}
      >
        <TouchableOpacity style={styles.overlayContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/glyph-neue/64/FFFFFF/create-new.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: "40%",
    backgroundColor: "pink",
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 10, // Adjust as needed for positioning
    right: 10, // Adjust as needed for positioning
    padding: 5, // Adjust as needed for padding
    borderRadius: 50, // Makes it a circle (adjust as needed)
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    // backgroundColor: "white",
  },
});
