import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function HomeScreen({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("FirstPage")}>
      <Image
        source={require("../assets/Images/homepage.png")}
        style={{
          height: windowHeight,
          width: windowWidth,
          resizeMode: "cover",
        }}
      />
      <Text style={{ fontWeight: "bold" }}>-tap to start-</Text>
    </Pressable>
  );
}

function TaskOnePageOne({ navigation }) {
  return (
    <View>
      <Image
        source={require("../assets/Images/grassbackground.png")}
        style={{
          height: windowHeight,
          width: windowWidth,
          resizeMode: "cover",
        }}
      />
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
          left: windowWidth * 0.25,
          height: windowHeight * 0.09, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
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
          top: windowHeight * 0.45,
          left: windowWidth * 0,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
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
      <Pressable onPress={() => navigation.navigate("SecondPage")}>
        <Image
          source={require("../assets/Images/oak.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.57,
            left: windowWidth * 0.25,
            height: windowHeight * 0.09, // Adjust the height as needed
            width: windowWidth * 0.15, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("SecondPage")}>
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
          left: windowWidth * 0.65,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/Pine.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.69,
          left: windowWidth * 0.25,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
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
    </View>
  );
}

function TaskOnePageTwo({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("ThirdPage");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <Pressable onPress={() => navigation.navigate("ThirdPage")}>
      <Image
        source={require("../assets/Images/task1brownbackground2.png")}
        style={{
          height: windowHeight * 1,
          width: windowWidth * 1,
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/cherriestext.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.13,
          left: windowWidth * 0.15,
          height: windowHeight * 0.055, // Adjust the height as needed
          width: windowWidth * 0.7, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/layerforcherrymemory2.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.27,
          left: windowWidth * 0.15,
          height: windowHeight * 0.35, // Adjust the height as needed
          width: windowWidth * 0.7, // Adjust the width as needed
        }}
      />
      <Image
        source={require("../assets/Images/bigcherry.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.27,
          left: windowWidth * 0.02,
          height: windowHeight * 0.4, // Adjust the height as needed
          width: windowWidth * 0.8, // Adjust the width as needed
        }}
      />
      <Image
        source={require("../assets/Images/youhaveamemorytext.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.7,
          left: windowWidth * 0.1,
          height: windowHeight * 0.155, // Adjust the height as needed
          width: windowWidth * 0.8, // Adjust the width as needed
        }}
      />
    </Pressable>
  );
}

function TaskOnePageThree({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/task1brownbackground2.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View>
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.11,
              left: windowWidth * 0.01,
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.16, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/beachdaytext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.19,
              left: windowWidth * 0.25,
              height: windowHeight * 0.13, // Adjust the height as needed
              width: windowWidth * 0.42, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.355,
              left: windowWidth * 0.11,
              height: windowHeight * 0.35, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/beachdaypic.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.365,
              left: windowWidth * 0.12,
              height: windowHeight * 0.33, // Adjust the height as needed
              width: windowWidth * 0.69, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/descriptiontext1.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.75,
              left: windowWidth * 0.17,
              height: windowHeight * 0.045, // Adjust the height as needed
              width: windowWidth * 0.56, // Adjust the width as needed
            }}
          />

          <Image
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.82,
              left: windowWidth * 0.11,
              height: windowHeight * 0.35, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/descriptiontext2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.855,
              left: windowWidth * 0.132,
              height: windowHeight * 0.28, // Adjust the height as needed
              width: windowWidth * 0.675, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/peopletext1.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.215,
              left: windowWidth * 0.28,
              height: windowHeight * 0.05, // Adjust the height as needed
              width: windowWidth * 0.35, // Adjust the width as needed
            }}
          />

          <Image
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.295,
              left: windowWidth * 0.11,
              height: windowHeight * 0.35, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/peopletext2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.36,
              left: windowWidth * 0.22,
              height: windowHeight * 0.2, // Adjust the height as needed
              width: windowWidth * 0.5, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/emotionstext1.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.68,
              left: windowWidth * 0.23,
              height: windowHeight * 0.035, // Adjust the height as needed
              width: windowWidth * 0.45, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.77,
              left: windowWidth * 0.11,
              height: windowHeight * 0.35, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/emotionstext2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 1.805,
              left: windowWidth * 0.16,
              height: windowHeight * 0.27, // Adjust the height as needed
              width: windowWidth * 0.605, // Adjust the width as needed
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const myImages = [
  "Image1",
  "Image2",
  "Image3",
  "Image4",
]

function TaskOnePageFour({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("FifthPage")}>
      <ImageBackground
        source={require("../assets/Images/task1tanbackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View>
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.08,
              left: windowWidth * 0.06,
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.16, // Adjust the width as needed
            }}
          />
          {myImages.map(function (image) => {
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
          })}
          <Image
            source={require("../assets/Images/bigmaincharacter.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.29,
              left: windowWidth * 0.18,
              height: windowHeight * 0.3, // Adjust the height as needed
              width: windowWidth * 0.65, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/bigcherry.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.412,
              left: windowWidth * 0.12,
              height: windowHeight * 0.15, // Adjust the height as needed
              width: windowWidth * 0.3, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/healthbar1.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.65,
              left: windowWidth * 0.21,
              height: windowHeight * 0.05, // Adjust the height as needed
              width: windowWidth * 0.6, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/taptext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.78,
              left: windowWidth * 0.38,
              height: windowHeight * 0.031, // Adjust the height as needed
              width: windowWidth * 0.24, // Adjust the width as needed
            }}
          />
        </View>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </Pressable>
  );
}

function TaskOnePageFive({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/task1tanbackground.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View>
        <Image
          source={require("../assets/Images/bigmaincharacterhappy.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.212,
            left: windowWidth * 0.095,
            height: windowHeight * 0.4, // Adjust the height as needed
            width: windowWidth * 0.87, // Adjust the width as needed
          }}
        />

        <Image
          source={require("../assets/Images/healthbar2.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.52,
            left: windowWidth * 0.2,
            height: windowHeight * 0.2, // Adjust the height as needed
            width: windowWidth * 0.6, // Adjust the width as needed
          }}
        />
        <Pressable onPress={() => navigation.navigate("SixthPage")}>
          <Image
            source={require("../assets/Images/doneeatingbox.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.75,
              left: windowWidth * 0.29,
              height: windowHeight * 0.11, // Adjust the height as needed
              width: windowWidth * 0.45, // Adjust the width as needed
            }}
          />
          <Image
            source={require("../assets/Images/doneeatingtext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.785,
              left: windowWidth * 0.39,
              height: windowHeight * 0.035, // Adjust the height as needed
              width: windowWidth * 0.23, // Adjust the width as needed
            }}
          />
        </Pressable>
      </View>
    </ImageBackground>
    //  <StatusBar style="auto" />
  );
}

function TaskOnePageSix({ navigation }) {
  const [showHealth, setShowHealth] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHealth(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View>
      <Image
        source={require("../assets/Images/grassbackground.png")}
        style={{
          height: windowHeight,
          width: windowWidth,
          resizeMode: "cover",
        }}
      />
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
          left: windowWidth * 0.25,
          height: windowHeight * 0.09, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
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
          top: windowHeight * 0.45,
          left: windowWidth * 0,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/maincharacter.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.415,
          left: windowWidth * 0.455,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.18, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />

      <Image
        source={require("../assets/Images/arrow0right.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.45,
          left: windowWidth * 0.88,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.1, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
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

      <Image
        source={require("../assets/Images/oak.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.57,
          left: windowWidth * 0.25,
          height: windowHeight * 0.09, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />

      <Image
        source={require("../assets/Images/Pine.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.55,
          left: windowWidth * 0.65,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/Pine.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.69,
          left: windowWidth * 0.25,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.175, // Adjust the width as needed
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
          top: windowHeight * 0.9,
          left: windowWidth * 0.45,
          height: windowHeight * 0.09, // Adjust the height as needed
          width: windowWidth * 0.18, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />

      <Image
        source={require("../assets/Images/layerforcherrymemory.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.185,
          left: windowWidth * 0.25,
          height: windowHeight * 0.07, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      {showHealth && (
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
            }}
          />
          <Image
            source={require("../assets/Images/15healthtext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.47,
              left: windowWidth * 0.205,
              height: windowHeight * 0.043,
              width: windowWidth * 0.633,
              resizeMode: "cover",
            }}
          />
        </React.Fragment>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FirstPage" component={TaskOnePageOne} />
      <Stack.Screen name="SecondPage" component={TaskOnePageTwo} />
      <Stack.Screen name="ThirdPage" component={TaskOnePageThree} />
      <Stack.Screen name="FourthPage" component={TaskOnePageFour} />
      <Stack.Screen name="FifthPage" component={TaskOnePageFive} />
    </Stack.Navigator>
  );
}

export default App;
