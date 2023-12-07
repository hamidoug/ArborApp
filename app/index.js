import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import FixWhiteSpace from "../Components/_layout";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import HomeScreen from "../Components/HomeScreen";
import TaskOnePageOne from "../Components/TaskOnePageOne";
import TaskOnePageTwoandThree from "../Components/TaskOnePageTwoandThree";
import TaskOnePageFourandFive from "../Components/TaskOnePageFourandFive";
import TaskOnePageSix from "../Components/TaskOnePageSix";
import MiddleOfWorld from "../Components/MiddleOfWorld";
import PickFromStore from "../Components/PickFromStore";
import SeedAcquired from "../Components/SeedAcquired";
import EndOfWorld from "../Components/EndOfWorld";
import AvailableSeeds from "../Components/AvailableSeeds";
import MemoryDetails1 from "../Components/MemoryDetails1";
import MemoryDetails2 from "../Components/MemoryDetails2";
import MemoryDetails3 from "../Components/MemoryDetails3";
import MemoryDetails4 from "../Components/MemoryDetails4";
import MemoryDetails5 from "../Components/MemoryDetails5";
import MemoryDetails6 from "../Components/MemoryDetails6";
import EndOfPlanting from "../Components/EndOfPlanting";
import MiddleOfWorld2 from "../Components/MiddleOfWorld2";
import BeginningOfWorld from "../Components/BeginningOfWorld";
// const fetchFonts = () => {
//   return Font.loadAsync({
//     memoryfont: require("../assets/fonts/memoryfont.ttf"),
//   });
// };

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const ChosenSeed = {
  apple: require("../assets/Images/storeapple.png"),
  orange: require("../assets/Images/storeorange.png"),
  peach: require("../assets/Images/storepeach.png"),
  coconut: require("../assets/Images/storecoconut.png"),
  appletext: require("../assets/Images/appleseedacquiredtext.png"),
  orangetext: require("../assets/Images/orangeseedacquiredtext.png"),
  peachtext: require("../assets/Images/peachseedacquiredtext.png"),
  coconuttext: require("../assets/Images/coconutseedacquiredtext.png"),
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <FixWhiteSpace>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FirstPage" component={TaskOnePageOne} />
      <Stack.Screen name="SixthPage" component={TaskOnePageSix} />
      <Stack.Screen name="MiddleOfWorld" component={MiddleOfWorld} />
      <Stack.Screen name="MiddleOfWorld2" component={MiddleOfWorld2} />
      <Stack.Screen name="PickFromStore" component={PickFromStore} />
      <Stack.Screen name="SeedAcquired" component={SeedAcquired} />
      <Stack.Screen name="EndOfWorld" component={EndOfWorld} />
      <Stack.Screen name="AvailableSeeds" component={AvailableSeeds} />
      <Stack.Screen name="MemoryDetails1" component={MemoryDetails1} />
      <Stack.Screen name="MemoryDetails2" component={MemoryDetails2} />
      <Stack.Screen name="MemoryDetails3" component={MemoryDetails3} />
      <Stack.Screen name="MemoryDetails4" component={MemoryDetails4} />
      <Stack.Screen name="MemoryDetails5" component={MemoryDetails5} />
      <Stack.Screen name="MemoryDetails6" component={MemoryDetails6} />
      <Stack.Screen name="EndOfPlanting" component={EndOfPlanting} />
      <Stack.Screen name="FourandFive" component={TaskOnePageFourandFive} />
      <Stack.Screen name="TwoandThree" component={TaskOnePageTwoandThree} />
      <Stack.Screen name="BeginningOfWorld" component={BeginningOfWorld} />
    </Stack.Navigator>
    // </FixWhiteSpace>
  );
}

export default App;

// function TaskOnePageTwo({ navigation }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate("ThirdPage");
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigation]);
//   return (
//     <Pressable onPress={() => navigation.navigate("ThirdPage")}>
//       <Image
//         source={require("../assets/Images/task1brownbackground2.png")}
//         style={{
//           height: windowHeight * 1,
//           width: windowWidth * 1,
//           resizeMode: "cover",
//         }}
//       />
//       <Image
//         source={require("../assets/Images/cherriestext.png")}
//         style={{
//           position: "absolute",
//           top: windowHeight * 0.13,
//           left: windowWidth * 0.15,
//           height: windowHeight * 0.055, // Adjust the height as needed
//           width: windowWidth * 0.7, // Adjust the width as needed
//           resizeMode: "cover",
//         }}
//       />
//       <Image
//         source={require("../assets/Images/layerforcherrymemory2.png")}
//         style={{
//           position: "absolute",
//           top: windowHeight * 0.27,
//           left: windowWidth * 0.15,
//           height: windowHeight * 0.35, // Adjust the height as needed
//           width: windowWidth * 0.7, // Adjust the width as needed
//         }}
//       />
//       <Image
//         source={require("../assets/Images/bigcherry.png")}
//         style={{
//           position: "absolute",
//           top: windowHeight * 0.27,
//           left: windowWidth * 0.02,
//           height: windowHeight * 0.4, // Adjust the height as needed
//           width: windowWidth * 0.8, // Adjust the width as needed
//         }}
//       />
//       <Image
//         source={require("../assets/Images/youhaveamemorytext.png")}
//         style={{
//           position: "absolute",
//           top: windowHeight * 0.7,
//           left: windowWidth * 0.1,
//           height: windowHeight * 0.155, // Adjust the height as needed
//           width: windowWidth * 0.8, // Adjust the width as needed
//         }}
//       />
//     </Pressable>
//   );
// }

// function TaskOnePageThree({ navigation }) {
//   return (
//     <View style={{ height: "100%" /*flex: 1*/, display: "flex" }}>
//       <ImageBackground
//         source={require("../assets/Images/task1brownbackground2.png")}
//         style={{ flex: 1, resizeMode: "cover" }}
//       >
//         <ScrollView contentContainerStyle={{ padding: 10 }}>
//           <View
//             style={{
//               marginTop: "25%",
//               width: "19%",
//               height: windowHeight * 0.078125,
//               flex: 1,
//             }}
//           >
//             <Image
//               source={require("../assets/Images/xbutton.png")}
//               style={[
//                 {
//                   width: "100%",
//                   height: windowHeight * 0.09,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>

//           <View
//             style={{
//               marginTop: "5%",
//               marginLeft: 2,
//               height: windowHeight * 0.15625,
//               width: "100%",
//             }}
//           >
//             <Image
//               source={require("../assets/Images/beachdaytext.png")}
//               style={[
//                 {
//                   width: "100%",
//                   height: windowHeight * 0.15625,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>

//           <ImageBackground
//             source={require("../assets/Images/layerforcherrymemory2.png")}
//             style={{
//               width: "89%",
//               marginLeft: "10%",
//               marginTop: "3%",
//             }}
//           >
//             <View style={{ paddingLeft: "5%" }}>
//               <Image
//                 source={require("../assets/Images/beachdaypic.png")}
//                 style={{ resizeMode: "contain", paddingTop: "93%" }}
//               />
//             </View>
//           </ImageBackground>
//           <View
//             style={{
//               height: windowHeight * 0.067,
//               marginTop: "10%",
//               paddingLeft: "10%",
//             }}
//           >
//             <Image
//               source={require("../assets/Images/descriptiontext1.png")}
//               style={[
//                 {
//                   width: "90%",
//                   height: windowHeight * 0.067,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>
//           <ImageBackground
//             source={require("../assets/Images/layerforcherrymemory2.png")}
//             style={{
//               marginLeft: "10%",
//               marginTop: "3%",
//               height: windowHeight * 0.357,
//               width: "89%",
//             }}
//           >
//             <View style={{ paddingLeft: "7%", paddingTop: "8%" }}>
//               <Image
//                 source={require("../assets/Images/descriptiontext2.png")}
//                 style={{ resizeMode: "contain" }}
//               />
//             </View>
//           </ImageBackground>

//           <View
//             style={{
//               height: windowHeight * 0.078125,
//               marginTop: "7%",
//             }}
//           >
//             <Image
//               source={require("../assets/Images/peopletext1.png")}
//               style={[
//                 {
//                   width: "100%",
//                   height: windowHeight * 0.067,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>

//           <ImageBackground
//             source={require("../assets/Images/layerforcherrymemory2.png")}
//             style={{
//               marginLeft: "10%",
//               marginTop: "3%",
//               height: windowHeight * 0.357,
//               width: "90%",
//             }}
//           >
//             <View style={{ paddingLeft: "20%", paddingTop: "20%" }}>
//               <Image
//                 source={require("../assets/Images/peopletext2.png")}
//                 style={{ resizeMode: "contain" }}
//               />
//             </View>
//           </ImageBackground>

//           {/* borderWidth: 2,
//           borderColor: "black", */}
//           <View
//             style={{
//               height: windowHeight * 0.078125,
//               marginTop: "7%",
//               paddingLeft: "15%",
//             }}
//           >
//             <Image
//               source={require("../assets/Images/emotionstext1.png")}
//               style={[
//                 {
//                   width: "80%",
//                   height: windowHeight * 0.067,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>

//           <ImageBackground
//             source={require("../assets/Images/layerforcherrymemory2.png")}
//             style={{
//               marginLeft: "10%",
//               marginTop: "3%",
//               height: windowHeight * 0.357,
//               width: "89%",
//             }}
//           >
//             <View style={{ paddingLeft: "7%", paddingTop: "8%" }}>
//               <Image
//                 source={require("../assets/Images/emotionstext2.png")}
//                 style={{ resizeMode: "contain" }}
//               />
//             </View>
//           </ImageBackground>
//           <View
//             style={{
//               height: windowHeight * 0.078125,
//               marginTop: "7%",
//               paddingLeft: "15%",
//             }}
//           >
//             <Image
//               source={require("../assets/Images/musictext1.png")}
//               style={[
//                 {
//                   width: "80%",
//                   height: windowHeight * 0.067,
//                   resizeMode: "contain",
//                 },
//               ]}
//             />
//           </View>
//           <ImageBackground
//             source={require("../assets/Images/layerforcherrymemory3.png")}
//             style={{
//               marginLeft: "10%",
//               marginTop: "3%",
//               height: windowHeight * 0.246,
//               width: "89%",
//             }}
//           >
//             <View style={{ paddingLeft: "1%", paddingTop: "20%" }}>
//               <Image
//                 source={require("../assets/Images/musictext2.png")}
//                 style={{ resizeMode: "contain" }}
//               />
//             </View>
//           </ImageBackground>
//           <ImageBackground
//             source={require("../assets/Images/layerforeatbutton.png")}
//             style={{
//               marginLeft: "25%",
//               marginTop: "10%",
//               marginBottom: "7%",
//               height: windowHeight * 0.167,
//               width: "70%",
//             }}
//           >
//             {/* <Pressable onPress={() => navigation.navigate("FourthPage")}> */}
//             <Pressable onPress={() => navigation.navigate("FourandFive")}>
//               <View style={{ paddingLeft: "17%", paddingTop: "17%" }}>
//                 <Image
//                   source={require("../assets/Images/eattext.png")}
//                   style={{ resizeMode: "contain" }}
//                 />
//               </View>
//             </Pressable>
//           </ImageBackground>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// }

// const myImages = ["Image1", "Image2", "Image3", "Image4"];
{
  /* {myImages.map(function (image) => {
            return(
              <Image
              source={require(image.filepath)}
              style={{
                position: "absolute",
                top: windowHeight * 0.08,
                left: windowWidth * 0.06,
                height: windowHeight * 0.07, // Adjust the height as needed
                width: windowWidth * 0.16, // Adjust the width as needed
              }}
            />
            )
          })} */
}

// function TaskOnePageFour({ navigation }) {
//   return (
//     <Pressable
//       style={{ height: "100%", width: "100%" }}
//       onPress={() => navigation.navigate("FifthPage")}
//     >
//       <ImageBackground
//         source={require("../assets/Images/task1tanbackground.png")}
//         style={{ flex: 1, resizeMode: "cover" }}
//       >
//         <View>
//           <Image
//             source={require("../assets/Images/xbutton.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.08,
//               left: windowWidth * 0.06,
//               height: windowHeight * 0.07, // Adjust the height as needed
//               width: windowWidth * 0.16, // Adjust the width as needed
//             }}
//           />

//           <Image
//             source={require("../assets/Images/bigmaincharacter.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.29,
//               left: windowWidth * 0.18,
//               height: windowHeight * 0.3, // Adjust the height as needed
//               width: windowWidth * 0.65, // Adjust the width as needed
//             }}
//           />
//           <Image
//             source={require("../assets/Images/bigcherry.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.412,
//               left: windowWidth * 0.12,
//               height: windowHeight * 0.15, // Adjust the height as needed
//               width: windowWidth * 0.3, // Adjust the width as needed
//             }}
//           />
//           <Image
//             source={require("../assets/Images/healthbar1.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.65,
//               left: windowWidth * 0.21,
//               height: windowHeight * 0.05, // Adjust the height as needed
//               width: windowWidth * 0.6, // Adjust the width as needed
//             }}
//           />
//           <Image
//             source={require("../assets/Images/taptext.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.78,
//               left: windowWidth * 0.38,
//               height: windowHeight * 0.031, // Adjust the height as needed
//               width: windowWidth * 0.24, // Adjust the width as needed
//             }}
//           />
//         </View>
//         {/* <StatusBar style="auto" /> */}
//       </ImageBackground>
//     </Pressable>
//   );
// }

// function TaskOnePageFive({ navigation }) {
//   return (
//     <ImageBackground
//       source={require("../assets/Images/task1tanbackground.png")}
//       style={{ flex: 1, resizeMode: "cover" }}
//     >
//       <View>
//         <Image
//           source={require("../assets/Images/bigmaincharacterhappy.png")}
//           style={{
//             position: "absolute",
//             top: windowHeight * 0.212,
//             left: windowWidth * 0.095,
//             height: windowHeight * 0.4, // Adjust the height as needed
//             width: windowWidth * 0.87, // Adjust the width as needed
//           }}
//         />

//         <Image
//           source={require("../assets/Images/healthbar2.png")}
//           style={{
//             position: "absolute",
//             top: windowHeight * 0.52,
//             left: windowWidth * 0.2,
//             height: windowHeight * 0.2, // Adjust the height as needed
//             width: windowWidth * 0.6, // Adjust the width as needed
//           }}
//         />
//         <Pressable onPress={() => navigation.navigate("SixthPage")}>
//           <Image
//             source={require("../assets/Images/doneeatingbox.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.75,
//               left: windowWidth * 0.29,
//               height: windowHeight * 0.11, // Adjust the height as needed
//               width: windowWidth * 0.45, // Adjust the width as needed
//             }}
//           />
//           <Image
//             source={require("../assets/Images/doneeatingtext.png")}
//             style={{
//               position: "absolute",
//               top: windowHeight * 0.785,
//               left: windowWidth * 0.39,
//               height: windowHeight * 0.035, // Adjust the height as needed
//               width: windowWidth * 0.23, // Adjust the width as needed
//             }}
//           />
//         </Pressable>
//       </View>
//     </ImageBackground>
//     //  <StatusBar style="auto" />
//   );
// }
