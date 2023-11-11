import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import TextFields from "./TextFields";

const ButtonComponent = () => {
  const [isImperial, setIsImperial] = useState("green");
  const [isMetric, setIsMetric] = useState("");
  const [bgColor, setBgColor] = useState("");
  return (
    <View style={styles.ButtonMainView}>
      
        <TouchableOpacity
         style={[
          styles.Button1InnerView,
          {
            backgroundColor: isImperial,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }
        ]}
          onPress={() => {
            if (isImperial == "green" || isImperial == "white") {
              setIsImperial("green");
              setIsMetric("white");
            }
          }}
        >
          <TextFields text={"Imperial"} fontSize={2.5} color={"black"} />
        </TouchableOpacity>
    
        <TouchableOpacity  style={[
          styles.Button1InnerView,
          {
            backgroundColor: isMetric,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            
          }
        ]}
          onPress={() => {
            if (isMetric == "" || isMetric == "white") {
              setIsMetric("green");
              setIsImperial("white");
            }
          }}
        >
          <TextFields text={"Metric"} fontSize={2.5} color={"black"} />
        </TouchableOpacity>
     
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  ButtonMainView: {
    flexDirection: "row",
    backgroundColor: "white",
    width: wp(84),
    borderRadius: 10,
    // marginTop: hp("1%"),
  },
  Button1InnerView: {
    width: wp("42"),
    height: hp("5"),
    justifyContent: "center",
  }
});
