import { StyleSheet, View,Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { Text } from '@rneui/themed';
const TitleText = () => {
  return (
    <View style={styles.textView}>
      <Text style={styles.textStyle}>Unit Converter</Text>
    </View>
  )
}

export default TitleText

const styles = StyleSheet.create({
    textView:{
        height:hp('10%'),
        width:wp('100%'),
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle:{
        fontSize:hp('3%'),
        fontWeight:"bold",
        color:"white",
    }
})