// import fetchGroupDetailsDAO from '../integration/fetchGroupDetailsDAO';

// class GroupDetailsPresenter {
//   constructor(view, navigation) {
//     this.view = view;
//     this.navigation = navigation;
//   }

//   async loadGroupDetails(groupId) {
//     try {
//       const groupDetails = await fetchGroupDetailsDAO(groupId);
//       console.log('Fetched group details:', groupDetails); // Debug log
//       if (groupDetails) {
//         this.view.updateGroupDetails(groupDetails);
//       } else {
//         console.log('No such document!'); // This could be the source of your error
//       }
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   }
//   leaveGroup() {
//     this.navigation.navigate('MyGroup');
//   }
//   joinGroup() {
//     this.navigation.navigate('MyGroup');
//   }
// }

// export default GroupDetailsPresenter;





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
      this.loadGroupDetails(groupId); // Re-fetch group details after joining
      this.navigation.navigate('MyGroup');
    } catch (error) {
      console.error("Error joining group:", error);
      this.view.onJoinGroupError(error);
    }
  }

  async leaveGroup(groupId, userModel) {
    try {
      await leaveGroupDAO(groupId, userModel);
      this.view.onLeaveGroupSuccess(); // Implement this callback in your view
      this.navigation.navigate('CourseID');
    } catch (error) {
      console.error("Error leaving group:", error);
      this.view.onLeaveGroupError(error); // Implement this callback in your view
    }
  }

}

export default GroupDetailsPresenter;
