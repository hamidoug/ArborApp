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

export default function MiddleOfWorld2({ navigation }) {
  const [showSeeds, setShowSeeds] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSeeds(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/grassbackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        {/* <Pressable
            onPress={() => navigation.navigate("PickFromStore")}
            style={{ zIndex: 10000000000000 }}
          > */}
        <Image
          source={require("../assets/Images/market.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.085,
            left: windowWidth * 0.5,
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
            left: windowWidth * 0.5,
            width: "20%", // Adjust the height as needed
            height: "12%", // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        {/* </Pressable> */}
        {showSeeds && (
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
              source={require("../assets/Images/plus1toseedstext.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.47,
                left: windowWidth * 0.205,
                height: windowHeight * 0.04,
                width: windowWidth * 0.65,
                resizeMode: "cover",
                zIndex: 10000,
              }}
            />
          </React.Fragment>
        )}
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
        <Pressable onPress={() => navigation.navigate("EndOfWorld")}>
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
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("BeginningOfWorld")}
          style={{
            position: "absolute",
            top: windowHeight * 0.482,
            left: windowWidth * 0.005,
          }}
        >
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
        </Pressable>
      </ImageBackground>
    </FixWhiteSpace>
  );
}
