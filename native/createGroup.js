import { db, auth } from "./dbConfig"

export default function createGroup(
  course,
  location,
  grade,
  minSize,
  maxSize,
  user,
  usermail,
  userinfo
) {
  const groupRef = db.collection("groups").doc()

  groupRef
    .set({
      location: location,
      grade: grade,
      minSize: minSize,
      maxSize: maxSize,
      users: [user],
      usermails: [usermail],
      userinfos: [userinfo],
    })
    .then(() => {
      const courseRef = db.collection("courses").doc(course)

      courseRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            // If it exists, update the document
            courseRef.update({
              groups: auth.FieldValue.arrayUnion(groupRef.id),
            })
          } else {
            // If it doesn't exist, set the document
            courseRef.set({
              groups: [groupRef.id],
            })
          }
        })
        .then(() => {
          console.log(
            `Course ${course} updated with new group ID ${groupRef.id}.`
          )
        })
        .catch((error) => {
          console.error("Error updating course with new group ID:", error)
        })
    })
    .catch((error) => {
      console.error("Error creating new group:", error)
    })
}
