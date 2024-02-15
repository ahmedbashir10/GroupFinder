import PreferencesModel from "../model/PreferencesModel";

class PreferencesPresenter {
  constructor(navigation) {
    this.navigation = navigation;
    this.model = new PreferencesModel;
  }

  loadPreferences() {
    // Load preferences and handle them if necessary
    return this.model.getPreferences();
  }

  savePreferences(location, grade, specific, minSize, maxSize) {
    
    this.model.setPreferences({ location, grade, specific, groupSize: { min: minSize, max: maxSize } });
  }

   
  handleFindMatch() {
    console.log(this.model.getPreferences())
    this.navigation.navigate('MatchResults');
  }

  goBack() {
    this.navigation.goBack();
  }
}

export default PreferencesPresenter;
