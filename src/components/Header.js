import React from "react";
import { StyleSheet, View, Image, PixelRatio } from "react-native";

import { COLORS } from "../constants/styles";

const Header = () => {
  const logo =
    "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png";
  return (
    <View style={styles.container}>
      <Image
        className="header-image"
        source={{ uri: logo }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: "100%",
    borderBottomColor: COLORS.PRIMARY,
    borderBottomWidth: 5 / PixelRatio.get()
  },
  image: {
    height: 100,
    width: 250
    // resizeMode: "center",
  }
});

export default Header;
