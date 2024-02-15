// import UserModel from "../model/UserModel";

// class WelcomePresenter {
//   constructor(navigation) {
//     this.navigation = navigation;
//     this.model = new UserModel();
//   }

//   handleNameSubmit(name) {
//     // Validate the name if necessary
//     this.model.setName(name);
//     // Navigate to the next screen if name is valid
//     this.navigation.navigate('Email');
//   }
// }

// export default WelcomePresenter;


import userModel from "../model/UserModel";

class WelcomePresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  handleNameSubmit(name) {
    userModel.setName(name);
    this.navigation.navigate('Email');
  }
}

export default WelcomePresenter;
