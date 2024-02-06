// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import WelcomeScreen from './Components/Welcome';
// import EmailScreen from './Components/EmailScreen';
// import CourseIDScreen from './Components/CourseID';
// import PreferencesScreen from './Components/PreferencesScreen';
// import MatchScreen from './Components/MatchScreen';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('Welcome');

//   const handleNavigate = (screenName) => {
//     setCurrentScreen(screenName);
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'Welcome':
//         return <WelcomeScreen onNavigate={() => handleNavigate('Email')} />;
//       case 'Email':
//         return <EmailScreen onNavigate={() => handleNavigate('CourseID')} />;
//       case 'CourseID':
//         return (
//           <CourseIDScreen onNavigate={() => handleNavigate('Preferences')} />
//         );
//       case 'Preferences':
//         return (
//           <PreferencesScreen onNavigate={() => handleNavigate('MatchScreen')} />
//         );
//       case 'MatchScreen':
//         return (
//           <MatchScreen onNavigateBack={() => handleNavigate('Preferences')} />
//         );
//       default:
//         return null;
//     }
//   };

//   return <View style={styles.container}>{renderScreen()}</View>;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./view/WelcomeScreen";
import EmailScreen from "./view/EmailScreen"; // Make sure to import EmailScreen
import CourseIDScreen from "./view/CourseIDScreen";
import PreferencesScreen from "./view/PreferencesScreen";
import MatchResultsScreen from "./view/MatchResultsScreen";
import GroupDetailsScreen from "./view/GroupDetailsScreen";
import MyGroupsScreen from "./view/MyGroupsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen} // Pass the component itself, not a JSX call
          // If you need to pass props, use the 'options' prop or the 'initialParams' prop.
        />
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen
          name="CourseID"
          component={CourseIDScreen}
          // If you need to pass initial parameters or presenters use the initialParams prop
        />
        <Stack.Screen
          name="Preferences"
          component={PreferencesScreen}
          // If you need to pass initial parameters or presenters use the initialParams prop
        />
        
        <Stack.Screen
          name="MatchResults"
          component={MatchResultsScreen}
          // You can pass initial parameters if needed
        />

        <Stack.Screen
          name="GroupDetails"
          component={GroupDetailsScreen}
          // You can pass initial parameters if needed
        />

<Stack.Screen
          name="MyGroup"
          component={MyGroupsScreen}
          // You can pass initial parameters if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
