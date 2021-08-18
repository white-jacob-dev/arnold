import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Button,
  List,
  Divider,
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

class WorkoutSection extends Component {
  render() {
    return (
      <View style={styles.workoutSection}>
        <View style={styles.labelSection}>
          <Text category="label">{this.props.name}</Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.infoSection}>
            <Button size="tiny" status="primary" appearance="outline">
              {this.props.date}
            </Button>
            <Button size="tiny" status="primary" appearance="outline">
              {this.props.weight}
            </Button>
            <Button size="tiny" status="primary" appearance="outline">
              {this.props.sets}
            </Button>
            <Button size="tiny" status="primary" appearance="outline">
              {this.props.reps}
            </Button>
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "lightgray",
            marginVertical: 5,
            width: "50%",
            alignSelf: "center",
          }}
        />
      </View>
    );
  }
}

function HomeWorkouts({ navigation }) {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;

  const navigateBack = () => {
    navigation.navigate("Library");
  };

  const title = (props) => <Text category="h6">Your Workouts</Text>;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const PlusAction = () => (
    <TopNavigationAction icon={PlusIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TopNavigation
        alignment="center"
        title={title}
        accessoryRight={PlusAction}
      />
      <Layout level="1" style={styles.header}>
        <Text category="c2" status="primary">
          DATE
        </Text>
        <Text category="c2" status="primary">
          WEIGHT
        </Text>
        <Text category="c2" status="primary">
          SETS
        </Text>
        <Text category="c2" status="primary">
          REPS
        </Text>
      </Layout>

      <ScrollView contentContainerStyle={styles.container}>
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
        <WorkoutSection
          name="Bicep Curl"
          date="08/15"
          weight="20"
          sets="5"
          reps="25"
        />
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
        <WorkoutSection
          name="Bicep Curl"
          date="08/15"
          weight="20"
          sets="5"
          reps="25"
        />
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
        <WorkoutSection
          name="Bicep Curl"
          date="08/15"
          weight="20"
          sets="5"
          reps="25"
        />
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
        <WorkoutSection
          name="Bicep Curl"
          date="08/15"
          weight="20"
          sets="5"
          reps="25"
        />
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
        <WorkoutSection
          name="Bicep Curl"
          date="08/15"
          weight="20"
          sets="5"
          reps="25"
        />
        <WorkoutSection
          name="Bench Press"
          date="08/12"
          weight="200"
          sets="3"
          reps="10"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeWorkouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: "5%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
  },
  workoutSection: {
    height: "15%",
    width: "95%",
    marginBottom: "-5%",
  },
  labelSection: {
    height: "20%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 7,
  },
  infoCard: {
    backgroundColor: "white",
    height: "80%",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  infoSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
