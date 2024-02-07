import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const MyGroupsScreen = ({ navigation }) => {
  // Hardcoded data for group list
  const myGroups = [
    { key: '1', name: 'ID2216 Group', members: '3/4' },
    { key: '2', name: 'ME2064 Group', members: '4/4' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Groups:</Text>
      <FlatList
        data={myGroups}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Text style={styles.groupName}>{item.name}</Text>
            <Text style={styles.groupMembers}>{item.members}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Preferences')} 
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
    marginBottom: 20,
  },
  groupItem: {
    backgroundColor: 'white',
    width: '100%', 
    padding: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center', // Center group items
  },
  groupName: {
    fontWeight: 'bold',
  },
  groupMembers: {
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    width: '40%',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    position: 'absolute', // Change to 'relative' if you don't want it stuck to the bottom
    bottom: 50, // Raise the footer up from the bottom
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