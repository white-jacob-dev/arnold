import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button style={styles.button} onPress={() => navigation.push("Details")}>
        Details again
      </Button>
      <Button style={styles.button} onPress={() => navigation.navigate("Home")}>
        Home
      </Button>
      <Button
        style={styles.button}
        title="Go back"
        onPress={() => navigation.goBack()}
      >
        Go back
      </Button>
      <Button style={styles.button} onPress={() => navigation.popToTop()}>
        First screen in stack
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: "5%",
  },
  button: {
    marginBottom: "5%",
  },
});

export default DetailsScreen;
