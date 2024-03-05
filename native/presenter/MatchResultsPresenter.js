
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
      this.navigation.navigate("MyGroup");
  }

  async loadMatchingGroups(courseID, callback) {
    try {
      const allGroups = await FindGroupsDAO.fetchGroupsByCourseID(courseID);
      const preferences = preferencesModel.getPreferences();
      // console.log("the preferences: " + JSON.stringify(preferences, null, 2));
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

      callback(matchingGroups); 
    } catch (error) {
      console.error("Error loading matching groups:", error);
    }
  }
}