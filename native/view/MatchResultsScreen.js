import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MatchResultsPresenter from '../presenter/MatchResultsPresenter';
import UserModel from '../model/UserModel';

const MatchResultsScreen = ({ navigation }) => {
  const [matches, setMatches] = useState({ matchingGroups: [], partialMatches: [] });
  const [alertMessage, setAlertMessage] = useState('');
  const presenter = new MatchResultsPresenter(navigation);

  useEffect(() => {
    presenter.loadMatchingGroups(UserModel.getCourseID(), setMatches);
  }, []);

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage(''); 
    }
  }, [alertMessage]);

  const handleNavigateToGroupDetails = (group) => {
    if (group && group.id) {
      navigation.navigate('GroupDetails', { groupId: group.id });
    } else {
      console.error('Group ID is missing.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Render matching groups */}
      <Text style={styles.header}>YOU GOT {matches.matchingGroups.length} MATCHES!</Text>
      {matches.matchingGroups.map((group, index) => (
        <TouchableOpacity
          key={index}
          style={styles.groupItem}
          onPress={() => handleNavigateToGroupDetails(group)}
        >
          <Text style={styles.groupName}>{group.groupName}</Text>
          <Text>
            {group.members.length}/{group.preferences.groupSize.max} places left
          </Text>
        </TouchableOpacity>
      ))}

      
      {matches.partialMatches.length > 0 && (
  <View style={styles.subHeader} >
    <Text style={styles.subHeader}>You didn't match with these.</Text>
    <Text style={styles.subHeader}>Want to join anyways?</Text>
  </View>
)}
      {matches.partialMatches.map((group, index) => (
        <TouchableOpacity
          key={index}
          style={styles.groupItem}
          onPress={() => handleNavigateToGroupDetails(group)}
        >
          <Text style={styles.groupName}>{group.groupName}</Text>
          <Text>
            {group.members.length}/{group.preferences.groupSize.max} places left
          </Text>
          {group.partialMatch}
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => presenter.handleCreateGroup()} 
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
    margin: 1,
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




