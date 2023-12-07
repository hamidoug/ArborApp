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

export default function TaskOnePageFourandFive({ navigation }) {
  const [showPageSix, setShowPageSix] = useState(false);

  const handleToggle = () => {
    setShowPageSix(!showPageSix);
  };

  return (
    <FixWhiteSpace>
      <Pressable style={{ flex: 1 }} onPress={handleToggle}>
        <ImageBackground
          source={require("../assets/Images/task1tanbackground.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          {showPageSix ? (
            <View>
              <Image
                source={require("../assets/Images/xbutton.png")}
                style={{
                  position: "absolute",
                  top: windowHeight * 0.08,
                  left: windowWidth * 0.06,
                  height: windowHeight * 0.07, // Adjust the height as needed
                  width: windowWidth * 0.16, // Adjust the width as needed
                  zIndex: 1,
                }}
              />
              <Image
                source={require("../assets/Images/bigmaincharacterhappy.gif")}
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
          ) : (
            <View>
              <Image
                source={require("../assets/Images/xbutton.png")}
                style={{
                  position: "absolute",
                  top: windowHeight * 0.08,
                  left: windowWidth * 0.06,
                  height: windowHeight * 0.07, // Adjust the height as needed
                  width: windowWidth * 0.16, // Adjust the width as needed
                  zIndex: 1,
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
          )}
        </ImageBackground>
      </Pressable>
    </FixWhiteSpace>
  );
}
