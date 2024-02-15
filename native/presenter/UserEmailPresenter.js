// import UserModel from "../model/UserModel";

// class UserEmailPresenter {
//   constructor(navigation) {
//     this.navigation = navigation;
//     this.model = new UserModel();
//   }

//   handleEmailSubmit(email) {
//     const isEmailSaved = this.model.setUserEmail(email);
//     if (isEmailSaved) {
//       console.log( "the name: "+ this.model.getName() +" and the Email: " + this.model.getUserEmail() + " is saved");
//       // Navigate to the next screen if email is saved successfully
//       this.navigation.navigate('CourseID');
//     } else {
//       // Handle the error case, such as showing an error message
//     }
//   }
// }

// export default UserEmailPresenter;


import userModel from "../model/UserModel";

class UserEmailPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  handleEmailSubmit(email) {
    const isEmailSaved = userModel.setUserEmail(email);
    if (isEmailSaved) {
      console.log( "the name: "+ userModel.getName() +" and the Email: " + userModel.getUserEmail() + " is saved");
      this.navigation.navigate('CourseID');
    } else {
      // Handle the error case, such as showing an error message
    }
  }
}

export default UserEmailPresenter;
