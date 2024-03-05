import userModel from "../model/UserModel";

class UserEmailPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  handleEmailSubmit(email) {
    const isEmailSaved = userModel.setUserEmail(email);
    if (isEmailSaved) {
      this.navigation.navigate('CourseID');
    } 
  }
}

export default UserEmailPresenter;
