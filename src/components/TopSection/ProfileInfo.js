import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  Pressa,
} from "react-native-responsive-dimensions";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";

const iconsArray = [
  { icon: "https://img.icons8.com/ios-filled/50/ee9322/facebook-new.png" },
  { icon: "https://img.icons8.com/ios-filled/50/ee9322/discord-logo.png" },
  { icon: "https://img.icons8.com/ios-filled/50/ee9322/youtube-play.png" },
  { icon: "https://img.icons8.com/ios-filled/50/ee9322/instagram-new.png" },
  { icon: "https://img.icons8.com/ios-filled/50/ee9322/linkedin.png" },
];

const onPressFunction = () => {
  console.log("Press Function");
};

const Icons = ({ source }) => (
  <TouchableOpacity style={styles.overlayContainer}>
    <Image
      source={{
        uri: source,
      }}
      style={{ width: 30, height: 30, resizeMode: "cover" }}
    />
  </TouchableOpacity>
);

const VerticalLine = ({ color, height }) => (
  <View
    style={{
      backgroundColor: color,
      width: 1.5,
      height: height,
      borderRadius: 10,
      borderTopEndRadius: 10,
    }}
  ></View>
);

const SocialIcon = () => (
  <View style={styles.SocialIconContainer}>
    {iconsArray.map((item, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <VerticalLine color={"#EE9322"} height={"50%"} />}
        <Icons source={item.icon} />
      </React.Fragment>
    ))}
  </View>
);

const Metrics = ({followers, following }) => (
  <View style={styles.metricContainer}>
    <View style={styles.metricSubContainer}>
      <Text style={{ fontWeight: "500" }}>{followers}</Text>
      <Text style={{ color: "grey", fontSize: responsiveFontSize(1.5) }}>
        Followers
      </Text>
    </View>

    <VerticalLine color={"black"} height={"60%"} />

    <View style={styles.metricSubContainer}>
      <Text style={{ fontWeight: "500" }}>{following}</Text>
      <Text style={{ color: "grey", fontSize: responsiveFontSize(1.5) }}>
        Following
      </Text>
    </View>

    <VerticalLine color={"black"} height={"60%"} />

    <View style={styles.metricSubContainer}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/ee9322/footman.png",
        }}
        style={styles.icon}
      />
      <Text style={{ color: "grey", fontSize: responsiveFontSize(1.5) }}>
        Clan
      </Text>
    </View>
  </View>
);

const SectionButtons = ({ isActive, title }) => {
  const textStyle = isActive
    ? styles.sectionButtonActive
    : styles.sectionButtonNotActive;

  return (
    <TouchableOpacity style={styles.sectionButtons} onPress={onPressFunction}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Sections = () => (
  <View style={styles.sectionsContainer}>
    <SectionButtons isActive={true} title={"Posts"} />
    <SectionButtons isActive={false} title={"Social"} />
    <SectionButtons isActive={false} title={"About"} />
    <SectionButtons isActive={false} title={"Gallery"} />
    <SectionButtons isActive={false} title={"Device"} />
  </View>
);

const ProfileInfo = () => {

  const dispatch = useDispatch();
  const [isFollow, setIsFollow] = useState(false);
  const { loading, profileData, metricsData } = useSelector(
    (state) => state.FetchData
  );

  const [followers, setFollowers] = useState(metricsData.followers)

  // const followButtonStyle = is

  const followButton = () => {
    if(isFollow){
      setFollowers(followers - 1);
    }else{
      setFollowers(followers + 1);
    }
    setIsFollow(!isFollow);
  };

  useEffect(() => {


  }, [profileData, metricsData])
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.subHeading}>{profileData.username}</Text>
        <Text style={styles.subHeading}>{profileData.bio}</Text>
      </View>

      <TouchableOpacity
        style={styles.followButton}
        onPress={followButton}
      >
        <Text style={{ color: "white" }}>
          {isFollow ? "Un Follow" : "Follow"}
        </Text>
      </TouchableOpacity>

      <SocialIcon />

      <Metrics followers={followers} following={metricsData.following} />

      <Sections />
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  name: {
    color: "#EE9322",
    fontWeight: "500",
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
  },
  subHeading: {
    color: "grey",
    fontSize: responsiveFontSize(1.5),
    textAlign: "center",
  },
  SocialIconContainer: {
    width: "80%",
    backgroundColor: "#f8ddef8a",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "15%",
    alignItems: "center",
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  followButton: {
    backgroundColor: "#EE9322",
    color: "white",
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  metricContainer: {
    width: "80%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "felx-end",
  },
  metricSubContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionsContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red"
  },
  sectionButtons: {
    width: "15%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionButtonActive: {
    color: "#EE9322",
    textDecorationLine: "underline",
    fontSize: responsiveFontSize(2),
    // fontWeight: "500",
    fontWeight: "bold",
  },
  sectionButtonNotActive: {
    color: "#f1a74dcc",
  },
});
