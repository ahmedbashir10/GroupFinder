import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MatchResultsScreen = ({ navigation }) => {
  // Hardcoded data for matches and other groups
  const loadedMatches = [
    { name: 'Group 2', placesLeft: '2/4' },
    { name: 'Group 4', placesLeft: '1/4' },
  ];

  const otherGroupsData = [
    { name: 'Group 3', placesLeft: '2/4' },
    { name: 'Group 5', placesLeft: '1/4' },
    { name: 'Group 1', placesLeft: '0/4' },
  ];

  // Function to handle navigation to GroupDetailsScreen with group details
  const handleNavigateToGroupDetails = () => {
    navigation.navigate('GroupDetails');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>YOU GOT {loadedMatches.length} MATCHES!</Text>
      {loadedMatches.map((group, index) => (
        <TouchableOpacity key={index} style={styles.groupItem} onPress={handleNavigateToGroupDetails}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text>{group.placesLeft} places left</Text>
          {/* Added TouchableOpacity for navigation */}
        </TouchableOpacity>
      ))}

       <Text style={styles.subHeader}>You did not match with these...</Text>
       <Text style={styles.subText}>Want to join anyways?</Text>
      
       {otherGroupsData.map((group, index) => (
        <TouchableOpacity onPress={handleNavigateToGroupDetails}>
        <View key={index} style={styles.groupItem}>
           <Text style={styles.groupName}>{group.name}</Text>
           <Text>{group.placesLeft} places left</Text>
         </View>
         </TouchableOpacity>
       ))}
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 20,
    backgroundColor: '#84b5f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Center text horizontally
    marginBottom: 20,
  },
  groupItem: {
    backgroundColor: 'white',
    padding: 20,
    alignSelf: 'center', // Center group item to center horizontally
    width: '80%', // Adjust the width to match the design
    flexDirection: 'row', // Layout children in a row
    justifyContent: 'space-between', // Space out children to start and end of container
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  groupName: {
    fontWeight: 'bold',
    textAlign: 'center', // Center group name text
  },
  subHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center', // Center text horizontally
    marginTop: 20,
  },
  subText: {
    color: 'white',
    textAlign: 'center', // Center text horizontally
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center', // Align button to center horizontally
    marginTop: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center', // Center text horizontally
  },
});

export default MatchResultsScreen;
