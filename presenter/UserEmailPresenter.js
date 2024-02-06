// UserEmailPresenter.js

import UserModel from "../model/UserModel";

class UserEmailPresenter {
  constructor(model) {
    this.model = model;
  }

  saveUserEmail(email) {
    // You would add validation logic for the email here
    return this.model.saveUserEmail(email);
  }
}

export default UserEmailPresenter;
