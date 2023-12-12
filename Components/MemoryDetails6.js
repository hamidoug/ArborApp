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
import { LinearGradient } from "expo-linear-gradient";

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

export default function MemoryDetails6({ navigation }) {
  const onButtonLongPress = () => {
    // Handle long press action, e.g., show a modal or tooltip
    alert("Long Pressed!"); // Example action, replace with your functionality
  };
  const [memoryName, setMemoryName] = useState("");

  useEffect(() => {
    const loadMemoryName = async () => {
      try {
        const storedMemoryName = await AsyncStorage.getItem("memoryName");
        if (storedMemoryName !== null) {
          setMemoryName(storedMemoryName);
        }
      } catch (error) {
        console.error("Error loading memoryName from AsyncStorage: ", error);
      }
    };

    loadMemoryName();
  }, []);
  const [memoryDescription, setMemoryDescription] = useState("");

  useEffect(() => {
    const loadMemoryDescription = async () => {
      try {
        const storedMemoryDescription = await AsyncStorage.getItem(
          "memoryDescription"
        );
        if (storedMemoryDescription !== null) {
          setMemoryDescription(storedMemoryDescription);
        }
      } catch (error) {
        console.error(
          "Error loading memoryDescription from AsyncStorage: ",
          error
        );
      }
    };

    loadMemoryDescription();
  }, []);

  const [memoryPeople, setMemoryPeople] = useState("");

  useEffect(() => {
    const loadMemoryPeople = async () => {
      try {
        const storedMemoryPeople = await AsyncStorage.getItem("memoryPeople");
        if (storedMemoryPeople !== null) {
          setMemoryPeople(storedMemoryPeople);
        }
      } catch (error) {
        console.error("Error loading memoryPeople from AsyncStorage: ", error);
      }
    };

    loadMemoryPeople();
  }, []);

  const [memoryEmotions, setMemoryEmotions] = useState("");

  useEffect(() => {
    const loadMemoryEmotions = async () => {
      try {
        const storedMemoryEmotions = await AsyncStorage.getItem(
          "memoryEmotions"
        );
        if (storedMemoryEmotions !== null) {
          setMemoryEmotions(storedMemoryEmotions);
        }
      } catch (error) {
        console.error(
          "Error loading memoryEmotions from AsyncStorage: ",
          error
        );
      }
    };

    loadMemoryEmotions();
  }, []);
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/LongBackpack.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Pressable
          onPress={() => navigation.navigate("MemoryDetails5")}
          style={{}}
        >
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              marginTop: "5%",
              marginLeft: "14%",
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.17, // Adjust the width as needed
            }}
          />
        </Pressable>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={require("../assets/Images/reviewtext.png")}
            style={{
              marginTop: "5%",
              marginLeft: "38%",
              height: windowHeight * 0.025,
              width: windowWidth * 0.25,
            }}
          />
          <Image
            source={require("../assets/Images/peachtitle.png")}
            style={{
              marginTop: "3%",
              marginLeft: "29%",
              height: windowHeight * 0.0519, // Adjust the height as needed
              width: windowWidth * 0.45, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
          <Text style={{ marginTop: "5%", marginLeft: "12.5%", fontSize: 80 }}>
            {memoryName}
          </Text>
          <ImageBackground
            source={require("../assets/Images/highreslayerforcherrymemory2.png")}
            style={{
              marginTop: "1%",
              marginLeft: "13%",
              height: windowHeight * 0.3409, // Adjust the height as needed
              width: windowWidth * 0.75, // Adjust the width as needed
            }}
          >
            <Image
              source={require("../assets/Images/dogimage.png")}
              style={{
                // resizeMode: "contain",
                height: "93%",
                width: "91%",
                marginLeft: "6%",
                marginTop: "2%",
              }}
            />
          </ImageBackground>
          <Image
            source={require("../assets/Images/descriptiontext1.png")}
            style={[
              {
                marginTop: "7%",
                marginLeft: "17%",
                width: "65%",
                height: windowHeight * 0.067,
                resizeMode: "contain",
              },
            ]}
          />
          <ImageBackground
            source={require("../assets/Images/highreslayerforcherrymemory2.png")}
            style={{
              marginTop: "1%",
              marginLeft: "13%",
              height: windowHeight * 0.3409, // Adjust the height as needed
              width: windowWidth * 0.75, // Adjust the width as needed
            }}
          >
            <Text
              style={{
                marginTop: "7%",
                marginLeft: "7%",
                fontSize: 20,
                // fontFamily: "memoryfont",
              }}
            >
              {memoryDescription}
            </Text>
          </ImageBackground>
          <Image
            source={require("../assets/Images/peopletext1.png")}
            style={[
              {
                marginTop: "7%",
                marginLeft: "9%",
                width: "80%",
                height: windowHeight * 0.067,
                resizeMode: "contain",
              },
            ]}
          />
          <ImageBackground
            source={require("../assets/Images/highreslayerforcherrymemory2.png")}
            style={{
              marginTop: "1%",
              marginLeft: "13%",
              height: windowHeight * 0.3409, // Adjust the height as needed
              width: windowWidth * 0.75, // Adjust the width as needed
            }}
          >
            <Text
              style={{
                marginTop: "7%",
                marginLeft: "7%",
                fontSize: 20,
                // fontFamily: "memoryfont",
              }}
            >
              {memoryPeople}
            </Text>
          </ImageBackground>
          <Image
            source={require("../assets/Images/emotionstext1.png")}
            style={[
              {
                marginTop: "7%",
                marginLeft: "15%",
                width: "68%",
                height: windowHeight * 0.057,
                resizeMode: "contain",
              },
            ]}
          />
          <ImageBackground
            source={require("../assets/Images/highreslayerforcherrymemory2.png")}
            style={{
              marginTop: "2%",
              marginLeft: "13%",
              height: windowHeight * 0.3409, // Adjust the height as needed
              width: windowWidth * 0.75, // Adjust the width as needed
            }}
          >
            <Text
              style={{
                marginTop: "7%",
                marginLeft: "7%",
                fontSize: 20,
                // fontFamily: "memoryfont",
              }}
            >
              {memoryEmotions}
            </Text>
          </ImageBackground>
          <Image
            source={require("../assets/Images/musictext1.png")}
            style={[
              {
                marginTop: "7%",
                marginLeft: "9%",
                width: "80%",
                height: windowHeight * 0.057,
                resizeMode: "contain",
              },
            ]}
          />
          <ImageBackground
            source={require("../assets/Images/memorynamebox.png")}
            style={{
              marginTop: "3%",
              marginLeft: "13%",
              height: windowHeight * 0.12355, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          >
            <Image
              source={require("../assets/Images/musictext2.png")}
              style={{
                marginTop: "7.5%",
                marginLeft: "8%",
                height: "60%", // Adjust the height as needed
                width: "85%",
              }}
            />
          </ImageBackground>
          <Pressable
            onPress={() => navigation.navigate("EndOfPlanting")}
            onLongPress={onButtonLongPress}
            delayLongPress={1000}
          >
            <ImageBackground
              source={require("../assets/Images/darkbox.png")}
              style={{
                marginTop: "7%",
                marginLeft: "21.4%",
                height: windowHeight * 0.1338,
                width: windowWidth * 0.55,
              }}
            >
              <LinearGradient
                colors={["#006400", "#008000", "#00FF00"]} // Use your desired colors
                style={{
                  alignItems: "center",
                  borderRadius: 5, // Adjust as needed
                  padding: 10, // Adjust as needed
                  marginTop: "3%",
                  marginLeft: "6%",
                  height: windowHeight * 0.1175,
                  width: windowWidth * 0.5,
                  zIndex: 100000,
                }}
              >
                <Image
                  source={require("../assets/Images/planttext2.png")}
                  style={{
                    marginTop: "12%",
                    marginLeft: "3%",
                    height: "45%",
                    width: "77%",
                  }}
                />
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </FixWhiteSpace>
  );
}
