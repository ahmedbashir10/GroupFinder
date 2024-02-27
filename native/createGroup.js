import db from "./dbConfig"

export default function creategroup(
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
      //console.log("Group created with ID:", groupRef.id)
      // updateCourses()
      db.collection("courses").doc(course).set(
        {
          groups: groupRef.id,
        },
        { merge: true }
      )
    }) // Use merge: true to not overwrite existing fields
    .then(() =>
      console.log(`Course ${course} updated with group ID ${groupRef.id}.`)
    )
  // updateCourses(course, groupRef, db)
}

