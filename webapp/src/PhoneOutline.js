import React from "react";
import { View, StyleSheet } from "react-native";

const PhoneOutline = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notch} />
      <View style={styles.screen}>WELCOME TO GROUP FINDER</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 800,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "black",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  notch: {
    width: 80,
    height: 40,
    backgroundColor: "#6F9BCE",
    position: "absolute",
    top: 0,
    borderRadius: [30, 30, 10, 10],
  },
  screen: {
    width: 460,
    height: 760,
    backgroundColor: "#6F9BCE",
    borderRadius: 30,
  },
});

export default PhoneOutline;
