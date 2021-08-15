import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import DetailsScreen from "./DetailsScreen.js";
import Splash from "./Splash.js";
import HomeWorkouts from "./HomeWorkouts.js";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation }) {
  return (
    <Layout style={styles.layout} level="1">
      <Text style={styles.header} category="h1">
        HOME.
      </Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        DETAILS
      </Button>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Splash")}
      >
        SPLASH
      </Button>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("HomeWorkouts")}
      >
        WORKOUTS
      </Button>
    </Layout>
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

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
      "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
      "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
      "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    });
  }

  render() {
    const { Navigator, Screen } = createBottomTabNavigator();

    const BottomTabBar = ({ navigation, state }) => (
      <BottomNavigation
        style={styles.navigation}
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab title="SPLASH" />
        <BottomNavigationTab title="DETAILS" />
        <BottomNavigationTab title="WORKOUTS" />
      </BottomNavigation>
    );

    const TabNavigator = () => (
      <Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Screen name="Splash" component={Splash} />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="Workouts" component={HomeWorkouts} />
      </Navigator>
    );
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}
