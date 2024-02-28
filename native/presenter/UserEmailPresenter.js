import userModel from "../model/UserModel";

class UserEmailPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  handleEmailSubmit(email) {
    const isEmailSaved = userModel.setUserEmail(email);
    if (isEmailSaved) {
      // console.log( "the name: "+ userModel.getName() +" and the Email: " + userModel.getUserEmail() + " is saved");
      this.navigation.navigate('CourseID');
    } else {
      // Handle the error case, such as showing an error message
    }
  }
}

export default UserEmailPresenter;
