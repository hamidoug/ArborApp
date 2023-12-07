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

export default function EndOfPlanting({ navigation }) {
  const [peachPlanted, setPeachPlanted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPeachPlanted(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/task1backgroundreversed.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Pressable
          onPress={() => navigation.navigate("MiddleOfWorld")}
          style={{ zIndex: 100 }}
        >
          <Image
            source={require("../assets/Images/leftarrow.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.45,
              left: windowWidth * 0.01,
              height: windowHeight * 0.1, // Adjust the height as needed
              width: windowWidth * 0.1, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {peachPlanted && (
          <React.Fragment>
            <Image
              source={require("../assets/Images/15healthbox.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.4,
                left: windowWidth * 0.13,
                height: windowHeight * 0.19,
                width: windowWidth * 0.771,
                resizeMode: "cover",
                zIndex: 10000,
              }}
            />
            <Image
              source={require("../assets/Images/peachplantedtext.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.425,
                left: windowWidth * 0.2335,
                height: windowHeight * 0.1381,
                width: windowWidth * 0.58,
                resizeMode: "cover",
                zIndex: 100001,
              }}
            />
          </React.Fragment>
        )}
        <Image
          source={require("../assets/Images/grasset01bush.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.0225,
            left: windowWidth * 0.415,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset01bush.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.905,
            left: windowWidth * 0.415,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.23,
            left: windowWidth * 0.645,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.185, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../assets/Images/oak.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.12,
            left: windowWidth * 0.62,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/acacia.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.365,
            left: windowWidth * 0.2,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.175, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset17thintreemoreleaves.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.35,
            left: windowWidth * 0.635,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/Pine.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.225,
            left: windowWidth * 0.21,
            height: windowHeight * 0.104, // Adjust the height as needed
            width: windowWidth * 0.14, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../assets/Images/maincharacter.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.44,
            left: windowWidth * 0.4,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset21townsign.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.355,
            left: windowWidth * -0.06,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.17, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/towntextreversed.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.37,
            // left: windowWidth * -0.01,
            height: windowHeight * 0.025, // Adjust the height as needed
            width: windowWidth * 0.1, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/oak.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.685,
            left: windowWidth * 0.64,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.18, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../assets/Images/Pine.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.8,
            left: windowWidth * 0.66,
            height: windowHeight * 0.104, // Adjust the height as needed
            width: windowWidth * 0.14, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.64,
            left: windowWidth * 0.2,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.185, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../assets/Images/acacia.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.565,
            left: windowWidth * 0.205,
            height: windowHeight * 0.07, // Adjust the height as needed
            width: windowWidth * 0.175, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.1,
            left: windowWidth * 0.195,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.185, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset16thintree.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.8,
            left: windowWidth * 0.18,
            height: windowHeight * 0.1, // Adjust the height as needed
            width: windowWidth * 0.2, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/grasset08smalldoubleleaf.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.535,
            left: windowWidth * 0.645,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.185, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
      </ImageBackground>
    </FixWhiteSpace>
  );
}
