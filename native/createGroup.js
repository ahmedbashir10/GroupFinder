// import { db, auth } from "./dbConfig"

// export default function createGroup(
//   course,
//   location,
//   grade,
//   minSize,
//   maxSize,
//   user,
//   usermail,
//   userinfo
// ) {
//   const groupRef = db.collection("groups").doc()

//   groupRef
//     .set({
//       location: location,
//       grade: grade,
//       minSize: minSize,
//       maxSize: maxSize,
//       users: [user],
//       usermails: [usermail],
//       userinfos: [userinfo],
//     })
//     .then(() => {
//       const courseRef = db.collection("courses").doc(course)

//       courseRef
//         .get()
//         .then((doc) => {
//           if (doc.exists) {
//             // If it exists, update the document
//             courseRef.update({
//               groups: auth.FieldValue.arrayUnion(groupRef.id),
//             })
//           } else {
//             // If it doesn't exist, set the document
//             courseRef.set({
//               groups: [groupRef.id],
//             })
//           }
//         })
//         .then(() => {
//           console.log(
//             `Course ${course} updated with new group ID ${groupRef.id}.`
//           )
//         })
//         .catch((error) => {
//           console.error("Error updating course with new group ID:", error)
//         })
//     })
//     .catch((error) => {
//       console.error("Error creating new group:", error)
//     })
// }




import { db } from "./dbConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const createGroup = async (userModel, preferencesModel) => {
  try {
    const name = userModel.getName();
    const email = userModel.getUserEmail();
    const courseID = userModel.getCourseID();
    const { grade, groupSize, location, specific } =
      preferencesModel.getPreferences();

    const groupData = {
      name,
      email,
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
      createdAt: new Date(),
    };

    const groupRef = await db.collection("groups").add(groupData);

    const courseRef = db.collection("courses").doc(courseID);

   
    const doc = await courseRef.get();

    if (doc.exists) {
      // If the document exists, use update() to add the group ID
      await courseRef.update({
        groups: firebase.firestore.FieldValue.arrayUnion(groupRef.id),
      });
    } else {
      // If the document does not exist, use set() to create it with the group ID
      await courseRef.set(
        {
          groups: [groupRef.id],
        },
        { merge: true }
      );
    }

    console.log("Group created with ID:", groupRef.id);
    return groupRef.id;
  } catch (error) {
    console.error("Error creating group:", error);
    throw error;
  }
};

export default createGroup;
