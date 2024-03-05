// import React from "react"
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native"

// import MatchResultsPresenter from "../presenter/MatchResultsPresenter"

// const MatchResultsScreen = ({ navigation }) => {
  
//   const presenter = new MatchResultsPresenter(navigation);

//   // Hardcoded data for matches and other groups
//   const loadedMatches = [
//     { name: "Group 2", placesLeft: "2/4" },
//     { name: "Group 4", placesLeft: "1/4" },
//   ]

//   const otherGroupsData = [
//     { name: "Group 3", placesLeft: "2/4" },
//     { name: "Group 5", placesLeft: "1/4" },
//   ]

//   const noPlaceLeftGroup = [{ name: "Group 1", placesLeft: "0/4" }]

//   // Function to handle navigation to GroupDetailsScreen with group details
//   const handleNavigateToGroupDetails = () => {
//     navigation.navigate("GroupDetails")
//   }

//   const handleCreateGroup = () => {
//    // creategroup("IV3280", "Zoom", "pass", 1, 2, "test", "demo", "english")
//    presenter.handleCreateGroup();
//    //navigation.navigate("CourseID")
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>YOU GOT {loadedMatches.length} MATCHES!</Text>
//       {loadedMatches.map((group, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.groupItem}
//           onPress={handleNavigateToGroupDetails}
//         >
//           <Text style={styles.groupName}>{group.name}</Text>
//           <Text>{group.placesLeft} places left</Text>
//           {/* Added TouchableOpacity for navigation */}
//         </TouchableOpacity>
//       ))}

//       <Text style={styles.subHeader}>You did not match with these...</Text>
//       <Text style={styles.subText}>Want to join anyways?</Text>

//       {otherGroupsData.map((group, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={handleNavigateToGroupDetails}
//           style={styles.groupItem}
//         >
//           <Text style={styles.groupName}>{group.name}</Text>
//           <Text>{group.placesLeft} places left</Text>
//         </TouchableOpacity>
//       ))}

//       {noPlaceLeftGroup.map((group, index) => (
//         <TouchableOpacity key={index} style={styles.groupItemNoPlace}>
//           <Text style={styles.groupName}>{group.name}</Text>
//           <Text>{group.placesLeft} places left</Text>
//         </TouchableOpacity>
//       ))}

//       <TouchableOpacity style={styles.joinButton} onPress={handleCreateGroup}>
//         <Text style={styles.joinButtonText}>Create Group</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,
//     padding: 20,
//     backgroundColor: "#84b5f0",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center", // Center text horizontally
//     marginBottom: 20,
//   },
//   groupItem: {
//     backgroundColor: "white",
//     padding: 20,
//     alignSelf: "center", // Center group item to center horizontally
//     width: "98%", // Adjust the width to match the design
//     flexDirection: "row", // Layout children in a row
//     justifyContent: "space-between", // Space out children to start and end of container
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   groupItemNoPlace: {
//     backgroundColor: "grey",
//     padding: 20,
//     alignSelf: "center", // Center group item to center horizontally
//     width: "98%", // Adjust the width to match the design
//     flexDirection: "row", // Layout children in a row
//     justifyContent: "space-between", // Space out children to start and end of container
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   groupName: {
//     fontWeight: "bold",
//     textAlign: "center", // Center group name text
//   },
//   subHeader: {
//     fontSize: 20,
//     color: "white",
//     textAlign: "center", // Center text horizontally
//     marginTop: 20,
//   },
//   subText: {
//     color: "white",
//     textAlign: "center", // Center text horizontally
//     marginBottom: 10,
//   },
//   backButton: {
//     backgroundColor: "#2196f3", // Blue background for the back button
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   backButtonText: {
//     fontSize: 20, // Larger font size for button text
//     color: "white",
//     fontWeight: "bold",
//   },

//   joinButton: {
//     backgroundColor: "#4caf50", // Green background for the join button
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   joinButtonText: {
//     fontSize: 20, // Larger font size for button text
//     color: "white",
//     fontWeight: "bold",
//   },
// })

// export default MatchResultsScreen


import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MatchResultsPresenter from "../presenter/MatchResultsPresenter";
import UserModel from "../model/UserModel";

const MatchResultsScreen = ({ navigation }) => {
  const [matchingGroups, setMatchingGroups] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const presenter = new MatchResultsPresenter(navigation); // Instantiate your presenter


  useEffect(() => {
    // Load matching groups when the component mounts
    presenter.loadMatchingGroups(UserModel.getCourseID(), setMatchingGroups);
  }, []);

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage(""); // Reset the alert message after displaying it
    }
  }, [alertMessage]);

  const handleNavigateToGroupDetails = (group) => {
    if (group && group.id) {
      navigation.navigate("GroupDetails", { groupId: group.id });
    } else {
      console.error("Group ID is missing.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Render matching groups */}
      <Text style={styles.header}>YOU GOT {matchingGroups.length} MATCHES!</Text>
      {matchingGroups.map((group, index) => (
        <TouchableOpacity
          key={index}
          style={styles.groupItem}
          onPress={() => handleNavigateToGroupDetails(group)}
        >
          <Text  style={styles.groupName}>{group.groupName}</Text>
          <Text>{group.members.length}/{group.preferences.groupSize.max} places left</Text>
        </TouchableOpacity>
      ))}

      {/* Button to create a new group */}
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => presenter.handleCreateGroup()} // Call handleCreateGroup from the presenter
      >
        <Text style={styles.joinButtonText}>Create Group</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 20,
    backgroundColor: "#84b5f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center", // Center text horizontally
    marginBottom: 20,
  },
  groupItem: {
    backgroundColor: "white",
    padding: 20,
    alignSelf: "center", // Center group item to center horizontally
    width: "98%", // Adjust the width to match the design
    flexDirection: "row", // Layout children in a row
    justifyContent: "space-between", // Space out children to start and end of container
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  groupItemNoPlace: {
    backgroundColor: "grey",
    padding: 20,
    alignSelf: "center", // Center group item to center horizontally
    width: "98%", // Adjust the width to match the design
    flexDirection: "row", // Layout children in a row
    justifyContent: "space-between", // Space out children to start and end of container
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  groupName: {
    fontWeight: "bold",
    textAlign: "center", // Center group name text
  },
  subHeader: {
    fontSize: 20,
    color: "white",
    textAlign: "center", // Center text horizontally
    marginTop: 20,
  },
  subText: {
    color: "white",
    textAlign: "center", // Center text horizontally
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#2196f3", // Blue background for the back button
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 20, // Larger font size for button text
    color: "white",
    fontWeight: "bold",
  },

  joinButton: {
    backgroundColor: "#4caf50", // Green background for the join button
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  joinButtonText: {
    fontSize: 20, // Larger font size for button text
    color: "white",
    fontWeight: "bold",
  },
})

export default MatchResultsScreen;

