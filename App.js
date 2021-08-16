import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./DetailsScreen.js";
import Splash from "./Splash.js";
import HomeWorkouts from "./HomeWorkouts.js";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  IconRegistry,
  Icon,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    const { Navigator, Screen } = createBottomTabNavigator();

    const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
    const FolderIcon = (props) => <Icon {...props} name="folder-outline" />;
    const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

    const BottomTabBar = ({ navigation, state }) => (
      <SafeAreaView>
        <BottomNavigation
          selectedIndex={state.index}
          onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
          <BottomNavigationTab title="Home" icon={HomeIcon} />
          <BottomNavigationTab title="Folders" icon={FolderIcon} />
          <BottomNavigationTab title="Settings" icon={SettingsIcon} />
        </BottomNavigation>
      </SafeAreaView>
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
      navigation: {
        marginBottom: "5%",
      },
    });

    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ApplicationProvider>
      </>
    );
  }
}
