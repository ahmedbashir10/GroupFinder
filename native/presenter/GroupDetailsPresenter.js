import fetchGroupDetailsDAO from '../integration/fetchGroupDetailsDAO';

class GroupDetailsPresenter {
  constructor(view, navigation) {
    this.view = view;
    this.navigation = navigation;
  }

  // async loadGroupDetails(groupId) {
  //   const groupDetails = await fetchGroupDetailsDAO(groupId);
  //   this.view.updateGroupDetails(groupDetails);
  // }

  async loadGroupDetails(groupId) {
    try {
      const groupDetails = await fetchGroupDetailsDAO(groupId);
      console.log('Fetched group details:', groupDetails); // Debug log
      if (groupDetails) {
        this.view.updateGroupDetails(groupDetails);
      } else {
        console.log('No such document!'); // This could be the source of your error
      }
    } catch (error) {
      console.error('Error fetching group details:', error);
    }
  }
  leaveGroup() {
    this.navigation.navigate('MyGroup');
  }
}

export default GroupDetailsPresenter;

