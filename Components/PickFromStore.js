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
export default function PickFromStore({ navigation }) {
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
    setSelectedFruit("apple");
    setSelectedText("appletext");
  };
  const handlePressOrange = () => {
    handleSeedPackPressOrange();
    handleDoneEatingPress();
    setSelectedFruit("orange");
    setSelectedText("orangetext");
  };
  const handlePressPeach = () => {
    handleSeedPackPressPeach();
    handleDoneEatingPress();
    setSelectedFruit("peach");
    setSelectedText("peachtext");
  };
  const handlePressCoconut = () => {
    handleSeedPackPressCoconut();
    handleDoneEatingPress();
    setSelectedFruit("coconut");
    setSelectedText("coconuttext");
  };
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  return (
    <FixWhiteSpace>
      <ImageBackground
        source={require("../assets/Images/stand0.png")}
        style={{
          width: "100%",
          height: windowHeight * 0.85,
          // borderWidth: 5,
          // borderColor: "black",
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("SeedAcquired", { selectedFruit, selectedText })
          }
          style={{ zIndex: 10000000000000 }}
        >
          <Image
            source={require("../assets/Images/doneeatingbox.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.8878,
              left: windowWidth * 0.33,
              height: windowHeight * 0.0943, // Adjust the height as needed
              width: windowWidth * 0.37, // Adjust the width as needed .2444
            }}
          />

          <Image
            source={require("../assets/Images/doneeatingtext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.9175,
              left: windowWidth * 0.425,
              height: windowHeight * 0.0274, // Adjust the height as needed
              width: windowWidth * 0.18, // Adjust the width as needed .1521
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.52,
            left: windowWidth * 0.08,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpackbox.png")}
            style={{
              height: windowHeight * 0.154,
              width: windowWidth * 0.33,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.52,
            left: windowWidth * 0.105,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              height: windowHeight * 0.1409,
              width: windowWidth * 0.278,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressApple}
          style={{
            position: "absolute",
            top: windowHeight * 0.585,
            left: windowWidth * 0.21,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storeapple.png")}
            style={{
              height: windowHeight * 0.04,
              width: windowWidth * 0.08,
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleApple && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.56,
              left: windowWidth * 0.025,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43,
              zIndex: 1, // Adjust the width as needed
            }}
          />
        )}

        <Image
          source={require("../assets/Images/bigfarmer.png")}
          style={{
            position: "absolute",
            left: windowWidth * 0.03,
            height: windowHeight * 0.5, // Adjust the height as needed
            width: windowWidth * 0.9, // Adjust the width as needed
          }}
        />
        <Pressable
          onPress={() => navigation.navigate("MiddleOfWorld")}
          style={{ zIndex: 1 }}
        >
          <Image
            source={require("../assets/Images/xbutton.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.03,
              // left: windowWidth * 0.06,
              height: windowHeight * 0.07, // Adjust the height as needed
              width: windowWidth * 0.16, // Adjust the width as needed
            }}
          />
        </Pressable>
        <View style={{}}>
          <Image
            source={require("../assets/Images/stand1.png")}
            style={{ resizeMode: "contain" }}
          />
        </View>

        <View style={{}}>
          <Image
            source={require("../assets/Images/stand2.png")}
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
            source={require("../assets/Images/stand2.png")}
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
          source={require("../assets/Images/whatwouldyoulikebox.png")}
          style={{
            position: "absolute",
            top: windowHeight * 0.345,
            left: windowWidth * 0.18,
            //height: windowHeight * 0.19, // Adjust the height as needed
            //width: windowWidth * 0.76, // Adjust the width as needed
            height: windowHeight * 0.1625,
            width: windowWidth * 0.65,
          }}
        />
        {showGreatChoice ? (
          <Image
            source={require("../assets/Images/greatchoicetext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.365,
              left: windowWidth * 0.275,
              height: windowHeight * 0.11,
              width: windowWidth * 0.465,
            }}
          />
        ) : (
          <Image
            source={require("../assets/Images/whatwouldyouliketext.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.37,
              left: windowWidth * 0.22,
              height: windowHeight * 0.1,
              width: windowWidth * 0.56875,
            }}
          />
        )}
        <Pressable
          onPress={handlePressOrange}
          style={{
            position: "absolute",
            top: windowHeight * 0.52,
            left: windowWidth * 0.59,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpackbox.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.154,
              width: windowWidth * 0.33, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressOrange}
          style={{
            position: "absolute",
            top: windowHeight * 0.52,
            left: windowWidth * 0.615,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.1409,
              width: windowWidth * 0.278, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressOrange}
          style={{
            position: "absolute",
            top: windowHeight * 0.58,
            left: windowWidth * 0.725,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storeorange.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.045, // Adjust the height as needed
              width: windowWidth * 0.07, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleOrange && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.56,
              left: windowWidth * 0.54,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
        <Pressable
          onPress={handlePressPeach}
          style={{
            position: "absolute",
            top: windowHeight * 0.71,
            left: windowWidth * 0.08,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpackbox.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.154,
              width: windowWidth * 0.33, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressPeach}
          style={{
            position: "absolute",
            top: windowHeight * 0.71,
            left: windowWidth * 0.105,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.1409,
              width: windowWidth * 0.278, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressPeach}
          style={{
            position: "absolute",
            top: windowHeight * 0.769,
            left: windowWidth * 0.18,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storepeach.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.065, // Adjust the height as needed
              width: windowWidth * 0.13, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisiblePeach && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.755,
              left: windowWidth * 0.025,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
        <Pressable
          onPress={handlePressCoconut}
          style={{
            position: "absolute",
            top: windowHeight * 0.71,
            left: windowWidth * 0.59,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpackbox.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.154,
              width: windowWidth * 0.33, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressCoconut}
          style={{
            position: "absolute",
            top: windowHeight * 0.71,
            left: windowWidth * 0.615,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/seedpack.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.1409,
              width: windowWidth * 0.278, // Adjust the width as needed
            }}
          />
        </Pressable>
        <Pressable
          onPress={handlePressCoconut}
          style={{
            position: "absolute",
            top: windowHeight * 0.767,
            left: windowWidth * 0.695,
            zIndex: 1000,
          }}
        >
          <Image
            source={require("../assets/Images/storecoconut.png")}
            style={{
              position: "absolute",
              height: windowHeight * 0.06, // Adjust the height as needed
              width: windowWidth * 0.12, // Adjust the width as needed
              resizeMode: "cover",
            }}
          />
        </Pressable>
        {greenRingVisibleCoconut && (
          <Image
            source={require("../assets/Images/greenring.png")}
            style={{
              position: "absolute",
              top: windowHeight * 0.755,
              left: windowWidth * 0.54,
              height: windowHeight * 0.2033, // Adjust the height as needed
              width: windowWidth * 0.43, // Adjust the width as needed
            }}
          />
        )}
      </ImageBackground>
    </FixWhiteSpace>
  );
}
