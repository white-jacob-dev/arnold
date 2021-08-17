import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Layout,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Input
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

  const [value, setValue] = React.useState('')

  const inputField = (props) => (
    <View>
      <Input
          style={styles.input} 
          placeholder='Search Workouts'
          size='small'
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
      />
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TopNavigation 
        style={styles.topNav}
        title={inputField}
        accessoryLeft={BackAction} 
        alignment='center'
      />

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
  input: {
    width: '70%',
    borderRadius: 5
  },
  topNav: {
    borderBottomWidth: 1,
    borderColor:'#e8e8e8',
  }
});

