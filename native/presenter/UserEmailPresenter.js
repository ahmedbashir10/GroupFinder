// UserEmailPresenter.js

import UserModel from "../model/UserModel";

class UserEmailPresenter {
  constructor(model) {
    this.model = model;
  }

  saveUserEmail(email) {
    return this.model.saveUserEmail(email);
  }
}

export default UserEmailPresenter;
