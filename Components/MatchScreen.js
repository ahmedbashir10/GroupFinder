import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MatchScreen = ({ navigation }) => {
 
  const groups = [
    { id: 'Group 2', placesLeft: '2/4 places left', matched: true },
    { id: 'Group 4', placesLeft: '1/4 places left', matched: true },
    { id: 'Group 3', placesLeft: '2/4 places left', matched: false },
    { id: 'Group 5', placesLeft: '1/4 places left', matched: false },
    { id: 'Group 1', placesLeft: '0/4 places left', matched: false },
  ];

  // Count matched groups
  const matchedGroups = groups.filter(group => group.matched).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>YOU GOT {matchedGroups} MATCHES!</Text>
      <ScrollView>
        {groups.map(group => (
          <TouchableOpacity key={group.id} style={group.matched ? styles.matchedGroup : styles.otherGroup}>
            <Text style={styles.groupId}>{group.id}</Text>
            <Text style={styles.placesLeft}>{group.placesLeft}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6', // Replace with the background color of your choice
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  matchedGroup: {
    backgroundColor: '#ffffff', // Replace with the matched group color of your choice
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  otherGroup: {
    backgroundColor: '#cccccc', // Replace with the other group color of your choice
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  groupId: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  placesLeft: {
    fontSize: 16,
    color: '#333333',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  backButtonText: {
    fontSize: 20,
    color: '#ffffff', // Replace with the back button text color of your choice
  },
});

export default MatchScreen;
