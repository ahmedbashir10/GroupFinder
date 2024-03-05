// import preferencesModel from '../model/PreferencesModel';
// import fetchGroupDetailsDAO from '../integration/fetchGroupDetailsDAO';
// import joinGroupDAO from '../integration/joinGroupDAO';
// import leaveGroupDAO from '../integration/leaveGroupDAO';

// class GroupDetailsPresenter {
//   constructor(view, navigation) {
//     this.view = view;
//     this.navigation = navigation;
//   }

//   async loadGroupDetails(groupId) {
//     try {
//       const groupDetails = await fetchGroupDetailsDAO(groupId);
//       this.view.updateGroupDetails(groupDetails);
//     } catch (error) {
//       console.error("Error fetching group details:", error);
//     }
//   }

//   async joinGroup(groupId, userModel) {
//     try {
//       const userPreferences = preferencesModel.getPreferences();
//       const result = await joinGroupDAO(groupId, userModel, userPreferences);

//       // this.view.onJoinGroupSuccess();
//       // this.loadGroupDetails(groupId);
//       // this.navigation.navigate('MyGroup');

//       console.log(result.status);
//       if (result.status === 'already_member') {

//         this.view.onAlreadyMember(); // Implement this method in your view to show a message
//       } else if (result.status === 'joined') {
//         this.view.onJoinGroupSuccess();
//         this.loadGroupDetails(groupId);
//         this.navigation.navigate('MyGroup');
//       }

//     } catch (error) {
//       console.error("Error joining group:", error);
//       this.view.onJoinGroupError(error);
//     }
//   }

//   async leaveGroup(groupId, userModel) {
//     try {
//       await leaveGroupDAO(groupId, userModel);
//       this.view.onLeaveGroupSuccess();
//       this.navigation.navigate('CourseID');
//     } catch (error) {
//       console.error("Error leaving group:", error);
//       this.view.onLeaveGroupError(error);
//     }
//   }

// }

// export default GroupDetailsPresenter;



import preferencesModel from "../model/PreferencesModel";
import fetchGroupDetailsDAO from "../integration/fetchGroupDetailsDAO";
import joinGroupDAO from "../integration/joinGroupDAO";
import leaveGroupDAO from "../integration/leaveGroupDAO";

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
      const result = await joinGroupDAO(groupId, userModel, userPreferences);

      switch (result.status) {
        case "already_member":
          this.view.onAlreadyMember();
          break;
        case "group_full":
          this.view.onGroupFull(); 
          break;
        case "joined":
          this.view.onJoinGroupSuccess();
          this.loadGroupDetails(groupId);
          this.navigation.navigate("MyGroup");
          break;
        default:
          throw new Error("Unhandled join group status.");
      }
    } catch (error) {
      console.error("Error joining group:", error);
      this.view.onJoinGroupError(error);
    }
  }

  async leaveGroup(groupId, userModel) {
    try {
      await leaveGroupDAO(groupId, userModel);
      this.view.onLeaveGroupSuccess();
      this.navigation.navigate("CourseID");
    } catch (error) {
      console.error("Error leaving group:", error);
      this.view.onLeaveGroupError(error);
    }
  }
}

export default GroupDetailsPresenter;
