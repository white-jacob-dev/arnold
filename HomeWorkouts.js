import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './assets/images/home.svg';
import Folder from './assets/images/folder.svg';
import Gear from './assets/images/gear.svg';
import Plus from './assets/images/plus.svg';
import { NavigationContainer } from '@react-navigation/native';
import { checkPropTypes } from 'prop-types';

class WorkoutSection extends Component {
  render() {
    return (
    <View style={styles.workoutSection}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>
            {this.props.name}
          </Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.infoSection}>
            <Text style={styles.info}>{this.props.date}</Text>
            <Text style={styles.info}>Weight <Text style={styles.infoBold}>{this.props.weight}</Text></Text>
            <Text style={styles.info}>Sets <Text style={styles.infoBold}>{this.props.sets}</Text></Text>
            <Text style={styles.info}>Reps <Text style={styles.infoBold}>{this.props.reps}</Text></Text>
          </View>
        </View>
    </View>
    );
  }
}

class FooterMenu extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Home fill='#D21E1E75'/>
        <TouchableOpacity styles={styles.test}><Folder/></TouchableOpacity>
        <TouchableOpacity><Gear/></TouchableOpacity>
      </View>
    )
  }
}

function HomeWorkouts({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Workouts<Text style={styles.period}>.</Text></Text>
        </View>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Home')}>
          <Plus height={30} width={30} style={styles.plus}/>
        </TouchableOpacity>
        <WorkoutSection name='Bench Press' date='08/12' weight='200' sets='3' reps='10'/>
        <WorkoutSection name='Bicep Curl' date='08/15' weight='20' sets='5' reps='25'/>
        <WorkoutSection name='Bench Press' date='08/12' weight='200' sets='3' reps='10'/>
        <WorkoutSection name='Bicep Curl' date='08/15' weight='20' sets='5' reps='25'/>
        <WorkoutSection name='Bench Press' date='08/12' weight='200' sets='3' reps='10'/>
        <WorkoutSection name='Bicep Curl' date='08/15' weight='20' sets='5' reps='25'/>
        <WorkoutSection name='Bench Press' date='08/12' weight='200' sets='3' reps='10'/>
        <FooterMenu/>
        <StatusBar style="auto"/>
      </View>
    );
}
export default HomeWorkouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: '-5%',
    marginBottom: '-5%'
  },
  headerText: {
    color: 'black',
    fontSize: 50,
    fontFamily: 'JosefinSans-SemiBold', 
    letterSpacing: -4
  },
  period: {
    color: '#D21E1E',
    fontSize: 120,
    fontFamily: 'JosefinSans-SemiBold', 
  },
  circle: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: '#D21E1E',
    shadowOpacity: 1,
    shadowOffset: {width:3, height:3},
    position: 'absolute',
    top: '3%',
    right: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  workoutSection: {
    height: '10%',
    width: '90%',
  },
  labelSection: {
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  label: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    letterSpacing: -1
  },
  infoCard: {
    backgroundColor: 'white',
    height: '50%',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width:3, height:3},
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  info: {
    fontFamily: 'Lato-Light',
    fontSize: 17,
  },
  infoBold: {
    fontFamily: 'JosefinSans-Bold'
  },
  footer: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'white',
    bottom: 30,
    height: '6%',
    width: '70%',
    borderRadius: 25,
    shadowColor: '#D21E1E',
    shadowOpacity: 1,
    shadowOffset: {width:3, height:3},
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
});
