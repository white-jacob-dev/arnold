import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from 'expo-font';
import Splash from "./Splash.js"
import HomeWorkouts from "./HomeWorkouts.js"


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Splash"
        onPress={() => navigation.navigate('Splash')}
      />
      <Button
        title="Home Workouts"
        onPress={() => navigation.navigate('HomeWorkouts')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
      'JosefinSans-SemiBold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),

      'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });
  }

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="HomeWorkouts" component={HomeWorkouts} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

