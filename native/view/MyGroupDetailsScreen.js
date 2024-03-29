import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
} from "react-native";
import GroupDetailsPresenter from "../presenter/GroupDetailsPresenter";
import userModel from "../model/UserModel";

const MyGroupDetailsScreen = ({ navigation, route }) => {
  const [groupDetails, setGroupDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const { groupId } = route.params;

  const presenter = new GroupDetailsPresenter(
    {
      updateGroupDetails: setGroupDetails,
      onLeaveGroupSuccess: () => {
        
        alert('Successfully left the group.');
        navigation.navigate('CourseID'); // Adjust as needed
      },
      onLeaveGroupError: (error) => {
        alert("Failed to leave group: " + error.message);
      },
    },
    navigation
  );

  useEffect(() => {
    if (groupId) {
      presenter.loadGroupDetails(groupId);
    }
  }, [groupId]);

  const handleLeaveGroup = async () => {
    await presenter.leaveGroup(groupId, userModel);
  };

  const showModal = (member) => {
    const specificPreference = member.preferences?.specific || 'No specific preference.';
    setSelectedMember({ ...member, specificPreference });
    setModalVisible(true);
  };
  
  

  
const renderMembers = () => {
  return groupDetails?.members.map((member, index) => (
    <View key={index} style={styles.memberItem}>
      <Text style={styles.memberName}>{member.name}</Text>
      <TouchableOpacity onPress={() => showModal(member)} style={styles.infoButton}>
        <Text style={styles.infoButton}>Info</Text>
      </TouchableOpacity>
      <Text style={styles.memberEmail}>{member.email}</Text>
    </View>
  ));
};





  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {groupDetails?.groupName || "Group Details"}
      </Text>
      <View style={styles.preferencesSection}>
        <Text>Location Preference: {groupDetails?.preferences.location}</Text>
        <Text>Grade Preference: {groupDetails?.preferences.grade}</Text>
      </View>
     
     <View><Text style={styles.title}>Details Info:</Text></View>
      <View style={styles.membersSection}> 
        {renderMembers()}
      </View>
      <TouchableOpacity style={styles.joinButton} onPress={handleLeaveGroup}>
        <Text style={styles.joinButtonText}>Leave Group</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>
         {selectedMember?.specificPreference}
      </Text>
      <Button title="Close" onPress={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84b5f0", // The blue background color
    padding: 20,
  },
  title: {
    fontSize: 26, // Increased font size for the title
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  preferencesSection: {
    backgroundColor: "white", // White background for preference section
    padding: 15,
    borderRadius: 10, // Rounded corners for the boxes
    marginBottom: 20,
  },
  preferenceItem: {
    fontSize: 18, // Increased font size for readability
    color: "black",
    marginBottom: 10,
  },
  membersSection: {
    backgroundColor: "white", // White background for members section
    padding: 15,
    borderRadius: 10, // Rounded corners for the boxes
    marginBottom: 20,
  },
  memberItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  memberName: {
    fontSize: 18, // Increased font size for readability
    fontWeight: "bold",
    color: "black",
  },
  infoButton: {
    // Assuming you have an info icon image or using a library like react-native-vector-icons
  },
  memberEmail: {
    fontSize: 16, // Slightly smaller font size for the email
    color: "gray",
  },
  membersCount: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: "#ff0000", // Green background for the join button
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for the modal overlay
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
    width: "80%", // Modal width
  },
  modalText: {
    fontSize: 18, // Increased font size for readability
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MyGroupDetailsScreen;
