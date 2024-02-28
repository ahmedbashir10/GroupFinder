// import PreferencesModel from "../model/PreferencesModel";
import preferencesModel from "../model/PreferencesModel";


class PreferencesPresenter {
  constructor(navigation) {
    this.navigation = navigation;
    // this.model = new PreferencesModel;
  }

  loadPreferences() {
    // Load preferences and handle them if necessary
    return preferencesModel.getPreferences();
  }

  savePreferences(location, grade, specific, minSize, maxSize) {
    
    preferencesModel.setPreferences({ location, grade, specific, groupSize: { min: minSize, max: maxSize } });
  }

   
  handleFindMatch() {
    console.log(preferencesModel.getPreferences())
    this.navigation.navigate('MatchResults');
  }

  goBack() {
    this.navigation.goBack();
  }
}

export default PreferencesPresenter;
