// // GroupsDAO.js
// import { db } from "../dbConfig";

// const fetchGroups = async () => {
//   try {
//     const querySnapshot = await db.collection("groups").get();
//     return querySnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//   } catch (error) {
//     console.error("Error fetching groups:", error);
//     throw error;
//   }
// };

// export default fetchGroups;

// GroupsDAO.js
import { db } from "../dbConfig";
import userModel from "../model/UserModel"; // Ensure this path is correct
const fetchMyGroups = async () => {
  try {
    const userEmail = userModel.getUserEmail(); // Get the current user's email from the UserModel
    const querySnapshot = await db.collection("groups")
                                  .where("email", "==", userEmail) // Filter groups by user's email
                                  .get();
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};

export default fetchMyGroups;
