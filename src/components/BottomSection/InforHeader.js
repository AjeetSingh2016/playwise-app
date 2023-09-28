import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const InforHeader = () => {
  const follow =
    "https://img.icons8.com/external-outline-deni-mao/64/external-chat-user-interface-advertise-friendly-outline-deni-mao.png";

  const fourSquares = "https://img.icons8.com/windows/32/four-squares.png";

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.icon}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View
            style={{ width: "50%", backgroundColor: "#EE9322", paddingLeft: 10 }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>UserName</Text>
            <Text style={{ color: "white", fontSize: responsiveFontSize(1.3) }}>
              35 min back
            </Text>
          </View>

          <View
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              borderBottomWidth: 2,
              borderColor: "#EE9322",
              borderStyle: "solid",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: follow,
                }}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              />
              <Text
                style={{ fontSize: responsiveFontSize(1.8), fontWeight: "400" }}
              >
                Follow
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={{
                  uri: fourSquares,
                }}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.subInfo}>
          <Text style={{ fontSize: responsiveFontSize(1.5), letterSpacing: 3 }}>
            OFFLINE
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InforHeader;

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
    // aspectRatio: "1",
  },
  container: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    width: "20%",
    height: "100%",
    backgroundColor: "#EE9322",
    display: "flex",
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  infoContainer: {
    width: "80%",
    height: "100%",
    display: "flex",
  },
  info: {
    // backgroundColor: "orange",
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "row",
  },
  subInfo: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 5,
  },
});
