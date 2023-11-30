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
  );
}

function TaskOnePageOne({ navigation }) {
  return (
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
      {/* </View> */}
    </ImageBackground>
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
    <View style={{ height: "100%" /*flex: 1*/, display: "flex" }}>
      <ImageBackground
        source={require("../assets/Images/task1brownbackground2.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View
            style={{
              marginTop: "25%",
              width: "19%",
              height: windowHeight * 0.078125,
              flex: 1,
            }}
          >
            <Image
              source={require("../assets/Images/xbutton.png")}
              style={[
                {
                  width: "100%",
                  height: windowHeight * 0.09,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>

          <View
            style={{
              marginTop: "5%",
              marginLeft: 2,
              height: windowHeight * 0.15625,
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/Images/beachdaytext.png")}
              style={[
                {
                  width: "100%",
                  height: windowHeight * 0.15625,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>

          <ImageBackground
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              width: "89%",
              marginLeft: "10%",
              marginTop: "3%",
            }}
          >
            <View style={{ paddingLeft: "5%" }}>
              <Image
                source={require("../assets/Images/beachdaypic.png")}
                style={{ resizeMode: "contain", paddingTop: "93%" }}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              height: windowHeight * 0.067,
              marginTop: "10%",
              paddingLeft: "10%",
            }}
          >
            <Image
              source={require("../assets/Images/descriptiontext1.png")}
              style={[
                {
                  width: "90%",
                  height: windowHeight * 0.067,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>
          <ImageBackground
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              height: windowHeight * 0.357,
              width: "89%",
            }}
          >
            <View style={{ paddingLeft: "7%", paddingTop: "8%" }}>
              <Image
                source={require("../assets/Images/descriptiontext2.png")}
                style={{ resizeMode: "contain" }}
              />
            </View>
          </ImageBackground>

          <View
            style={{
              height: windowHeight * 0.078125,
              marginTop: "7%",
            }}
          >
            <Image
              source={require("../assets/Images/peopletext1.png")}
              style={[
                {
                  width: "100%",
                  height: windowHeight * 0.067,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>

          <ImageBackground
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              height: windowHeight * 0.357,
              width: "90%",
            }}
          >
            <View style={{ paddingLeft: "20%", paddingTop: "20%" }}>
              <Image
                source={require("../assets/Images/peopletext2.png")}
                style={{ resizeMode: "contain" }}
              />
            </View>
          </ImageBackground>

          {/* borderWidth: 2,
          borderColor: "black", */}
          <View
            style={{
              height: windowHeight * 0.078125,
              marginTop: "7%",
              paddingLeft: "15%",
            }}
          >
            <Image
              source={require("../assets/Images/emotionstext1.png")}
              style={[
                {
                  width: "80%",
                  height: windowHeight * 0.067,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>

          <ImageBackground
            source={require("../assets/Images/layerforcherrymemory2.png")}
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              height: windowHeight * 0.357,
              width: "89%",
            }}
          >
            <View style={{ paddingLeft: "7%", paddingTop: "8%" }}>
              <Image
                source={require("../assets/Images/emotionstext2.png")}
                style={{ resizeMode: "contain" }}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              height: windowHeight * 0.078125,
              marginTop: "7%",
              paddingLeft: "15%",
            }}
          >
            <Image
              source={require("../assets/Images/musictext1.png")}
              style={[
                {
                  width: "80%",
                  height: windowHeight * 0.067,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>
          <ImageBackground
            source={require("../assets/Images/layerforcherrymemory3.png")}
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              height: windowHeight * 0.246,
              width: "89%",
            }}
          >
            <View style={{ paddingLeft: "1%", paddingTop: "20%" }}>
              <Image
                source={require("../assets/Images/musictext2.png")}
                style={{ resizeMode: "contain" }}
              />
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Images/layerforeatbutton.png")}
            style={{
              marginLeft: "25%",
              marginTop: "10%",
              marginBottom: "7%",
              height: windowHeight * 0.167,
              width: "70%",
            }}
          >
            <Pressable onPress={() => navigation.navigate("FourthPage")}>
              <View style={{ paddingLeft: "17%", paddingTop: "17%" }}>
                <Image
                  source={require("../assets/Images/eattext.png")}
                  style={{ resizeMode: "contain" }}
                />
              </View>
            </Pressable>
          </ImageBackground>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

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

function TaskOnePageFour({ navigation }) {
  return (
    <Pressable
      style={{ height: "100%", width: "100%" }}
      onPress={() => navigation.navigate("FifthPage")}
    >
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
    // <View>
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
      <Pressable onPress={() => navigation.navigate("MiddleOfWorld")}>
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
      </Pressable>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

function MiddleOfWorld({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/grassbackground.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.28,
          left: windowWidth * 0.16,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.38,
          left: windowWidth * 0.16,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.53,
          left: windowWidth * 0.16,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.63,
          left: windowWidth * 0.16,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/middlecrossofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
          left: windowWidth * 0.16,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/horizontalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,

          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.16, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset21townsign.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.422,
          left: "-.5%",
          height: windowHeight * 0.08, // Adjust the height as needed
          width: windowWidth * 0.17, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/foresttext.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.445,
          left: windowWidth * 0.02,
          height: windowHeight * 0.022, // Adjust the height as needed
          width: windowWidth * 0.132, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/horizontalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
          left: windowWidth * 0.31,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/horizontalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
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
          top: windowHeight * 0.48,
          left: windowWidth * 0.61,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.1, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/house.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.07,
          left: windowWidth * 0.01,
          width: "43.5%", // Adjust the height as needed
          height: "25%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.28,
          left: windowWidth * 0.69,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.38,
          left: windowWidth * 0.69,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.53,
          left: windowWidth * 0.69,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/verticalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.63,
          left: windowWidth * 0.69,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/middlecrossofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
          left: windowWidth * 0.69,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.15, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/horizontalmiddleofpath.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
          left: windowWidth * 0.84,
          height: windowHeight * 0.1, // Adjust the height as needed
          width: windowWidth * 0.16, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset21townsign.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.422,
          left: windowWidth * 0.825,
          height: windowHeight * 0.08, // Adjust the height as needed
          width: windowWidth * 0.17, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/foresttext.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.445,
          left: windowWidth * 0.85,
          height: windowHeight * 0.022, // Adjust the height as needed
          width: windowWidth * 0.132, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/market.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.085,
          left: windowWidth * 0.5, //52
          width: "47%", // Adjust the height as needed
          height: "27%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/farmer.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.2,
          left: windowWidth * 0.5, //
          width: "20%", // Adjust the height as needed
          height: "12%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/statue.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.35,
          left: windowWidth * 0.44,
          width: "15%", // Adjust the height as needed
          height: "9%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/maincharacter.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.43,
          left: windowWidth * 0.38,
          height: windowHeight * 0.12, // Adjust the height as needed
          width: windowWidth * 0.216, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset10singlerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.58,
          left: windowWidth * 0.43,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/blockrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.6,
          left: windowWidth * 0.37,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset13doublerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.62,
          left: windowWidth * 0.37,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/pointyrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.625,
          left: windowWidth * 0.355,
          height: windowHeight * 0.04, // Adjust the height as needed
          width: windowWidth * 0.1, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset10singlerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.652,
          left: windowWidth * 0.37,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/blockrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.672,
          left: windowWidth * 0.42,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset13doublerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.672,
          left: windowWidth * 0.47,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/blockrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.672,
          left: windowWidth * 0.53,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/pointyrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.645,
          left: windowWidth * 0.55,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.08, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset13doublerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.633,
          left: windowWidth * 0.57,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/roundrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.598,
          left: windowWidth * 0.545,
          height: windowHeight * 0.045, // Adjust the height as needed
          width: windowWidth * 0.1, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset13doublerock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.59,
          left: windowWidth * 0.53,
          height: windowHeight * 0.03, // Adjust the height as needed
          width: windowWidth * 0.07, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/blockrock.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.59,
          left: windowWidth * 0.488,
          height: windowHeight * 0.025, // Adjust the height as needed
          width: windowWidth * 0.055, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset19lotofwater.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.61,
          left: windowWidth * 0.43,
          height: windowHeight * 0.075, // Adjust the height as needed
          width: windowWidth * 0.155, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset19lotofwater.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.63,
          left: windowWidth * 0.43,
          height: windowHeight * 0.034, // Adjust the height as needed
          width: windowWidth * 0.08, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset19lotofwater.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.63,
          left: windowWidth * 0.49,
          height: windowHeight * 0.034, // Adjust the height as needed
          width: windowWidth * 0.08, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset19lotofwater.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.61,
          left: windowWidth * 0.43,
          height: windowHeight * 0.034, // Adjust the height as needed
          width: windowWidth * 0.08, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/grasset19lotofwater.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.645,
          left: windowWidth * 0.495,
          height: windowHeight * 0.034, // Adjust the height as needed
          width: windowWidth * 0.08, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/postoffice.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.7,
          left: windowWidth * 0.004,
          width: "47%", // Adjust the height as needed
          height: "25%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("../assets/Images/store.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.7,
          left: windowWidth * 0.525,
          width: "47%", // Adjust the height as needed
          height: "25%", // Adjust the width as needed
          resizeMode: "cover",
        }}
      />

      <Image
        source={require("../assets/Images/arrow0right.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.48,
          left: windowWidth * 0.874,
          height: windowHeight * 0.095, // Adjust the height as needed
          width: windowWidth * 0.12, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />

      <Image
        source={require("../assets/Images/leftarrow.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.482,
          left: windowWidth * 0.005,
          height: windowHeight * 0.095, // Adjust the height as needed
          width: windowWidth * 0.12, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
    </ImageBackground>
  );
}

function PickFromStore({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/stand0.png")}
      style={{
        width: "100%",
        height: windowHeight * 0.85,
      }}
    >
      <Image
        source={require("./assets/bigfarmer.png")}
        style={{
          position: "absolute",
          left: windowWidth * 0.03,
          height: windowHeight * 0.5,
          width: windowWidth * 0.9,
        }}
      />
      <Image
        source={require("./assets/xbutton.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.03,

          height: windowHeight * 0.07,
          width: windowWidth * 0.16,
        }}
      />
      <View style={{}}>
        <Image
          source={require("./assets/stand1.png")}
          style={{ resizeMode: "contain" }}
        />
      </View>

      <View style={{}}>
        <Image
          source={require("./assets/stand2.png")}
          style={[
            {
              paddingTop: "45%",
              width: "100%",
              height: windowHeight * 0.1,
              // resizeMode: "contain",
            },
          ]}
        />
      </View>
      <View style={{ marginLeft: "-1%", marginTop: "-1%" }}>
        <Image
          source={require("./assets/stand2.png")}
          style={[
            {
              marginTop: "41.5%",
              paddingBottom: "45%",
              width: "102%",

              height: windowHeight * 0.1,
              // resizeMode: "contain",
            },
          ]}
        />
      </View>
      <Image
        source={require("./assets/whatwouldyoulikebox.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.345,
          left: windowWidth * 0.125,
          height: windowHeight * 0.19, // Adjust the height as needed
          width: windowWidth * 0.76, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/whatwouldyouliketext.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.37,
          left: windowWidth * 0.165,
          height: windowHeight * 0.12, // Adjust the height as needed
          width: windowWidth * 0.665, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/seedpackbox.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.57,
          left: windowWidth * 0.075,
          height: windowHeight * 0.175, // Adjust the height as needed
          width: windowWidth * 0.375, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/seedpack.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.57,
          left: windowWidth * 0.105,
          height: windowHeight * 0.16, // Adjust the height as needed
          width: windowWidth * 0.3157, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/storeapple.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.639,
          left: windowWidth * 0.22,
          height: windowHeight * 0.05, // Adjust the height as needed
          width: windowWidth * 0.1, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("./assets/seedpackbox.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.57,
          left: windowWidth * 0.55,
          height: windowHeight * 0.175, // Adjust the height as needed
          width: windowWidth * 0.375, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/seedpack.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.57,
          left: windowWidth * 0.585,
          height: windowHeight * 0.16, // Adjust the height as needed
          width: windowWidth * 0.3157, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/storeorange.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.639,
          left: windowWidth * 0.71,
          height: windowHeight * 0.05, // Adjust the height as needed
          width: windowWidth * 0.083, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("./assets/seedpackbox.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.78,
          left: windowWidth * 0.075,
          height: windowHeight * 0.175, // Adjust the height as needed
          width: windowWidth * 0.375, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/seedpack.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.78,
          left: windowWidth * 0.105,
          height: windowHeight * 0.16, // Adjust the height as needed
          width: windowWidth * 0.3157, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/storepeach.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.839,
          left: windowWidth * 0.17,
          height: windowHeight * 0.09, // Adjust the height as needed
          width: windowWidth * 0.18, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
      <Image
        source={require("./assets/seedpackbox.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.78,
          left: windowWidth * 0.55,
          height: windowHeight * 0.175, // Adjust the height as needed
          width: windowWidth * 0.375, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/seedpack.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.78,
          left: windowWidth * 0.585,
          height: windowHeight * 0.16, // Adjust the height as needed
          width: windowWidth * 0.3157, // Adjust the width as needed
        }}
      />
      <Image
        source={require("./assets/storecoconut.png")}
        style={{
          position: "absolute",
          top: windowHeight * 0.837,
          left: windowWidth * 0.665,
          height: windowHeight * 0.08, // Adjust the height as needed
          width: windowWidth * 0.16, // Adjust the width as needed
          resizeMode: "cover",
        }}
      />
    </ImageBackground>
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
      <Stack.Screen name="SixthPage" component={TaskOnePageSix} />
      <Stack.Screen name="MiddleOfWorld" component={MiddleOfWorld} />
      <Stack.Screen name="PickFromStore" component={PickFromStore} />
    </Stack.Navigator>
  );
}

export default App;
