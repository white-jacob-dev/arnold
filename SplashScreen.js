import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";

function Splash() {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Arnold<Text style={styles.period}>.</Text>
      </Text>
      <Text style={styles.subheader}>The simple gym tracker</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default Splash;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginTop: "-20%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "black",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: -2,
  },
  period: {
    color: "color-primary-default",
    fontSize: 120,
  },
  subheader: {
    marginTop: "-7%",
    color: "black",
    fontSize: 30,
    fontWeight: "200",
    letterSpacing: -1,
  },
});
