import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import InforHeader from './BottomSection/InforHeader';
import Bio from './BottomSection/Bio';
import Actions from './BottomSection/Actions';
import LastPlaceholder from './BottomSection/LastPlaceholder';

const BottomSection = () => {
  return (
    <View style={styles.container}>

      <View style={styles.postsContainer}>
      <InforHeader />
      <Bio />
      <Actions />
      <LastPlaceholder />
      </View>
    </View>
  )
}

export default BottomSection

const styles = StyleSheet.create({
    container:{
        flex: 2,
        width: "100%",
        backgroundColor: '#rgb(226, 226, 226)',
        // alignContent: "center"
        justifyContent: "center",
        alignItems: "center"
    },
    postsContainer:{
      width: "95%",
      height: "95%",
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "#EE9322",
      borderStyle: "solid",
      borderRadius: 10
    }
})