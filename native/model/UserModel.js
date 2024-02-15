class UserModel {
  constructor() {
    this.userName = '';
    this.userEmail = '';
    this.courseID = '';
  }

  setName(name) {
    this.userName = name;
  }

  getName() {
    return this.userName;
  }

  setUserEmail(email) {
    this.userEmail = email;
    return true;
  }

  getUserEmail() {
    return this.userEmail;
  }

  setCourseID(courseID) {
    this.courseID = courseID;
    return true;
  }

  getCourseID() {
    return this.courseID;
  }
}


export default new UserModel();
