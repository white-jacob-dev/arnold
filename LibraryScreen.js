import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Layout,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Input,
  Text,
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

  const [value, setValue] = React.useState("");

  const inputField = (props) => (
    <View>
      <Input
        style={styles.input}
        placeholder="Search Workouts"
        size="small"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <TopNavigation
        style={styles.topNav}
        title={inputField}
        accessoryLeft={BackAction}
        alignment="center"
      />

      <Layout style={styles.layout}>
        <Text>Here's a list of all available workouts</Text>
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
    zIndex: 1,
  },
  input: {
    width: "70%",
    borderRadius: 5,
  },
  topNav: {
    zIndex: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 5,
  },
});
