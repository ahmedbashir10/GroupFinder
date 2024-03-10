import userModel from "../model/UserModel";
import createGroupDAO from "../integration/createGroupDAO";
import preferencesModel from "../model/PreferencesModel";
import FindGroupsDAO from "../integration/FindGroupsDAO";
export default class MatchResultsPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }

  async handleCreateGroup() {
    const userEmail = userModel.getUserEmail();
    const courseID = userModel.getCourseID();

    try {
      const allGroups = await FindGroupsDAO.fetchGroupsByCourseID(courseID);

      const isAlreadyParticipating = allGroups.some(
        (group) =>
          group.email === userEmail ||
          group.members.some((member) => member.email === userEmail)
      );

      if (isAlreadyParticipating) {
        alert("You cannot create or join another group for the same course.");
      } else {
        const groupId = await createGroupDAO(userModel, preferencesModel);
        alert("You have successfully created the group.");
        this.navigation.navigate("MyGroup");
      }
    } catch (error) {
      console.error("Error while trying to create a group:", error);
    }
  }

  async loadMatchingGroups(courseID, callback) {
    try {
      const allGroups = await FindGroupsDAO.fetchGroupsByCourseID(courseID);
      const preferences = preferencesModel.getPreferences();
      let matchingGroups = [];
      let partialMatches = [];
  
      allGroups.forEach((group) => {
        const groupSize = group.members.length;
        const groupSizeMatch = groupSize >= parseInt(preferences.groupSize.min) && groupSize <= parseInt(preferences.groupSize.max);
        const gradeMatch = preferences.grade === "Flexible" || group.preferences.grade === preferences.grade;
        const locationMatch = preferences.location === "Real-life" ? group.preferences.location !== "Remote" : true;
        const specificMatch = group.preferences.specific.toLowerCase().includes(preferences.specific.toLowerCase());
  
        if (gradeMatch && locationMatch && specificMatch && groupSizeMatch) {
          matchingGroups.push(group); // Perfect match
        } else if (groupSizeMatch && (gradeMatch || locationMatch || specificMatch)) {
          group.partialMatch = true; // Partial match
          partialMatches.push(group);
        }
      });
  
      callback({ matchingGroups, partialMatches });
    } catch (error) {
      console.error("Error loading matching groups:", error);
    }
  }
  
}
