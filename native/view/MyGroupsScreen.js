import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const MyGroupsScreen = ({ navigation }) => {
  // Hardcoded data for group list

  const handleNavigateToGroupDetails = () => {
    navigation.navigate('MyGroupDetails');
  };
  
  const myGroups = [
    { key: '1', name: 'ID2216 Group', members: '3/4' },
    { key: '2', name: 'ME2064 Group', members: '4/4' }
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>My Groups:</Text>
      <ScrollView >
      {myGroups.map((group, index) => (
        <TouchableOpacity key={index} style={styles.groupItem} onPress={handleNavigateToGroupDetails}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text>{group.members} </Text>
          {/* Added TouchableOpacity for navigation */}
        </TouchableOpacity>
      ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('CourseID')} 
        >
          <Text style={styles.footerButtonText}>Find group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.activeTab]}
          onPress={() => {navigation.navigate('MyGroup')}}
        >
          <Text style={styles.footerButtonText}>My Groups</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84b5f0',
    alignItems: 'center',
    paddingTop: 50, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
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
  groupMembers: {
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    height:100,
    borderTopColor: 'gray',
    //borderTopWidth: 1,
    position: 'absolute', // Change to 'relative' if you don't want it stuck to the bottom
    bottom: 0, // Raise the footer up from the bottom
  },
  footerButton: {
    flex: 1,
    paddingVertical: 10, // Reduced padding for smaller buttons
    paddingHorizontal: 20, // Adjust horizontal padding if needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a7ba2', // Inactive tab color
  },
  activeTab: {
    backgroundColor: '#8a9bb2', // Active tab color
  },
  footerButtonText: {
    color: 'white',
    fontSize: 14, // Reduced font size for footer text
  },
});

export default MyGroupsScreen;