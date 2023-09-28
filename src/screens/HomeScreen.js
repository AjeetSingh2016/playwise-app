import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, follow, unFollow } from "../store/asyncMethods/UserMethods";
import axios from "axios";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import BottomSection from "../components/BottomSection";


const HomeScreen = () => {
  const dispatch = useDispatch();

  // temp user id
  const userId = 1;

  // Function to handle the "Follow" button click
  const handleFollowClick = () => {
    dispatch(follow(userId));
  };

  // Function to handle the "Unfollow" button click
  const handleUnfollowClick = () => {
    dispatch(unFollow(userId));
  };

  // getting values of our state from reducers
  const { loading, profileData, metricsData } = useSelector(
    (state) => state.FetchData
  );

  useEffect(() => { }, [profileData, metricsData]);

  if (profileData && metricsData) {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white" 
          barStyle="dark-content" 
        />
        <Header />
        <TopSection />
        <BottomSection />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight + 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default HomeScreen;
