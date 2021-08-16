import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  Layout,
  Card,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";

class WorkoutSection extends Component {
  render() {
    return (
      <View style={styles.workoutSection}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>{this.props.name}</Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.infoSection}>
            <Text style={styles.info}>{this.props.date}</Text>
            <Text style={styles.info}>
              Weight <Text style={styles.infoBold}>{this.props.weight}</Text>
            </Text>
            <Text style={styles.info}>
              Sets <Text style={styles.infoBold}>{this.props.sets}</Text>
            </Text>
            <Text style={styles.info}>
              Reps <Text style={styles.infoBold}>{this.props.reps}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

function HomeWorkouts({ navigation }) {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;

  const navigateBack = () => {
    navigation.goBack();
  };

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
        title=""
        accessoryLeft={BackAction}
        accessoryRight={PlusAction}
      />
      <Layout style={styles.container} level="3">
        <Card>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small
            country in South Asia, located in the Arabian Sea of the Indian
            Ocean. It lies southwest of Sri Lanka and India, about 1,000
            kilometres (620 mi) from the Asian continent
          </Text>
        </Card>
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
        <StatusBar style="auto" />
      </Layout>
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
    marginHorizontal: "2%",
  },
  header: {
    marginTop: "10%",
    marginBottom: "-5%",
  },
  headerText: {
    color: "black",
    fontSize: 50,
    letterSpacing: -4,
  },
  period: {
    color: "#D21E1E",
    fontSize: 120,
  },

  workoutSection: {
    height: "10%",
    width: "90%",
  },
  labelSection: {
    height: "50%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  label: {
    fontSize: 20,
    letterSpacing: -1,
  },
  infoCard: {
    backgroundColor: "white",
    height: "50%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  infoSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    fontSize: 17,
  },
});
