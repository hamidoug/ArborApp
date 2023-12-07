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

export default function MemoryDetails1({ navigation }) {
  //   const [fontLoaded, setFontLoaded] = useState(false);

  //   if (!fontLoaded) {
  //     return (
  //       <AppLoading
  //         startAsync={fetchFonts}
  //         onFinish={() => setFontLoaded(true)}
  //         onError={console.warn}
  //       />
  //     );
  //   }
  const [showGrayRectangle, setShowGrayRectangle] = useState(false);
  const [showDogImage, setShowDogImage] = useState(false);
  const [swapGrayBox, setSwapGrayBox] = useState(false);
  const [swapNextText, setSwapNextText] = useState(false);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("memoryName")
      .then((storedText) => {
        if (storedText) {
          setInputText(storedText);
        }
      })
      .catch((error) => {
        console.error("Error loading text from AsyncStorage: ", error);
      });
  }, []);
  const handleTextChange = (text) => {
    setInputText(text);
    AsyncStorage.setItem("memoryName", text)
      .then(() => {
        console.log("Text saved in AsyncStorage");
      })
      .catch((error) => {
        console.error("Error saving text to AsyncStorage: ", error);
      });
  };
  const toggleGrayRectangle = () => {
    setShowGrayRectangle(!showGrayRectangle);
  };
  const handleImageClick = () => {
    setShowGrayRectangle(false);
    setSwapGrayBox(true);
    setSwapNextText(true);
    setShowDogImage(true);
  };
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/LongBackpack.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        {showGrayRectangle && (
          <Image
            source={require("../assets/Images/graybox.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "10000%",
              width: "200%",
              opacity: 2, // Adjust the opacity as needed
            }}
          />
        )}
        <Image
          source={require("../assets/Images/peachtitle.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.13,
            left: windowWidth * 0.28,
            height: windowHeight * 0.0519, // Adjust the height as needed
            width: windowWidth * 0.45, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../assets/Images/memorynametext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.235,
            left: windowWidth * 0.16,
            height: windowHeight * 0.0325, // Adjust the height as needed
            width: windowWidth * 0.5, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Pressable
          onPress={() => navigation.navigate("AvailableSeeds")}
          style={{
            zIndex: 1,
          }}
        >
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.02,
              left: windowWidth * 0.15,
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.16, // Adjust the width as needed
            }}
          />
        </Pressable>
        <TextInput
          style={{
            position: "absolute",
            top: windowHeight * 0.3,
            left: windowWidth * 0.2,
            height: windowHeight * 0.12355, // Adjust the height as needed
            width: windowWidth * 0.7, // Adjust the width as needed
            opacity: 1, // Make the TextInput invisible
            zIndex: 1,
            // fontFamily: "memoryfont",
          }}
          placeholder="Type here"
          onChangeText={handleTextChange}
          value={inputText}
        />
        <Image
          source={require("../assets/Images/memorynamebox.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.28,
            left: windowWidth * 0.145,
            height: windowHeight * 0.12355, // Adjust the height as needed
            width: windowWidth * 0.7, // Adjust the width as needed
          }}
        />
        <Image
          source={require("../assets/Images/imagetext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.42,
            left: windowWidth * 0.13,
            height: windowHeight * 0.03525, // Adjust the height as needed
            width: windowWidth * 0.235, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />
        <Pressable onPress={toggleGrayRectangle}>
          <Image
            source={require("../assets/Images/highreslayerforcherrymemory2.png")}
            style={{
              top: windowHeight * 0.465,
              left: windowWidth * 0.27,
              height: windowHeight * 0.21589, // Adjust the height as needed
              width: windowWidth * 0.475, // Adjust the width as needed
            }}
          />
        </Pressable>
        {showDogImage && (
          <Image
            source={require("../assets/Images/dogimage.png")}
            style={{
              top: windowHeight * 0.25375,
              left: windowWidth * 0.3,
              height: windowHeight * 0.2,
              width: windowWidth * 0.43,
            }}
          />
        )}
        {showGrayRectangle && (
          <View style={{ zIndex: 2 }}>
            <Image
              source={require("../assets/Images/highreslayerforcherrymemory2.png")}
              style={{
                top: windowHeight * 0.14,
                left: windowWidth * 0.132,
                height: windowHeight * 0.3409, // Adjust the height as needed
                width: windowWidth * 0.75, // Adjust the width as needed
              }}
            />
            <Image
              source={require("../assets/Images/imagetext.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.215,
                left: windowWidth * 0.4,
                height: windowHeight * 0.03525, // Adjust the height as needed
                width: windowWidth * 0.235, // Adjust the width as needed
                resizeMode: "cover",
              }}
            />

            <Image
              source={require("../assets/Images/xbutton.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.165,
                left: windowWidth * 0.165,
                height: windowHeight * 0.07, // Adjust the height as needed
                width: windowWidth * 0.16, // Adjust the width as needed
              }}
            />

            <Image
              source={require("../assets/Images/highreslayerforcherrymemory2.png")}
              style={{
                top: windowHeight * -0.07,
                left: windowWidth * 0.245,
                height: windowHeight * 0.1055, // Adjust the height as needed
                width: windowWidth * 0.225, // Adjust the width as needed
              }}
            />
            <Image
              source={require("../assets/Images/inputmethod4.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.3,
                left: windowWidth * 0.265,
                height: windowHeight * 0.05,
                width: windowWidth * 0.2,
              }}
            />
            <Pressable onPress={handleImageClick}>
              <Image
                source={require("../assets/Images/highreslayerforcherrymemory2.png")}
                style={{
                  top: windowHeight * -0.176,
                  left: windowWidth * 0.565,
                  height: windowHeight * 0.1055, // Adjust the height as needed
                  width: windowWidth * 0.225, // Adjust the width as needed
                }}
              />
            </Pressable>
            <Pressable
              onPress={handleImageClick}
              style={{
                position: "absolute",
                top: windowHeight * 0.275,
                left: windowWidth * 0.57,
              }}
            >
              <Image
                source={require("../assets/Images/uploadfromgallerypicture.png")}
                style={{
                  height: windowHeight * 0.0844,
                  width: windowWidth * 0.225,
                }}
              />
            </Pressable>
            <Image
              source={require("../assets/Images/takepicturetext.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.3925,
                left: windowWidth * 0.28,
                height: windowHeight * 0.0375,
                width: windowWidth * 0.15,
              }}
            />
            <Image
              source={require("../assets/Images/uploadfromgallerytext.png")}
              style={{
                position: "absolute",
                top: windowHeight * 0.3925,
                left: windowWidth * 0.56,
                height: windowHeight * 0.041,
                width: windowWidth * 0.26, //15625
              }}
            />
          </View>
        )}
        {swapGrayBox ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails2")}
            style={{
              position: "absolute",
              top: windowHeight * 0.695,
              left: windowWidth * 0.545,
            }}
          >
            <Image
              source={require("../assets/Images/darkbox.png")} // Change the image source accordingly
              style={{
                height: windowHeight * 0.0714,
                width: windowWidth * 0.29,
              }}
            />
          </Pressable>
        ) : (
          <Image
            source={require("../assets/Images/graybox.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.695,
              left: windowWidth * 0.545,
              height: windowHeight * 0.0714,
              width: windowWidth * 0.29,
            }}
          />
        )}
        {swapNextText ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails2")}
            style={{
              position: "absolute",
              top: windowHeight * 0.71,
              left: windowWidth * 0.61,
            }}
          >
            <Image
              source={require("../assets/Images/nexttext2.png")} // Change the image source accordingly
              style={{
                height: windowHeight * 0.03,
                width: windowWidth * 0.2,
              }}
            />
          </Pressable>
        ) : (
          <Image
            source={require("../assets/Images/nexttext1.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.7,
              left: windowWidth * 0.6,
              height: windowHeight * 0.03,
              width: windowWidth * 0.2,
            }}
          />
        )}
        <Image
          source={require("../assets/Images/inputmethodtext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.81,
            left: windowWidth * 0.295,
            height: windowHeight * 0.03,
            width: windowWidth * 0.41,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethodlayer.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.84,
            left: windowWidth * 0.295,
            height: windowHeight * 0.04,
            width: windowWidth * 0.4,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod1.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.853,
            left: windowWidth * 0.33,
            height: windowHeight * 0.019,
            width: windowWidth * 0.07,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod2.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.845,
            left: windowWidth * 0.43,
            height: windowHeight * 0.025,
            width: windowWidth * 0.055,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod3.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.85,
            left: windowWidth * 0.4915,
            height: windowHeight * 0.025,
            width: windowWidth * 0.1,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod4.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.847,
            left: windowWidth * 0.6,
            height: windowHeight * 0.01875,
            width: windowWidth * 0.075,
          }}
        />
      </ImageBackground>
    </FixWhiteSpace>
  );
}
