import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import colors from "../assets/colors/colors";
import Onboard1 from "../assets/images/Onboard1.png";
import Onboard2 from "../assets/images/Onboard2.png";
import Onboard3 from "../assets/images/Onboard3.png";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Onboard(props) {
  const data = [
    {
      title: "Save time by tracking your studies",
      text: "Schedule your classes, assignments, quizzes and more",
      image: require("../assets/images/Onboard1.png"),
    },
    {
      title: "Stay on top of your education",
      text: "Reduce your stress, increase your productivity",
      image: require("../assets/images/Onboard2.png"),
    },
    {
      title: "Spend more time doing the things you love",
      text: "Get started within five minutes",
      image: require("../assets/images/Onboard3.png"),
    },
  ];

  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slides}>
        <Image source={item.image} alt={item.title} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.rightDoneWrapper}>
        <Text style={styles.doneText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.rightLeft}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.onBoardDone();
  };

  const keyExtractor = (item) => item.title;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar trans lucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: colors.blue,
  },
  textColor: {
    fontFamily: "OpenSans",
    fontSize: 30,
    color: colors.blue,
  },
  slides: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    fontFamily: "OpenSansBold",
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    marginTop: 20,
    marginHorizontal: 60,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: colors.blue,
    fontFamily: "OpenSansBold",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightLeft: {
    color: colors.blue,
    fontFamily: "OpenSansBold",
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  rightDoneWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  doneText: {
    color: colors.blue,
    fontFamily: "OpenSansBold",
    fontSize: 14,
  },
});
