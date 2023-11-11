import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import TitleText from "../components/TitleText";
// import INPUTFields from "../components/INPUTFields";
import TextFields from "../components/TextFields";
// import InputComponent from "../components/InputComponent";
// import ButtonComponent from "../components/ButtonComponent";
import { MyContext } from "../context/MyContext";

const HookScreen = () => {
  const { state, dispatch } = React.useContext(MyContext);

  const [isImperial, setIsImperial] = useState("green");
  const [isMetric, setIsMetric] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [changeMethod, setChangeMethod] = useState(false);
  const handleInput = (type, value) => {
    dispatch({ type: type, payload: value });
  };

  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior="padding"
      style={styles.keyBoardStyle}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <TitleText />

          {/* lb */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems:"center",
              width: wp(84),
              marginBottom: hp("1")
            }}
          >
            <TextInput
              placeholder={""}
              onChangeText={(text) => handleInput("SET_WEIGHT", text)}
              value={state.weight}
              style={{
                backgroundColor: "transparent",
                width: wp(70),
                height: hp(4),
                fontSize: hp("2.3"),
                color: "white",
                paddingHorizontal: wp("4"),
                marginBottom: hp(".9%"),
                borderRadius: 10,
                borderWidth: 1 / 2,
                borderColor: "white",
                borderStyle: "dotted"
              }}
            />
            {/* <INPUTFields placeHolder={""} width={70} height={4} /> */}
            <Text style={{ color: "white" }}>lb</Text>
          </View>
      {changeMethod ? (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems:"center",
              width: wp("84")
            }}
          >
            {/* m */}
            <TextInput
              placeholder={""}
              onChangeText={(text) => handleInput("SET_HEIGHT_METER", text)}
              value={state.heightInMeter}
              style={{
                backgroundColor: "transparent",
                width: wp(70),
                height: hp(4),
                fontSize: hp("2.3"),
                color: "white",
                paddingHorizontal: wp("4"),
                marginBottom: hp(".9%"),
                borderRadius: 10,
                borderWidth: 1 / 2,
                borderColor: "white",
                borderStyle: "dotted"
              }}
            />

            {/* <INPUTFields placeHolder={""} width={70} height={4} /> */}
            <Text style={{ color: "white" }}>m</Text>
          </View>
        </>
      ) : (
        <>
         
          <View style={{flexDirection:'row', alignItems:"center",justifyContent:"center",width:wp(84)}}>
           <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems:"center",
              width:wp(42)
            }}
          >
            <TextInput
              placeholder={""}
              onChangeText={(text) => handleInput("SET_HEIGHT_INCH", text)}
              value={state.heightInInch}
              style={{
                backgroundColor: "transparent",
                width: wp(30),
                height: hp(4),
                fontSize: hp("2.3"),
                color: "white",
                paddingHorizontal: wp("4"),
                marginBottom: hp(".9%"),
                borderRadius: 10,
                borderWidth: 1 / 2,
                borderColor: "white",
                borderStyle: "dotted"
              }}
            /> 
            <Text style={{ color: "white" }}>in</Text>
          </View> 
           <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems:"center",
              width:wp(42)
            }}
          >
            <TextInput
              placeholder={""}
              onChangeText={(text) => handleInput("SET_HEIGHT_FEET", text)}
              value={state.heightInFeet}
              style={{
                backgroundColor: "transparent",
                width: wp(30),
                height: hp(4),
                fontSize: hp("2.3"),
                color: "white",
                paddingHorizontal: wp("4"),
                marginBottom: hp(".9%"),
                borderRadius: 10,
                borderWidth: 1 / 2,
                borderColor: "white",
                borderStyle: "dotted"
              }}
            /> 
            <Text style={{ color: "white" }}>ft</Text>
          </View> 

          </View>

        </>
      )}

      {/* button wala kam */}

      {/* <ButtonComponent /> */}
      <View style={styles.ButtonMainView}>
        <TouchableOpacity
          style={[
            styles.Button1InnerView,
            {
              backgroundColor: isImperial,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10
            }
          ]}
          onPress={() => {
            if (isImperial == "green" || isImperial == "white") {
              setIsImperial("green");
              setIsMetric("white");
              setChangeMethod(false)
            }
          }}
        >
          <TextFields text={"Imperial"} fontSize={2.5} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.Button1InnerView,
            {
              backgroundColor: isMetric,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10
            }
          ]}
          onPress={() => {
            if (isMetric == "" || isMetric == "white") {
              setIsMetric("green");
              setIsImperial("white");
              setChangeMethod(true)
            }
          }}
        >
          <TextFields text={"Metric"} fontSize={2.5} color={"black"} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonOutStyle} onPress={()=>{
            dispatch({ type: 'SAVE_DATA', payload: state });
        }}>
          <TextFields text={"Submit"} fontSize={2.1} color={"white"} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HookScreen;

const styles = StyleSheet.create({
  keyBoardStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    top: hp('20%'),
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("84"),
    marginTop: hp("2%")
  },
  buttonOutStyle: {
    backgroundColor: "green",
    height: hp("4%"),
    width: wp("40"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  ButtonMainView: {
    flexDirection: "row",
    backgroundColor: "white",
    width: wp(84),
    borderRadius: 10,
    marginTop: hp("1%")
  },
  Button1InnerView: {
    width: wp("42"),
    height: hp("5"),
    justifyContent: "center"
  }
});
