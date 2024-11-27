import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@features/lib/colors";

const ExampleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Product: {process?.env?.EXPO_PUBLIC_PRODUCT_NAME}
      </Text>
      <Image
        source={require("@features/assets/images/partial-react-logo.png")}
        style={styles.image}
      />
      <Text>env: {process?.env?.EXPO_PUBLIC_URL}</Text>
    </View>
  );
};

export default ExampleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
  },

  text: {
    fontSize: 20,
    color: theme.white,
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
});
