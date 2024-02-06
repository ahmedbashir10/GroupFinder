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
          onPress={() => navigation.navigate('FindGroupScreen')} // Replace with your actual navigation call
        >
          <Text style={styles.footerButtonText}>Find group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.activeTab]}
          onPress={() => {}}
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
    backgroundColor: '#4f6d7a',
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
    width: '90%',
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupName: {
    fontWeight: 'bold',
  },
  groupMembers: {
    color: 'gray',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  footerButton: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a7ba2', // inactive tab color
  },
  activeTab: {
    backgroundColor: '#8a9bb2', // active tab color
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyGroupsScreen;
