// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import GroupsPresenter from '../presenter/GroupsPresenter';

// const MyGroupsScreenComponent = ({ navigation, groups }) => {
//   const handleNavigateToGroupDetails = (groupId) => {
//     navigation.navigate('MyGroupDetails', { groupId });
//   };

//   return (
//     <View style={styles.screen}>
//       <View style={styles.container}>
//         <Text style={styles.header}>My Groups:</Text>
//         <ScrollView>
//           {groups.map((group, index) => {
//             const memberCount = group.members ? group.members.length : 1; 
//             const maxMembers = group.preferences.groupSize.max;
//             const courseID = group.courseID; 

//             return (
//               <TouchableOpacity key={index} style={styles.groupItem} onPress={() => handleNavigateToGroupDetails(group.id)}>
//                 <Text style={styles.groupName}>{group.courseID || "Group Name"} Group</Text>
//                 <Text style={styles.groupMembers}>{`${memberCount}/${maxMembers}`}</Text>
//               </TouchableOpacity>
//             );
//           })}
//         </ScrollView>
//       </View>
//       <View style={styles.footer}>
//          <TouchableOpacity
//            style={styles.footerButton}
//            onPress={() => navigation.navigate('CourseID')} 
//         >
//           <Text style={styles.footerButtonText}>Find group</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.footerButton, styles.activeTab]}
//           onPress={() => {navigation.navigate('MyGroup')}}
//         >
//           <Text style={styles.footerButtonText}>My Groups</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import GroupsPresenter from '../presenter/GroupsPresenter';

const MyGroupsScreenComponent = ({ navigation, groups }) => {
  const handleNavigateToGroupDetails = (groupId) => {
    navigation.navigate('MyGroupDetails', { groupId });
  };

  // Render a message when there are no groups
  const renderNoGroupsMessage = () => {
    return (
      <View style={styles.noGroupsMessageContainer}>
        <Text style={styles.noGroupsMessageText}>You don't have any groups that you've created or joined.</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>My Groups:</Text>
        <ScrollView>
          {groups.length > 0 ? (
            groups.map((group, index) => {
              const memberCount = group.members ? group.members.length : 1;
              const maxMembers = group.preferences.groupSize.max;
              const courseID = group.courseID;

              return (
                <TouchableOpacity key={index} style={styles.groupItem} onPress={() => handleNavigateToGroupDetails(group.id)}>
                  <Text style={styles.groupName}>{group.courseID || "Group Name"} Group</Text>
                  <Text style={styles.groupMembers}>{`${memberCount}/${maxMembers}`}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            renderNoGroupsMessage()
          )}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('CourseID')}>
          <Text style={styles.footerButtonText}>Find group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, styles.activeTab]} onPress={() => navigation.navigate('MyGroup')}>
          <Text style={styles.footerButtonText}>My Groups</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyGroupsScreen = GroupsPresenter(MyGroupsScreenComponent);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#84b5f0',
    alignItems: 'center',

  },
  container: {
    paddingTop: 50, 
    padding: 20,
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
    width: '98%', // Adjust the width to match the design
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
    //paddingVertical: 10, // Reduced padding for smaller buttons
    //paddingHorizontal: 20, // Adjust horizontal padding if needed
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
  noGroupsMessageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  noGroupsMessageText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default MyGroupsScreen;