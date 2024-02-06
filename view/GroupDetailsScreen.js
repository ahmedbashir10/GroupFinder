// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const GroupDetailsScreen = ({ navigation }) => {
//   // Hardcoded group details for demonstration
//   const groupDetails = {
//     name: "Group 2",
//     preferences: {
//       location: "Remote",
//       grade: "Pass"
//     },
//     members: [
//       { name: "Azmeer", email: "user@email.com", warning: true },
//       { name: "Bashkim", email: "user@email.com", warning: false },
//       { name: "Folke", email: "user@email.com", warning: true },
//       { name: "Ismail", email: "user@email.com", warning: false }
//     ],
//     membersCount: "4/5"
//   };

//   const handleJoinGroup = () => {
//     // Here you will handle the join group logic
//     // For example: presenter.joinGroup(groupDetails.name);
//     console.log('Join group logic here');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{groupDetails.name}</Text>
      
//       {/* ... rest of your component here */}
      
//       <TouchableOpacity 
//         style={styles.joinButton}
//         onPress={handleJoinGroup}
//       >
//         <Text style={styles.joinButtonText}>Join Group</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4f6d7a',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   // ... rest of your styles here
  
//   joinButton: {
//     backgroundColor: '#4caf50',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   joinButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   backButton: {
//     backgroundColor: '#2196f3',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   backButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   // ... any additional styles you might need
// });

// export default GroupDetailsScreen;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const GroupDetailsScreen = ({ navigation }) => {
  // Hardcoded group details for demonstration
  const groupDetails = {
    name: "Group 2",
    preferences: {
      location: "Remote",
      grade: "Pass"
    },
    members: [
      { name: "Azmeer", email: "user@email.com", warning: true },
      { name: "Bashkim", email: "user@email.com", warning: false },
      { name: "Folke", email: "user@email.com", warning: true },
      { name: "Ismail", email: "user@email.com", warning: false }
    ],
    membersCount: "4/5"
  };

  const handleJoinGroup = () => {
    // Here you will handle the join group logic
    navigation.navigate('MyGroup');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{groupDetails.name}</Text>
      
      {/* Preferences section */}
      <View style={styles.preferencesSection}>
        <Text style={styles.preferenceItem}>Location Preference: {groupDetails.preferences.location}</Text>
        <Text style={styles.preferenceItem}>Grade Preference: {groupDetails.preferences.grade}</Text>
      </View>

      {/* Members section */}
      <View style={styles.membersSection}>
        {groupDetails.members.map((member, index) => (
          <View key={index} style={styles.memberItem}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberEmail}>{member.email}</Text>
          </View>
        ))}
      </View>
      
      <Text style={styles.membersCount}>{groupDetails.membersCount} members joined</Text>
      
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinGroup}>
        <Text style={styles.joinButtonText}>Join Group</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    alignSelf: 'center', // Add this line to center the title
  },
  preferencesSection: {
    marginBottom: 20,
  },
  preferenceItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center', // Center the members section
    width: '40%',
    
  },
  membersSection: {
    marginBottom: 20,
    alignSelf: 'center', // Center the members section
    width: '40%',
  },
  memberItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row', // Align the name and email side by side
    justifyContent: 'space-between',
  },
  memberName: {
    fontWeight: 'bold',
    flex: 1,
  },
  memberEmail: {
    color: 'gray',
    flex: 1, // Allow the email to grow
    textAlign: 'right',
  },
  membersCount: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    alignSelf: 'center',
  },
  joinButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GroupDetailsScreen;