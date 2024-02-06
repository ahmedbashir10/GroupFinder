// UserModel.js
class UserModel {
    constructor() {
      this.userName = '';
      this.userEmail = '';
      this.courseID = '';
    }
  
    saveUserName(name) {
      this.userName = name;
      // Save the user name to persistent storage
    }
  
    saveUserEmail(email) {
      this.userEmail = email;
      // Save the user email to persistent storage
      // Return true for success, false for failure
      return true;
    }
  
    getUserEmail() {
      return this.userEmail;
      // Load the user email from persistent storage
    }

    saveCourseID(courseID) {
        this.courseID = courseID;
        // Save the course ID to persistent storage
        // Return true for success, false for failure
        return true;
      }

      getCourseID() {
        return this.courseID;
        // Load the course ID from persistent storage
      }
  }
  
  export default UserModel;
  