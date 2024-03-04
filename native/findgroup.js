// function joingroup(groupId, user, usermail, userinfo) {
//   const groupRef = firestore().collection("groups").doc(groupId)

//   // Use Firestore transactions to ensure atomic updates
//   firestore()
//     .runTransaction((transaction) => {
//       return transaction.get(groupRef).then((groupDoc) => {
//         if (!groupDoc.exists) {
//           throw "Document does not exist!"
//         }

//         // Get the current data to append the new user information
//         let users = groupDoc.data().users
//         let usermails = groupDoc.data().usermails
//         let userinfos = groupDoc.data().userinfos

//         // Append the new user data
//         users.push(user)
//         usermails.push(usermail)
//         userinfos.push(userinfo)

//         // Update the document with the new arrays
//         transaction.update(groupRef, {
//           users: users,
//           usermails: usermails,
//           userinfos: userinfos,
//         })
//       })
//     })
//     .then(() => console.log(`User ${user} added to group ${groupId}`))
//     .catch((error) => console.error("Failed to join group: ", error))
// }
