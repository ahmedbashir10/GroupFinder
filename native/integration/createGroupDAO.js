import { db } from "../dbConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const createGroupDAO = async (userModel, preferencesModel) => {
  try {
    const countRef = db.collection("metadata").doc("groupCount");
    const countDoc = await countRef.get();
    let groupCount = countDoc.exists ? countDoc.data().count : 0;

    const groupName = `Group ${groupCount + 1}`;
    const name = userModel.getName();
    const email = userModel.getUserEmail();
    const courseID = userModel.getCourseID();
    const { grade, groupSize, location, specific } =
      preferencesModel.getPreferences();

    const groupsSnapshot = await db
      .collection("groups")
      .where("courseID", "==", courseID)
      .get();

    const isAlreadyMemberOrCreator = groupsSnapshot.docs.some((doc) => {
      const group = doc.data();
      return group.members.some((member) => member.email === email);
    });

    
    if (isAlreadyMemberOrCreator) {
      return { status: "already_part_of_course_group" };
    }

    const newMember = {
      name,
      email,
      preferences: {
        grade,
        groupSize: {
          min: groupSize.min,
          max: groupSize.max,
        },
        location,
        specific: specific,
      },
    };
    const groupData = {
      groupName: groupName,
      courseID,
      preferences: {
        grade,
        groupSize: {
          min: groupSize.min,
          max: groupSize.max,
        },
        location,
        specific: specific,
      },
      members: [newMember],
      createdAt: new Date(),
    };

    const groupRef = await db.collection("groups").add(groupData);

    await countRef.set({ count: groupCount + 1 });

    const courseRef = db.collection("courses").doc(courseID);
    const doc = await courseRef.get();

    if (doc.exists) {
      await courseRef.update({
        groups: firebase.firestore.FieldValue.arrayUnion(groupRef.id),
      });
    } else {
      await courseRef.set({ groups: [groupRef.id] }, { merge: true });
    }

    console.log("Group created with ID:", groupRef.id);
    return groupRef.id;
  } catch (error) {
    console.error("Error creating group:", error);
    throw error;
  }
};

export default createGroupDAO;
