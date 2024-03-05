import preferencesModel from '../model/PreferencesModel';
import fetchGroupDetailsDAO from '../integration/fetchGroupDetailsDAO';
import joinGroupDAO from '../integration/joinGroupDAO';
import leaveGroupDAO from '../integration/leaveGroupDAO';

class GroupDetailsPresenter {
  constructor(view, navigation) {
    this.view = view;
    this.navigation = navigation;
  }

  async loadGroupDetails(groupId) {
    try {
      const groupDetails = await fetchGroupDetailsDAO(groupId);
      this.view.updateGroupDetails(groupDetails);
    } catch (error) {
      console.error("Error fetching group details:", error);
    }
  }
  
 
  async joinGroup(groupId, userModel) {
    try {
      const userPreferences = preferencesModel.getPreferences();
      await joinGroupDAO(groupId, userModel, userPreferences);
      this.view.onJoinGroupSuccess();
      this.loadGroupDetails(groupId);
      this.navigation.navigate('MyGroup');
    } catch (error) {
      console.error("Error joining group:", error);
      this.view.onJoinGroupError(error);
    }
  }

  async leaveGroup(groupId, userModel) {
    try {
      await leaveGroupDAO(groupId, userModel);
      this.view.onLeaveGroupSuccess(); 
      this.navigation.navigate('CourseID');
    } catch (error) {
      console.error("Error leaving group:", error);
      this.view.onLeaveGroupError(error); 
    }
  }

}

export default GroupDetailsPresenter;
