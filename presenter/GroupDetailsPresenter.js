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

}

export default GroupDetailsPresenter;
