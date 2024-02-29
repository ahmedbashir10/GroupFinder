
import userModel from "../model/UserModel";
import createGroupDAO from "../integration/createGroupDAO";
import preferencesModel from "../model/PreferencesModel";
import FindGroupsDAO from "../integration/FindGroupsDAO";
export default class MatchResultsPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }
  
  async handleCreateGroup() {
    
      const groupId = await createGroupDAO(userModel, preferencesModel);
     // await this.loadMatchingGroups("IV3280");
      this.navigation.navigate("MyGroup");
  }

  async loadMatchingGroups(courseID, callback) {
    try {
      const allGroups = await FindGroupsDAO.fetchGroupsByCourseID(courseID);
      const preferences = preferencesModel.getPreferences();

      const matchingGroups = allGroups.filter(group => {
        const groupSize = group.members.length;
        return (
          (preferences.grade === "Flexible" || group.preferences.grade === preferences.grade) &&
          groupSize >= parseInt(preferences.groupSize.min) &&
          groupSize <= parseInt(preferences.groupSize.max) &&
          (preferences.location === "Real-life" ? group.preferences.location !== "Remote" : true) &&
          group.preferences.specific.toLowerCase().includes(preferences.specific.toLowerCase())
        );
      });

      callback(matchingGroups); // Invoke the callback with the matching groups
    } catch (error) {
      console.error("Error loading matching groups:", error);
    }
  }

  // async loadMatchingGroups(courseID) {
  //   try {
  //     const allGroups = await FindGroupsDAO.fetchGroupsByCourseID(courseID);
  //     console.log("All groups:", allGroups); // Log all fetched groups
  //     console.log(" "); 
  //     const preferences = preferencesModel.getPreferences();
  //     console.log("User preferences:", preferences); // Log the user's preferences

  //     // Filtering logic based on preferences
  //     const matchingGroups = allGroups.filter(group => {
  //       const groupSize = group.members.length;
  //       return (
  //         (preferences.grade === "Flexible" || group.preferences.grade === preferences.grade) &&
  //         groupSize >= parseInt(preferences.groupSize.min) &&
  //         groupSize <= parseInt(preferences.groupSize.max) &&
  //         (preferences.location === "Real-life" ? group.preferences.location !== "Remote" : true) &&
  //         group.preferences.specific.toLowerCase().includes(preferences.specific.toLowerCase())
  //       );
  //     });

  //     console.log("Matching groups:", matchingGroups); // Log the matching groups

  //     // Instead of navigating right away, you might want to update state or handle the matches
  //     // this.navigation.navigate("GroupDetails", { matchingGroups }); // Pass matchingGroups as a parameter

  //   } catch (error) {
  //     console.error("Error loading matching groups:", error);
  //   }
  // }
}