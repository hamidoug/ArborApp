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

export default function AvailableSeeds({ navigation }) {
  const [greenRingVisibleApple, setGreenRingVisibleApple] = useState(false);
  const handleSeedPackPressApple = () => {
    setGreenRingVisibleApple(true);
  };
  const [greenRingVisibleOrange, setGreenRingVisibleOrange] = useState(false);
  const handleSeedPackPressOrange = () => {
    setGreenRingVisibleOrange(true);
  };
  const [greenRingVisiblePeach, setGreenRingVisiblePeach] = useState(false);
  const handleSeedPackPressPeach = () => {
    setGreenRingVisiblePeach(true);
  };
  const [greenRingVisibleCoconut, setGreenRingVisibleCoconut] = useState(false);
  const handleSeedPackPressCoconut = () => {
    setGreenRingVisibleCoconut(true);
  };
  const [showGreatChoice, setShowGreatChoice] = useState(false);
  const handleDoneEatingPress = () => {
    setShowGreatChoice(true); // Show greatchoicetext
  };
  const handlePressApple = () => {
    handleSeedPackPressApple();
    handleDoneEatingPress();
    setGrayBoxVisible(true);
    setPlantTextVisible(true);
  };
  const handlePressOrange = () => {
    handleSeedPackPressOrange();
    handleDoneEatingPress();
    setGrayBoxVisible(true);
    setPlantTextVisible(true);
  };
  const handlePressPeach = () => {
    handleSeedPackPressPeach();
    handleDoneEatingPress();
    setGrayBoxVisible(true);
    setPlantTextVisible(true);
  };
  const handlePressCoconut = () => {
    handleSeedPackPressCoconut();
    handleDoneEatingPress();
    setGrayBoxVisible(true);
    setPlantTextVisible(true);
  };
  const [grayBoxVisible, setGrayBoxVisible] = useState(false);
  const [plantTextVisible, setPlantTextVisible] = useState(false);
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/task1tanbackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Pressable onPress={() => navigation.navigate("MemoryDetails1")}>
          <Image
            source={
              grayBoxVisible
                ? require("../assets/Images/darkbox.png")
                : require("../assets/Images/graybox.png")
            }
            style={{
              position: "absolute",
              top: windowHeight * 0.85,
              left: windowWidth * 0.33,
              height: windowHeight * 0.0943,
              width: windowWidth * 0.37,
            }}
          />

          <Image
            source={
              plantTextVisible
                ? require("../assets/Images/planttext2.png")
                : require("../assets/Images/planttext1.png")
            }
            style={{
              position: "absolute",
              top: windowHeight * 0.88,
              left: windowWidth * 0.42,
              height: windowHeight * 0.0274,
              width: windowWidth * 0.2,
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.32,
            left: windowWidth * 0.105,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              height: windowHeight * 0.2027,
              width: windowWidth * 0.4,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.295,
            left: windowWidth * 0.36,
            zIndex: 1001,
          }}
        >
          <Image
            source={require("../assets/Images/seedcountbadge.png")}
            style={{
              height: windowHeight * 0.1, // Adjust the height as needed
              width: windowWidth * 0.13, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
          <Image
            source={require("../assets/Images/0text.png")}
            style={{
              bottom: windowHeight * 0.07,
              left: windowHeight * 0.025,
              height: windowHeight * 0.03,
              width: windowHeight * 0.015,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.405,
            left: windowWidth * 0.245,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storeapple.png")}
            style={{
              height: windowHeight * 0.0625,
              width: windowWidth * 0.135,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleApple && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.41,
              left: windowWidth * 0.08,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43,
              zIndex: 1, // Adjust the width as needed
            }}
          />
        )}
        <Image
          source={require("../assets/Images/availableseedstext.png")}
          style={{
            top: windowHeight * 0.125,
            left: windowWidth * 0.105,
            height: windowHeight * 0.16,
            width: windowWidth * 0.8,
            resizeMode: "cover",
          }}
        />
        <Pressable
          onPress={() => navigation.navigate("EndOfWorld")}
          style={{
            position: "absolute",
            top: windowHeight * 0.03,
            left: windowWidth * 0.06,
            zIndex: 1,
          }}
        >
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.16, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressOrange}
          style={{
            position: "absolute",
            top: windowHeight * 0.32,
            left: windowWidth * 0.535,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.2027,
              width: windowWidth * 0.4, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressOrange}
          style={{
            position: "absolute",
            top: windowHeight * 0.405,
            left: windowWidth * 0.69,
            zIndex: 1000,
          }}
        >
          <Pressable
            onPress={handlePressOrange}
            style={{
              position: "absolute",
              top: windowHeight * -0.11,
              left: windowWidth * 0.095,
              zIndex: 1001,
            }}
          >
            <Image
              source={require("../assets/Images/seedcountbadge.png")}
              style={{
                height: windowHeight * 0.1, // Adjust the height as needed
                width: windowWidth * 0.13, // Adjust the width as needed
                resizeMode: "cover",
              }}
            />
            <Image
              source={require("../assets/Images/0text.png")}
              style={{
                bottom: windowHeight * 0.07,
                left: windowHeight * 0.025,
                height: windowHeight * 0.03,
                width: windowHeight * 0.015,
                resizeMode: "cover",
              }}
            />
          </Pressable>
          <Image
            source={require("../assets/Images/storeorange.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.06429, // Adjust the height as needed
              width: windowWidth * 0.1, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleOrange && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.41,
              left: windowWidth * 0.52,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
        <Pressable
          onPress={handlePressPeach}
          style={{
            position: "absolute",
            top: windowHeight * 0.58,
            left: windowWidth * 0.105,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.2027,
              width: windowWidth * 0.4, // Adjust the width as needed
            }}
          />
          <Pressable
            onPress={handlePressPeach}
            style={{
              position: "absolute",
              top: windowHeight * -0.025,
              left: windowWidth * 0.25,
              zIndex: 1001,
            }}
          >
            <Image
              source={require("../assets/Images/seedcountbadge.png")}
              style={{
                height: windowHeight * 0.1, // Adjust the height as needed
                width: windowWidth * 0.13, // Adjust the width as needed
                resizeMode: "cover",
              }}
            />
          </Pressable>
        </Pressable>
        <Pressable
          onPress={handlePressPeach}
          style={{
            position: "absolute",
            top: windowHeight * 0.66,
            left: windowWidth * 0.2,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storepeach.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.1, // Adjust the height as needed
              width: windowWidth * 0.2, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
          <Image
            source={require("../assets/Images/1text.png")}
            style={{
              bottom: windowHeight * 0.075,
              left: windowHeight * 0.1,
              height: windowHeight * 0.03,
              width: windowHeight * 0.01,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisiblePeach && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.67,
              left: windowWidth * 0.08,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
        <Pressable
          onPress={handlePressCoconut}
          style={{
            position: "absolute",
            top: windowHeight * 0.58,
            left: windowWidth * 0.535,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.2027,
              width: windowWidth * 0.4, // Adjust the width as needed
            }}
          />
          <Pressable
            onPress={handlePressCoconut}
            style={{
              position: "absolute",
              top: windowHeight * -0.025,
              left: windowWidth * 0.25,
              zIndex: 1001,
            }}
          >
            <Image
              source={require("../assets/Images/seedcountbadge.png")}
              style={{
                height: windowHeight * 0.1, // Adjust the height as needed
                width: windowWidth * 0.13, // Adjust the width as needed
                resizeMode: "cover",
              }}
            />
            <Image
              source={require("../assets/Images/0text.png")}
              style={{
                bottom: windowHeight * 0.07,
                left: windowHeight * 0.025,
                height: windowHeight * 0.03,
                width: windowHeight * 0.015,
                resizeMode: "cover",
              }}
            />
          </Pressable>
        </Pressable>
        <Pressable
          onPress={handlePressCoconut}
          style={{
            position: "absolute",
            top: windowHeight * 0.66,
            left: windowWidth * 0.65,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storecoconut.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.09, // Adjust the height as needed
              width: windowWidth * 0.18, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleCoconut && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.67,
              left: windowWidth * 0.52,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
      </ImageBackground>
    </FixWhiteSpace>
  );
}
