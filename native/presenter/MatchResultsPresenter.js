
import userModel from "../model/UserModel";
import createGroup from "../createGroup";
import preferencesModel from "../model/PreferencesModel"; // This should be the instance

export default class MatchResultsPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }
  
  async handleCreateGroup() {
    
      const groupId = await createGroup(userModel, preferencesModel);
      
      this.navigation.navigate("MyGroup");
  }
}
