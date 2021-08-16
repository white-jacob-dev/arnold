import React from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-navigation";

function WorkoutLibrary({ navigation }) {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TopNavigation alignment="center" title="" accessoryLeft={BackAction} />

      <Layout style={styles.layout} level="3">
        <Button
          style={styles.button}
          onPress={() => navigation.push("Details")}
        >
          Details again
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
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
      </Layout>
    </SafeAreaView>
  );
}
export default WorkoutLibrary;


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

