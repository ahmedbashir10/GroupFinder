import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import WelcomeScreen from "./view/WelcomeScreen"
import EmailScreen from "./view/EmailScreen" // Make sure to import EmailScreen
import CourseIDScreen from "./view/CourseIDScreen"
import PreferencesScreen from "./view/PreferencesScreen"
import MatchResultsScreen from "./view/MatchResultsScreen"
import GroupDetailsScreen from "./view/GroupDetailsScreen"
import MyGroupsScreen from "./view/MyGroupsScreen"
import MyGroupsDetailsScreen from "./view/MyGroupDetailsScreen"

// import { firebaseConfig } from "./dbConfig";
// import { View } from "react-native"
// import Fetch from "./fetch"

const Stack = createStackNavigator()

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
          name="MyGroupDetails"
          component={MyGroupsDetailsScreen}
          // You can pass initial parameters if needed
        />

        <Stack.Screen
          name="MyGroup"
          component={MyGroupsScreen}
          // You can pass initial parameters if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
