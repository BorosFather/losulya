import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import Home from './screens/Home';
import About from './screens/About';

//Screen names
const home = "Home";
const about = "About";

const Tab = createBottomTabNavigator();

export default function MainFrame() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={home}
      screenOptions={({route}) => ({ 
        tabBarIcon: ({focused, color, size}) => {
          let inconName;
          let rn = route.name;

          if (rn === home) {
            inconName = focused ? "home" : "home-outlone";
          } else if(rn === about) {
            inconName = focused ? "admout" : "about-outlone";
          }
          return <Ionicons name = {inconName} size={size} color={color}/>
        },
         })}>

         <Tab.Screen name={home} component={Home}/>
         <Tab.Screen name={about} component={About}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
