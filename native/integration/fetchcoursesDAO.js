import { db } from "../dbConfig";


const fetchcourses = async () => {
  try {
    const groupRef = db.collection("courses");
    const querySnapshot = await groupRef.get(); // Use await to wait for the promise to resolve
    const courses = [];

    querySnapshot.forEach(documentSnapshot => {
      courses.push(documentSnapshot.id); // Collect document IDs
    });

    console.log("Received courses: " + courses);
    return courses; // Return the array of IDs
  } catch (error) {
    console.error("Error fetching courses:", error);
    return []; // Return an empty array in case of error
  }
};

export default fetchcourses;
