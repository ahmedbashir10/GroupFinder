import PreferencesModel from '../model/PreferencesModel';

export default class PreferencesPresenter {
  constructor(view) {
    this.view = view;
    this.model = new PreferencesModel();
  }

  loadPreferences() {
    const preferences = this.model.getPreferences();
    this.view.updatePreferences(preferences);
  }

  savePreferences(preferences) {
    this.model.savePreferences(preferences);
  }
}
