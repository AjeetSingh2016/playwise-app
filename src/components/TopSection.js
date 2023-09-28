import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Banner from "./TopSection/Banner";
import ProfileInfo from "./TopSection/ProfileInfo";

const ProfilePhoto = () => (
  <ImageBackground
    imageStyle={{ borderRadius: 20, resizeMode: "cover", height: "100%" }}
    source={{
      uri: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }}
    style={styles.profilePhoto}
  >
    <TouchableOpacity style={{padding: 10}}>
      <Image
        source={{
          uri: "https://img.icons8.com/glyph-neue/64/FFFFFF/create-new.png",
        }}
        style={styles.icon}
      />
    </TouchableOpacity>
  </ImageBackground>
);

const TopSection = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <ProfileInfo />
      <ProfilePhoto />
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    // height: responsiveHeight(50),
    flex: 3,
    width: "100%",
    backgroundColor: "red",
  },
  profilePhoto: {
    width: responsiveWidth(25),
    height: "25%",
    position: "absolute",
    bottom: 250,
    right: 145,
    borderRadius: 5,
    aspectRatio: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"

  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",

  },
});
