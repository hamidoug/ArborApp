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

export default function MemoryDetails5({ navigation }) {
  const [swapGrayBox, setSwapGrayBox] = useState(false);
  const [swapNextText, setSwapNextText] = useState(false);
  const [showMusicText2, setShowMusicText2] = useState(false); // New state for musictext2.png visibility

  const handleMemoryBoxClick = () => {
    setShowMusicText2(true); // Show musictext2.png
    setSwapGrayBox(true); // Trigger swapGrayBox
    setSwapNextText(true); // Trigger swapNextText
  };
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/LongBackpack.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
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
          source={require("../assets/Images/memorymusictext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.335,
            left: windowWidth * 0.16,
            height: windowHeight * 0.035, // Adjust the height as needed
            width: windowWidth * 0.3, // Adjust the width as needed
            resizeMode: "cover",
          }}
        />

        <Pressable
          onPress={() => navigation.navigate("AvailableSeeds")}
          style={{}}
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
        <Pressable onPress={handleMemoryBoxClick}>
          <Image
            source={require("../assets/Images/memorynamebox.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.41,
              left: windowWidth * 0.145,
              height: windowHeight * 0.12355, // Adjust the height as needed
              width: windowWidth * 0.7, // Adjust the width as needed
            }}
          />
        </Pressable>
        {showMusicText2 && (
          <Image
            source={require("../assets/Images/musictext2.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.43,
              left: windowWidth * 0.205,
              height: windowHeight * 0.075, // Adjust the height as needed
              width: windowWidth * 0.585,
            }}
          />
        )}
        {/* <Pressable
          onPress={() => navigation.navigate("MemoryDetails4")}
          style={{
            position: "absolute",
            top: windowHeight * 0.685,
            left: windowWidth * 0.13,
          }}
        >
          <Image
            source={require("../assets/Images/darkbox.png")}
            style={{
              height: windowHeight * 0.0714,
              width: windowWidth * 0.29,
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("MemoryDetails4")}
          style={{
            position: "absolute",
            top: windowHeight * 0.705,
            left: windowWidth * 0.175,
          }}
        >
          <Image
            source={require("../assets/Images/backtext.png")}
            style={{
              height: windowHeight * 0.03,
              width: windowWidth * 0.2,
            }}
          />
        </Pressable>
        {swapGrayBox ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails6")}
            style={{
              position: "absolute",
              top: windowHeight * 0.685,
              left: windowWidth * 0.58,
            }}
          >
            <Image
              source={require("../assets/Images/darkbox.png")}
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
              top: windowHeight * 0.685,
              left: windowWidth * 0.58,
              height: windowHeight * 0.0714,
              width: windowWidth * 0.29,
            }}
          />
        )}
        {swapNextText ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails6")}
            style={{
              position: "absolute",
              top: windowHeight * 0.705,
              left: windowWidth * 0.63,
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
              top: windowHeight * 0.705,
              left: windowWidth * 0.63,
              height: windowHeight * 0.03,
              width: windowWidth * 0.2,
            }}
          />
        )}
        <Image
          source={require("../assets/Images/inputmethodtext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.7675,
            left: windowWidth * 0.295,
            height: windowHeight * 0.03,
            width: windowWidth * 0.41,
          }}
        />
        <Image
          source={require("../assets/Images/embedurltext.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.555,
            left: windowWidth * 0.305,
            height: windowHeight * 0.025,
            width: windowWidth * 0.4,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethodlayer.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.7955,
            left: windowWidth * 0.295,
            height: windowHeight * 0.04,
            width: windowWidth * 0.4,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod1.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.7955,
            left: windowWidth * 0.33,
            height: windowHeight * 0.019,
            width: windowWidth * 0.07,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod2.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.805,
            left: windowWidth * 0.43,
            height: windowHeight * 0.025,
            width: windowWidth * 0.055,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod3.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.807,
            left: windowWidth * 0.4915,
            height: windowHeight * 0.025,
            width: windowWidth * 0.1,
          }}
        />
        <Image
          source={require("../assets/Images/inputmethod4.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.807,
            left: windowWidth * 0.6,
            height: windowHeight * 0.01875,
            width: windowWidth * 0.075,
          }}
        /> */}
        <Pressable
          onPress={() => navigation.navigate("MemoryDetails4")}
          style={{
            position: "absolute",
            top: windowHeight * 0.685,
            left: windowWidth * 0.16,
          }}
        >
          <Image
            source={require("../assets/Images/darkbox.png")}
            style={{
              height: windowHeight * 0.0714,
              width: windowWidth * 0.29,
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("MemoryDetails4")}
          style={{
            position: "absolute",
            top: windowHeight * 0.705,
            left: windowWidth * 0.2,
          }}
        >
          <Image
            source={require("../assets/Images/backtext.png")}
            style={{
              height: windowHeight * 0.03,
              width: windowWidth * 0.2,
            }}
          />
        </Pressable>
        {swapGrayBox ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails6")}
            style={{
              position: "absolute",
              top: windowHeight * 0.685,
              left: windowWidth * 0.55,
            }}
          >
            <Image
              source={require("../assets/Images/darkbox.png")}
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
              top: windowHeight * 0.685,
              left: windowWidth * 0.55,
              height: windowHeight * 0.0714,
              width: windowWidth * 0.29,
            }}
          />
        )}
        {swapNextText ? (
          <Pressable
            onPress={() => navigation.navigate("MemoryDetails6")}
            style={{
              position: "absolute",
              top: windowHeight * 0.705,
              left: windowWidth * 0.615,
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
              top: windowHeight * 0.705,
              left: windowWidth * 0.605,
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
