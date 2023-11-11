import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HookScreen from "./src/screens/HookScreen";
import MobxScreen from "./src/screens/MobxScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { widthPercentageToDP } from "react-native-responsive-screen";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MyProvider } from "./src/context/MyContext";
import { Provider } from "mobx-react";
import myMobxStore from "./src/context/MyMobX";

const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     // <SafeAreaProvider style={{}}>
//     <MyProvider>
//       <Provider myMobxStore={myMobxStore}>
//         <NavigationContainer>
//           <Tab.Navigator
//             initialRouteName="Hook"
//             sceneContainerStyle={{
//               backgroundColor: "#000",
//               justifyContent: "center"
//             }}
//             screenOptions={{
//               headerShown: false,
//               // headerShadowVisible: false,
//               tabBarActiveBackgroundColor: "darkgreen",
//               tabBarIconStyle: {
//                 display: "none"
//               },
//               tabBarLabelStyle: {
//                 fontSize: widthPercentageToDP("5%"),
//                 alignSelf:"center",
//                 color: "white",
//               },
//               tabBarStyle: {
//                 backgroundColor: "green",
//                 borderTopWidth: 1,
//                 height: widthPercentageToDP("15%"),
//                 justifyContent: "center",
//                 alignItems: "center"
//               }
//             }}
//           >
//             <Tab.Screen
//               name="Hook"
//               component={HookScreen}
//               options={{ title: "Hook", tabBarAllowFontScaling: true }}
//             ></Tab.Screen>
//             <Tab.Screen
//               name="Mobx"
//               component={MobxScreen}
//               options={{ title: "MobX" }}
//             />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </Provider>
//     </MyProvider>
//     // </SafeAreaProvider>
//     // <StatusBar style="light" />
//   );
// }

export default function App() {
  return (
    <MyProvider>
      <Provider myMobxStore={myMobxStore}>
        <NavigationContainer>
          <KeyboardAvoidingView
          enabled
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <Tab.Navigator
              initialRouteName="Hook"
              sceneContainerStyle={{
                backgroundColor: "#000",
                justifyContent: "center"
              }}
              screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: "darkgreen", // or any other color
                tabBarIconStyle: {
                  display: "none"
                },
                tabBarLabelStyle: {
                  fontSize: widthPercentageToDP("6%"),
                  alignSelf: "center",
                  color: "white",
                },
                tabBarStyle: {
                  backgroundColor: "black",
                  borderTopWidth: 1,
                  bottom:1,
                  height: widthPercentageToDP("13%"),
                  justifyContent: "center",
                  alignItems: "center"
                }
              }}
            >
              <Tab.Screen
                name="Hook"
                component={HookScreen}
                options={{ title: "Hook", tabBarAllowFontScaling: true }}
              ></Tab.Screen>
              <Tab.Screen
                name="Mobx"
                component={MobxScreen}
                options={{ title: "MobX" }}
              />
            </Tab.Navigator>
          </KeyboardAvoidingView>
        </NavigationContainer>
      </Provider>
    </MyProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
    // paddingBottom: 100
  }
});
