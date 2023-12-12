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
import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as Animatable from "react-native-animatable";
import { AppLoading } from "expo";
import FixWhiteSpace from "./_layout";
import { ThemeProvider, createTheme, Button } from "@rneui/themed";
import { Accelerometer } from "expo-sensors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});
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

export default function TaskOnePageTwoandThree({ navigation }) {
  const [showPageThree, setShowPageThree] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPageThree(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  useEffect(() => {
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      setData({ x, y, z });
    });

    Accelerometer.setUpdateInterval(1000);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <FixWhiteSpace>
      <View style={{ height: "100%", display: "flex" }}>
        {!showPageThree ? (
          // Content of TaskOnePageTwo
          <Pressable onPress={() => setShowPageThree(true)}>
            <Image
              source={require("../assets/Images/LongBackpack.png")}
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
                left: windowWidth * 0.155,
                height: windowHeight * 0.1318, // Adjust the height as needed
                width: windowWidth * 0.675, // Adjust the width as needed
              }}
            />
          </Pressable>
        ) : (
          // Content of TaskOnePageThree
          <ImageBackground
            source={require("../assets/Images/LongBackpack.png")}
            style={{ flex: 1, resizeMode: "cover" }}
          >
            <View
              style={{
                marginTop: "20%",
                width: "19%",
                height: windowHeight * 0.078125,
                marginLeft: "10%",
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
            <ScrollView
              contentContainerStyle={{ padding: 10, marginTop: "15%" }}
            >
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
                      width: "76%",
                      height: windowHeight * 0.067,
                      resizeMode: "contain",
                      left: windowWidth * 0.055,
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
                <Pressable
                  onPress={() => navigation.navigate("FourandFive")}
                  style={{
                    opacity: 1 - Math.abs(data.x), // Changes opacity based on the x-axis movement
                    // ... other styles
                  }}
                >
                  {/* <View style={{ paddingLeft: "17%", paddingTop: "17%" }}> } */}
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    useNativeDriver={true}
                    style={{ paddingLeft: "17%", paddingTop: "17%" }}
                  >
                    <Image
                      source={require("../assets/Images/eattext.png")}
                      style={{ resizeMode: "contain" }}
                    />
                    {/* </View>
                </Pressable> */}
                  </Animatable.View>
                </Pressable>
              </ImageBackground>
              <View style={{ height: windowHeight * 0.05 }}></View>
            </ScrollView>
          </ImageBackground>
        )}
      </View>
    </FixWhiteSpace>
  );
}
