import userModel from "../model/UserModel";


class CourseIDPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  async fetchcourseIDs() {
    
    
}

  saveCourseID(courseID) {
    userModel.setCourseID(courseID);
   
    console.log("the person with name: " + userModel.getName() + ", Email: " + userModel.getUserEmail() + " and course_id: " + userModel.getCourseID() + " is saved");
    
    this.navigation.navigate('Preferences'); 
  }
}

export default CourseIDPresenter;
