import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { MyContext } from "../context/MyContext";


const INPUTFields = ({ placeHolder, width, height,field }) => {

  const {state,dispatch} = React.useContext(MyContext);

  const handleInput = (text) => {
    dispatch({type:field,payload:text})
  }

  return (
    // <View style={styles.textView}>
    <TextInput
      placeholder={placeHolder}
      // onChangeText={handleInput}
      // value={state.}
      style={{
        backgroundColor: "transparent",
        width: wp(width),
        height: hp(height),
        fontSize: hp("2.3"),
        color: "white",
        paddingHorizontal: wp("4"),
        marginBottom: hp(".9%"),
        borderRadius: 10,
        borderWidth: 1 / 2,
        borderColor: "white",
        borderStyle: "dotted",
      }}
    />
    // </View>
  );
};

export default INPUTFields;

// const styles = StyleSheet.create({
//     textStyle:{
//         fontSize:hp('3%'),
//         fontWeight:"bold",
//         color:"white",
//     }
// })
