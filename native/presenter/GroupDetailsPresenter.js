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
  
  // async joinGroup(groupId, userModel) {
  //   try {
  //     const userPreferences = preferencesModel.getPreferences();
  //     await joinGroupDAO(groupId, userModel, userPreferences);
  //     this.view.onJoinGroupSuccess(); // Make sure this method exists in the view
  //   } catch (error) {
  //     console.error("Error joining group:", error);
  //     this.view.onJoinGroupError(error); // Make sure this method exists in the view
  //   }
  // }

  async joinGroup(groupId, userModel) {
    try {
      const userPreferences = preferencesModel.getPreferences();
      await joinGroupDAO(groupId, userModel, userPreferences);
      this.view.onJoinGroupSuccess();
      this.loadGroupDetails(groupId); // Re-fetch group details after joining
    } catch (error) {
      console.error("Error joining group:", error);
      this.view.onJoinGroupError(error);
    }
  }
}

export default GroupDetailsPresenter;
