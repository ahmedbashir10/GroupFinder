// import UserModel from './model/UserModel';
import UserModel from "../model/UserModel";

class UserPresenter {
  constructor(view) {
    this.view = view;
    this.model = new UserModel();
  }

  onNameSubmit(name) {
    // Validate the name if necessary
    this.model.saveUserName(name);
    // Navigate to the next screen or update the view if needed
    this.view.showNextScreen(); // You would actually use navigation logic, e.g., using React Navigation
  }
}

export default UserPresenter;
