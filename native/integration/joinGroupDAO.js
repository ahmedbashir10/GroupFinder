// import { db } from "../dbConfig";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// const joinGroupDAO = async (groupId, userModel, userPreferences) => {
//   const groupRef = db.collection("groups").doc(groupId);
//   const groupDoc = await groupRef.get();

//   if (!groupDoc.exists) {
//     throw new Error("Group does not exist.");
//   }

//   const groupData = groupDoc.data();
//   // console.log("The groupData: " + JSON.stringify(groupData, null, 2));

//   console.log("The groupData: " + groupData.courseID);

//   const userEmail = userModel.getUserEmail();
//   const isMember = groupData.members.some((member) => member.email === userEmail);

//   if (isMember) {
//     return { status: "already_member" };
//   } else if (groupData.members.length >= groupData.preferences.groupSize.max) {
//     return { status: "group_full" };
//   } else {
//     const userName = userModel.getName();
//     const newMember = {
//       name: userName,
//       email: userEmail,
//       preferences: userPreferences,
//     };

//     await groupRef.update({
//       members: firebase.firestore.FieldValue.arrayUnion(newMember),
//     });

//     return { status: "joined" };
//   }
// };

// export default joinGroupDAO;







import { db } from "../dbConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const joinGroupDAO = async (groupId, userModel, userPreferences) => {
  const groupRef = db.collection("groups").doc(groupId);
  const groupDoc = await groupRef.get();

  if (!groupDoc.exists) {
    throw new Error("Group does not exist.");
  }

  const groupData = groupDoc.data();
  const courseId = groupData.courseID;

  const userEmail = userModel.getUserEmail();
  const groupsInCourse = await db
    .collection("groups")
    .where("courseID", "==", courseId)
    .get();

  let isAlreadyInGroup = false;
  groupsInCourse.forEach((doc) => {
    const eachGroupData = doc.data();
    const isMember = eachGroupData.members.some(
      (member) => member.email === userEmail
    );
    if (isMember) {
      isAlreadyInGroup = true;
    }
  });

  const isMember = groupData.members.some(
    (member) => member.email === userEmail
  );
  if (isMember) {
    return { status: "already_member" };
  } else if (groupData.members.length >= groupData.preferences.groupSize.max) {
    return { status: "group_full" };
  } else if (isAlreadyInGroup) {
    return { status: "already_in_group_in_course" };
  } else {
    const userName = userModel.getName();
    const newMember = {
      name: userName,
      email: userEmail,
      preferences: userPreferences,
    };

    await groupRef.update({
      members: firebase.firestore.FieldValue.arrayUnion(newMember),
    });

    return { status: "joined" };
  }
};

export default joinGroupDAO;
