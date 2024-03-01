import { db } from "../dbConfig";

// class FindGroupsDAO {
//   async fetchGroupsByCourseID(courseID) {
//     const querySnapshot = await db.collection("groups").where("courseID", "==", courseID).get();
//     return querySnapshot.docs.map(doc => doc.data());
//   }
// }

class FindGroupsDAO {
    async fetchGroupsByCourseID(courseID) {
      const querySnapshot = await db.collection("groups").where("courseID", "==", courseID).get();
      return querySnapshot.docs.map(doc => ({
        id: doc.id, // Include the document ID
        ...doc.data() // Spread the document's data
      }));
    }
  }
  

export default new FindGroupsDAO();
