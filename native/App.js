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
import MyGroupsDetailsScreen from "./view/MyGroupDetailsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen name="CourseID" component={CourseIDScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />

        <Stack.Screen name="MatchResults" component={MatchResultsScreen} />

        <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} />

        <Stack.Screen name="MyGroupDetails" component={MyGroupsDetailsScreen} />

        <Stack.Screen name="MyGroup" component={MyGroupsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
