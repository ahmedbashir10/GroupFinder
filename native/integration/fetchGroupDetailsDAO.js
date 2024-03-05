import { db } from "../dbConfig";

const fetchGroupDetailsDAO = async (groupId) => {
  try {
    const groupRef = db.collection("groups").doc(groupId);
    const doc = await groupRef.get();

    if (!doc.exists) {
      console.log("No such groupdetails to fetch!");
      return null;
    }

    const groupData = doc.data();

    return {
      id: doc.id,
      ...groupData,
    };
  } catch (error) {
    console.error("Error fetching group details:", error);
    throw error;
  }
};

export default fetchGroupDetailsDAO;
