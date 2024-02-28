
import userModel from "../model/UserModel";
import createGroupDAO from "../integration/createGroupDAO";
import preferencesModel from "../model/PreferencesModel"; // This should be the instance

export default class MatchResultsPresenter {
  constructor(navigation) {
    this.navigation = navigation;
  }
  
  async handleCreateGroup() {
    
      const groupId = await createGroupDAO(userModel, preferencesModel);
      
      this.navigation.navigate("MyGroup");
  }
}
