// // joinGroupDAO.js
// import { db } from "../dbConfig";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import userModel from "../model/UserModel";

// const joinGroupDAO = async (groupId, userModel) => {
//   const groupRef = db.collection("groups").doc(groupId);
//   const userName = userModel.getName();
//   const userEmail = userModel.getUserEmail();
//   const userPreferences = userModel.getPreferences(); // Make sure this method exists in userModel

//   const newMember = {
//     name: userName,
//     email: userEmail,
//     preferences: userPreferences,
//   };

//   return groupRef.update({
//     members: firebase.firestore.FieldValue.arrayUnion(newMember)
//   });
// };

// export default joinGroupDAO;


import { db } from "../dbConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const joinGroupDAO = async (groupId, userModel, userPreferences) => {
  const groupRef = db.collection("groups").doc(groupId);
  const userName = userModel.getName();
  const userEmail = userModel.getUserEmail();

  const newMember = {
    name: userName,
    email: userEmail,
    preferences: userPreferences, 
  };

  return groupRef.update({
    members: firebase.firestore.FieldValue.arrayUnion(newMember)
  });
};

export default joinGroupDAO;
