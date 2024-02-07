import UserModel from "../model/UserModel";

class UserPresenter {
  constructor(view) {
    this.view = view;
    this.model = new UserModel();
  }

  onNameSubmit(name) {
    // Validate the name if necessary
    this.model.saveUserName(name);
    this.view.showNextScreen(); 
  }
}

export default UserPresenter;
