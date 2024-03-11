import { db } from "../dbConfig";
import userModel from "../model/UserModel";

const fetchMyGroups = async () => {
  try {
    const userEmail = userModel.getUserEmail();
    const groupsSnapshot = await db.collection("groups").get();

    // Filter groups where the user is the creator or a member
    const groups = groupsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(group => 
        group.email === userEmail || // The user is the creator
        group.members.some(member => member.email === userEmail) // The user is a member
      );

    // Log the fetched groups to the console for debugging
    console.log("Fetched groups:", groups);

    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};



export default fetchMyGroups;
