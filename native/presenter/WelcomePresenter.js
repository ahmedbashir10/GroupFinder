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
