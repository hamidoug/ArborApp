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

export default function HomeScreen({ navigation }) {
  return (
    <FixWhiteSpace>
      <Pressable onPress={() => navigation.navigate("FirstPage")}>
        <Image
          source={require("../assets/Images/homepage.png")}
          style={{
            height: windowHeight,
            width: windowWidth,
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/taptostarttext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.85, //.85 to follow figma
            left: windowWidth * 0.2,
            height: windowHeight * 0.03,
            width: windowWidth * 0.6,
          }}
        />
      </Pressable>
    </FixWhiteSpace>
  );
}
