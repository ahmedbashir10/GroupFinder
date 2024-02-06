import GroupDetailsModel from '../model/GroupDetailsModel';

class GroupDetailsPresenter {
  constructor(view) {
    this.view = view;
    this.model = new GroupDetailsModel();
  }

  loadGroupDetails() {
    const groupDetails = this.model.getGroupDetails();
    this.view.updateGroupDetails(groupDetails);
  }

  // Add more methods as needed for interaction logic
}

export default GroupDetailsPresenter;
