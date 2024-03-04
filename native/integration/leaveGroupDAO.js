// leaveGroupDAO.js
import { db } from "../dbConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const leaveGroupDAO = async (groupId, userModel) => {
  const groupRef = db.collection("groups").doc(groupId);
  const userEmail = userModel.getUserEmail();

  // Fetch the current group data
  const res = await groupRef.get();
  const groupData = res.data();

  // Filter out the user from the members array
  const updatedMembers = groupData.members.filter(member => member.email !== userEmail);

  // Update the group document with the new members array
  await groupRef.update({ members: updatedMembers });
};

export default leaveGroupDAO;
