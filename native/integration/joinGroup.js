
const joinGroup = async (groupId, userEmail) => {
    try {
      const groupRef = db.collection("groups").doc(groupId);
  
      // Add user's identifier to the members array without duplication
      await groupRef.update({
        members: firebase.firestore.FieldValue.arrayUnion(userEmail),
      });
  
      console.log(`User ${userEmail} joined group ${groupId}`);
    } catch (error) {
      console.error("Error joining group:", error);
      throw error;
    }
  };

  export default joinGroup;