import { StyleSheet, View,Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { Text } from '@rneui/themed';
const TextFields = ({text,fontSize,color}) => {

  return (
     
      <Text style={{
            fontSize:hp(fontSize),
            fontWeight:"400",
            color:color,
            textAlign:"center"
      }}>{text}</Text>
   
  )
}

export default TextFields

const styles = StyleSheet.create({
    textView:{
        // height:hp('10%'),
        // width:wp('100%'),
        // justifyContent:"center",
        
    }
})