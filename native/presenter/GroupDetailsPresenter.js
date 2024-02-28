import fetchGroupDetailsDAO from '../integration/fetchGroupDetailsDAO';

class GroupDetailsPresenter {
  constructor(view, navigation) {
    this.view = view;
    this.navigation = navigation;
  }

  async loadGroupDetails(groupId) {
    const groupDetails = await fetchGroupDetailsDAO(groupId);
    this.view.updateGroupDetails(groupDetails);
  }

  leaveGroup() {
    this.navigation.navigate('MyGroup');
  }
}

export default GroupDetailsPresenter;

