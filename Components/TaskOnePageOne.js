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
import * as Font from "expo-font";
import { AppLoading } from "expo";
import FixWhiteSpace from "./_layout";

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

export default function TaskOnePageOne({ navigation }) {
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/grassbackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Image
          source={require("../assets/Images/grasset01bush.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.185,
            left: windowWidth * 0.25,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.16,
            left: windowWidth * 0.65,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset10singlerock.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.11,
            left: windowWidth * 0,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset10singlerock.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.11,
            left: windowWidth * 0.14,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset13doublerock.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.1,
            left: windowWidth * 0.28,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/topendofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.15,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/verticalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.25,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/verticalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.35,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/middlecrossofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/verticalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.55,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/verticalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.65,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/verticalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.75,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/bottomendofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.85,
            left: windowWidth * 0.46,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/horizontalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.34,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/leftendofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.21,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.2, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/horizontalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.61,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/horizontalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.71,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/horizontalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.81,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/horizontalmiddleofpath.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.45,
            left: windowWidth * 0.91,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset10singlerock.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.06,
            left: windowWidth * 0.37,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset13doublerock.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.02,
            left: windowWidth * 0.37,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0,
            left: windowWidth * 0,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0,
            left: windowWidth * 0.13,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0,
            left: windowWidth * 0.23,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.07,
            left: windowWidth * 0,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.07,
            left: windowWidth * 0.13,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.05,
            left: windowWidth * 0.23,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.035,
            left: windowWidth * 0.08,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.08,
            left: windowWidth * 0.08,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset19lotofwater.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.08,
            left: windowWidth * 0.175,
            height: windowHeight * 0.05, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../assets/Images/oak.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.28,
            left: windowWidth * 0.23,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/acacia.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.28,
            left: windowWidth * 0.65,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.175, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/acacia.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.38,
            left: windowWidth * 0.25,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.175, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset17thintreemoreleaves.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.366,
            left: windowWidth * 0.65,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/Pine.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.44,
            left: windowWidth * 0.03,
            height: windowHeight * 0.104, // Adjust the height as needed
            width: windowWidth * 0.14, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/maincharacter.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.43,
            left: windowWidth * 0.43,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Pressable onPress={() => navigation.navigate("MiddleOfWorld")}>
          <Image
            source={require("../assets/Images/arrow0right.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.45,
              left: windowWidth * 0.85,
              height: windowHeight * 0.1, // Adjust the height as needed
              width: windowWidth * 0.1, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Image
          source={require("../assets/Images/grasset21townsign.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.417,
            left: windowWidth * 0.815,
            height: windowHeight * 0.06, // Adjust the height as needed
            width: windowWidth * 0.13, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/towntext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.425,
            left: windowWidth * 0.82,
            height: windowHeight * 0.03, // Adjust the height as needed
            width: windowWidth * 0.12, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        {/* <Pressable onPress={() => navigation.navigate("SecondPage")}> */}
        <Pressable onPress={() => navigation.navigate("TwoandThree")}>
          <Image
            source={require("../assets/Images/oak.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.57,
              left: windowWidth * 0.24,
              height: windowHeight * 0.09, // Adjust the height as needed
              width: windowWidth * 0.18, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>

        {/* <Pressable onPress={() => navigation.navigate("SecondPage")}> */}
        <Pressable onPress={() => navigation.navigate("TwoandThree")}>
          <Image
            source={require("../assets/Images/cherrynotification.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.48,
              left: windowWidth * 0.25,
              height: windowHeight * 0.09, // Adjust the height as needed
              width: windowWidth * 0.15, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Image
          source={require("../assets/Images/cherrysmall.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.59,
            left: windowWidth * 0.27,
            height: windowHeight * 0.02, // Adjust the height as needed
            width: windowWidth * 0.04, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/cherrysmall.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.58,
            left: windowWidth * 0.334,
            height: windowHeight * 0.02, // Adjust the height as needed
            width: windowWidth * 0.04, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/cherrysmall.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.603,
            left: windowWidth * 0.315,
            height: windowHeight * 0.02, // Adjust the height as needed
            width: windowWidth * 0.04, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/Pine.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.55,
            left: windowWidth * 0.66,
            height: windowHeight * 0.104, // Adjust the height as needed
            width: windowWidth * 0.14, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/Pine.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.69,
            left: windowWidth * 0.25,
            height: windowHeight * 0.104, // Adjust the height as needed
            width: windowWidth * 0.14, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/acacia.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.69,
            left: windowWidth * 0.65,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.175, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.79,
            left: windowWidth * 0.25,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset16thintree.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.78,
            left: windowWidth * 0.65,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.2, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.89,
            left: windowWidth * 0.45,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        {/* </View> */}
      </ImageBackground>
    </FixWhiteSpace>
  );
}
