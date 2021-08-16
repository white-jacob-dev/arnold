import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Button,
  List,
  Divider
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

class WorkoutSection extends Component {
  render() {
    return (
      <View style={styles.workoutSection}>
        <View style={styles.labelSection}>
          <Text category='label'>{this.props.name}</Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.infoSection}>
            <Button size='tiny' status='primary' appearance='outline'>
              {this.props.date}
              </Button>
            <Button size='tiny' status='success'>
            Weight {this.props.weight}
            </Button>
            <Button size='tiny' status='info'>
            Sets {this.props.sets}
            </Button>
            <Button size='tiny' status='danger'>
            Reps {this.props.reps}
            </Button>
            
          </View>

        </View>
        <Divider style={{marginVertical: 5}}/>

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
      <ScrollView contentContainerStyle={styles.container} level="3">
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
    flexGrow: 1
  },
  workoutSection: {
    height: "13%",
    width: "95%",
    marginBottom: '-5%'
  },
  labelSection: {
    height: "20%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 7
  },
  infoCard: {
    backgroundColor: "white",
    height: "80%",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#e8e8e8'
  },
  infoSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },

});
