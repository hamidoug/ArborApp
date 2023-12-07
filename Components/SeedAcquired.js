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

export default function SeedAcquired({ route, navigation }) {
  const { selectedFruit, selectedText } = route.params;
  const seedImage = ChosenSeed[selectedFruit];
  const seedTextImage = ChosenSeed[selectedText];
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/task1tanbackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Pressable onPress={() => navigation.navigate("MiddleOfWorld2")}>
          <Image
            source={require("../assets/Images/doneeatingbox.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.8455,
              left: windowWidth * 0.29,
              height: windowHeight * 0.11, // Adjust the height as needed
              width: windowWidth * 0.45, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/doneeatingtext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.885,
              left: windowWidth * 0.39,
              height: windowHeight * 0.035, // Adjust the height as needed
              width: windowWidth * 0.23, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Image
          // source={require("../assets/Images/${selectedFruit}seedacquiredtext.png")}
          // source={require("../assets/Images/peachseedacquiredtext.png")}
          source={seedTextImage}
          style={{
            top: windowHeight * 0.125,
            left: windowWidth * 0.09,
            height: windowHeight * 0.13,
            width: windowWidth * 0.82,
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/seedpack.png")}
          style={{
            top: windowHeight * 0.14,
            left: windowWidth * 0.07,
            height: windowHeight * 0.4409,
            width: windowWidth * 0.87,
            resizeMode: "cover",
          }}
        />
        <Image
          // source={require("../assets/Images/store${selectedFruit}.png")}
          // source={require("../assets/Images/storepeach.png")}
          source={seedImage}
          style={{
            bottom: windowHeight * 0.1,
            left: windowWidth * 0.38,
            height: windowHeight * 0.17, // Adjust the height as needed
            width: windowWidth * 0.25, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/addedtoseedstext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.77,
            left: windowWidth * 0.1525,
            height: windowHeight * 0.031, // Adjust the height as needed
            width: windowWidth * 0.7, // Adjust the width as needed
          }}
        />
      </ImageBackground>
    </FixWhiteSpace>
  );
}
