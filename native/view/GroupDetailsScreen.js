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

const GroupDetailsScreen = ({ navigation, route }) => {
  const [groupDetails, setGroupDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const { groupId } = route.params;

  const presenter = new GroupDetailsPresenter(
    {
      updateGroupDetails: setGroupDetails,

      onJoinGroupSuccess: () => {
        alert("You have successfully joined the group.");
        presenter.loadGroupDetails(groupId);
      },
      onGroupFull: () => {
        alert("This group is already full.");
      },
      onAlreadyMember: () => {
        alert("You have already joined this group.");
      },
      onAlreadyInGroupInCourse: () => {
        alert("You have already joined in other group with the same course.");
      },

      onJoinGroupError: (error) => {
        alert("Failed to join group: " + error.message);
      },
    },
    navigation
  );

  useEffect(() => {
    if (groupId) {
      presenter.loadGroupDetails(groupId);
    }
  }, [groupId]);

  const handleJoinGroup = async () => {
    await presenter.joinGroup(groupId, userModel);
  };

  const showModal = (member) => {
    const specificPreference =
      member.preferences?.specific || "No specific preference.";
    setSelectedMember({ ...member, specificPreference });
    setModalVisible(true);
  };

  const renderMembers = () => {
    return groupDetails?.members.map((member, index) => (
      <View key={index} style={styles.memberItem}>
        <Text style={styles.memberName}>{member.name}</Text>
        <TouchableOpacity
          onPress={() => showModal(member)}
          style={styles.infoButton}
        >
          <Text style={styles.infoButtonText}>Info</Text>
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
      <View>
        <Text style={styles.title}>Details Info:</Text>
      </View>
      <View style={styles.membersSection}>{renderMembers()}</View>
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinGroup}>
        <Text style={styles.joinButtonText}>Join Group</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  preferencesSection: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  preferenceItem: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },
  membersSection: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  memberItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  infoButton: {},
  memberEmail: {
    fontSize: 16,
    color: "gray",
  },
  membersCount: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  joinButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#2196f3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default GroupDetailsScreen;
