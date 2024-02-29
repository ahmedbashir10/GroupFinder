import { db } from "../dbConfig";

class FindGroupsDAO {
  async fetchGroupsByCourseID(courseID) {
    const querySnapshot = await db.collection("groups").where("courseID", "==", courseID).get();
    return querySnapshot.docs.map(doc => doc.data());
  }
}

export default new FindGroupsDAO();
