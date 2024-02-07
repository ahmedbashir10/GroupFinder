import UserModel from './UserModel'; 

class CourseIDPresenter {
  constructor(model) {
    this.model = model;
  }

  saveCourseID(courseID) {
    this.model.saveCourseID(courseID);
    // Additional logic for after saving the course ID can be added here
  }
}

export default CourseIDPresenter;
