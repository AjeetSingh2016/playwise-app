import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState  } from 'react'
import { fetchData } from './store/asyncMethods/UserMethods';
import HomeScreen from './screens/HomeScreen';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // using async methods for fetching api or just making any api calls
    const userId = 1;
    dispatch(fetchData(userId));
  }, [])
  

  return (
    <HomeScreen />
  )
}

export default Home

const styles = StyleSheet.create({})