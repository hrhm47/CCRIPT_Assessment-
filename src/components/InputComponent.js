import { StyleSheet, Text, View } from "react-native";
import React from "react";
import INPUTFields from "./INPUTFields";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

const InputComponent = ({width,text,field}) => {

   
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: wp(width),
          marginBottom: hp("1")
        }}
      >
        <INPUTFields placeHolder={""} width={70} height={4} />
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: wp("84")
        }}
      >
        <INPUTFields placeHolder={""} width={70} height={4} />
        <Text style={{ color: "white" }}>m</Text>
      </View>
    </>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
