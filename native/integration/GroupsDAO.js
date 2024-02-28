import { db } from "../dbConfig";
import userModel from "../model/UserModel";
const fetchMyGroups = async () => {
  try {
    const userEmail = userModel.getUserEmail();
    const querySnapshot = await db
      .collection("groups")
      .where("email", "==", userEmail)
      .get();
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};

export default fetchMyGroups;
